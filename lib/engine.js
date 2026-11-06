const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { renderMacWallpaper, renderKindlePW5Image, THEMES } = require('./renderer');

const ROOT_DIR = path.resolve(__dirname, '..');
const SENTENCES_FILE = path.join(ROOT_DIR, 'data', 'sentences.json');
const STATE_FILE = path.join(ROOT_DIR, 'data', 'state.json');
const GENERATED_DIR = path.join(ROOT_DIR, 'generated');
const SET_WALLPAPER_BIN = path.join(ROOT_DIR, 'bin', 'set-wallpaper');

if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
}

function loadSentences() {
  try {
    const raw = fs.readFileSync(SENTENCES_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error loading sentences:', err);
    return [];
  }
}

function saveSentences(sentences) {
  fs.writeFileSync(SENTENCES_FILE, JSON.stringify(sentences, null, 2), 'utf8');
}

function loadState() {
  try {
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed.srsData || typeof parsed.srsData !== 'object') {
      parsed.srsData = {};
    }
    if (typeof parsed.activeRecallMode !== 'boolean') {
      parsed.activeRecallMode = false;
    }
    return parsed;
  } catch (err) {
    return {
      currentSentenceId: 's001',
      lastRotatedAt: new Date().toISOString(),
      rotationIntervalMinutes: 30,
      autoRotateMacWallpaper: true,
      activeRecallMode: false,
      activeLevels: ['A1', 'A2', 'B1', 'B2', 'C1'],
      activeCategories: [
        'basics', 'daily', 'backchannel', 'fillers',
        'requests', 'boundaries', 'dining', 'transport',
        'admin', 'work', 'opinions', 'idioms',
        'emergencies', 'relationships', 'housing_tech', 'social_events'
      ],
      activePack: 'all',
      wallpaperTheme: 'kindle-warm-paper',
      wallpaperLayout: 'right-card',
      bookmarkedIds: [],
      masteredIds: [],
      srsData: {},
      historyIds: [],
      rotationCount: 0
    };
  }
}

function recordSrsReview(sentenceId, rating = 'good') {
  const state = loadState();
  if (!state.srsData || typeof state.srsData !== 'object') {
    state.srsData = {};
  }
  const prev = state.srsData[sentenceId] || {
    intervalMinutes: 0,
    ease: 2.3,
    reps: 0
  };

  let intervalMinutes = 1440;
  let ease = prev.ease || 2.3;
  let reps = prev.reps || 0;
  let nextLabel = '';

  if (rating === 'again') {
    // 🔥 Chưa nhớ -> ưu tiên đưa quay lại sau 2 giờ
    intervalMinutes = 120;
    ease = Math.max(1.3, ease - 0.2);
    reps = 0;
    nextLabel = 'Ôn lại sau 2 giờ';
    state.masteredIds = (state.masteredIds || []).filter((id) => id !== sentenceId);
  } else if (rating === 'good') {
    // 🤔 Tạm nhớ -> ôn lại sau 3 ngày (hoặc nhân hệ số ease)
    reps += 1;
    intervalMinutes = reps === 1 ? 4320 : Math.max(4320, Math.round((prev.intervalMinutes || 4320) * ease));
    const days = Math.max(1, Math.round(intervalMinutes / 1440));
    nextLabel = `Ôn lại sau ${days} ngày`;
  } else {
    // ⚡ Phản xạ tức thì -> giãn lịch 14+ ngày
    reps += 1;
    ease = Math.min(3.0, ease + 0.15);
    intervalMinutes = reps === 1 ? 20160 : Math.max(20160, Math.round((prev.intervalMinutes || 20160) * ease * 1.35));
    const days = Math.max(14, Math.round(intervalMinutes / 1440));
    nextLabel = `Đã vững • Ôn lại sau ${days} ngày`;
    if (reps >= 2 && !(state.masteredIds || []).includes(sentenceId)) {
      state.masteredIds = [...(state.masteredIds || []), sentenceId];
    }
  }

  const nowMs = Date.now();
  const dueAt = new Date(nowMs + intervalMinutes * 60 * 1000).toISOString();

  state.srsData[sentenceId] = {
    intervalMinutes,
    ease: Number(ease.toFixed(2)),
    reps,
    rating,
    lastRating: rating,
    nextLabel,
    lastReviewedAt: new Date(nowMs).toISOString(),
    dueAt
  };

  saveState(state);
  return {
    state,
    srsEntry: state.srsData[sentenceId]
  };
}

