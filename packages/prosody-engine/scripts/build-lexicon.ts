/**
 * Build a lexicon from CMU Pronouncing Dictionary
 *
 * This script generates a lexicon file with real pronunciation data.
 */

// @ts-expect-error - no types for this package
import * as cmuDict from "cmu-pronouncing-dictionary";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Common words we want in our lexicon (high frequency in songwriting)
const PRIORITY_WORDS = new Set([
  // Pronouns
  "i", "you", "we", "me", "my", "your", "our", "us", "they", "them", "their",
  "he", "she", "it", "his", "her", "its",
  // Verbs
  "love", "know", "feel", "see", "hear", "think", "want", "need", "take", "make",
  "give", "find", "keep", "run", "walk", "fall", "rise", "fly", "dream", "sleep",
  "wake", "break", "hold", "let", "leave", "stay", "go", "come", "try", "cry",
  "die", "live", "burn", "shine", "glow", "grow", "show", "flow", "blow",
  "chase", "race", "face", "place", "embrace", "dance", "sing", "bring", "ring",
  "swing", "cling", "sting", "fight", "write", "bite", "light", "ignite",
  "start", "stop", "drop", "hop", "pop", "rock", "knock", "lock", "block",
  "talk", "walk", "stalk", "call", "fall", "crawl", "brawl",
  "speak", "seek", "leak", "peek", "sneak", "freak", "break",
  "play", "say", "way", "day", "stay", "pray", "sway", "lay", "pay",
  "wait", "hate", "late", "fate", "gate", "create", "debate",
  // Nouns
  "heart", "soul", "mind", "time", "life", "death", "love", "hate", "pain",
  "rain", "sun", "moon", "star", "sky", "sea", "fire", "water", "earth", "air",
  "night", "day", "light", "dark", "dream", "hope", "fear", "tear", "year",
  "hand", "eye", "face", "name", "game", "flame", "shame", "blame", "fame",
  "world", "girl", "boy", "man", "woman", "child", "friend", "end", "bend",
  "road", "home", "bone", "stone", "phone", "tone", "zone", "alone",
  "street", "beat", "heat", "seat", "feet", "sweet", "meet", "treat",
  "head", "bed", "red", "dead", "said", "bread", "spread", "thread", "dread",
  "door", "floor", "more", "before", "shore", "store", "war", "far", "car", "star", "bar",
  "blood", "flood", "mud", "love", "above", "shove", "dove",
  "king", "thing", "ring", "sing", "bring", "wing", "spring", "string",
  "wall", "hall", "ball", "tall", "small", "call", "fall", "all",
  "room", "boom", "doom", "bloom", "gloom", "tomb", "womb",
  "town", "down", "crown", "brown", "drown", "frown", "gown",
  "sound", "ground", "round", "found", "bound", "wound", "pound",
  // Adjectives
  "good", "bad", "old", "new", "young", "true", "blue", "cold", "hot", "lost",
  "found", "free", "wild", "blind", "kind", "fine", "mine",
  "high", "low", "deep", "wide", "long", "strong", "wrong", "right",
  "hard", "soft", "dark", "bright", "light", "tight", "slight",
  "fast", "slow", "real", "fake", "sick", "thick", "quick", "slick",
  "big", "small", "great", "late", "straight", "strange",
  "alone", "unknown", "broken", "frozen", "chosen", "golden",
  // Adverbs/Prepositions
  "in", "on", "out", "up", "down", "through", "with", "without", "within",
  "away", "today", "tonight", "forever", "never", "always", "maybe",
  "here", "there", "where", "somewhere", "nowhere", "everywhere",
  "now", "how", "when", "then", "again", "begin",
  // Function words
  "the", "a", "an", "and", "but", "or", "if", "so", "as", "for", "to", "of",
  "is", "are", "was", "were", "be", "been", "being",
  "can", "could", "would", "should", "will", "might", "must",
  "do", "does", "did", "done", "have", "has", "had",
  "this", "that", "these", "those", "what", "which", "who",
  "no", "not", "yes", "just", "only", "even", "still", "yet",
  // Contractions
  "i'm", "i'll", "i've", "i'd", "you're", "you'll", "you've", "you'd",
  "we're", "we'll", "we've", "we'd", "they're", "they'll", "they've", "they'd",
  "he's", "she's", "it's", "that's", "what's", "there's", "here's",
  "can't", "won't", "don't", "didn't", "couldn't", "wouldn't", "shouldn't",
  "isn't", "aren't", "wasn't", "weren't", "haven't", "hasn't", "hadn't",
  "ain't", "gonna", "wanna", "gotta",
  // Multi-syllable words
  "running", "falling", "calling", "crawling", "dreaming", "screaming",
  "feeling", "healing", "stealing", "dealing", "breathing", "leaving",
  "believing", "receiving", "deceiving", "achieving",
  "forever", "together", "whatever", "whenever", "however", "wherever",
  "remember", "surrender", "defender", "pretender",
  "beautiful", "wonderful", "powerful", "meaningful",
  "understand", "overcome", "overwhelm", "undertake",
  "beginning", "ending", "pretending", "descending", "ascending",
  "tomorrow", "yesterday", "anyway", "someday", "everyday",
  "inside", "outside", "beside", "divide", "collide", "decide", "provide",
  "afraid", "awake", "alive", "alone", "asleep",
]);

