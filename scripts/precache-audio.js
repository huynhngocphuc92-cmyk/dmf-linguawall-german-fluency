#!/usr/bin/env node
const sentences = require('../data/sentences.json');
const { prewarmSentenceAudio } = require('../lib/tts');

const count = Number(process.argv[2] || 20);
const subset = sentences.slice(0, count);

(async () => {
  console.log(`🎙️ Pre-caching Studio Neural Audio for top ${subset.length} sentences...`);
  const t0 = Date.now();
  // Process in batches of 4 sentences (12 concurrent tracks)
  for (let i = 0; i < subset.length; i += 4) {
    const batch = subset.slice(i, i + 4);
    await Promise.allSettled(batch.map(s => prewarmSentenceAudio(s, 'female')));
    process.stdout.write(`   ✓ Cached ${Math.min(i + 4, subset.length)} / ${subset.length}\r`);
  }
  console.log(`\n✅ Done pre-caching ${subset.length} sentences in ${((Date.now() - t0) / 1000).toFixed(1)}s!`);
  process.exit(0);
})();
