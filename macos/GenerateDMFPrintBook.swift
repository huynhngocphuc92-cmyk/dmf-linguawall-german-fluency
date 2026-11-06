import Cocoa
import CoreText
import CoreGraphics
import Foundation
import PDFKit

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
    let patternType: String?
    let packNumber: Int?
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

struct VolumeSpec {
    let volumeNumber: Int // 0 = Full 800-sentence edition, 1..4 = Volume 1..4
    let fileName: String
    let badgeTitle: String
    let mainTitle: String
    let subTitle: String
    let descriptionText: String
    let categories: [String]
    let packRangeLabel: String
    let globalStartNumber: Int
}

let args = CommandLine.arguments
guard args.count >= 3 else {
    fputs("Usage: generate-dmf-print-book <sentences.json> <output-directory> [--kindle]\n", stderr)
    exit(1)
}

let sentencesPath = args[1]
let outputDir = args[2]
let isKindleMode = args.contains("--kindle")

let jsonData = try Data(contentsOf: URL(fileURLWithPath: sentencesPath))
let allSentences = try JSONDecoder().decode([SentenceItem].self, from: jsonData)

try FileManager.default.createDirectory(atPath: outputDir, withIntermediateDirectories: true)

// Standard ISO A5 Portrait Trim Size: 148mm × 210mm = 419.53pt × 595.28pt
// Kindle Paperwhite 5 Native 3:4 Screen Ratio: 446.46pt × 595.28pt (1236 × 1648)
let pageWidth: CGFloat = isKindleMode ? 446.46 : 419.53
let pageHeight: CGFloat = 595.28

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

