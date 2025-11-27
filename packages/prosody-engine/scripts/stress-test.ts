/**
 * Prosody Engine Stress Test Suite
 *
 * Exhaustive testing to find bugs, edge cases, and improvement opportunities.
 * Run with: npx tsx scripts/stress-test.ts
 */

import {
  analyzeLine,
  analyzeVerse,
  generateCandidates,
  generateCompletions,
  completeLine,
  fillBlank,
  getAllWords,
  getWordByText,
  getWordsByRhymeKey,
  getWordsBySyllableCount,
  getRhymeKeyForWord,
  type LexWord,
  type CandidateLine,
  type Constraint,
} from "../src/index.js";

// ============================================================
// TEST UTILITIES
// ============================================================

type TestResult = {
  name: string;
  passed: boolean;
  message: string;
  details?: unknown;
};

const results: TestResult[] = [];

function test(name: string, fn: () => { passed: boolean; message: string; details?: unknown }) {
  try {
    const result = fn();
    results.push({ name, ...result });
  } catch (error) {
    results.push({
      name,
      passed: false,
      message: `Exception: ${error instanceof Error ? error.message : String(error)}`,
      details: error,
    });
  }
}

function assert(condition: boolean, message: string): { passed: boolean; message: string } {
  return { passed: condition, message };
}

// ============================================================
// LEXICON STRESS TESTS
// ============================================================

console.log("\n========== LEXICON STRESS TESTS ==========\n");

test("All words have syllableCount === stressPattern.length", () => {
  const words = getAllWords();
  const mismatches: { word: string; syllables: number; patternLength: number }[] = [];

  for (const w of words) {
    if (w.syllableCount !== w.stressPattern.length) {
      mismatches.push({
        word: w.text,
        syllables: w.syllableCount,
        patternLength: w.stressPattern.length,
      });
    }
  }

  return {
    passed: mismatches.length === 0,
    message: mismatches.length === 0
      ? "All 1000 words have consistent syllable counts"
      : `${mismatches.length} words have mismatched syllableCount/stressPattern`,
    details: mismatches.slice(0, 10),
  };
});

test("All words have at least one phoneme", () => {
  const words = getAllWords();
  const empty = words.filter(w => w.phonemes.length === 0);
  return {
    passed: empty.length === 0,
    message: empty.length === 0
      ? "All words have phonemes"
      : `${empty.length} words have no phonemes`,
    details: empty.map(w => w.text),
  };
});

test("Rhyme key consistency - words ending in same phonemes should have same rhyme key", () => {
  const words = getAllWords();
  const byEnding = new Map<string, { word: string; rhymeKey: string | null }[]>();

  // Group by last 2 phonemes (without stress markers)
  for (const w of words) {
    if (w.phonemes.length >= 2) {
      const ending = w.phonemes.slice(-2).map(p => p.replace(/[012]/g, '')).join('-');
      const existing = byEnding.get(ending) ?? [];
      existing.push({ word: w.text, rhymeKey: w.rhymeKey });
      byEnding.set(ending, existing);
    }
  }

  // Find groups with inconsistent rhyme keys
  const inconsistent: { ending: string; words: { word: string; rhymeKey: string | null }[] }[] = [];
  for (const [ending, wordList] of byEnding) {
    const uniqueKeys = new Set(wordList.map(w => w.rhymeKey));
    // Allow null + one key, but flag if multiple non-null keys
    const nonNullKeys = [...uniqueKeys].filter(k => k !== null);
    if (nonNullKeys.length > 1 && wordList.length > 2) {
      inconsistent.push({ ending, words: wordList.slice(0, 5) });
    }
  }

  return {
    passed: inconsistent.length === 0,
    message: inconsistent.length === 0
      ? "Rhyme keys are consistent within phoneme endings"
      : `${inconsistent.length} phoneme endings have inconsistent rhyme keys (this may be expected due to stress)`,
    details: inconsistent.slice(0, 5),
  };
});

test("Frequency score distribution", () => {
  const words = getAllWords();
  const freqCounts = new Map<number, number>();

  for (const w of words) {
    freqCounts.set(w.freqScore, (freqCounts.get(w.freqScore) ?? 0) + 1);
  }

  const distribution = [...freqCounts.entries()].sort((a, b) => a[0] - b[0]);
  const minFreq = Math.min(...words.map(w => w.freqScore));
  const maxFreq = Math.max(...words.map(w => w.freqScore));

  return {
    passed: minFreq >= 1 && maxFreq <= 10,
    message: `Frequency scores range from ${minFreq} to ${maxFreq}`,
    details: { distribution: Object.fromEntries(distribution) },
  };
});

