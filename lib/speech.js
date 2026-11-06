const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const GENERATED_DIR = path.join(ROOT_DIR, 'generated');
const VENV_PYTHON = path.join(ROOT_DIR, '.venv_tts', 'bin', 'python3');
const USER_RAW_AUDIO = path.join(GENERATED_DIR, 'user-last-input.bin');
const USER_WAV_AUDIO = path.join(GENERATED_DIR, 'user-last-recording.wav');

if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
}

const NUMBER_MAP_DE = {
  '0': 'null',
  '1': 'eins',
  '2': 'zwei',
  '3': 'drei',
  '4': 'vier',
  '5': 'fünf',
  '6': 'sechs',
  '7': 'sieben',
  '8': 'acht',
  '9': 'neun',
  '10': 'zehn',
  '11': 'elf',
  '12': 'zwölf',
  '14': 'vierzehn',
  '15': 'fünfzehn',
  '20': 'zwanzig',
  '30': 'dreißig',
  '50': 'fünfzig',
  '80': 'achtzig',
  '100': 'hundert',
  '110': 'hundertzehn',
  '112': 'hundertzwölf'
};

function normalizeToken(word, lang = 'de') {
  let w = String(word || '')
    .toLowerCase()
    .replace(/[„“”"‚‘'.,!?;:()—–\-]/g, '')
    .trim();
  if (!w) return '';
  if (lang === 'de' && NUMBER_MAP_DE[w]) {
    w = NUMBER_MAP_DE[w];
  }
  // Normalize German ß -> ss for fair phonetic comparison
  w = w.replace(/ß/g, 'ss');
  return w;
}

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

function wordSimilarity(normA, normB) {
  if (!normA && !normB) return 1;
  if (!normA || !normB) return 0;
  if (normA === normB) return 1;
  // Also check umlaut-relaxed equivalence (ä->ae, ö->oe, ü->ue)
  const fold = (s) => s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
  if (fold(normA) === fold(normB)) return 0.96;

  const dist = levenshtein(normA, normB);
  const maxLen = Math.max(normA.length, normB.length);
  return Math.max(0, 1 - dist / maxLen);
}

function evaluatePronunciation(targetText, spokenText, lang = 'de') {
  const rawTargetWords = String(targetText || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const rawSpokenWords = String(spokenText || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const normSpoken = rawSpokenWords
    .map((w) => ({ raw: w, norm: normalizeToken(w, lang), used: false }))
    .filter((x) => x.norm.length > 0);

  const wordResults = [];
  let totalWeight = 0;
  let earnedWeight = 0;

  rawTargetWords.forEach((rawWord, idx) => {
    const normTarget = normalizeToken(rawWord, lang);
    if (!normTarget) return;

    const weight = Math.max(2, normTarget.length);
    totalWeight += weight;

    // Find best matching unused spoken word within a reasonable window
    let bestIdx = -1;
    let bestSim = 0;

    for (let j = 0; j < normSpoken.length; j++) {
      if (normSpoken[j].used) continue;
      const sim = wordSimilarity(normTarget, normSpoken[j].norm);
      // Slight positional preference for nearby words
      const posPenalty = Math.min(0.12, Math.abs(idx - j) * 0.02);
      const effectiveSim = sim - posPenalty;
      if (effectiveSim > bestSim) {
        bestSim = effectiveSim;
        bestIdx = j;
      }
    }

    let actualSim = 0;
    let heardWord = '';
    if (bestIdx !== -1) {
      actualSim = wordSimilarity(normTarget, normSpoken[bestIdx].norm);
      if (actualSim >= 0.45) {
        normSpoken[bestIdx].used = true;
        heardWord = normSpoken[bestIdx].raw;
      }
    }

    let status = 'missed';
    if (actualSim >= 0.80) {
      status = 'correct';
      earnedWeight += weight;
    } else if (actualSim >= 0.52) {
      status = 'close';
      earnedWeight += weight * actualSim;
    }

    wordResults.push({
      word: rawWord,
      norm: normTarget,
      status,
      similarity: Math.round(actualSim * 100),
      heard: heardWord
    });
  });

  const overallScore = totalWeight > 0
    ? Math.min(100, Math.round((earnedWeight / totalWeight) * 100))
    : 0;

  const missedWords = wordResults.filter((w) => w.status === 'missed').map((w) => w.word.replace(/[.,!?;:„“”"]/g, ''));
  const closeWords = wordResults.filter((w) => w.status === 'close').map((w) => w.word.replace(/[.,!?;:„“”"]/g, ''));

  let gradeLabel = 'Cần luyện thêm';
  let feedbackVi = '';
  let suggestedSrs = 'again';

  if (overallScore >= 88) {
    gradeLabel = '🌟 Xuất sắc • Chuẩn Bản Xứ';
    feedbackVi = closeWords.length > 0
      ? `Phát âm cực kỳ rõ và chuẩn nhịp! Chú ý nhấn rõ thêm âm ở từ: "${closeWords.join(', ')}".`
      : 'Tuyệt vời! Bạn phát âm rõ từng âm tiết, người bản xứ nghe hiểu 100% ngay lập tức!';
    suggestedSrs = 'easy';
  } else if (overallScore >= 68) {
    gradeLabel = '👍 Khá Tốt • Nghe Hiểu Rõ';
    const focus = [...missedWords, ...closeWords].slice(0, 4);
    feedbackVi = focus.length > 0
      ? `Đã truyền tải đúng ý chính! Hãy bấm nghe chậm (0.80x) và đọc rõ lại các từ: "${focus.join(', ')}".`
      : 'Phát âm khá tốt, hãy luyện đọc liền mạch thêm một lần nữa để đạt tốc độ phản xạ tự nhiên.';
    suggestedSrs = 'good';
  } else {
    gradeLabel = '🔥 Cần Đọc Chậm & Rõ Âm Hơn';
    const focus = missedWords.slice(0, 5);
    feedbackVi = focus.length > 0
      ? `Máy chưa bắt rõ các từ: "${focus.join(', ')}". Hãy nghe mẫu chậm 0.80x rồi đọc to, dứt khoát từng cụm nhé!`
      : 'Hãy bấm nghe câu mẫu chậm 0.80x và đọc to, rõ từng chữ sát micro hơn nhé.';
    suggestedSrs = 'again';
  }

  return {
    overallScore,
    gradeLabel,
    feedbackVi,
    suggestedSrs,
    wordResults,
    missedWords,
    closeWords
  };
}

function transcribeWavViaPython(wavPath, lang = 'de') {
  return new Promise((resolve) => {
    if (!fs.existsSync(VENV_PYTHON) || !fs.existsSync(wavPath)) {
      return resolve({ ok: false, error: 'Missing python STT environment or wav file' });
    }
    const sttLang = lang === 'en' ? 'en-US' : 'de-DE';
    const pyCode = `
import sys, json, speech_recognition as sr
wav_path = sys.argv[1]
lang = sys.argv[2]
r = sr.Recognizer()
try:
    with sr.AudioFile(wav_path) as source:
        audio = r.record(source)
    text = r.recognize_google(audio, language=lang)
    print(json.dumps({"ok": True, "transcript": text}))
except sr.UnknownValueError:
    print(json.dumps({"ok": False, "error": "Không nghe rõ giọng nói trong bản thu âm. Anh hãy nói to và gần micro hơn nhé!"}))
except Exception as e:
    print(json.dumps({"ok": False, "error": str(e)}))
`;
    execFile(VENV_PYTHON, ['-c', pyCode, wavPath, sttLang], { timeout: 12000 }, (err, stdout) => {
      if (err && !stdout) {
        return resolve({ ok: false, error: err.message });
      }
      try {
        const parsed = JSON.parse(String(stdout || '').trim());
        resolve(parsed);
      } catch (e) {
        resolve({ ok: false, error: 'Failed to parse STT output' });
      }
    });
  });
}

function saveAndConvertUserAudio(audioBase64) {
  return new Promise((resolve) => {
    if (!audioBase64) return resolve({ ok: false });
    try {
      const cleanB64 = String(audioBase64).replace(/^data:audio\/[^;]+;base64,/, '');
      const buf = Buffer.from(cleanB64, 'base64');
      if (buf.length < 200) {
        return resolve({ ok: false, error: 'Audio buffer too short' });
      }

      // Check if it is already a standard RIFF WAVE file (recorded via our Web Audio PCM WAV encoder)
      if (buf.slice(0, 4).toString('ascii') === 'RIFF') {
        fs.writeFileSync(USER_WAV_AUDIO, buf);
        return resolve({ ok: true, wavPath: USER_WAV_AUDIO });
      }

      // Otherwise write raw input and convert via macOS afconvert to 16kHz 16-bit mono WAV
      fs.writeFileSync(USER_RAW_AUDIO, buf);
      execFile(
        '/usr/bin/afconvert',
        ['-f', 'WAVE', '-d', 'LEI16@16000', '-c', '1', USER_RAW_AUDIO, USER_WAV_AUDIO],
        (err) => {
          if (err) {
            return resolve({ ok: false, error: err.message });
          }
          resolve({ ok: true, wavPath: USER_WAV_AUDIO });
        }
      );
    } catch (err) {
      resolve({ ok: false, error: err.message });
    }
  });
}

module.exports = {
  USER_WAV_AUDIO,
  evaluatePronunciation,
  transcribeWavViaPython,
  saveAndConvertUserAudio
};
