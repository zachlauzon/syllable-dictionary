/**
 * Demo script - show off line completions and fill-in-the-blank
 */

import { analyzeLine, analyzeVerse } from "../src/analyzer.js";
import { completeLine } from "../src/lineCompletion.js";
import { fillBlank } from "../src/fillBlank.js";
import { generateCandidates } from "../src/generator.js";
import { getRhymeKeyForWord } from "../src/lexicon.js";

console.log("=".repeat(60));
console.log("🎤 PROSODY ENGINE DEMO");
console.log("=".repeat(60));

// --- Demo 1: Analyze a line ---
console.log("\n📝 ANALYZE LINE\n");

const line1 = "i feel the light tonight";
const analysis1 = analyzeLine(line1);
console.log(`Line: "${line1}"`);
console.log(`  Syllables: ${analysis1.syllableCount}`);
console.log(`  Stress: [${analysis1.stressPattern.join(", ")}]`);
console.log(`  Rhyme key: ${analysis1.endingRhymeKey}`);
console.log(`  Confidence: ${(analysis1.confidence * 100).toFixed(0)}%`);

// --- Demo 2: Analyze a verse ---
console.log("\n📜 ANALYZE VERSE\n");

const verse = `in the night
see the light
feel my heart
let me start`;

const verseAnalysis = analyzeVerse(verse);
console.log("Verse:");
verse.split("\n").forEach((l) => console.log(`  "${l}"`));
console.log(`\nInferred meter: ${verseAnalysis.inferredMeter?.description}`);
console.log(`Rhyme scheme: ${verseAnalysis.inferredRhymeScheme?.scheme}`);
console.log(
  `Suggested next rhyme: ${verseAnalysis.inferredRhymeScheme?.suggestedNextRhymeKey}`
);

// --- Demo 3: Generate candidates ---
console.log("\n🎲 GENERATE 3-SYLLABLE PHRASES\n");

const candidates3 = generateCandidates(
  { targetSyllables: 3 },
  { maxCandidates: 8 }
);
console.log("Top 3-syllable phrases:");
candidates3.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}" (score: ${c.score.toFixed(1)})`);
});

// --- Demo 4: Generate with rhyme constraint ---
console.log("\n🎵 GENERATE PHRASES RHYMING WITH 'NIGHT'\n");

const rhymeKey = getRhymeKeyForWord("night");
const rhymingCandidates = generateCandidates(
  { targetSyllables: 3, targetRhymeKey: rhymeKey },
  { maxCandidates: 8 }
);
console.log(`Rhyme key for "night": ${rhymeKey}`);
console.log("Phrases ending with that rhyme:");
rhymingCandidates.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}"`);
});

// --- Demo 5: Complete a line ---
console.log("\n✨ LINE COMPLETION\n");

const prefix1 = "i'm chasing dreams but my";
const completions1 = completeLine({
  prefix: prefix1,
  targetTotalSyllables: 8,
  rhymeWithWord: "time",
  maxCandidates: 5,
});

console.log(`Prefix: "${prefix1}"`);
console.log(`Target: 8 syllables, rhyme with "time"`);
console.log("Completions:");
completions1.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}" (${c.prosody.syllableCount} syl)`);
});

// --- Demo 6: Another line completion ---
console.log("\n✨ LINE COMPLETION (rhyme with 'night')\n");

const prefix2 = "i run through the";
const completions2 = completeLine({
  prefix: prefix2,
  targetTotalSyllables: 6,
  rhymeWithWord: "night",
  maxCandidates: 5,
});

console.log(`Prefix: "${prefix2}"`);
console.log(`Target: 6 syllables, rhyme with "night"`);
console.log("Completions:");
completions2.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}" (${c.prosody.syllableCount} syl)`);
});

// --- Demo 7: Fill in the blank ---
console.log("\n🔲 FILL IN THE BLANK\n");

const template1 = "in the ____ tonight";
const filled1 = fillBlank({
  template: template1,
  targetTotalSyllables: 5,
  maxCandidates: 5,
});

console.log(`Template: "${template1}"`);
console.log(`Target: 5 syllables`);
console.log("Filled:");
filled1.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}" (${c.prosody.syllableCount} syl)`);
});

// --- Demo 8: Fill blank with rhyme ---
console.log("\n🔲 FILL BLANK (with rhyme constraint)\n");

const template2 = "my ____ is on the wall";
const filled2 = fillBlank({
  template: template2,
  targetTotalSyllables: 6,
  rhymeWithWord: "call", // ends with "wall" so this tests mid-blank
  maxCandidates: 5,
});

console.log(`Template: "${template2}"`);
console.log(`Target: 6 syllables`);
console.log("Filled:");
filled2.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}" (${c.prosody.syllableCount} syl)`);
});

// --- Demo 9: Build a verse line by line ---
console.log("\n📝 BUILD A VERSE\n");

const lines = [
  "i see the light",
  "in the night",
  "feel my heart",
];

console.log("Starting verse:");
lines.forEach((l) => console.log(`  "${l}"`));

const currentAnalysis = analyzeVerse(lines.join("\n"));
const suggestedRhyme = currentAnalysis.inferredRhymeScheme?.suggestedNextRhymeKey;
const targetSyllables = currentAnalysis.inferredMeter?.targetSyllables ?? 4;

console.log(`\nInferred pattern: ${currentAnalysis.inferredRhymeScheme?.scheme}`);
console.log(`Suggested next rhyme: ${suggestedRhyme}`);
console.log(`Target syllables: ${targetSyllables}`);

const nextLineCandidates = generateCandidates(
  { targetSyllables, targetRhymeKey: suggestedRhyme },
  { maxCandidates: 5 }
);

console.log("\nSuggested next lines:");
nextLineCandidates.forEach((c, i) => {
  console.log(`  ${i + 1}. "${c.text}"`);
});

console.log("\n" + "=".repeat(60));
console.log("Demo complete!");
console.log("=".repeat(60));
