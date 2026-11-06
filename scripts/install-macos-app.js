const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const { createCanvas } = require('@napi-rs/canvas');

const ROOT_DIR = path.resolve(__dirname, '..');
const BIN_DIR = path.join(ROOT_DIR, 'bin');
const GENERATED_DIR = path.join(ROOT_DIR, 'generated');
const NODE_PATH = process.execPath;

if (!fs.existsSync(BIN_DIR)) fs.mkdirSync(BIN_DIR, { recursive: true });
if (!fs.existsSync(GENERATED_DIR)) fs.mkdirSync(GENERATED_DIR, { recursive: true });

// 1. Render Kindle Warm Paper App Icon (1024x1024)
function renderAppIconPng(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const s = (v) => (v * size) / 1024;

  // Rounded macOS App Icon Squircle
  const pad = s(64);
  const w = size - pad * 2;
  const r = s(195);

  ctx.beginPath();
  ctx.moveTo(pad + r, pad);
  ctx.arcTo(pad + w, pad, pad + w, pad + w, r);
  ctx.arcTo(pad + w, pad + w, pad, pad + w, r);
  ctx.arcTo(pad, pad + w, pad, pad, r);
  ctx.arcTo(pad, pad, pad + w, pad, r);
  ctx.closePath();

  // Warm Kindle Paper Fill
  const grad = ctx.createLinearGradient(0, 0, size, size);
  grad.addColorStop(0, '#F7F3EA');
  grad.addColorStop(1, '#E6DDD0');
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.lineWidth = s(18);
  ctx.strokeStyle = '#181614';
  ctx.stroke();

  // Inner Double Book Frame
  const inPad = s(112);
  const inW = size - inPad * 2;
  ctx.lineWidth = s(5);
  ctx.strokeStyle = '#6E675E';
  ctx.strokeRect(inPad, inPad, inW, inW);

  // Top Red Stamp Badge
  ctx.fillStyle = '#8C2D19';
  ctx.fillRect(s(170), s(170), s(684), s(116));

  ctx.fillStyle = '#F7F3EA';
  ctx.font = `bold ${Math.round(s(58))}px "Helvetica Neue", Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DE • EN • VI', size / 2, s(228));

  // Center Literary Serif Monogram
  ctx.fillStyle = '#181614';
  ctx.font = `bold ${Math.round(s(250))}px "Charter", "Georgia", serif`;
  ctx.fillText('„Lw“', size / 2, s(525));

  // Bottom Subtitle Rule
  ctx.fillStyle = '#181614';
  ctx.fillRect(s(200), s(720), s(624), s(8));

  ctx.fillStyle = '#3A3631';
  ctx.font = `italic bold ${Math.round(s(52))}px "Charter", "Georgia", serif`;
  ctx.fillText('KINDLE • MAC', size / 2, s(800));

  return canvas.toBuffer('image/png');
}

function buildIcnsFile() {
  const iconsetDir = path.join(GENERATED_DIR, 'AppIcon.iconset');
  if (fs.existsSync(iconsetDir)) {
    fs.rmSync(iconsetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(iconsetDir, { recursive: true });

  const sizes = [16, 32, 128, 256, 512];
  for (const sz of sizes) {
    fs.writeFileSync(path.join(iconsetDir, `icon_${sz}x${sz}.png`), renderAppIconPng(sz));
    fs.writeFileSync(path.join(iconsetDir, `icon_${sz}x${sz}@2x.png`), renderAppIconPng(sz * 2));
  }

  const icnsPath = path.join(GENERATED_DIR, 'AppIcon.icns');
  execSync(`iconutil -c icns "${iconsetDir}" -o "${icnsPath}"`);
  return icnsPath;
}

// 2. Compile Native Swift Binaries
console.log('1. Đang biên dịch bộ công cụ gốc macOS (Swift)...');
execSync(`swiftc "${path.join(ROOT_DIR, 'macos', 'SetWallpaper.swift')}" -o "${path.join(BIN_DIR, 'set-wallpaper')}"`);
execSync(`swiftc "${path.join(ROOT_DIR, 'macos', 'GenerateKindlePDF.swift')}" -o "${path.join(BIN_DIR, 'generate-kindle-pdf')}"`);
execSync(`swiftc "${path.join(ROOT_DIR, 'macos', 'LinguaWallMenuBar.swift')}" -o "${path.join(BIN_DIR, 'LinguaWallMenuBar')}"`);
execSync(`swiftc "${path.join(ROOT_DIR, 'macos', 'LinguaWallApp.swift')}" -o "${path.join(BIN_DIR, 'LinguaWallWindow')}"`);

// 3. Build /Applications/LinguaWall.app Bundle
console.log('2. Đang đóng gói ứng dụng /Applications/LinguaWall.app...');
let appBundleDir = '/Applications/LinguaWall.app';
try {
  fs.mkdirSync(path.join(appBundleDir, 'Contents', 'MacOS'), { recursive: true });
  fs.mkdirSync(path.join(appBundleDir, 'Contents', 'Resources'), { recursive: true });
} catch (e) {
  appBundleDir = path.join(os.homedir(), 'Applications', 'LinguaWall.app');
  fs.mkdirSync(path.join(appBundleDir, 'Contents', 'MacOS'), { recursive: true });
  fs.mkdirSync(path.join(appBundleDir, 'Contents', 'Resources'), { recursive: true });
}

const icnsPath = buildIcnsFile();
fs.copyFileSync(icnsPath, path.join(appBundleDir, 'Contents', 'Resources', 'AppIcon.icns'));

const infoPlist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleExecutable</key>
  <string>LinguaWall</string>
  <key>CFBundleIconFile</key>
  <string>AppIcon</string>
  <key>CFBundleIdentifier</key>
  <string>com.linguawall.app</string>
  <key>CFBundleName</key>
  <string>LinguaWall</string>
  <key>CFBundleDisplayName</key>
  <string>LinguaWall</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>CFBundleShortVersionString</key>
  <string>1.0.0</string>
  <key>CFBundleVersion</key>
  <string>1</string>
  <key>LSMinimumSystemVersion</key>
  <string>13.0</string>
  <key>NSHighResolutionCapable</key>
  <true/>
  <key>NSMicrophoneUsageDescription</key>
  <string>LinguaWall sử dụng Micro để chấm điểm phát âm Tiếng Đức / Tiếng Anh và luyện đóng vai phản xạ.</string>
  <key>NSSpeechRecognitionUsageDescription</key>
  <string>LinguaWall sử dụng nhận diện giọng nói để chấm điểm phát âm từng từ.</string>
</dict>
</plist>
`;
fs.writeFileSync(path.join(appBundleDir, 'Contents', 'Info.plist'), infoPlist, 'utf8');

// Copy compiled WKWebView binary directly as the bundle executable
fs.copyFileSync(
  path.join(BIN_DIR, 'LinguaWallWindow'),
  path.join(appBundleDir, 'Contents', 'MacOS', 'LinguaWall')
);
fs.chmodSync(path.join(appBundleDir, 'Contents', 'MacOS', 'LinguaWall'), 0o755);

// 4. Configure & Load Persistent macOS LaunchAgents (Auto-start on boot + KeepAlive)
console.log('3. Đang đăng ký dịch vụ chạy ngầm tự động (LaunchAgents)...');
const launchAgentsDir = path.join(os.homedir(), 'Library', 'LaunchAgents');
if (!fs.existsSync(launchAgentsDir)) {
  fs.mkdirSync(launchAgentsDir, { recursive: true });
}

const daemonPlistPath = path.join(launchAgentsDir, 'com.linguawall.daemon.plist');
const menubarPlistPath = path.join(launchAgentsDir, 'com.linguawall.menubar.plist');

const daemonPlist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.linguawall.daemon</string>
  <key>ProgramArguments</key>
  <array>
    <string>${NODE_PATH}</string>
    <string>${path.join(ROOT_DIR, 'server.js')}</string>
  </array>
  <key>WorkingDirectory</key>
  <string>${ROOT_DIR}</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>${path.join(GENERATED_DIR, 'daemon.out.log')}</string>
  <key>StandardErrorPath</key>
  <string>${path.join(GENERATED_DIR, 'daemon.err.log')}</string>
</dict>
</plist>
`;

const menubarPlist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.linguawall.menubar</string>
  <key>ProgramArguments</key>
  <array>
    <string>${path.join(BIN_DIR, 'LinguaWallMenuBar')}</string>
  </array>
  <key>WorkingDirectory</key>
  <string>${ROOT_DIR}</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>${path.join(GENERATED_DIR, 'menubar.out.log')}</string>
  <key>StandardErrorPath</key>
  <string>${path.join(GENERATED_DIR, 'menubar.err.log')}</string>
</dict>
</plist>
`;

fs.writeFileSync(daemonPlistPath, daemonPlist, 'utf8');
fs.writeFileSync(menubarPlistPath, menubarPlist, 'utf8');

try { execSync(`launchctl unload "${daemonPlistPath}" 2>/dev/null || true`); } catch (_) {}
try { execSync(`launchctl unload "${menubarPlistPath}" 2>/dev/null || true`); } catch (_) {}

execSync(`launchctl load -w "${daemonPlistPath}"`);
execSync(`launchctl load -w "${menubarPlistPath}"`);

console.log('==================================================================');
console.log(`✅ Đã cài đặt thành công ứng dụng: ${appBundleDir}`);
console.log(`✅ Đã kích hoạt dịch vụ đổi Hình nền 30p/lần: com.linguawall.daemon`);
console.log(`✅ Đã kích hoạt thanh điều khiển Menu Bar:    com.linguawall.menubar`);
console.log('==================================================================');
