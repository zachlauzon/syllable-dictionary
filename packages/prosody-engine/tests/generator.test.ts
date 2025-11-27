import { describe, it, expect } from "vitest";
import {
  generateCandidates,
  generateCompletions,
  type Constraint,
} from "../src/generator.js";
import { getWordByText, getRhymeKeyForWord } from "../src/lexicon.js";

describe("generator", () => {
  describe("generateCandidates", () => {
    it("generates candidates matching syllable count", () => {
      const constraint: Constraint = {
        targetSyllables: 3,
      };
      const candidates = generateCandidates(constraint);

      expect(candidates.length).toBeGreaterThan(0);
      // Most candidates should be close to target syllables
      const closeToTarget = candidates.filter(
        (c) => Math.abs(c.syllableCount - 3) <= 1
      );
      expect(closeToTarget.length).toBeGreaterThan(0);
    });

    it("generates candidates matching rhyme key", () => {
      const targetRhymeKey = getRhymeKeyForWord("night");
      const constraint: Constraint = {
        targetSyllables: 2,
        targetRhymeKey,
      };
      const candidates = generateCandidates(constraint);

      expect(candidates.length).toBeGreaterThan(0);
      // Some candidates should have the target rhyme
      const rhyming = candidates.filter((c) => c.rhymeKey === targetRhymeKey);
      expect(rhyming.length).toBeGreaterThan(0);
    });

    it("returns candidates sorted by score", () => {
      const constraint: Constraint = {
        targetSyllables: 4,
      };
      const candidates = generateCandidates(constraint);

      for (let i = 1; i < candidates.length; i++) {
        const prev = candidates[i - 1];
        const curr = candidates[i];
        expect(prev?.score).toBeGreaterThanOrEqual(curr?.score ?? 0);
      }
    });

    it("returns unique candidates", () => {
      const constraint: Constraint = {
        targetSyllables: 3,
      };
      const candidates = generateCandidates(constraint);
      const texts = candidates.map((c) => c.text);
      const uniqueTexts = new Set(texts);

      expect(texts.length).toBe(uniqueTexts.size);
    });

    it("respects maxCandidates option", () => {
      const constraint: Constraint = {
        targetSyllables: 4,
      };
      const candidates = generateCandidates(constraint, { maxCandidates: 5 });

      expect(candidates.length).toBeLessThanOrEqual(5);
    });

    it("includes penalty breakdown", () => {
      const targetRhymeKey = getRhymeKeyForWord("night");
      const constraint: Constraint = {
        targetSyllables: 3,
        targetRhymeKey,
      };
      const candidates = generateCandidates(constraint);

      expect(candidates.length).toBeGreaterThan(0);
      const first = candidates[0];
      expect(first?.penalties).toBeDefined();
      expect(first?.penalties.syllablePenalty).toBeGreaterThanOrEqual(0);
      expect(first?.penalties.rhymePenalty).toBeGreaterThanOrEqual(0);
    });

    it("builds correct text from words", () => {
      const constraint: Constraint = {
        targetSyllables: 2,
      };
      const candidates = generateCandidates(constraint);

      for (const candidate of candidates) {
        const expectedText = candidate.words.map((w) => w.text).join(" ");
        expect(candidate.text).toBe(expectedText);
      }
    });
  });

  describe("generateCompletions", () => {
    it("completes a partial line", () => {
      const theWord = getWordByText("the");
      if (!theWord) throw new Error("'the' not in lexicon");

      const constraint: Constraint = {
        targetSyllables: 4,
      };
      const completions = generateCompletions([theWord], constraint);

      expect(completions.length).toBeGreaterThan(0);
      // All completions should start with "the"
      for (const c of completions) {
        expect(c.words[0]?.text).toBe("the");
        expect(c.text.startsWith("the")).toBe(true);
      }
    });

    it("handles line already at target", () => {
      const time = getWordByText("time");
      const light = getWordByText("light");
      if (!time || !light) throw new Error("words not in lexicon");

      const constraint: Constraint = {
        targetSyllables: 2,
      };
      const completions = generateCompletions([time, light], constraint);

      expect(completions.length).toBe(1);
      expect(completions[0]?.text).toBe("time light");
    });

    it("preserves existing words in completions", () => {
      const i = getWordByText("i");
      const feel = getWordByText("feel");
      if (!i || !feel) throw new Error("words not in lexicon");

      const targetRhymeKey = getRhymeKeyForWord("night");
      const constraint: Constraint = {
        targetSyllables: 5,
        targetRhymeKey,
      };
      const completions = generateCompletions([i, feel], constraint);

      expect(completions.length).toBeGreaterThan(0);
      for (const c of completions) {
        expect(c.words[0]?.text).toBe("i");
        expect(c.words[1]?.text).toBe("feel");
      }
    });

    it("respects rhyme constraint for completions", () => {
      const my = getWordByText("my");
      if (!my) throw new Error("'my' not in lexicon");

      const targetRhymeKey = getRhymeKeyForWord("night");
      const constraint: Constraint = {
        targetSyllables: 3,
        targetRhymeKey,
      };
      const completions = generateCompletions([my], constraint);

      expect(completions.length).toBeGreaterThan(0);
      // At least some completions should rhyme
      const rhyming = completions.filter((c) => c.rhymeKey === targetRhymeKey);
      expect(rhyming.length).toBeGreaterThan(0);
    });
  });

  describe("soft penalties", () => {
    it("returns candidates even when constraints not perfectly met", () => {
      const constraint: Constraint = {
        targetSyllables: 1,
        targetRhymeKey: "NONEXISTENT",
      };
      const candidates = generateCandidates(constraint, { softPenalties: true });

      // Should still return some candidates, just with penalties
      expect(candidates.length).toBeGreaterThan(0);
    });

    it("penalizes syllable mismatch", () => {
      const constraint: Constraint = {
        targetSyllables: 5,
      };
      const candidates = generateCandidates(constraint, { softPenalties: true });

      // Candidates with exact syllable count should score higher
      const exact = candidates.filter((c) => c.syllableCount === 5);
      const off = candidates.filter((c) => c.syllableCount !== 5);

      if (exact.length > 0 && off.length > 0) {
        const bestExact = exact[0];
        const bestOff = off[0];
        // Exact match should score higher (assuming similar words)
        expect(bestExact?.penalties.syllablePenalty).toBe(0);
        expect(bestOff?.penalties.syllablePenalty).toBeGreaterThan(0);
      }
    });
  });
});