test("Syllable count distribution", () => {
  const words = getAllWords();
  const sylCounts = new Map<number, number>();

  for (const w of words) {
    sylCounts.set(w.syllableCount, (sylCounts.get(w.syllableCount) ?? 0) + 1);
  }

  const distribution = [...sylCounts.entries()].sort((a, b) => a[0] - b[0]);
  const has1Syl = (sylCounts.get(1) ?? 0) > 0;
  const has2Syl = (sylCounts.get(2) ?? 0) > 0;

  return {
    passed: has1Syl && has2Syl,
    message: `Syllable distribution: ${distribution.map(([s, c]) => `${s}syl:${c}`).join(", ")}`,
    details: { distribution: Object.fromEntries(distribution) },
  };
});

// ============================================================
// ANALYZER STRESS TESTS
// ============================================================

console.log("\n========== ANALYZER STRESS TESTS ==========\n");

test("Empty string analysis", () => {
  const result = analyzeLine("");
  return {
    passed: result.syllableCount === 0 && result.words.length === 0,
    message: `Empty string: ${result.syllableCount} syllables, ${result.words.length} words, confidence=${result.confidence}`,
    details: result,
  };
});

test("Whitespace-only analysis", () => {
  const result = analyzeLine("   \t\n   ");
  return {
    passed: result.syllableCount === 0 && result.words.length === 0,
    message: `Whitespace-only: ${result.syllableCount} syllables, confidence=${result.confidence}`,
    details: result,
  };
});

test("Punctuation-only analysis", () => {
  const result = analyzeLine("...!?!?---");
  return {
    passed: result.syllableCount === 0,
    message: `Punctuation-only: ${result.syllableCount} syllables, confidence=${result.confidence}`,
    details: result,
  };
});

test("Numbers analysis", () => {
  const result = analyzeLine("123 456 789");
  return {
    passed: result.unknownTokens.length === 3,
    message: `Numbers treated as unknown: ${result.unknownTokens.length} unknown tokens`,
    details: result,
  };
});

test("Mixed case handling", () => {
  const lower = analyzeLine("time light night");
  const upper = analyzeLine("TIME LIGHT NIGHT");
  const mixed = analyzeLine("TiMe LiGhT nIgHt");

  const allSame = lower.syllableCount === upper.syllableCount &&
                  upper.syllableCount === mixed.syllableCount;
  return {
    passed: allSame,
    message: allSame
      ? "Case-insensitive: all variants give same syllable count"
      : "Case sensitivity issue detected",
    details: { lower: lower.syllableCount, upper: upper.syllableCount, mixed: mixed.syllableCount },
  };
});

test("Long line analysis (20+ words)", () => {
  const words = getAllWords().slice(0, 25).map(w => w.text);
  const longLine = words.join(" ");
  const result = analyzeLine(longLine);

  return {
    passed: result.words.length === 25 && result.confidence === 1,
    message: `Long line (${words.length} words): ${result.syllableCount} syllables, confidence=${result.confidence}`,
    details: { wordCount: result.words.length, text: longLine.substring(0, 100) + "..." },
  };
});

test("All unknown words - confidence should be 0", () => {
  const result = analyzeLine("xyzzy plugh frobnitz quux");
  return {
    passed: result.confidence === 0 && result.words.length === 0,
    message: `All unknown: confidence=${result.confidence}, known words=${result.words.length}`,
    details: result,
  };
});

test("Stress pattern is correctly concatenated", () => {
  // "time" (stress 1) + "away" (stress 0,1) + "light" (stress 1) = [1, 0, 1, 1]
  const result = analyzeLine("time away light");
  const expectedPattern = [1, 0, 1, 1];
  const matches = JSON.stringify(result.stressPattern) === JSON.stringify(expectedPattern);

  return {
    passed: matches,
    message: matches
      ? "Stress pattern correctly concatenated"
      : `Expected ${JSON.stringify(expectedPattern)}, got ${JSON.stringify(result.stressPattern)}`,
    details: { expected: expectedPattern, actual: result.stressPattern },
  };
});

