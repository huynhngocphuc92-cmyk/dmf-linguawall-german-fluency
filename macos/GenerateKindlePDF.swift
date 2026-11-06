import Cocoa
import CoreText
import CoreGraphics
import Foundation

struct SentenceRegister: Codable {
    let du: String
    let sie: String
}

struct SentenceReply: Codable {
    let de: String
    let en: String
    let vi: String
}

struct SentenceItem: Codable {
    let id: String
    let level: String
    let category: String
    let categoryLabel: String?
    let frequency: String?
    let context: String
    let de: String
    let de_phonetic: String?
    let de_register: SentenceRegister?
    let en: String
    let vi: String
    let reply: SentenceReply?
    let tip: String?
}

let args = CommandLine.arguments
guard args.count >= 4 else {
    fputs("Usage: generate-kindle-pdf <sentences.json> <output.pdf> <kindle-url>\n", stderr)
    exit(1)
}

let sentencesPath = args[1]
let outputPath = args[2]
let kindleURLString = args[3]

let jsonData = try Data(contentsOf: URL(fileURLWithPath: sentencesPath))
let sentences = try JSONDecoder().decode([SentenceItem].self, from: jsonData)

let pageWidth: CGFloat = 618.0
let pageHeight: CGFloat = 824.0
var mediaBox = CGRect(x: 0, y: 0, width: pageWidth, height: pageHeight)

let outputURL = URL(fileURLWithPath: outputPath)
guard let pdfContext = CGContext(outputURL as CFURL, mediaBox: &mediaBox, nil) else {
    fputs("Failed to create PDF context\n", stderr)
    exit(1)
}

func font(_ name: String, size: CGFloat, bold: Bool = false, italic: Bool = false) -> NSFont {
    var traits: NSFontTraitMask = []
    if bold { traits.insert(.boldFontMask) }
    if italic { traits.insert(.italicFontMask) }
    let fm = NSFontManager.shared
    if let f = fm.font(withFamily: name, traits: traits, weight: bold ? 9 : 5, size: size) {
        return f
    }
    return bold ? NSFont.boldSystemFont(ofSize: size) : NSFont.systemFont(ofSize: size)
}

// Helper to draw top-left flipped text inside NSGraphicsContext
@discardableResult
func drawTextBlock(
    _ text: String,
    x: CGFloat,
    y: CGFloat,
    width: CGFloat,
    font: NSFont,
    color: NSColor = .black,
    lineSpacing: CGFloat = 3.0,
    alignment: NSTextAlignment = .left
) -> CGFloat {
    let style = NSMutableParagraphStyle()
    style.lineSpacing = lineSpacing
    style.alignment = alignment
    let attrs: [NSAttributedString.Key: Any] = [
        .font: font,
        .foregroundColor: color,
        .paragraphStyle: style
    ]
    let attrStr = NSAttributedString(string: text, attributes: attrs)
    let bounding = attrStr.boundingRect(
        with: NSSize(width: width, height: 2000),
        options: [.usesLineFragmentOrigin, .usesFontLeading]
    )
    let h = ceil(bounding.height)
    attrStr.draw(with: NSRect(x: x, y: y, width: width, height: h), options: [.usesLineFragmentOrigin, .usesFontLeading])
    return y + h
}

func measureTextHeight(_ text: String, width: CGFloat, font: NSFont, lineSpacing: CGFloat = 3.0) -> CGFloat {
    let style = NSMutableParagraphStyle()
    style.lineSpacing = lineSpacing
    let attrs: [NSAttributedString.Key: Any] = [
        .font: font,
        .paragraphStyle: style
    ]
    let attrStr = NSAttributedString(string: text, attributes: attrs)
    let bounding = attrStr.boundingRect(
        with: NSSize(width: width, height: 2000),
        options: [.usesLineFragmentOrigin, .usesFontLeading]
    )
    return ceil(bounding.height)
}

