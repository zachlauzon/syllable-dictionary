import { describe, it, expect } from "vitest";
import {
  getWordByText,
  getWordById,
  getWordsByRhymeKey,
  getWordsBySyllableCount,
  getRhymeKeyForWord,
  getAllWords,
} from "../src/lexicon.js";

describe("lexicon", () => {
  describe("getWordByText", () => {
    it("returns word for known text", () => {
      const word = getWordByText("time");
      expect(word).toBeDefined();
      expect(word?.text).toBe("time");
      expect(word?.syllableCount).toBe(1);
      expect(word?.phonemes).toEqual(["T", "AY1", "M"]);
      expect(word?.stressPattern).toEqual([1]);
    });

    it("is case-insensitive", () => {
      const lower = getWordByText("time");
      const upper = getWordByText("TIME");
      const mixed = getWordByText("TiMe");
      expect(lower).toBeDefined();
      expect(upper).toEqual(lower);
      expect(mixed).toEqual(lower);
    });

    it("returns undefined for unknown text", () => {
      expect(getWordByText("supercalifragilistic")).toBeUndefined();
      expect(getWordByText("asdfghjkl")).toBeUndefined();
      expect(getWordByText("")).toBeUndefined();
    });
  });

  describe("getWordById", () => {
    it("returns word for known id and id matches", () => {
      const word = getWordById(0);
      expect(word).toBeDefined();
      expect(word?.id).toBe(0);

      // Verify round-trip: get by text, then by id
      const timeWord = getWordByText("time");
      expect(timeWord).toBeDefined();
      const byId = getWordById(timeWord!.id);
      expect(byId).toEqual(timeWord);
    });

    it("returns undefined for unknown id", () => {
      expect(getWordById(99999)).toBeUndefined();
      expect(getWordById(-1)).toBeUndefined();
    });
  });

  describe("getWordsByRhymeKey", () => {
    it("returns all words with matching rhyme key for AYT (night/light/fight)", () => {
      // night, light, fight all have rhyme key AYT (from AY1 T)
      const rhymeKey = getRhymeKeyForWord("night");
      expect(rhymeKey).toBe("AYT");

      const words = getWordsByRhymeKey(rhymeKey!);
      const texts = words.map((w) => w.text);

      expect(texts).toContain("night");
      expect(texts).toContain("light");
      expect(texts).toContain("fight");

      // All should have same rhyme key
      expect(words.every((w) => w.rhymeKey === "AYT")).toBe(true);
    });

    it("returns words that actually rhyme", () => {
      // Verify heart/start share a rhyme key
      const heartRhyme = getRhymeKeyForWord("heart");
      const startRhyme = getRhymeKeyForWord("start");
      expect(heartRhyme).toBe(startRhyme);

      const words = getWordsByRhymeKey(heartRhyme!);
      const texts = words.map((w) => w.text);
      expect(texts).toContain("heart");
      expect(texts).toContain("start");
    });

    it("returns empty array for unknown rhyme key", () => {
      expect(getWordsByRhymeKey("ZZZZUNKNOWN")).toEqual([]);
      expect(getWordsByRhymeKey("")).toEqual([]);
    });
  });

  describe("getWordsBySyllableCount", () => {
    it("returns only 1-syllable words for count 1", () => {
      const words = getWordsBySyllableCount(1);
      expect(words.length).toBeGreaterThan(0);
      expect(words.every((w) => w.syllableCount === 1)).toBe(true);

      // Verify known 1-syllable words are included
      const texts = words.map((w) => w.text);
      expect(texts).toContain("time"); // T AY1 M
      expect(texts).toContain("night"); // N AY1 T
      expect(texts).toContain("love"); // L AH1 V
    });

    it("returns only 2-syllable words for count 2", () => {
      const words = getWordsBySyllableCount(2);
      expect(words.length).toBeGreaterThan(0);
      expect(words.every((w) => w.syllableCount === 2)).toBe(true);

      // Verify known 2-syllable words are included
      const texts = words.map((w) => w.text);
      expect(texts).toContain("away"); // AH0 W EY1
    });

    it("returns only 3-syllable words for count 3", () => {
      const words = getWordsBySyllableCount(3);
      expect(words.length).toBeGreaterThan(0);
      expect(words.every((w) => w.syllableCount === 3)).toBe(true);

      // Verify known 3-syllable words are included
      const texts = words.map((w) => w.text);
      expect(texts).toContain("forever"); // F ER0 EH1 V ER0
    });

    it("returns empty array for syllable count with no matches", () => {
      expect(getWordsBySyllableCount(10)).toEqual([]);
      expect(getWordsBySyllableCount(0)).toEqual([]);
    });
  });

  describe("getRhymeKeyForWord", () => {
    it("returns correct rhyme key for time (AYM)", () => {
      // time: T AY1 M -> rhyme key should be AYM (AY + M)
      expect(getRhymeKeyForWord("time")).toBe("AYM");
    });

    it("returns correct rhyme key for night (AYT)", () => {
      // night: N AY1 T -> rhyme key should be AYT
      expect(getRhymeKeyForWord("night")).toBe("AYT");
    });

    it("returns correct rhyme key for heart (AART)", () => {
      // heart: HH AA1 R T -> rhyme key should be AART
      expect(getRhymeKeyForWord("heart")).toBe("AART");
    });

    it("returns same rhyme key for words that rhyme", () => {
      // night/light/fight all rhyme
      const nightKey = getRhymeKeyForWord("night");
      expect(getRhymeKeyForWord("light")).toBe(nightKey);
      expect(getRhymeKeyForWord("fight")).toBe(nightKey);

      // heart/start rhyme
      const heartKey = getRhymeKeyForWord("heart");
      expect(getRhymeKeyForWord("start")).toBe(heartKey);
    });

    it("returns different rhyme keys for words that don't rhyme", () => {
      expect(getRhymeKeyForWord("night")).not.toBe(getRhymeKeyForWord("time"));
      expect(getRhymeKeyForWord("heart")).not.toBe(getRhymeKeyForWord("love"));
    });

    it("returns null for unknown words", () => {
      expect(getRhymeKeyForWord("xyz")).toBeNull();
      expect(getRhymeKeyForWord("asdfghjkl")).toBeNull();
    });
  });

  describe("getAllWords", () => {
    it("returns all words in lexicon with correct count", () => {
      const words = getAllWords();
      expect(words.length).toBe(1000); // We built a 1000-word lexicon
    });

    it("includes expected common words", () => {
      const words = getAllWords();
      const texts = words.map((w) => w.text);

      // Priority words should all be included
      expect(texts).toContain("time");
      expect(texts).toContain("love");
      expect(texts).toContain("heart");
      expect(texts).toContain("night");
      expect(texts).toContain("light");
      expect(texts).toContain("dream");
      expect(texts).toContain("feel");
    });

    it("all words have valid structure", () => {
      const words = getAllWords();
      for (const word of words) {
        expect(typeof word.id).toBe("number");
        expect(typeof word.text).toBe("string");
        expect(word.text.length).toBeGreaterThan(0);
        expect(Array.isArray(word.phonemes)).toBe(true);
        expect(word.phonemes.length).toBeGreaterThan(0);
        expect(Array.isArray(word.stressPattern)).toBe(true);
        expect(word.stressPattern.length).toBeGreaterThan(0);
        expect(word.syllableCount).toBe(word.stressPattern.length);
        expect(typeof word.freqScore).toBe("number");
      }
    });
  });

  describe("word structure - exact values", () => {
    it("time: T AY1 M = 1 syllable, stress [1], rhyme AYM", () => {
      const word = getWordByText("time");
      expect(word).toEqual(
        expect.objectContaining({
          text: "time",
          phonemes: ["T", "AY1", "M"],
          stressPattern: [1],
          syllableCount: 1,
          rhymeKey: "AYM",
        })
      );
    });

    it("night: N AY1 T = 1 syllable, stress [1], rhyme AYT", () => {
      const word = getWordByText("night");
      expect(word).toEqual(
        expect.objectContaining({
          text: "night",
          phonemes: ["N", "AY1", "T"],
          stressPattern: [1],
          syllableCount: 1,
          rhymeKey: "AYT",
        })
      );
    });

    it("away: AH0 W EY1 = 2 syllables, stress [0, 1]", () => {
      const word = getWordByText("away");
      expect(word).toEqual(
        expect.objectContaining({
          text: "away",
          phonemes: ["AH0", "W", "EY1"],
          stressPattern: [0, 1],
          syllableCount: 2,
        })
      );
    });

    it("forever: F ER0 EH1 V ER0 = 3 syllables, stress [0, 1, 0]", () => {
      const word = getWordByText("forever");
      expect(word).toEqual(
        expect.objectContaining({
          text: "forever",
          phonemes: ["F", "ER0", "EH1", "V", "ER0"],
          stressPattern: [0, 1, 0],
          syllableCount: 3,
        })
      );
    });

    it("the: DH AH0 = 1 syllable, stress [0] (unstressed)", () => {
      const word = getWordByText("the");
      expect(word).toEqual(
        expect.objectContaining({
          text: "the",
          phonemes: ["DH", "AH0"],
          stressPattern: [0],
          syllableCount: 1,
        })
      );
    });
  });
});
