const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const { spawn, execFile } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const AUDIO_CACHE_DIR = path.join(ROOT_DIR, 'generated', 'audio-cache');
const VENV_PYTHON = path.join(ROOT_DIR, '.venv_tts', 'bin', 'python3');
const DAEMON_SCRIPT = path.join(ROOT_DIR, 'scripts', 'tts-daemon.py');

if (!fs.existsSync(AUDIO_CACHE_DIR)) {
  fs.mkdirSync(AUDIO_CACHE_DIR, { recursive: true });
}

const VOICE_PROFILES = {
  de: {
    female: 'de-DE-SeraphinaMultilingualNeural',
    male: 'de-DE-FlorianMultilingualNeural',
    katja: 'de-DE-KatjaNeural',
    conrad: 'de-DE-ConradNeural'
  },
  en: {
    female: 'en-US-AvaMultilingualNeural',
    male: 'en-US-AndrewMultilingualNeural',
    british: 'en-GB-SoniaNeural'
  },
  vi: {
    female: 'vi-VN-HoaiMyNeural',
    male: 'vi-VN-NamMinhNeural'
  }
};

function normalizeTextForSpeech(rawText, lang = 'de') {
  let t = String(rawText || '').trim();
  if (!t) return '';

  // Strip typographic quotes that might cause unnatural micro-pauses
  t = t.replace(/[„“”‚‘]/g, '');

  // Replace slashes between alternatives with a full stop pause
  t = t.replace(/\s*\/\s*/g, '. ');

  // Replace em-dashes with a natural comma/clause pause
  t = t.replace(/\s*—\s*/g, ', ');

  // Replace slot placeholders like [X] or [Name] with natural spoken words
  if (lang === 'de') {
    t = t.replace(/\[Name\]/gi, 'Lisa');
    t = t.replace(/\[X\]/gi, 'das kurz besprechen');
    t = t.replace(/\bSEV\b/g, 'Schienenersatzverkehr');
    t = t.replace(/\(RE\)/g, '');
  } else if (lang === 'en') {
    t = t.replace(/\[Name\]/gi, 'Lisa');
    t = t.replace(/\[X-ing\]/gi, 'doing that');
    t = t.replace(/\[X\]/gi, 'do that');
  }

  // Collapse multiple spaces
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
}

function resolveVoice({ lang = 'de', gender = 'female', role = 'main', preferredVoice = '' }) {
  if (preferredVoice && preferredVoice.includes('Neural')) {
    return preferredVoice;
  }
  const langVoices = VOICE_PROFILES[lang] || VOICE_PROFILES.de;
  if (role === 'reply') {
    // Use opposite gender for natural 2-person dialogue contrast!
    return gender === 'male' ? langVoices.female : langVoices.male;
  }
  if (gender === 'male') return langVoices.male;
  if (gender === 'katja' && lang === 'de') return langVoices.katja;
  if (gender === 'conrad' && lang === 'de') return langVoices.conrad;
  if (gender === 'british' && lang === 'en') return langVoices.british;
  return langVoices.female;
}

function getCacheFilePath(text, voice, speed = 'normal') {
  const rateTag = speed === 'slow' ? 'slow' : 'normal';
  const hash = crypto
    .createHash('sha1')
    .update(`${voice}|${rateTag}|${text}`)
    .digest('hex')
    .slice(0, 20);
  return path.join(AUDIO_CACHE_DIR, `${voice}_${rateTag}_${hash}.mp3`);
}

// Persistent Python edge-tts worker manager
let workerProc = null;
let workerReady = false;
let reqCounter = 0;
const pendingReqs = new Map();
let stdoutBuffer = '';

