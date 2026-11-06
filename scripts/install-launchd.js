const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const nodePath = process.execPath;
const serverPath = path.join(rootDir, 'server.js');
const launchAgentsDir = path.join(os.homedir(), 'Library', 'LaunchAgents');
const plistPath = path.join(launchAgentsDir, 'com.linguawall.daemon.plist');

if (!fs.existsSync(launchAgentsDir)) {
  fs.mkdirSync(launchAgentsDir, { recursive: true });
}

const plistContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.linguawall.daemon</string>
  <key>ProgramArguments</key>
  <array>
    <string>${nodePath}</string>
    <string>${serverPath}</string>
  </array>
  <key>WorkingDirectory</key>
  <string>${rootDir}</string>
  <key>RunAtLoad</key>
  <true/>
  <key>KeepAlive</key>
  <true/>
  <key>StandardOutPath</key>
  <string>${path.join(rootDir, 'generated', 'linguawall.log')}</string>
  <key>StandardErrorPath</key>
  <string>${path.join(rootDir, 'generated', 'linguawall.err.log')}</string>
</dict>
</plist>
`;

fs.writeFileSync(plistPath, plistContent, 'utf8');
console.log('Đã tạo LaunchAgent tại:', plistPath);