test("Verse analysis - AABB detection", () => {
  const verse = `in the night
see the light
feel my heart
let me start`;
  const result = analyzeVerse(verse);

  return {
    passed: result.inferredRhymeScheme?.scheme === "AABB",
    message: `AABB verse detected as: ${result.inferredRhymeScheme?.scheme}`,
    details: result.inferredRhymeScheme,
  };
});

test("Verse analysis - ABAB detection", () => {
  const verse = `in the night
feel my heart
see the light
let me start`;
  const result = analyzeVerse(verse);

  return {
    passed: result.inferredRhymeScheme?.scheme === "ABAB",
    message: `ABAB verse detected as: ${result.inferredRhymeScheme?.scheme}`,
    details: result.inferredRhymeScheme,
  };
});

test("Verse analysis - meter inference from consistent lines", () => {
  const verse = `time light night
love dream feel
heart start art`;
  const result = analyzeVerse(verse);

  return {
    passed: result.inferredMeter?.targetSyllables === 3,
    message: `Consistent 3-syllable lines: inferred target=${result.inferredMeter?.targetSyllables}`,
    details: result.inferredMeter,
  };
});

// ============================================================
// GENERATOR STRESS TESTS
// ============================================================

console.log("\n========== GENERATOR STRESS TESTS ==========\n");

test("Generate 1-syllable candidates", () => {
  const candidates = generateCandidates({ targetSyllables: 1 }, { maxCandidates: 50 });
  const allOneSyl = candidates.every(c => c.syllableCount === 1);

  return {
    passed: candidates.length > 0 && allOneSyl,
    message: `1-syllable: ${candidates.length} candidates, all correct=${allOneSyl}`,
    details: { count: candidates.length, samples: candidates.slice(0, 5).map(c => c.text) },
  };
});

test("Generate 10-syllable candidates", () => {
  const candidates = generateCandidates({ targetSyllables: 10 }, { maxCandidates: 20 });
  const closeToTarget = candidates.filter(c => Math.abs(c.syllableCount - 10) <= 2);

  return {
    passed: closeToTarget.length > 0,
    message: `10-syllable: ${candidates.length} candidates, ${closeToTarget.length} within ±2 of target`,
    details: {
      distribution: candidates.reduce((acc, c) => {
        acc[c.syllableCount] = (acc[c.syllableCount] ?? 0) + 1;
        return acc;
      }, {} as Record<number, number>),
    },
  };
});

test("Generate 0-syllable candidates (edge case)", () => {
  const candidates = generateCandidates({ targetSyllables: 0 }, { maxCandidates: 10 });

  return {
    passed: true, // Just document behavior
    message: `0-syllable target: ${candidates.length} candidates returned`,
    details: { count: candidates.length, samples: candidates.slice(0, 3).map(c => c.text) },
  };
});

test("Generate with non-existent rhyme key", () => {
  const candidates = generateCandidates(
    { targetSyllables: 3, targetRhymeKey: "ZZZZNONEXISTENT" },
    { maxCandidates: 10, softPenalties: true }
  );

  return {
    passed: candidates.length > 0, // Soft penalties should still return candidates
    message: `Non-existent rhyme key: ${candidates.length} candidates (soft penalties)`,
    details: {
      count: candidates.length,
      penalties: candidates.slice(0, 3).map(c => c.penalties)
    },
  };
});

test("Beam width = 1 (extreme narrow)", () => {
  const candidates = generateCandidates(
    { targetSyllables: 4 },
    { beamWidth: 1, maxCandidates: 5 }
  );

  return {
    passed: candidates.length >= 1,
    message: `Beam width 1: ${candidates.length} candidates`,
    details: { samples: candidates.map(c => c.text) },
  };
});

test("Beam width = 500 (wide)", () => {
  const start = Date.now();
  const candidates = generateCandidates(
    { targetSyllables: 5 },
    { beamWidth: 500, maxCandidates: 20 }
  );
  const elapsed = Date.now() - start;

  return {
    passed: elapsed < 5000, // Should complete in reasonable time
    message: `Beam width 500: ${candidates.length} candidates in ${elapsed}ms`,
    details: { elapsed, count: candidates.length },
  };
});

