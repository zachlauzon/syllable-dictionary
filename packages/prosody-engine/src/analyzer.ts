/**
 * Analyzer module - text to structured prosody data
 */

import {
  type LexWord,
  type Stress,
  getWordByText,
  getRhymeKeyForWord,
} from "./lexicon.js";

export type LineProsody = {
  text: string;
  words: LexWord[];
  unknownTokens: string[];
  syllableCount: number;
  stressPattern: Stress[];
  endingRhymeKey: string | null;
  confidence: number;
};

export type MeterInference = {
  targetSyllables: number;
  targetStressPattern: Stress[] | null;
  description: string;
};

export type RhymeSchemeInference = {
  scheme: string;
  lineRhymeKeys: (string | null)[];
  suggestedNextRhymeKey: string | null;
};

export type VerseAnalysis = {
  lines: LineProsody[];
  inferredMeter: MeterInference | null;
  inferredRhymeScheme: RhymeSchemeInference | null;
};

/**
 * Tokenize text into words, stripping punctuation
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s']/g, "") // keep apostrophes for contractions
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Analyze a single line of text
 */
export function analyzeLine(text: string): LineProsody {
  const tokens = tokenize(text);
  const words: LexWord[] = [];
  const unknownTokens: string[] = [];

  for (const token of tokens) {
    const word = getWordByText(token);
    if (word) {
      words.push(word);
    } else {
      unknownTokens.push(token);
    }
  }

  const syllableCount = words.reduce((acc, w) => acc + w.syllableCount, 0);
  const stressPattern: Stress[] = words.flatMap((w) => w.stressPattern);
  const lastWord = words[words.length - 1];
  const endingRhymeKey = lastWord?.rhymeKey ?? null;

  const totalTokens = tokens.length;
  const confidence = totalTokens === 0 ? 0 : words.length / totalTokens;

  return {
    text,
    words,
    unknownTokens,
    syllableCount,
    stressPattern,
    endingRhymeKey,
    confidence,
  };
}

/**
 * Find the most common value in an array
 */
function mode<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;

  const counts = new Map<T, number>();
  for (const item of arr) {
    counts.set(item, (counts.get(item) ?? 0) + 1);
  }

  let maxCount = 0;
  let result: T | undefined;
  for (const [item, count] of counts) {
    if (count > maxCount) {
      maxCount = count;
      result = item;
    }
  }
  return result;
}

/**
 * Infer meter from analyzed lines
 */
function inferMeter(lines: LineProsody[]): MeterInference | null {
  const highConfidenceLines = lines.filter((l) => l.confidence >= 0.8);
  if (highConfidenceLines.length === 0) return null;

  const syllableCounts = highConfidenceLines.map((l) => l.syllableCount);
  const targetSyllables = mode(syllableCounts);

  if (targetSyllables === undefined) return null;

  // Try to find a common stress pattern length
  const matchingLines = highConfidenceLines.filter(
    (l) => l.syllableCount === targetSyllables
  );

  let targetStressPattern: Stress[] | null = null;
  if (matchingLines.length >= 2) {
    // For now, just use the first matching line's pattern as a reference
    // A more sophisticated approach would find common sub-patterns
    targetStressPattern = matchingLines[0]?.stressPattern ?? null;
  }

  const description = `~${targetSyllables} syllables${
    targetStressPattern ? ", with stress pattern" : ""
  }`;

  return {
    targetSyllables,
    targetStressPattern,
    description,
  };
}

/**
 * Infer rhyme scheme from analyzed lines
 */
function inferRhymeScheme(lines: LineProsody[]): RhymeSchemeInference | null {
  if (lines.length < 2) return null;

  const rhymeKeys = lines.map((l) => l.endingRhymeKey);

  // Assign scheme letters
  const keyToLetter = new Map<string, string>();
  let nextLetter = "A";
  const schemeLetters: string[] = [];

  for (const key of rhymeKeys) {
    if (key === null) {
      schemeLetters.push("X"); // non-rhyming line
    } else if (keyToLetter.has(key)) {
      schemeLetters.push(keyToLetter.get(key)!);
    } else {
      keyToLetter.set(key, nextLetter);
      schemeLetters.push(nextLetter);
      nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    }
  }

  const scheme = schemeLetters.join("");

  // Suggest next rhyme key based on pattern
  let suggestedNextRhymeKey: string | null = null;

  // Simple heuristic: if last two lines rhyme (AA pattern at end), continue it
  // If alternating (ABAB), follow the pattern
  if (lines.length >= 2) {
    const last = rhymeKeys[rhymeKeys.length - 1];
    const secondLast = rhymeKeys[rhymeKeys.length - 2];

    if (last && last === secondLast) {
      // Couplet pattern - suggest same rhyme
      suggestedNextRhymeKey = last;
    } else if (lines.length >= 4) {
      // Check for ABAB pattern
      const thirdLast = rhymeKeys[rhymeKeys.length - 3];
      const fourthLast = rhymeKeys[rhymeKeys.length - 4];

      if (
        fourthLast &&
        thirdLast &&
        fourthLast === secondLast &&
        thirdLast === last
      ) {
        // ABAB pattern - next should match secondLast
        suggestedNextRhymeKey = secondLast;
      }
    }

    // Default: suggest rhyming with the previous line
    if (!suggestedNextRhymeKey && last) {
      suggestedNextRhymeKey = last;
    }
  }

  return {
    scheme,
    lineRhymeKeys: rhymeKeys,
    suggestedNextRhymeKey,
  };
}

/**
 * Analyze a complete verse (multiple lines)
 */
export function analyzeVerse(text: string): VerseAnalysis {
  const lineTexts = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const lines = lineTexts.map(analyzeLine);

  const inferredMeter = inferMeter(lines);
  const inferredRhymeScheme = inferRhymeScheme(lines);

  return {
    lines,
    inferredMeter,
    inferredRhymeScheme,
  };
}