function getSrsStats(sentences, state) {
  const srsData = state?.srsData || {};
  const mastered = new Set(state?.masteredIds || []);
  const nowMs = Date.now();

  let dueNowCount = 0;
  let learningCount = 0;
  let solidCount = mastered.size;
  let reviewedCount = 0;

  for (const s of sentences) {
    const entry = srsData[s.id];
    if (!entry) continue;
    reviewedCount++;
    const dueMs = entry.dueAt ? new Date(entry.dueAt).getTime() : 0;
    if (dueMs > 0 && dueMs <= nowMs && !mastered.has(s.id)) {
      dueNowCount++;
    }
    if (entry.intervalMinutes < 20160 && !mastered.has(s.id)) {
      learningCount++;
    } else if (entry.intervalMinutes >= 20160 && !mastered.has(s.id)) {
      solidCount++;
    }
  }

  return {
    dueNowCount,
    learningCount,
    solidCount,
    masteredCount: solidCount,
    reviewedCount,
    totalCount: sentences.length
  };
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
}

function getFilteredSentences(sentences, state) {
  const levels = state.activeLevels && state.activeLevels.length > 0
    ? state.activeLevels
    : ['A1', 'A2', 'B1', 'B2', 'C1'];
  const cats = state.activeCategories && state.activeCategories.length > 0
    ? state.activeCategories
    : [
        'basics', 'daily', 'backchannel', 'fillers',
        'requests', 'boundaries', 'dining', 'transport',
        'admin', 'work', 'opinions', 'idioms',
        'emergencies', 'relationships', 'housing_tech', 'social_events'
      ];
  const activePack = state.activePack && state.activePack !== 'all'
    ? Number(state.activePack)
    : null;

  const pool = sentences.filter(s =>
    levels.includes(s.level) &&
    cats.includes(s.category) &&
    (!activePack || s.packNumber === activePack) &&
    !(state.masteredIds || []).includes(s.id)
  );

  return pool.length > 0 ? pool : sentences;
}

function getCurrentSentence() {
  const sentences = loadSentences();
  const state = loadState();
  let current = sentences.find(s => s.id === state.currentSentenceId);
  if (!current) {
    const pool = getFilteredSentences(sentences, state);
    current = pool[0] || sentences[0];
  }
  return { current, state, sentences };
}

function applyMacDesktopWallpaper(imagePath) {
  return new Promise((resolve) => {
    if (fs.existsSync(SET_WALLPAPER_BIN)) {
      execFile(SET_WALLPAPER_BIN, [imagePath], (err, stdout, stderr) => {
        if (!err) {
          return resolve({ ok: true, method: 'swift-native', output: stdout.trim() });
        }
        console.warn('Swift set-wallpaper fallback to osascript:', stderr || err.message);
        fallbackOsascript(imagePath, resolve);
      });
    } else {
      fallbackOsascript(imagePath, resolve);
    }
  });
}

function fallbackOsascript(imagePath, resolve) {
  const script = `tell application "System Events" to tell every desktop to set picture to POSIX file "${imagePath.replace(/"/g, '\\"')}"`;
  execFile('/usr/bin/osascript', ['-e', script], (err) => {
    if (err) {
      resolve({ ok: false, error: err.message });
    } else {
      resolve({ ok: true, method: 'osascript' });
    }
  });
}

