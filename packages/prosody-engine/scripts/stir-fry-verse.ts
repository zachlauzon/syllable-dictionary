/**
 * Generate a verse in the style of "Stir Fry" by Migos
 *
 * The song has a bouncy triplet flow with short punchy lines.
 * Typical patterns:
 * - 4-6 syllables per line
 * - Heavy use of internal rhyme
 * - End rhymes in couplets (AABB)
 */

import { analyzeVerse, analyzeLine } from "../src/analyzer.js";
import { generateCandidates } from "../src/generator.js";
import { completeLine } from "../src/lineCompletion.js";
import { getRhymeKeyForWord, getWordsByRhymeKey } from "../src/lexicon.js";

console.log("=".repeat(60));
console.log("🔥 STIR FRY STYLE VERSE GENERATOR");
console.log("=".repeat(60));

// Stir Fry style: short punchy lines, ~4-6 syllables, couplet rhymes
const TARGET_SYLLABLES = 5;

// Let's build a verse with AABB rhyme scheme
// We'll pick some good rhyme groups from our lexicon

console.log("\n📊 Finding rhyme groups for punchy lines...\n");

// Good rhyme families for rap
const rhymeGroups = [
  { word: "go", desc: "OW rhymes" },
  { word: "way", desc: "EY rhymes" },
  { word: "night", desc: "AYT rhymes" },
  { word: "fire", desc: "AYER rhymes" },
  { word: "know", desc: "OW rhymes" },
];

for (const { word, desc } of rhymeGroups) {
  const key = getRhymeKeyForWord(word);
  if (key) {
    const rhymes = getWordsByRhymeKey(key);
    console.log(
      `${desc} (${key}): ${rhymes
        .slice(0, 8)
        .map((w) => w.text)
        .join(", ")}`
    );
  }
}

console.log("\n🎤 Generating verse lines...\n");

// Generate lines with specific rhyme endings
function generateLine(
  targetSyllables: number,
  rhymeWord: string
): string | null {
  const rhymeKey = getRhymeKeyForWord(rhymeWord);
  if (!rhymeKey) return null;

  const candidates = generateCandidates(
    { targetSyllables, targetRhymeKey: rhymeKey },
    { maxCandidates: 20 }
  );

  // Pick a good one (not just the highest scored - add some variety)
  const goodOnes = candidates.filter((c) => c.rhymeKey === rhymeKey);
  if (goodOnes.length === 0) return null;

  // Random pick from top candidates
  const pick = goodOnes[Math.floor(Math.random() * Math.min(5, goodOnes.length))];
  return pick?.text ?? null;
}

// Generate some line completions
console.log("Line completions for 'i got the':");
const completions1 = completeLine({
  prefix: "i got the",
  targetTotalSyllables: 5,
  rhymeWithWord: "go",
  maxCandidates: 5,
});
completions1.forEach((c) => console.log(`  "${c.text}" (${c.prosody.syllableCount} syl)`));

console.log("\nLine completions for 'we run the':");
const completions2 = completeLine({
  prefix: "we run the",
  targetTotalSyllables: 5,
  rhymeWithWord: "night",
  maxCandidates: 5,
});
completions2.forEach((c) => console.log(`  "${c.text}" (${c.prosody.syllableCount} syl)`));

console.log("\nLine completions for 'they know i':");
const completions3 = completeLine({
  prefix: "they know i",
  targetTotalSyllables: 5,
  rhymeWithWord: "way",
  maxCandidates: 5,
});
completions3.forEach((c) => console.log(`  "${c.text}" (${c.prosody.syllableCount} syl)`));

console.log("\n" + "=".repeat(60));
console.log("🎵 GENERATED VERSE (Stir Fry style - AABB, ~5 syllables)");
console.log("=".repeat(60) + "\n");

// Build a proper verse with AABB scheme
const verseLines: string[] = [];

// Couplet 1 - "go/flow/know" rhymes
const line1 = generateLine(5, "go");
const line2 = generateLine(5, "go");
if (line1) verseLines.push(line1);
if (line2) verseLines.push(line2);

// Couplet 2 - "night/right/fight" rhymes
const line3 = generateLine(5, "night");
const line4 = generateLine(5, "night");
if (line3) verseLines.push(line3);
if (line4) verseLines.push(line4);

// Couplet 3 - "way/day/say" rhymes
const line5 = generateLine(5, "way");
const line6 = generateLine(5, "way");
if (line5) verseLines.push(line5);
if (line6) verseLines.push(line6);

// Couplet 4 - "fire/higher" rhymes
const line7 = generateLine(5, "fire");
const line8 = generateLine(5, "fire");
if (line7) verseLines.push(line7);
if (line8) verseLines.push(line8);

// Print the verse
verseLines.forEach((line) => {
  const analysis = analyzeLine(line);
  console.log(`${line.padEnd(25)} [${analysis.syllableCount} syl, rhyme: ${analysis.endingRhymeKey}]`);
});

// Analyze the full verse
console.log("\n" + "=".repeat(60));
console.log("📊 VERSE ANALYSIS");
console.log("=".repeat(60) + "\n");

const verseAnalysis = analyzeVerse(verseLines.join("\n"));
console.log(`Lines: ${verseAnalysis.lines.length}`);
console.log(`Rhyme scheme: ${verseAnalysis.inferredRhymeScheme?.scheme}`);
console.log(`Target syllables: ${verseAnalysis.inferredMeter?.targetSyllables}`);
console.log(`Meter: ${verseAnalysis.inferredMeter?.description}`);

console.log("\n🔥 That's a wrap!");
