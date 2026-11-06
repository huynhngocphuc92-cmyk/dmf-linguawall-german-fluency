const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFile } = require('child_process');
const {
  loadSentences,
  loadState,
  saveState,
  recordSrsReview,
  getSrsStats,
  getCurrentSentence,
  renderAndSaveAssets,
  rotateSentence,
  generateSentencesWithAI
} = require('./lib/engine');
const {
  speakSingle,
  speakDialogue,
  compareUserAndNativeAudio,
  startRadioLoop,
  stopRadioLoop,
  getRadioStatus,
  stopCurrentAudio,
  prewarmSentenceAudio
} = require('./lib/tts');
const {
  USER_WAV_AUDIO,
  evaluatePronunciation,
  transcribeWavViaPython,
  saveAndConvertUserAudio
} = require('./lib/speech');

const PORT = Number(process.env.PORT || 3456);
const PUBLIC_DIR = path.join(__dirname, 'public');
const GENERATED_DIR = path.join(__dirname, 'generated');
const PDF_GEN_BIN = path.join(__dirname, 'bin', 'generate-kindle-pdf');
const SENTENCES_FILE = path.join(__dirname, 'data', 'sentences.json');
const KINDLE_USB_DOCS = '/Volumes/Kindle/documents';

function syncKindleBookPdf(lanIp, port) {
  return new Promise((resolve) => {
    const outPdf = path.join(GENERATED_DIR, 'LinguaWall_So_Tay_Giao_Tiep_DE_EN_VI.pdf');
    const kindleUrl = `http://${lanIp}:${port}/kindle`;
    if (!fs.existsSync(PDF_GEN_BIN)) {
      return resolve({ ok: false, error: 'Missing bin/generate-kindle-pdf' });
    }
    execFile(PDF_GEN_BIN, [SENTENCES_FILE, outPdf, kindleUrl], (err) => {
      if (err) {
        return resolve({ ok: false, error: err.message });
      }
      let copiedToUsb = false;
      if (fs.existsSync(KINDLE_USB_DOCS)) {
        try {
          const destPdf = path.join(KINDLE_USB_DOCS, 'LinguaWall_So_Tay_Giao_Tiep_DE_EN_VI.pdf');
          fs.copyFileSync(outPdf, destPdf);
          copiedToUsb = true;
        } catch (_) {}
      }
      resolve({ ok: true, outPdf, copiedToUsb });
    });
  });
}

function getLanIp() {
  const nets = os.networkInterfaces();
  // Always prioritize real Wi-Fi / Ethernet interfaces (en0, en1) and private LAN subnets
  const preferredOrder = [
    'en0', 'en1', 'en2',
    ...Object.keys(nets).filter(k => !/^(en0|en1|en2|utun|awdl|llw|anpi|bridge|lo|gif|stf)/i.test(k))
  ];
  for (const name of preferredOrder) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        if (/^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(net.address)) {
          return net.address;
        }
      }
    }
  }
  for (const name of preferredOrder) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

function buildAppPayload() {
  const { current, state, sentences } = getCurrentSentence();
  return {
    currentSentence: current,
    state,
    srsStats: getSrsStats(sentences, state),
    radioStatus: getRadioStatus(),
    hasUserRecording: fs.existsSync(USER_WAV_AUDIO),
    sentences,
    lanIp: getLanIp(),
    port: PORT
  };
}

function buildKindleLitePayload() {
  const { current, state, sentences } = getCurrentSentence();
  return {
    currentSentence: current,
    state: {
      currentSentenceId: state.currentSentenceId,
      lastRotatedAt: state.lastRotatedAt,
      rotationIntervalMinutes: state.rotationIntervalMinutes || 30,
      activeRecallMode: Boolean(state.activeRecallMode),
      activePack: state.activePack || 'all'
    },
    srsStats: getSrsStats(sentences, state),
    lanIp: getLanIp(),
    port: PORT
  };
}

function readJsonBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (_) {
        resolve({});
      }
    });
  });
}