async function renderAndSaveAssets(sentence, state, shouldApplyMacWallpaper = true) {
  const macPng = await renderMacWallpaper(sentence, state);
  const kindlePng = await renderKindlePW5Image(sentence, state);

  const latestMacPath = path.join(GENERATED_DIR, 'latest-mac-wallpaper.png');
  const latestKindlePath = path.join(GENERATED_DIR, 'latest-kindle-pw5.png');

  fs.writeFileSync(latestMacPath, macPng);
  fs.writeFileSync(latestKindlePath, kindlePng);

  let wallpaperResult = { ok: false, skipped: true };

  if (shouldApplyMacWallpaper) {
    // Use unique filename so macOS NSWorkspace refreshes cache immediately
    const stampedName = `linguawall-${Date.now()}.png`;
    const stampedPath = path.join(GENERATED_DIR, stampedName);
    fs.writeFileSync(stampedPath, macPng);

    // Keep the 3 most recent stamped wallpapers so macOS WallpaperAgent never hits a missing file
    try {
      const files = fs.readdirSync(GENERATED_DIR)
        .filter(f => f.startsWith('linguawall-') && f.endsWith('.png'))
        .sort();
      while (files.length > 3) {
        const oldest = files.shift();
        fs.unlinkSync(path.join(GENERATED_DIR, oldest));
      }
    } catch (_) {}

    wallpaperResult = await applyMacDesktopWallpaper(stampedPath);
  }

  return {
    latestMacPath,
    latestKindlePath,
    wallpaperResult
  };
}

async function rotateSentence({ specificId = null, direction = 'next', applyWallpaper = true } = {}) {
  const sentences = loadSentences();
  const state = loadState();
  const pool = getFilteredSentences(sentences, state);

  let nextSentence = null;
  if (specificId) {
    nextSentence = sentences.find(s => s.id === specificId) || pool[0];
  } else if (direction === 'prev') {
    const curIndex = pool.findIndex(s => s.id === state.currentSentenceId);
    const prevIdx = curIndex === -1 ? 0 : (curIndex - 1 + pool.length) % pool.length;
    nextSentence = pool[prevIdx];
  } else {
    // Smart SRS Priority: check if any card in the active pool is due for review right now!
    const srsData = state.srsData || {};
    const nowMs = Date.now();
    const dueCards = pool
      .filter(s => {
        if (s.id === state.currentSentenceId) return false;
        const entry = srsData[s.id];
        if (!entry || !entry.dueAt) return false;
        return new Date(entry.dueAt).getTime() <= nowMs;
      })
      .sort((a, b) => new Date(srsData[a.id].dueAt).getTime() - new Date(srsData[b.id].dueAt).getTime());

    if (dueCards.length > 0) {
      nextSentence = dueCards[0];
    } else {
      const curIndex = pool.findIndex(s => s.id === state.currentSentenceId);
      const nextIdx = curIndex === -1 ? 0 : (curIndex + 1) % pool.length;
      nextSentence = pool[nextIdx];
    }
  }

  state.currentSentenceId = nextSentence.id;
  state.lastRotatedAt = new Date().toISOString();
  state.rotationCount = (state.rotationCount || 0) + 1;
  state.historyIds = [nextSentence.id, ...(state.historyIds || []).filter(id => id !== nextSentence.id)].slice(0, 30);
  saveState(state);

  const renderResult = await renderAndSaveAssets(
    nextSentence,
    state,
    applyWallpaper && state.autoRotateMacWallpaper !== false
  );

  return {
    currentSentence: nextSentence,
    state,
    renderResult
  };
}

const CATEGORY_LABELS = {
  basics: 'Phản xạ Cơ bản',
  daily: 'Đời sống Hàng ngày',
  backchannel: 'Bắt sóng Khi nghe',
  fillers: 'Câu giờ & Tự sửa lời',
  requests: 'Khung câu Nhờ vả',
  boundaries: 'Từ chối Khéo léo',
  dining: 'Ẩm thực & Mua sắm',
  transport: 'Đi lại & Tàu xe DB',
  admin: 'Thủ tục & Bác sĩ',
  work: 'Giao tiếp Công sở',
  opinions: 'Thảo luận & Phản biện',
  idioms: 'Thành ngữ & Từ đệm',
  emergencies: 'Khẩn cấp & Sự cố',
  relationships: 'Tình cảm & Gia đình',
  housing_tech: 'Nhà cửa & Sửa chữa',
  social_events: 'Tiệc tùng & Xã giao'
};

