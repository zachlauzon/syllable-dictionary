/**
 * LLM-powered line completion with prosodic constraints
 *
 * Strategy: LLM generates candidates, prosody engine filters/scores them.
 *
 * Three approaches:
 * 1. GENERATE & FILTER - LLM generates many lines, we filter by prosody
 * 2. CONSTRAINED GENERATION - Tell LLM the exact constraints upfront
 * 3. ITERATIVE REFINEMENT - LLM generates, we score, LLM revises
 *
 * This module implements approach #2 (constrained generation) with fallback to #1.
 */

import { analyzeLine, analyzeVerse, type LineProsody } from "./analyzer.js";
import { getRhymeKeyForWord, getWordsByRhymeKey } from "./lexicon.js";

export type LLMProvider = {
  /**
   * Generate completions from a prompt
   * Returns array of candidate strings
   */
  generate: (prompt: string, options?: LLMOptions) => Promise<string[]>;
};

export type LLMOptions = {
  temperature?: number;
  maxTokens?: number;
  numCompletions?: number;
};

export type LLMLineRequest = {
  /** Context lines (the verse so far) */
  context: string[];
  /** Target syllable count for the new line */
  targetSyllables: number;
  /** Word to rhyme with (optional) */
  rhymeWith?: string;
  /** Style/mood hints */
  style?: string;
  /** How many candidates to generate */
  numCandidates?: number;
};

export type ScoredLine = {
  text: string;
  prosody: LineProsody;
  scores: {
    syllableMatch: number; // 0-1, how close to target
    rhymeMatch: number; // 0-1, does it rhyme correctly
    confidence: number; // 0-1, how many words we recognized
    total: number; // weighted combination
  };
};

/**
 * Build a prompt that instructs the LLM about prosodic constraints
 */
function buildConstrainedPrompt(req: LLMLineRequest): string {
  const { context, targetSyllables, rhymeWith, style } = req;

  let prompt = `You are a skilled lyricist. Generate a single line of lyrics.\n\n`;

  if (context.length > 0) {
    prompt += `Here's the verse so far:\n`;
    prompt += context.map((l) => `  "${l}"`).join("\n");
    prompt += `\n\n`;
  }

  prompt += `REQUIREMENTS:\n`;
  prompt += `- The line MUST have exactly ${targetSyllables} syllables\n`;

  if (rhymeWith) {
    const rhymeKey = getRhymeKeyForWord(rhymeWith);
    const rhymingWords = rhymeKey
      ? getWordsByRhymeKey(rhymeKey)
          .slice(0, 10)
          .map((w) => w.text)
      : [];

    prompt += `- The line MUST end with a word that rhymes with "${rhymeWith}"\n`;
    if (rhymingWords.length > 0) {
      prompt += `  (words that rhyme: ${rhymingWords.join(", ")})\n`;
    }
  }

  if (style) {
    prompt += `- Style/mood: ${style}\n`;
  }

  prompt += `\nRespond with ONLY the line, nothing else. Count syllables carefully.\n`;
  prompt += `Line:`;

  return prompt;
}

/**
 * Score a generated line against prosodic requirements
 */
function scoreLine(
  line: string,
  targetSyllables: number,
  rhymeWith?: string
): ScoredLine {
  const prosody = analyzeLine(line);

  // Syllable match (1.0 = perfect, decreases with distance)
  const syllableDiff = Math.abs(prosody.syllableCount - targetSyllables);
  const syllableMatch = Math.max(0, 1 - syllableDiff * 0.2);

  // Rhyme match
  let rhymeMatch = 1.0;
  if (rhymeWith) {
    const targetRhymeKey = getRhymeKeyForWord(rhymeWith);
    if (targetRhymeKey && prosody.endingRhymeKey) {
      rhymeMatch = prosody.endingRhymeKey === targetRhymeKey ? 1.0 : 0.0;
    } else {
      rhymeMatch = 0.5; // Can't verify, give partial credit
    }
  }

  // Confidence (how many words we recognized)
  const confidence = prosody.confidence;

  // Weighted total
  const total = syllableMatch * 0.4 + rhymeMatch * 0.4 + confidence * 0.2;

  return {
    text: line,
    prosody,
    scores: {
      syllableMatch,
      rhymeMatch,
      confidence,
      total,
    },
  };
}

/**
 * Generate line completions using an LLM with prosodic constraints
 */
export async function generateWithLLM(
  provider: LLMProvider,
  req: LLMLineRequest
): Promise<ScoredLine[]> {
  const { targetSyllables, rhymeWith, numCandidates = 10 } = req;

  // Build the constrained prompt
  const prompt = buildConstrainedPrompt(req);

  // Generate multiple candidates
  const rawCandidates = await provider.generate(prompt, {
    temperature: 0.9,
    maxTokens: 50,
    numCompletions: numCandidates * 2, // Generate extra, we'll filter
  });

  // Score each candidate
  const scored = rawCandidates
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => scoreLine(line, targetSyllables, rhymeWith));

  // Sort by total score
  scored.sort((a, b) => b.scores.total - a.scores.total);

  // Return top candidates
  return scored.slice(0, numCandidates);
}

/**
 * Generate a full verse with consistent meter and rhyme scheme
 */
