const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
const zlib = require('zlib');
const fs = require('fs');

// Register full-Vietnamese & German static TTF font families (Regular, Bold, Italic, Bold Italic)
const FONT_PATHS = [
  { path: '/System/Library/Fonts/Supplemental/Times New Roman.ttf', family: 'BookSerif' },
  { path: '/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf', family: 'BookSerif' },
  { path: '/System/Library/Fonts/Supplemental/Times New Roman Italic.ttf', family: 'BookSerif' },
  { path: '/System/Library/Fonts/Supplemental/Times New Roman Bold Italic.ttf', family: 'BookSerif' },
  { path: '/System/Library/Fonts/Supplemental/Arial.ttf', family: 'BookSans' },
  { path: '/System/Library/Fonts/Supplemental/Arial Bold.ttf', family: 'BookSans' },
  { path: '/System/Library/Fonts/Supplemental/Arial Italic.ttf', family: 'BookSans' },
  { path: '/System/Library/Fonts/Supplemental/Arial Bold Italic.ttf', family: 'BookSans' }
];

for (const fp of FONT_PATHS) {
  if (fs.existsSync(fp.path)) {
    try {
      GlobalFonts.registerFromPath(fp.path, fp.family);
    } catch (_) {}
  }
}

// CRC32 Table for PNG chunk encoding
const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  CRC_TABLE[n] = c >>> 0;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makePngChunk(typeStr, dataBuf) {
  const typeBuf = Buffer.from(typeStr, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(dataBuf.length, 0);
  const crcInput = Buffer.concat([typeBuf, dataBuf]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([lenBuf, typeBuf, dataBuf, crcBuf]);
}

/**
 * Inject 144 DPI (@2x Apple Retina) pHYs chunk into PNG buffer so macOS WallpaperAgent
 * maps 2940x1912 pixels 1:1 to 1470x956 points with zero scaling blur.
 */
function injectRetina144Dpi(pngBuf) {
  const physData = Buffer.alloc(9);
  physData.writeUInt32BE(5669, 0); // 144 DPI = 5669 pixels/meter
  physData.writeUInt32BE(5669, 4);
  physData[8] = 1; // unit: meter
  const physChunk = makePngChunk('pHYs', physData);
  // Insert right after 8-byte PNG signature + 25-byte IHDR chunk (= offset 33)
  return Buffer.concat([pngBuf.subarray(0, 33), physChunk, pngBuf.subarray(33)]);
}

function encode8BitGrayscalePng(ctx, width, height) {
  const rgba = ctx.getImageData(0, 0, width, height).data;
  const rowSize = width + 1;
  const rawScanlines = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowStart = y * rowSize;
    rawScanlines[rowStart] = 0;
    const srcRow = y * width * 4;
    for (let x = 0; x < width; x++) {
      const i = srcRow + x * 4;
      rawScanlines[rowStart + 1 + x] = (77 * rgba[i] + 150 * rgba[i + 1] + 29 * rgba[i + 2]) >> 8;
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit
  ihdr[9] = 0; // Grayscale (no alpha)
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const compressed = zlib.deflateSync(rawScanlines, { level: 9 });
  return Buffer.concat([
    signature,
    makePngChunk('IHDR', ihdr),
    makePngChunk('IDAT', compressed),
    makePngChunk('IEND', Buffer.alloc(0))
  ]);
}

const THEMES = {
  'kindle-warm-paper': {
    name: 'Giấy ấm Kindle (Chuẩn E-Ink Warm)',
    deskStart: '#DDD5C7',
    deskEnd: '#CFC5B4',
    pageBg: '#FAF7F0',
    pageShadow: 'rgba(25, 20, 15, 0.24)',
    pageBorderOuter: '#0F0E0C',
    pageBorderInner: '#5C554C',
    boxBg: '#F0EBE0',
    boxBorder: '#8C8376',
    inkPrimary: '#0A0908',
    inkSecondary: '#1C1A17',
    inkMuted: '#453F38',
    accentStamp: '#8C2D19',
    ruleColor: '#9E9588'
  },
  'vintage-parchment': {
    name: 'Giấy sách cổ điển (Sepia Book)',
    deskStart: '#D1C4AE',
    deskEnd: '#C2B299',
    pageBg: '#F4ECDC',
    pageShadow: 'rgba(35, 26, 16, 0.26)',
    pageBorderOuter: '#14100C',
    pageBorderInner: '#635647',
    boxBg: '#E8DEC9',
    boxBorder: '#8A7B68',
    inkPrimary: '#0F0C09',
    inkSecondary: '#241E17',
    inkMuted: '#4A3F33',
    accentStamp: '#7F2716',
    ruleColor: '#9E8D76'
  },
  'dark-desk-warm-paper': {
    name: 'Bàn tối + Trang giấy ấm (Dịu mắt ban đêm)',
    deskStart: '#181614',
    deskEnd: '#100F0D',
    pageBg: '#F8F4EC',
    pageShadow: 'rgba(0, 0, 0, 0.65)',
    pageBorderOuter: '#0F0E0C',
    pageBorderInner: '#5C554C',
    boxBg: '#EFEAE0',
    boxBorder: '#8C8376',
    inkPrimary: '#0A0908',
    inkSecondary: '#1C1A17',
    inkMuted: '#453F38',
    accentStamp: '#8C2D19',
    ruleColor: '#9E9588'
  },
  'kindle-dark-eink': {
    name: 'Kindle Dark E-Ink (Giấy đen mực kem)',
    deskStart: '#121211',
    deskEnd: '#0A0A09',
    pageBg: '#1A1917',
    pageShadow: 'rgba(0, 0, 0, 0.75)',
    pageBorderOuter: '#E5DEC9',
    pageBorderInner: '#857E73',
    boxBg: '#242320',
    boxBorder: '#666057',
    inkPrimary: '#F7F3EA',
    inkSecondary: '#E2DBD0',
    inkMuted: '#ABA396',
    accentStamp: '#E07A5F',
    ruleColor: '#4F4B44'
  }
};

function wrapTextLines(ctx, text, maxWidth) {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = words[0] || '';

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + ' ' + word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine.length > 0) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const rx = Math.round(x);
  const ry = Math.round(y);
  const rlh = Math.round(lineHeight);
  const lines = wrapTextLines(ctx, text, maxWidth);
  lines.forEach((line, idx) => {
    ctx.fillText(line, rx, ry + idx * rlh);
  });
  return ry + lines.length * rlh;
}

function drawEditorialTag(ctx, label, x, y, borderColor, textColor, bgFill, fontSans, scale = 1.0) {
  const s = (v) => Math.round(v * scale);
  const rx = Math.round(x);
  const ry = Math.round(y);
  ctx.save();
  ctx.font = `bold ${s(21)}px ${fontSans}`;
  const tw = Math.round(ctx.measureText(label).width) + s(28);
  const th = s(36);

  if (bgFill) {
    ctx.fillStyle = bgFill;
    ctx.fillRect(rx, ry - s(3), tw, th);
  }
  ctx.lineWidth = Math.max(2, s(2.5));
  ctx.strokeStyle = borderColor;
  ctx.strokeRect(rx, ry - s(3), tw, th);

  ctx.fillStyle = textColor;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText(label, rx + Math.round(tw / 2), ry - s(3) + Math.round(th / 2));
  ctx.restore();
  return rx + tw + s(16);
}

/**
 * Crisp 1:1 Pixel-Aligned Editorial Book-Page Renderer
 */
function drawEditorialBookPage(ctx, pageRect, sentence, state, palette, scale = 1.0, isKindle = false) {
  const px = Math.round(pageRect.x);
  const py = Math.round(pageRect.y);
  const pw = Math.round(pageRect.w);
  const ph = Math.round(pageRect.h);
  const s = (v) => Math.round(v * scale);

  const fontSerif = '"BookSerif", "Times New Roman", serif';
  const fontSans = '"BookSans", "Arial", sans-serif';

  // 1. Clean Paper Sheet + Stacked Book Edge
  if (!isKindle) {
    ctx.save();
    ctx.shadowColor = palette.pageShadow;
    ctx.shadowBlur = s(28);
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = s(10);

    // Stacked paper edge
    ctx.fillStyle = palette.boxBg;
    ctx.fillRect(px + s(8), py + s(8), pw, ph);
    ctx.strokeStyle = palette.pageBorderInner;
    ctx.lineWidth = 2;
    ctx.strokeRect(px + s(8), py + s(8), pw, ph);

    // Main crisp paper sheet
    ctx.fillStyle = palette.pageBg;
    ctx.fillRect(px, py, pw, ph);
    ctx.restore();
  } else {
    ctx.fillStyle = palette.pageBg;
    ctx.fillRect(px, py, pw, ph);
  }

  // 2. Crisp Integer-Aligned Double-Line Book Border
  const mOut = s(24);
  const mIn = s(32);
  ctx.strokeStyle = palette.pageBorderOuter;
  ctx.lineWidth = Math.max(3, s(4));
  ctx.strokeRect(px + mOut, py + mOut, pw - mOut * 2, ph - mOut * 2);

  ctx.strokeStyle = palette.pageBorderInner;
  ctx.lineWidth = Math.max(1, s(1.5));
  ctx.strokeRect(px + mIn, py + mIn, pw - mIn * 2, ph - mIn * 2);

  const padX = px + s(66);
  const contentW = pw - s(132);
  let curY = py + s(58);

  // 3. Running Book Header
  ctx.textBaseline = 'middle';
  const headerY = curY + s(24);

  const lvlText = `CẤP ĐỘ ${sentence.level}`;
  ctx.font = `bold ${s(24)}px ${fontSans}`;
  const lvlW = Math.round(ctx.measureText(lvlText).width) + s(36);
  ctx.fillStyle = palette.inkPrimary;
  ctx.fillRect(padX, curY, lvlW, s(48));
  ctx.fillStyle = palette.pageBg;
  ctx.fillText(lvlText, padX + s(18), headerY);

  ctx.fillStyle = palette.inkSecondary;
  ctx.font = `bold italic ${s(26)}px ${fontSerif}`;
  ctx.fillText(
    `${sentence.categoryLabel || 'Giao tiếp thực tế'}  —  ${sentence.frequency}`,
    padX + lvlW + s(20),
    headerY
  );

  const nowStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  ctx.font = `bold ${s(22)}px ${fontSerif}`;
  ctx.fillStyle = palette.inkMuted;
  ctx.textAlign = 'right';
  ctx.fillText(
    `LinguaWall • ${nowStr} (${state.rotationIntervalMinutes || 30}p/lần)`,
    px + pw - s(66),
    headerY
  );
  ctx.textAlign = 'left';

  curY += s(62);

  // Double Header Rule
  ctx.fillStyle = palette.inkPrimary;
  ctx.fillRect(padX, curY, contentW, Math.max(3, s(4)));
  ctx.fillStyle = palette.pageBorderInner;
  ctx.fillRect(padX, curY + s(7), contentW, Math.max(1, s(1.5)));
  curY += s(24);

  // 4. Context Epigraph
  ctx.textBaseline = 'top';
  ctx.font = `bold italic ${s(28)}px ${fontSerif}`;
  const ctxStr = `Ngữ cảnh: ${sentence.context}`;
  const ctxLines = wrapTextLines(ctx, ctxStr, contentW - s(30));
  const ctxH = ctxLines.length * s(38) + s(6);

  ctx.fillStyle = palette.accentStamp;
  ctx.fillRect(padX, curY + s(2), Math.max(4, s(6)), ctxH - s(4));

  ctx.fillStyle = palette.inkSecondary;
  drawWrappedText(ctx, ctxStr, padX + s(22), curY, contentW - s(30), s(38));
  curY += ctxH + s(22);

  // 5. GERMAN SECTION
  const deTagEnd = drawEditorialTag(
    ctx,
    'DEUTSCH',
    padX,
    curY,
    palette.inkPrimary,
    palette.pageBg,
    palette.inkPrimary,
    fontSans,
    scale
  );
  ctx.font = `bold ${s(21)}px ${fontSans}`;
  ctx.fillStyle = palette.accentStamp;
  ctx.fillText('TIẾNG ĐỨC GIAO TIẾP BẢN XỨ', deTagEnd, curY + s(5));
  curY += s(42);

  ctx.font = `bold ${s(56)}px ${fontSerif}`;
  ctx.fillStyle = palette.inkPrimary;
  curY = drawWrappedText(ctx, `„${sentence.de}“`, padX, curY, contentW, s(68));
  curY += s(10);

  if (sentence.de_phonetic) {
    ctx.font = `bold italic ${s(27)}px ${fontSerif}`;
    ctx.fillStyle = palette.inkMuted;
    curY = drawWrappedText(ctx, `Phát âm: [ ${sentence.de_phonetic} ]`, padX, curY, contentW, s(36));
    curY += s(14);
  }

  // Register (du / Sie) Box
  if (sentence.de_register) {
    ctx.font = `bold ${s(25)}px ${fontSerif}`;
    const duLines = wrapTextLines(ctx, `• Thân mật (du):  ${sentence.de_register.du}`, contentW - s(36));
    const sieLines = wrapTextLines(ctx, `• Lịch sự (Sie):   ${sentence.de_register.sie}`, contentW - s(36));
    const regH = (duLines.length + sieLines.length) * s(36) + s(24);

    ctx.fillStyle = palette.boxBg;
    ctx.fillRect(padX, curY, contentW, regH);
    ctx.strokeStyle = palette.boxBorder;
    ctx.lineWidth = 2;
    ctx.strokeRect(padX, curY, contentW, regH);

    ctx.fillStyle = palette.inkPrimary;
    let ry = curY + s(12);
    ry = drawWrappedText(ctx, `• Thân mật (du):  ${sentence.de_register.du}`, padX + s(18), ry, contentW - s(36), s(36));
    ry += s(2);
    ctx.fillStyle = palette.inkSecondary;
    drawWrappedText(ctx, `• Lịch sự (Sie):   ${sentence.de_register.sie}`, padX + s(18), ry, contentW - s(36), s(36));
    curY += regH + s(20);
  }

  // Hairline Divider
  ctx.fillStyle = palette.ruleColor;
  ctx.fillRect(padX, curY, contentW, 2);
  curY += s(18);

  // 6. ENGLISH SECTION
  const enTagEnd = drawEditorialTag(
    ctx,
    'ENGLISH',
    padX,
    curY,
    palette.inkPrimary,
    palette.inkPrimary,
    null,
    fontSans,
    scale
  );
  ctx.font = `bold ${s(20)}px ${fontSans}`;
  ctx.fillStyle = palette.inkMuted;
  ctx.fillText('TƯƠNG ĐƯƠNG TỰ NHIÊN', enTagEnd, curY + s(5));
  curY += s(38);

  ctx.font = `bold ${s(42)}px ${fontSerif}`;
  ctx.fillStyle = palette.inkPrimary;
  curY = drawWrappedText(ctx, `“${sentence.en}”`, padX, curY, contentW, s(52));
  curY += s(18);

  // 7. VIETNAMESE SECTION
  const viTagEnd = drawEditorialTag(
    ctx,
    'TIẾNG VIỆT',
    padX,
    curY,
    palette.inkPrimary,
    palette.inkPrimary,
    null,
    fontSans,
    scale
  );
  ctx.font = `bold ${s(20)}px ${fontSans}`;
  ctx.fillStyle = palette.inkMuted;
  ctx.fillText('NGHĨA GIAO TIẾP ĐỜI THỰC', viTagEnd, curY + s(5));
  curY += s(38);

  ctx.font = `bold ${s(38)}px ${fontSerif}`;
  ctx.fillStyle = palette.inkSecondary;
  curY = drawWrappedText(ctx, sentence.vi, padX, curY, contentW, s(48));
  curY += s(20);

  // Hairline Divider
  ctx.fillStyle = palette.ruleColor;
  ctx.fillRect(padX, curY, contentW, 2);
  curY += s(18);

  // 8. MINI-DIALOGUE REPLY
  if (sentence.reply) {
    ctx.font = `bold ${s(21)}px ${fontSans}`;
    ctx.fillStyle = palette.accentStamp;
    ctx.fillText('HỘI THOẠI ĐÁP LẠI MẪU (MINI-DIALOGUE):', padX, curY);
    curY += s(30);

    ctx.font = `bold ${s(33)}px ${fontSerif}`;
    ctx.fillStyle = palette.inkPrimary;
    curY = drawWrappedText(ctx, `— „${sentence.reply.de}“`, padX, curY, contentW, s(42));
    curY += s(4);

    ctx.font = `bold italic ${s(26)}px ${fontSerif}`;
    ctx.fillStyle = palette.inkMuted;
    curY = drawWrappedText(ctx, `   (${sentence.reply.en}  •  ${sentence.reply.vi})`, padX, curY, contentW, s(35));
    curY += s(20);
  }

  // 9. FOOTNOTE TIP BOX
  if (sentence.tip) {
    ctx.font = `bold ${s(26)}px ${fontSerif}`;
    const tipStr = `Ghi chú bản xứ: ${sentence.tip}`;
    const tipLines = wrapTextLines(ctx, tipStr, contentW - s(40));
    const tipH = tipLines.length * s(36) + s(28);

    ctx.fillStyle = palette.boxBg;
    ctx.fillRect(padX, curY, contentW, tipH);
    ctx.strokeStyle = palette.pageBorderOuter;
    ctx.lineWidth = Math.max(2, s(2.5));
    ctx.strokeRect(padX, curY, contentW, tipH);

    ctx.fillStyle = palette.inkPrimary;
    drawWrappedText(ctx, tipStr, padX + s(20), curY + s(14), contentW - s(40), s(36));
  }

  // 10. Book Page Footer
  const footerY = py + ph - s(52);
  ctx.font = `bold italic ${s(21)}px ${fontSerif}`;
  ctx.fillStyle = palette.inkMuted;
  ctx.fillText('Sổ tay Giao tiếp Đức – Anh – Việt (A1–C1)', padX, footerY);
  ctx.textAlign = 'right';
  ctx.fillText(`Mã thẻ: #${sentence.id.toUpperCase()}`, px + pw - s(66), footerY);
  ctx.textAlign = 'left';
}

/**
 * Render macOS Desktop Wallpaper at EXACT 1:1 physical Retina pixels (2940 x 1912 @ 144 DPI)
 * Matches NSScreen 1470x956 pt @ 2.0x scale to the exact pixel so macOS performs ZERO scaling!
 */
async function renderMacWallpaper(sentence, state = {}) {
  const width = 2940;
  const height = 1912;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const themeKey = state.wallpaperTheme && THEMES[state.wallpaperTheme]
    ? state.wallpaperTheme
    : 'kindle-warm-paper';
  const palette = THEMES[themeKey];
  const layout = state.wallpaperLayout || 'right-card';

  // 1. Clean Desk Background
  const deskGrad = ctx.createLinearGradient(0, 0, width, height);
  deskGrad.addColorStop(0, palette.deskStart);
  deskGrad.addColorStop(1, palette.deskEnd);
  ctx.fillStyle = deskGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Generous Book Page Geometry at exact 1:1 Retina pixel coordinates
  let pageW = 2160;
  let pageH = 1660;
  let pageX = Math.round((width - pageW) / 2);
  let pageY = Math.round((height - pageH) / 2);

  if (layout === 'right-card') {
    pageW = 2140;
    pageH = 1660;
    pageX = width - pageW - 120;
    pageY = Math.round((height - pageH) / 2);
  } else if (layout === 'bottom-dock') {
    pageW = 2360;
    pageH = 1620;
    pageX = Math.round((width - pageW) / 2);
    pageY = height - pageH - 120;
  }

  drawEditorialBookPage(
    ctx,
    { x: pageX, y: pageY, w: pageW, h: pageH },
    sentence,
    state,
    palette,
    1.28,
    false
  );

  const rawPng = canvas.toBuffer('image/png');
  return injectRetina144Dpi(rawPng);
}

/**
 * Render Kindle Paperwhite 5 (11th Gen - 6.8" 300 PPI) Native E-Ink Image
 * Exact resolution: 1236 x 1648 pixels, 8-bit Single-Channel Grayscale PNG
 */
async function renderKindlePW5Image(sentence, state = {}) {
  const width = 1236;
  const height = 1648;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const einkPalette = {
    pageBg: '#FFFFFF',
    pageBorderOuter: '#000000',
    pageBorderInner: '#222222',
    boxBg: '#F4F4F4',
    boxBorder: '#333333',
    inkPrimary: '#000000',
    inkSecondary: '#0A0A0A',
    inkMuted: '#1F1F1F',
    accentStamp: '#000000',
    ruleColor: '#555555'
  };

  drawEditorialBookPage(
    ctx,
    { x: 0, y: 0, w: width, h: height },
    sentence,
    state,
    einkPalette,
    0.96,
    true
  );

  return encode8BitGrayscalePng(ctx, width, height);
}

module.exports = {
  THEMES,
  renderMacWallpaper,
  renderKindlePW5Image
};
