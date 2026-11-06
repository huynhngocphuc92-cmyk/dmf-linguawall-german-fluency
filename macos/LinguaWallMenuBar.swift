import Cocoa
import WebKit
import Foundation
import Carbon

struct SentenceReply: Codable {
    let de: String
    let en: String
    let vi: String
}

struct SentenceItem: Codable {
    let id: String
    let level: String
    let categoryLabel: String?
    let de: String
    let en: String
    let vi: String
    let reply: SentenceReply?
}

struct SrsStatsPayload: Codable {
    let dueNowCount: Int?
    let learningCount: Int?
    let masteredCount: Int?
}

struct RadioStatusPayload: Codable {
    let active: Bool?
    let step: Int?
    let stepLabel: String?
}

struct AppStateInner: Codable {
    let activeRecallMode: Bool?
}

struct APIStateResponse: Codable {
    let currentSentence: SentenceItem
    let srsStats: SrsStatsPayload?
    let radioStatus: RadioStatusPayload?
    let state: AppStateInner?
}

// Custom borderless/floating panel that can become key window for typing in Spotlight input
class SpotlightPanel: NSPanel {
    override var canBecomeKey: Bool { return true }
    override var canBecomeMain: Bool { return true }
}

private var sharedMenuBarDelegate: AppDelegate?

private func carbonHotKeyHandler(nextHandler: EventHandlerCallRef?, theEvent: EventRef?, userData: UnsafeMutableRawPointer?) -> OSStatus {
    DispatchQueue.main.async {
        sharedMenuBarDelegate?.toggleSpotlightWindow()
    }
    return noErr
}

class AppDelegate: NSObject, NSApplicationDelegate, WKUIDelegate {
    var statusItem: NSStatusItem!
    var currentSentence: SentenceItem?
    var srsStats: SrsStatsPayload?
    var radioActive: Bool = false
    var activeRecallMode: Bool = false
    var timer: Timer?
    var desktopWindows: [NSWindow] = []
    var desktopWebViews: [WKWebView] = []
    var lastScreenSignature: String = ""
    var liveVectorWallpaperEnabled: Bool = true
    var spotlightPanel: SpotlightPanel?
    var spotlightWebView: WKWebView?
    var hotKeyRef: EventHotKeyRef?
    let serverBase = "http://localhost:3456"

    func applicationDidFinishLaunching(_ notification: Notification) {
        sharedMenuBarDelegate = self

        statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.variableLength)
        if let button = statusItem.button {
            button.title = "🇩🇪 Lingua"
            button.toolTip = "LinguaWall: Học giao tiếp Đức - Anh - Việt (Phím tắt toàn cục: ⌥Space)"
        }

        registerGlobalHotKeyOptionSpace()
        setupDesktopVectorWindows()
        rebuildMenu()
        fetchCurrentState()

        NotificationCenter.default.addObserver(
            self,
            selector: #selector(screensDidChange),
            name: NSApplication.didChangeScreenParametersNotification,
            object: nil
        )