func beginFlippedPage() {
    pdfContext.beginPDFPage(nil)
    pdfContext.saveGState()
    // Flip coordinate system so (0,0) is top-left
    pdfContext.translateBy(x: 0, y: pageHeight)
    pdfContext.scaleBy(x: 1.0, y: -1.0)
    let nsCtx = NSGraphicsContext(cgContext: pdfContext, flipped: true)
    NSGraphicsContext.current = nsCtx

    // White background + Double Book Frame
    NSColor.white.setFill()
    NSBezierPath.fill(NSRect(x: 0, y: 0, width: pageWidth, height: pageHeight))

    NSColor.black.setStroke()
    let outerPath = NSBezierPath(rect: NSRect(x: 16, y: 16, width: pageWidth - 32, height: pageHeight - 32))
    outerPath.lineWidth = 2.5
    outerPath.stroke()

    NSColor(calibratedWhite: 0.25, alpha: 1.0).setStroke()
    let innerPath = NSBezierPath(rect: NSRect(x: 21, y: 21, width: pageWidth - 42, height: pageHeight - 42))
    innerPath.lineWidth = 0.8
    innerPath.stroke()
}

func endFlippedPage() {
    NSGraphicsContext.current = nil
    pdfContext.restoreGState()
    pdfContext.endPDFPage()
}

// ============================================================================
// PAGE 1: COVER & 1-TAP LIVE KIOSK LAUNCHER FOR KINDLE PAPERWHITE 5
// ============================================================================
beginFlippedPage()

let padX: CGFloat = 42.0
let contentW: CGFloat = pageWidth - padX * 2
var curY: CGFloat = 48.0

// Top Stamp
NSColor.black.setFill()
NSBezierPath.fill(NSRect(x: padX, y: curY, width: contentW, height: 34))
drawTextBlock(
    "LINGUAWALL • ẤN BẢN DÀNH RIÊNG CHO KINDLE PAPERWHITE 5",
    x: padX,
    y: curY + 8,
    width: contentW,
    font: font("Arial", size: 12, bold: true),
    color: .white,
    alignment: .center
)
curY += 54

curY = drawTextBlock(
    "Sổ Tay Giao Tiếp\nĐức – Anh – Việt",
    x: padX,
    y: curY,
    width: contentW,
    font: font("Times New Roman", size: 36, bold: true),
    color: .black,
    lineSpacing: 4,
    alignment: .center
)
curY += 10

curY = drawTextBlock(
    "Tuyển tập các mẫu câu hội thoại thực tế phổ biến nhất ngoài đời thực (A1 → C1)",
    x: padX,
    y: curY,
    width: contentW,
    font: font("Times New Roman", size: 15, italic: true),
    color: NSColor(calibratedWhite: 0.15, alpha: 1.0),
    alignment: .center
)
curY += 22

// Double Rule
NSColor.black.setFill()
NSBezierPath.fill(NSRect(x: padX, y: curY, width: contentW, height: 2.5))
NSBezierPath.fill(NSRect(x: padX, y: curY + 5, width: contentW, height: 0.8))
curY += 24

// Box 1: Live 30-Minute Kiosk Mode
let box1Y = curY
let box1H: CGFloat = 235.0
NSColor(calibratedWhite: 0.95, alpha: 1.0).setFill()
NSBezierPath.fill(NSRect(x: padX, y: box1Y, width: contentW, height: box1H))
NSColor.black.setStroke()
let b1Path = NSBezierPath(rect: NSRect(x: padX, y: box1Y, width: contentW, height: box1H))
b1Path.lineWidth = 2.0
b1Path.stroke()

var b1CurY = box1Y + 14
b1CurY = drawTextBlock(
    "CHẾ ĐỘ 1: KHUNG TRANH E-INK TỰ ĐỘNG XOAY VÒNG (ĐỒNG BỘ WI-FI VỚI MAC)",
    x: padX + 18,
    y: b1CurY,
    width: contentW - 36,
    font: font("Arial", size: 13, bold: true)
)
b1CurY += 8

b1CurY = drawTextBlock(
    "• Giữ màn hình luôn sáng: Tại màn hình chính Kindle, chạm kính lúp Tìm kiếm (Search), gõ  ~ds  rồi nhấn Enter.\n• Bấm nút bên dưới (hoặc mở Trình duyệt Web trên Kindle vào địa chỉ Wi-Fi nội bộ) để bật chế độ tự xoay vòng:",
    x: padX + 18,
    y: b1CurY,
    width: contentW - 36,
    font: font("Times New Roman", size: 13.5, bold: true),
    lineSpacing: 3
)
b1CurY += 14

// Clickable Button
let btnX = padX + 24
let btnY = b1CurY
let btnW = contentW - 48
let btnH: CGFloat = 56.0

