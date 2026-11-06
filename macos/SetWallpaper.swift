import AppKit
import Foundation

let args = CommandLine.arguments
guard args.count >= 2 else {
    fputs("Usage: set-wallpaper <absolute-image-path>\n", stderr)
    exit(1)
}

let imagePath = args[1]
let imageURL = URL(fileURLWithPath: imagePath)

guard FileManager.default.fileExists(atPath: imagePath) else {
    fputs("Error: File not found at \(imagePath)\n", stderr)
    exit(1)
}

let workspace = NSWorkspace.shared
var successCount = 0

for screen in NSScreen.screens {
    do {
        var options = workspace.desktopImageOptions(for: screen) ?? [:]
        options[.imageScaling] = NSImageScaling.scaleProportionallyUpOrDown.rawValue
        options[.allowClipping] = false
        try workspace.setDesktopImageURL(imageURL, for: screen, options: options)
        successCount += 1
    } catch {
        fputs("Failed to set wallpaper on screen \(screen): \(error)\n", stderr)
    }
}

if successCount > 0 {
    print("OK: Updated wallpaper on \(successCount) screen(s) -> \(imagePath)")
    exit(0)
} else {
    exit(2)
}
