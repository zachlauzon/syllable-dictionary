# Prosody Engine - Project Context

## Vision

A **prosody-aware line-crafting engine** for songwriters, lyricists, poets, and rappers. The core idea: "You focus on meaning. I'll enforce rhythm, stress, and rhyme."

Users paste a few lines of verse, and the engine:
1. Analyzes meter, rhyme scheme, and semantic context
2. Generates candidate completions matching syllable count, stress patterns, and rhyme
3. Ranks candidates by symbolic fit (meter/rhyme) and semantic fit (embeddings)
4. Presents options that feel "on-theme" and rhythmically correct

## Architecture

### Four Layers

```
1. Analyzer     - text → structured prosody data (CMU dict lookups)
2. Constraints  - flexible spec for what we want (syllables, stress, rhyme, etc.)
3. Generator    - beam search over word sequences to produce candidates
4. Scorer       - symbolic scoring + semantic scoring (embeddings/LLM)
```

### Core Data Types

```typescript
// Word-level prosody data (precomputed from CMU dict)
type LexWord = {
  id: number;
  text: string;
  phonemes: string[];
  stressPattern: (0 | 1 | 2)[];  // per syllable
  syllableCount: number;
  rhymeKey: string | null;       // last stressed vowel + tail
  freqScore: number;             // higher = more common
};

// Line analysis result
type LineProsody = {
  text: string;
  words: LexWord[];
  syllableCount: number;
  stressPattern: (0 | 1 | 2)[];
  endingRhymeKey: string | null;
  confidence: number;  // 0-1, based on OOV words
};

// Verse-level analysis with inferred patterns
type VerseAnalysis = {
  lines: LineProsody[];
  inferredMeter?: { targetSyllables: number; targetStressPattern?: (0|1|2)[]; };
  inferredRhymeScheme?: { scheme: string; suggestedNextRhymeClass?: number; };
};

// Generation output
type CandidateLine = {
  text: string;
  prosody: LineProsody;
  scores: {
    meterFit: number;
    rhymeFit: number;
    lexicalScore: number;
    totalSymbolic: number;
    semanticFit?: number;   // from embeddings
    llmQuality?: number;    // from LLM judge
  };
};
```

### Constraint System

Constraints split into **hard** (never violate) vs **soft** (score/penalize):

```typescript
type ProsodyConstraints = {
  // Soft targets (scored, not hard failures)
  targetSyllables?: number;
  minSyllables?: number;
  maxSyllables?: number;
  targetStressPattern?: (0 | 1 | 2)[];
  stressTolerance?: number;

  // Rhyme
  rhymeWithWord?: string;
  rhymeKey?: string;
  rhymeType?: "perfect" | "slant" | "assonance" | "none";

  // Mode
  mode: "nextLine" | "fillBlank" | "replaceLine";
  templateLine?: string;  // for fillBlank: "I'm chasing dreams but my ____"

  // Hard constraints
  maxWords?: number;
  bannedWords?: string[];
  mustIncludeWords?: string[];

  // Search params
  maxCandidates?: number;
  beamWidth?: number;

  // Scoring weights
  weights?: { meterFit?: number; stressFit?: number; rhymeFit?: number; lexical?: number; };
};
```

## Key Design Principles

### 1. Pure & Deterministic Engine
- No HTTP clients, DB access, or env vars in prosody-engine
- Same inputs → same outputs (no randomness unless explicit)
- Fully unit-testable with small toy lexicons

### 2. Soft Scoring, Not Hard Failures
- Always return candidates, even if imperfect
- Use penalty scores rather than filtering
- Let user see "best available" options

### 3. Incremental vs Full-Line Scoring
- **Incremental** (during beam search): fast heuristic to prune bad branches
- **Full-line** (after generation): authoritative scoring on complete candidates

### 4. Clean Interface for Future Rewrite
- TypeScript for fast iteration now
- Interface designed so Rust/Go rewrite is a drop-in replacement
- Preprocess lexicon offline into compact format

## Generation Algorithm (Beam Search)

```
1. Initialize beam with empty state
2. For each step (up to maxWords):
   a. For each state in beam:
      - If complete (meets syllable target), keep as candidate
      - Otherwise, expand by adding candidate next words
   b. For each expansion:
      - Skip if syllables exceed max
      - Compute partial penalty (meter + stress + rhyme + lexical)
   c. Sort by penalty, keep top beamWidth states
   d. Collect completed states into results pool
3. Re-score completed candidates with full-line analysis
4. Sort by total score, return top maxCandidates
```

## Embeddings Strategy

### Precompute
- Per-word embeddings for entire lexicon (~100k words)
- Store as Float32Array indexed by wordId
- ~200MB for 100k words x 512 dims

### Runtime
- User context embedding (verse/description) - online via API or local model
- Candidate line embedding = avg/weighted pool of word embeddings
- Semantic similarity = cosine(contextEmbedding, lineEmbedding)

### Phased Approach
1. **Phase 1**: Hosted API (OpenAI) for precomputation + user context
2. **Phase 2**: Self-host embedding model (SentenceTransformers, GTE, E5)

## Tech Stack

### Phase 1 (Current)
- **Language**: TypeScript
- **Package Manager**: npm
- **Structure**: Start with prosody-engine package only
- **Testing**: Vitest
- **Future UI**: Next.js on Vercel (Node runtime, not Edge)

### Phase 2 (When Needed)
- Extract engine to dedicated Bun/Hono service on Fly.io
- Or rewrite hot paths in Rust/Go behind same API

## Project Structure (Target)

```
/packages
  /prosody-engine
    /src
      lexicon.ts         # LexWord type, LEXICON array, lookup helpers
      analyzeLine.ts     # text → LineProsody
      analyzeVerse.ts    # multi-line analysis, meter/rhyme inference
      constraints.ts     # ProsodyConstraints type, builders
      generator.ts       # generateCandidates beam search
      scorer.ts          # penalty functions, scoring logic
      semanticScorer.ts  # embedding-based scoring (separate module)
      index.ts           # public API exports
    /data
      lexicon-data.ts    # precomputed CMU-derived lexicon
      embeddings.bin     # precomputed word embeddings (later)
    /tests
      lexicon.test.ts
      analyzeLine.test.ts
      generator.test.ts
    package.json
    tsconfig.json
    vitest.config.ts

/apps
  /web                   # Next.js app (Phase 2)
```

## CMU Pronouncing Dictionary

Source data format (ARPABET phonemes with stress markers):
```
time  T AY1 M
light L AY1 T
running R AH1 N IH0 NG
```

Stress markers:
- `0` = no stress
- `1` = primary stress
- `2` = secondary stress

Rhyme key = last stressed vowel + following consonants (e.g., "time" → "AY1 M")

## Use Cases / Modes

### 1. "Write the next line"
- Input: 2-8 lines of verse
- Infer meter and rhyme scheme from existing lines
- Generate full next line matching pattern

### 2. "Fill in the blank"
- Input: "I'm chasing dreams but my ____"
- Analyze prefix (and suffix if present)
- Generate middle segment to hit target meter

### 3. "Fix my meter"
- Input: Line that feels "off"
- Keep key content words
- Generate alternatives that fit target meter

## Testing Strategy

- Unit tests with tiny toy lexicons (10-20 words)
- Golden tests: fixed inputs → exact expected outputs
- Property tests: "all candidates have correct syllable count"
- Integration tests with real CMU subset once core is stable

## Resources

- CMU Pronouncing Dictionary: http://www.speech.cs.cmu.edu/cgi-bin/cmudict
- ARPABET phoneme reference: https://en.wikipedia.org/wiki/ARPABET