NSColor.black.setFill()
NSBezierPath.fill(NSRect(x: btnX, y: btnY, width: btnW, height: btnH))

drawTextBlock(
    "☞ CHẠM ĐỂ MỞ KHUNG TRANH TỰ XOAY VÒNG (KHÔNG CHỚP MÀN HÌNH)",
    x: btnX + 8,
    y: btnY + 11,
    width: btnW - 16,
    font: font("Arial", size: 13, bold: true),
    color: .white,
    alignment: .center
)
drawTextBlock(
    "(\(kindleURLString))",
    x: btnX + 8,
    y: btnY + 32,
    width: btnW - 16,
    font: font("Times New Roman", size: 12.5, italic: true),
    color: NSColor(calibratedWhite: 0.88, alpha: 1.0),
    alignment: .center
)

if let targetURL = URL(string: kindleURLString) {
    let pdfLinkRect = CGRect(
        x: btnX,
        y: pageHeight - (btnY + btnH),
        width: btnW,
        height: btnH
    )
    pdfContext.setURL(targetURL as CFURL, for: pdfLinkRect)
}

curY = box1Y + box1H + 16

// Box 2: Offline 800-Sentence Table of Contents (16 Chapters)
let box2Y = curY
let box2H: CGFloat = 258.0
NSColor.white.setFill()
NSBezierPath.fill(NSRect(x: padX, y: box2Y, width: contentW, height: box2H))
NSColor.black.setStroke()
let b2Path = NSBezierPath(rect: NSRect(x: padX, y: box2Y, width: contentW, height: box2H))
b2Path.lineWidth = 1.5
b2Path.stroke()

var b2CurY = box2Y + 14
b2CurY = drawTextBlock(
    "CHẾ ĐỘ 2: MỤC LỤC 16 CHƯƠNG ĐỌC OFFLINE (800 CÂU • TRANG 2 → \(sentences.count + 1))",
    x: padX + 18,
    y: b2CurY,
    width: contentW - 36,
    font: font("Arial", size: 13, bold: true)
)
b2CurY += 8

let tocLeft = """
01. Phản xạ Cơ bản (50 câu) ............... Trang 2
02. Đời sống Hàng ngày (50 câu) ......... Trang 52
03. Bắt sóng Khi nghe (50 câu) ........... Trang 102
04. Câu giờ & Tự sửa lời (50 câu) ........ Trang 152
05. Khung câu Nhờ vả [X] (50 câu) ..... Trang 202
06. Từ chối Khéo léo (50 câu) .............. Trang 252
07. Ẩm thực & Mua sắm (50 câu) ........ Trang 302
08. Đi lại & Tàu xe DB (50 câu) ........... Trang 352
"""

let tocRight = """
09. Thủ tục & Bác sĩ (50 câu) .............. Trang 402
10. Giao tiếp Công sở (50 câu) ............ Trang 452
11. Thảo luận & Phản biện (50 câu) .... Trang 502
12. Thành ngữ & Từ đệm (50 câu) ....... Trang 552
13. Khẩn cấp & Sự cố (50 câu) ............ Trang 602
14. Tình cảm & Gia đình (50 câu) ....... Trang 652
15. Nhà cửa & Sửa chữa (50 câu) ........ Trang 702
16. Tiệc tùng & Xã giao (50 câu) ......... Trang 752
"""

let colW = (contentW - 48) / 2
_ = drawTextBlock(
    tocLeft,
    x: padX + 18,
    y: b2CurY,
    width: colW,
    font: font("Times New Roman", size: 12.2, bold: true),
    lineSpacing: 5.5
)
_ = drawTextBlock(
    tocRight,
    x: padX + 28 + colW,
    y: b2CurY,
    width: colW,
    font: font("Times New Roman", size: 12.2, bold: true),
    lineSpacing: 5.5
)

// Footer on Page 1
drawTextBlock(
    "Vuốt sang trang tiếp theo để bắt đầu học thẻ hội thoại #1 »",
    x: padX,
    y: pageHeight - 54,
    width: contentW,
    font: font("Times New Roman", size: 14, bold: true, italic: true),
    alignment: .center
)

endFlippedPage()

