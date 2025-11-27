/**
 * Generator module - beam search candidate generation
 *
 * Generates candidate line completions that satisfy prosodic constraints.
 * Uses beam search to explore the space of possible word sequences.
 */

import {
  type LexWord,
  type Stress,
  getAllWords,
  getWordsByRhymeKey,
  getWordsBySyllableCount,
} from "./lexicon.js";

export type Constraint = {
  targetSyllables: number;
  targetRhymeKey?: string | null;
  targetStressPattern?: Stress[] | null;
  minFreqScore?: number;
};

export type CandidateLine = {
  words: LexWord[];
  text: string;
  syllableCount: number;
  stressPattern: Stress[];
  rhymeKey: string | null;
  score: number;
  penalties: PenaltyBreakdown;
};

export type PenaltyBreakdown = {
  syllablePenalty: number;
  rhymePenalty: number;
  stressPenalty: number;
  frequencyBonus: number;
};

export type GeneratorOptions = {
  beamWidth?: number;
  maxCandidates?: number;
  softPenalties?: boolean;
  diversityBonus?: number; // bonus for using different words
};

const DEFAULT_OPTIONS: Required<GeneratorOptions> = {
  beamWidth: 100,
  maxCandidates: 10,
  softPenalties: true,
  diversityBonus: 0.5,
};

/**
 * Shuffle array in place (Fisher-Yates)
 */
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}

/**
 * Calculate stress pattern similarity (0-1, where 1 is perfect match)
 */
function stressSimilarity(pattern: Stress[], target: Stress[]): number {
  if (pattern.length !== target.length) return 0;
  if (pattern.length === 0) return 1;

  let matches = 0;
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const t = target[i];
    if (p === t) {
      matches++;
    } else if (
      // Partial credit: secondary stress (2) is closer to primary (1) than unstressed (0)
      (p === 1 && t === 2) ||
      (p === 2 && t === 1)
    ) {
      matches += 0.5;
    }
  }
  return matches / pattern.length;
}

/**
 * Score a candidate line against constraints
 * Higher score = better fit
 */
function scoreCandidateAgainstConstraints(
  candidate: { words: LexWord[]; syllableCount: number },
  constraint: Constraint,
  softPenalties: boolean
): { score: number; penalties: PenaltyBreakdown } {
  // Start at 95 - frequency bonus (up to +5) can bring to 100 max
  let score = 95;
  const penalties: PenaltyBreakdown = {
    syllablePenalty: 0,
    rhymePenalty: 0,
    stressPenalty: 0,
    frequencyBonus: 0,
  };

  // Syllable count penalty
  const syllableDiff = Math.abs(
    candidate.syllableCount - constraint.targetSyllables
  );
  if (syllableDiff > 0) {
    penalties.syllablePenalty = syllableDiff * 10;
    if (!softPenalties && syllableDiff > 0) {
      return { score: 0, penalties }; // Hard constraint failure
    }
    score -= penalties.syllablePenalty;
  }

  // Rhyme penalty (only for final word)
  if (constraint.targetRhymeKey) {
    const lastWord = candidate.words[candidate.words.length - 1];
    if (lastWord?.rhymeKey !== constraint.targetRhymeKey) {
      penalties.rhymePenalty = 30;
      if (!softPenalties) {
        return { score: 0, penalties };
      }
      score -= penalties.rhymePenalty;
    }
  }

  // Stress pattern penalty
  if (constraint.targetStressPattern) {
    const candidatePattern: Stress[] = candidate.words.flatMap(
      (w) => w.stressPattern
    );
    const similarity = stressSimilarity(
      candidatePattern,
      constraint.targetStressPattern
    );
    penalties.stressPenalty = (1 - similarity) * 20;
    score -= penalties.stressPenalty;
  }

  // Frequency bonus (prefer common words)
  const avgFreq =
    candidate.words.reduce((acc, w) => acc + w.freqScore, 0) /
    candidate.words.length;
  penalties.frequencyBonus = avgFreq * 0.5;
  score += penalties.frequencyBonus;

  return { score: Math.max(0, score), penalties };
}

/**
 * Beam search state
 */
type BeamState = {
  words: LexWord[];
  syllableCount: number;
  score: number;
  usedWordIds: Set<number>;
};

/**
 * Generate candidate line completions using beam search
 */
