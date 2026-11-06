#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const packsDir = path.join(__dirname, '..', 'data', 'packs');
const outFile = path.join(__dirname, '..', 'data', 'sentences.json');

const CATEGORY_ORDER = [
  'basics',
  'daily',
  'backchannel',
  'fillers',
  'requests',
  'boundaries',
  'dining',
  'transport',
  'admin',
  'work',
  'opinions',
  'idioms',
  'emergencies',
  'relationships',
  'housing_tech',
  'social_events'
];

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

const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];

function standardizeGermanPhonetic(raw) {
  if (!raw) return '';
  let p = String(raw).trim();
  // Unify common German phoneme transcriptions across packs so /ʃ/ = sh, /z/ = z, /u/ = u
  const replacements = [
    [/\bEn-sun-đi-gung\b/gi, 'En-shu-đi-gung'],
    [/\bSơn\b/g, 'Shơn'],
    [/\bsơn\b/g, 'shơn'],
    [/\bsao-ờ\b/gi, 'shau-ơ'],
    [/\bsao\b/gi, 'shau'],
    [/\bsôn\b/gi, 'shôn'],
    [/\bSôn\b/g, 'Shôn'],
    [/\bsáp-st\b/gi, 'sháp-st'],
    [/\bTa-sờn\b/g, 'Ta-shần'],
    [/\bdô-vai\b/gi, 'zô-vai'],
    [/\bdô-ban\b/gi, 'zô-ban'],
    [/\bdô\b/g, 'zô'],
    [/\bDô\b/g, 'Zô'],
    [/\bDôn\b/g, 'Zôn'],
    [/\bdôn\b/g, 'zôn'],
    [/\bdích\b/g, 'zích'],
    [/\bda-gờn\b/gi, 'za-gần'],
    [/\bgờ-dác\b/gi, 'gơ-zác'],
    [/\bdê-ơ\b/gi, 'zê-ơ'],
    [/\bdê-ờn\b/gi, 'zê-ần'],
    [/\bđù\b/g, 'đu'],
    [/\bĐù\b/g, 'Đu']
  ];
  for (const [regex, rep] of replacements) {
    p = p.replace(regex, rep);
  }
  return p;
}

const files = fs.readdirSync(packsDir)
  .filter(f => f.endsWith('.js'))
  .sort();

let all = [];
for (const file of files) {
  const pack = require(path.join(packsDir, file));
  all = all.concat(pack);
}

// Sort by category order, then level order, then original ID
all.sort((a, b) => {
  const catDiff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
  if (catDiff !== 0) return catDiff;
  const lvlDiff = LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level);
  if (lvlDiff !== 0) return lvlDiff;
  return String(a.id).localeCompare(String(b.id));
});

const validated = all.map((item, idx) => {
  const newId = `s${String(idx + 1).padStart(3, '0')}`;
  const catLabel = CATEGORY_LABELS[item.category] || item.categoryLabel || 'Giao tiếp Thực tế';

  const isNested = typeof item.de === 'object' && item.de !== null;

  const deText = isNested ? item.de.text : item.de;
  const dePhonetic = standardizeGermanPhonetic(isNested ? item.de.phonetic : item.de_phonetic);
  const deRegister = isNested
    ? {
        du: item.de.text,
        sie: item.de.formal || item.de.text
      }
    : (item.de_register || { du: item.de, sie: item.de });

  const enText = isNested ? item.en.text : item.en;
  const viText = isNested ? item.vi.text : item.vi;

  let tipText = item.tip || '';
  if (isNested) {
    const notes = [];
    if (item.de.note) notes.push(item.de.note);
    if (item.en.note) notes.push(`🇬🇧 EN: ${item.en.note}`);
    tipText = notes.join(' ');
  }

  const freqScore = typeof item.frequency === 'number'
    ? item.frequency
    : (item.frequencyScore || 5);

  const freqLabel = typeof item.frequency === 'string'
    ? item.frequency
    : (freqScore >= 5 ? '99% • Cực kỳ phổ biến' : '95% • Rất phổ biến');

  const patternType = item.patternType || (
    (item.category === 'requests' || /khung câu/i.test(item.context) || /khung câu/i.test(tipText))
      ? 'frame'
      : 'routine'
  );

  // Assign Weekly Pack 1..15 (20 sentences per pack)
  const packNumber = Math.floor(idx / 20) + 1;

  if (!deText || !enText || !viText || !item.reply?.de) {
    throw new Error(`Invalid sentence at index ${idx} (${item.id})`);
  }

  return {
    id: newId,
    packNumber,
    patternType,
    level: item.level,
    category: item.category,
    categoryLabel: catLabel,
    frequency: freqLabel,
    frequencyScore: freqScore,
    context: item.context,
    de: deText,
    de_phonetic: dePhonetic,
    de_register: deRegister,
    en: enText,
    vi: viText,
    reply: {
      de: item.reply.de,
      en: item.reply.en,
      vi: item.reply.vi
    },
    tip: tipText
  };
});

fs.writeFileSync(outFile, JSON.stringify(validated, null, 2), 'utf8');

const byCat = {};
const byLvl = {};
const byType = { routine: 0, frame: 0 };
for (const s of validated) {
  byCat[s.category] = (byCat[s.category] || 0) + 1;
  byLvl[s.level] = (byLvl[s.level] || 0) + 1;
  byType[s.patternType] = (byType[s.patternType] || 0) + 1;
}

console.log(`✅ Built ${validated.length} curated trilingual sentences -> ${outFile}`);
console.log('📊 By Category:', byCat);
console.log('📈 By Level:', byLvl);
console.log('🧩 By Pattern Type:', byType);