test("Rhyme constraint satisfaction rate", () => {
  const targetRhymeKey = getRhymeKeyForWord("night")!;
  const candidates = generateCandidates(
    { targetSyllables: 3, targetRhymeKey },
    { maxCandidates: 50 }
  );

  const rhyming = candidates.filter(c => c.rhymeKey === targetRhymeKey);
  const rate = candidates.length > 0 ? rhyming.length / candidates.length : 0;

  return {
    passed: rate > 0.5, // Expect majority to rhyme when constraint is set
    message: `Rhyme satisfaction: ${rhyming.length}/${candidates.length} (${(rate * 100).toFixed(1)}%)`,
    details: { rhyming: rhyming.length, total: candidates.length, rate },
  };
});

test("Score distribution - no scores > 100", () => {
  const candidates = generateCandidates({ targetSyllables: 4 }, { maxCandidates: 100 });
  const overMax = candidates.filter(c => c.score > 100);

  return {
    passed: overMax.length === 0,
    message: overMax.length === 0
      ? "All scores <= 100"
      : `${overMax.length} candidates have score > 100`,
    details: {
      scoreRange: { min: Math.min(...candidates.map(c => c.score)), max: Math.max(...candidates.map(c => c.score)) },
      overMax: overMax.slice(0, 5).map(c => ({ text: c.text, score: c.score })),
    },
  };
});

test("Score distribution - no negative scores", () => {
  const candidates = generateCandidates({ targetSyllables: 4 }, { maxCandidates: 100 });
  const negative = candidates.filter(c => c.score < 0);

  return {
    passed: negative.length === 0,
    message: negative.length === 0
      ? "All scores >= 0"
      : `${negative.length} candidates have negative scores`,
    details: { negative: negative.slice(0, 5).map(c => ({ text: c.text, score: c.score })) },
  };
});

test("Candidates are unique", () => {
  const candidates = generateCandidates({ targetSyllables: 4 }, { maxCandidates: 100 });
  const texts = candidates.map(c => c.text);
  const unique = new Set(texts);

  return {
    passed: texts.length === unique.size,
    message: texts.length === unique.size
      ? "All candidates unique"
      : `${texts.length - unique.size} duplicates found`,
    details: { total: texts.length, unique: unique.size },
  };
});

test("Candidates are sorted by score (descending)", () => {
  const candidates = generateCandidates({ targetSyllables: 5 }, { maxCandidates: 50 });
  let sorted = true;
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i]!.score > candidates[i-1]!.score) {
      sorted = false;
      break;
    }
  }

  return {
    passed: sorted,
    message: sorted ? "Candidates correctly sorted by score" : "Candidates NOT sorted by score",
    details: { scores: candidates.slice(0, 10).map(c => c.score) },
  };
});

test("Reproducibility check (beam search has shuffle)", () => {
  const constraint: Constraint = { targetSyllables: 4 };
  const run1 = generateCandidates(constraint, { maxCandidates: 10 });
  const run2 = generateCandidates(constraint, { maxCandidates: 10 });

  const texts1 = run1.map(c => c.text).join("|");
  const texts2 = run2.map(c => c.text).join("|");
  const identical = texts1 === texts2;

  return {
    passed: true, // Just documenting behavior
    message: identical
      ? "Results ARE identical (deterministic)"
      : "Results are NOT identical (non-deterministic due to shuffle)",
    details: {
      run1: run1.slice(0, 5).map(c => c.text),
      run2: run2.slice(0, 5).map(c => c.text),
    },
  };
});

test("BUG CHECK: generator.ts line 206-209 filter logic", () => {
  // The code is:
  // getWordsBySyllableCount(remainingSyllables - 1).filter(() => remainingSyllables > 1)
  // This filter ALWAYS returns the same boolean for every element
  // It should be: .filter(w => remainingSyllables > 1) or just a conditional

  // We can't directly test the internal bug, but we can observe its effect
  // When remainingSyllables = 1, the filter returns false for all, so empty array
  // When remainingSyllables = 2, it includes 1-syllable words (good)
  // The bug is that when remainingSyllables <= 1, the whole array is excluded

  const candidates = generateCandidates({ targetSyllables: 2 }, { maxCandidates: 50 });
  const oneSylWords = candidates.filter(c => c.words.some(w => w.syllableCount === 1));

  return {
    passed: true, // Documenting potential bug
    message: `Bug check: filter logic in generator.ts:206-209 - the filter(() => x) doesn't filter by element`,
    details: {
      observation: "The filter uses a constant boolean instead of filtering by element properties",
      impact: "May exclude valid word combinations in certain states",
      candidates2Syl: candidates.length,
      withOneSylWords: oneSylWords.length,
    },
  };
});

