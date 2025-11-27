/**
 * Fill-in-the-blank helper - generate words to fill a gap in a line
 */

import { analyzeLine, type LineProsody } from "./analyzer.js";
import { generateCandidates } from "./generator.js";
import { getRhymeKeyForWord } from "./lexicon.js";

export type FillBlankRequest = {
  template: string; // e.g. "i'm chasing dreams but my ____"
  targetTotalSyllables: number; // desired total for full line
  rhymeWithWord?: string;
  maxCandidates?: number;
};

export type FillBlankResult = {
  text: string;
  prosody: LineProsody;
};

/**
 * Fill in a blank in a template line.
 * Template must contain exactly one ____ placeholder.
 */
export function fillBlank(req: FillBlankRequest): FillBlankResult[] {
  const { template, targetTotalSyllables, rhymeWithWord, maxCandidates } = req;

  const parts = template.split("____");
  if (parts.length !== 2) {
    throw new Error("Template must contain exactly one ____ placeholder");
  }

  const [before, after] = parts;
  const beforeProsody = analyzeLine(before ?? "");
  const afterProsody = analyzeLine(after ?? "");

  const usedSyl = beforeProsody.syllableCount + afterProsody.syllableCount;
  const remaining = targetTotalSyllables - usedSyl;

  if (remaining <= 0) return [];

  // Convert rhymeWithWord to rhymeKey
  const targetRhymeKey = rhymeWithWord
    ? getRhymeKeyForWord(rhymeWithWord)
    : undefined;

  const middleCandidates = generateCandidates(
    {
      targetSyllables: remaining,
      targetRhymeKey,
    },
    {
      maxCandidates,
    }
  );

  return middleCandidates.map((middle) => {
    const fullText = `${before} ${middle.text} ${after}`
      .replace(/\s+/g, " ")
      .trim();
    return {
      text: fullText,
      prosody: analyzeLine(fullText),
    };
  });
}