function buildKindlePW5Script(lanIp, port) {
  return `#!/bin/sh
# ==============================================================================
# LinguaWall • Kindle Paperwhite 5 (11th Gen - 1236x1648) E-Ink Sync Script
# Dành cho Kindle Paperwhite 5 đã Jailbreak (KOReader / KUAL / USBNetwork)
# ==============================================================================
# Hướng dẫn cài đặt trên Kindle Paperwhite 5:
# 1. Copy file này vào /mnt/us/linguawall-kindle-pw5.sh trên Kindle
# 2. Chạy lệnh: chmod +x /mnt/us/linguawall-kindle-pw5.sh
# 3. Để tự động đổi mỗi 30 phút qua cron trên Kindle:
#    echo "*/30 * * * * /mnt/us/linguawall-kindle-pw5.sh" >> /etc/crontab/root
# ==============================================================================

SERVER_URL="http://${lanIp}:${port}/api/kindle/pw5.png"
TMP_IMG="/tmp/linguawall-pw5.png"

# Tải ảnh 8-bit Grayscale chuẩn độ phân giải 1236x1648 của Kindle Paperwhite 5
curl -s -L --max-time 15 "$SERVER_URL?t=$(date +%s)" -o "$TMP_IMG"

if [ -s "$TMP_IMG" ]; then
  # Xóa bóng mờ E-Ink (Clear ghosting) và vẽ ảnh mới lên Framebuffer
  eips -c
  usleep 150000
  eips -g "$TMP_IMG"
fi
`;
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  try {
    // 1. HTML Pages
    if (req.method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
      const html = fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(html);
    }

    if (req.method === 'GET' && pathname === '/kindle') {
      let html = fs.readFileSync(path.join(PUBLIC_DIR, 'kindle.html'), 'utf8');
      const { current, state, sentences } = getCurrentSentence();
      const curIdx = Math.max(0, sentences.findIndex(s => s.id === current?.id));
      const offlinePool = sentences.slice(curIdx, curIdx + 40).concat(sentences.slice(0, 10)).slice(0, 40);
      const initialBoot = JSON.stringify({
        currentSentence: current,
        state: {
          currentSentenceId: state.currentSentenceId,
          lastRotatedAt: state.lastRotatedAt,
          rotationIntervalMinutes: state.rotationIntervalMinutes || 30,
          activeRecallMode: Boolean(state.activeRecallMode)
        },
        offlinePool
      }).replace(/</g, '\\u003c');
      html = html.replace('/*__INITIAL_KINDLE_BOOT__*/', `window.__INITIAL_KINDLE_BOOT__ = ${initialBoot};`);
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store'
      });
      return res.end(html);
    }

    if (req.method === 'GET' && pathname === '/desktop-wallpaper') {
      const html = fs.readFileSync(path.join(PUBLIC_DIR, 'desktop-wallpaper.html'), 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(html);
    }

    // 2. API: Get State (Full for Mac App, Lite 1.4KB for Kindle E-Ink Browser)
    if (req.method === 'GET' && (pathname === '/api/state' || pathname === '/api/kindle/state')) {
      const isLite = pathname === '/api/kindle/state' || parsedUrl.searchParams.get('lite') === '1';
      const payload = isLite ? buildKindleLitePayload() : buildAppPayload();
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store'
      });
      return res.end(JSON.stringify(payload));
    }

    // 3. API: Rotate Card & Apply Wallpaper
    if (req.method === 'POST' && pathname === '/api/rotate') {
      const body = await readJsonBody(req);
      const isLite = parsedUrl.searchParams.get('lite') === '1' || body.lite === true;
      const result = await rotateSentence({
        specificId: body.specificId || null,
        direction: body.direction || 'next',
        applyWallpaper: body.applyWallpaper !== false
      });
      // Prewarm Neural TTS audio in background for the newly active sentence
      prewarmSentenceAudio(result.currentSentence, result.state?.voiceGender || 'female').catch(() => {});
      const payload = isLite ? buildKindleLitePayload() : buildAppPayload();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify(payload));
    }

    // 4. API: Update Settings & Filters
    if (req.method === 'POST' && pathname === '/api/settings') {
      const body = await readJsonBody(req);
      const state = loadState();
      const visualChanged = Boolean(
        body.wallpaperTheme ||
        body.wallpaperLayout ||
        typeof body.activeRecallMode === 'boolean'
      );

      if (body.wallpaperTheme) state.wallpaperTheme = body.wallpaperTheme;
      if (body.wallpaperLayout) state.wallpaperLayout = body.wallpaperLayout;
      if (body.rotationIntervalMinutes) state.rotationIntervalMinutes = Number(body.rotationIntervalMinutes);
      if (typeof body.autoRotateMacWallpaper === 'boolean') {
        state.autoRotateMacWallpaper = body.autoRotateMacWallpaper;
      }
      if (typeof body.activeRecallMode === 'boolean') {
        state.activeRecallMode = body.activeRecallMode;
      }
      if (Array.isArray(body.activeLevels) && body.activeLevels.length > 0) {
        state.activeLevels = body.activeLevels;
      }
      if (Array.isArray(body.activeCategories) && body.activeCategories.length > 0) {
        state.activeCategories = body.activeCategories;
      }
      if (body.activePack !== undefined) {
        state.activePack = String(body.activePack);
      }
      if (body.voiceGender) {
        state.voiceGender = String(body.voiceGender);
      }
      if (Array.isArray(body.bookmarkedIds)) {
        state.bookmarkedIds = body.bookmarkedIds;
      }
      if (Array.isArray(body.masteredIds)) {
        state.masteredIds = body.masteredIds;
      }

      saveState(state);
      const { current } = getCurrentSentence();
      prewarmSentenceAudio(current, state.voiceGender || 'female').catch(() => {});
      await renderAndSaveAssets(current, state, visualChanged && state.autoRotateMacWallpaper !== false);

      const payload = buildAppPayload();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify(payload));
    }

    // 5. API: Speak via Studio Neural TTS (Seraphina / Florian / Ava / Andrew)
    if (req.method === 'POST' && pathname === '/api/speak') {
      const body = await readJsonBody(req);
      const state = loadState();
      const gender = body.gender || state.voiceGender || 'female';

      if (body.mode === 'stop') {
        stopRadioLoop();
        stopCurrentAudio();
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ ok: true, stopped: true }));
      }

      if (body.mode === 'compare-user') {
        const result = await compareUserAndNativeAudio({
          userWavPath: USER_WAV_AUDIO,
          text: body.text || '',
          lang: body.lang || 'de',
          gender
        });
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(result));
      }

      if (body.mode === 'dialogue') {
        const result = await speakDialogue({
          mainText: body.mainText || '',
          replyText: body.replyText || '',
          lang: body.lang || 'de',
          speed: body.speed || 'normal',
          gender
        });
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(result));
      }

      const text = String(body.text || '').trim();
      const lang = body.lang === 'en' ? 'en' : body.lang === 'vi' ? 'vi' : 'de';
      const speed = body.speed === 'slow' ? 'slow' : 'normal';
      const role = body.role === 'reply' ? 'reply' : 'main';

      let result = { ok: true };
      if (text) {
        result = await speakSingle({
          text,
          lang,
          speed,
          gender,
          role,
          playOnServer: true
        });
      }
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify(result));
    }

    // 5b. API: Smart Spaced Repetition (SRS) Review (again / good / easy)
    if (req.method === 'POST' && pathname === '/api/srs-review') {
      const body = await readJsonBody(req);
      const isLite = parsedUrl.searchParams.get('lite') === '1' || body.lite === true;
      const { current } = getCurrentSentence();
      const targetId = body.sentenceId || body.id || current?.id || 's001';
      const rating = ['again', 'good', 'easy'].includes(body.rating) ? body.rating : 'good';
      const { srsEntry } = recordSrsReview(targetId, rating);

      if (body.autoRotate) {
        const rot = await rotateSentence({
          direction: 'next',
          applyWallpaper: true
        });
        prewarmSentenceAudio(rot.currentSentence, rot.state?.voiceGender || 'female').catch(() => {});
      }

      const payload = isLite ? buildKindleLitePayload() : buildAppPayload();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: true, srsEntry, ...payload }));
    }

    // 5c. API: Pimsleur Hands-Free Radio Loop (start / stop / toggle / status)
    if (req.method === 'POST' && pathname === '/api/radio') {
      const body = await readJsonBody(req);
      const state = loadState();
      const currentlyActive = Boolean(getRadioStatus().active);
      const effectiveAction = body.action === 'toggle'
        ? (currentlyActive ? 'stop' : 'start')
        : body.action;

      if (effectiveAction === 'stop') {
        const radioStatus = stopRadioLoop();
        const payload = buildAppPayload();
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ ok: true, ...payload, radioStatus }));
      }
      if (effectiveAction === 'start') {
        const radioStatus = await startRadioLoop({
          gender: state.voiceGender || 'female',
          getNextSentence: async (isFirst) => {
            if (isFirst) {
              const { current } = getCurrentSentence();
              return current;
            }
            const rot = await rotateSentence({
              direction: 'next',
              applyWallpaper: state.autoRotateMacWallpaper !== false
            });
            return rot.currentSentence;
          }
        });
        const payload = buildAppPayload();
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ ok: true, ...payload, radioStatus }));
      }
      const payload = buildAppPayload();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: true, ...payload, radioStatus: getRadioStatus() }));
    }

    // 5d. API: Speech Recognition & Pronunciation / Roleplay Coach
    if (req.method === 'POST' && pathname === '/api/speech-evaluate') {
      const body = await readJsonBody(req);
      const state = loadState();
      const lang = body.lang === 'en' ? 'en' : 'de';
      const targetText = String(body.targetText || body.expectedText || '').trim();
      let spokenText = String(body.transcript || body.transcriptFallback || '').trim();
      let hasUserAudio = false;
      let sttError = null;

      if (body.audioBase64) {
        const saved = await saveAndConvertUserAudio(body.audioBase64);
        if (saved.ok && saved.wavPath) {
          hasUserAudio = true;
          if (!spokenText) {
            const sttRes = await transcribeWavViaPython(saved.wavPath, lang);
            if (sttRes.ok && sttRes.transcript) {
              spokenText = sttRes.transcript;
            } else {
              sttError = sttRes.error || 'Không nhận diện được giọng nói';
            }
          }
        }
      }

      const rawEval = evaluatePronunciation(targetText, spokenText, lang);
      const unifiedEval = {
        ...rawEval,
        score: rawEval.overallScore,
        recognizedText: spokenText,
        words: (rawEval.wordResults || []).map((w) => ({
          ...w,
          expected: w.word
        }))
      };

      // In Roleplay mode, if the user spoke the sentence well (>= 60%), have the native AI partner reply out loud!
      let partnerReplied = false;
      if (body.mode === 'roleplay' && rawEval.overallScore >= 60 && body.replyText) {
        partnerReplied = true;
        speakSingle({
          text: body.replyText,
          lang: 'de',
          speed: 'normal',
          gender: state.voiceGender || 'female',
          role: 'reply',
          playOnServer: true
        }).catch(() => {});
      }

      let srsEntry = null;
      if (body.sentenceId && body.autoSrs !== false) {
        const rev = recordSrsReview(body.sentenceId, rawEval.suggestedSrs);
        srsEntry = rev.srsEntry;
      }

      const appPayload = buildAppPayload();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({
        ok: !sttError || Boolean(spokenText),
        error: sttError,
        transcript: spokenText,
        hasUserAudio,
        hasUserRecording: hasUserAudio || appPayload.hasUserRecording,
        partnerReplied,
        srsEntry,
        evaluation: unifiedEval,
        ...unifiedEval,
        srsStats: appPayload.srsStats
      }));
    }

    // 5e. API: Serve user's last recorded WAV audio
    if (req.method === 'GET' && pathname === '/api/user-recording.wav') {
      if (!fs.existsSync(USER_WAV_AUDIO)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('No user recording found');
      }
      const wavBuf = fs.readFileSync(USER_WAV_AUDIO);
      res.writeHead(200, {
        'Content-Type': 'audio/wav',
        'Cache-Control': 'no-store'
      });
      return res.end(wavBuf);
    }

    // 6. API: AI Sentence Generator
    if (req.method === 'POST' && pathname === '/api/ai-generate') {
      const body = await readJsonBody(req);
      const added = await generateSentencesWithAI({
        topic: body.topic,
        level: body.level || 'B1',
        category: body.category || 'daily',
        apiKey: body.apiKey || ''
      });
      await syncKindleBookPdf(getLanIp(), PORT);
      const appState = buildAppPayload();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: true, added, appState }));
    }

    // 7. API: Serve Rendered macOS Wallpaper PNG
    if (req.method === 'GET' && pathname === '/api/wallpaper.png') {
      const imgPath = path.join(GENERATED_DIR, 'latest-mac-wallpaper.png');
      if (!fs.existsSync(imgPath)) {
        const { current, state } = getCurrentSentence();
        await renderAndSaveAssets(current, state, false);
      }
      const imgBuf = fs.readFileSync(imgPath);
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store'
      });
      return res.end(imgBuf);
    }

    // 8. API: Serve Rendered Kindle Paperwhite 5 (1236x1648 8-bit Grayscale PNG)
    if (req.method === 'GET' && pathname === '/api/kindle/pw5.png') {
      const imgPath = path.join(GENERATED_DIR, 'latest-kindle-pw5.png');
      if (!fs.existsSync(imgPath)) {
        const { current, state } = getCurrentSentence();
        await renderAndSaveAssets(current, state, false);
      }
      const imgBuf = fs.readFileSync(imgPath);
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-store'
      });
      return res.end(imgBuf);
    }

    // 9. API: Download Kindle Paperwhite 5 Jailbreak Sync Script
    if (req.method === 'GET' && pathname === '/api/kindle/script.sh') {
      const script = buildKindlePW5Script(getLanIp(), PORT);
      res.writeHead(200, {
        'Content-Type': 'text/x-sh; charset=utf-8',
        'Content-Disposition': 'attachment; filename="linguawall-kindle-pw5.sh"'
      });
      return res.end(script);
    }

    // 10. API: Download 801-Page Kindle Vector PDF Book
    if ((req.method === 'GET' || req.method === 'HEAD') && pathname === '/api/kindle/book.pdf') {
      const pdfPath = path.join(GENERATED_DIR, 'LinguaWall_So_Tay_Giao_Tiep_DE_EN_VI.pdf');
      if (!fs.existsSync(pdfPath)) {
        await syncKindleBookPdf(getLanIp(), PORT);
      }
      const pdfBuf = fs.readFileSync(pdfPath);
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="LinguaWall_So_Tay_Giao_Tiep_DE_EN_VI.pdf"'
      });
      return res.end(pdfBuf);
    }

    // 11. API: Download Commercial Print-Ready DMF A5 Books (Tập 1–4, Trọn Bộ & Gói Nén .ZIP)
    if ((req.method === 'GET' || req.method === 'HEAD') && pathname.startsWith('/api/print-book/')) {
      const requestedFile = path.basename(decodeURIComponent(pathname.replace('/api/print-book/', '')));
      const printDir = path.join(GENERATED_DIR, 'DMF_Print_Books');
      const filePath = path.join(printDir, requestedFile);
      const isZip = requestedFile.endsWith('.zip');
      const isPdf = requestedFile.endsWith('.pdf');
      if ((!isPdf && !isZip) || !fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Print book file not found');
      }
      const fileBuf = fs.readFileSync(filePath);
      res.writeHead(200, {
        'Content-Type': isZip ? 'application/zip' : 'application/pdf',
        'Content-Disposition': `${isZip ? 'attachment' : 'inline'}; filename="${requestedFile}"`
      });
      return res.end(fileBuf);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: err.message }));
  }
});

