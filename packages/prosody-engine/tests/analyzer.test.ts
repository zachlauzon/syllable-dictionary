import { describe, it, expect } from "vitest";
import { analyzeLine, analyzeVerse } from "../src/analyzer.js";
import { getRhymeKeyForWord } from "../src/lexicon.js";

describe("analyzer", () => {
  describe("analyzeLine", () => {
    it("analyzes single word correctly", () => {
      const result = analyzeLine("time");
      expect(result.text).toBe("time");
      expect(result.words).toHaveLength(1);
      expect(result.words[0]?.text).toBe("time");
      expect(result.unknownTokens).toEqual([]);
      expect(result.syllableCount).toBe(1);
      expect(result.stressPattern).toEqual([1]);
      expect(result.endingRhymeKey).toBe("AYM");
      expect(result.confidence).toBe(1);
    });

    it("analyzes multi-word line with correct aggregation", () => {
      // "the light" = the(1 syl, stress 0) + light(1 syl, stress 1)
      const result = analyzeLine("the light");
      expect(result.text).toBe("the light");
      expect(result.words).toHaveLength(2);
      expect(result.words[0]?.text).toBe("the");
      expect(result.words[1]?.text).toBe("light");
      expect(result.unknownTokens).toEqual([]);
      expect(result.syllableCount).toBe(2);
      expect(result.stressPattern).toEqual([0, 1]);
      expect(result.endingRhymeKey).toBe("AYT");
      expect(result.confidence).toBe(1);
    });

    it("tracks unknown tokens and reduces confidence", () => {
      const result = analyzeLine("the xyz light");
      expect(result.words).toHaveLength(2);
      expect(result.words.map((w) => w.text)).toEqual(["the", "light"]);
      expect(result.unknownTokens).toEqual(["xyz"]);
      expect(result.syllableCount).toBe(2); // Only known words counted
      expect(result.confidence).toBeCloseTo(2 / 3);
    });

    it("handles empty lines", () => {
      const result = analyzeLine("");
      expect(result.words).toEqual([]);
      expect(result.unknownTokens).toEqual([]);
      expect(result.syllableCount).toBe(0);
      expect(result.stressPattern).toEqual([]);
      expect(result.endingRhymeKey).toBeNull();
      expect(result.confidence).toBe(0);
    });

    it("handles whitespace-only lines", () => {
      const result = analyzeLine("   \t  ");
      expect(result.words).toEqual([]);
      expect(result.syllableCount).toBe(0);
      expect(result.confidence).toBe(0);
    });

    it("strips punctuation correctly", () => {
      const result = analyzeLine("time, light!");
      expect(result.words).toHaveLength(2);
      expect(result.words.map((w) => w.text)).toEqual(["time", "light"]);
      expect(result.unknownTokens).toEqual([]);
      expect(result.syllableCount).toBe(2);
    });

    it("preserves apostrophes for contractions", () => {
      const result = analyzeLine("i'm");
      expect(result.words).toHaveLength(1);
      expect(result.words[0]?.text).toBe("i'm");
    });

    it("calculates correct syllable count for longer lines", () => {
      // i(1) + feel(1) + the(1) + light(1) + tonight(2) = 6 syllables
      const result = analyzeLine("i feel the light tonight");
      expect(result.syllableCount).toBe(6);
      expect(result.words).toHaveLength(5);
    });

    it("builds correct stress pattern from multiple words", () => {
      // i(1) + feel(1) + the(0) + light(1) + tonight(0,1)
      const result = analyzeLine("i feel the light tonight");
      expect(result.stressPattern).toEqual([1, 1, 0, 1, 0, 1]);
      expect(result.stressPattern.length).toBe(result.syllableCount);
    });

    it("ending rhyme key is from last word only", () => {
      const result1 = analyzeLine("time light");
      expect(result1.endingRhymeKey).toBe("AYT"); // from "light"

      const result2 = analyzeLine("light time");
      expect(result2.endingRhymeKey).toBe("AYM"); // from "time"
    });
  });

  describe("analyzeVerse", () => {
    it("analyzes multiple lines", () => {
      const verse = `the light
the night`;
      const result = analyzeVerse(verse);
      expect(result.lines).toHaveLength(2);
      expect(result.lines[0]?.text).toBe("the light");
      expect(result.lines[1]?.text).toBe("the night");
    });

    it("filters empty lines", () => {
      const verse = `the light

the night`;
      const result = analyzeVerse(verse);
      expect(result.lines).toHaveLength(2);
    });

    it("trims whitespace from lines", () => {
      const verse = `  the light
   the night   `;
      const result = analyzeVerse(verse);
      expect(result.lines[0]?.text).toBe("the light");
      expect(result.lines[1]?.text).toBe("the night");
    });

    it("infers meter from consistent syllable counts", () => {
      const verse = `the light tonight
the fight in sight
i see the night
it feels so right`;
      const result = analyzeVerse(verse);
      expect(result.inferredMeter).not.toBeNull();
      expect(result.inferredMeter?.targetSyllables).toBeDefined();
    });

    it("infers AABB rhyme scheme correctly", () => {
      // night/light rhyme (AYT), heart/start rhyme (AART)
      const verse = `in the night
see the light
feel my heart
let me start`;
      const result = analyzeVerse(verse);
      expect(result.inferredRhymeScheme).not.toBeNull();
      expect(result.inferredRhymeScheme?.scheme).toBe("AABB");
      expect(result.inferredRhymeScheme?.lineRhymeKeys).toEqual([
        getRhymeKeyForWord("night"),
        getRhymeKeyForWord("light"),
        getRhymeKeyForWord("heart"),
        getRhymeKeyForWord("start"),
      ]);
    });

    it("infers ABAB rhyme scheme correctly", () => {
      const verse = `in the night
feel my heart
see the light
let me start`;
      const result = analyzeVerse(verse);
      expect(result.inferredRhymeScheme).not.toBeNull();
      expect(result.inferredRhymeScheme?.scheme).toBe("ABAB");
    });

    it("handles non-rhyming lines with X", () => {
      const verse = `the time
the love`;
      const result = analyzeVerse(verse);
      expect(result.inferredRhymeScheme?.scheme).toBe("AB");
    });

    it("returns null rhyme scheme for single line", () => {
      const result = analyzeVerse("the light");
      expect(result.inferredRhymeScheme).toBeNull();
    });

    it("suggests next rhyme key based on couplet pattern (AA -> A)", () => {
      const verse = `see the light
feel the night`;
      const result = analyzeVerse(verse);
      // Both lines end with AYT, so suggest continuing with AYT
      expect(result.inferredRhymeScheme?.suggestedNextRhymeKey).toBe(
        getRhymeKeyForWord("night")
      );
    });

    it("suggests next rhyme key based on ABAB pattern", () => {
      const verse = `in the night
feel my heart
see the light
let me start`;
      const result = analyzeVerse(verse);
      // ABAB pattern, next should be A (AYT)
      expect(result.inferredRhymeScheme?.suggestedNextRhymeKey).toBe(
        getRhymeKeyForWord("night")
      );
    });

    it("infers meter with target syllables from mode", () => {
      // All lines have 3 syllables
      const verse = `in the night
see the light
feel my heart`;
      const result = analyzeVerse(verse);
      expect(result.inferredMeter?.targetSyllables).toBe(3);
    });

    it("low confidence lines don't affect meter inference", () => {
      // Add a line with unknown words
      const verse = `in the night
xyz abc def
see the light`;
      const result = analyzeVerse(verse);
      // Line 2 has 0 confidence, so meter should be based on lines 1 and 3
      expect(result.inferredMeter?.targetSyllables).toBe(3);
    });
  });
});