        timer = Timer.scheduledTimer(withTimeInterval: 10.0, repeats: true) { [weak self] _ in
            self?.fetchCurrentState()
        }
    }

    // Register global hotkey: Option + Space (⌥Space) across all macOS apps
    func registerGlobalHotKeyOptionSpace() {
        var eventType = EventTypeSpec(
            eventClass: OSType(kEventClassKeyboard),
            eventKind: UInt32(kEventHotKeyPressed)
        )
        InstallEventHandler(
            GetApplicationEventTarget(),
            carbonHotKeyHandler,
            1,
            &eventType,
            nil,
            nil
        )

        let hotKeyID = EventHotKeyID(signature: OSType(0x4C57414C), id: 1) // 'LWAL'
        let keyCode = UInt32(kVK_Space) // 49
        let modifiers = UInt32(optionKey)
        RegisterEventHotKey(
            keyCode,
            modifiers,
            hotKeyID,
            GetApplicationEventTarget(),
            0,
            &hotKeyRef
        )
    }

    @objc func toggleSpotlightWindow() {
        if let panel = spotlightPanel, panel.isVisible {
            panel.orderOut(nil)
            return
        }
        showSpotlightWindow()
    }

    func showSpotlightWindow() {
        let screenFrame = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
        let panelW: CGFloat = min(780, screenFrame.width * 0.90)
        let panelH: CGFloat = min(540, screenFrame.height * 0.78)
        let panelX = screenFrame.origin.x + (screenFrame.width - panelW) / 2
        let panelY = screenFrame.origin.y + (screenFrame.height - panelH) * 0.62

        if spotlightPanel == nil {
            let rect = NSRect(x: panelX, y: panelY, width: panelW, height: panelH)
            let panel = SpotlightPanel(
                contentRect: rect,
                styleMask: [.titled, .closable, .fullSizeContentView, .nonactivatingPanel],
                backing: .buffered,
                defer: false
            )
            panel.title = "LinguaWall Spotlight • Tra Nhanh & Phản Xạ Tức Thì (⌥Space)"
            panel.titleVisibility = .hidden
            panel.titlebarAppearsTransparent = true
            panel.isFloatingPanel = true
            panel.level = .floating
            panel.collectionBehavior = [.canJoinAllSpaces, .fullScreenAuxiliary]
            panel.backgroundColor = NSColor(calibratedRed: 0.969, green: 0.953, blue: 0.918, alpha: 1.0)
            panel.hasShadow = true

            let config = WKWebViewConfiguration()
            let wv = WKWebView(frame: panel.contentView!.bounds, configuration: config)
            wv.autoresizingMask = [.width, .height]
            wv.uiDelegate = self
            if let url = URL(string: "\(serverBase)/?spotlight=1") {
                wv.load(URLRequest(url: url))
            }
            panel.contentView?.addSubview(wv)
            spotlightPanel = panel
            spotlightWebView = wv
        } else if let panel = spotlightPanel {
            panel.setFrame(NSRect(x: panelX, y: panelY, width: panelW, height: panelH), display: true)
        }

        NSApp.activate(ignoringOtherApps: true)
        spotlightPanel?.makeKeyAndOrderFront(nil)
        spotlightWebView?.evaluateJavaScript("if (typeof openSpotlightModal === 'function') openSpotlightModal();", completionHandler: nil)
    }

    func webViewDidClose(_ webView: WKWebView) {
        if webView == spotlightWebView {
            spotlightPanel?.orderOut(nil)
        }
    }

    func currentScreensSignature() -> String {
        return NSScreen.screens.map { "\($0.frame.origin.x),\($0.frame.origin.y),\($0.frame.size.width),\($0.frame.size.height)" }.joined(separator: "|")
    }

    @objc func screensDidChange() {
        let sig = currentScreensSignature()
        guard sig != lastScreenSignature else { return }
        setupDesktopVectorWindows()
    }

    func setupDesktopVectorWindows() {
        lastScreenSignature = currentScreensSignature()
        for win in desktopWindows {
            win.orderOut(nil)
        }
        desktopWindows.removeAll()
        desktopWebViews.removeAll()

        guard liveVectorWallpaperEnabled else { return }

        let desktopLevel = Int(CGWindowLevelForKey(.desktopIconWindow)) - 1

        for screen in NSScreen.screens {
            let win = NSWindow(
                contentRect: screen.frame,
                styleMask: [.borderless],
                backing: .buffered,
                defer: false,
                screen: screen
            )
            win.level = NSWindow.Level(rawValue: desktopLevel)
            win.collectionBehavior = [.canJoinAllSpaces, .stationary, .ignoresCycle, .fullScreenAuxiliary]
            win.ignoresMouseEvents = true
            win.isOpaque = true
            win.hasShadow = false
            win.backgroundColor = NSColor(calibratedRed: 0.886, green: 0.859, blue: 0.816, alpha: 1.0)

            let config = WKWebViewConfiguration()
            let webView = WKWebView(frame: NSRect(origin: .zero, size: screen.frame.size), configuration: config)
            webView.autoresizingMask = [.width, .height]

            if let url = URL(string: "\(serverBase)/desktop-wallpaper") {
                webView.load(URLRequest(url: url))
            }

            win.contentView = webView
            win.orderFrontRegardless()

            desktopWindows.append(win)
            desktopWebViews.append(webView)
        }
    }

    func reloadDesktopWebViews() {
        for wv in desktopWebViews {
            if wv.url == nil, let url = URL(string: "\(serverBase)/desktop-wallpaper") {
                wv.load(URLRequest(url: url))
            } else {
                wv.evaluateJavaScript("if (typeof syncWallpaperState === 'function') syncWallpaperState();", completionHandler: nil)
            }
        }
    }

    func fetchCurrentState() {
        guard let url = URL(string: "\(serverBase)/api/state") else { return }
        let task = URLSession.shared.dataTask(with: url) { [weak self] data, _, error in
            guard let self = self, let data = data, error == nil else { return }
            if let decoded = try? JSONDecoder().decode(APIStateResponse.self, from: data) {
                DispatchQueue.main.async {
                    let prevId = self.currentSentence?.id
                    let prevRecall = self.activeRecallMode
                    self.currentSentence = decoded.currentSentence
                    self.srsStats = decoded.srsStats
                    self.radioActive = decoded.radioStatus?.active ?? false
                    self.activeRecallMode = decoded.state?.activeRecallMode ?? false

                    if let btn = self.statusItem.button {
                        let radioIcon = self.radioActive ? "📻 " : "🇩🇪 "
                        btn.title = "\(radioIcon)\(decoded.currentSentence.level)"
                    }
                    self.rebuildMenu()
                    if prevId != decoded.currentSentence.id || prevRecall != self.activeRecallMode {
                        self.reloadDesktopWebViews()
                    }
                }
            }
        }
        task.resume()
    }

    func rebuildMenu() {
        let menu = NSMenu()

        // Feature 4: Spotlight Quick-Lookup at the very top
        let spotlightItem = NSMenuItem(
            title: "🔍 Tra Nhanh & Luyện Phản Xạ Tức Thì (⌥Space)",
            action: #selector(toggleSpotlightWindow),
            keyEquivalent: " "
        )
        spotlightItem.keyEquivalentModifierMask = [.option]
        spotlightItem.target = self
        menu.addItem(spotlightItem)

        menu.addItem(NSMenuItem.separator())

        if let s = currentSentence {
            let dueCount = srsStats?.dueNowCount ?? 0
            let headerTitle = dueCount > 0
                ? "[\(s.level)] \(s.categoryLabel ?? "Giao tiếp") • 🧠 \(dueCount) câu cần ôn"
                : "[\(s.level)] \(s.categoryLabel ?? "Giao tiếp")"
            let headerItem = NSMenuItem(title: headerTitle, action: nil, keyEquivalent: "")
            headerItem.isEnabled = false
            menu.addItem(headerItem)

            let deItem = NSMenuItem(title: "🇩🇪 \(s.de)", action: #selector(speakGermanNormal), keyEquivalent: "d")
            deItem.target = self
            menu.addItem(deItem)

            let enItem = NSMenuItem(title: "🇬🇧 \(s.en)", action: #selector(speakEnglish), keyEquivalent: "e")
            enItem.target = self
            menu.addItem(enItem)

            let viItem = NSMenuItem(title: "🇻🇳 \(s.vi)", action: nil, keyEquivalent: "")
            viItem.isEnabled = false
            menu.addItem(viItem)

            menu.addItem(NSMenuItem.separator())

            let speakDeBtn = NSMenuItem(title: "🔊 Nghe Tiếng Đức Bản Xứ (Seraphina Neural HD)", action: #selector(speakGermanNormal), keyEquivalent: "1")
            speakDeBtn.target = self
            menu.addItem(speakDeBtn)

            let speakDeSlowBtn = NSMenuItem(title: "🐢 Nghe Tiếng Đức Chậm Rõ Âm (0.80x Neural)", action: #selector(speakGermanSlow), keyEquivalent: "2")
            speakDeSlowBtn.target = self
            menu.addItem(speakDeSlowBtn)

            let speakDialogueBtn = NSMenuItem(title: "🎭 Nghe Đối Thoại 2 Chiều (Nam & Nữ Bản Xứ)", action: #selector(speakDialogue), keyEquivalent: "3")
            speakDialogueBtn.target = self
            menu.addItem(speakDialogueBtn)

            let speakEnBtn = NSMenuItem(title: "🔊 Nghe Tiếng Anh Bản Xứ (Ava Neural HD)", action: #selector(speakEnglish), keyEquivalent: "4")
            speakEnBtn.target = self
            menu.addItem(speakEnBtn)

            menu.addItem(NSMenuItem.separator())

            // Feature 2: 1-Click SRS Grading right from Menu Bar
            let srsAgainItem = NSMenuItem(title: "🔥 Chấm SRS: Chưa nhớ (Hẹn 2 giờ & Lật trang)", action: #selector(srsRateAgain), keyEquivalent: "")
            srsAgainItem.target = self
            menu.addItem(srsAgainItem)

            let srsGoodItem = NSMenuItem(title: "🤔 Chấm SRS: Tạm nhớ (Hẹn 3 ngày & Lật trang)", action: #selector(srsRateGood), keyEquivalent: "")
            srsGoodItem.target = self
            menu.addItem(srsGoodItem)

            let srsEasyItem = NSMenuItem(title: "⚡ Chấm SRS: Phản xạ ngay (Hẹn 14+ ngày & Lật trang)", action: #selector(srsRateEasy), keyEquivalent: "")
            srsEasyItem.target = self
            menu.addItem(srsEasyItem)
        } else {
            let loadingItem = NSMenuItem(title: "Đang kết nối LinguaWall Server...", action: nil, keyEquivalent: "")
            loadingItem.isEnabled = false
            menu.addItem(loadingItem)
        }

        menu.addItem(NSMenuItem.separator())

        // Feature 3: Pimsleur 4-Step Radio Mode Toggle
        let radioTitle = radioActive
            ? "⏹️ Dừng Đài Radio Phản Xạ Pimsleur (Đang phát...)"
            : "📻 Bật Đài Radio Phản Xạ (Pimsleur 4 Bước Tự Động)"
        let radioItem = NSMenuItem(title: radioTitle, action: #selector(toggleRadioMode), keyEquivalent: "r")
        radioItem.state = radioActive ? .on : .off
        radioItem.target = self
        menu.addItem(radioItem)

        // Feature 2b: Active Recall Mode Toggle
        let recallItem = NSMenuItem(
            title: "🙈 Chế độ Ẩn Chữ Thử Phản Xạ (Active Recall 8p đầu)",
            action: #selector(toggleActiveRecall),
            keyEquivalent: "a"
        )
        recallItem.state = activeRecallMode ? .on : .off
        recallItem.target = self
        menu.addItem(recallItem)

        let rotateItem = NSMenuItem(title: "⏭️ Lật trang mới & Cập nhật Hình nền ngay", action: #selector(rotateNow), keyEquivalent: "n")
        rotateItem.target = self
        menu.addItem(rotateItem)

        let vectorToggleItem = NSMenuItem(
            title: "✨ Chế độ Hình nền Vector Retina Siêu Nét (100% Native)",
            action: #selector(toggleVectorWallpaper),
            keyEquivalent: "v"
        )
        vectorToggleItem.state = liveVectorWallpaperEnabled ? .on : .off
        vectorToggleItem.target = self
        menu.addItem(vectorToggleItem)

        let openAppItem = NSMenuItem(title: "📖 Mở Sổ tay LinguaWall (Luyện Nói & Chấm Điểm)", action: #selector(openDashboard), keyEquivalent: "o")
        openAppItem.target = self
        menu.addItem(openAppItem)

        let openKindleItem = NSMenuItem(title: "📱 Xem Giao diện Kindle Paperwhite 5", action: #selector(openKindleView), keyEquivalent: "k")
        openKindleItem.target = self
        menu.addItem(openKindleItem)

        menu.addItem(NSMenuItem.separator())

        let quitItem = NSMenuItem(title: "Thoát thanh Menu Bar", action: #selector(quitApp), keyEquivalent: "q")
        quitItem.target = self
        menu.addItem(quitItem)

        statusItem.menu = menu
    }

    @objc func toggleVectorWallpaper() {
        liveVectorWallpaperEnabled.toggle()
        setupDesktopVectorWindows()
        rebuildMenu()
    }

    func postJSONRequest(path: String, payload: [String: Any], completion: (() -> Void)? = nil) {
        guard let url = URL(string: "\(serverBase)\(path)") else { return }
        var req = URLRequest(url: url)
        req.httpMethod = "POST"
        req.setValue("application/json", forHTTPHeaderField: "Content-Type")
        req.httpBody = try? JSONSerialization.data(withJSONObject: payload)
        URLSession.shared.dataTask(with: req) { [weak self] _, _, _ in
            self?.fetchCurrentState()
            DispatchQueue.main.async {
                completion?()
            }
        }.resume()
    }

    @objc func speakGermanNormal() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/speak", payload: ["text": s.de, "lang": "de", "speed": "normal", "role": "main"])
    }

    @objc func speakGermanSlow() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/speak", payload: ["text": s.de, "lang": "de", "speed": "slow", "role": "main"])
    }

    @objc func speakDialogue() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/speak", payload: [
            "mode": "dialogue",
            "mainText": s.de,
            "replyText": s.reply?.de ?? "",
            "lang": "de",
            "speed": "normal"
        ])
    }

    @objc func speakEnglish() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/speak", payload: ["text": s.en, "lang": "en", "speed": "normal", "role": "main"])
    }

    @objc func srsRateAgain() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/srs-review", payload: ["id": s.id, "rating": "again", "autoRotate": true]) { [weak self] in
            self?.reloadDesktopWebViews()
        }
    }

    @objc func srsRateGood() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/srs-review", payload: ["id": s.id, "rating": "good", "autoRotate": true]) { [weak self] in
            self?.reloadDesktopWebViews()
        }
    }

    @objc func srsRateEasy() {
        guard let s = currentSentence else { return }
        postJSONRequest(path: "/api/srs-review", payload: ["id": s.id, "rating": "easy", "autoRotate": true]) { [weak self] in
            self?.reloadDesktopWebViews()
        }
    }

    @objc func toggleRadioMode() {
        postJSONRequest(path: "/api/radio", payload: ["action": "toggle"])
    }

    @objc func toggleActiveRecall() {
        let nextVal = !activeRecallMode
        postJSONRequest(path: "/api/settings", payload: ["activeRecallMode": nextVal]) { [weak self] in
            self?.reloadDesktopWebViews()
        }
    }

    @objc func rotateNow() {
        postJSONRequest(path: "/api/rotate", payload: ["applyWallpaper": true]) { [weak self] in
            self?.reloadDesktopWebViews()
        }
    }

    @objc func openDashboard() {
        let appURL = URL(fileURLWithPath: "/Applications/LinguaWall.app")
        if FileManager.default.fileExists(atPath: appURL.path) {
            NSWorkspace.shared.open(appURL)
        } else if let url = URL(string: serverBase) {
            NSWorkspace.shared.open(url)
        }
    }

    @objc func openKindleView() {
        if let url = URL(string: "\(serverBase)/kindle") {
            NSWorkspace.shared.open(url)
        }
    }

    @objc func quitApp() {
        NSApplication.shared.terminate(nil)
    }
}

let app = NSApplication.shared
app.setActivationPolicy(.accessory)
let delegate = AppDelegate()
app.delegate = delegate
app.run()