// Additional common words to round out the lexicon
const COMMON_WORDS = [
  "about", "after", "back", "because", "before", "between", "both", "each",
  "every", "first", "from", "get", "got", "into", "know", "last", "like",
  "little", "look", "made", "many", "most", "much", "over", "own", "part",
  "people", "place", "same", "seem", "side", "some", "such", "tell", "than",
  "them", "these", "think", "thought", "three", "turn", "under", "until",
  "very", "want", "while", "why", "work", "world", "would", "year", "years",
  "other", "another", "mother", "father", "brother", "sister", "daughter",
  "money", "honey", "funny", "sunny", "baby", "maybe", "crazy", "lazy",
  "city", "pretty", "dirty", "party", "body", "ready", "heavy", "empty",
  "happy", "angry", "hungry", "lonely", "only",
  "shadow", "window", "follow", "hollow", "sorrow", "tomorrow", "borrow",
  "river", "silver", "winter", "summer", "thunder", "wonder", "under",
  "moment", "silent", "violent", "patient", "ancient",
  "reason", "season", "prison", "poison", "person",
  "heaven", "seven", "eleven", "even", "given", "driven", "forgiven",
  "answer", "cancer", "dancer", "master", "faster", "after", "laughter",
  "danger", "stranger", "anger", "finger", "singer", "longer", "stronger",
  "closer", "over", "soldier", "shoulder", "older", "colder", "bolder",
];

type Stress = 0 | 1 | 2;

interface LexWord {
  id: number;
  text: string;
  phonemes: string[];
  stressPattern: Stress[];
  syllableCount: number;
  rhymeKey: string | null;
  freqScore: number;
}

/**
 * Extract stress pattern from phonemes
 * Vowels with 0/1/2 suffix indicate syllables and stress
 */
function extractStressPattern(phonemes: string[]): Stress[] {
  const pattern: Stress[] = [];
  for (const p of phonemes) {
    const match = p.match(/[012]$/);
    if (match) {
      pattern.push(parseInt(match[0], 10) as Stress);
    }
  }
  return pattern;
}

/**
 * Compute rhyme key from phonemes
 * Rhyme key = last stressed vowel + everything after
 */
function computeRhymeKey(phonemes: string[]): string | null {
  // Find the last stressed vowel (with 1 or 2)
  let lastStressedIdx = -1;
  for (let i = phonemes.length - 1; i >= 0; i--) {
    const p = phonemes[i];
    if (p && /[12]$/.test(p)) {
      lastStressedIdx = i;
      break;
    }
  }

  // If no stressed vowel, try the last vowel
  if (lastStressedIdx === -1) {
    for (let i = phonemes.length - 1; i >= 0; i--) {
      const p = phonemes[i];
      if (p && /[012]$/.test(p)) {
        lastStressedIdx = i;
        break;
      }
    }
  }

  if (lastStressedIdx === -1) return null;

  // Build rhyme key from last stressed vowel to end
  // Strip the stress number from vowels for the key
  const rhymeParts = phonemes.slice(lastStressedIdx).map((p) =>
    p.replace(/[012]$/, "")
  );

  return rhymeParts.join("");
}

/**
 * Compute frequency score (simple heuristic based on word properties)
 */
function computeFreqScore(word: string, isPriority: boolean): number {
  let score = 5; // base score

  if (isPriority) score += 3;
  if (word.length <= 4) score += 1;
  if (word.length <= 2) score += 1;

  // Cap at 10
  return Math.min(10, score);
}

// Build the lexicon
const dictionary = cmuDict.dictionary;
const lexicon: LexWord[] = [];
const seenWords = new Set<string>();

let id = 0;

// First pass: priority words
for (const word of PRIORITY_WORDS) {
  const pronunciation = dictionary[word.toLowerCase()];
  if (!pronunciation || seenWords.has(word)) continue;

  const phonemes = pronunciation.split(" ");
  const stressPattern = extractStressPattern(phonemes);

  if (stressPattern.length === 0) continue; // Skip words with no vowels

  seenWords.add(word);
  lexicon.push({
    id: id++,
    text: word,
    phonemes,
    stressPattern,
    syllableCount: stressPattern.length,
    rhymeKey: computeRhymeKey(phonemes),
    freqScore: computeFreqScore(word, true),
  });
}

