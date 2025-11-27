/**
 * Line completion helper - simple API for completing partial lines
 */

import { analyzeLine, type LineProsody } from "./analyzer.js";
import { generateCandidates } from "./generator.js";
import { getRhymeKeyForWord } from "./lexicon.js";

export type LineCompletionRequest = {
  prefix: string; // existing part of the line
  targetTotalSyllables: number; // desired total syllables for full line
  rhymeWithWord?: string;
  maxCandidates?: number;
};

export type LineCompletionResult = {
  text: string;
  prosody: LineProsody;
};

/**
 * Complete a line by generating an ending that fills the remaining syllables.
 * Very simple: ignores stress, just syllable count + optional rhyme.
 */
export function completeLine(
  req: LineCompletionRequest
): LineCompletionResult[] {
  const { prefix, targetTotalSyllables, rhymeWithWord, maxCandidates } = req;

  const prefixProsody = analyzeLine(prefix);
  const remaining = targetTotalSyllables - prefixProsody.syllableCount;

  if (remaining <= 0) return [];

  // Convert rhymeWithWord to rhymeKey
  const targetRhymeKey = rhymeWithWord
    ? getRhymeKeyForWord(rhymeWithWord)
    : undefined;

  const endings = generateCandidates(
    {
      targetSyllables: remaining,
      targetRhymeKey,
    },
    {
      maxCandidates,
    }
  );

  return endings.map((ending) => {
    const fullText = `${prefix} ${ending.text}`.replace(/\s+/g, " ").trim();
    return {
      text: fullText,
      prosody: analyzeLine(fullText),
    };
  });
}