@discardableResult
func drawTextBlock(
    _ text: String,
    x: CGFloat,
    y: CGFloat,
    width: CGFloat,
    font: NSFont,
    color: NSColor = .black,
    lineSpacing: CGFloat = 2.0,
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

func measureTextHeight(_ text: String, width: CGFloat, font: NSFont, lineSpacing: CGFloat = 2.0) -> CGFloat {
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

struct PageGeometry {
    let pageNumber: Int
    let isOddPage: Bool
    let frameX: CGFloat
    let frameY: CGFloat
    let frameW: CGFloat
    let frameH: CGFloat
    let padX: CGFloat
    let contentW: CGFloat
}

// Mirror Margins for Duplex Book Binding (Recto = Odd = Right Page, Verso = Even = Left Page)
// In Kindle Mode (--kindle): Edge-to-edge 8pt symmetric frame on 3:4 canvas so content is large and centered
func getPageGeometry(pageNumber: Int) -> PageGeometry {
    let isOdd = (pageNumber % 2 == 1)
    let gutterMargin: CGFloat = isKindleMode ? 8.0 : 31.0
    let outsideMargin: CGFloat = isKindleMode ? 8.0 : 19.0
    let topBottomMargin: CGFloat = isKindleMode ? 8.0 : 18.0

    let frameX = isOdd ? gutterMargin : outsideMargin
    let frameW = pageWidth - (gutterMargin + outsideMargin)
    let frameY = topBottomMargin
    let frameH = pageHeight - topBottomMargin * 2.0

    let innerInset: CGFloat = isKindleMode ? 12.0 : 15.5
    let padX = frameX + innerInset
    let contentW = frameW - innerInset * 2.0

    return PageGeometry(
        pageNumber: pageNumber,
        isOddPage: isOdd,
        frameX: frameX,
        frameY: frameY,
        frameW: frameW,
        frameH: frameH,
        padX: padX,
        contentW: contentW
    )
}

func beginBookPage(
    pdfContext: CGContext,
    pageNumber: Int,
    chapterSlot: Int? = nil,
    totalChapterSlots: Int = 4,
    chapterShortCode: String = ""
) -> PageGeometry {
    pdfContext.beginPDFPage(nil)
    pdfContext.saveGState()
    pdfContext.translateBy(x: 0, y: pageHeight)
    pdfContext.scaleBy(x: 1.0, y: -1.0)
    let nsCtx = NSGraphicsContext(cgContext: pdfContext, flipped: true)
    NSGraphicsContext.current = nsCtx

    let geo = getPageGeometry(pageNumber: pageNumber)

    // Pure White Print Canvas
    NSColor.white.setFill()
    NSBezierPath.fill(NSRect(x: 0, y: 0, width: pageWidth, height: pageHeight))

    // Double Book Frame (Shifted symmetrically away from the spine gutter in Print mode, centered in Kindle mode)
    NSColor.black.setStroke()
    let outerPath = NSBezierPath(rect: NSRect(x: geo.frameX, y: geo.frameY, width: geo.frameW, height: geo.frameH))
    outerPath.lineWidth = 2.0
    outerPath.stroke()

    NSColor(calibratedWhite: 0.28, alpha: 1.0).setStroke()
    let innerPath = NSBezierPath(rect: NSRect(
        x: geo.frameX + 4.0,
        y: geo.frameY + 4.0,
        width: geo.frameW - 8.0,
        height: geo.frameH - 8.0
    ))
    innerPath.lineWidth = 0.7
    innerPath.stroke()

    // Outer Edge Thumb-Index Tab on Odd (Right-hand) Pages for Instant Physical Chapter Flipping (Print Mode Only)
    if !isKindleMode, let slot = chapterSlot, geo.isOddPage, totalChapterSlots > 0 {
        let usableStartY: CGFloat = 95.0
        let usableEndY: CGFloat = pageHeight - 95.0
        let slotHeight = (usableEndY - usableStartY) / CGFloat(totalChapterSlots)
        let tabH: CGFloat = min(44.0, slotHeight - 6.0)
        let tabY = usableStartY + CGFloat(slot) * slotHeight + (slotHeight - tabH) / 2.0
        let tabX = geo.frameX + geo.frameW
        let tabW = pageWidth - tabX // Bleeds right to the trim edge for thumb-indexing!

        NSColor.black.setFill()
        NSBezierPath.fill(NSRect(x: tabX, y: tabY, width: tabW, height: tabH))
        drawTextBlock(
            chapterShortCode,
            x: tabX,
            y: tabY + (tabH - 11.0) / 2.0,
            width: tabW - 2.0,
            font: font("Arial", size: 7.5, bold: true),
            color: .white,
            alignment: .center
        )
    }

    return geo
}

func endBookPage(pdfContext: CGContext) {
    NSGraphicsContext.current = nil
    pdfContext.restoreGState()
    pdfContext.endPDFPage()
}

func drawSymmetricFooter(
    geo: PageGeometry,
    volumeLabel: String,
    cardCode: String,
    totalPages: Int
) {
    let footerY = geo.frameY + geo.frameH - 19.0
    let brandText = "DMF • Đào Tạo Tiếng Đức & Giao Tiếp Thực Chiến (\(volumeLabel))"
    let pageStr = "Trang \(geo.pageNumber)/\(totalPages)  •  \(cardCode)"

    // In Duplex Book Design: Page number sits on OUTSIDE edge; in Kindle mode: always on RIGHT
    if geo.isOddPage || isKindleMode {
        drawTextBlock(
            brandText,
            x: geo.padX,
            y: footerY,
            width: geo.contentW * 0.68,
            font: font("Times New Roman", size: 8.5, italic: true),
            color: NSColor(calibratedWhite: 0.22, alpha: 1.0),
            alignment: .left
        )
        drawTextBlock(
            pageStr,
            x: geo.padX,
            y: footerY,
            width: geo.contentW,
            font: font("Times New Roman", size: 8.8, bold: true),
            color: .black,
            alignment: .right
        )
    } else {
        drawTextBlock(
            pageStr,
            x: geo.padX,
            y: footerY,
            width: geo.contentW * 0.45,
            font: font("Times New Roman", size: 8.8, bold: true),
            color: .black,
            alignment: .left
        )
        drawTextBlock(
            brandText,
            x: geo.padX,
            y: footerY,
            width: geo.contentW,
            font: font("Times New Roman", size: 8.5, italic: true),
            color: NSColor(calibratedWhite: 0.22, alpha: 1.0),
            alignment: .right
        )
    }
}

let categoryTitles: [String: String] = [
    "basics": "Phản xạ Cơ bản & Chào hỏi",
    "daily": "Đời sống & Sinh hoạt Hàng ngày",
    "backchannel": "Bắt sóng & Đồng cảm Khi nghe",
    "fillers": "Câu giờ & Tự sửa lời Tự nhiên",
    "requests": "Khung câu Nhờ vả & Đề xuất [X]",
    "boundaries": "Từ chối Khéo léo & Đặt ranh giới",
    "dining": "Ẩm thực, Quán xá & Mua sắm",
    "transport": "Đi lại, Tàu xe DB & Giao thông",
    "admin": "Thủ tục Hành chính & Khám Bác sĩ",
    "work": "Giao tiếp Công sở & Họp hành",
    "opinions": "Thảo luận, Nêu quan điểm & Phản biện",
    "idioms": "Thành ngữ & Cụm từ cửa miệng Bản xứ",
    "emergencies": "Khẩn cấp, Cấp cứu & Xử lý Sự cố",
    "relationships": "Tình cảm, Hẹn hò & Kết nối Gia đình",
    "housing_tech": "Thuê nhà, Sửa chữa & Kỹ thuật số",
    "social_events": "Tiệc tùng, Lễ hội & Văn hóa Xã giao"
]

func renderVolumePDF(spec: VolumeSpec) {
    let volSentences = allSentences.filter { spec.categories.contains($0.category) }
    // Page 1: Title Page
    // Page 2: Table of Contents & Study Guide
    // Pages 3..(2 + volSentences.count): Sentence Cards
    // Remaining pages up to multiple of 4 (Print Mode Only): Student Cornell Notes Pages
    let basePages = 2 + volSentences.count
    let notesPagesCount = isKindleMode ? 0 : ((basePages % 4 == 0) ? 2 : (4 - (basePages % 4)))
    let totalPages = basePages + notesPagesCount

    let volShortLabel = spec.volumeNumber > 0 ? "Tập \(spec.volumeNumber)" : "Trọn Bộ"
    let actualFileName: String
    if isKindleMode && spec.volumeNumber > 0 {
        let firstNum = String(format: "%03d", spec.globalStartNumber)
        let lastNum = String(format: "%03d", spec.globalStartNumber + volSentences.count - 1)
        actualFileName = "DMF_So_Tay_Giao_Tiep_Tap_\(spec.volumeNumber)_Cau_\(firstNum)_\(lastNum).pdf"
    } else {
        actualFileName = spec.fileName
    }

    var mediaBox = CGRect(x: 0, y: 0, width: pageWidth, height: pageHeight)
    let outPath = (outputDir as NSString).appendingPathComponent(actualFileName)
    let outURL = URL(fileURLWithPath: outPath)
    let pdfTitle = spec.volumeNumber > 0
        ? "DMF Sổ Tay Giao Tiếp Đức - Anh - Việt • Tập \(spec.volumeNumber) (Câu \(String(format: "%03d", spec.globalStartNumber))–\(String(format: "%03d", spec.globalStartNumber + volSentences.count - 1)))"
        : "DMF Sổ Tay Giao Tiếp Đức - Anh - Việt • Trọn Bộ 800 Câu"
    let pdfInfo: [CFString: Any] = [
        kCGPDFContextTitle: pdfTitle,
        kCGPDFContextAuthor: "DMF — Đào Tạo Tiếng Đức & Giao Tiếp Thực Chiến",
        kCGPDFContextSubject: spec.subTitle,
        kCGPDFContextCreator: "DMF Prepress & E-Book Engine"
    ]
    guard let pdfContext = CGContext(outURL as CFURL, mediaBox: &mediaBox, pdfInfo as CFDictionary) else {
        fputs("Failed to create PDF context for \(actualFileName)\n", stderr)
        return
    }

    // ========================================================================
    // PAGE 1 (ODD / RECTO): DMF BRAND TITLE & COVER PAGE
    // ========================================================================
    let p1 = beginBookPage(pdfContext: pdfContext, pageNumber: 1)
    let kScale: CGFloat = isKindleMode ? 1.12 : 1.0
    let p1TopY: CGFloat = p1.frameY + (isKindleMode ? 18.0 : 22.0)
    let p1BottomY: CGFloat = p1.frameY + p1.frameH - 28.0

    let bannerH: CGFloat = isKindleMode ? 46.0 : 42.0
    let pillH: CGFloat = isKindleMode ? 24.0 : 22.0
    let mainTitleFont = font("Times New Roman", size: 26.0 * kScale, bold: true)
    let subTitleFont = font("Times New Roman", size: 13.5 * kScale, bold: true, italic: true)
    let mainTitleH = measureTextHeight(spec.mainTitle, width: p1.contentW, font: mainTitleFont, lineSpacing: 3.0)
    let subTitleH = measureTextHeight(spec.subTitle, width: p1.contentW, font: subTitleFont, lineSpacing: 2.5)
    let descBoxH: CGFloat = isKindleMode ? 138.0 : 124.0
    let stuBoxH: CGFloat = isKindleMode ? 114.0 : 104.0

    let fixedContentH = bannerH + pillH + mainTitleH + 8.0 + subTitleH + 5.0 + descBoxH + stuBoxH
    let totalSlack = max(40.0, (p1BottomY - p1TopY) - fixedContentH)
    let p1Gap = totalSlack / 5.0

    var y: CGFloat = p1TopY

    // DMF Top Brand Banner
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: p1.padX, y: y, width: p1.contentW, height: bannerH))
    drawTextBlock(
        "DMF",
        x: p1.padX,
        y: y + 4.0,
        width: p1.contentW,
        font: font("Arial", size: 17.0 * kScale, bold: true),
        color: .white,
        alignment: .center
    )
    drawTextBlock(
        "ĐÀO TẠO TIẾNG ĐỨC & GIAO TIẾP THỰC CHIẾN",
        x: p1.padX,
        y: y + (isKindleMode ? 26.0 : 24.0),
        width: p1.contentW,
        font: font("Arial", size: 8.5 * kScale, bold: true),
        color: NSColor(calibratedWhite: 0.9, alpha: 1.0),
        alignment: .center
    )
    y += bannerH + p1Gap

    // Volume Stamp Pill
    let pillW: CGFloat = isKindleMode ? 300.0 : 268.0
    let pillX = p1.padX + (p1.contentW - pillW) / 2.0
    NSColor(calibratedWhite: 0.93, alpha: 1.0).setFill()
    NSBezierPath.fill(NSRect(x: pillX, y: y, width: pillW, height: pillH))
    NSColor.black.setStroke()
    let pillPath = NSBezierPath(rect: NSRect(x: pillX, y: y, width: pillW, height: pillH))
    pillPath.lineWidth = 1.2
    pillPath.stroke()
    drawTextBlock(
        spec.badgeTitle,
        x: pillX,
        y: y + 5.0,
        width: pillW,
        font: font("Arial", size: 9.5 * kScale, bold: true),
        alignment: .center
    )
    y += pillH + p1Gap

    // Main Book Title
    y = drawTextBlock(
        spec.mainTitle,
        x: p1.padX,
        y: y,
        width: p1.contentW,
        font: mainTitleFont,
        lineSpacing: 3.0,
        alignment: .center
    )
    y += 8.0

    y = drawTextBlock(
        spec.subTitle,
        x: p1.padX,
        y: y,
        width: p1.contentW,
        font: subTitleFont,
        color: NSColor(calibratedWhite: 0.18, alpha: 1.0),
        lineSpacing: 2.5,
        alignment: .center
    )
    y += p1Gap

    // Editorial Double Rule
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: p1.padX, y: y, width: p1.contentW, height: 2.0))
    NSBezierPath.fill(NSRect(x: p1.padX, y: y + 4.0, width: p1.contentW, height: 0.7))
    y += 5.0 + p1Gap

    // Volume Overview Box
    NSColor(calibratedWhite: 0.96, alpha: 1.0).setFill()
    NSBezierPath.fill(NSRect(x: p1.padX, y: y, width: p1.contentW, height: descBoxH))
    NSColor.black.setStroke()
    let dbPath = NSBezierPath(rect: NSRect(x: p1.padX, y: y, width: p1.contentW, height: descBoxH))
    dbPath.lineWidth = 1.2
    dbPath.stroke()

    var dy = y + 10.0
    dy = drawTextBlock(
        "CẤU TRÚC PHƯƠNG PHÁP PHẢN XẠ BẢN XỨ DMF:",
        x: p1.padX + 12.0,
        y: dy,
        width: p1.contentW - 24.0,
        font: font("Arial", size: 9.5 * kScale, bold: true)
    )
    dy += 5.0
    _ = drawTextBlock(
        spec.descriptionText,
        x: p1.padX + 12.0,
        y: dy,
        width: p1.contentW - 24.0,
        font: font("Times New Roman", size: 10.4 * kScale),
        lineSpacing: 2.6 * kScale
    )
    y += descBoxH + p1Gap

    // Student Ownership Box (For Classroom & Self-Study Handbooks)
    NSColor.white.setFill()
    NSBezierPath.fill(NSRect(x: p1.padX, y: y, width: p1.contentW, height: stuBoxH))
    NSColor.black.setStroke()
    let sbPath = NSBezierPath(rect: NSRect(x: p1.padX, y: y, width: p1.contentW, height: stuBoxH))
    sbPath.lineWidth = 1.0
    sbPath.stroke()

    var sy = y + 10.0
    sy = drawTextBlock(
        "THÔNG TIN HỌC VIÊN SỞ HỮU SỔ TAY",
        x: p1.padX + 12.0,
        y: sy,
        width: p1.contentW - 24.0,
        font: font("Arial", size: 9.0 * kScale, bold: true)
    )
    sy += 8.0 * kScale

    let studentRows: [(label: String, lineStartX: CGFloat)] = [
        ("• Họ và tên học viên:", 118.0 * kScale),
        ("• Lớp / Khóa đào tạo tại DMF:", 158.0 * kScale),
        ("• Mục tiêu hoàn thành (\(spec.packRangeLabel)):", 228.0 * kScale)
    ]
    for row in studentRows {
        drawTextBlock(
            row.label,
            x: p1.padX + 12.0,
            y: sy,
            width: p1.contentW - 24.0,
            font: font("Times New Roman", size: 10.2 * kScale, bold: true)
        )
        let lineX1 = p1.padX + 12.0 + row.lineStartX
        let lineX2 = p1.padX + p1.contentW - 14.0
        if lineX2 > lineX1 {
            NSColor(calibratedWhite: 0.35, alpha: 1.0).setStroke()
            let fillLine = NSBezierPath()
            fillLine.move(to: NSPoint(x: lineX1, y: sy + 11.5 * kScale))
            fillLine.line(to: NSPoint(x: lineX2, y: sy + 11.5 * kScale))
            fillLine.lineWidth = 0.8
            let dashPattern: [CGFloat] = [2.0, 2.0]
            fillLine.setLineDash(dashPattern, count: 2, phase: 0.0)
            fillLine.stroke()
        }
        sy += 23.0 * kScale
    }

    drawSymmetricFooter(
        geo: p1,
        volumeLabel: volShortLabel,
        cardCode: isKindleMode ? "Kindle E-Book" : "Ấn bản In A5",
        totalPages: totalPages
    )
    endBookPage(pdfContext: pdfContext)

    // ========================================================================
    // PAGE 2 (EVEN / VERSO): TABLE OF CONTENTS & STUDY GUIDE
    // ========================================================================
    let p2 = beginBookPage(pdfContext: pdfContext, pageNumber: 2)
    let p2Scale: CGFloat = isKindleMode ? 1.10 : 1.0
    var y2: CGFloat = p2.frameY + (isKindleMode ? 14.0 : 16.0)

    let tocHeaderH: CGFloat = isKindleMode ? 27.0 : 25.0
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: p2.padX, y: y2, width: p2.contentW, height: tocHeaderH))
    drawTextBlock(
        "MỤC LỤC CHI TIẾT & HƯỚNG DẪN LUYỆN PHẢN XẠ • DMF",
        x: p2.padX,
        y: y2 + 6.5,
        width: p2.contentW,
        font: font("Arial", size: 9.5 * p2Scale, bold: true),
        color: .white,
        alignment: .center
    )
    y2 += tocHeaderH + 10.0

    // Short titles for the 16-chapter 2-column grid so every cell stays strictly 1 line
    let shortCategoryTitles: [String: String] = [
        "basics": "Phản xạ Cơ bản & Chào hỏi",
        "daily": "Đời sống & Sinh hoạt Hàng ngày",
        "backchannel": "Bắt sóng & Đồng cảm Khi nghe",
        "fillers": "Câu giờ & Tự sửa lời Tự nhiên",
        "requests": "Khung câu Nhờ vả & Đề xuất [X]",
        "boundaries": "Từ chối Khéo & Đặt ranh giới",
        "dining": "Ẩm thực, Quán xá & Mua sắm",
        "transport": "Đi lại, Tàu xe DB & Giao thông",
        "admin": "Hành chính & Khám Bác sĩ",
        "work": "Giao tiếp Công sở & Họp hành",
        "opinions": "Thảo luận & Tư duy Phản biện",
        "idioms": "Thành ngữ & Cụm từ Bản xứ",
        "emergencies": "Khẩn cấp, Cấp cứu & Sự cố",
        "relationships": "Tình cảm, Hẹn hò & Gia đình",
        "housing_tech": "Thuê nhà, Sửa chữa & Kỹ thuật",
        "social_events": "Tiệc tùng, Lễ hội & Xã giao"
    ]

    // Chapter Table of Contents
    if spec.categories.count <= 4 {
        let rowH: CGFloat = isKindleMode ? 60.0 : 56.0
        let rowGap: CGFloat = isKindleMode ? 9.0 : 8.0
        let badgeW: CGFloat = isKindleMode ? 62.0 : 56.0
        for (cIdx, catKey) in spec.categories.enumerated() {
            let catName = categoryTitles[catKey] ?? catKey
            let startPage = 3 + cIdx * 50
            let endPage = startPage + 49
            let firstNum = spec.globalStartNumber + cIdx * 50
            let lastNum = firstNum + 49
            let startPack = (firstNum - 1) / 20 + 1
            let endPack = (lastNum - 1) / 20 + 1
            let globalChapNum = (spec.volumeNumber > 0) ? ((spec.volumeNumber - 1) * 4 + cIdx + 1) : (cIdx + 1)

            // Outer Card Box
            NSColor(calibratedWhite: cIdx % 2 == 0 ? 0.96 : 1.0, alpha: 1.0).setFill()
            NSBezierPath.fill(NSRect(x: p2.padX, y: y2, width: p2.contentW, height: rowH))
            NSColor.black.setStroke()
            let rPath = NSBezierPath(rect: NSRect(x: p2.padX, y: y2, width: p2.contentW, height: rowH))
            rPath.lineWidth = 0.9
            rPath.stroke()

            // Left Chapter Number Badge Column
            NSColor.black.setFill()
            NSBezierPath.fill(NSRect(x: p2.padX, y: y2, width: badgeW, height: rowH))
            drawTextBlock(
                "CHƯƠNG",
                x: p2.padX,
                y: y2 + 6.0,
                width: badgeW,
                font: font("Arial", size: 6.8 * p2Scale, bold: true),
                color: NSColor(calibratedWhite: 0.85, alpha: 1.0),
                alignment: .center
            )
            drawTextBlock(
                String(format: "%02d", globalChapNum),
                x: p2.padX,
                y: y2 + 16.5,
                width: badgeW,
                font: font("Times New Roman", size: 19.0 * p2Scale, bold: true),
                color: .white,
                alignment: .center
            )
            drawTextBlock(
                isKindleMode ? "50 CÂU" : "TAB C\(cIdx + 1)",
                x: p2.padX,
                y: y2 + (isKindleMode ? 43.0 : 41.0),
                width: badgeW,
                font: font("Arial", size: 6.8 * p2Scale, bold: true),
                color: NSColor(calibratedWhite: 0.8, alpha: 1.0),
                alignment: .center
            )

            // Right Content Area (3 evenly spaced single-line rows)
            let rightX = p2.padX + badgeW + 10.0
            let rightW = p2.contentW - badgeW - 18.0

            // Row 1: Full-width Chapter Name (Never wraps!)
            drawTextBlock(
                catName.uppercased(),
                x: rightX,
                y: y2 + 6.5,
                width: rightW,
                font: font("Arial", size: 9.2 * p2Scale, bold: true),
                color: .black
            )

            // Subtle divider line under Chapter Name
            NSColor(calibratedWhite: 0.78, alpha: 1.0).setStroke()
            let divLine = NSBezierPath()
            divLine.move(to: NSPoint(x: rightX, y: y2 + (isKindleMode ? 22.5 : 21.0)))
            divLine.line(to: NSPoint(x: rightX + rightW, y: y2 + (isKindleMode ? 22.5 : 21.0)))
            divLine.lineWidth = 0.5
            divLine.stroke()

            // Row 2: Sentence Range on Left + Page Range on Right
            drawTextBlock(
                "Phạm vi: Câu #\(String(format: "%03d", firstNum)) → #\(String(format: "%03d", lastNum)) (50 mẫu câu)",
                x: rightX,
                y: y2 + (isKindleMode ? 26.0 : 24.5),
                width: rightW - 76.0,
                font: font("Times New Roman", size: 9.5 * p2Scale, bold: true, italic: true),
                color: NSColor(calibratedWhite: 0.12, alpha: 1.0)
            )
            drawTextBlock(
                "Trang \(startPage) – \(endPage)",
                x: rightX,
                y: y2 + (isKindleMode ? 26.0 : 24.5),
                width: rightW,
                font: font("Arial", size: 8.8 * p2Scale, bold: true),
                color: .black,
                alignment: .right
            )

            // Row 3: Weekly Pack Schedule + CEFR Levels
            drawTextBlock(
                "Lộ trình: Gói Tuần \(startPack) → Tuần \(endPack) (20 câu/tuần)",
                x: rightX,
                y: y2 + (isKindleMode ? 42.0 : 39.5),
                width: rightW - 70.0,
                font: font("Times New Roman", size: 9.0 * p2Scale),
                color: NSColor(calibratedWhite: 0.28, alpha: 1.0)
            )
            drawTextBlock(
                "Cấp độ A1 → C1",
                x: rightX,
                y: y2 + (isKindleMode ? 42.0 : 39.5),
                width: rightW,
                font: font("Times New Roman", size: 8.8 * p2Scale, bold: true),
                color: NSColor(calibratedWhite: 0.22, alpha: 1.0),
                alignment: .right
            )

            y2 += rowH + rowGap
        }
        y2 -= rowGap // Remove trailing gap so y2 is exact
    } else {
        // 2-Column Compact TOC Grid for the 16-Chapter Master Volume (8 rows × 2 columns = 248.0 pt)
        let colGap: CGFloat = 8.0
        let colW = (p2.contentW - colGap) / 2.0
        let cellH: CGFloat = 27.5
        let rowGap: CGFloat = 4.0
        let rowsPerCol = (spec.categories.count + 1) / 2
        let miniBadgeW: CGFloat = 25.0
        for (cIdx, catKey) in spec.categories.enumerated() {
            let col = cIdx / rowsPerCol
            let row = cIdx % rowsPerCol
            let cellX = p2.padX + CGFloat(col) * (colW + colGap)
            let cellY = y2 + CGFloat(row) * (cellH + rowGap)
            let catName = shortCategoryTitles[catKey] ?? categoryTitles[catKey] ?? catKey
            let startPage = 3 + cIdx * 50
            let endPage = startPage + 49
            let globalChapNum = cIdx + 1

            NSColor(calibratedWhite: row % 2 == 0 ? 0.96 : 1.0, alpha: 1.0).setFill()
            NSBezierPath.fill(NSRect(x: cellX, y: cellY, width: colW, height: cellH))
            NSColor.black.setStroke()
            let rPath = NSBezierPath(rect: NSRect(x: cellX, y: cellY, width: colW, height: cellH))
            rPath.lineWidth = 0.65
            rPath.stroke()

            // Mini black chapter badge on left
            NSColor.black.setFill()
            NSBezierPath.fill(NSRect(x: cellX, y: cellY, width: miniBadgeW, height: cellH))
            drawTextBlock(
                String(format: "C%02d", globalChapNum),
                x: cellX,
                y: cellY + 9.0,
                width: miniBadgeW,
                font: font("Arial", size: 7.5, bold: true),
                color: .white,
                alignment: .center
            )

            let rx = cellX + miniBadgeW + 5.0
            let rw = colW - miniBadgeW - 9.0
            drawTextBlock(
                catName,
                x: rx,
                y: cellY + 3.0,
                width: rw,
                font: font("Times New Roman", size: 8.1, bold: true)
            )
            let firstNum = spec.globalStartNumber + cIdx * 50
            let lastNum = firstNum + 49
            drawTextBlock(
                "Câu #\(String(format: "%03d", firstNum))–#\(String(format: "%03d", lastNum))",
                x: rx,
                y: cellY + 15.0,
                width: rw - 48.0,
                font: font("Times New Roman", size: 7.5, italic: true),
                color: NSColor(calibratedWhite: 0.25, alpha: 1.0)
            )
            drawTextBlock(
                "Tr.\(startPage)–\(endPage)",
                x: rx,
                y: cellY + 15.0,
                width: rw,
                font: font("Arial", size: 7.2, bold: true),
                alignment: .right
            )
        }
        y2 += CGFloat(rowsPerCol) * cellH + CGFloat(rowsPerCol - 1) * rowGap
    }

    y2 += 12.0

    // ========================================================================
    // STRUCTURED 4-STEP DMF METHOD BOX (Fills bottom half of Page 2 evenly)
    // ========================================================================
    let guideBoxBottom = p2.frameY + p2.frameH - 26.0
    let guideBoxH = guideBoxBottom - y2
    NSColor.white.setFill()
    NSBezierPath.fill(NSRect(x: p2.padX, y: y2, width: p2.contentW, height: guideBoxH))
    NSColor.black.setStroke()
    let gPath = NSBezierPath(rect: NSRect(x: p2.padX, y: y2, width: p2.contentW, height: guideBoxH))
    gPath.lineWidth = 1.1
    gPath.stroke()

    // Header bar inside Study Guide Box
    let gHeaderH: CGFloat = isKindleMode ? 24.0 : 22.0
    NSColor.black.setFill()
    NSBezierPath.fill(NSRect(x: p2.padX, y: y2, width: p2.contentW, height: gHeaderH))
    drawTextBlock(
        "PHƯƠNG PHÁP LUYỆN PHẢN XẠ 4 BƯỚC CHUẨN BẢN XỨ (DMF METHOD)",
        x: p2.padX,
        y: y2 + 5.5,
        width: p2.contentW,
        font: font("Arial", size: 8.6 * p2Scale, bold: true),
        color: .white,
        alignment: .center
    )

    let steps: [(badge: String, title: String, desc: String)] = [
        ("BƯỚC 1", "Đặt mình vào Ngữ cảnh Thực tế (Pragmatic Context)", "Đọc dòng Ngữ cảnh ở đầu trang và hình dung đối tượng đang nói chuyện trước khi đọc câu tiếng Đức."),
        ("BƯỚC 2", "Phân biệt rõ Thân mật (du) & Lịch sự (Sie)", "Với bạn bè/người thân dùng biến thể (du); khi đi làm, khám bác sĩ, hành chính hoặc gặp người lạ luôn dùng (Sie)."),
        ("BƯỚC 3", "Luyện Phản xạ Đối đáp 2 Chiều (Mini-Dialogue)", "Đọc to cả câu mở lời và câu Hội thoại đáp lại mẫu ở cuối trang để tạo phản xạ nghe – đáp tức thì."),
        ("BƯỚC 4", "Chinh phục theo Gói Tuần (20 câu/tuần)", "Luyện kỹ từng cụm từ (Chunking) và đánh dấu tích vào các câu đã bật ra tự nhiên không cần dịch nhẩm.")
    ]

    let stepsAreaY = y2 + gHeaderH + 6.0
    let stepsAreaH = guideBoxH - gHeaderH - 12.0
    let stepGap: CGFloat = 5.0
    let stepCardH = (stepsAreaH - stepGap * CGFloat(steps.count - 1)) / CGFloat(steps.count)

    for (sIdx, step) in steps.enumerated() {
        let sy = stepsAreaY + CGFloat(sIdx) * (stepCardH + stepGap)
        let cardX = p2.padX + 8.0
        let cardW = p2.contentW - 16.0

        NSColor(calibratedWhite: sIdx % 2 == 0 ? 0.96 : 0.99, alpha: 1.0).setFill()
        NSBezierPath.fill(NSRect(x: cardX, y: sy, width: cardW, height: stepCardH))
        NSColor(calibratedWhite: 0.65, alpha: 1.0).setStroke()
        let scPath = NSBezierPath(rect: NSRect(x: cardX, y: sy, width: cardW, height: stepCardH))
        scPath.lineWidth = 0.6
        scPath.stroke()

        // Step Badge on Left
        let sBadgeW: CGFloat = isKindleMode ? 52.0 : 46.0
        NSColor(calibratedWhite: 0.15, alpha: 1.0).setFill()
        NSBezierPath.fill(NSRect(x: cardX, y: sy, width: sBadgeW, height: stepCardH))
        drawTextBlock(
            step.badge,
            x: cardX,
            y: sy + (stepCardH - 10.0) / 2.0,
            width: sBadgeW,
            font: font("Arial", size: 7.5 * p2Scale, bold: true),
            color: .white,
            alignment: .center
        )

        let stX = cardX + sBadgeW + 8.0
        let stW = cardW - sBadgeW - 14.0
        drawTextBlock(
            step.title,
            x: stX,
            y: sy + 3.5,
            width: stW,
            font: font("Arial", size: 8.4 * p2Scale, bold: true),
            color: .black
        )
        drawTextBlock(
            step.desc,
            x: stX,
            y: sy + (isKindleMode ? 16.5 : 15.0),
            width: stW,
            font: font("Times New Roman", size: 8.6 * p2Scale),
            color: NSColor(calibratedWhite: 0.15, alpha: 1.0),
            lineSpacing: 1.2 * p2Scale
        )
    }

    drawSymmetricFooter(
        geo: p2,
        volumeLabel: volShortLabel,
        cardCode: "Mục Lục",
        totalPages: totalPages
    )
    endBookPage(pdfContext: pdfContext)

    // ========================================================================
    // PAGES 3..(2 + volSentences.count): SENTENCE CARDS (1 SENTENCE PER PAGE)
    // ========================================================================
    for (idx, s) in volSentences.enumerated() {
        let pageNum = idx + 3
        let catSlot = spec.categories.firstIndex(of: s.category) ?? 0
        let globalChapNum = (spec.volumeNumber > 0) ? ((spec.volumeNumber - 1) * 4 + catSlot + 1) : (catSlot + 1)
        let geo = beginBookPage(
            pdfContext: pdfContext,
            pageNumber: pageNum,
            chapterSlot: catSlot,
            totalChapterSlots: min(4, spec.categories.count),
            chapterShortCode: "C\(globalChapNum)"
        )

        // Compute adaptive typography scale + even vertical distribution (space-between)
        let usableTop = geo.frameY + (isKindleMode ? 12.0 : 14.0)
        let usableBottom = geo.frameY + geo.frameH - 26.0
        let maxAvailableH = usableBottom - usableTop

        let ctxText = "Ngữ cảnh: \(s.context)"
        let deText = "„\(s.de)“"
        let phonText = (s.de_phonetic ?? "").isEmpty ? "" : "Phát âm: [ \(s.de_phonetic!) ]"
        let regText = s.de_register != nil
            ? "• Thân mật (du):  \(s.de_register!.du)\n• Lịch sự (Sie):   \(s.de_register!.sie)"
            : ""
        let enText = "“\(s.en)”"
        let viText = s.vi
        let repDeText = s.reply != nil ? "— „\(s.reply!.de)“" : ""
        let repSubText = s.reply != nil ? "   (\(s.reply!.en)  •  \(s.reply!.vi))" : ""
        let tipText = (s.tip ?? "").isEmpty ? "" : "Ghi chú bản xứ: \(s.tip!)"

        func computeExactHeight(for sc: CGFloat) -> CGFloat {
            var h: CGFloat = 23.0 + 10.0 * sc // Header + double rule
            h += measureTextHeight(ctxText, width: geo.contentW - 11.0, font: font("Times New Roman", size: 10.8 * sc, bold: true, italic: true), lineSpacing: 1.8 * sc) + 10.0 * sc
            h += 17.5 * sc // DE badge
            h += measureTextHeight(deText, width: geo.contentW, font: font("Times New Roman", size: 19.5 * sc, bold: true), lineSpacing: 1.6 * sc) + 4.0 * sc
            if !phonText.isEmpty {
                h += measureTextHeight(phonText, width: geo.contentW, font: font("Times New Roman", size: 10.2 * sc, bold: true, italic: true), lineSpacing: 1.5 * sc) + 7.0 * sc
            }
            if !regText.isEmpty {
                h += measureTextHeight(regText, width: geo.contentW - 18.0, font: font("Times New Roman", size: 10.0 * sc, bold: true), lineSpacing: 2.5 * sc) + 11.0 * sc + 9.0 * sc
            }
            h += 8.5 * sc // hairline after DE
            h += 16.5 * sc // EN badge
            h += measureTextHeight(enText, width: geo.contentW, font: font("Times New Roman", size: 14.5 * sc, bold: true), lineSpacing: 1.6 * sc) + 8.5 * sc
            h += 16.5 * sc // VI badge
            h += measureTextHeight(viText, width: geo.contentW, font: font("Times New Roman", size: 13.5 * sc, bold: true), lineSpacing: 1.6 * sc) + 9.0 * sc
            h += 8.5 * sc // hairline after VI
            if !repDeText.isEmpty {
                h += measureTextHeight("HỘI THOẠI ĐÁP LẠI MẪU (MINI-DIALOGUE):", width: geo.contentW, font: font("Arial", size: 8.0 * sc, bold: true)) + 2.5 * sc
                h += measureTextHeight(repDeText, width: geo.contentW, font: font("Times New Roman", size: 12.2 * sc, bold: true), lineSpacing: 1.5 * sc) + 2.0 * sc
                h += measureTextHeight(repSubText, width: geo.contentW, font: font("Times New Roman", size: 10.0 * sc, bold: true, italic: true), lineSpacing: 1.5 * sc) + 9.0 * sc
            }
            if !tipText.isEmpty {
                h += measureTextHeight(tipText, width: geo.contentW - 18.0, font: font("Times New Roman", size: 10.0 * sc, bold: true), lineSpacing: 2.0 * sc) + 12.0 * sc
            }
            return h
        }

        let startScale: Double = isKindleMode ? 1.24 : 1.06
        var scale: CGFloat = CGFloat(startScale)
        var bestEstH: CGFloat = computeExactHeight(for: scale)
        for candidateScale in stride(from: startScale, through: 0.76, by: -0.02) {
            let sc = CGFloat(candidateScale)
            let estH = computeExactHeight(for: sc)
            scale = sc
            bestEstH = estH
            if estH <= maxAvailableH {
                break
            }
        }

        // Distribute remaining vertical slack evenly across section gaps (space-between)
        let gapCount = 4 + ((!repDeText.isEmpty || !tipText.isEmpty) ? 1 : 0) + ((!repDeText.isEmpty && !tipText.isEmpty) ? 1 : 0)
        let slack = max(0.0, maxAvailableH - bestEstH)
        let extraGap = slack / CGFloat(max(1, gapCount))

        var cy = usableTop

        // 1. Running Header
        let lvlStr = "CẤP ĐỘ \(s.level)"
        NSColor.black.setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: 68.0, height: 18.0))
        drawTextBlock(
            lvlStr,
            x: geo.padX,
            y: cy + 3.5,
            width: 68.0,
            font: font("Arial", size: 8.8, bold: true),
            color: .white,
            alignment: .center
        )

        let catHeaderStr = "Chương \(globalChapNum): \(s.categoryLabel ?? "Giao tiếp")"
        drawTextBlock(
            catHeaderStr,
            x: geo.padX + 75.0,
            y: cy + 2.5,
            width: geo.contentW - 140.0,
            font: font("Times New Roman", size: 10.5, bold: true, italic: true)
        )

        let globalNum = spec.globalStartNumber + idx
        let packNum = s.packNumber ?? ((globalNum - 1) / 20 + 1)
        drawTextBlock(
            "Câu #\(String(format: "%03d", globalNum)) • Tuần \(packNum)",
            x: geo.padX,
            y: cy + 3.0,
            width: geo.contentW,
            font: font("Arial", size: 8.5, bold: true),
            alignment: .right
        )
        cy += 23.0

        // Double Header Rule (Gap 1)
        NSColor.black.setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: geo.contentW, height: 1.8))
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy + 3.2, width: geo.contentW, height: 0.6))
        cy += 10.0 * scale + extraGap

        // 2. Context Epigraph (Gap 2)
        let ctxFont = font("Times New Roman", size: 10.8 * scale, bold: true, italic: true)
        let ctxH = measureTextHeight(ctxText, width: geo.contentW - 11.0, font: ctxFont, lineSpacing: 1.8 * scale)
        NSColor.black.setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy + 1.5, width: 2.8, height: max(10.0, ctxH - 2.0)))
        cy = drawTextBlock(
            ctxText,
            x: geo.padX + 9.0,
            y: cy,
            width: geo.contentW - 11.0,
            font: ctxFont,
            lineSpacing: 1.8 * scale
        )
        cy += 10.0 * scale + extraGap

        // 3. GERMAN SECTION
        NSColor.black.setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: 54.0, height: 14.5))
        drawTextBlock(
            "DEUTSCH",
            x: geo.padX,
            y: cy + 2.2,
            width: 54.0,
            font: font("Arial", size: 7.8, bold: true),
            color: .white,
            alignment: .center
        )
        let patternLabel = (s.patternType == "frame") ? "KHUNG CÂU MỞ [X] • TIẾNG ĐỨC BẢN XỨ" : "CÂU PHẢN XẠ NGUYÊN KHỐI • TIẾNG ĐỨC BẢN XỨ"
        drawTextBlock(
            patternLabel,
            x: geo.padX + 60.0,
            y: cy + 2.2,
            width: geo.contentW - 60.0,
            font: font("Arial", size: 8.0, bold: true)
        )
        cy += 17.5 * scale

        cy = drawTextBlock(
            deText,
            x: geo.padX,
            y: cy,
            width: geo.contentW,
            font: font("Times New Roman", size: 19.5 * scale, bold: true),
            lineSpacing: 1.6 * scale
        )
        cy += 4.0 * scale

        if !phonText.isEmpty {
            cy = drawTextBlock(
                phonText,
                x: geo.padX,
                y: cy,
                width: geo.contentW,
                font: font("Times New Roman", size: 10.2 * scale, bold: true, italic: true),
                color: NSColor(calibratedWhite: 0.2, alpha: 1.0),
                lineSpacing: 1.5 * scale
            )
            cy += 7.0 * scale
        }

        if !regText.isEmpty {
            let regFont = font("Times New Roman", size: 10.0 * scale, bold: true)
            let regH = measureTextHeight(regText, width: geo.contentW - 18.0, font: regFont, lineSpacing: 2.5 * scale) + 11.0 * scale
            NSColor(calibratedWhite: 0.95, alpha: 1.0).setFill()
            NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: geo.contentW, height: regH))
            NSColor(calibratedWhite: 0.35, alpha: 1.0).setStroke()
            let rp = NSBezierPath(rect: NSRect(x: geo.padX, y: cy, width: geo.contentW, height: regH))
            rp.lineWidth = 0.8
            rp.stroke()

            _ = drawTextBlock(
                regText,
                x: geo.padX + 9.0,
                y: cy + 5.5 * scale,
                width: geo.contentW - 18.0,
                font: regFont,
                lineSpacing: 2.5 * scale
            )
            cy += regH + 9.0 * scale
        }

        // Hairline (Gap 3)
        NSColor(calibratedWhite: 0.48, alpha: 1.0).setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: geo.contentW, height: 0.8))
        cy += 8.5 * scale + extraGap

        // 4. ENGLISH (Gap 4)
        NSColor.black.setStroke()
        let enRect = NSRect(x: geo.padX, y: cy, width: 50.0, height: 14.0)
        let enPath = NSBezierPath(rect: enRect)
        enPath.lineWidth = 1.0
        enPath.stroke()
        drawTextBlock(
            "ENGLISH",
            x: geo.padX,
            y: cy + 2.2,
            width: 50.0,
            font: font("Arial", size: 7.5, bold: true),
            alignment: .center
        )
        drawTextBlock(
            "TƯƠNG ĐƯƠNG TỰ NHIÊN",
            x: geo.padX + 56.0,
            y: cy + 2.2,
            width: 220.0,
            font: font("Arial", size: 7.8, bold: true),
            color: NSColor(calibratedWhite: 0.25, alpha: 1.0)
        )
        cy += 16.5 * scale

        cy = drawTextBlock(
            enText,
            x: geo.padX,
            y: cy,
            width: geo.contentW,
            font: font("Times New Roman", size: 14.5 * scale, bold: true),
            lineSpacing: 1.6 * scale
        )
        cy += 8.5 * scale + extraGap

        // 5. VIETNAMESE
        let viRect = NSRect(x: geo.padX, y: cy, width: 60.0, height: 14.0)
        let viPath = NSBezierPath(rect: viRect)
        viPath.lineWidth = 1.0
        viPath.stroke()
        drawTextBlock(
            "TIẾNG VIỆT",
            x: geo.padX,
            y: cy + 2.2,
            width: 60.0,
            font: font("Arial", size: 7.5, bold: true),
            alignment: .center
        )
        drawTextBlock(
            "NGHĨA GIAO TIẾP ĐỜI THỰC",
            x: geo.padX + 66.0,
            y: cy + 2.2,
            width: 220.0,
            font: font("Arial", size: 7.8, bold: true),
            color: NSColor(calibratedWhite: 0.25, alpha: 1.0)
        )
        cy += 16.5 * scale

        cy = drawTextBlock(
            viText,
            x: geo.padX,
            y: cy,
            width: geo.contentW,
            font: font("Times New Roman", size: 13.5 * scale, bold: true),
            lineSpacing: 1.6 * scale
        )
        cy += 9.0 * scale

        // Hairline (Gap 5)
        NSColor(calibratedWhite: 0.48, alpha: 1.0).setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: geo.contentW, height: 0.8))
        cy += 8.5 * scale + ((!repDeText.isEmpty || !tipText.isEmpty) ? extraGap : 0.0)

        // 6. MINI-DIALOGUE REPLY (Gap 6)
        if !repDeText.isEmpty {
            cy = drawTextBlock(
                "HỘI THOẠI ĐÁP LẠI MẪU (MINI-DIALOGUE):",
                x: geo.padX,
                y: cy,
                width: geo.contentW,
                font: font("Arial", size: 8.0 * scale, bold: true)
            )
            cy += 2.5 * scale
            cy = drawTextBlock(
                repDeText,
                x: geo.padX,
                y: cy,
                width: geo.contentW,
                font: font("Times New Roman", size: 12.2 * scale, bold: true),
                lineSpacing: 1.5 * scale
            )
            cy += 2.0 * scale
            cy = drawTextBlock(
                repSubText,
                x: geo.padX,
                y: cy,
                width: geo.contentW,
                font: font("Times New Roman", size: 10.0 * scale, bold: true, italic: true),
                color: NSColor(calibratedWhite: 0.2, alpha: 1.0),
                lineSpacing: 1.5 * scale
            )
            cy += 9.0 * scale + (!tipText.isEmpty ? extraGap : 0.0)
        }

        // 7. NATIVE FOOTNOTE TIP
        if !tipText.isEmpty {
            let tipFont = font("Times New Roman", size: 10.0 * scale, bold: true)
            let tipH = measureTextHeight(tipText, width: geo.contentW - 18.0, font: tipFont, lineSpacing: 2.0 * scale) + 12.0 * scale
            NSColor(calibratedWhite: 0.94, alpha: 1.0).setFill()
            NSBezierPath.fill(NSRect(x: geo.padX, y: cy, width: geo.contentW, height: tipH))
            NSColor.black.setStroke()
            let tp = NSBezierPath(rect: NSRect(x: geo.padX, y: cy, width: geo.contentW, height: tipH))
            tp.lineWidth = 1.2
            tp.stroke()

            _ = drawTextBlock(
                tipText,
                x: geo.padX + 9.0,
                y: cy + 6.0 * scale,
                width: geo.contentW - 18.0,
                font: tipFont,
                lineSpacing: 2.0 * scale
            )
        }

        // 8. Symmetric Print Book Footer (No Kindle URLs!)
        drawSymmetricFooter(
            geo: geo,
            volumeLabel: volShortLabel,
            cardCode: "#\(s.id.uppercased())",
            totalPages: totalPages
        )
        endBookPage(pdfContext: pdfContext)
    }

    // ========================================================================
    // TRAILING STUDENT NOTES PAGES (To make page count a multiple of 4)
    // ========================================================================
    for nIdx in 0..<notesPagesCount {
        let pageNum = basePages + 1 + nIdx
        let geo = beginBookPage(pdfContext: pdfContext, pageNumber: pageNum)
        var ny = geo.frameY + 18.0

        NSColor.black.setFill()
        NSBezierPath.fill(NSRect(x: geo.padX, y: ny, width: geo.contentW, height: 22.0))
        drawTextBlock(
            "TRANG GHI CHÚ & TỔNG KẾT PHẢN XẠ CÁ NHÂN • DMF",
            x: geo.padX,
            y: ny + 5.5,
            width: geo.contentW,
            font: font("Arial", size: 9.0, bold: true),
            color: .white,
            alignment: .center
        )
        ny += 32.0

        ny = drawTextBlock(
            "Ghi lại các biến thể câu của riêng bạn hoặc các tình huống thực tế bạn đã áp dụng thành công trong tuần:",
            x: geo.padX,
            y: ny,
            width: geo.contentW,
            font: font("Times New Roman", size: 9.8, italic: true),
            color: NSColor(calibratedWhite: 0.2, alpha: 1.0)
        )
        ny += 18.0

        // Draw clean ruled lines for handwriting
        let maxLineY = geo.frameY + geo.frameH - 34.0
        NSColor(calibratedWhite: 0.65, alpha: 1.0).setStroke()
        while ny < maxLineY {
            let linePath = NSBezierPath()
            linePath.move(to: NSPoint(x: geo.padX, y: ny))
            linePath.line(to: NSPoint(x: geo.padX + geo.contentW, y: ny))
            linePath.lineWidth = 0.5
            linePath.stroke()
            ny += 21.0
        }

        drawSymmetricFooter(
            geo: geo,
            volumeLabel: volShortLabel,
            cardCode: "Ghi chú",
            totalPages: totalPages
        )
        endBookPage(pdfContext: pdfContext)
    }

    pdfContext.closePDF()
    print("OK: Generated DMF \(isKindleMode ? "Kindle E-Book" : "A5 Print Book") [\(actualFileName)] -> \(totalPages) pages (\(volSentences.count) sentences)")
}

