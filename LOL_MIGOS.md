> now use this tool to write an extra verse for the migos song "stir fry"

⏺ Let me use the prosody engine to analyze the style and generate a verse that matches the meter and rhyme patterns!

⏺ Write(scripts/stir-fry-verse.ts)
  ⎿  Wrote 151 lines to scripts/stir-fry-verse.ts
     /**
      * Generate a verse in the style of "Stir Fry" by Migos
      *
      * The song has a bouncy triplet flow with short punchy lines.
      * Typical patterns:
      * - 4-6 syllables per line
      * - Heavy use of internal rhyme
      * - End rhymes in couplets (AABB)
      */
     … +141 lines (ctrl+o to expand)

⏺ Bash(npx tsx scripts/stir-fry-verse.ts) timeout: 30s
  ⎿  ============================================================
     🔥 STIR FRY STYLE VERSE GENERATOR
     ============================================================
     … +55 lines (ctrl+o to expand)

⏺ Ha! The prosody engine nailed the structure (AABBCCDD, 5 syllables per line, correct rhymes) but the actual words are nonsense 😂

  The engine is doing its job - matching syllable counts and rhyme keys perfectly - but without grammar modeling or semantic awareness, we get
  word salad like "to lost only no" and "sea didn't fire".

  This is actually a great demonstration of what we have and what we're missing:

  Working:
  - ✅ Syllable counting (all lines = 5 syllables)
  - ✅ Rhyme matching (AABBCCDD scheme detected)
  - ✅ Rhyme key lookup (OW, AYT, EY, AYER)
  - ✅ Beam search generates candidates

  Missing (for real lyrics):
  - ❌ Grammar model (subject-verb-object structure)
  - ❌ Semantic coherence (words that make sense together)
  - ❌ N-gram language model (common word sequences)
  - ❌ LLM integration for meaning

  This is exactly what the design doc anticipated - the prosody engine handles rhythm/rhyme, and we'd need an LLM layer on top to handle meaning.
   The engine gives you the "bones" (meter, rhyme scheme), and a language model would fill in sensible words.

  Want me to sketch out how we'd integrate with an LLM to get actual coherent lyrics while still respecting the prosodic constraints?