// ============================================================
// INTEGRATION STRESS TESTS
// ============================================================

console.log("\n========== INTEGRATION STRESS TESTS ==========\n");

test("completeLine - prefix exceeds target", () => {
  // "i feel the light tonight away" = 8 syllables, target = 5
  const result = completeLine({
    prefix: "i feel the light tonight away",
    targetTotalSyllables: 5,
  });

  return {
    passed: result.length === 0,
    message: `Prefix exceeds target: ${result.length} completions returned`,
    details: { result },
  };
});

test("completeLine - prefix equals target", () => {
  // "time light" = 2 syllables
  const result = completeLine({
    prefix: "time light",
    targetTotalSyllables: 2,
  });

  return {
    passed: result.length === 0, // No room for completion
    message: `Prefix equals target: ${result.length} completions returned (expected 0)`,
    details: { result },
  };
});

test("completeLine - with rhyme constraint", () => {
  const result = completeLine({
    prefix: "i feel the",
    targetTotalSyllables: 5,
    rhymeWithWord: "night",
    maxCandidates: 10,
  });

  const allRhyme = result.every(c => c.prosody.endingRhymeKey === getRhymeKeyForWord("night"));

  return {
    passed: result.length > 0 && allRhyme,
    message: `Line completion with rhyme: ${result.length} results, all rhyme=${allRhyme}`,
    details: {
      samples: result.slice(0, 5).map(c => ({
        text: c.text,
        rhymeKey: c.prosody.endingRhymeKey
      }))
    },
  };
});

test("fillBlank - blank at start", () => {
  const result = fillBlank({
    template: "____ the night",
    targetTotalSyllables: 4,
    maxCandidates: 10,
  });

  return {
    passed: result.length > 0,
    message: `Blank at start: ${result.length} results`,
    details: { samples: result.slice(0, 5).map(c => c.text) },
  };
});

test("fillBlank - blank at end", () => {
  const result = fillBlank({
    template: "in the ____",
    targetTotalSyllables: 4,
    rhymeWithWord: "night",
    maxCandidates: 10,
  });

  return {
    passed: result.length > 0,
    message: `Blank at end: ${result.length} results`,
    details: { samples: result.slice(0, 5).map(c => c.text) },
  };
});

test("fillBlank - throws on multiple blanks", () => {
  let threw = false;
  try {
    fillBlank({
      template: "____ and ____",
      targetTotalSyllables: 5,
    });
  } catch (e) {
    threw = true;
  }

  return {
    passed: threw,
    message: threw ? "Correctly throws on multiple blanks" : "Should throw on multiple blanks",
  };
});

test("fillBlank - throws on no blank", () => {
  let threw = false;
  try {
    fillBlank({
      template: "no blank here",
      targetTotalSyllables: 5,
    });
  } catch (e) {
    threw = true;
  }

  return {
    passed: threw,
    message: threw ? "Correctly throws on no blank" : "Should throw on no blank",
  };
});

test("Full pipeline - generate → analyze → verify", () => {
  const candidates = generateCandidates({ targetSyllables: 4 }, { maxCandidates: 20 });
  const verified: { match: boolean; candidate: string; claimed: number; actual: number }[] = [];

  for (const c of candidates) {
    const analyzed = analyzeLine(c.text);
    verified.push({
      match: c.syllableCount === analyzed.syllableCount,
      candidate: c.text,
      claimed: c.syllableCount,
      actual: analyzed.syllableCount,
    });
  }

  const allMatch = verified.every(v => v.match);
  const mismatches = verified.filter(v => !v.match);

  return {
    passed: allMatch,
    message: allMatch
      ? "All candidates have consistent syllable counts"
      : `${mismatches.length} candidates have inconsistent syllable counts`,
    details: { mismatches: mismatches.slice(0, 5) },
  };
});

// ============================================================
// PERFORMANCE TESTS
// ============================================================

console.log("\n========== PERFORMANCE TESTS ==========\n");