async function generateSentencesWithAI({ topic, level = 'B1', category = 'daily', apiKey = '' }) {
  const effectiveKey = (apiKey || process.env.GEMINI_API_KEY || '').trim();
  const sentences = loadSentences();

  if (!effectiveKey) {
    // Offline Smart Curated Generator fallback when no API key is provided
    const offlinePacks = [
      {
        level,
        category,
        categoryLabel: CATEGORY_LABELS[category] || 'Giao tiếp thực tế',
        frequency: '97% • Cực kỳ phổ biến',
        frequencyScore: 5,
        context: `${topic} — Khi muốn mở lời đề xuất hoặc hỏi ý kiến một cách lịch sự, tự nhiên.`,
        de: 'Wie wollen wir das am besten handhaben? Hast du schon eine Idee?',
        de_phonetic: 'Vi vô-lờn via đát am bét-stờn han-ha-bờn? Hát đù sôn ai-nờ I-đê?',
        de_register: {
          du: 'Wie wollen wir das am besten handhaben? Hast du schon eine Idee?',
          sie: 'Wie möchten Sie das am besten handhaben? Haben Sie bereits einen Vorschlag?'
        },
        en: 'How should we best handle this? Do you already have an idea in mind?',
        vi: 'Chúng ta xử lý việc này thế nào là tốt nhất nhỉ? Bạn đã có ý tưởng gì chưa?',
        reply: {
          de: 'Lass uns das Schritt für Schritt durchgehen, dann finden wir eine Lösung.',
          en: "Let's go through it step by step, then we'll find a solution.",
          vi: 'Cứ rà soát từng bước một cùng nhau, rồi mình sẽ tìm ra hướng giải quyết thôi.'
        },
        tip: "Động từ 'handhaben' (xử lý, sắp xếp một tình huống = to handle) nghe tự nhiên và trưởng thành hơn nhiều so với 'machen'."
      },
      {
        level,
        category,
        categoryLabel: CATEGORY_LABELS[category] || 'Giao tiếp thực tế',
        frequency: '96% • Rất phổ biến',
        frequencyScore: 5,
        context: `${topic} — Khi muốn nhờ đối phương thông cảm và tạo điều kiện linh hoạt.`,
        de: 'Wäre es eventuell möglich, dass wir da eine Ausnahme machen?',
        de_phonetic: 'Ve-rờ ét ê-ven-tu-en mơ-glích, đát via đa ai-nờ Ao-s-na-mờ ma-khờn?',
        de_register: {
          du: 'Meinst du, wir könnten da mal eine kleine Ausnahme machen?',
          sie: 'Wäre es eventuell möglich, dass wir in diesem Fall eine Ausnahme machen?'
        },
        en: 'Would it possibly be okay if we made an exception here?',
        vi: 'Liệu có thể linh động tạo ngoại lệ cho trường hợp này một chút được không?',
        reply: {
          de: 'Ausnahmsweise geht das in Ordnung, aber beim nächsten Mal bitte früher Bescheid geben.',
          en: "As an exception that's fine, just please let us know earlier next time.",
          vi: 'Ngoại lệ lần này thì được nhé, nhưng lần tới nhớ báo sớm giúp mình.'
        },
        tip: "Trạng từ 'ausnahmsweise' (như một ngoại lệ / just this once) trong câu đáp là từ cực kỳ đắt giá khi thương lượng ở Đức."
      },
      {
        level,
        category,
        categoryLabel: CATEGORY_LABELS[category] || 'Giao tiếp thực tế',
        frequency: '95% • Rất phổ biến',
        frequencyScore: 5,
        context: `${topic} — Khi muốn chốt lại thỏa thuận để đôi bên đều yên tâm.`,
        de: 'Klingt nach einem guten Plan! Dann halten wir das erst mal so fest.',
        de_phonetic: 'Clinh-t nác ai-nờm gu-tờn Plan! Đan han-tờn via đát e-st man dô phét-st.',
        de_register: {
          du: 'Klingt nach einem Plan! Dann halten wir das erst mal so fest.',
          sie: 'Das klingt sehr gut! Dann halten wir das vorerst genau so fest.'
        },
        en: "Sounds like a solid plan! Let's lock that in for now.",
        vi: 'Nghe là một kế hoạch hợp lý đấy! Vậy trước mắt cứ chốt như thế nhé.',
        reply: {
          de: 'Super, danke dir! Wir hören uns dann morgen.',
          en: 'Awesome, thanks! Talk to you tomorrow then.',
          vi: 'Tuyệt vời, cảm ơn bạn! Vậy mai tụi mình trao đổi tiếp nhé.'
        },
        tip: "'Etwas festhalten' = chốt lại, ghi nhận lại thỏa thuận. Còn 'Wir hören uns!' là câu chào tạm biệt hiện đại rất phổ biến thay cho 'Auf Wiedersehen'."
      }
    ].map((item, idx) => ({
      ...item,
      id: `ai_${Date.now()}_${idx}`
    }));

    const updated = [...offlinePacks, ...sentences];
    saveSentences(updated);
    return offlinePacks;
  }

  const prompt = `Bạn là chuyên gia ngôn ngữ Đức - Anh - Việt sống tại Đức 15 năm.
Hãy tạo 3 câu hội thoại mẫu giao tiếp thực tế cực kỳ tự nhiên, được người bản xứ Đức và Anh dùng hàng ngày cho tình huống: "${topic}".
Trình độ CEFR mục tiêu: ${level}.
Nhóm chủ đề: ${CATEGORY_LABELS[category] || 'Đời sống Hàng ngày'}.

Yêu cầu bắt buộc:
- Tiếng Đức phải dùng cách nói thực tế ngoài đời của người bản xứ (ưu tiên có các từ đệm tự nhiên như mal, doch, halt, eben, eigentlich nếu phù hợp), kèm biến thể thân mật (du) và lịch sự (Sie).
- Tiếng Anh phải là câu idiomatic tự nhiên tương đương ngữ cảnh (không dịch word-by-word).
- Tiếng Việt tự nhiên như giao tiếp đời thực.
- Trả về đúng định dạng JSON Array gồm 3 phần tử theo cấu trúc:
[
  {
    "level": "${level}",
    "category": "${category}",
    "categoryLabel": "${CATEGORY_LABELS[category] || 'Đời sống Hàng ngày'}",
    "frequency": "96% • Rất phổ biến",
    "frequencyScore": 5,
    "context": "Mô tả tình huống cụ thể bằng tiếng Việt...",
    "de": "Câu tiếng Đức chính...",
    "de_phonetic": "Cách đọc bồi / nhấn âm tiếng Việt dễ đọc...",
    "de_register": {
      "du": "Biến thể dùng du...",
      "sie": "Biến thể dùng Sie..."
    },
    "en": "Natural English sentence...",
    "vi": "Câu tiếng Việt giao tiếp tự nhiên...",
    "reply": {
      "de": "Câu đáp lại tự nhiên bằng tiếng Đức...",
      "en": "Natural English reply...",
      "vi": "Câu đáp lại bằng tiếng Việt..."
    },
    "tip": "Giải thích ngắn gọn từ vựng/cấu trúc đắt giá hoặc sắc thái văn hóa..."
  }
]`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(effectiveKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          temperature: 0.7
        }
      })
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Lỗi gọi Gemini API (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
  const generatedItems = JSON.parse(rawText);

  if (!Array.isArray(generatedItems) || generatedItems.length === 0) {
    throw new Error('AI không trả về danh sách câu hợp lệ.');
  }

  const newItems = generatedItems.map((item, idx) => ({
    id: `ai_${Date.now()}_${idx}`,
    level: item.level || level,
    category: item.category || category,
    categoryLabel: item.categoryLabel || CATEGORY_LABELS[category] || 'Giao tiếp thực tế',
    frequency: item.frequency || '95% • Rất phổ biến',
    frequencyScore: item.frequencyScore || 5,
    context: item.context || topic,
    de: item.de,
    de_phonetic: item.de_phonetic || '',
    de_register: item.de_register || { du: item.de, sie: item.de },
    en: item.en,
    vi: item.vi,
    reply: item.reply || { de: 'Alles klar!', en: 'Got it!', vi: 'Mình hiểu rồi!' },
    tip: item.tip || ''
  }));

  const updated = [...newItems, ...sentences];
  saveSentences(updated);

  return newItems;
}

module.exports = {
  THEMES,
  loadSentences,
  saveSentences,
  loadState,
  saveState,
  recordSrsReview,
  getSrsStats,
  getFilteredSentences,
  getCurrentSentence,
  renderAndSaveAssets,
  rotateSentence,
  generateSentencesWithAI
};
