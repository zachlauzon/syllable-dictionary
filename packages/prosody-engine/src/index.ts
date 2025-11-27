/**
 * Prosody Engine - prosody-aware line generation
 *
 * @module @syllable-dictionary/prosody-engine
 */

// Lexicon types and functions
export {
  type Stress,
  type LexWord,
  getWordByText,
  getWordById,
  getWordsByRhymeKey,
  getWordsBySyllableCount,
  getRhymeKeyForWord,
  getAllWords,
} from "./lexicon.js";

// Analyzer types and functions
export {
  type LineProsody,
  type MeterInference,
  type RhymeSchemeInference,
  type VerseAnalysis,
  analyzeLine,
  analyzeVerse,
} from "./analyzer.js";

// Generator types and functions
export {
  type Constraint,
  type CandidateLine,
  type PenaltyBreakdown,
  type GeneratorOptions,
  generateCandidates,
  generateCompletions,
} from "./generator.js";

// High-level helpers
export {
  type LineCompletionRequest,
  type LineCompletionResult,
  completeLine,
} from "./lineCompletion.js";

export {
  type FillBlankRequest,
  type FillBlankResult,
  fillBlank,
} from "./fillBlank.js";

// LLM integration
export {
  type LLMProvider,
  type LLMOptions,
  type LLMLineRequest,
  type ScoredLine,
  generateWithLLM,
  generateVerse,
  createMockLLMProvider,
  createOpenAIProvider,
  type OpenAIConfig,
} from "./llmCompletion.js";