test("Generate 100 candidates performance", () => {
  const start = Date.now();
  for (let i = 0; i < 10; i++) {
    generateCandidates({ targetSyllables: 5 }, { maxCandidates: 100 });
  }
  const elapsed = Date.now() - start;
  const avg = elapsed / 10;

  return {
    passed: avg < 500, // Should average < 500ms
    message: `100 candidates x 10 runs: ${elapsed}ms total, ${avg}ms avg`,
    details: { elapsed, avg },
  };
});

test("Analyze 1000 lines performance", () => {
  const words = getAllWords();
  const lines = [];
  for (let i = 0; i < 1000; i++) {
    const lineWords = [];
    for (let j = 0; j < 5; j++) {
      lineWords.push(words[Math.floor(Math.random() * words.length)]!.text);
    }
    lines.push(lineWords.join(" "));
  }

  const start = Date.now();
  for (const line of lines) {
    analyzeLine(line);
  }
  const elapsed = Date.now() - start;

  return {
    passed: elapsed < 1000, // Should complete in < 1 second
    message: `Analyzed 1000 lines in ${elapsed}ms (${(elapsed / 1000).toFixed(2)}ms/line)`,
    details: { elapsed, perLine: elapsed / 1000 },
  };
});

test("Lexicon lookup performance (10000 lookups)", () => {
  const words = getAllWords().map(w => w.text);

  const start = Date.now();
  for (let i = 0; i < 10000; i++) {
    getWordByText(words[i % words.length]!);
  }
  const elapsed = Date.now() - start;

  return {
    passed: elapsed < 100, // Should be very fast
    message: `10000 lookups in ${elapsed}ms`,
    details: { elapsed },
  };
});

// ============================================================
// STATISTICAL ANALYSIS
// ============================================================

console.log("\n========== STATISTICAL ANALYSIS ==========\n");

test("Generate 500 candidates and analyze distribution", () => {
  const allCandidates: CandidateLine[] = [];
  for (let targetSyl = 2; targetSyl <= 8; targetSyl++) {
    const candidates = generateCandidates({ targetSyllables: targetSyl }, { maxCandidates: 100 });
    allCandidates.push(...candidates);
  }

  const scoreStats = {
    min: Math.min(...allCandidates.map(c => c.score)),
    max: Math.max(...allCandidates.map(c => c.score)),
    avg: allCandidates.reduce((s, c) => s + c.score, 0) / allCandidates.length,
  };

  const sylAccuracy = allCandidates.reduce((acc, c) => {
    const key = c.syllableCount === (Math.floor(c.score / 100) || 1) ? "match" : "mismatch";
    return acc;
  }, { match: 0, mismatch: 0 });

  const wordCountDist: Record<number, number> = {};
  for (const c of allCandidates) {
    const wc = c.words.length;
    wordCountDist[wc] = (wordCountDist[wc] ?? 0) + 1;
  }

  return {
    passed: true,
    message: `Analyzed ${allCandidates.length} candidates: scores ${scoreStats.min.toFixed(1)}-${scoreStats.max.toFixed(1)}, avg ${scoreStats.avg.toFixed(1)}`,
    details: { scoreStats, wordCountDist, totalCandidates: allCandidates.length },
  };
});

// ============================================================
// RUN AND REPORT
// ============================================================

console.log("\n========== RESULTS SUMMARY ==========\n");

const passed = results.filter(r => r.passed);
const failed = results.filter(r => !r.passed);

console.log(`Total tests: ${results.length}`);
console.log(`Passed: ${passed.length}`);
console.log(`Failed: ${failed.length}`);

if (failed.length > 0) {
  console.log("\n--- FAILED TESTS ---\n");
  for (const f of failed) {
    console.log(`❌ ${f.name}`);
    console.log(`   ${f.message}`);
    if (f.details) {
      console.log(`   Details: ${JSON.stringify(f.details, null, 2).split("\n").join("\n   ")}`);
    }
    console.log();
  }
}

console.log("\n--- ALL TEST RESULTS ---\n");
for (const r of results) {
  const icon = r.passed ? "✓" : "❌";
  console.log(`${icon} ${r.name}`);
  console.log(`  ${r.message}`);
  if (r.details && !r.passed) {
    console.log(`  Details: ${JSON.stringify(r.details, null, 2).substring(0, 500)}`);
  }
  console.log();
}

// Exit with error code if any tests failed
if (failed.length > 0) {
  process.exit(1);
}