// ============================================================================
// PAGES 2..N: FULL VECTOR SENTENCE CARDS
// ============================================================================
for (idx, s) in sentences.enumerated() {
    beginFlippedPage()
    var y: CGFloat = 38.0

    // 1. Running Header
    let lvlStr = "CẤP ĐỘ \(s.level)"
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: padX, y: y, width: 92, height: 24))
    drawTextBlock(
        lvlStr,
        x: padX,
        y: y + 5,
        width: 92,
        font: font("Arial", size: 11.5, bold: true),
        color: .white,
        alignment: .center
    )

    drawTextBlock(
        "\(s.categoryLabel ?? "Giao tiếp")  —  \(s.frequency ?? "")",
        x: padX + 102,
        y: y + 4,
        width: contentW - 180,
        font: font("Times New Roman", size: 13.5, bold: true, italic: true)
    )

    drawTextBlock(
        "Trang \(idx + 2)/\(sentences.count + 1)",
        x: padX,
        y: y + 5,
        width: contentW,
        font: font("Times New Roman", size: 12, bold: true),
        alignment: .right
    )
    y += 32

    // Double Header Rule
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: padX, y: y, width: contentW, height: 2.2))
    NSBezierPath.fill(NSRect(x: padX, y: y + 4, width: contentW, height: 0.7))
    y += 16

    // 2. Context Epigraph
    let ctxText = "Ngữ cảnh: \(s.context)"
    let ctxH = measureTextHeight(ctxText, width: contentW - 16, font: font("Times New Roman", size: 14.5, bold: true, italic: true))
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: padX, y: y + 2, width: 3.5, height: ctxH - 2))
    y = drawTextBlock(
        ctxText,
        x: padX + 12,
        y: y,
        width: contentW - 16,
        font: font("Times New Roman", size: 14.5, bold: true, italic: true)
    )
    y += 16

    // 3. GERMAN SECTION
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: padX, y: y, width: 68, height: 19))
    drawTextBlock(
        "DEUTSCH",
        x: padX,
        y: y + 3,
        width: 68,
        font: font("Arial", size: 10, bold: true),
        color: .white,
        alignment: .center
    )
    drawTextBlock(
        "TIẾNG ĐỨC GIAO TIẾP BẢN XỨ",
        x: padX + 76,
        y: y + 3,
        width: 300,
        font: font("Arial", size: 10.5, bold: true)
    )
    y += 24

    y = drawTextBlock(
        "„\(s.de)“",
        x: padX,
        y: y,
        width: contentW,
        font: font("Times New Roman", size: 27, bold: true),
        lineSpacing: 2
    )
    y += 6

    if let phon = s.de_phonetic, !phon.isEmpty {
        y = drawTextBlock(
            "Phát âm: [ \(phon) ]",
            x: padX,
            y: y,
            width: contentW,
            font: font("Times New Roman", size: 13.5, bold: true, italic: true),
            color: NSColor(calibratedWhite: 0.2, alpha: 1.0)
        )
        y += 10
    }

    if let reg = s.de_register {
        let regStr = "• Thân mật (du):  \(reg.du)\n• Lịch sự (Sie):   \(reg.sie)"
        let regH = measureTextHeight(regStr, width: contentW - 24, font: font("Times New Roman", size: 13.5, bold: true), lineSpacing: 4) + 16
        NSColor(calibratedWhite: 0.95, alpha: 1.0).setFill()
        NSBezierPath.fill(NSRect(x: padX, y: y, width: contentW, height: regH))
        NSColor(calibratedWhite: 0.3, alpha: 1.0).setStroke()
        let rp = NSBezierPath(rect: NSRect(x: padX, y: y, width: contentW, height: regH))
        rp.lineWidth = 1.0
        rp.stroke()

        _ = drawTextBlock(
            regStr,
            x: padX + 12,
            y: y + 8,
            width: contentW - 24,
            font: font("Times New Roman", size: 13.5, bold: true),
            lineSpacing: 4
        )
        y += regH + 14
    }

    // Hairline
    NSColor(calibratedWhite: 0.45, alpha: 1.0).setFill()
    NSBezierPath.fill(NSRect(x: padX, y: y, width: contentW, height: 1.0))
    y += 12

    // 4. ENGLISH
    NSColor.black.setStroke()
    let enRect = NSRect(x: padX, y: y, width: 64, height: 18)
    let enPath = NSBezierPath(rect: enRect)
    enPath.lineWidth = 1.2
    enPath.stroke()
    drawTextBlock(
        "ENGLISH",
        x: padX,
        y: y + 3,
        width: 64,
        font: font("Arial", size: 9.5, bold: true),
        alignment: .center
    )
    drawTextBlock(
        "TƯƠNG ĐƯƠNG TỰ NHIÊN",
        x: padX + 72,
        y: y + 3,
        width: 260,
        font: font("Arial", size: 10, bold: true),
        color: NSColor(calibratedWhite: 0.25, alpha: 1.0)
    )
    y += 22

    y = drawTextBlock(
        "“\(s.en)”",
        x: padX,
        y: y,
        width: contentW,
        font: font("Times New Roman", size: 20.5, bold: true)
    )
    y += 12

    // 5. VIETNAMESE
    let viRect = NSRect(x: padX, y: y, width: 76, height: 18)
    let viPath = NSBezierPath(rect: viRect)
    viPath.lineWidth = 1.2
    viPath.stroke()
    drawTextBlock(
        "TIẾNG VIỆT",
        x: padX,
        y: y + 3,
        width: 76,
        font: font("Arial", size: 9.5, bold: true),
        alignment: .center
    )
    drawTextBlock(
        "NGHĨA GIAO TIẾP ĐỜI THỰC",
        x: padX + 84,
        y: y + 3,
        width: 260,
        font: font("Arial", size: 10, bold: true),
        color: NSColor(calibratedWhite: 0.25, alpha: 1.0)
    )
    y += 22

    y = drawTextBlock(
        s.vi,
        x: padX,
        y: y,
        width: contentW,
        font: font("Times New Roman", size: 18.5, bold: true)
    )
    y += 14

    // Hairline
    NSColor(calibratedWhite: 0.45, alpha: 1.0).setFill()
    NSBezierPath.fill(NSRect(x: padX, y: y, width: contentW, height: 1.0))
    y += 12

    // 6. REPLY
    if let rep = s.reply {
        y = drawTextBlock(
            "HỘI THOẠI ĐÁP LẠI MẪU (MINI-DIALOGUE):",
            x: padX,
            y: y,
            width: contentW,
            font: font("Arial", size: 10.5, bold: true)
        )
        y += 4
        y = drawTextBlock(
            "— „\(rep.de)“",
            x: padX,
            y: y,
            width: contentW,
            font: font("Times New Roman", size: 16.5, bold: true)
        )
        y += 3
        y = drawTextBlock(
            "   (\(rep.en)  •  \(rep.vi))",
            x: padX,
            y: y,
            width: contentW,
            font: font("Times New Roman", size: 13.5, bold: true, italic: true),
            color: NSColor(calibratedWhite: 0.2, alpha: 1.0)
        )
        y += 14
    }

    // 7. TIP
    if let tip = s.tip, !tip.isEmpty {
        let tipStr = "Ghi chú bản xứ: \(tip)"
        let tipH = measureTextHeight(tipStr, width: contentW - 24, font: font("Times New Roman", size: 13.5, bold: true), lineSpacing: 3) + 18
        NSColor(calibratedWhite: 0.94, alpha: 1.0).setFill()
        NSBezierPath.fill(NSRect(x: padX, y: y, width: contentW, height: tipH))
        NSColor.black.setStroke()
        let tp = NSBezierPath(rect: NSRect(x: padX, y: y, width: contentW, height: tipH))
        tp.lineWidth = 1.5
        tp.stroke()

        _ = drawTextBlock(
            tipStr,
            x: padX + 12,
            y: y + 9,
            width: contentW - 24,
            font: font("Times New Roman", size: 13.5, bold: true),
            lineSpacing: 3
        )
    }

    // 8. Footer with Quick Link back to Live Kiosk
    drawTextBlock(
        "Sổ tay Giao tiếp Đức – Anh – Việt • Khung tranh Wi-Fi: \(kindleURLString)",
        x: padX,
        y: pageHeight - 44,
        width: contentW - 90,
        font: font("Times New Roman", size: 10.5, italic: true),
        color: NSColor(calibratedWhite: 0.25, alpha: 1.0)
    )
    drawTextBlock(
        "Mã thẻ: #\(s.id.uppercased())",
        x: padX,
        y: pageHeight - 44,
        width: contentW,
        font: font("Times New Roman", size: 10.5, bold: true, italic: true),
        alignment: .right
    )

    endFlippedPage()
}

pdfContext.closePDF()
print("OK: Generated Kindle Vector PDF (\(sentences.count + 1) pages) -> \(outputPath)")