// Background 30-Minute Scheduler
setInterval(async () => {
  try {
    const state = loadState();
    const intervalMs = (state.rotationIntervalMinutes || 30) * 60 * 1000;
    const lastMs = state.lastRotatedAt ? new Date(state.lastRotatedAt).getTime() : 0;

    if (Date.now() - lastMs >= intervalMs) {
      console.log(`[${new Date().toLocaleTimeString()}] Auto-rotating sentence (${state.rotationIntervalMinutes || 30}m timer)...`);
      const rot = await rotateSentence({
        direction: 'next',
        applyWallpaper: state.autoRotateMacWallpaper !== false
      });
      prewarmSentenceAudio(rot.currentSentence, rot.state?.voiceGender || 'female').catch(() => {});
    }
  } catch (err) {
    console.error('Auto-rotation error:', err);
  }
}, 20000);

server.listen(PORT, '0.0.0.0', async () => {
  const lanIp = getLanIp();
  console.log('==================================================================');
  console.log(`🇩🇪🇬🇧🇻🇳 LinguaWall Server đang chạy tại:`);
  console.log(`   • Ứng dụng Trung tâm (Mac):       http://localhost:${PORT}`);
  console.log(`   • Kindle Paperwhite 5 (Web E-Ink): http://${lanIp}:${PORT}/kindle`);
  console.log(`   • Kindle PW5 Jailbreak PNG:        http://${lanIp}:${PORT}/api/kindle/pw5.png`);
  console.log('==================================================================');

  // Render initial wallpaper & Kindle PW5 image on startup
  try {
    const { current, state } = getCurrentSentence();
    state.lastRotatedAt = new Date().toISOString();
    saveState(state);
    prewarmSentenceAudio(current, state.voiceGender || 'female').catch(() => {});
    const res = await renderAndSaveAssets(current, state, state.autoRotateMacWallpaper !== false);
    console.log('Initial macOS Wallpaper & Kindle PW5 Image rendered:', res.wallpaperResult);
  } catch (e) {
    console.error('Initial render error:', e);
  }
});