// Second pass: common words
for (const word of COMMON_WORDS) {
  if (seenWords.has(word)) continue;
  const pronunciation = dictionary[word.toLowerCase()];
  if (!pronunciation) continue;

  const phonemes = pronunciation.split(" ");
  const stressPattern = extractStressPattern(phonemes);

  if (stressPattern.length === 0) continue;

  seenWords.add(word);
  lexicon.push({
    id: id++,
    text: word,
    phonemes,
    stressPattern,
    syllableCount: stressPattern.length,
    rhymeKey: computeRhymeKey(phonemes),
    freqScore: computeFreqScore(word, false),
  });
}

// Third pass: fill to ~1000 words with random CMU entries
const allWords = Object.keys(dictionary);
const targetSize = 1000;

// Shuffle and pick
for (const word of allWords.sort(() => Math.random() - 0.5)) {
  if (lexicon.length >= targetSize) break;
  if (seenWords.has(word)) continue;

  // Skip words with special characters, numbers, or parentheses
  if (/[^a-z']/.test(word)) continue;
  // Skip very long words
  if (word.length > 12) continue;

  const pronunciation = dictionary[word];
  if (!pronunciation) continue;

  const phonemes = pronunciation.split(" ");
  const stressPattern = extractStressPattern(phonemes);

  if (stressPattern.length === 0 || stressPattern.length > 5) continue;

  seenWords.add(word);
  lexicon.push({
    id: id++,
    text: word,
    phonemes,
    stressPattern,
    syllableCount: stressPattern.length,
    rhymeKey: computeRhymeKey(phonemes),
    freqScore: computeFreqScore(word, false),
  });
}

// Generate the TypeScript file
const output = `/**
 * Lexicon module - word-level prosody data
 *
 * Generated from CMU Pronouncing Dictionary
 * Total words: ${lexicon.length}
 */

export type Stress = 0 | 1 | 2;

export type LexWord = {
  id: number;
  text: string;
  phonemes: string[];
  stressPattern: Stress[];
  syllableCount: number;
  rhymeKey: string | null;
  freqScore: number;
};

export const LEXICON: LexWord[] = ${JSON.stringify(lexicon, null, 2)};

// Build lookup maps
const byText = new Map<string, LexWord>();
const byId = new Map<number, LexWord>();
const byRhymeKey = new Map<string, LexWord[]>();
const bySyllableCount = new Map<number, LexWord[]>();

for (const w of LEXICON) {
  byText.set(w.text.toLowerCase(), w);
  byId.set(w.id, w);

  if (w.rhymeKey) {
    const existing = byRhymeKey.get(w.rhymeKey) ?? [];
    existing.push(w);
    byRhymeKey.set(w.rhymeKey, existing);
  }

  const existingBySyl = bySyllableCount.get(w.syllableCount) ?? [];
  existingBySyl.push(w);
  bySyllableCount.set(w.syllableCount, existingBySyl);
}

export function getWordByText(text: string): LexWord | undefined {
  return byText.get(text.toLowerCase());
}

export function getWordById(id: number): LexWord | undefined {
  return byId.get(id);
}

export function getWordsByRhymeKey(rhymeKey: string): LexWord[] {
  return byRhymeKey.get(rhymeKey) ?? [];
}

export function getWordsBySyllableCount(count: number): LexWord[] {
  return bySyllableCount.get(count) ?? [];
}

export function getRhymeKeyForWord(text: string): string | null {
  return getWordByText(text)?.rhymeKey ?? null;
}

export function getAllWords(): LexWord[] {
  return LEXICON;
}
`;

const outPath = join(__dirname, "../src/lexicon.ts");
writeFileSync(outPath, output);

console.log(`✅ Generated lexicon with ${lexicon.length} words`);
console.log(`   Output: ${outPath}`);

// Print some stats
const syllableCounts = new Map<number, number>();
for (const w of lexicon) {
  syllableCounts.set(w.syllableCount, (syllableCounts.get(w.syllableCount) ?? 0) + 1);
}
console.log("\n📊 Syllable distribution:");
for (const [count, num] of [...syllableCounts.entries()].sort((a, b) => a[0] - b[0])) {
  console.log(`   ${count} syllable(s): ${num} words`);
}

const rhymeGroups = new Map<string, number>();
for (const w of lexicon) {
  if (w.rhymeKey) {
    rhymeGroups.set(w.rhymeKey, (rhymeGroups.get(w.rhymeKey) ?? 0) + 1);
  }
}
const topRhymes = [...rhymeGroups.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);
console.log("\n🎵 Top rhyme groups:");
for (const [key, count] of topRhymes) {
  console.log(`   ${key}: ${count} words`);
}