export async function generateVerse(
  provider: LLMProvider,
  options: {
    numLines: number;
    targetSyllables: number;
    rhymeScheme: string; // e.g., "AABB" or "ABAB"
    style?: string;
    seedLines?: string[];
  }
): Promise<ScoredLine[]> {
  const { numLines, targetSyllables, rhymeScheme, style, seedLines = [] } = options;

  const lines: ScoredLine[] = [];
  const rhymeGroups = new Map<string, string>(); // A -> "night", B -> "time", etc.

  // Analyze seed lines to extract rhyme groups
  for (let i = 0; i < seedLines.length && i < rhymeScheme.length; i++) {
    const schemeChar = rhymeScheme[i];
    if (schemeChar && !rhymeGroups.has(schemeChar)) {
      const prosody = analyzeLine(seedLines[i]!);
      const lastWord = prosody.words[prosody.words.length - 1];
      if (lastWord) {
        rhymeGroups.set(schemeChar, lastWord.text);
      }
    }
  }

  // Generate each line
  for (let i = 0; i < numLines; i++) {
    const schemeChar = rhymeScheme[i % rhymeScheme.length];
    const rhymeWith = schemeChar ? rhymeGroups.get(schemeChar) : undefined;

    const context = [
      ...seedLines,
      ...lines.map((l) => l.text),
    ];

    const candidates = await generateWithLLM(provider, {
      context,
      targetSyllables,
      rhymeWith,
      style,
      numCandidates: 5,
    });

    // Pick the best candidate
    const best = candidates[0];
    if (best) {
      lines.push(best);

      // If this is a new rhyme group, save the rhyme word
      if (schemeChar && !rhymeGroups.has(schemeChar)) {
        const lastWord = best.prosody.words[best.prosody.words.length - 1];
        if (lastWord) {
          rhymeGroups.set(schemeChar, lastWord.text);
        }
      }
    }
  }

  return lines;
}

// ============================================================
// MOCK LLM PROVIDER FOR TESTING
// ============================================================

/**
 * A mock LLM provider that generates semi-random lines
 * Uses templates + word substitution for testing
 */
export function createMockLLMProvider(): LLMProvider {
  const templates5syl = [
    "i'm in the {noun}",
    "we run the {noun}",
    "they know my {noun}",
    "i feel the {noun}",
    "she got that {noun}",
    "we on the {noun}",
    "i hit the {noun}",
    "they want my {noun}",
    "i'm with the {noun}",
  ];

  const templates6syl = [
    "i'm running through the {noun}",
    "we living in the {noun}",
    "they hating on my {noun}",
    "i'm chasing all the {noun}",
    "we stacking up the {noun}",
  ];

  const templates4syl = [
    "in the {noun}",
    "got the {noun}",
    "feel the {noun}",
    "run the {noun}",
    "on my {noun}",
  ];

  // Nouns grouped by rhyme
  const nounsByRhyme: Record<string, string[]> = {
    AYT: ["night", "light", "fight", "right", "sight"],
    OW: ["flow", "glow", "show", "go", "low"],
    EY: ["way", "day", "play", "stay", "say"],
    AYM: ["time", "prime", "climb", "crime"],
    IY: ["free", "see", "me", "we", "key"],
    AYER: ["fire", "higher", "wire"],
    ART: ["heart", "start", "part", "art"],
    IYL: ["feel", "real", "deal", "steal"],
  };

  return {
    async generate(prompt: string, options?: LLMOptions): Promise<string[]> {
      const numCompletions = options?.numCompletions ?? 5;
      const results: string[] = [];

      // Parse target syllables from prompt
      const sylMatch = prompt.match(/exactly (\d+) syllables/);
      const targetSyl = sylMatch?.[1] ? parseInt(sylMatch[1], 10) : 5;

      // Parse rhyme word from prompt
      const rhymeMatch = prompt.match(/rhymes with "(\w+)"/);
      const rhymeWord = rhymeMatch?.[1];
      const rhymeKey = rhymeWord ? getRhymeKeyForWord(rhymeWord) : null;

      // Pick templates based on syllable count
      let templates = templates5syl;
      if (targetSyl === 4) templates = templates4syl;
      if (targetSyl === 6) templates = templates6syl;

      // Get nouns that rhyme (or random if no rhyme specified)
      let nouns = Object.values(nounsByRhyme).flat();
      if (rhymeKey && nounsByRhyme[rhymeKey]) {
        nouns = nounsByRhyme[rhymeKey]!;
      }

      // Generate completions
      for (let i = 0; i < numCompletions; i++) {
        const template = templates[Math.floor(Math.random() * templates.length)]!;
        const noun = nouns[Math.floor(Math.random() * nouns.length)]!;
        results.push(template.replace("{noun}", noun));
      }

      return results;
    },
  };
}

// ============================================================
// OPENAI PROVIDER (for real usage)
// ============================================================

export type OpenAIConfig = {
  apiKey: string;
  model?: string;
};

/**
 * Create an LLM provider that uses OpenAI's API
 */
export function createOpenAIProvider(config: OpenAIConfig): LLMProvider {
  const { apiKey, model = "gpt-4o-mini" } = config;

  return {
    async generate(prompt: string, options?: LLMOptions): Promise<string[]> {
      const numCompletions = options?.numCompletions ?? 5;
      const temperature = options?.temperature ?? 0.9;
      const maxTokens = options?.maxTokens ?? 50;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: prompt }],
          temperature,
          max_tokens: maxTokens,
          n: numCompletions,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = (await response.json()) as {
        choices: { message: { content: string } }[];
      };

      return data.choices.map((c) => c.message.content.trim());
    },
  };
}