export function generateCandidates(
  constraint: Constraint,
  options: GeneratorOptions = {}
): CandidateLine[] {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const allWords = getAllWords();

  // If we have a target rhyme, get words that rhyme
  const rhymingWords = constraint.targetRhymeKey
    ? getWordsByRhymeKey(constraint.targetRhymeKey)
    : [];

  // Initialize beam with empty state
  let beam: BeamState[] = [
    { words: [], syllableCount: 0, score: 100, usedWordIds: new Set() },
  ];

  // Expand beam until we have candidates that meet syllable count
  const completeCandidates: BeamState[] = [];
  const maxIterations = constraint.targetSyllables + 5; // Safety limit

  for (let iter = 0; iter < maxIterations && beam.length > 0; iter++) {
    const nextBeam: BeamState[] = [];

    for (const state of beam) {
      const remainingSyllables =
        constraint.targetSyllables - state.syllableCount;

      if (remainingSyllables <= 0) {
        // This state is complete (or over)
        completeCandidates.push(state);
        continue;
      }

      // Get candidate words to add
      // Prefer words that fit exactly or get us closer
      let candidateWords =
        remainingSyllables <= 3
          ? getWordsBySyllableCount(remainingSyllables).concat(
              remainingSyllables > 1
                ? getWordsBySyllableCount(remainingSyllables - 1)
                : []
            )
          : allWords.filter((w) => w.syllableCount <= remainingSyllables);

      // Shuffle to add variety
      candidateWords = shuffle(candidateWords);

      // If we need a rhyme and are close to target, prioritize rhyming words
      const shouldPrioritizeRhyme =
        constraint.targetRhymeKey && remainingSyllables <= 2;

      let wordsToTry = shouldPrioritizeRhyme
        ? shuffle(
            rhymingWords.filter((w) => w.syllableCount <= remainingSyllables)
          )
        : candidateWords;

      // Limit words to try per state to avoid explosion
      wordsToTry = wordsToTry.slice(0, 30);

      // If no words fit, try any word
      const finalWordsToTry =
        wordsToTry.length > 0 ? wordsToTry : candidateWords.slice(0, 30);

      for (const word of finalWordsToTry) {
        // Penalize repeated words
        const isRepeat = state.usedWordIds.has(word.id);
        const repeatPenalty = isRepeat ? 5 : 0;

        // Bonus for diversity (using new words)
        const diversityBonus = isRepeat ? 0 : opts.diversityBonus;

        const newUsedIds = new Set(state.usedWordIds);
        newUsedIds.add(word.id);

        const newState: BeamState = {
          words: [...state.words, word],
          syllableCount: state.syllableCount + word.syllableCount,
          score:
            state.score +
            word.freqScore * 0.1 +
            diversityBonus -
            repeatPenalty,
          usedWordIds: newUsedIds,
        };

        // Prune if we've gone too far over
        if (newState.syllableCount <= constraint.targetSyllables + 2) {
          nextBeam.push(newState);
        }
      }
    }

    // Keep top beamWidth states (with some randomness for diversity)
    nextBeam.sort((a, b) => b.score - a.score);
    beam = nextBeam.slice(0, opts.beamWidth);
  }

  // Add any remaining beam states to candidates
  completeCandidates.push(...beam);

  // Score all complete candidates against full constraints
  const scoredCandidates: CandidateLine[] = completeCandidates
    .filter((c) => c.words.length > 0)
    .map((c) => {
      const { score, penalties } = scoreCandidateAgainstConstraints(
        c,
        constraint,
        opts.softPenalties
      );
      const stressPattern: Stress[] = c.words.flatMap((w) => w.stressPattern);
      const lastWord = c.words[c.words.length - 1];

      return {
        words: c.words,
        text: c.words.map((w) => w.text).join(" "),
        syllableCount: c.syllableCount,
        stressPattern,
        rhymeKey: lastWord?.rhymeKey ?? null,
        score,
        penalties,
      };
    })
    .filter((c) => c.score > 0);

  // Sort by score and deduplicate
  scoredCandidates.sort((a, b) => b.score - a.score);

  // Deduplicate by text
  const seen = new Set<string>();
  const uniqueCandidates: CandidateLine[] = [];
  for (const candidate of scoredCandidates) {
    if (!seen.has(candidate.text)) {
      seen.add(candidate.text);
      uniqueCandidates.push(candidate);
    }
  }

  return uniqueCandidates.slice(0, opts.maxCandidates);
}

/**
 * Generate completions for a partial line
 * Given existing words, generate candidates that complete the line
 */
export function generateCompletions(
  existingWords: LexWord[],
  constraint: Constraint,
  options: GeneratorOptions = {}
): CandidateLine[] {
  const existingSyllables = existingWords.reduce(
    (acc, w) => acc + w.syllableCount,
    0
  );
  const remainingSyllables = constraint.targetSyllables - existingSyllables;

  if (remainingSyllables <= 0) {
    // Already at or over target
    const stressPattern: Stress[] = existingWords.flatMap(
      (w) => w.stressPattern
    );
    const lastWord = existingWords[existingWords.length - 1];
    return [
      {
        words: existingWords,
        text: existingWords.map((w) => w.text).join(" "),
        syllableCount: existingSyllables,
        stressPattern,
        rhymeKey: lastWord?.rhymeKey ?? null,
        score: 100,
        penalties: {
          syllablePenalty: Math.abs(remainingSyllables) * 10,
          rhymePenalty: 0,
          stressPenalty: 0,
          frequencyBonus: 0,
        },
      },
    ];
  }

  // Generate completions for remaining syllables
  const completionConstraint: Constraint = {
    ...constraint,
    targetSyllables: remainingSyllables,
  };

  const completions = generateCandidates(completionConstraint, options);

  // Prepend existing words to each completion
  return completions.map((completion) => {
    const allWords = [...existingWords, ...completion.words];
    const stressPattern: Stress[] = allWords.flatMap((w) => w.stressPattern);
    const lastWord = allWords[allWords.length - 1];

    return {
      words: allWords,
      text: allWords.map((w) => w.text).join(" "),
      syllableCount: existingSyllables + completion.syllableCount,
      stressPattern,
      rhymeKey: lastWord?.rhymeKey ?? null,
      score: completion.score,
      penalties: completion.penalties,
    };
  });
}
