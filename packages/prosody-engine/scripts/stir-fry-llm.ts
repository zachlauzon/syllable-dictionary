/**
 * Generate a Stir Fry style verse using LLM + Prosody Engine
 *
 * This demonstrates the hybrid approach:
 * 1. LLM generates semantically coherent lines
 * 2. Prosody engine scores/filters for meter and rhyme
 * 3. Best candidates are selected
 */

import { analyzeVerse, analyzeLine } from "../src/analyzer.js";
import {
  createMockLLMProvider,
  createOpenAIProvider,
  generateWithLLM,
  generateVerse,
  type LLMProvider,
} from "../src/llmCompletion.js";
import { getRhymeKeyForWord, getWordsByRhymeKey } from "../src/lexicon.js";

console.log("=".repeat(60));
console.log("🔥 STIR FRY VERSE - LLM + PROSODY ENGINE");
console.log("=".repeat(60));

// Check for OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;
let provider: LLMProvider;

if (apiKey) {
  console.log("\n✅ Using OpenAI API (GPT-4o-mini)\n");
  provider = createOpenAIProvider({ apiKey, model: "gpt-4o-mini" });
} else {
  console.log("\n⚠️  No OPENAI_API_KEY found, using mock provider\n");
  console.log("   Set OPENAI_API_KEY env var for real LLM generation\n");
  provider = createMockLLMProvider();
}

async function main() {
  // ============================================================
  // DEMO 1: Generate single lines with constraints
  // ============================================================

  console.log("=".repeat(60));
  console.log("📝 DEMO 1: Single Line Generation");
  console.log("=".repeat(60));

  console.log('\nGenerating 5-syllable lines that rhyme with "night"...\n');

  const nightLines = await generateWithLLM(provider, {
    context: ["cooking up the dope"],
    targetSyllables: 5,
    rhymeWith: "night",
    style: "hip-hop, confident, Migos style",
    numCandidates: 5,
  });

  for (const line of nightLines) {
    const syllableOk = line.scores.syllableMatch >= 0.8 ? "✅" : "❌";
    const rhymeOk = line.scores.rhymeMatch >= 1.0 ? "✅" : "❌";
    console.log(
      `${syllableOk}${rhymeOk} "${line.text}" ` +
        `[${line.prosody.syllableCount} syl, rhyme: ${line.prosody.endingRhymeKey}] ` +
        `(score: ${line.scores.total.toFixed(2)})`
    );
  }

  // ============================================================
  // DEMO 2: Generate lines with different rhyme endings
  // ============================================================

  console.log("\n" + "=".repeat(60));
  console.log("📝 DEMO 2: Different Rhyme Groups");
  console.log("=".repeat(60));

  const rhymeWords = ["time", "flow", "way", "fire"];

  for (const rhymeWord of rhymeWords) {
    const rhymeKey = getRhymeKeyForWord(rhymeWord);
    const rhymingWords = rhymeKey
      ? getWordsByRhymeKey(rhymeKey)
          .slice(0, 5)
          .map((w) => w.text)
          .join(", ")
      : "?";

    console.log(`\n🎵 Rhyme with "${rhymeWord}" (${rhymeKey}): ${rhymingWords}`);

    const lines = await generateWithLLM(provider, {
      context: [],
      targetSyllables: 5,
      rhymeWith: rhymeWord,
      style: "trap, braggadocious",
      numCandidates: 3,
    });

    for (const line of lines) {
      console.log(`   "${line.text}" [${line.prosody.syllableCount} syl]`);
    }
  }

  // ============================================================
  // DEMO 3: Generate full verse with AABB scheme
  // ============================================================

  console.log("\n" + "=".repeat(60));
  console.log("🎤 DEMO 3: Full Verse Generation (AABB)");
  console.log("=".repeat(60));

  console.log("\nGenerating 8-line verse with AABB rhyme scheme...\n");

  const verse = await generateVerse(provider, {
    numLines: 8,
    targetSyllables: 5,
    rhymeScheme: "AABBCCDD",
    style: "Migos Stir Fry style, trap, flexing, cooking metaphors",
    seedLines: [], // Could seed with actual Stir Fry lyrics
  });

  console.log("Generated verse:\n");
  verse.forEach((line, i) => {
    const scheme = "AABBCCDD"[i % 8];
    console.log(
      `  ${scheme}: "${line.text.padEnd(25)}" ` +
        `[${line.prosody.syllableCount} syl, ${line.prosody.endingRhymeKey}]`
    );
  });

  // Analyze the full verse
  const verseText = verse.map((l) => l.text).join("\n");
  const analysis = analyzeVerse(verseText);

  console.log("\n📊 Verse Analysis:");
  console.log(`   Detected rhyme scheme: ${analysis.inferredRhymeScheme?.scheme}`);
  console.log(`   Target syllables: ${analysis.inferredMeter?.targetSyllables}`);

  // ============================================================
  // DEMO 4: Complete a real Stir Fry line
  // ============================================================

  console.log("\n" + "=".repeat(60));
  console.log("🍳 DEMO 4: Complete Actual Stir Fry Lines");
  console.log("=".repeat(60));

  // Real Stir Fry opening
  const stirFryContext = [
    "stir fry", // 2 syl
    "came from nothin to somethin", // 7 syl
  ];

  console.log("\nContext (actual Stir Fry):");
  stirFryContext.forEach((l) => {
    const p = analyzeLine(l);
    console.log(`   "${l}" [${p.syllableCount} syl]`);
  });

  console.log('\nGenerating next line (rhyme with "something")...\n');

  // Note: "something" ends with -ing sound (IH NG)
  const nextLines = await generateWithLLM(provider, {
    context: stirFryContext,
    targetSyllables: 6,
    rhymeWith: "running", // similar ending
    style: "Migos, braggadocious, cooking/trap metaphors",
    numCandidates: 5,
  });

  for (const line of nextLines) {
    console.log(
      `   "${line.text}" [${line.prosody.syllableCount} syl] ` +
        `(score: ${line.scores.total.toFixed(2)})`
    );
  }

  // ============================================================
  // Summary
  // ============================================================

  console.log("\n" + "=".repeat(60));
  console.log("💡 HOW IT WORKS");
  console.log("=".repeat(60));

  console.log(`
The LLM + Prosody Engine hybrid approach:

1. BUILD PROMPT
   - Include context (previous lines)
   - Specify exact syllable count
   - List words that rhyme with target
   - Add style hints

2. LLM GENERATES
   - Multiple candidate lines
   - Semantically coherent
   - Follows style hints

3. PROSODY ENGINE SCORES
   - Syllable count match (via CMU dict)
   - Rhyme key match
   - Confidence (% words recognized)
   - Combined weighted score

4. SELECT BEST
   - Sort by prosody score
   - Return top candidates
   - Perfect prosody + coherent meaning!

This gives us the best of both worlds:
- LLM provides MEANING and STYLE
- Engine provides METER and RHYME verification
`);
}

main().catch(console.error);
