import Cocoa
import WebKit

class AppDelegate: NSObject, NSApplicationDelegate, WKUIDelegate, WKNavigationDelegate {
    var window: NSWindow!
    var webView: WKWebView!
    let serverURL = URL(string: "http://localhost:3456")!

    func applicationDidFinishLaunching(_ notification: Notification) {
        let screenFrame = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1400, height: 900)
        let winW: CGFloat = min(1360, screenFrame.width * 0.92)
        let winH: CGFloat = min(880, screenFrame.height * 0.90)
        let winX = screenFrame.origin.x + (screenFrame.width - winW) / 2
        let winY = screenFrame.origin.y + (screenFrame.height - winH) / 2

        let rect = NSRect(x: winX, y: winY, width: winW, height: winH)
        window = NSWindow(
            contentRect: rect,
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = "LinguaWall • Sổ Tay Giao Tiếp Đức – Anh – Việt (macOS & Kindle PW5)"
        window.backgroundColor = NSColor(calibratedRed: 0.886, green: 0.859, blue: 0.816, alpha: 1.0)
        window.minSize = NSSize(width: 900, height: 640)

        let config = WKWebViewConfiguration()
        webView = WKWebView(frame: window.contentView!.bounds, configuration: config)
        webView.autoresizingMask = [.width, .height]
        webView.uiDelegate = self
        webView.navigationDelegate = self

        window.contentView?.addSubview(webView)
        window.makeKeyAndOrderFront(nil)
        NSApp.activate(ignoringOtherApps: true)

        setupMainMenu()
        loadDashboardWithRetry(attempts: 8)
    }

    func loadDashboardWithRetry(attempts: Int) {
        let checkURL = URL(string: "http://localhost:3456/api/state")!
        let task = URLSession.shared.dataTask(with: checkURL) { [weak self] _, response, error in
            guard let self = self else { return }
            if let httpRes = response as? HTTPURLResponse, httpRes.statusCode == 200 {
                DispatchQueue.main.async {
                    self.webView.load(URLRequest(url: self.serverURL))
                }
            } else if attempts > 0 {
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.6) {
                    self.loadDashboardWithRetry(attempts: attempts - 1)
                }
            }
        }
        task.resume()
    }

    // Handle target="_blank" or external/download links
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let url = navigationAction.request.url {
            NSWorkspace.shared.open(url)
        }
        return nil
    }

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if let url = navigationAction.request.url, url.path.hasSuffix(".sh") {
            NSWorkspace.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }

    // Support JS alert()
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let alert = NSAlert()
        alert.messageText = "LinguaWall"
        alert.informativeText = message
        alert.addButton(withTitle: "Đóng")
        alert.runModal()
        completionHandler()
    }

    // Auto-grant Microphone capture permission for Shadowing & Roleplay Coach inside WKWebView
    @available(macOS 12.0, *)
    func webView(_ webView: WKWebView, requestMediaCapturePermissionFor origin: WKSecurityOrigin, initiatedByFrame frame: WKFrameInfo, type: WKMediaCaptureType, decisionHandler: @escaping (WKPermissionDecision) -> Void) {
        decisionHandler(.grant)
    }

    func setupMainMenu() {
        let mainMenu = NSMenu()

        // App Menu
        let appMenuItem = NSMenuItem()
        mainMenu.addItem(appMenuItem)
        let appMenu = NSMenu()
        appMenu.addItem(withTitle: "Tải lại trang (Reload)", action: #selector(reloadPage), keyEquivalent: "r")
        appMenu.addItem(NSMenuItem.separator())
        appMenu.addItem(withTitle: "Ẩn LinguaWall", action: #selector(NSApplication.hide(_:)), keyEquivalent: "h")
        appMenu.addItem(withTitle: "Đóng cửa sổ (Vẫn chạy ngầm đổi hình nền 30p)", action: #selector(closeWindow), keyEquivalent: "w")
        appMenu.addItem(withTitle: "Thoát cửa sổ ứng dụng", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
        appMenuItem.submenu = appMenu

        // Edit Menu (for Copy/Paste in AI input fields)
        let editMenuItem = NSMenuItem()
        mainMenu.addItem(editMenuItem)
        let editMenu = NSMenu(title: "Edit")
        editMenu.addItem(withTitle: "Cut", action: #selector(NSText.cut(_:)), keyEquivalent: "x")
        editMenu.addItem(withTitle: "Copy", action: #selector(NSText.copy(_:)), keyEquivalent: "c")
        editMenu.addItem(withTitle: "Paste", action: #selector(NSText.paste(_:)), keyEquivalent: "v")
        editMenu.addItem(withTitle: "Select All", action: #selector(NSText.selectAll(_:)), keyEquivalent: "a")
        editMenuItem.submenu = editMenu

        NSApp.mainMenu = mainMenu
    }

    @objc func reloadPage() {
        webView.reload()
    }

    @objc func closeWindow() {
        window.close()
    }

    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool {
        if !flag {
            window.makeKeyAndOrderFront(nil)
        }
        return true
    }
}

let app = NSApplication.shared
app.setActivationPolicy(.regular)
let delegate = AppDelegate()
app.delegate = delegate
app.run()
