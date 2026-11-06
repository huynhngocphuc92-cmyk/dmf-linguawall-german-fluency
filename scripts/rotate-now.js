const { rotateSentence } = require('../lib/engine');

(async () => {
  const res = await rotateSentence({ direction: 'next', applyWallpaper: true });
  console.log(`Đã đổi sang câu [${res.currentSentence.level}] ${res.currentSentence.de}`);
  console.log('Kết quả cập nhật Hình nền macOS:', res.renderResult.wallpaperResult);
})();