function startWorker() {
  if (workerProc || !fs.existsSync(VENV_PYTHON) || !fs.existsSync(DAEMON_SCRIPT)) {
    return;
  }
  try {
    workerProc = spawn(VENV_PYTHON, [DAEMON_SCRIPT], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    workerProc.stdout.on('data', (chunk) => {
      stdoutBuffer += chunk.toString('utf8');
      let idx;
      while ((idx = stdoutBuffer.indexOf('\n')) !== -1) {
        const line = stdoutBuffer.slice(0, idx).trim();
        stdoutBuffer = stdoutBuffer.slice(idx + 1);
        if (!line) continue;
        try {
          const msg = JSON.parse(line);
          if (msg.ready) {
            workerReady = true;
            continue;
          }
          if (msg.id && pendingReqs.has(msg.id)) {
            const { resolve } = pendingReqs.get(msg.id);
            pendingReqs.delete(msg.id);
            resolve(msg);
          }
        } catch (_) {}
      }
    });

    workerProc.on('exit', () => {
      workerProc = null;
      workerReady = false;
      for (const [, { resolve }] of pendingReqs) {
        resolve({ ok: false, error: 'TTS worker exited' });
      }
      pendingReqs.clear();
    });
  } catch (err) {
    console.error('Failed to spawn TTS worker:', err.message);
    workerProc = null;
  }
}

function synthesizeViaEdgeWorker({ text, voice, rate, outPath }) {
  return new Promise((resolve) => {
    if (!workerProc) startWorker();
    if (!workerProc || !workerProc.stdin.writable) {
      return resolve({ ok: false, error: 'Worker unavailable' });
    }

    const id = `r_${++reqCounter}_${Date.now()}`;
    const timer = setTimeout(() => {
      if (pendingReqs.has(id)) {
        pendingReqs.delete(id);
        resolve({ ok: false, error: 'Edge TTS timeout' });
      }
    }, 10000);

    pendingReqs.set(id, {
      resolve: (res) => {
        clearTimeout(timer);
        resolve(res);
      }
    });

    const payload = JSON.stringify({ id, text, voice, rate, outPath }) + '\n';
    workerProc.stdin.write(payload);
  });
}

function synthesizeViaGoogleFallback({ text, lang, outPath }) {
  return new Promise((resolve) => {
    const tl = lang === 'en' ? 'en' : lang === 'vi' ? 'vi' : 'de';
    const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${encodeURIComponent(text)}`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        res.resume();
        return resolve({ ok: false, error: `Google TTS status ${res.statusCode}` });
      }
      const tmpPath = outPath + '.gtmp';
      const fileStream = fs.createWriteStream(tmpPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => {
          try {
            fs.renameSync(tmpPath, outPath);
            resolve({ ok: true, outPath, provider: 'google-neural' });
          } catch (e) {
            resolve({ ok: false, error: e.message });
          }
        });
      });
    }).on('error', (err) => {
      resolve({ ok: false, error: err.message });
    });
  });
}

async function ensureAudioFile({
  text,
  lang = 'de',
  speed = 'normal',
  gender = 'female',
  role = 'main',
  preferredVoice = ''
}) {
  const normalized = normalizeTextForSpeech(text, lang);
  if (!normalized) {
    throw new Error('Empty text for speech synthesis');
  }

  const voice = resolveVoice({ lang, gender, role, preferredVoice });
  const outPath = getCacheFilePath(normalized, voice, speed);

  // Instant cache hit!
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 500) {
    return {
      ok: true,
      cached: true,
      outPath,
      voice,
      normalizedText: normalized
    };
  }

  const rate = speed === 'slow' ? '-22%' : '+0%';
  const edgeRes = await synthesizeViaEdgeWorker({
    text: normalized,
    voice,
    rate,
    outPath
  });

  if (edgeRes.ok && fs.existsSync(outPath) && fs.statSync(outPath).size > 500) {
    return {
      ok: true,
      cached: false,
      outPath,
      voice,
      normalizedText: normalized,
      provider: 'azure-neural'
    };
  }

  // Fallback to Google Neural TTS
  const googleRes = await synthesizeViaGoogleFallback({
    text: normalized,
    lang,
    outPath
  });

  if (googleRes.ok && fs.existsSync(outPath) && fs.statSync(outPath).size > 500) {
    return {
      ok: true,
      cached: false,
      outPath,
      voice: `google-${lang}-neural`,
      normalizedText: normalized,
      provider: 'google-neural'
    };
  }

  return {
    ok: false,
    error: edgeRes.error || googleRes.error || 'TTS failed',
    normalizedText: normalized
  };
}

// Active audio process management so clicks NEVER overlap
let activePlayProc = null;
let activeDialogueAbort = null;
let radioLoopState = {
  active: false,
  currentSentenceId: null,
  step: 0,
  stepLabel: 'Đang tắt',
  playedCount: 0,
  startedAt: null
};
let activeRadioAbort = null;
let radioCaffeinateProc = null;

function stopRadioLoop() {
  if (activeRadioAbort) {
    activeRadioAbort.aborted = true;
    activeRadioAbort = null;
  }
  if (radioCaffeinateProc) {
    try { radioCaffeinateProc.kill('SIGKILL'); } catch (_) {}
    radioCaffeinateProc = null;
  }
  radioLoopState.active = false;
  radioLoopState.step = 0;
  radioLoopState.stepLabel = 'Đã dừng Đài Radio';
  stopCurrentAudio();
  return getRadioStatus();
}

function getRadioStatus() {
  return { ...radioLoopState };
}

function stopCurrentAudio() {
  if (activeDialogueAbort) {
    activeDialogueAbort.aborted = true;
    activeDialogueAbort = null;
  }
  if (activePlayProc) {
    try {
      activePlayProc.kill('SIGKILL');
    } catch (_) {}
    activePlayProc = null;
  }
}

function playAudioFileOnMac(filePath, playbackRate = 1.0) {
  return new Promise((resolve) => {
    stopCurrentAudio();
    const args = playbackRate !== 1.0
      ? ['-r', String(playbackRate), '-q', '1', filePath]
      : [filePath];
    const proc = spawn('/usr/bin/afplay', args);
    activePlayProc = proc;
    proc.on('close', () => {
      if (activePlayProc === proc) activePlayProc = null;
      resolve({ ok: true });
    });
    proc.on('error', () => {
      if (activePlayProc === proc) activePlayProc = null;
      resolve({ ok: false });
    });
  });
}

async function speakSingle({
  text,
  lang = 'de',
  speed = 'normal',
  gender = 'female',
  role = 'main',
  preferredVoice = '',
  playOnServer = true
}) {
  stopCurrentAudio();

  // Fast path for slow mode: if normal speed is already cached on disk but slow isn't yet,
  // play normal at 0.80x HQ immediately (0ms latency) and cache the dedicated slow neural track in background!
  if (speed === 'slow' && playOnServer) {
    const normalized = normalizeTextForSpeech(text, lang);
    const voice = resolveVoice({ lang, gender, role, preferredVoice });
    const slowPath = getCacheFilePath(normalized, voice, 'slow');
    const normalPath = getCacheFilePath(normalized, voice, 'normal');

    if (
      (!fs.existsSync(slowPath) || fs.statSync(slowPath).size <= 500) &&
      fs.existsSync(normalPath) &&
      fs.statSync(normalPath).size > 500
    ) {
      playAudioFileOnMac(normalPath, 0.80);
      // Warm dedicated neural slow file in background for next time
      ensureAudioFile({ text, lang, speed: 'slow', gender, role, preferredVoice }).catch(() => {});
      return {
        ok: true,
        cached: true,
        voice,
        mode: 'hq-timescale-instant',
        fileName: path.basename(normalPath)
      };
    }
  }

  const res = await ensureAudioFile({ text, lang, speed, gender, role, preferredVoice });

  if (res.ok && res.outPath) {
    if (playOnServer) {
      playAudioFileOnMac(res.outPath, 1.0);
    }
    return {
      ok: true,
      cached: res.cached,
      voice: res.voice,
      fileName: path.basename(res.outPath)
    };
  }

  // Offline emergency fallback to macOS `say`
  if (playOnServer && res.normalizedText) {
    const fallbackVoice = lang === 'en' ? 'Samantha' : 'Anna';
    const fallbackRate = speed === 'slow' ? '130' : '170';
    const proc = spawn('/usr/bin/say', ['-v', fallbackVoice, '-r', fallbackRate, res.normalizedText]);
    activePlayProc = proc;
  }
  return { ok: true, fallback: 'macos-say' };
}

async function speakDialogue({
  mainText,
  replyText,
  lang = 'de',
  speed = 'normal',
  gender = 'female'
}) {
  stopCurrentAudio();
  const abortToken = { aborted: false };
  activeDialogueAbort = abortToken;

  // Synthesize both Speaker A and Speaker B in parallel!
  const [mainAudio, replyAudio] = await Promise.all([
    ensureAudioFile({ text: mainText, lang, speed, gender, role: 'main' }),
    ensureAudioFile({ text: replyText, lang, speed, gender, role: 'reply' })
  ]);

  if (abortToken.aborted) return { ok: false, aborted: true };

  // Play Speaker A, pause 420ms, then play Speaker B asynchronously
  (async () => {
    if (mainAudio.ok && mainAudio.outPath && !abortToken.aborted) {
      await new Promise((resolve) => {
        const proc = spawn('/usr/bin/afplay', [mainAudio.outPath]);
        activePlayProc = proc;
        proc.on('close', resolve);
        proc.on('error', resolve);
      });
    }
    if (abortToken.aborted) return;
    await new Promise(r => setTimeout(r, 420));
    if (abortToken.aborted) return;
    if (replyAudio.ok && replyAudio.outPath && !abortToken.aborted) {
      await new Promise((resolve) => {
        const proc = spawn('/usr/bin/afplay', [replyAudio.outPath]);
        activePlayProc = proc;
        proc.on('close', resolve);
        proc.on('error', resolve);
      });
    }
  })();

  return {
    ok: true,
    mainVoice: mainAudio.voice,
    replyVoice: replyAudio.voice
  };
}

async function prewarmSentenceAudio(sentence, gender = 'female') {
  if (!sentence) return;
  try {
    const tasks = [
      ensureAudioFile({ text: sentence.de, lang: 'de', speed: 'normal', gender, role: 'main' }),
      ensureAudioFile({ text: sentence.en, lang: 'en', speed: 'normal', gender, role: 'main' })
    ];
    if (sentence.reply?.de) {
      tasks.push(ensureAudioFile({ text: sentence.reply.de, lang: 'de', speed: 'normal', gender, role: 'reply' }));
    }
    await Promise.allSettled(tasks);
  } catch (_) {}
}

async function compareUserAndNativeAudio({
  userWavPath,
  text,
  lang = 'de',
  gender = 'female'
}) {
  stopCurrentAudio();
  const abortToken = { aborted: false };
  activeDialogueAbort = abortToken;

  const nativeAudio = await ensureAudioFile({ text, lang, speed: 'normal', gender, role: 'main' });
  if (abortToken.aborted) return { ok: false, aborted: true };

  (async () => {
    if (userWavPath && fs.existsSync(userWavPath) && !abortToken.aborted) {
      await new Promise((resolve) => {
        const proc = spawn('/usr/bin/afplay', [userWavPath]);
        activePlayProc = proc;
        proc.on('close', resolve);
        proc.on('error', resolve);
      });
    }
    if (abortToken.aborted) return;
    await new Promise((r) => setTimeout(r, 380));
    if (abortToken.aborted) return;
    if (nativeAudio.ok && nativeAudio.outPath && !abortToken.aborted) {
      await new Promise((resolve) => {
        const proc = spawn('/usr/bin/afplay', [nativeAudio.outPath]);
        activePlayProc = proc;
        proc.on('close', resolve);
        proc.on('error', resolve);
      });
    }
  })();

  return { ok: true, voice: nativeAudio.voice };
}

function playTrackWait(filePath, rate = 1.0, abortToken) {
  return new Promise((resolve) => {
    if (!filePath || !fs.existsSync(filePath) || abortToken?.aborted) {
      return resolve();
    }
    const args = rate !== 1.0 ? ['-r', String(rate), '-q', '1', filePath] : [filePath];
    const proc = spawn('/usr/bin/afplay', args);
    activePlayProc = proc;
    proc.on('close', () => {
      if (activePlayProc === proc) activePlayProc = null;
      resolve();
    });
    proc.on('error', () => {
      if (activePlayProc === proc) activePlayProc = null;
      resolve();
    });
  });
}

function sleepWait(ms, abortToken) {
  return new Promise((resolve) => {
    if (abortToken?.aborted) return resolve();
    setTimeout(resolve, ms);
  });
}

async function startRadioLoop({ getNextSentence, gender = 'female' }) {
  stopRadioLoop();
  const abortToken = { aborted: false };
  activeRadioAbort = abortToken;
  try {
    radioCaffeinateProc = spawn('/usr/bin/caffeinate', ['-di']);
  } catch (_) {}

  radioLoopState = {
    active: true,
    currentSentenceId: null,
    step: 1,
    stepLabel: 'Đang khởi động Đài Radio Phản Xạ...',
    playedCount: 0,
    startedAt: new Date().toISOString()
  };

  (async () => {
    let isFirst = true;
    while (!abortToken.aborted && radioLoopState.active) {
      try {
        const sentence = await getNextSentence(isFirst);
        isFirst = false;
        if (!sentence || abortToken.aborted) break;

        radioLoopState.currentSentenceId = sentence.id;

        // Pre-synthesize all tracks for this sentence in parallel
        radioLoopState.step = 1;
        radioLoopState.stepLabel = `Bước 1/4 • Nghe nghĩa Tiếng Việt (#${sentence.id.toUpperCase()})`;

        const [viAudio, deNormalAudio, deReplyAudio] = await Promise.all([
          ensureAudioFile({ text: sentence.vi, lang: 'vi', speed: 'normal', gender: 'female', role: 'main' }),
          ensureAudioFile({ text: sentence.de, lang: 'de', speed: 'normal', gender, role: 'main' }),
          sentence.reply?.de
            ? ensureAudioFile({ text: sentence.reply.de, lang: 'de', speed: 'normal', gender, role: 'reply' })
            : Promise.resolve({ ok: false })
        ]);

        if (abortToken.aborted) break;

        // Step 1: Play Vietnamese prompt
        if (viAudio.ok && viAudio.outPath) {
          await playTrackWait(viAudio.outPath, 1.0, abortToken);
        }
        if (abortToken.aborted) break;

        // Step 2: 3.0s Pimsleur Active Recall Pause (user speaks German aloud)
        radioLoopState.step = 2;
        radioLoopState.stepLabel = `Bước 2/4 • Nghỉ 3s: Hãy tự bật ra câu Tiếng Đức...`;
        await sleepWait(3000, abortToken);
        if (abortToken.aborted) break;

        // Step 3: Play German Slow (0.82x) + German Normal (1.0x)
        radioLoopState.step = 3;
        radioLoopState.stepLabel = `Bước 3/4 • Đáp án Tiếng Đức (Chậm 0.8x → Chuẩn 1.0x)`;
        if (deNormalAudio.ok && deNormalAudio.outPath) {
          await playTrackWait(deNormalAudio.outPath, 0.82, abortToken);
          await sleepWait(450, abortToken);
          if (abortToken.aborted) break;
          await playTrackWait(deNormalAudio.outPath, 1.0, abortToken);
        }
        if (abortToken.aborted) break;

        // Step 4: Play 2nd-turn Dialogue Reply
        if (deReplyAudio.ok && deReplyAudio.outPath) {
          await sleepWait(450, abortToken);
          if (abortToken.aborted) break;
          radioLoopState.step = 4;
          radioLoopState.stepLabel = `Bước 4/4 • Hội thoại Đáp lại Lượt 2`;
          await playTrackWait(deReplyAudio.outPath, 1.0, abortToken);
        }

        radioLoopState.playedCount += 1;
        await sleepWait(1100, abortToken);
      } catch (err) {
        console.error('Radio loop error:', err.message);
        await sleepWait(1500, abortToken);
      }
    }
    radioLoopState.active = false;
  })();

  return getRadioStatus();
}

// Start the persistent Python neural worker immediately on module load
startWorker();

module.exports = {
  VOICE_PROFILES,
  AUDIO_CACHE_DIR,
  normalizeTextForSpeech,
  ensureAudioFile,
  speakSingle,
  speakDialogue,
  compareUserAndNativeAudio,
  startRadioLoop,
  stopRadioLoop,
  getRadioStatus,
  stopCurrentAudio,
  prewarmSentenceAudio
};