let volumes: [VolumeSpec] = [
    VolumeSpec(
        volumeNumber: 1,
        fileName: "DMF_So_Tay_Giao_Tiep_Tap_1_Nen_Tang_Sinh_Ton_A5.pdf",
        badgeTitle: "TẬP 1 / 4 • CÂU 001 – 200 (TUẦN 1 – 10)",
        mainTitle: "Sổ Tay Giao Tiếp\nĐức – Anh – Việt",
        subTitle: "Tập 1: Phản Xạ Cốt Lõi, Đời Sống Hàng Ngày & Kỹ Năng Bắt Sóng Hội Thoại",
        descriptionText: "• Bao gồm 200 mẫu câu nền tảng tần suất cao nhất (Chương 01 → Chương 04).\n• Thiết kế theo phương pháp Chunking (Học theo cụm câu nguyên khối) kết hợp phân biệt rõ ngữ cảnh Thân mật (du) và Lịch sự (Sie).\n• Mỗi mẫu câu đều đi kèm Phiên âm thực tế và Câu đối đáp lượt 2 để học viên luyện phản xạ giao tiếp 2 chiều.",
        categories: ["basics", "daily", "backchannel", "fillers"],
        packRangeLabel: "Gói Tuần 1 → Tuần 10",
        globalStartNumber: 1
    ),
    VolumeSpec(
        volumeNumber: 2,
        fileName: "DMF_So_Tay_Giao_Tiep_Tap_2_Giao_Tiep_Xa_Hoi_A5.pdf",
        badgeTitle: "TẬP 2 / 4 • CÂU 201 – 400 (TUẦN 11 – 20)",
        mainTitle: "Sổ Tay Giao Tiếp\nĐức – Anh – Việt",
        subTitle: "Tập 2: Khung Câu Nhờ Vả, Từ Chối Khéo Léo, Ẩm Thực & Đi Lại Tàu Xe DB",
        descriptionText: "• Bao gồm 200 mẫu câu giao tiếp xã hội & dịch vụ thiết yếu tại Đức (Chương 05 → Chương 08).\n• Làm chủ các Khung câu mở [X] để tự tin nhờ vả, đặt ranh giới lịch sự, gọi món nhà hàng, mua sắm và đi tàu xe Deutsche Bahn.\n• Mỗi mẫu câu đều đi kèm Phiên âm thực tế và Câu đối đáp lượt 2 để học viên luyện phản xạ giao tiếp 2 chiều.",
        categories: ["requests", "boundaries", "dining", "transport"],
        packRangeLabel: "Gói Tuần 11 → Tuần 20",
        globalStartNumber: 201
    ),
    VolumeSpec(
        volumeNumber: 3,
        fileName: "DMF_So_Tay_Giao_Tiep_Tap_3_Cong_So_Hanh_Chinh_A5.pdf",
        badgeTitle: "TẬP 3 / 4 • CÂU 401 – 600 (TUẦN 21 – 30)",
        mainTitle: "Sổ Tay Giao Tiếp\nĐức – Anh – Việt",
        subTitle: "Tập 3: Thủ Tục Hành Chính, Khám Bác Sĩ, Giao Tiếp Công Sở & Tư Duy Phản Biện",
        descriptionText: "• Bao gồm 200 mẫu câu chuyên sâu cho công việc và thủ tục tại Đức (Chương 09 → Chương 12).\n• Tự tin làm việc với Sở Ngoại kiều (Ausländerbehörde), khám bệnh, họp hành công sở và bảo vệ quan điểm (B2–C1).\n• Mỗi mẫu câu đều đi kèm Phiên âm thực tế và Câu đối đáp lượt 2 để học viên luyện phản xạ giao tiếp 2 chiều.",
        categories: ["admin", "work", "opinions", "idioms"],
        packRangeLabel: "Gói Tuần 21 → Tuần 30",
        globalStartNumber: 401
    ),
    VolumeSpec(
        volumeNumber: 4,
        fileName: "DMF_So_Tay_Giao_Tiep_Tap_4_Tinh_Huong_Dac_Thu_A5.pdf",
        badgeTitle: "TẬP 4 / 4 • CÂU 601 – 800 (TUẦN 31 – 40)",
        mainTitle: "Sổ Tay Giao Tiếp\nĐức – Anh – Việt",
        subTitle: "Tập 4: Xử Lý Khẩn Cấp, Tình Cảm Gia Đình, Nhà Cửa Kỹ Thuật & Văn Hóa Xã Giao",
        descriptionText: "• Bao gồm 200 mẫu câu hoàn thiện mảnh ghép đời sống bản địa (Chương 13 → Chương 16).\n• Bao phủ các tình huống cấp cứu/cảnh sát (110/112), chia sẻ cảm xúc, làm việc với chủ nhà & thợ sửa chữa và giao lưu tiệc tùng.\n• Mỗi mẫu câu đều đi kèm Phiên âm thực tế và Câu đối đáp lượt 2 để học viên luyện phản xạ giao tiếp 2 chiều.",
        categories: ["emergencies", "relationships", "housing_tech", "social_events"],
        packRangeLabel: "Gói Tuần 31 → Tuần 40",
        globalStartNumber: 601
    ),
    VolumeSpec(
        volumeNumber: 0,
        fileName: "DMF_So_Tay_Giao_Tiep_Tron_Bo_800_Cau_A5.pdf",
        badgeTitle: "ẤN BẢN TỔNG HỢP • TRỌN BỘ 800 CÂU (TUẦN 1 – 40)",
        mainTitle: "Sổ Tay Giao Tiếp\nĐức – Anh – Việt",
        subTitle: "Ấn Bản Toàn Tập 16 Chương • 800 Mẫu Câu Phản Xạ Bản Xứ (A1 → C1)",
        descriptionText: "• Ấn bản tổng hợp đầy đủ 16 Chương mục (800 mẫu câu từ câu #001 đến #800) dành cho học viên và giảng viên tại DMF.\n• Chuẩn khổ giấy in A5 Quốc tế (148 × 210 mm), căn lề đối xứng Chẵn – Lẻ (Mirror Margins) sẵn sàng cho in ấn thương mại.\n• Mỗi mẫu câu đều đi kèm Phiên âm thực tế và Câu đối đáp lượt 2 để học viên luyện phản xạ giao tiếp 2 chiều.",
        categories: [
            "basics", "daily", "backchannel", "fillers",
            "requests", "boundaries", "dining", "transport",
            "admin", "work", "opinions", "idioms",
            "emergencies", "relationships", "housing_tech", "social_events"
        ],
        packRangeLabel: "Trọn bộ 40 Tuần (800 câu)",
        globalStartNumber: 1
    )
]

for v in volumes {
    if isKindleMode && v.volumeNumber == 0 { continue }
    renderVolumePDF(spec: v)
}
