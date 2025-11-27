/**
 * Integration tests for prosody-engine helpers
 */

import { describe, it, expect } from "vitest";
import { analyzeLine } from "../src/analyzer.js";
import { generateCandidates } from "../src/generator.js";
import { getRhymeKeyForWord } from "../src/lexicon.js";
import { completeLine } from "../src/lineCompletion.js";
import { fillBlank } from "../src/fillBlank.js";

describe("analyzeLine", () => {
  it("computes syllables and rhymeKey for single words", () => {
    const line = analyzeLine("time");
    expect(line.syllableCount).toBe(1);
    expect(line.stressPattern).toEqual([1]);
    expect(line.endingRhymeKey).toBe(getRhymeKeyForWord("time"));
    expect(line.confidence).toBe(1);
  });

  it("aggregates multiple words", () => {
    const line = analyzeLine("my time");
    expect(line.syllableCount).toBe(2); // my(1) + time(1)
    expect(line.stressPattern).toEqual([1, 1]);
    expect(line.endingRhymeKey).toBe(getRhymeKeyForWord("time"));
  });

  it("handles unknown words with reduced confidence", () => {
    const line = analyzeLine("mystery time");
    expect(line.syllableCount).toBe(1); // only "time" is known in toy lexicon
    expect(line.confidence).toBeCloseTo(0.5); // 1/2 tokens known
  });
});

describe("generateCandidates (toy)", () => {
  it("generates 2-syllable phrases", () => {
    const candidates = generateCandidates(
      { targetSyllables: 2 },
      { maxCandidates: 50 }
    );

    expect(candidates.length).toBeGreaterThan(0);

    // All candidates should have 2 syllables
    for (const c of candidates) {
      expect(c.syllableCount).toBe(2);
    }

    // Should generate some 2-word combinations
    const twoWordCandidates = candidates.filter(
      (c) => c.words.length === 2
    );
    expect(twoWordCandidates.length).toBeGreaterThan(0);
  });

  it("can constrain to rhyme with 'time'", () => {
    const rhymeKey = getRhymeKeyForWord("time");
    const candidates = generateCandidates(
      { targetSyllables: 2, targetRhymeKey: rhymeKey },
      { maxCandidates: 50 }
    );

    expect(candidates.length).toBeGreaterThan(0);

    // All candidates should end with the target rhyme key
    for (const c of candidates) {
      expect(c.rhymeKey).toBe(rhymeKey);
    }

    // Should not include words with different rhyme keys
    const texts = candidates.map((c) => c.text);
    expect(texts.some((t) => t.endsWith("light"))).toBe(false);
    expect(texts.some((t) => t.endsWith("night"))).toBe(false);
  });

  it("respects maxCandidates", () => {
    const candidates = generateCandidates(
      { targetSyllables: 2 },
      { maxCandidates: 3 }
    );

    expect(candidates.length).toBeLessThanOrEqual(3);
  });
});

describe("completeLine", () => {
  it("completes a prefix to reach a target syllable count", () => {
    // "i'm chasing dreams but my"
    // i'm(1) + chasing(2) + dreams(1) + but(1) + my(1) = 6 syllables
    const prefix = "i'm chasing dreams but my";

    const completed = completeLine({
      prefix,
      targetTotalSyllables: 8,
      rhymeWithWord: "time", // we want the line to end with a TIME rhyme
      maxCandidates: 10,
    });

    const texts = completed.map((c) => c.text);

    // All completions should have 8 syllables total
    for (const c of completed) {
      expect(c.prosody.syllableCount).toBe(8);
    }

    // And should end with words that rhyme with "time"
    for (const c of completed) {
      expect(c.prosody.endingRhymeKey).toBe(getRhymeKeyForWord("time"));
    }
  });
});

describe("fillBlank", () => {
  it("fills the blank with a 1-syllable word that rhymes with 'night'", () => {
    const template = "in the ____";
    // "in"(1) + "the"(1) = 2 syllables; target 3 -> blank = 1 syllable
    const filled = fillBlank({
      template,
      targetTotalSyllables: 3,
      rhymeWithWord: "light", // same rhyme family AYT: light, night, fight
      maxCandidates: 10,
    });

    const texts = filled.map((c) => c.text);

    // Should include e.g. "in the night" and/or "in the fight"
    expect(texts).toContain("in the night");

    // All lines should be 3 syllables total
    for (const c of filled) {
      expect(c.prosody.syllableCount).toBe(3);
      expect(c.prosody.endingRhymeKey).toBe(getRhymeKeyForWord("light"));
    }
  });

  it("fills a mid-line blank in a longer template", () => {
    const template = "i'm chasing dreams but my ____ falling";
    // i'm(1) + chasing(2) + dreams(1) + but(1) + my(1) + falling(2) = 8 syllables
    // Target 10 -> blank gets 2 syllables
    const filled = fillBlank({
      template,
      targetTotalSyllables: 10,
      maxCandidates: 10,
    });

    // We don't know exact text here, but we can assert syllables:
    for (const c of filled) {
      expect(c.prosody.syllableCount).toBe(10);
    }
  });

  it("throws on invalid template", () => {
    expect(() =>
      fillBlank({
        template: "no blank here",
        targetTotalSyllables: 5,
      })
    ).toThrow("Template must contain exactly one ____ placeholder");

    expect(() =>
      fillBlank({
        template: "two ____ blanks ____",
        targetTotalSyllables: 5,
      })
    ).toThrow("Template must contain exactly one ____ placeholder");
  });
});
