/**
 * Lexicon module - word-level prosody data
 *
 * Generated from CMU Pronouncing Dictionary
 * Total words: 1000
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

export const LEXICON: LexWord[] = [
  {
    "id": 0,
    "text": "i",
    "phonemes": [
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 10
  },
  {
    "id": 1,
    "text": "you",
    "phonemes": [
      "Y",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 9
  },
  {
    "id": 2,
    "text": "we",
    "phonemes": [
      "W",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 10
  },
  {
    "id": 3,
    "text": "me",
    "phonemes": [
      "M",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 10
  },
  {
    "id": 4,
    "text": "my",
    "phonemes": [
      "M",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 10
  },
  {
    "id": 5,
    "text": "your",
    "phonemes": [
      "Y",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 9
  },
  {
    "id": 6,
    "text": "our",
    "phonemes": [
      "AW1",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AWER",
    "freqScore": 9
  },
  {
    "id": 7,
    "text": "us",
    "phonemes": [
      "AH1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHS",
    "freqScore": 10
  },
  {
    "id": 8,
    "text": "they",
    "phonemes": [
      "DH",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 9,
    "text": "them",
    "phonemes": [
      "DH",
      "EH1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHM",
    "freqScore": 9
  },
  {
    "id": 10,
    "text": "their",
    "phonemes": [
      "DH",
      "EH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 11,
    "text": "he",
    "phonemes": [
      "HH",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 10
  },
  {
    "id": 12,
    "text": "she",
    "phonemes": [
      "SH",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 9
  },
  {
    "id": 13,
    "text": "it",
    "phonemes": [
      "IH1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHT",
    "freqScore": 10
  },
  {
    "id": 14,
    "text": "his",
    "phonemes": [
      "HH",
      "IH1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHZ",
    "freqScore": 9
  },
  {
    "id": 15,
    "text": "her",
    "phonemes": [
      "HH",
      "ER1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ER",
    "freqScore": 9
  },
  {
    "id": 16,
    "text": "its",
    "phonemes": [
      "IH1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHTS",
    "freqScore": 9
  },
  {
    "id": 17,
    "text": "love",
    "phonemes": [
      "L",
      "AH1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHV",
    "freqScore": 9
  },
  {
    "id": 18,
    "text": "know",
    "phonemes": [
      "N",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 19,
    "text": "feel",
    "phonemes": [
      "F",
      "IY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYL",
    "freqScore": 9
  },
  {
    "id": 20,
    "text": "see",
    "phonemes": [
      "S",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 9
  },
  {
    "id": 21,
    "text": "hear",
    "phonemes": [
      "HH",
      "IY1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYR",
    "freqScore": 9
  },
  {
    "id": 22,
    "text": "think",
    "phonemes": [
      "TH",
      "IH1",
      "NG",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNGK",
    "freqScore": 8
  },
  {
    "id": 23,
    "text": "want",
    "phonemes": [
      "W",
      "AA1",
      "N",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AANT",
    "freqScore": 9
  },
  {
    "id": 24,
    "text": "need",
    "phonemes": [
      "N",
      "IY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYD",
    "freqScore": 9
  },
  {
    "id": 25,
    "text": "take",
    "phonemes": [
      "T",
      "EY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYK",
    "freqScore": 9
  },
  {
    "id": 26,
    "text": "make",
    "phonemes": [
      "M",
      "EY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYK",
    "freqScore": 9
  },
  {
    "id": 27,
    "text": "give",
    "phonemes": [
      "G",
      "IH1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHV",
    "freqScore": 9
  },
  {
    "id": 28,
    "text": "find",
    "phonemes": [
      "F",
      "AY1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYND",
    "freqScore": 9
  },
  {
    "id": 29,
    "text": "keep",
    "phonemes": [
      "K",
      "IY1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYP",
    "freqScore": 9
  },
  {
    "id": 30,
    "text": "run",
    "phonemes": [
      "R",
      "AH1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHN",
    "freqScore": 9
  },
  {
    "id": 31,
    "text": "walk",
    "phonemes": [
      "W",
      "AO1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOK",
    "freqScore": 9
  },
  {
    "id": 32,
    "text": "fall",
    "phonemes": [
      "F",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 33,
    "text": "rise",
    "phonemes": [
      "R",
      "AY1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYZ",
    "freqScore": 9
  },
  {
    "id": 34,
    "text": "fly",
    "phonemes": [
      "F",
      "L",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 35,
    "text": "dream",
    "phonemes": [
      "D",
      "R",
      "IY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYM",
    "freqScore": 8
  },
  {
    "id": 36,
    "text": "sleep",
    "phonemes": [
      "S",
      "L",
      "IY1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYP",
    "freqScore": 8
  },
  {
    "id": 37,
    "text": "wake",
    "phonemes": [
      "W",
      "EY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYK",
    "freqScore": 9
  },
  {
    "id": 38,
    "text": "break",
    "phonemes": [
      "B",
      "R",
      "EY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYK",
    "freqScore": 8
  },
  {
    "id": 39,
    "text": "hold",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWLD",
    "freqScore": 9
  },
  {
    "id": 40,
    "text": "let",
    "phonemes": [
      "L",
      "EH1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHT",
    "freqScore": 9
  },
  {
    "id": 41,
    "text": "leave",
    "phonemes": [
      "L",
      "IY1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYV",
    "freqScore": 8
  },
  {
    "id": 42,
    "text": "stay",
    "phonemes": [
      "S",
      "T",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 43,
    "text": "go",
    "phonemes": [
      "G",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 10
  },
  {
    "id": 44,
    "text": "come",
    "phonemes": [
      "K",
      "AH1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHM",
    "freqScore": 9
  },
  {
    "id": 45,
    "text": "try",
    "phonemes": [
      "T",
      "R",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 46,
    "text": "cry",
    "phonemes": [
      "K",
      "R",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 47,
    "text": "die",
    "phonemes": [
      "D",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 48,
    "text": "live",
    "phonemes": [
      "L",
      "AY1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYV",
    "freqScore": 9
  },
  {
    "id": 49,
    "text": "burn",
    "phonemes": [
      "B",
      "ER1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERN",
    "freqScore": 9
  },
  {
    "id": 50,
    "text": "shine",
    "phonemes": [
      "SH",
      "AY1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYN",
    "freqScore": 8
  },
  {
    "id": 51,
    "text": "glow",
    "phonemes": [
      "G",
      "L",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 52,
    "text": "grow",
    "phonemes": [
      "G",
      "R",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 53,
    "text": "show",
    "phonemes": [
      "SH",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 54,
    "text": "flow",
    "phonemes": [
      "F",
      "L",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 55,
    "text": "blow",
    "phonemes": [
      "B",
      "L",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 56,
    "text": "chase",
    "phonemes": [
      "CH",
      "EY1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYS",
    "freqScore": 8
  },
  {
    "id": 57,
    "text": "race",
    "phonemes": [
      "R",
      "EY1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYS",
    "freqScore": 9
  },
  {
    "id": 58,
    "text": "face",
    "phonemes": [
      "F",
      "EY1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYS",
    "freqScore": 9
  },
  {
    "id": 59,
    "text": "place",
    "phonemes": [
      "P",
      "L",
      "EY1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYS",
    "freqScore": 8
  },
  {
    "id": 60,
    "text": "embrace",
    "phonemes": [
      "EH0",
      "M",
      "B",
      "R",
      "EY1",
      "S"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EYS",
    "freqScore": 8
  },
  {
    "id": 61,
    "text": "dance",
    "phonemes": [
      "D",
      "AE1",
      "N",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AENS",
    "freqScore": 8
  },
  {
    "id": 62,
    "text": "sing",
    "phonemes": [
      "S",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 9
  },
  {
    "id": 63,
    "text": "bring",
    "phonemes": [
      "B",
      "R",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 64,
    "text": "ring",
    "phonemes": [
      "R",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 9
  },
  {
    "id": 65,
    "text": "swing",
    "phonemes": [
      "S",
      "W",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 66,
    "text": "cling",
    "phonemes": [
      "K",
      "L",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 67,
    "text": "sting",
    "phonemes": [
      "S",
      "T",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 68,
    "text": "fight",
    "phonemes": [
      "F",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 69,
    "text": "write",
    "phonemes": [
      "R",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 70,
    "text": "bite",
    "phonemes": [
      "B",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 9
  },
  {
    "id": 71,
    "text": "light",
    "phonemes": [
      "L",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 72,
    "text": "ignite",
    "phonemes": [
      "IH2",
      "G",
      "N",
      "AY1",
      "T"
    ],
    "stressPattern": [
      2,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 73,
    "text": "start",
    "phonemes": [
      "S",
      "T",
      "AA1",
      "R",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AART",
    "freqScore": 8
  },
  {
    "id": 74,
    "text": "stop",
    "phonemes": [
      "S",
      "T",
      "AA1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAP",
    "freqScore": 9
  },
  {
    "id": 75,
    "text": "drop",
    "phonemes": [
      "D",
      "R",
      "AA1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAP",
    "freqScore": 9
  },
  {
    "id": 76,
    "text": "hop",
    "phonemes": [
      "HH",
      "AA1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAP",
    "freqScore": 9
  },
  {
    "id": 77,
    "text": "pop",
    "phonemes": [
      "P",
      "AA1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAP",
    "freqScore": 9
  },
  {
    "id": 78,
    "text": "rock",
    "phonemes": [
      "R",
      "AA1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAK",
    "freqScore": 9
  },
  {
    "id": 79,
    "text": "knock",
    "phonemes": [
      "N",
      "AA1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAK",
    "freqScore": 8
  },
  {
    "id": 80,
    "text": "lock",
    "phonemes": [
      "L",
      "AA1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAK",
    "freqScore": 9
  },
  {
    "id": 81,
    "text": "block",
    "phonemes": [
      "B",
      "L",
      "AA1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAK",
    "freqScore": 8
  },
  {
    "id": 82,
    "text": "talk",
    "phonemes": [
      "T",
      "AO1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOK",
    "freqScore": 9
  },
  {
    "id": 83,
    "text": "stalk",
    "phonemes": [
      "S",
      "T",
      "AO1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOK",
    "freqScore": 8
  },
  {
    "id": 84,
    "text": "call",
    "phonemes": [
      "K",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 85,
    "text": "crawl",
    "phonemes": [
      "K",
      "R",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 8
  },
  {
    "id": 86,
    "text": "brawl",
    "phonemes": [
      "B",
      "R",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 8
  },
  {
    "id": 87,
    "text": "speak",
    "phonemes": [
      "S",
      "P",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 8
  },
  {
    "id": 88,
    "text": "seek",
    "phonemes": [
      "S",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 9
  },
  {
    "id": 89,
    "text": "leak",
    "phonemes": [
      "L",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 9
  },
  {
    "id": 90,
    "text": "peek",
    "phonemes": [
      "P",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 9
  },
  {
    "id": 91,
    "text": "sneak",
    "phonemes": [
      "S",
      "N",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 8
  },
  {
    "id": 92,
    "text": "freak",
    "phonemes": [
      "F",
      "R",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 8
  },
  {
    "id": 93,
    "text": "play",
    "phonemes": [
      "P",
      "L",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 94,
    "text": "say",
    "phonemes": [
      "S",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 95,
    "text": "way",
    "phonemes": [
      "W",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 96,
    "text": "day",
    "phonemes": [
      "D",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 97,
    "text": "pray",
    "phonemes": [
      "P",
      "R",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 98,
    "text": "sway",
    "phonemes": [
      "S",
      "W",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 99,
    "text": "lay",
    "phonemes": [
      "L",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 100,
    "text": "pay",
    "phonemes": [
      "P",
      "EY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 101,
    "text": "wait",
    "phonemes": [
      "W",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 9
  },
  {
    "id": 102,
    "text": "hate",
    "phonemes": [
      "HH",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 9
  },
  {
    "id": 103,
    "text": "late",
    "phonemes": [
      "L",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 9
  },
  {
    "id": 104,
    "text": "fate",
    "phonemes": [
      "F",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 9
  },
  {
    "id": 105,
    "text": "gate",
    "phonemes": [
      "G",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 9
  },
  {
    "id": 106,
    "text": "create",
    "phonemes": [
      "K",
      "R",
      "IY0",
      "EY1",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EYT",
    "freqScore": 8
  },
  {
    "id": 107,
    "text": "debate",
    "phonemes": [
      "D",
      "AH0",
      "B",
      "EY1",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EYT",
    "freqScore": 8
  },
  {
    "id": 108,
    "text": "heart",
    "phonemes": [
      "HH",
      "AA1",
      "R",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AART",
    "freqScore": 8
  },
  {
    "id": 109,
    "text": "soul",
    "phonemes": [
      "S",
      "OW1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWL",
    "freqScore": 9
  },
  {
    "id": 110,
    "text": "mind",
    "phonemes": [
      "M",
      "AY1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYND",
    "freqScore": 9
  },
  {
    "id": 111,
    "text": "time",
    "phonemes": [
      "T",
      "AY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYM",
    "freqScore": 9
  },
  {
    "id": 112,
    "text": "life",
    "phonemes": [
      "L",
      "AY1",
      "F"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYF",
    "freqScore": 9
  },
  {
    "id": 113,
    "text": "death",
    "phonemes": [
      "D",
      "EH1",
      "TH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHTH",
    "freqScore": 8
  },
  {
    "id": 114,
    "text": "pain",
    "phonemes": [
      "P",
      "EY1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYN",
    "freqScore": 9
  },
  {
    "id": 115,
    "text": "rain",
    "phonemes": [
      "R",
      "EY1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYN",
    "freqScore": 9
  },
  {
    "id": 116,
    "text": "sun",
    "phonemes": [
      "S",
      "AH1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHN",
    "freqScore": 9
  },
  {
    "id": 117,
    "text": "moon",
    "phonemes": [
      "M",
      "UW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWN",
    "freqScore": 9
  },
  {
    "id": 118,
    "text": "star",
    "phonemes": [
      "S",
      "T",
      "AA1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAR",
    "freqScore": 9
  },
  {
    "id": 119,
    "text": "sky",
    "phonemes": [
      "S",
      "K",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 120,
    "text": "sea",
    "phonemes": [
      "S",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 9
  },
  {
    "id": 121,
    "text": "fire",
    "phonemes": [
      "F",
      "AY1",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYER",
    "freqScore": 9
  },
  {
    "id": 122,
    "text": "water",
    "phonemes": [
      "W",
      "AO1",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOTER",
    "freqScore": 8
  },
  {
    "id": 123,
    "text": "earth",
    "phonemes": [
      "ER1",
      "TH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERTH",
    "freqScore": 8
  },
  {
    "id": 124,
    "text": "air",
    "phonemes": [
      "EH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHR",
    "freqScore": 9
  },
  {
    "id": 125,
    "text": "night",
    "phonemes": [
      "N",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 126,
    "text": "dark",
    "phonemes": [
      "D",
      "AA1",
      "R",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AARK",
    "freqScore": 9
  },
  {
    "id": 127,
    "text": "hope",
    "phonemes": [
      "HH",
      "OW1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWP",
    "freqScore": 9
  },
  {
    "id": 128,
    "text": "fear",
    "phonemes": [
      "F",
      "IH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHR",
    "freqScore": 9
  },
  {
    "id": 129,
    "text": "tear",
    "phonemes": [
      "T",
      "EH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHR",
    "freqScore": 9
  },
  {
    "id": 130,
    "text": "year",
    "phonemes": [
      "Y",
      "IH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHR",
    "freqScore": 9
  },
  {
    "id": 131,
    "text": "hand",
    "phonemes": [
      "HH",
      "AE1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEND",
    "freqScore": 9
  },
  {
    "id": 132,
    "text": "eye",
    "phonemes": [
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 133,
    "text": "name",
    "phonemes": [
      "N",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 9
  },
  {
    "id": 134,
    "text": "game",
    "phonemes": [
      "G",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 9
  },
  {
    "id": 135,
    "text": "flame",
    "phonemes": [
      "F",
      "L",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 8
  },
  {
    "id": 136,
    "text": "shame",
    "phonemes": [
      "SH",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 8
  },
  {
    "id": 137,
    "text": "blame",
    "phonemes": [
      "B",
      "L",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 8
  },
  {
    "id": 138,
    "text": "fame",
    "phonemes": [
      "F",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 9
  },
  {
    "id": 139,
    "text": "world",
    "phonemes": [
      "W",
      "ER1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERLD",
    "freqScore": 8
  },
  {
    "id": 140,
    "text": "girl",
    "phonemes": [
      "G",
      "ER1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERL",
    "freqScore": 9
  },
  {
    "id": 141,
    "text": "boy",
    "phonemes": [
      "B",
      "OY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OY",
    "freqScore": 9
  },
  {
    "id": 142,
    "text": "man",
    "phonemes": [
      "M",
      "AE1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEN",
    "freqScore": 9
  },
  {
    "id": 143,
    "text": "woman",
    "phonemes": [
      "W",
      "UH1",
      "M",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UHMAHN",
    "freqScore": 8
  },
  {
    "id": 144,
    "text": "child",
    "phonemes": [
      "CH",
      "AY1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYLD",
    "freqScore": 8
  },
  {
    "id": 145,
    "text": "friend",
    "phonemes": [
      "F",
      "R",
      "EH1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHND",
    "freqScore": 8
  },
  {
    "id": 146,
    "text": "end",
    "phonemes": [
      "EH1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHND",
    "freqScore": 9
  },
  {
    "id": 147,
    "text": "bend",
    "phonemes": [
      "B",
      "EH1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHND",
    "freqScore": 9
  },
  {
    "id": 148,
    "text": "road",
    "phonemes": [
      "R",
      "OW1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWD",
    "freqScore": 9
  },
  {
    "id": 149,
    "text": "home",
    "phonemes": [
      "HH",
      "OW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWM",
    "freqScore": 9
  },
  {
    "id": 150,
    "text": "bone",
    "phonemes": [
      "B",
      "OW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWN",
    "freqScore": 9
  },
  {
    "id": 151,
    "text": "stone",
    "phonemes": [
      "S",
      "T",
      "OW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWN",
    "freqScore": 8
  },
  {
    "id": 152,
    "text": "phone",
    "phonemes": [
      "F",
      "OW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWN",
    "freqScore": 8
  },
  {
    "id": 153,
    "text": "tone",
    "phonemes": [
      "T",
      "OW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWN",
    "freqScore": 9
  },
  {
    "id": 154,
    "text": "zone",
    "phonemes": [
      "Z",
      "OW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWN",
    "freqScore": 9
  },
  {
    "id": 155,
    "text": "alone",
    "phonemes": [
      "AH0",
      "L",
      "OW1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "OWN",
    "freqScore": 8
  },
  {
    "id": 156,
    "text": "street",
    "phonemes": [
      "S",
      "T",
      "R",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 8
  },
  {
    "id": 157,
    "text": "beat",
    "phonemes": [
      "B",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 9
  },
  {
    "id": 158,
    "text": "heat",
    "phonemes": [
      "HH",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 9
  },
  {
    "id": 159,
    "text": "seat",
    "phonemes": [
      "S",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 9
  },
  {
    "id": 160,
    "text": "feet",
    "phonemes": [
      "F",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 9
  },
  {
    "id": 161,
    "text": "sweet",
    "phonemes": [
      "S",
      "W",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 8
  },
  {
    "id": 162,
    "text": "meet",
    "phonemes": [
      "M",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 9
  },
  {
    "id": 163,
    "text": "treat",
    "phonemes": [
      "T",
      "R",
      "IY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYT",
    "freqScore": 8
  },
  {
    "id": 164,
    "text": "head",
    "phonemes": [
      "HH",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 9
  },
  {
    "id": 165,
    "text": "bed",
    "phonemes": [
      "B",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 9
  },
  {
    "id": 166,
    "text": "red",
    "phonemes": [
      "R",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 9
  },
  {
    "id": 167,
    "text": "dead",
    "phonemes": [
      "D",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 9
  },
  {
    "id": 168,
    "text": "said",
    "phonemes": [
      "S",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 9
  },
  {
    "id": 169,
    "text": "bread",
    "phonemes": [
      "B",
      "R",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 8
  },
  {
    "id": 170,
    "text": "spread",
    "phonemes": [
      "S",
      "P",
      "R",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 8
  },
  {
    "id": 171,
    "text": "thread",
    "phonemes": [
      "TH",
      "R",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 8
  },
  {
    "id": 172,
    "text": "dread",
    "phonemes": [
      "D",
      "R",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 8
  },
  {
    "id": 173,
    "text": "door",
    "phonemes": [
      "D",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 9
  },
  {
    "id": 174,
    "text": "floor",
    "phonemes": [
      "F",
      "L",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 8
  },
  {
    "id": 175,
    "text": "more",
    "phonemes": [
      "M",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 9
  },
  {
    "id": 176,
    "text": "before",
    "phonemes": [
      "B",
      "IH0",
      "F",
      "AO1",
      "R"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AOR",
    "freqScore": 8
  },
  {
    "id": 177,
    "text": "shore",
    "phonemes": [
      "SH",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 8
  },
  {
    "id": 178,
    "text": "store",
    "phonemes": [
      "S",
      "T",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 8
  },
  {
    "id": 179,
    "text": "war",
    "phonemes": [
      "W",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 9
  },
  {
    "id": 180,
    "text": "far",
    "phonemes": [
      "F",
      "AA1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAR",
    "freqScore": 9
  },
  {
    "id": 181,
    "text": "car",
    "phonemes": [
      "K",
      "AA1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAR",
    "freqScore": 9
  },
  {
    "id": 182,
    "text": "bar",
    "phonemes": [
      "B",
      "AA1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAR",
    "freqScore": 9
  },
  {
    "id": 183,
    "text": "blood",
    "phonemes": [
      "B",
      "L",
      "AH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHD",
    "freqScore": 8
  },
  {
    "id": 184,
    "text": "flood",
    "phonemes": [
      "F",
      "L",
      "AH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHD",
    "freqScore": 8
  },
  {
    "id": 185,
    "text": "mud",
    "phonemes": [
      "M",
      "AH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHD",
    "freqScore": 9
  },
  {
    "id": 186,
    "text": "above",
    "phonemes": [
      "AH0",
      "B",
      "AH1",
      "V"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AHV",
    "freqScore": 8
  },
  {
    "id": 187,
    "text": "shove",
    "phonemes": [
      "SH",
      "AH1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHV",
    "freqScore": 8
  },
  {
    "id": 188,
    "text": "dove",
    "phonemes": [
      "D",
      "AH1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHV",
    "freqScore": 9
  },
  {
    "id": 189,
    "text": "king",
    "phonemes": [
      "K",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 9
  },
  {
    "id": 190,
    "text": "thing",
    "phonemes": [
      "TH",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 191,
    "text": "wing",
    "phonemes": [
      "W",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 9
  },
  {
    "id": 192,
    "text": "spring",
    "phonemes": [
      "S",
      "P",
      "R",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 193,
    "text": "string",
    "phonemes": [
      "S",
      "T",
      "R",
      "IH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNG",
    "freqScore": 8
  },
  {
    "id": 194,
    "text": "wall",
    "phonemes": [
      "W",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 195,
    "text": "hall",
    "phonemes": [
      "HH",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 196,
    "text": "ball",
    "phonemes": [
      "B",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 197,
    "text": "tall",
    "phonemes": [
      "T",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 198,
    "text": "small",
    "phonemes": [
      "S",
      "M",
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 8
  },
  {
    "id": 199,
    "text": "all",
    "phonemes": [
      "AO1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOL",
    "freqScore": 9
  },
  {
    "id": 200,
    "text": "room",
    "phonemes": [
      "R",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 9
  },
  {
    "id": 201,
    "text": "boom",
    "phonemes": [
      "B",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 9
  },
  {
    "id": 202,
    "text": "doom",
    "phonemes": [
      "D",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 9
  },
  {
    "id": 203,
    "text": "bloom",
    "phonemes": [
      "B",
      "L",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 8
  },
  {
    "id": 204,
    "text": "gloom",
    "phonemes": [
      "G",
      "L",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 8
  },
  {
    "id": 205,
    "text": "tomb",
    "phonemes": [
      "T",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 9
  },
  {
    "id": 206,
    "text": "womb",
    "phonemes": [
      "W",
      "UW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWM",
    "freqScore": 9
  },
  {
    "id": 207,
    "text": "town",
    "phonemes": [
      "T",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 9
  },
  {
    "id": 208,
    "text": "down",
    "phonemes": [
      "D",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 9
  },
  {
    "id": 209,
    "text": "crown",
    "phonemes": [
      "K",
      "R",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 8
  },
  {
    "id": 210,
    "text": "brown",
    "phonemes": [
      "B",
      "R",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 8
  },
  {
    "id": 211,
    "text": "drown",
    "phonemes": [
      "D",
      "R",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 8
  },
  {
    "id": 212,
    "text": "frown",
    "phonemes": [
      "F",
      "R",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 8
  },
  {
    "id": 213,
    "text": "gown",
    "phonemes": [
      "G",
      "AW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWN",
    "freqScore": 9
  },
  {
    "id": 214,
    "text": "sound",
    "phonemes": [
      "S",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 215,
    "text": "ground",
    "phonemes": [
      "G",
      "R",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 216,
    "text": "round",
    "phonemes": [
      "R",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 217,
    "text": "found",
    "phonemes": [
      "F",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 218,
    "text": "bound",
    "phonemes": [
      "B",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 219,
    "text": "wound",
    "phonemes": [
      "W",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 220,
    "text": "pound",
    "phonemes": [
      "P",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWND",
    "freqScore": 8
  },
  {
    "id": 221,
    "text": "good",
    "phonemes": [
      "G",
      "UH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHD",
    "freqScore": 9
  },
  {
    "id": 222,
    "text": "bad",
    "phonemes": [
      "B",
      "AE1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AED",
    "freqScore": 9
  },
  {
    "id": 223,
    "text": "old",
    "phonemes": [
      "OW1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWLD",
    "freqScore": 9
  },
  {
    "id": 224,
    "text": "new",
    "phonemes": [
      "N",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 9
  },
  {
    "id": 225,
    "text": "young",
    "phonemes": [
      "Y",
      "AH1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHNG",
    "freqScore": 8
  },
  {
    "id": 226,
    "text": "true",
    "phonemes": [
      "T",
      "R",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 9
  },
  {
    "id": 227,
    "text": "blue",
    "phonemes": [
      "B",
      "L",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 9
  },
  {
    "id": 228,
    "text": "cold",
    "phonemes": [
      "K",
      "OW1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWLD",
    "freqScore": 9
  },
  {
    "id": 229,
    "text": "hot",
    "phonemes": [
      "HH",
      "AA1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAT",
    "freqScore": 9
  },
  {
    "id": 230,
    "text": "lost",
    "phonemes": [
      "L",
      "AO1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOST",
    "freqScore": 9
  },
  {
    "id": 231,
    "text": "free",
    "phonemes": [
      "F",
      "R",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 9
  },
  {
    "id": 232,
    "text": "wild",
    "phonemes": [
      "W",
      "AY1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYLD",
    "freqScore": 9
  },
  {
    "id": 233,
    "text": "blind",
    "phonemes": [
      "B",
      "L",
      "AY1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYND",
    "freqScore": 8
  },
  {
    "id": 234,
    "text": "kind",
    "phonemes": [
      "K",
      "AY1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYND",
    "freqScore": 9
  },
  {
    "id": 235,
    "text": "fine",
    "phonemes": [
      "F",
      "AY1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYN",
    "freqScore": 9
  },
  {
    "id": 236,
    "text": "mine",
    "phonemes": [
      "M",
      "AY1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYN",
    "freqScore": 9
  },
  {
    "id": 237,
    "text": "high",
    "phonemes": [
      "HH",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 9
  },
  {
    "id": 238,
    "text": "low",
    "phonemes": [
      "L",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 239,
    "text": "deep",
    "phonemes": [
      "D",
      "IY1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYP",
    "freqScore": 9
  },
  {
    "id": 240,
    "text": "wide",
    "phonemes": [
      "W",
      "AY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYD",
    "freqScore": 9
  },
  {
    "id": 241,
    "text": "long",
    "phonemes": [
      "L",
      "AO1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AONG",
    "freqScore": 9
  },
  {
    "id": 242,
    "text": "strong",
    "phonemes": [
      "S",
      "T",
      "R",
      "AO1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AONG",
    "freqScore": 8
  },
  {
    "id": 243,
    "text": "wrong",
    "phonemes": [
      "R",
      "AO1",
      "NG"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AONG",
    "freqScore": 8
  },
  {
    "id": 244,
    "text": "right",
    "phonemes": [
      "R",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 245,
    "text": "hard",
    "phonemes": [
      "HH",
      "AA1",
      "R",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AARD",
    "freqScore": 9
  },
  {
    "id": 246,
    "text": "soft",
    "phonemes": [
      "S",
      "AA1",
      "F",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAFT",
    "freqScore": 9
  },
  {
    "id": 247,
    "text": "bright",
    "phonemes": [
      "B",
      "R",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 248,
    "text": "tight",
    "phonemes": [
      "T",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 249,
    "text": "slight",
    "phonemes": [
      "S",
      "L",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 250,
    "text": "fast",
    "phonemes": [
      "F",
      "AE1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEST",
    "freqScore": 9
  },
  {
    "id": 251,
    "text": "slow",
    "phonemes": [
      "S",
      "L",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 9
  },
  {
    "id": 252,
    "text": "real",
    "phonemes": [
      "R",
      "IY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYL",
    "freqScore": 9
  },
  {
    "id": 253,
    "text": "fake",
    "phonemes": [
      "F",
      "EY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYK",
    "freqScore": 9
  },
  {
    "id": 254,
    "text": "sick",
    "phonemes": [
      "S",
      "IH1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHK",
    "freqScore": 9
  },
  {
    "id": 255,
    "text": "thick",
    "phonemes": [
      "TH",
      "IH1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHK",
    "freqScore": 8
  },
  {
    "id": 256,
    "text": "quick",
    "phonemes": [
      "K",
      "W",
      "IH1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHK",
    "freqScore": 8
  },
  {
    "id": 257,
    "text": "slick",
    "phonemes": [
      "S",
      "L",
      "IH1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHK",
    "freqScore": 8
  },
  {
    "id": 258,
    "text": "big",
    "phonemes": [
      "B",
      "IH1",
      "G"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHG",
    "freqScore": 9
  },
  {
    "id": 259,
    "text": "great",
    "phonemes": [
      "G",
      "R",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 8
  },
  {
    "id": 260,
    "text": "straight",
    "phonemes": [
      "S",
      "T",
      "R",
      "EY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYT",
    "freqScore": 8
  },
  {
    "id": 261,
    "text": "strange",
    "phonemes": [
      "S",
      "T",
      "R",
      "EY1",
      "N",
      "JH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYNJH",
    "freqScore": 8
  },
  {
    "id": 262,
    "text": "unknown",
    "phonemes": [
      "AH0",
      "N",
      "N",
      "OW1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "OWN",
    "freqScore": 8
  },
  {
    "id": 263,
    "text": "broken",
    "phonemes": [
      "B",
      "R",
      "OW1",
      "K",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWKAHN",
    "freqScore": 8
  },
  {
    "id": 264,
    "text": "frozen",
    "phonemes": [
      "F",
      "R",
      "OW1",
      "Z",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWZAHN",
    "freqScore": 8
  },
  {
    "id": 265,
    "text": "chosen",
    "phonemes": [
      "CH",
      "OW1",
      "Z",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWZAHN",
    "freqScore": 8
  },
  {
    "id": 266,
    "text": "golden",
    "phonemes": [
      "G",
      "OW1",
      "L",
      "D",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDAHN",
    "freqScore": 8
  },
  {
    "id": 267,
    "text": "in",
    "phonemes": [
      "IH0",
      "N"
    ],
    "stressPattern": [
      0
    ],
    "syllableCount": 1,
    "rhymeKey": "IHN",
    "freqScore": 10
  },
  {
    "id": 268,
    "text": "on",
    "phonemes": [
      "AA1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAN",
    "freqScore": 10
  },
  {
    "id": 269,
    "text": "out",
    "phonemes": [
      "AW1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AWT",
    "freqScore": 9
  },
  {
    "id": 270,
    "text": "up",
    "phonemes": [
      "AH1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHP",
    "freqScore": 10
  },
  {
    "id": 271,
    "text": "through",
    "phonemes": [
      "TH",
      "R",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 8
  },
  {
    "id": 272,
    "text": "with",
    "phonemes": [
      "W",
      "IH1",
      "DH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHDH",
    "freqScore": 9
  },
  {
    "id": 273,
    "text": "without",
    "phonemes": [
      "W",
      "IH0",
      "TH",
      "AW1",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AWT",
    "freqScore": 8
  },
  {
    "id": 274,
    "text": "within",
    "phonemes": [
      "W",
      "IH0",
      "DH",
      "IH1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IHN",
    "freqScore": 8
  },
  {
    "id": 275,
    "text": "away",
    "phonemes": [
      "AH0",
      "W",
      "EY1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EY",
    "freqScore": 9
  },
  {
    "id": 276,
    "text": "today",
    "phonemes": [
      "T",
      "AH0",
      "D",
      "EY1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EY",
    "freqScore": 8
  },
  {
    "id": 277,
    "text": "tonight",
    "phonemes": [
      "T",
      "AH0",
      "N",
      "AY1",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 278,
    "text": "forever",
    "phonemes": [
      "F",
      "ER0",
      "EH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVER",
    "freqScore": 8
  },
  {
    "id": 279,
    "text": "never",
    "phonemes": [
      "N",
      "EH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHVER",
    "freqScore": 8
  },
  {
    "id": 280,
    "text": "always",
    "phonemes": [
      "AO1",
      "L",
      "W",
      "EY2",
      "Z"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EYZ",
    "freqScore": 8
  },
  {
    "id": 281,
    "text": "maybe",
    "phonemes": [
      "M",
      "EY1",
      "B",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYBIY",
    "freqScore": 8
  },
  {
    "id": 282,
    "text": "here",
    "phonemes": [
      "HH",
      "IY1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYR",
    "freqScore": 9
  },
  {
    "id": 283,
    "text": "there",
    "phonemes": [
      "DH",
      "EH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 284,
    "text": "where",
    "phonemes": [
      "W",
      "EH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 285,
    "text": "somewhere",
    "phonemes": [
      "S",
      "AH1",
      "M",
      "W",
      "EH2",
      "R"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 286,
    "text": "nowhere",
    "phonemes": [
      "N",
      "OW1",
      "W",
      "EH2",
      "R"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 287,
    "text": "everywhere",
    "phonemes": [
      "EH1",
      "V",
      "R",
      "IY0",
      "W",
      "EH2",
      "R"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 288,
    "text": "now",
    "phonemes": [
      "N",
      "AW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AW",
    "freqScore": 9
  },
  {
    "id": 289,
    "text": "how",
    "phonemes": [
      "HH",
      "AW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AW",
    "freqScore": 9
  },
  {
    "id": 290,
    "text": "when",
    "phonemes": [
      "W",
      "EH1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHN",
    "freqScore": 9
  },
  {
    "id": 291,
    "text": "then",
    "phonemes": [
      "DH",
      "EH1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHN",
    "freqScore": 9
  },
  {
    "id": 292,
    "text": "again",
    "phonemes": [
      "AH0",
      "G",
      "EH1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHN",
    "freqScore": 8
  },
  {
    "id": 293,
    "text": "begin",
    "phonemes": [
      "B",
      "IH0",
      "G",
      "IH1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IHN",
    "freqScore": 8
  },
  {
    "id": 294,
    "text": "the",
    "phonemes": [
      "DH",
      "AH0"
    ],
    "stressPattern": [
      0
    ],
    "syllableCount": 1,
    "rhymeKey": "AH",
    "freqScore": 9
  },
  {
    "id": 295,
    "text": "a",
    "phonemes": [
      "AH0"
    ],
    "stressPattern": [
      0
    ],
    "syllableCount": 1,
    "rhymeKey": "AH",
    "freqScore": 10
  },
  {
    "id": 296,
    "text": "an",
    "phonemes": [
      "AE1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEN",
    "freqScore": 10
  },
  {
    "id": 297,
    "text": "and",
    "phonemes": [
      "AH0",
      "N",
      "D"
    ],
    "stressPattern": [
      0
    ],
    "syllableCount": 1,
    "rhymeKey": "AHND",
    "freqScore": 9
  },
  {
    "id": 298,
    "text": "but",
    "phonemes": [
      "B",
      "AH1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHT",
    "freqScore": 9
  },
  {
    "id": 299,
    "text": "or",
    "phonemes": [
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 10
  },
  {
    "id": 300,
    "text": "if",
    "phonemes": [
      "IH1",
      "F"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHF",
    "freqScore": 10
  },
  {
    "id": 301,
    "text": "so",
    "phonemes": [
      "S",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 10
  },
  {
    "id": 302,
    "text": "as",
    "phonemes": [
      "AE1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEZ",
    "freqScore": 10
  },
  {
    "id": 303,
    "text": "for",
    "phonemes": [
      "F",
      "AO1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOR",
    "freqScore": 9
  },
  {
    "id": 304,
    "text": "to",
    "phonemes": [
      "T",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 10
  },
  {
    "id": 305,
    "text": "of",
    "phonemes": [
      "AH1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHV",
    "freqScore": 10
  },
  {
    "id": 306,
    "text": "is",
    "phonemes": [
      "IH1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHZ",
    "freqScore": 10
  },
  {
    "id": 307,
    "text": "are",
    "phonemes": [
      "AA1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAR",
    "freqScore": 9
  },
  {
    "id": 308,
    "text": "was",
    "phonemes": [
      "W",
      "AA1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAZ",
    "freqScore": 9
  },
  {
    "id": 309,
    "text": "were",
    "phonemes": [
      "W",
      "ER1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ER",
    "freqScore": 9
  },
  {
    "id": 310,
    "text": "be",
    "phonemes": [
      "B",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 10
  },
  {
    "id": 311,
    "text": "been",
    "phonemes": [
      "B",
      "IH1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHN",
    "freqScore": 9
  },
  {
    "id": 312,
    "text": "being",
    "phonemes": [
      "B",
      "IY1",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYIHNG",
    "freqScore": 8
  },
  {
    "id": 313,
    "text": "can",
    "phonemes": [
      "K",
      "AE1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEN",
    "freqScore": 9
  },
  {
    "id": 314,
    "text": "could",
    "phonemes": [
      "K",
      "UH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHD",
    "freqScore": 8
  },
  {
    "id": 315,
    "text": "would",
    "phonemes": [
      "W",
      "UH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHD",
    "freqScore": 8
  },
  {
    "id": 316,
    "text": "should",
    "phonemes": [
      "SH",
      "UH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHD",
    "freqScore": 8
  },
  {
    "id": 317,
    "text": "will",
    "phonemes": [
      "W",
      "IH1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHL",
    "freqScore": 9
  },
  {
    "id": 318,
    "text": "might",
    "phonemes": [
      "M",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 8
  },
  {
    "id": 319,
    "text": "must",
    "phonemes": [
      "M",
      "AH1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHST",
    "freqScore": 9
  },
  {
    "id": 320,
    "text": "do",
    "phonemes": [
      "D",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 10
  },
  {
    "id": 321,
    "text": "does",
    "phonemes": [
      "D",
      "AH1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHZ",
    "freqScore": 9
  },
  {
    "id": 322,
    "text": "did",
    "phonemes": [
      "D",
      "IH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHD",
    "freqScore": 9
  },
  {
    "id": 323,
    "text": "done",
    "phonemes": [
      "D",
      "AH1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHN",
    "freqScore": 9
  },
  {
    "id": 324,
    "text": "have",
    "phonemes": [
      "HH",
      "AE1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEV",
    "freqScore": 9
  },
  {
    "id": 325,
    "text": "has",
    "phonemes": [
      "HH",
      "AE1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEZ",
    "freqScore": 9
  },
  {
    "id": 326,
    "text": "had",
    "phonemes": [
      "HH",
      "AE1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AED",
    "freqScore": 9
  },
  {
    "id": 327,
    "text": "this",
    "phonemes": [
      "DH",
      "IH1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHS",
    "freqScore": 9
  },
  {
    "id": 328,
    "text": "that",
    "phonemes": [
      "DH",
      "AE1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AET",
    "freqScore": 9
  },
  {
    "id": 329,
    "text": "these",
    "phonemes": [
      "DH",
      "IY1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYZ",
    "freqScore": 8
  },
  {
    "id": 330,
    "text": "those",
    "phonemes": [
      "DH",
      "OW1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWZ",
    "freqScore": 8
  },
  {
    "id": 331,
    "text": "what",
    "phonemes": [
      "W",
      "AH1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHT",
    "freqScore": 9
  },
  {
    "id": 332,
    "text": "which",
    "phonemes": [
      "W",
      "IH1",
      "CH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHCH",
    "freqScore": 8
  },
  {
    "id": 333,
    "text": "who",
    "phonemes": [
      "HH",
      "UW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UW",
    "freqScore": 9
  },
  {
    "id": 334,
    "text": "no",
    "phonemes": [
      "N",
      "OW1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OW",
    "freqScore": 10
  },
  {
    "id": 335,
    "text": "not",
    "phonemes": [
      "N",
      "AA1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAT",
    "freqScore": 9
  },
  {
    "id": 336,
    "text": "yes",
    "phonemes": [
      "Y",
      "EH1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHS",
    "freqScore": 9
  },
  {
    "id": 337,
    "text": "just",
    "phonemes": [
      "JH",
      "AH1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHST",
    "freqScore": 9
  },
  {
    "id": 338,
    "text": "only",
    "phonemes": [
      "OW1",
      "N",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWNLIY",
    "freqScore": 9
  },
  {
    "id": 339,
    "text": "even",
    "phonemes": [
      "IY1",
      "V",
      "IH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYVIHN",
    "freqScore": 9
  },
  {
    "id": 340,
    "text": "still",
    "phonemes": [
      "S",
      "T",
      "IH1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHL",
    "freqScore": 8
  },
  {
    "id": 341,
    "text": "yet",
    "phonemes": [
      "Y",
      "EH1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHT",
    "freqScore": 9
  },
  {
    "id": 342,
    "text": "i'm",
    "phonemes": [
      "AY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYM",
    "freqScore": 9
  },
  {
    "id": 343,
    "text": "i'll",
    "phonemes": [
      "AY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYL",
    "freqScore": 9
  },
  {
    "id": 344,
    "text": "i've",
    "phonemes": [
      "AY1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYV",
    "freqScore": 9
  },
  {
    "id": 345,
    "text": "i'd",
    "phonemes": [
      "AY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYD",
    "freqScore": 9
  },
  {
    "id": 346,
    "text": "you're",
    "phonemes": [
      "Y",
      "UH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHR",
    "freqScore": 8
  },
  {
    "id": 347,
    "text": "you'll",
    "phonemes": [
      "Y",
      "UW1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWL",
    "freqScore": 8
  },
  {
    "id": 348,
    "text": "you've",
    "phonemes": [
      "Y",
      "UW1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWV",
    "freqScore": 8
  },
  {
    "id": 349,
    "text": "you'd",
    "phonemes": [
      "Y",
      "UW1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWD",
    "freqScore": 8
  },
  {
    "id": 350,
    "text": "we're",
    "phonemes": [
      "W",
      "IY1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYR",
    "freqScore": 8
  },
  {
    "id": 351,
    "text": "we'll",
    "phonemes": [
      "W",
      "IY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYL",
    "freqScore": 8
  },
  {
    "id": 352,
    "text": "we've",
    "phonemes": [
      "W",
      "IY1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYV",
    "freqScore": 8
  },
  {
    "id": 353,
    "text": "we'd",
    "phonemes": [
      "W",
      "IY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYD",
    "freqScore": 9
  },
  {
    "id": 354,
    "text": "they're",
    "phonemes": [
      "DH",
      "EH1",
      "R"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHR",
    "freqScore": 8
  },
  {
    "id": 355,
    "text": "they'll",
    "phonemes": [
      "DH",
      "EY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYL",
    "freqScore": 8
  },
  {
    "id": 356,
    "text": "they've",
    "phonemes": [
      "DH",
      "EY1",
      "V"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYV",
    "freqScore": 8
  },
  {
    "id": 357,
    "text": "they'd",
    "phonemes": [
      "DH",
      "EY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYD",
    "freqScore": 8
  },
  {
    "id": 358,
    "text": "he's",
    "phonemes": [
      "HH",
      "IY1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYZ",
    "freqScore": 9
  },
  {
    "id": 359,
    "text": "she's",
    "phonemes": [
      "SH",
      "IY1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYZ",
    "freqScore": 8
  },
  {
    "id": 360,
    "text": "it's",
    "phonemes": [
      "IH1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHTS",
    "freqScore": 9
  },
  {
    "id": 361,
    "text": "that's",
    "phonemes": [
      "DH",
      "AE1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AETS",
    "freqScore": 8
  },
  {
    "id": 362,
    "text": "what's",
    "phonemes": [
      "W",
      "AH1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHTS",
    "freqScore": 8
  },
  {
    "id": 363,
    "text": "there's",
    "phonemes": [
      "DH",
      "EH1",
      "R",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHRZ",
    "freqScore": 8
  },
  {
    "id": 364,
    "text": "here's",
    "phonemes": [
      "HH",
      "IH1",
      "R",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHRZ",
    "freqScore": 8
  },
  {
    "id": 365,
    "text": "can't",
    "phonemes": [
      "K",
      "AE1",
      "N",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AENT",
    "freqScore": 8
  },
  {
    "id": 366,
    "text": "won't",
    "phonemes": [
      "W",
      "OW1",
      "N",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWNT",
    "freqScore": 8
  },
  {
    "id": 367,
    "text": "don't",
    "phonemes": [
      "D",
      "OW1",
      "N",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWNT",
    "freqScore": 8
  },
  {
    "id": 368,
    "text": "didn't",
    "phonemes": [
      "D",
      "IH1",
      "D",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHDAHNT",
    "freqScore": 8
  },
  {
    "id": 369,
    "text": "couldn't",
    "phonemes": [
      "K",
      "UH1",
      "D",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UHDAHNT",
    "freqScore": 8
  },
  {
    "id": 370,
    "text": "wouldn't",
    "phonemes": [
      "W",
      "UH1",
      "D",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UHDAHNT",
    "freqScore": 8
  },
  {
    "id": 371,
    "text": "shouldn't",
    "phonemes": [
      "SH",
      "UH1",
      "D",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UHDAHNT",
    "freqScore": 8
  },
  {
    "id": 372,
    "text": "isn't",
    "phonemes": [
      "IH1",
      "Z",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHZAHNT",
    "freqScore": 8
  },
  {
    "id": 373,
    "text": "aren't",
    "phonemes": [
      "AA1",
      "R",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AARAHNT",
    "freqScore": 8
  },
  {
    "id": 374,
    "text": "wasn't",
    "phonemes": [
      "W",
      "AA1",
      "Z",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAZAHNT",
    "freqScore": 8
  },
  {
    "id": 375,
    "text": "weren't",
    "phonemes": [
      "W",
      "ER1",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERAHNT",
    "freqScore": 8
  },
  {
    "id": 376,
    "text": "haven't",
    "phonemes": [
      "HH",
      "AE1",
      "V",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEVAHNT",
    "freqScore": 8
  },
  {
    "id": 377,
    "text": "hasn't",
    "phonemes": [
      "HH",
      "AE1",
      "Z",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEZAHNT",
    "freqScore": 8
  },
  {
    "id": 378,
    "text": "hadn't",
    "phonemes": [
      "HH",
      "AE1",
      "D",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEDAHNT",
    "freqScore": 8
  },
  {
    "id": 379,
    "text": "ain't",
    "phonemes": [
      "EY1",
      "N",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYNT",
    "freqScore": 8
  },
  {
    "id": 380,
    "text": "gonna",
    "phonemes": [
      "G",
      "AA1",
      "N",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AANAH",
    "freqScore": 8
  },
  {
    "id": 381,
    "text": "wanna",
    "phonemes": [
      "W",
      "AA1",
      "N",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AANAH",
    "freqScore": 8
  },
  {
    "id": 382,
    "text": "gotta",
    "phonemes": [
      "G",
      "AA1",
      "T",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AATAH",
    "freqScore": 8
  },
  {
    "id": 383,
    "text": "running",
    "phonemes": [
      "R",
      "AH1",
      "N",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNIHNG",
    "freqScore": 8
  },
  {
    "id": 384,
    "text": "falling",
    "phonemes": [
      "F",
      "AA1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AALIHNG",
    "freqScore": 8
  },
  {
    "id": 385,
    "text": "calling",
    "phonemes": [
      "K",
      "AO1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOLIHNG",
    "freqScore": 8
  },
  {
    "id": 386,
    "text": "crawling",
    "phonemes": [
      "K",
      "R",
      "AO1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOLIHNG",
    "freqScore": 8
  },
  {
    "id": 387,
    "text": "dreaming",
    "phonemes": [
      "D",
      "R",
      "IY1",
      "M",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYMIHNG",
    "freqScore": 8
  },
  {
    "id": 388,
    "text": "screaming",
    "phonemes": [
      "S",
      "K",
      "R",
      "IY1",
      "M",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYMIHNG",
    "freqScore": 8
  },
  {
    "id": 389,
    "text": "feeling",
    "phonemes": [
      "F",
      "IY1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYLIHNG",
    "freqScore": 8
  },
  {
    "id": 390,
    "text": "healing",
    "phonemes": [
      "HH",
      "IY1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYLIHNG",
    "freqScore": 8
  },
  {
    "id": 391,
    "text": "stealing",
    "phonemes": [
      "S",
      "T",
      "IY1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYLIHNG",
    "freqScore": 8
  },
  {
    "id": 392,
    "text": "dealing",
    "phonemes": [
      "D",
      "IY1",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYLIHNG",
    "freqScore": 8
  },
  {
    "id": 393,
    "text": "breathing",
    "phonemes": [
      "B",
      "R",
      "IY1",
      "DH",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYDHIHNG",
    "freqScore": 8
  },
  {
    "id": 394,
    "text": "leaving",
    "phonemes": [
      "L",
      "IY1",
      "V",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYVIHNG",
    "freqScore": 8
  },
  {
    "id": 395,
    "text": "believing",
    "phonemes": [
      "B",
      "IH0",
      "L",
      "IY1",
      "V",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYVIHNG",
    "freqScore": 8
  },
  {
    "id": 396,
    "text": "receiving",
    "phonemes": [
      "R",
      "AH0",
      "S",
      "IY1",
      "V",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYVIHNG",
    "freqScore": 8
  },
  {
    "id": 397,
    "text": "deceiving",
    "phonemes": [
      "D",
      "IH0",
      "S",
      "IY1",
      "V",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYVIHNG",
    "freqScore": 8
  },
  {
    "id": 398,
    "text": "achieving",
    "phonemes": [
      "AH0",
      "CH",
      "IY1",
      "V",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYVIHNG",
    "freqScore": 8
  },
  {
    "id": 399,
    "text": "together",
    "phonemes": [
      "T",
      "AH0",
      "G",
      "EH1",
      "DH",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHDHER",
    "freqScore": 8
  },
  {
    "id": 400,
    "text": "whatever",
    "phonemes": [
      "W",
      "AH2",
      "T",
      "EH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVER",
    "freqScore": 8
  },
  {
    "id": 401,
    "text": "whenever",
    "phonemes": [
      "W",
      "EH0",
      "N",
      "EH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVER",
    "freqScore": 8
  },
  {
    "id": 402,
    "text": "however",
    "phonemes": [
      "HH",
      "AW2",
      "EH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVER",
    "freqScore": 8
  },
  {
    "id": 403,
    "text": "wherever",
    "phonemes": [
      "W",
      "EH0",
      "R",
      "EH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVER",
    "freqScore": 8
  },
  {
    "id": 404,
    "text": "remember",
    "phonemes": [
      "R",
      "IH0",
      "M",
      "EH1",
      "M",
      "B",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHMBER",
    "freqScore": 8
  },
  {
    "id": 405,
    "text": "surrender",
    "phonemes": [
      "S",
      "ER0",
      "EH1",
      "N",
      "D",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDER",
    "freqScore": 8
  },
  {
    "id": 406,
    "text": "defender",
    "phonemes": [
      "D",
      "IH0",
      "F",
      "EH1",
      "N",
      "D",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDER",
    "freqScore": 8
  },
  {
    "id": 407,
    "text": "pretender",
    "phonemes": [
      "P",
      "R",
      "IY0",
      "T",
      "EH1",
      "N",
      "D",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDER",
    "freqScore": 8
  },
  {
    "id": 408,
    "text": "beautiful",
    "phonemes": [
      "B",
      "Y",
      "UW1",
      "T",
      "AH0",
      "F",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "UWTAHFAHL",
    "freqScore": 8
  },
  {
    "id": 409,
    "text": "wonderful",
    "phonemes": [
      "W",
      "AH1",
      "N",
      "D",
      "ER0",
      "F",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHNDERFAHL",
    "freqScore": 8
  },
  {
    "id": 410,
    "text": "powerful",
    "phonemes": [
      "P",
      "AW1",
      "ER0",
      "F",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AWERFAHL",
    "freqScore": 8
  },
  {
    "id": 411,
    "text": "meaningful",
    "phonemes": [
      "M",
      "IY1",
      "N",
      "IH0",
      "NG",
      "F",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYNIHNGFAHL",
    "freqScore": 8
  },
  {
    "id": 412,
    "text": "understand",
    "phonemes": [
      "AH2",
      "N",
      "D",
      "ER0",
      "S",
      "T",
      "AE1",
      "N",
      "D"
    ],
    "stressPattern": [
      2,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "AEND",
    "freqScore": 8
  },
  {
    "id": 413,
    "text": "overcome",
    "phonemes": [
      "OW1",
      "V",
      "ER0",
      "K",
      "AH2",
      "M"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AHM",
    "freqScore": 8
  },
  {
    "id": 414,
    "text": "overwhelm",
    "phonemes": [
      "OW2",
      "V",
      "ER0",
      "W",
      "EH1",
      "L",
      "M"
    ],
    "stressPattern": [
      2,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "EHLM",
    "freqScore": 8
  },
  {
    "id": 415,
    "text": "undertake",
    "phonemes": [
      "AH1",
      "N",
      "D",
      "ER0",
      "T",
      "EY2",
      "K"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EYK",
    "freqScore": 8
  },
  {
    "id": 416,
    "text": "beginning",
    "phonemes": [
      "B",
      "IH0",
      "G",
      "IH1",
      "N",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHNIHNG",
    "freqScore": 8
  },
  {
    "id": 417,
    "text": "ending",
    "phonemes": [
      "EH1",
      "N",
      "D",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNDIHNG",
    "freqScore": 8
  },
  {
    "id": 418,
    "text": "pretending",
    "phonemes": [
      "P",
      "R",
      "IY0",
      "T",
      "EH1",
      "N",
      "D",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDIHNG",
    "freqScore": 8
  },
  {
    "id": 419,
    "text": "descending",
    "phonemes": [
      "D",
      "IH0",
      "S",
      "EH1",
      "N",
      "D",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDIHNG",
    "freqScore": 8
  },
  {
    "id": 420,
    "text": "ascending",
    "phonemes": [
      "AH0",
      "S",
      "EH1",
      "N",
      "D",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDIHNG",
    "freqScore": 8
  },
  {
    "id": 421,
    "text": "tomorrow",
    "phonemes": [
      "T",
      "AH0",
      "M",
      "AA1",
      "R",
      "OW2"
    ],
    "stressPattern": [
      0,
      1,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "OW",
    "freqScore": 8
  },
  {
    "id": 422,
    "text": "yesterday",
    "phonemes": [
      "Y",
      "EH1",
      "S",
      "T",
      "ER0",
      "D",
      "EY2"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EY",
    "freqScore": 8
  },
  {
    "id": 423,
    "text": "anyway",
    "phonemes": [
      "EH1",
      "N",
      "IY0",
      "W",
      "EY2"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EY",
    "freqScore": 8
  },
  {
    "id": 424,
    "text": "someday",
    "phonemes": [
      "S",
      "AH1",
      "M",
      "D",
      "EY2"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EY",
    "freqScore": 8
  },
  {
    "id": 425,
    "text": "everyday",
    "phonemes": [
      "EH1",
      "V",
      "R",
      "IY0",
      "D",
      "EY1"
    ],
    "stressPattern": [
      1,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "EY",
    "freqScore": 8
  },
  {
    "id": 426,
    "text": "inside",
    "phonemes": [
      "IH2",
      "N",
      "S",
      "AY1",
      "D"
    ],
    "stressPattern": [
      2,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 427,
    "text": "outside",
    "phonemes": [
      "AW1",
      "T",
      "S",
      "AY1",
      "D"
    ],
    "stressPattern": [
      1,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 428,
    "text": "beside",
    "phonemes": [
      "B",
      "IH0",
      "S",
      "AY1",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 429,
    "text": "divide",
    "phonemes": [
      "D",
      "IH0",
      "V",
      "AY1",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 430,
    "text": "collide",
    "phonemes": [
      "K",
      "AH0",
      "L",
      "AY1",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 431,
    "text": "decide",
    "phonemes": [
      "D",
      "IH2",
      "S",
      "AY1",
      "D"
    ],
    "stressPattern": [
      2,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 432,
    "text": "provide",
    "phonemes": [
      "P",
      "R",
      "AH0",
      "V",
      "AY1",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYD",
    "freqScore": 8
  },
  {
    "id": 433,
    "text": "afraid",
    "phonemes": [
      "AH0",
      "F",
      "R",
      "EY1",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EYD",
    "freqScore": 8
  },
  {
    "id": 434,
    "text": "awake",
    "phonemes": [
      "AH0",
      "W",
      "EY1",
      "K"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EYK",
    "freqScore": 8
  },
  {
    "id": 435,
    "text": "alive",
    "phonemes": [
      "AH0",
      "L",
      "AY1",
      "V"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYV",
    "freqScore": 8
  },
  {
    "id": 436,
    "text": "asleep",
    "phonemes": [
      "AH0",
      "S",
      "L",
      "IY1",
      "P"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IYP",
    "freqScore": 8
  },
  {
    "id": 437,
    "text": "about",
    "phonemes": [
      "AH0",
      "B",
      "AW1",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AWT",
    "freqScore": 5
  },
  {
    "id": 438,
    "text": "after",
    "phonemes": [
      "AE1",
      "F",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEFTER",
    "freqScore": 5
  },
  {
    "id": 439,
    "text": "back",
    "phonemes": [
      "B",
      "AE1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEK",
    "freqScore": 6
  },
  {
    "id": 440,
    "text": "because",
    "phonemes": [
      "B",
      "IH0",
      "K",
      "AO1",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AOZ",
    "freqScore": 5
  },
  {
    "id": 441,
    "text": "between",
    "phonemes": [
      "B",
      "IH0",
      "T",
      "W",
      "IY1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IYN",
    "freqScore": 5
  },
  {
    "id": 442,
    "text": "both",
    "phonemes": [
      "B",
      "OW1",
      "TH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWTH",
    "freqScore": 6
  },
  {
    "id": 443,
    "text": "each",
    "phonemes": [
      "IY1",
      "CH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYCH",
    "freqScore": 6
  },
  {
    "id": 444,
    "text": "every",
    "phonemes": [
      "EH1",
      "V",
      "ER0",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVERIY",
    "freqScore": 5
  },
  {
    "id": 445,
    "text": "first",
    "phonemes": [
      "F",
      "ER1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERST",
    "freqScore": 5
  },
  {
    "id": 446,
    "text": "from",
    "phonemes": [
      "F",
      "R",
      "AH1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHM",
    "freqScore": 6
  },
  {
    "id": 447,
    "text": "get",
    "phonemes": [
      "G",
      "EH1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHT",
    "freqScore": 6
  },
  {
    "id": 448,
    "text": "got",
    "phonemes": [
      "G",
      "AA1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAT",
    "freqScore": 6
  },
  {
    "id": 449,
    "text": "into",
    "phonemes": [
      "IH1",
      "N",
      "T",
      "UW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNTUW",
    "freqScore": 6
  },
  {
    "id": 450,
    "text": "last",
    "phonemes": [
      "L",
      "AE1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEST",
    "freqScore": 6
  },
  {
    "id": 451,
    "text": "like",
    "phonemes": [
      "L",
      "AY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYK",
    "freqScore": 6
  },
  {
    "id": 452,
    "text": "little",
    "phonemes": [
      "L",
      "IH1",
      "T",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHTAHL",
    "freqScore": 5
  },
  {
    "id": 453,
    "text": "look",
    "phonemes": [
      "L",
      "UH1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHK",
    "freqScore": 6
  },
  {
    "id": 454,
    "text": "made",
    "phonemes": [
      "M",
      "EY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYD",
    "freqScore": 6
  },
  {
    "id": 455,
    "text": "many",
    "phonemes": [
      "M",
      "EH1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNIY",
    "freqScore": 6
  },
  {
    "id": 456,
    "text": "most",
    "phonemes": [
      "M",
      "OW1",
      "S",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWST",
    "freqScore": 6
  },
  {
    "id": 457,
    "text": "much",
    "phonemes": [
      "M",
      "AH1",
      "CH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHCH",
    "freqScore": 6
  },
  {
    "id": 458,
    "text": "over",
    "phonemes": [
      "OW1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWVER",
    "freqScore": 6
  },
  {
    "id": 459,
    "text": "own",
    "phonemes": [
      "OW1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWN",
    "freqScore": 6
  },
  {
    "id": 460,
    "text": "part",
    "phonemes": [
      "P",
      "AA1",
      "R",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AART",
    "freqScore": 6
  },
  {
    "id": 461,
    "text": "people",
    "phonemes": [
      "P",
      "IY1",
      "P",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYPAHL",
    "freqScore": 5
  },
  {
    "id": 462,
    "text": "same",
    "phonemes": [
      "S",
      "EY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYM",
    "freqScore": 6
  },
  {
    "id": 463,
    "text": "seem",
    "phonemes": [
      "S",
      "IY1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYM",
    "freqScore": 6
  },
  {
    "id": 464,
    "text": "side",
    "phonemes": [
      "S",
      "AY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYD",
    "freqScore": 6
  },
  {
    "id": 465,
    "text": "some",
    "phonemes": [
      "S",
      "AH1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHM",
    "freqScore": 6
  },
  {
    "id": 466,
    "text": "such",
    "phonemes": [
      "S",
      "AH1",
      "CH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHCH",
    "freqScore": 6
  },
  {
    "id": 467,
    "text": "tell",
    "phonemes": [
      "T",
      "EH1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHL",
    "freqScore": 6
  },
  {
    "id": 468,
    "text": "than",
    "phonemes": [
      "DH",
      "AE1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEN",
    "freqScore": 6
  },
  {
    "id": 469,
    "text": "thought",
    "phonemes": [
      "TH",
      "AO1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOT",
    "freqScore": 5
  },
  {
    "id": 470,
    "text": "three",
    "phonemes": [
      "TH",
      "R",
      "IY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IY",
    "freqScore": 5
  },
  {
    "id": 471,
    "text": "turn",
    "phonemes": [
      "T",
      "ER1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERN",
    "freqScore": 6
  },
  {
    "id": 472,
    "text": "under",
    "phonemes": [
      "AH1",
      "N",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNDER",
    "freqScore": 5
  },
  {
    "id": 473,
    "text": "until",
    "phonemes": [
      "AH0",
      "N",
      "T",
      "IH1",
      "L"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IHL",
    "freqScore": 5
  },
  {
    "id": 474,
    "text": "very",
    "phonemes": [
      "V",
      "EH1",
      "R",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHRIY",
    "freqScore": 6
  },
  {
    "id": 475,
    "text": "while",
    "phonemes": [
      "W",
      "AY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYL",
    "freqScore": 5
  },
  {
    "id": 476,
    "text": "why",
    "phonemes": [
      "W",
      "AY1"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AY",
    "freqScore": 6
  },
  {
    "id": 477,
    "text": "work",
    "phonemes": [
      "W",
      "ER1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "ERK",
    "freqScore": 6
  },
  {
    "id": 478,
    "text": "years",
    "phonemes": [
      "Y",
      "IH1",
      "R",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHRZ",
    "freqScore": 5
  },
  {
    "id": 479,
    "text": "other",
    "phonemes": [
      "AH1",
      "DH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHDHER",
    "freqScore": 5
  },
  {
    "id": 480,
    "text": "another",
    "phonemes": [
      "AH0",
      "N",
      "AH1",
      "DH",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHDHER",
    "freqScore": 5
  },
  {
    "id": 481,
    "text": "mother",
    "phonemes": [
      "M",
      "AH1",
      "DH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHDHER",
    "freqScore": 5
  },
  {
    "id": 482,
    "text": "father",
    "phonemes": [
      "F",
      "AA1",
      "DH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AADHER",
    "freqScore": 5
  },
  {
    "id": 483,
    "text": "brother",
    "phonemes": [
      "B",
      "R",
      "AH1",
      "DH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHDHER",
    "freqScore": 5
  },
  {
    "id": 484,
    "text": "sister",
    "phonemes": [
      "S",
      "IH1",
      "S",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHSTER",
    "freqScore": 5
  },
  {
    "id": 485,
    "text": "daughter",
    "phonemes": [
      "D",
      "AO1",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOTER",
    "freqScore": 5
  },
  {
    "id": 486,
    "text": "money",
    "phonemes": [
      "M",
      "AH1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNIY",
    "freqScore": 5
  },
  {
    "id": 487,
    "text": "honey",
    "phonemes": [
      "HH",
      "AH1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNIY",
    "freqScore": 5
  },
  {
    "id": 488,
    "text": "funny",
    "phonemes": [
      "F",
      "AH1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNIY",
    "freqScore": 5
  },
  {
    "id": 489,
    "text": "sunny",
    "phonemes": [
      "S",
      "AH1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNIY",
    "freqScore": 5
  },
  {
    "id": 490,
    "text": "baby",
    "phonemes": [
      "B",
      "EY1",
      "B",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYBIY",
    "freqScore": 6
  },
  {
    "id": 491,
    "text": "crazy",
    "phonemes": [
      "K",
      "R",
      "EY1",
      "Z",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYZIY",
    "freqScore": 5
  },
  {
    "id": 492,
    "text": "lazy",
    "phonemes": [
      "L",
      "EY1",
      "Z",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYZIY",
    "freqScore": 6
  },
  {
    "id": 493,
    "text": "city",
    "phonemes": [
      "S",
      "IH1",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHTIY",
    "freqScore": 6
  },
  {
    "id": 494,
    "text": "pretty",
    "phonemes": [
      "P",
      "R",
      "IH1",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHTIY",
    "freqScore": 5
  },
  {
    "id": 495,
    "text": "dirty",
    "phonemes": [
      "D",
      "ER1",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERTIY",
    "freqScore": 5
  },
  {
    "id": 496,
    "text": "party",
    "phonemes": [
      "P",
      "AA1",
      "R",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AARTIY",
    "freqScore": 5
  },
  {
    "id": 497,
    "text": "body",
    "phonemes": [
      "B",
      "AA1",
      "D",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AADIY",
    "freqScore": 6
  },
  {
    "id": 498,
    "text": "ready",
    "phonemes": [
      "R",
      "EH1",
      "D",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHDIY",
    "freqScore": 5
  },
  {
    "id": 499,
    "text": "heavy",
    "phonemes": [
      "HH",
      "EH1",
      "V",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHVIY",
    "freqScore": 5
  },
  {
    "id": 500,
    "text": "empty",
    "phonemes": [
      "EH1",
      "M",
      "P",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHMPTIY",
    "freqScore": 5
  },
  {
    "id": 501,
    "text": "happy",
    "phonemes": [
      "HH",
      "AE1",
      "P",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEPIY",
    "freqScore": 5
  },
  {
    "id": 502,
    "text": "angry",
    "phonemes": [
      "AE1",
      "NG",
      "G",
      "R",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENGGRIY",
    "freqScore": 5
  },
  {
    "id": 503,
    "text": "hungry",
    "phonemes": [
      "HH",
      "AH1",
      "NG",
      "G",
      "R",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNGGRIY",
    "freqScore": 5
  },
  {
    "id": 504,
    "text": "lonely",
    "phonemes": [
      "L",
      "OW1",
      "N",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWNLIY",
    "freqScore": 5
  },
  {
    "id": 505,
    "text": "shadow",
    "phonemes": [
      "SH",
      "AE1",
      "D",
      "OW2"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "OW",
    "freqScore": 5
  },
  {
    "id": 506,
    "text": "window",
    "phonemes": [
      "W",
      "IH1",
      "N",
      "D",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNDOW",
    "freqScore": 5
  },
  {
    "id": 507,
    "text": "follow",
    "phonemes": [
      "F",
      "AA1",
      "L",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AALOW",
    "freqScore": 5
  },
  {
    "id": 508,
    "text": "hollow",
    "phonemes": [
      "HH",
      "AA1",
      "L",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AALOW",
    "freqScore": 5
  },
  {
    "id": 509,
    "text": "sorrow",
    "phonemes": [
      "S",
      "AA1",
      "R",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAROW",
    "freqScore": 5
  },
  {
    "id": 510,
    "text": "borrow",
    "phonemes": [
      "B",
      "AA1",
      "R",
      "OW2"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "OW",
    "freqScore": 5
  },
  {
    "id": 511,
    "text": "river",
    "phonemes": [
      "R",
      "IH1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHVER",
    "freqScore": 5
  },
  {
    "id": 512,
    "text": "silver",
    "phonemes": [
      "S",
      "IH1",
      "L",
      "V",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHLVER",
    "freqScore": 5
  },
  {
    "id": 513,
    "text": "winter",
    "phonemes": [
      "W",
      "IH1",
      "N",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNTER",
    "freqScore": 5
  },
  {
    "id": 514,
    "text": "summer",
    "phonemes": [
      "S",
      "AH1",
      "M",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHMER",
    "freqScore": 5
  },
  {
    "id": 515,
    "text": "thunder",
    "phonemes": [
      "TH",
      "AH1",
      "N",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNDER",
    "freqScore": 5
  },
  {
    "id": 516,
    "text": "wonder",
    "phonemes": [
      "W",
      "AH1",
      "N",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNDER",
    "freqScore": 5
  },
  {
    "id": 517,
    "text": "moment",
    "phonemes": [
      "M",
      "OW1",
      "M",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWMAHNT",
    "freqScore": 5
  },
  {
    "id": 518,
    "text": "silent",
    "phonemes": [
      "S",
      "AY1",
      "L",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYLAHNT",
    "freqScore": 5
  },
  {
    "id": 519,
    "text": "violent",
    "phonemes": [
      "V",
      "AY1",
      "AH0",
      "L",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AYAHLAHNT",
    "freqScore": 5
  },
  {
    "id": 520,
    "text": "patient",
    "phonemes": [
      "P",
      "EY1",
      "SH",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYSHAHNT",
    "freqScore": 5
  },
  {
    "id": 521,
    "text": "ancient",
    "phonemes": [
      "EY1",
      "N",
      "CH",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYNCHAHNT",
    "freqScore": 5
  },
  {
    "id": 522,
    "text": "reason",
    "phonemes": [
      "R",
      "IY1",
      "Z",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYZAHN",
    "freqScore": 5
  },
  {
    "id": 523,
    "text": "season",
    "phonemes": [
      "S",
      "IY1",
      "Z",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYZAHN",
    "freqScore": 5
  },
  {
    "id": 524,
    "text": "prison",
    "phonemes": [
      "P",
      "R",
      "IH1",
      "Z",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHZAHN",
    "freqScore": 5
  },
  {
    "id": 525,
    "text": "poison",
    "phonemes": [
      "P",
      "OY1",
      "Z",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OYZAHN",
    "freqScore": 5
  },
  {
    "id": 526,
    "text": "person",
    "phonemes": [
      "P",
      "ER1",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERSAHN",
    "freqScore": 5
  },
  {
    "id": 527,
    "text": "heaven",
    "phonemes": [
      "HH",
      "EH1",
      "V",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHVAHN",
    "freqScore": 5
  },
  {
    "id": 528,
    "text": "seven",
    "phonemes": [
      "S",
      "EH1",
      "V",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHVAHN",
    "freqScore": 5
  },
  {
    "id": 529,
    "text": "eleven",
    "phonemes": [
      "IH0",
      "L",
      "EH1",
      "V",
      "AH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHVAHN",
    "freqScore": 5
  },
  {
    "id": 530,
    "text": "given",
    "phonemes": [
      "G",
      "IH1",
      "V",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHVAHN",
    "freqScore": 5
  },
  {
    "id": 531,
    "text": "driven",
    "phonemes": [
      "D",
      "R",
      "IH1",
      "V",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHVAHN",
    "freqScore": 5
  },
  {
    "id": 532,
    "text": "forgiven",
    "phonemes": [
      "F",
      "ER0",
      "G",
      "IH1",
      "V",
      "AH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHVAHN",
    "freqScore": 5
  },
  {
    "id": 533,
    "text": "answer",
    "phonemes": [
      "AE1",
      "N",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSER",
    "freqScore": 5
  },
  {
    "id": 534,
    "text": "cancer",
    "phonemes": [
      "K",
      "AE1",
      "N",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSER",
    "freqScore": 5
  },
  {
    "id": 535,
    "text": "dancer",
    "phonemes": [
      "D",
      "AE1",
      "N",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSER",
    "freqScore": 5
  },
  {
    "id": 536,
    "text": "master",
    "phonemes": [
      "M",
      "AE1",
      "S",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AESTER",
    "freqScore": 5
  },
  {
    "id": 537,
    "text": "faster",
    "phonemes": [
      "F",
      "AE1",
      "S",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AESTER",
    "freqScore": 5
  },
  {
    "id": 538,
    "text": "laughter",
    "phonemes": [
      "L",
      "AE1",
      "F",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEFTER",
    "freqScore": 5
  },
  {
    "id": 539,
    "text": "danger",
    "phonemes": [
      "D",
      "EY1",
      "N",
      "JH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYNJHER",
    "freqScore": 5
  },
  {
    "id": 540,
    "text": "stranger",
    "phonemes": [
      "S",
      "T",
      "R",
      "EY1",
      "N",
      "JH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYNJHER",
    "freqScore": 5
  },
  {
    "id": 541,
    "text": "anger",
    "phonemes": [
      "AE1",
      "NG",
      "G",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENGGER",
    "freqScore": 5
  },
  {
    "id": 542,
    "text": "finger",
    "phonemes": [
      "F",
      "IH1",
      "NG",
      "G",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNGGER",
    "freqScore": 5
  },
  {
    "id": 543,
    "text": "singer",
    "phonemes": [
      "S",
      "IH1",
      "NG",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNGER",
    "freqScore": 5
  },
  {
    "id": 544,
    "text": "longer",
    "phonemes": [
      "L",
      "AO1",
      "NG",
      "G",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AONGGER",
    "freqScore": 5
  },
  {
    "id": 545,
    "text": "stronger",
    "phonemes": [
      "S",
      "T",
      "R",
      "AO1",
      "NG",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AONGER",
    "freqScore": 5
  },
  {
    "id": 546,
    "text": "closer",
    "phonemes": [
      "K",
      "L",
      "OW1",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWSER",
    "freqScore": 5
  },
  {
    "id": 547,
    "text": "soldier",
    "phonemes": [
      "S",
      "OW1",
      "L",
      "JH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLJHER",
    "freqScore": 5
  },
  {
    "id": 548,
    "text": "shoulder",
    "phonemes": [
      "SH",
      "OW1",
      "L",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDER",
    "freqScore": 5
  },
  {
    "id": 549,
    "text": "older",
    "phonemes": [
      "OW1",
      "L",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDER",
    "freqScore": 5
  },
  {
    "id": 550,
    "text": "colder",
    "phonemes": [
      "K",
      "OW1",
      "L",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDER",
    "freqScore": 5
  },
  {
    "id": 551,
    "text": "bolder",
    "phonemes": [
      "B",
      "OW1",
      "L",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDER",
    "freqScore": 5
  },
  {
    "id": 552,
    "text": "binfield",
    "phonemes": [
      "B",
      "IH1",
      "N",
      "F",
      "IY2",
      "L",
      "D"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "IYLD",
    "freqScore": 5
  },
  {
    "id": 553,
    "text": "fool's",
    "phonemes": [
      "F",
      "UW1",
      "L",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWLZ",
    "freqScore": 5
  },
  {
    "id": 554,
    "text": "pancake",
    "phonemes": [
      "P",
      "AE1",
      "N",
      "K",
      "EY2",
      "K"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EYK",
    "freqScore": 5
  },
  {
    "id": 555,
    "text": "fitz",
    "phonemes": [
      "F",
      "IH1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHTS",
    "freqScore": 6
  },
  {
    "id": 556,
    "text": "fineran",
    "phonemes": [
      "F",
      "IH1",
      "N",
      "ER0",
      "AE0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHNERAEN",
    "freqScore": 5
  },
  {
    "id": 557,
    "text": "ibrahim",
    "phonemes": [
      "IH2",
      "B",
      "R",
      "AA0",
      "HH",
      "IY1",
      "M"
    ],
    "stressPattern": [
      2,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "IYM",
    "freqScore": 5
  },
  {
    "id": 558,
    "text": "axis",
    "phonemes": [
      "AE1",
      "K",
      "S",
      "AH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEKSAHS",
    "freqScore": 6
  },
  {
    "id": 559,
    "text": "contentions",
    "phonemes": [
      "K",
      "AH0",
      "N",
      "T",
      "EH1",
      "N",
      "SH",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNSHAHNZ",
    "freqScore": 5
  },
  {
    "id": 560,
    "text": "antwine",
    "phonemes": [
      "AE1",
      "N",
      "T",
      "W",
      "AY2",
      "N"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AYN",
    "freqScore": 5
  },
  {
    "id": 561,
    "text": "dixson",
    "phonemes": [
      "D",
      "IH1",
      "K",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHKSAHN",
    "freqScore": 5
  },
  {
    "id": 562,
    "text": "abkhazian",
    "phonemes": [
      "AE0",
      "B",
      "K",
      "AA1",
      "Z",
      "IY0",
      "AH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AAZIYAHN",
    "freqScore": 5
  },
  {
    "id": 563,
    "text": "analyzing",
    "phonemes": [
      "AE1",
      "N",
      "AH0",
      "L",
      "AY2",
      "Z",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AYZIHNG",
    "freqScore": 5
  },
  {
    "id": 564,
    "text": "gravest",
    "phonemes": [
      "G",
      "R",
      "AE1",
      "V",
      "AH0",
      "S",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEVAHST",
    "freqScore": 5
  },
  {
    "id": 565,
    "text": "fimbres",
    "phonemes": [
      "F",
      "IH1",
      "M",
      "B",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHMBERZ",
    "freqScore": 5
  },
  {
    "id": 566,
    "text": "akre",
    "phonemes": [
      "AE1",
      "K",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEKER",
    "freqScore": 6
  },
  {
    "id": 567,
    "text": "amniotic",
    "phonemes": [
      "AE1",
      "M",
      "N",
      "IY0",
      "AO0",
      "T",
      "IH0",
      "K"
    ],
    "stressPattern": [
      1,
      0,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AEMNIYAOTIHK",
    "freqScore": 5
  },
  {
    "id": 568,
    "text": "hobby",
    "phonemes": [
      "HH",
      "AA1",
      "B",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AABIY",
    "freqScore": 5
  },
  {
    "id": 569,
    "text": "aldrin's",
    "phonemes": [
      "AO1",
      "L",
      "D",
      "R",
      "IH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOLDRIHNZ",
    "freqScore": 5
  },
  {
    "id": 570,
    "text": "hogberg",
    "phonemes": [
      "HH",
      "AA1",
      "G",
      "B",
      "ER0",
      "G"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAGBERG",
    "freqScore": 5
  },
  {
    "id": 571,
    "text": "karol",
    "phonemes": [
      "K",
      "EH1",
      "R",
      "AO0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHRAOL",
    "freqScore": 5
  },
  {
    "id": 572,
    "text": "corsair",
    "phonemes": [
      "K",
      "AO1",
      "R",
      "S",
      "EH0",
      "R"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AORSEHR",
    "freqScore": 5
  },
  {
    "id": 573,
    "text": "acer",
    "phonemes": [
      "EY1",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYSER",
    "freqScore": 6
  },
  {
    "id": 574,
    "text": "antkowiak",
    "phonemes": [
      "AH0",
      "N",
      "T",
      "K",
      "AW1",
      "IY0",
      "AE0",
      "K"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AWIYAEK",
    "freqScore": 5
  },
  {
    "id": 575,
    "text": "koeki",
    "phonemes": [
      "K",
      "OW1",
      "K",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWKIY",
    "freqScore": 5
  },
  {
    "id": 576,
    "text": "car's",
    "phonemes": [
      "K",
      "AA1",
      "R",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AARZ",
    "freqScore": 5
  },
  {
    "id": 577,
    "text": "calverley",
    "phonemes": [
      "K",
      "AE1",
      "L",
      "V",
      "ER0",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AELVERLIY",
    "freqScore": 5
  },
  {
    "id": 578,
    "text": "klauser",
    "phonemes": [
      "K",
      "L",
      "AW1",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AWSER",
    "freqScore": 5
  },
  {
    "id": 579,
    "text": "hodgepodge",
    "phonemes": [
      "HH",
      "AA1",
      "JH",
      "P",
      "AA2",
      "JH"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AAJH",
    "freqScore": 5
  },
  {
    "id": 580,
    "text": "accutane",
    "phonemes": [
      "AE1",
      "K",
      "Y",
      "UW0",
      "T",
      "EY2",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EYN",
    "freqScore": 5
  },
  {
    "id": 581,
    "text": "homages",
    "phonemes": [
      "AA1",
      "M",
      "AH0",
      "JH",
      "AH0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AAMAHJHAHZ",
    "freqScore": 5
  },
  {
    "id": 582,
    "text": "carolinian",
    "phonemes": [
      "K",
      "EH2",
      "R",
      "OW0",
      "L",
      "IH1",
      "N",
      "IY0",
      "AH0",
      "N"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "IHNIYAHN",
    "freqScore": 5
  },
  {
    "id": 583,
    "text": "fillies",
    "phonemes": [
      "F",
      "IH1",
      "L",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHLIYZ",
    "freqScore": 5
  },
  {
    "id": 584,
    "text": "filice",
    "phonemes": [
      "F",
      "IY1",
      "L",
      "IH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYLIHS",
    "freqScore": 5
  },
  {
    "id": 585,
    "text": "governess",
    "phonemes": [
      "G",
      "AH1",
      "V",
      "ER0",
      "N",
      "AH0",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHVERNAHS",
    "freqScore": 5
  },
  {
    "id": 586,
    "text": "jonbenet's",
    "phonemes": [
      "JH",
      "AO1",
      "N",
      "B",
      "AH0",
      "N",
      "EY1",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "EYS",
    "freqScore": 5
  },
  {
    "id": 587,
    "text": "abaco",
    "phonemes": [
      "AE1",
      "B",
      "AH0",
      "K",
      "OW2"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "OW",
    "freqScore": 5
  },
  {
    "id": 588,
    "text": "fieser",
    "phonemes": [
      "F",
      "IY1",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYSER",
    "freqScore": 5
  },
  {
    "id": 589,
    "text": "jaymes",
    "phonemes": [
      "JH",
      "EY1",
      "M",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYMIYZ",
    "freqScore": 5
  },
  {
    "id": 590,
    "text": "capell",
    "phonemes": [
      "K",
      "AA0",
      "P",
      "EY1",
      "L"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EYL",
    "freqScore": 5
  },
  {
    "id": 591,
    "text": "abridging",
    "phonemes": [
      "AH0",
      "B",
      "R",
      "IH1",
      "JH",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHJHIHNG",
    "freqScore": 5
  },
  {
    "id": 592,
    "text": "ansa",
    "phonemes": [
      "AE1",
      "N",
      "S",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSAH",
    "freqScore": 6
  },
  {
    "id": 593,
    "text": "demeaned",
    "phonemes": [
      "D",
      "IH0",
      "M",
      "IY1",
      "N",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IYND",
    "freqScore": 5
  },
  {
    "id": 594,
    "text": "hindman",
    "phonemes": [
      "HH",
      "AY1",
      "N",
      "D",
      "M",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYNDMAHN",
    "freqScore": 5
  },
  {
    "id": 595,
    "text": "hotze",
    "phonemes": [
      "HH",
      "OW1",
      "T",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWTZ",
    "freqScore": 5
  },
  {
    "id": 596,
    "text": "cariker",
    "phonemes": [
      "K",
      "AE1",
      "R",
      "IH0",
      "K",
      "ER0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AERIHKER",
    "freqScore": 5
  },
  {
    "id": 597,
    "text": "analysis",
    "phonemes": [
      "AH0",
      "N",
      "AE1",
      "L",
      "AH0",
      "S",
      "AH0",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AELAHSAHS",
    "freqScore": 5
  },
  {
    "id": 598,
    "text": "curators",
    "phonemes": [
      "K",
      "Y",
      "UH1",
      "R",
      "AH0",
      "T",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "UHRAHTERZ",
    "freqScore": 5
  },
  {
    "id": 599,
    "text": "crypto",
    "phonemes": [
      "K",
      "R",
      "IH1",
      "P",
      "T",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHPTOW",
    "freqScore": 5
  },
  {
    "id": 600,
    "text": "catheters",
    "phonemes": [
      "K",
      "AE1",
      "TH",
      "AH0",
      "T",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AETHAHTERZ",
    "freqScore": 5
  },
  {
    "id": 601,
    "text": "goeser",
    "phonemes": [
      "G",
      "OW1",
      "Z",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWZER",
    "freqScore": 5
  },
  {
    "id": 602,
    "text": "hewell",
    "phonemes": [
      "HH",
      "EH1",
      "W",
      "EH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHWEHL",
    "freqScore": 5
  },
  {
    "id": 603,
    "text": "analogies",
    "phonemes": [
      "AH0",
      "N",
      "AE1",
      "L",
      "AH0",
      "JH",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AELAHJHIYZ",
    "freqScore": 5
  },
  {
    "id": 604,
    "text": "casciato",
    "phonemes": [
      "K",
      "AA0",
      "S",
      "CH",
      "AA1",
      "T",
      "OW0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AATOW",
    "freqScore": 5
  },
  {
    "id": 605,
    "text": "hodnett",
    "phonemes": [
      "HH",
      "AA1",
      "D",
      "N",
      "IH0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AADNIHT",
    "freqScore": 5
  },
  {
    "id": 606,
    "text": "hochmuth",
    "phonemes": [
      "HH",
      "AA1",
      "K",
      "M",
      "UW2",
      "TH"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "UWTH",
    "freqScore": 5
  },
  {
    "id": 607,
    "text": "holm",
    "phonemes": [
      "HH",
      "OW1",
      "M"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWM",
    "freqScore": 6
  },
  {
    "id": 608,
    "text": "holders'",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "D",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDERZ",
    "freqScore": 5
  },
  {
    "id": 609,
    "text": "fiers",
    "phonemes": [
      "F",
      "IY1",
      "R",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYRZ",
    "freqScore": 5
  },
  {
    "id": 610,
    "text": "koetter",
    "phonemes": [
      "K",
      "OW1",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWTER",
    "freqScore": 5
  },
  {
    "id": 611,
    "text": "hopscotch",
    "phonemes": [
      "HH",
      "AA1",
      "P",
      "S",
      "K",
      "AA2",
      "CH"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AACH",
    "freqScore": 5
  },
  {
    "id": 612,
    "text": "currens",
    "phonemes": [
      "K",
      "ER1",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERAHNZ",
    "freqScore": 5
  },
  {
    "id": 613,
    "text": "fights",
    "phonemes": [
      "F",
      "AY1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYTS",
    "freqScore": 5
  },
  {
    "id": 614,
    "text": "calista",
    "phonemes": [
      "K",
      "AH0",
      "L",
      "IH1",
      "S",
      "T",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHSTAH",
    "freqScore": 5
  },
  {
    "id": 615,
    "text": "dangling",
    "phonemes": [
      "D",
      "AE1",
      "NG",
      "G",
      "AH0",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENGGAHLIHNG",
    "freqScore": 5
  },
  {
    "id": 616,
    "text": "fieldwork",
    "phonemes": [
      "F",
      "IY1",
      "L",
      "D",
      "W",
      "ER2",
      "K"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "ERK",
    "freqScore": 5
  },
  {
    "id": 617,
    "text": "abound",
    "phonemes": [
      "AH0",
      "B",
      "AW1",
      "N",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AWND",
    "freqScore": 5
  },
  {
    "id": 618,
    "text": "isomers",
    "phonemes": [
      "AY1",
      "S",
      "AH0",
      "M",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AYSAHMERZ",
    "freqScore": 5
  },
  {
    "id": 619,
    "text": "filings",
    "phonemes": [
      "F",
      "AY1",
      "L",
      "IH0",
      "NG",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYLIHNGZ",
    "freqScore": 5
  },
  {
    "id": 620,
    "text": "define",
    "phonemes": [
      "D",
      "IH0",
      "F",
      "AY1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYN",
    "freqScore": 5
  },
  {
    "id": 621,
    "text": "darnel",
    "phonemes": [
      "D",
      "AA1",
      "R",
      "N",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AARNAHL",
    "freqScore": 5
  },
  {
    "id": 622,
    "text": "annulment",
    "phonemes": [
      "AE1",
      "N",
      "AH0",
      "L",
      "M",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENAHLMAHNT",
    "freqScore": 5
  },
  {
    "id": 623,
    "text": "austrian",
    "phonemes": [
      "AO1",
      "S",
      "T",
      "R",
      "IY0",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AOSTRIYAHN",
    "freqScore": 5
  },
  {
    "id": 624,
    "text": "honorarium",
    "phonemes": [
      "AA2",
      "N",
      "ER0",
      "EH1",
      "R",
      "IY0",
      "AH0",
      "M"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "EHRIYAHM",
    "freqScore": 5
  },
  {
    "id": 625,
    "text": "gloriana",
    "phonemes": [
      "G",
      "L",
      "AO2",
      "R",
      "IY0",
      "AE1",
      "N",
      "AH0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AENAH",
    "freqScore": 5
  },
  {
    "id": 626,
    "text": "geochemistry",
    "phonemes": [
      "JH",
      "IY2",
      "OW0",
      "K",
      "EH1",
      "M",
      "AH0",
      "S",
      "T",
      "R",
      "IY0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "EHMAHSTRIY",
    "freqScore": 5
  },
  {
    "id": 627,
    "text": "filipowicz",
    "phonemes": [
      "F",
      "IH0",
      "L",
      "IH1",
      "P",
      "AH0",
      "V",
      "IH0",
      "CH"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IHPAHVIHCH",
    "freqScore": 5
  },
  {
    "id": 628,
    "text": "coudert",
    "phonemes": [
      "K",
      "UW1",
      "D",
      "ER0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UWDERT",
    "freqScore": 5
  },
  {
    "id": 629,
    "text": "catty",
    "phonemes": [
      "K",
      "AE1",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AETIY",
    "freqScore": 5
  },
  {
    "id": 630,
    "text": "gargis",
    "phonemes": [
      "G",
      "AA1",
      "R",
      "G",
      "IH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AARGIHS",
    "freqScore": 5
  },
  {
    "id": 631,
    "text": "holguin",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "G",
      "IH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLGIHN",
    "freqScore": 5
  },
  {
    "id": 632,
    "text": "klingons",
    "phonemes": [
      "K",
      "L",
      "IH1",
      "NG",
      "G",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNGGAHNZ",
    "freqScore": 5
  },
  {
    "id": 633,
    "text": "cales",
    "phonemes": [
      "K",
      "EY1",
      "L",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYLZ",
    "freqScore": 5
  },
  {
    "id": 634,
    "text": "autoeurope",
    "phonemes": [
      "AO2",
      "T",
      "OW0",
      "Y",
      "UH1",
      "R",
      "AH0",
      "P"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "UHRAHP",
    "freqScore": 5
  },
  {
    "id": 635,
    "text": "deleterious",
    "phonemes": [
      "D",
      "EH2",
      "L",
      "AH0",
      "T",
      "IH1",
      "R",
      "IY0",
      "AH0",
      "S"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "IHRIYAHS",
    "freqScore": 5
  },
  {
    "id": 636,
    "text": "alleyway",
    "phonemes": [
      "AE1",
      "L",
      "IY0",
      "W",
      "EY2"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EY",
    "freqScore": 5
  },
  {
    "id": 637,
    "text": "assumption",
    "phonemes": [
      "AH0",
      "S",
      "AH1",
      "M",
      "P",
      "SH",
      "AH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHMPSHAHN",
    "freqScore": 5
  },
  {
    "id": 638,
    "text": "intifada",
    "phonemes": [
      "IH2",
      "N",
      "T",
      "IH0",
      "F",
      "AA1",
      "D",
      "AH0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AADAH",
    "freqScore": 5
  },
  {
    "id": 639,
    "text": "centimeter",
    "phonemes": [
      "S",
      "EH1",
      "N",
      "T",
      "AH0",
      "M",
      "IY2",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IYTER",
    "freqScore": 5
  },
  {
    "id": 640,
    "text": "crisis",
    "phonemes": [
      "K",
      "R",
      "AY1",
      "S",
      "AH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYSAHS",
    "freqScore": 5
  },
  {
    "id": 641,
    "text": "grapevine",
    "phonemes": [
      "G",
      "R",
      "EY1",
      "P",
      "V",
      "AY2",
      "N"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AYN",
    "freqScore": 5
  },
  {
    "id": 642,
    "text": "centrella",
    "phonemes": [
      "S",
      "EH2",
      "N",
      "T",
      "R",
      "EH1",
      "L",
      "AH0"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHLAH",
    "freqScore": 5
  },
  {
    "id": 643,
    "text": "colorless",
    "phonemes": [
      "K",
      "AH1",
      "L",
      "ER0",
      "L",
      "AH0",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHLERLAHS",
    "freqScore": 5
  },
  {
    "id": 644,
    "text": "hootman",
    "phonemes": [
      "HH",
      "UW1",
      "T",
      "M",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UWTMAHN",
    "freqScore": 5
  },
  {
    "id": 645,
    "text": "kluesner",
    "phonemes": [
      "K",
      "L",
      "UH1",
      "S",
      "N",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UHSNER",
    "freqScore": 5
  },
  {
    "id": 646,
    "text": "hodgens",
    "phonemes": [
      "HH",
      "AA1",
      "JH",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAJHAHNZ",
    "freqScore": 5
  },
  {
    "id": 647,
    "text": "gaza",
    "phonemes": [
      "G",
      "AA1",
      "Z",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAZAH",
    "freqScore": 6
  },
  {
    "id": 648,
    "text": "intercepting",
    "phonemes": [
      "IH2",
      "N",
      "T",
      "ER0",
      "S",
      "EH1",
      "P",
      "T",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHPTIHNG",
    "freqScore": 5
  },
  {
    "id": 649,
    "text": "insulator",
    "phonemes": [
      "IH1",
      "N",
      "S",
      "AH0",
      "L",
      "EY2",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYTER",
    "freqScore": 5
  },
  {
    "id": 650,
    "text": "alibrandi",
    "phonemes": [
      "AE2",
      "L",
      "IH0",
      "B",
      "R",
      "AE1",
      "N",
      "D",
      "IY0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AENDIY",
    "freqScore": 5
  },
  {
    "id": 651,
    "text": "carls",
    "phonemes": [
      "K",
      "AA1",
      "R",
      "L",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AARLZ",
    "freqScore": 5
  },
  {
    "id": 652,
    "text": "anaesthesia",
    "phonemes": [
      "AE2",
      "N",
      "AH0",
      "S",
      "TH",
      "IY1",
      "ZH",
      "AH0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IYZHAH",
    "freqScore": 5
  },
  {
    "id": 653,
    "text": "hecla's",
    "phonemes": [
      "HH",
      "EH1",
      "K",
      "L",
      "AH0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHKLAHZ",
    "freqScore": 5
  },
  {
    "id": 654,
    "text": "kesten",
    "phonemes": [
      "K",
      "EH1",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHSAHN",
    "freqScore": 5
  },
  {
    "id": 655,
    "text": "computalog",
    "phonemes": [
      "K",
      "AA1",
      "M",
      "P",
      "Y",
      "UW0",
      "T",
      "AE2",
      "L",
      "AO0",
      "G"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AELAOG",
    "freqScore": 5
  },
  {
    "id": 656,
    "text": "genres",
    "phonemes": [
      "ZH",
      "AA1",
      "N",
      "R",
      "AH0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AANRAHZ",
    "freqScore": 5
  },
  {
    "id": 657,
    "text": "gunpowder",
    "phonemes": [
      "G",
      "AH1",
      "N",
      "P",
      "AW2",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AWDER",
    "freqScore": 5
  },
  {
    "id": 658,
    "text": "glued",
    "phonemes": [
      "G",
      "L",
      "UW1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UWD",
    "freqScore": 5
  },
  {
    "id": 659,
    "text": "atlan",
    "phonemes": [
      "AE1",
      "T",
      "L",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AETLAHN",
    "freqScore": 5
  },
  {
    "id": 660,
    "text": "grub",
    "phonemes": [
      "G",
      "R",
      "AH1",
      "B"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHB",
    "freqScore": 6
  },
  {
    "id": 661,
    "text": "gravity",
    "phonemes": [
      "G",
      "R",
      "AE1",
      "V",
      "AH0",
      "T",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AEVAHTIY",
    "freqScore": 5
  },
  {
    "id": 662,
    "text": "chatroom",
    "phonemes": [
      "CH",
      "AE1",
      "T",
      "R",
      "UW2",
      "M"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "UWM",
    "freqScore": 5
  },
  {
    "id": 663,
    "text": "intending",
    "phonemes": [
      "IH2",
      "N",
      "T",
      "EH1",
      "N",
      "D",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNDIHNG",
    "freqScore": 5
  },
  {
    "id": 664,
    "text": "kroeker",
    "phonemes": [
      "K",
      "R",
      "OW1",
      "K",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWKER",
    "freqScore": 5
  },
  {
    "id": 665,
    "text": "auster",
    "phonemes": [
      "AO1",
      "S",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOSTER",
    "freqScore": 5
  },
  {
    "id": 666,
    "text": "froese",
    "phonemes": [
      "F",
      "R",
      "OW1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWS",
    "freqScore": 5
  },
  {
    "id": 667,
    "text": "greeniaus",
    "phonemes": [
      "G",
      "R",
      "IY1",
      "N",
      "IY0",
      "AW0",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYNIYAWS",
    "freqScore": 5
  },
  {
    "id": 668,
    "text": "angolan",
    "phonemes": [
      "AE1",
      "NG",
      "G",
      "OW0",
      "L",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENGGOWLAHN",
    "freqScore": 5
  },
  {
    "id": 669,
    "text": "griffis",
    "phonemes": [
      "G",
      "R",
      "IH1",
      "F",
      "IH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHFIHS",
    "freqScore": 5
  },
  {
    "id": 670,
    "text": "gelernter",
    "phonemes": [
      "G",
      "AH0",
      "L",
      "ER1",
      "N",
      "T",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "ERNTER",
    "freqScore": 5
  },
  {
    "id": 671,
    "text": "guba's",
    "phonemes": [
      "G",
      "Y",
      "UW1",
      "B",
      "AH0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UWBAHZ",
    "freqScore": 5
  },
  {
    "id": 672,
    "text": "amuse",
    "phonemes": [
      "AH0",
      "M",
      "Y",
      "UW1",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "UWZ",
    "freqScore": 5
  },
  {
    "id": 673,
    "text": "crooke",
    "phonemes": [
      "K",
      "R",
      "UH1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "UHK",
    "freqScore": 5
  },
  {
    "id": 674,
    "text": "heafner",
    "phonemes": [
      "HH",
      "IY1",
      "F",
      "N",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYFNER",
    "freqScore": 5
  },
  {
    "id": 675,
    "text": "cunnane",
    "phonemes": [
      "K",
      "AH1",
      "N",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHNAHN",
    "freqScore": 5
  },
  {
    "id": 676,
    "text": "andreassen",
    "phonemes": [
      "AE1",
      "N",
      "D",
      "R",
      "AH0",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENDRAHSAHN",
    "freqScore": 5
  },
  {
    "id": 677,
    "text": "deffenbaugh",
    "phonemes": [
      "D",
      "EH1",
      "F",
      "IH0",
      "N",
      "B",
      "AW0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHFIHNBAW",
    "freqScore": 5
  },
  {
    "id": 678,
    "text": "frerking",
    "phonemes": [
      "F",
      "R",
      "ER1",
      "K",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERKIHNG",
    "freqScore": 5
  },
  {
    "id": 679,
    "text": "abortions",
    "phonemes": [
      "AH0",
      "B",
      "AO1",
      "R",
      "SH",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AORSHAHNZ",
    "freqScore": 5
  },
  {
    "id": 680,
    "text": "jaeckel",
    "phonemes": [
      "Y",
      "EH1",
      "K",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHKAHL",
    "freqScore": 5
  },
  {
    "id": 681,
    "text": "filenet",
    "phonemes": [
      "F",
      "AY1",
      "L",
      "N",
      "EH2",
      "T"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EHT",
    "freqScore": 5
  },
  {
    "id": 682,
    "text": "alamo",
    "phonemes": [
      "AE1",
      "L",
      "AH0",
      "M",
      "OW0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AELAHMOW",
    "freqScore": 5
  },
  {
    "id": 683,
    "text": "dees",
    "phonemes": [
      "D",
      "IY1",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYZ",
    "freqScore": 6
  },
  {
    "id": 684,
    "text": "goyette",
    "phonemes": [
      "G",
      "OY2",
      "EH1",
      "T"
    ],
    "stressPattern": [
      2,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHT",
    "freqScore": 5
  },
  {
    "id": 685,
    "text": "counterfeits",
    "phonemes": [
      "K",
      "AW1",
      "N",
      "T",
      "ER0",
      "F",
      "IH2",
      "T",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "IHTS",
    "freqScore": 5
  },
  {
    "id": 686,
    "text": "holshouser",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "S",
      "HH",
      "AW2",
      "S",
      "ER0"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AWSER",
    "freqScore": 5
  },
  {
    "id": 687,
    "text": "heed",
    "phonemes": [
      "HH",
      "IY1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYD",
    "freqScore": 6
  },
  {
    "id": 688,
    "text": "absurd",
    "phonemes": [
      "AH0",
      "B",
      "S",
      "ER1",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "ERD",
    "freqScore": 5
  },
  {
    "id": 689,
    "text": "fillingame",
    "phonemes": [
      "F",
      "IY0",
      "L",
      "IH0",
      "NG",
      "G",
      "AA1",
      "M",
      "IY0"
    ],
    "stressPattern": [
      0,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AAMIY",
    "freqScore": 5
  },
  {
    "id": 690,
    "text": "garceau",
    "phonemes": [
      "G",
      "AA0",
      "R",
      "S",
      "OW1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "OW",
    "freqScore": 5
  },
  {
    "id": 691,
    "text": "complemented",
    "phonemes": [
      "K",
      "AA1",
      "M",
      "P",
      "L",
      "AH0",
      "M",
      "EH2",
      "N",
      "T",
      "IH0",
      "D"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHNTIHD",
    "freqScore": 5
  },
  {
    "id": 692,
    "text": "credeur",
    "phonemes": [
      "K",
      "R",
      "IH0",
      "D",
      "ER1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "ER",
    "freqScore": 5
  },
  {
    "id": 693,
    "text": "angert",
    "phonemes": [
      "EY1",
      "NG",
      "G",
      "ER0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYNGGERT",
    "freqScore": 5
  },
  {
    "id": 694,
    "text": "kline",
    "phonemes": [
      "K",
      "L",
      "AY1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYN",
    "freqScore": 5
  },
  {
    "id": 695,
    "text": "glistening",
    "phonemes": [
      "G",
      "L",
      "IH1",
      "S",
      "AH0",
      "N",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHSAHNIHNG",
    "freqScore": 5
  },
  {
    "id": 696,
    "text": "absolom",
    "phonemes": [
      "AE1",
      "B",
      "S",
      "AH0",
      "L",
      "AH0",
      "M"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AEBSAHLAHM",
    "freqScore": 5
  },
  {
    "id": 697,
    "text": "deigned",
    "phonemes": [
      "D",
      "EY1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYND",
    "freqScore": 5
  },
  {
    "id": 698,
    "text": "complacently",
    "phonemes": [
      "K",
      "AH0",
      "M",
      "P",
      "L",
      "EY1",
      "S",
      "AH0",
      "N",
      "T",
      "L",
      "IY0"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYSAHNTLIY",
    "freqScore": 5
  },
  {
    "id": 699,
    "text": "hesheng",
    "phonemes": [
      "HH",
      "EH1",
      "SH",
      "EH1",
      "NG"
    ],
    "stressPattern": [
      1,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNG",
    "freqScore": 5
  },
  {
    "id": 700,
    "text": "dilated",
    "phonemes": [
      "D",
      "AY2",
      "L",
      "EY1",
      "T",
      "IH0",
      "D"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYTIHD",
    "freqScore": 5
  },
  {
    "id": 701,
    "text": "adar",
    "phonemes": [
      "AH0",
      "D",
      "AA1",
      "R"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AAR",
    "freqScore": 6
  },
  {
    "id": 702,
    "text": "kerala",
    "phonemes": [
      "K",
      "EH2",
      "R",
      "AA1",
      "L",
      "AH0"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AALAH",
    "freqScore": 5
  },
  {
    "id": 703,
    "text": "asta",
    "phonemes": [
      "AA1",
      "S",
      "T",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AASTAH",
    "freqScore": 6
  },
  {
    "id": 704,
    "text": "indignation",
    "phonemes": [
      "IH2",
      "N",
      "D",
      "IH0",
      "G",
      "N",
      "EY1",
      "SH",
      "AH0",
      "N"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYSHAHN",
    "freqScore": 5
  },
  {
    "id": 705,
    "text": "atworth",
    "phonemes": [
      "AE1",
      "T",
      "W",
      "ER0",
      "TH"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AETWERTH",
    "freqScore": 5
  },
  {
    "id": 706,
    "text": "groep",
    "phonemes": [
      "G",
      "R",
      "OW1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "OWP",
    "freqScore": 5
  },
  {
    "id": 707,
    "text": "hallahan",
    "phonemes": [
      "HH",
      "AE1",
      "L",
      "AH0",
      "HH",
      "AE0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AELAHHHAEN",
    "freqScore": 5
  },
  {
    "id": 708,
    "text": "hoover",
    "phonemes": [
      "HH",
      "UW1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UWVER",
    "freqScore": 5
  },
  {
    "id": 709,
    "text": "inconsistent",
    "phonemes": [
      "IH2",
      "N",
      "K",
      "AH0",
      "N",
      "S",
      "IH1",
      "S",
      "T",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IHSTAHNT",
    "freqScore": 5
  },
  {
    "id": 710,
    "text": "holder's",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "D",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDERZ",
    "freqScore": 5
  },
  {
    "id": 711,
    "text": "hiring",
    "phonemes": [
      "HH",
      "AY1",
      "R",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYRIHNG",
    "freqScore": 5
  },
  {
    "id": 712,
    "text": "accent",
    "phonemes": [
      "AH0",
      "K",
      "S",
      "EH1",
      "N",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNT",
    "freqScore": 5
  },
  {
    "id": 713,
    "text": "ansell",
    "phonemes": [
      "AE1",
      "N",
      "S",
      "EH2",
      "L"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EHL",
    "freqScore": 5
  },
  {
    "id": 714,
    "text": "corcoran",
    "phonemes": [
      "K",
      "AO1",
      "R",
      "K",
      "ER0",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AORKERAHN",
    "freqScore": 5
  },
  {
    "id": 715,
    "text": "capillaries",
    "phonemes": [
      "K",
      "AE1",
      "P",
      "AH0",
      "L",
      "EH2",
      "R",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHRIYZ",
    "freqScore": 5
  },
  {
    "id": 716,
    "text": "kohlbeck",
    "phonemes": [
      "K",
      "OW1",
      "L",
      "B",
      "EH2",
      "K"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EHK",
    "freqScore": 5
  },
  {
    "id": 717,
    "text": "holiest",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "IY0",
      "IH0",
      "S",
      "T"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "OWLIYIHST",
    "freqScore": 5
  },
  {
    "id": 718,
    "text": "holden",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "D",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLDAHN",
    "freqScore": 5
  },
  {
    "id": 719,
    "text": "dias",
    "phonemes": [
      "D",
      "AY1",
      "AH0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYAHZ",
    "freqScore": 6
  },
  {
    "id": 720,
    "text": "crept",
    "phonemes": [
      "K",
      "R",
      "EH1",
      "P",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHPT",
    "freqScore": 5
  },
  {
    "id": 721,
    "text": "deepens",
    "phonemes": [
      "D",
      "IY1",
      "P",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYPAHNZ",
    "freqScore": 5
  },
  {
    "id": 722,
    "text": "aboveboard",
    "phonemes": [
      "AH0",
      "B",
      "AH1",
      "V",
      "B",
      "AO2",
      "R",
      "D"
    ],
    "stressPattern": [
      0,
      1,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AORD",
    "freqScore": 5
  },
  {
    "id": 723,
    "text": "freelancing",
    "phonemes": [
      "F",
      "R",
      "IY1",
      "L",
      "AE2",
      "N",
      "S",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENSIHNG",
    "freqScore": 5
  },
  {
    "id": 724,
    "text": "compiles",
    "phonemes": [
      "K",
      "AH0",
      "M",
      "P",
      "AY1",
      "L",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AYLZ",
    "freqScore": 5
  },
  {
    "id": 725,
    "text": "deedrick",
    "phonemes": [
      "D",
      "IY1",
      "D",
      "R",
      "IH0",
      "K"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYDRIHK",
    "freqScore": 5
  },
  {
    "id": 726,
    "text": "zaske",
    "phonemes": [
      "Z",
      "EY1",
      "S",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EYSK",
    "freqScore": 5
  },
  {
    "id": 727,
    "text": "alfie",
    "phonemes": [
      "AE1",
      "L",
      "F",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AELFIY",
    "freqScore": 5
  },
  {
    "id": 728,
    "text": "lanyard",
    "phonemes": [
      "L",
      "AE1",
      "N",
      "Y",
      "ER0",
      "D"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENYERD",
    "freqScore": 5
  },
  {
    "id": 729,
    "text": "millar",
    "phonemes": [
      "M",
      "IH1",
      "L",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHLER",
    "freqScore": 5
  },
  {
    "id": 730,
    "text": "leiken",
    "phonemes": [
      "L",
      "AY1",
      "K",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYKAHN",
    "freqScore": 5
  },
  {
    "id": 731,
    "text": "gennett",
    "phonemes": [
      "JH",
      "EH1",
      "N",
      "IH0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNIHT",
    "freqScore": 5
  },
  {
    "id": 732,
    "text": "jeanpierre",
    "phonemes": [
      "ZH",
      "AO0",
      "N",
      "P",
      "IY0",
      "EH1",
      "R"
    ],
    "stressPattern": [
      0,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "EHR",
    "freqScore": 5
  },
  {
    "id": 733,
    "text": "jarnigan",
    "phonemes": [
      "JH",
      "AA1",
      "R",
      "N",
      "IH0",
      "G",
      "AE0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AARNIHGAEN",
    "freqScore": 5
  },
  {
    "id": 734,
    "text": "fila",
    "phonemes": [
      "F",
      "AY1",
      "L",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYLAH",
    "freqScore": 6
  },
  {
    "id": 735,
    "text": "competitors'",
    "phonemes": [
      "K",
      "AH0",
      "M",
      "P",
      "EH1",
      "T",
      "IH0",
      "T",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHTIHTERZ",
    "freqScore": 5
  },
  {
    "id": 736,
    "text": "marston",
    "phonemes": [
      "M",
      "AA1",
      "R",
      "S",
      "T",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AARSTAHN",
    "freqScore": 5
  },
  {
    "id": 737,
    "text": "lazily",
    "phonemes": [
      "L",
      "AE1",
      "Z",
      "AH0",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AEZAHLIY",
    "freqScore": 5
  },
  {
    "id": 738,
    "text": "nighter",
    "phonemes": [
      "N",
      "AY1",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYTER",
    "freqScore": 5
  },
  {
    "id": 739,
    "text": "klopp",
    "phonemes": [
      "K",
      "L",
      "AA1",
      "P"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAP",
    "freqScore": 5
  },
  {
    "id": 740,
    "text": "lanny",
    "phonemes": [
      "L",
      "AE1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENIY",
    "freqScore": 5
  },
  {
    "id": 741,
    "text": "frewen",
    "phonemes": [
      "F",
      "R",
      "UW1",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UWAHN",
    "freqScore": 5
  },
  {
    "id": 742,
    "text": "heekin",
    "phonemes": [
      "HH",
      "IY1",
      "K",
      "IH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYKIHN",
    "freqScore": 5
  },
  {
    "id": 743,
    "text": "laporte",
    "phonemes": [
      "L",
      "AH0",
      "P",
      "AO1",
      "R",
      "T"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AORT",
    "freqScore": 5
  },
  {
    "id": 744,
    "text": "anselmo",
    "phonemes": [
      "AA0",
      "N",
      "S",
      "EH1",
      "L",
      "M",
      "OW0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHLMOW",
    "freqScore": 5
  },
  {
    "id": 745,
    "text": "australians",
    "phonemes": [
      "AO0",
      "S",
      "T",
      "R",
      "EY1",
      "L",
      "Y",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYLYAHNZ",
    "freqScore": 5
  },
  {
    "id": 746,
    "text": "aikins",
    "phonemes": [
      "AY1",
      "K",
      "IH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYKIHNZ",
    "freqScore": 5
  },
  {
    "id": 747,
    "text": "mcgalley's",
    "phonemes": [
      "M",
      "AH0",
      "G",
      "AE1",
      "L",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AELIYZ",
    "freqScore": 5
  },
  {
    "id": 748,
    "text": "fifi",
    "phonemes": [
      "F",
      "IY1",
      "F",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYFIY",
    "freqScore": 6
  },
  {
    "id": 749,
    "text": "mussell",
    "phonemes": [
      "M",
      "AH1",
      "S",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AHSAHL",
    "freqScore": 5
  },
  {
    "id": 750,
    "text": "admittance",
    "phonemes": [
      "AH0",
      "D",
      "M",
      "IH1",
      "T",
      "AH0",
      "N",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHTAHNS",
    "freqScore": 5
  },
  {
    "id": 751,
    "text": "mccorquodale",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AO1",
      "R",
      "K",
      "AH0",
      "D",
      "EY2",
      "L"
    ],
    "stressPattern": [
      0,
      1,
      0,
      2
    ],
    "syllableCount": 4,
    "rhymeKey": "EYL",
    "freqScore": 5
  },
  {
    "id": 752,
    "text": "leysen",
    "phonemes": [
      "L",
      "EY1",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYSAHN",
    "freqScore": 5
  },
  {
    "id": 753,
    "text": "mcaleer",
    "phonemes": [
      "M",
      "AE1",
      "K",
      "AH0",
      "L",
      "IH0",
      "R"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AEKAHLIHR",
    "freqScore": 5
  },
  {
    "id": 754,
    "text": "lennon",
    "phonemes": [
      "L",
      "EH1",
      "N",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNAHN",
    "freqScore": 5
  },
  {
    "id": 755,
    "text": "neighbours'",
    "phonemes": [
      "N",
      "EY1",
      "B",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYBERZ",
    "freqScore": 5
  },
  {
    "id": 756,
    "text": "kenworthy",
    "phonemes": [
      "K",
      "EH1",
      "N",
      "W",
      "ER2",
      "DH",
      "IY0"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "ERDHIY",
    "freqScore": 5
  },
  {
    "id": 757,
    "text": "financiera",
    "phonemes": [
      "F",
      "IH0",
      "N",
      "AE2",
      "N",
      "S",
      "IY0",
      "EH1",
      "R",
      "AH0"
    ],
    "stressPattern": [
      0,
      2,
      0,
      1,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "EHRAH",
    "freqScore": 5
  },
  {
    "id": 758,
    "text": "lenger",
    "phonemes": [
      "L",
      "EH1",
      "NG",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNGER",
    "freqScore": 5
  },
  {
    "id": 759,
    "text": "dictator",
    "phonemes": [
      "D",
      "IH0",
      "K",
      "T",
      "EY1",
      "T",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYTER",
    "freqScore": 5
  },
  {
    "id": 760,
    "text": "calmaquip",
    "phonemes": [
      "K",
      "AE1",
      "L",
      "M",
      "AH0",
      "K",
      "W",
      "IH2",
      "P"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "IHP",
    "freqScore": 5
  },
  {
    "id": 761,
    "text": "complexity",
    "phonemes": [
      "K",
      "AH0",
      "M",
      "P",
      "L",
      "EH1",
      "K",
      "S",
      "AH0",
      "T",
      "IY0"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHKSAHTIY",
    "freqScore": 5
  },
  {
    "id": 762,
    "text": "kosel",
    "phonemes": [
      "K",
      "OW1",
      "S",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWSAHL",
    "freqScore": 5
  },
  {
    "id": 763,
    "text": "mariners",
    "phonemes": [
      "M",
      "EH1",
      "R",
      "AH0",
      "N",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHRAHNERZ",
    "freqScore": 5
  },
  {
    "id": 764,
    "text": "kepple",
    "phonemes": [
      "K",
      "EH1",
      "P",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHPAHL",
    "freqScore": 5
  },
  {
    "id": 765,
    "text": "automotive",
    "phonemes": [
      "AO2",
      "T",
      "AH0",
      "M",
      "OW1",
      "T",
      "IH0",
      "V"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "OWTIHV",
    "freqScore": 5
  },
  {
    "id": 766,
    "text": "luetkemeyer",
    "phonemes": [
      "L",
      "UH1",
      "T",
      "K",
      "IH0",
      "M",
      "AY0",
      "ER0"
    ],
    "stressPattern": [
      1,
      0,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "UHTKIHMAYER",
    "freqScore": 5
  },
  {
    "id": 767,
    "text": "meline",
    "phonemes": [
      "M",
      "EH1",
      "L",
      "AY0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHLAYN",
    "freqScore": 5
  },
  {
    "id": 768,
    "text": "mccumber",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AH1",
      "M",
      "B",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHMBER",
    "freqScore": 5
  },
  {
    "id": 769,
    "text": "neuronal",
    "phonemes": [
      "N",
      "UH1",
      "R",
      "OW2",
      "N",
      "AH0",
      "L",
      "Z"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "OWNAHLZ",
    "freqScore": 5
  },
  {
    "id": 770,
    "text": "masai",
    "phonemes": [
      "M",
      "AA0",
      "S",
      "AA1",
      "IY0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AAIY",
    "freqScore": 5
  },
  {
    "id": 771,
    "text": "mascorro",
    "phonemes": [
      "M",
      "AA0",
      "S",
      "K",
      "AO1",
      "R",
      "OW0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AOROW",
    "freqScore": 5
  },
  {
    "id": 772,
    "text": "acura's",
    "phonemes": [
      "AE1",
      "K",
      "Y",
      "ER0",
      "AH0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AEKYERAHZ",
    "freqScore": 5
  },
  {
    "id": 773,
    "text": "diagnosing",
    "phonemes": [
      "D",
      "AY2",
      "AH0",
      "G",
      "N",
      "OW1",
      "S",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "OWSIHNG",
    "freqScore": 5
  },
  {
    "id": 774,
    "text": "compost",
    "phonemes": [
      "K",
      "AA1",
      "M",
      "P",
      "OW0",
      "S",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAMPOWST",
    "freqScore": 5
  },
  {
    "id": 775,
    "text": "manet",
    "phonemes": [
      "M",
      "AE0",
      "N",
      "EY1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EY",
    "freqScore": 5
  },
  {
    "id": 776,
    "text": "lessley",
    "phonemes": [
      "L",
      "EH1",
      "S",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHSLIY",
    "freqScore": 5
  },
  {
    "id": 777,
    "text": "lenke",
    "phonemes": [
      "L",
      "EH1",
      "NG",
      "K",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNGKIY",
    "freqScore": 5
  },
  {
    "id": 778,
    "text": "frittering",
    "phonemes": [
      "F",
      "R",
      "IH1",
      "T",
      "ER0",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHTERIHNG",
    "freqScore": 5
  },
  {
    "id": 779,
    "text": "mccargar",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AA1",
      "R",
      "G",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AARGER",
    "freqScore": 5
  },
  {
    "id": 780,
    "text": "length",
    "phonemes": [
      "L",
      "EH1",
      "NG",
      "K",
      "TH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHNGKTH",
    "freqScore": 5
  },
  {
    "id": 781,
    "text": "narlikar",
    "phonemes": [
      "N",
      "AA1",
      "R",
      "L",
      "IH0",
      "K",
      "AA2",
      "R"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AAR",
    "freqScore": 5
  },
  {
    "id": 782,
    "text": "nader",
    "phonemes": [
      "N",
      "EY1",
      "D",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYDER",
    "freqScore": 5
  },
  {
    "id": 783,
    "text": "lensing",
    "phonemes": [
      "L",
      "EH1",
      "N",
      "S",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNSIHNG",
    "freqScore": 5
  },
  {
    "id": 784,
    "text": "massenet's",
    "phonemes": [
      "M",
      "AE1",
      "S",
      "AH0",
      "N",
      "EH2",
      "T",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EHTS",
    "freqScore": 5
  },
  {
    "id": 785,
    "text": "meek",
    "phonemes": [
      "M",
      "IY1",
      "K"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYK",
    "freqScore": 6
  },
  {
    "id": 786,
    "text": "gellis",
    "phonemes": [
      "G",
      "EH1",
      "L",
      "IH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHLIHS",
    "freqScore": 5
  },
  {
    "id": 787,
    "text": "glenny",
    "phonemes": [
      "G",
      "L",
      "EH1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHNIY",
    "freqScore": 5
  },
  {
    "id": 788,
    "text": "acerra",
    "phonemes": [
      "AH0",
      "S",
      "EH1",
      "R",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHRAH",
    "freqScore": 5
  },
  {
    "id": 789,
    "text": "guffaws",
    "phonemes": [
      "G",
      "AH0",
      "F",
      "AO1",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AOZ",
    "freqScore": 5
  },
  {
    "id": 790,
    "text": "canyon",
    "phonemes": [
      "K",
      "AE1",
      "N",
      "Y",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENYAHN",
    "freqScore": 5
  },
  {
    "id": 791,
    "text": "lajeunesse",
    "phonemes": [
      "L",
      "AH0",
      "JH",
      "AH1",
      "N",
      "EH0",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AHNEHS",
    "freqScore": 5
  },
  {
    "id": 792,
    "text": "letsch",
    "phonemes": [
      "L",
      "EH1",
      "CH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHCH",
    "freqScore": 5
  },
  {
    "id": 793,
    "text": "janssens",
    "phonemes": [
      "JH",
      "AE1",
      "N",
      "S",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSAHNZ",
    "freqScore": 5
  },
  {
    "id": 794,
    "text": "klitz",
    "phonemes": [
      "K",
      "L",
      "IH1",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHTS",
    "freqScore": 5
  },
  {
    "id": 795,
    "text": "meara",
    "phonemes": [
      "M",
      "IY1",
      "R",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYRAH",
    "freqScore": 5
  },
  {
    "id": 796,
    "text": "condones",
    "phonemes": [
      "K",
      "AH0",
      "N",
      "D",
      "OW1",
      "N",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "OWNZ",
    "freqScore": 5
  },
  {
    "id": 797,
    "text": "maeve",
    "phonemes": [
      "M",
      "AH0",
      "EH1",
      "V"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHV",
    "freqScore": 5
  },
  {
    "id": 798,
    "text": "hoberg",
    "phonemes": [
      "HH",
      "OW1",
      "B",
      "ER0",
      "G"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWBERG",
    "freqScore": 5
  },
  {
    "id": 799,
    "text": "frederking",
    "phonemes": [
      "F",
      "R",
      "EH1",
      "D",
      "ER0",
      "K",
      "IH2",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "IHNG",
    "freqScore": 5
  },
  {
    "id": 800,
    "text": "mccarrell",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AE1",
      "R",
      "AH0",
      "L"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AERAHL",
    "freqScore": 5
  },
  {
    "id": 801,
    "text": "adversely",
    "phonemes": [
      "AE0",
      "D",
      "V",
      "ER1",
      "S",
      "L",
      "IY0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "ERSLIY",
    "freqScore": 5
  },
  {
    "id": 802,
    "text": "hevner",
    "phonemes": [
      "HH",
      "EH1",
      "V",
      "N",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHVNER",
    "freqScore": 5
  },
  {
    "id": 803,
    "text": "merging",
    "phonemes": [
      "M",
      "ER1",
      "JH",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERJHIHNG",
    "freqScore": 5
  },
  {
    "id": 804,
    "text": "freels",
    "phonemes": [
      "F",
      "R",
      "IY1",
      "L",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYLZ",
    "freqScore": 5
  },
  {
    "id": 805,
    "text": "concessional",
    "phonemes": [
      "K",
      "AH0",
      "N",
      "S",
      "EH1",
      "SH",
      "AH0",
      "N",
      "AH0",
      "L"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHSHAHNAHL",
    "freqScore": 5
  },
  {
    "id": 806,
    "text": "cyd",
    "phonemes": [
      "S",
      "IH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHD",
    "freqScore": 6
  },
  {
    "id": 807,
    "text": "maryland's",
    "phonemes": [
      "M",
      "EH1",
      "R",
      "AH0",
      "L",
      "AH0",
      "N",
      "D",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHRAHLAHNDZ",
    "freqScore": 5
  },
  {
    "id": 808,
    "text": "mccandless",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AE1",
      "N",
      "D",
      "L",
      "AH0",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENDLAHS",
    "freqScore": 5
  },
  {
    "id": 809,
    "text": "callicott",
    "phonemes": [
      "K",
      "AE1",
      "L",
      "IH0",
      "K",
      "AA0",
      "T"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AELIHKAAT",
    "freqScore": 5
  },
  {
    "id": 810,
    "text": "natasha",
    "phonemes": [
      "N",
      "AH0",
      "T",
      "AA1",
      "SH",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AASHAH",
    "freqScore": 5
  },
  {
    "id": 811,
    "text": "mccroskey",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "R",
      "AA1",
      "S",
      "K",
      "IY0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AASKIY",
    "freqScore": 5
  },
  {
    "id": 812,
    "text": "lann",
    "phonemes": [
      "L",
      "AE1",
      "N"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AEN",
    "freqScore": 6
  },
  {
    "id": 813,
    "text": "leith",
    "phonemes": [
      "L",
      "IY1",
      "TH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYTH",
    "freqScore": 5
  },
  {
    "id": 814,
    "text": "hodgkins",
    "phonemes": [
      "HH",
      "AA1",
      "JH",
      "K",
      "IH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAJHKIHNZ",
    "freqScore": 5
  },
  {
    "id": 815,
    "text": "lp",
    "phonemes": [
      "EH1",
      "L",
      "P",
      "IY1"
    ],
    "stressPattern": [
      1,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IY",
    "freqScore": 7
  },
  {
    "id": 816,
    "text": "acuff",
    "phonemes": [
      "AH0",
      "K",
      "AH1",
      "F"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AHF",
    "freqScore": 5
  },
  {
    "id": 817,
    "text": "mustachio",
    "phonemes": [
      "M",
      "AH0",
      "S",
      "T",
      "AE1",
      "SH",
      "IY0",
      "OW2"
    ],
    "stressPattern": [
      0,
      1,
      0,
      2
    ],
    "syllableCount": 4,
    "rhymeKey": "OW",
    "freqScore": 5
  },
  {
    "id": 818,
    "text": "cuff",
    "phonemes": [
      "K",
      "AH1",
      "F"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHF",
    "freqScore": 6
  },
  {
    "id": 819,
    "text": "leonid",
    "phonemes": [
      "L",
      "IY1",
      "AH0",
      "N",
      "IH0",
      "D"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYAHNIHD",
    "freqScore": 5
  },
  {
    "id": 820,
    "text": "lenore",
    "phonemes": [
      "L",
      "AH0",
      "N",
      "AO1",
      "R"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AOR",
    "freqScore": 5
  },
  {
    "id": 821,
    "text": "lockert",
    "phonemes": [
      "L",
      "AA1",
      "K",
      "ER0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAKERT",
    "freqScore": 5
  },
  {
    "id": 822,
    "text": "lemercier's",
    "phonemes": [
      "L",
      "AH0",
      "M",
      "ER1",
      "S",
      "IY0",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "ERSIYERZ",
    "freqScore": 5
  },
  {
    "id": 823,
    "text": "guasch",
    "phonemes": [
      "G",
      "W",
      "AE1",
      "SH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AESH",
    "freqScore": 5
  },
  {
    "id": 824,
    "text": "heffelfinger",
    "phonemes": [
      "HH",
      "EH1",
      "F",
      "IH0",
      "L",
      "F",
      "IH0",
      "NG",
      "ER0"
    ],
    "stressPattern": [
      1,
      0,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EHFIHLFIHNGER",
    "freqScore": 5
  },
  {
    "id": 825,
    "text": "napolitan",
    "phonemes": [
      "N",
      "AA0",
      "P",
      "OW2",
      "L",
      "IY0",
      "T",
      "AA1",
      "N"
    ],
    "stressPattern": [
      0,
      2,
      0,
      1
    ],
    "syllableCount": 4,
    "rhymeKey": "AAN",
    "freqScore": 5
  },
  {
    "id": 826,
    "text": "neighbour's",
    "phonemes": [
      "N",
      "EY1",
      "B",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYBERZ",
    "freqScore": 5
  },
  {
    "id": 827,
    "text": "correia",
    "phonemes": [
      "K",
      "ER0",
      "EY1",
      "IY0",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYIYAH",
    "freqScore": 5
  },
  {
    "id": 828,
    "text": "herding",
    "phonemes": [
      "HH",
      "ER1",
      "D",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "ERDIHNG",
    "freqScore": 5
  },
  {
    "id": 829,
    "text": "annis",
    "phonemes": [
      "AE1",
      "N",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENIYZ",
    "freqScore": 5
  },
  {
    "id": 830,
    "text": "mccraw",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "R",
      "AO1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AO",
    "freqScore": 5
  },
  {
    "id": 831,
    "text": "luehring",
    "phonemes": [
      "L",
      "UH1",
      "R",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "UHRIHNG",
    "freqScore": 5
  },
  {
    "id": 832,
    "text": "finals",
    "phonemes": [
      "F",
      "AY1",
      "N",
      "AH0",
      "L",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYNAHLZ",
    "freqScore": 5
  },
  {
    "id": 833,
    "text": "mad",
    "phonemes": [
      "M",
      "AE1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AED",
    "freqScore": 6
  },
  {
    "id": 834,
    "text": "frigid",
    "phonemes": [
      "F",
      "R",
      "IH1",
      "JH",
      "AH0",
      "D"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHJHAHD",
    "freqScore": 5
  },
  {
    "id": 835,
    "text": "conditioner",
    "phonemes": [
      "K",
      "AH0",
      "N",
      "D",
      "IH1",
      "SH",
      "AH0",
      "N",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IHSHAHNER",
    "freqScore": 5
  },
  {
    "id": 836,
    "text": "coms",
    "phonemes": [
      "K",
      "AA1",
      "M",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAMZ",
    "freqScore": 6
  },
  {
    "id": 837,
    "text": "froelich",
    "phonemes": [
      "F",
      "R",
      "OW1",
      "L",
      "IH0",
      "K"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLIHK",
    "freqScore": 5
  },
  {
    "id": 838,
    "text": "cawley",
    "phonemes": [
      "K",
      "AO1",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOLIY",
    "freqScore": 5
  },
  {
    "id": 839,
    "text": "gassaway",
    "phonemes": [
      "G",
      "AE1",
      "S",
      "AH0",
      "W",
      "EY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AESAHWEY",
    "freqScore": 5
  },
  {
    "id": 840,
    "text": "holben",
    "phonemes": [
      "HH",
      "OW1",
      "L",
      "B",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWLBAHN",
    "freqScore": 5
  },
  {
    "id": 841,
    "text": "lekberg",
    "phonemes": [
      "L",
      "EH1",
      "K",
      "B",
      "ER0",
      "G"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHKBERG",
    "freqScore": 5
  },
  {
    "id": 842,
    "text": "accival",
    "phonemes": [
      "AE1",
      "S",
      "IH0",
      "V",
      "AA2",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AAL",
    "freqScore": 5
  },
  {
    "id": 843,
    "text": "austin's",
    "phonemes": [
      "AO1",
      "S",
      "T",
      "AH0",
      "N",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOSTAHNZ",
    "freqScore": 5
  },
  {
    "id": 844,
    "text": "austere",
    "phonemes": [
      "AO0",
      "S",
      "T",
      "IH1",
      "R"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IHR",
    "freqScore": 5
  },
  {
    "id": 845,
    "text": "mercantile",
    "phonemes": [
      "M",
      "ER1",
      "K",
      "AH0",
      "N",
      "T",
      "AY2",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AYL",
    "freqScore": 5
  },
  {
    "id": 846,
    "text": "mccants",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AE1",
      "N",
      "T",
      "S"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AENTS",
    "freqScore": 5
  },
  {
    "id": 847,
    "text": "australasia",
    "phonemes": [
      "AO2",
      "S",
      "T",
      "R",
      "AH0",
      "L",
      "EY1",
      "ZH",
      "AH0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYZHAH",
    "freqScore": 5
  },
  {
    "id": 848,
    "text": "logo",
    "phonemes": [
      "L",
      "OW1",
      "G",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "OWGOW",
    "freqScore": 6
  },
  {
    "id": 849,
    "text": "chaska",
    "phonemes": [
      "CH",
      "AE1",
      "S",
      "K",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AESKAH",
    "freqScore": 5
  },
  {
    "id": 850,
    "text": "iron",
    "phonemes": [
      "AY1",
      "ER0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYERN",
    "freqScore": 6
  },
  {
    "id": 851,
    "text": "latvala",
    "phonemes": [
      "L",
      "AA0",
      "T",
      "V",
      "AA1",
      "L",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AALAH",
    "freqScore": 5
  },
  {
    "id": 852,
    "text": "leaps",
    "phonemes": [
      "L",
      "IY1",
      "P",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYPS",
    "freqScore": 5
  },
  {
    "id": 853,
    "text": "guffaw",
    "phonemes": [
      "G",
      "AH0",
      "F",
      "AO1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AO",
    "freqScore": 5
  },
  {
    "id": 854,
    "text": "mccool",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "UW1",
      "L"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "UWL",
    "freqScore": 5
  },
  {
    "id": 855,
    "text": "adoptees",
    "phonemes": [
      "AH0",
      "D",
      "AA1",
      "P",
      "T",
      "IY1",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "IYZ",
    "freqScore": 5
  },
  {
    "id": 856,
    "text": "annoyance",
    "phonemes": [
      "AH0",
      "N",
      "OY1",
      "AH0",
      "N",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "OYAHNS",
    "freqScore": 5
  },
  {
    "id": 857,
    "text": "manama",
    "phonemes": [
      "M",
      "AE1",
      "N",
      "AH0",
      "M",
      "AH0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENAHMAH",
    "freqScore": 5
  },
  {
    "id": 858,
    "text": "lodestone",
    "phonemes": [
      "L",
      "OW1",
      "D",
      "S",
      "T",
      "OW2",
      "N"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "OWN",
    "freqScore": 5
  },
  {
    "id": 859,
    "text": "auston",
    "phonemes": [
      "AO1",
      "S",
      "T",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AOSTAHN",
    "freqScore": 5
  },
  {
    "id": 860,
    "text": "janet's",
    "phonemes": [
      "JH",
      "AE1",
      "N",
      "AH0",
      "T",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENAHTS",
    "freqScore": 5
  },
  {
    "id": 861,
    "text": "capricious",
    "phonemes": [
      "K",
      "AH0",
      "P",
      "R",
      "IH1",
      "SH",
      "AH0",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHSHAHS",
    "freqScore": 5
  },
  {
    "id": 862,
    "text": "mutated",
    "phonemes": [
      "M",
      "Y",
      "UW1",
      "T",
      "EY2",
      "T",
      "IH0",
      "D"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYTIHD",
    "freqScore": 5
  },
  {
    "id": 863,
    "text": "leones",
    "phonemes": [
      "L",
      "IY0",
      "OW1",
      "N",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "OWNZ",
    "freqScore": 5
  },
  {
    "id": 864,
    "text": "mustafa",
    "phonemes": [
      "M",
      "UW0",
      "S",
      "T",
      "AA1",
      "F",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AAFAH",
    "freqScore": 5
  },
  {
    "id": 865,
    "text": "mccrystal",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "R",
      "IH1",
      "S",
      "T",
      "AH0",
      "L"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHSTAHL",
    "freqScore": 5
  },
  {
    "id": 866,
    "text": "mancebo",
    "phonemes": [
      "M",
      "AA0",
      "N",
      "CH",
      "EH1",
      "B",
      "OW0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHBOW",
    "freqScore": 5
  },
  {
    "id": 867,
    "text": "guarisco",
    "phonemes": [
      "G",
      "AA0",
      "R",
      "IY1",
      "S",
      "K",
      "OW0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYSKOW",
    "freqScore": 5
  },
  {
    "id": 868,
    "text": "malon",
    "phonemes": [
      "M",
      "AE1",
      "L",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AELAHN",
    "freqScore": 5
  },
  {
    "id": 869,
    "text": "angering",
    "phonemes": [
      "AE1",
      "NG",
      "G",
      "ER0",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AENGGERIHNG",
    "freqScore": 5
  },
  {
    "id": 870,
    "text": "lemmie",
    "phonemes": [
      "L",
      "EH1",
      "M",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHMIY",
    "freqScore": 5
  },
  {
    "id": 871,
    "text": "diagram",
    "phonemes": [
      "D",
      "AY1",
      "AH0",
      "G",
      "R",
      "AE2",
      "M"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AEM",
    "freqScore": 5
  },
  {
    "id": 872,
    "text": "ansgar's",
    "phonemes": [
      "AE1",
      "N",
      "S",
      "G",
      "AA0",
      "R",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSGAARZ",
    "freqScore": 5
  },
  {
    "id": 873,
    "text": "balster",
    "phonemes": [
      "B",
      "AE1",
      "L",
      "S",
      "T",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AELSTER",
    "freqScore": 5
  },
  {
    "id": 874,
    "text": "lauer",
    "phonemes": [
      "L",
      "AW1",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AWER",
    "freqScore": 5
  },
  {
    "id": 875,
    "text": "manno",
    "phonemes": [
      "M",
      "AE1",
      "N",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENOW",
    "freqScore": 5
  },
  {
    "id": 876,
    "text": "marylebone",
    "phonemes": [
      "M",
      "ER1",
      "L",
      "AH0",
      "B",
      "OW0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "ERLAHBOWN",
    "freqScore": 5
  },
  {
    "id": 877,
    "text": "leiby",
    "phonemes": [
      "L",
      "IY1",
      "B",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYBIY",
    "freqScore": 5
  },
  {
    "id": 878,
    "text": "chasten",
    "phonemes": [
      "CH",
      "EY1",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYSAHN",
    "freqScore": 5
  },
  {
    "id": 879,
    "text": "capitan",
    "phonemes": [
      "K",
      "AE1",
      "P",
      "IH0",
      "T",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AEPIHTAHN",
    "freqScore": 5
  },
  {
    "id": 880,
    "text": "automakers'",
    "phonemes": [
      "AO1",
      "T",
      "OW0",
      "M",
      "EY2",
      "K",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYKERZ",
    "freqScore": 5
  },
  {
    "id": 881,
    "text": "medicine",
    "phonemes": [
      "M",
      "EH1",
      "D",
      "AH0",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHDAHSAHN",
    "freqScore": 5
  },
  {
    "id": 882,
    "text": "malloy",
    "phonemes": [
      "M",
      "AH0",
      "L",
      "OY1"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "OY",
    "freqScore": 5
  },
  {
    "id": 883,
    "text": "accelerate",
    "phonemes": [
      "AE0",
      "K",
      "S",
      "EH1",
      "L",
      "ER0",
      "EY2",
      "T"
    ],
    "stressPattern": [
      0,
      1,
      0,
      2
    ],
    "syllableCount": 4,
    "rhymeKey": "EYT",
    "freqScore": 5
  },
  {
    "id": 884,
    "text": "inundate",
    "phonemes": [
      "IH1",
      "N",
      "AH0",
      "N",
      "D",
      "EY2",
      "T"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "EYT",
    "freqScore": 5
  },
  {
    "id": 885,
    "text": "announcment",
    "phonemes": [
      "AH0",
      "N",
      "AW1",
      "N",
      "S",
      "M",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AWNSMAHNT",
    "freqScore": 5
  },
  {
    "id": 886,
    "text": "higby",
    "phonemes": [
      "HH",
      "IH1",
      "G",
      "B",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHGBIY",
    "freqScore": 5
  },
  {
    "id": 887,
    "text": "admirers",
    "phonemes": [
      "AH0",
      "D",
      "M",
      "AY1",
      "R",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AYRERZ",
    "freqScore": 5
  },
  {
    "id": 888,
    "text": "mcclees",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "L",
      "IY1",
      "Z"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "IYZ",
    "freqScore": 5
  },
  {
    "id": 889,
    "text": "mercedeses",
    "phonemes": [
      "M",
      "ER2",
      "S",
      "EY1",
      "D",
      "IY2",
      "Z",
      "IH0",
      "Z"
    ],
    "stressPattern": [
      2,
      1,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IYZIHZ",
    "freqScore": 5
  },
  {
    "id": 890,
    "text": "garrisoned",
    "phonemes": [
      "G",
      "AE1",
      "R",
      "AH0",
      "S",
      "AH0",
      "N",
      "D"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AERAHSAHND",
    "freqScore": 5
  },
  {
    "id": 891,
    "text": "naismith",
    "phonemes": [
      "N",
      "EY1",
      "Z",
      "M",
      "IH0",
      "TH"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYZMIHTH",
    "freqScore": 5
  },
  {
    "id": 892,
    "text": "gault",
    "phonemes": [
      "G",
      "AO1",
      "L",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AOLT",
    "freqScore": 5
  },
  {
    "id": 893,
    "text": "mccuen",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "Y",
      "UW1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "UWN",
    "freqScore": 5
  },
  {
    "id": 894,
    "text": "cormican",
    "phonemes": [
      "K",
      "AO1",
      "R",
      "M",
      "IH0",
      "K",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AORMIHKAHN",
    "freqScore": 5
  },
  {
    "id": 895,
    "text": "akiba",
    "phonemes": [
      "AH0",
      "K",
      "IY1",
      "B",
      "AH0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYBAH",
    "freqScore": 5
  },
  {
    "id": 896,
    "text": "answers",
    "phonemes": [
      "AE1",
      "N",
      "S",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENSERZ",
    "freqScore": 5
  },
  {
    "id": 897,
    "text": "accu",
    "phonemes": [
      "AE1",
      "K",
      "Y",
      "UW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEKYUW",
    "freqScore": 6
  },
  {
    "id": 898,
    "text": "lemire",
    "phonemes": [
      "L",
      "EY0",
      "M",
      "IH1",
      "R",
      "EY0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHREY",
    "freqScore": 5
  },
  {
    "id": 899,
    "text": "macmaster",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "M",
      "AE1",
      "S",
      "T",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AESTER",
    "freqScore": 5
  },
  {
    "id": 900,
    "text": "madson",
    "phonemes": [
      "M",
      "AE1",
      "D",
      "S",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AEDSAHN",
    "freqScore": 5
  },
  {
    "id": 901,
    "text": "lockaby",
    "phonemes": [
      "L",
      "AA1",
      "K",
      "AH0",
      "B",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AAKAHBIY",
    "freqScore": 5
  },
  {
    "id": 902,
    "text": "neuromorphic",
    "phonemes": [
      "N",
      "UH1",
      "R",
      "OW0",
      "M",
      "AO2",
      "R",
      "F",
      "IH0",
      "K"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AORFIHK",
    "freqScore": 5
  },
  {
    "id": 903,
    "text": "mccallon",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AE1",
      "L",
      "AH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AELAHN",
    "freqScore": 5
  },
  {
    "id": 904,
    "text": "medisgroups",
    "phonemes": [
      "M",
      "EH1",
      "D",
      "IH0",
      "S",
      "G",
      "R",
      "UW2",
      "P",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "UWPS",
    "freqScore": 5
  },
  {
    "id": 905,
    "text": "whistling",
    "phonemes": [
      "W",
      "IH1",
      "S",
      "L",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHSLIHNG",
    "freqScore": 5
  },
  {
    "id": 906,
    "text": "fredericka",
    "phonemes": [
      "F",
      "R",
      "EY0",
      "D",
      "EH0",
      "R",
      "IY1",
      "K",
      "AH0"
    ],
    "stressPattern": [
      0,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IYKAH",
    "freqScore": 5
  },
  {
    "id": 907,
    "text": "intangibles",
    "phonemes": [
      "IH2",
      "N",
      "T",
      "AE1",
      "N",
      "JH",
      "AH0",
      "B",
      "AH0",
      "L",
      "Z"
    ],
    "stressPattern": [
      2,
      1,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AENJHAHBAHLZ",
    "freqScore": 5
  },
  {
    "id": 908,
    "text": "wiccan",
    "phonemes": [
      "W",
      "IH1",
      "K",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHKAHN",
    "freqScore": 5
  },
  {
    "id": 909,
    "text": "baasch",
    "phonemes": [
      "B",
      "AA1",
      "SH"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AASH",
    "freqScore": 5
  },
  {
    "id": 910,
    "text": "nephrite",
    "phonemes": [
      "N",
      "EH1",
      "F",
      "R",
      "AY0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHFRAYT",
    "freqScore": 5
  },
  {
    "id": 911,
    "text": "amused",
    "phonemes": [
      "AH0",
      "M",
      "Y",
      "UW1",
      "Z",
      "D"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "UWZD",
    "freqScore": 5
  },
  {
    "id": 912,
    "text": "loftis",
    "phonemes": [
      "L",
      "AA1",
      "F",
      "T",
      "IH0",
      "S"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AAFTIHS",
    "freqScore": 5
  },
  {
    "id": 913,
    "text": "angulated",
    "phonemes": [
      "AE1",
      "NG",
      "G",
      "Y",
      "UW0",
      "L",
      "EY2",
      "T",
      "IH0",
      "D"
    ],
    "stressPattern": [
      1,
      0,
      2,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYTIHD",
    "freqScore": 5
  },
  {
    "id": 914,
    "text": "leapfrogging",
    "phonemes": [
      "L",
      "IY1",
      "P",
      "F",
      "R",
      "AO2",
      "G",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AOGIHNG",
    "freqScore": 5
  },
  {
    "id": 915,
    "text": "leaned",
    "phonemes": [
      "L",
      "IY1",
      "N",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYND",
    "freqScore": 5
  },
  {
    "id": 916,
    "text": "white",
    "phonemes": [
      "W",
      "AY1",
      "T"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYT",
    "freqScore": 5
  },
  {
    "id": 917,
    "text": "naturedly",
    "phonemes": [
      "N",
      "EY1",
      "CH",
      "ER0",
      "D",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYCHERDLIY",
    "freqScore": 5
  },
  {
    "id": 918,
    "text": "who've",
    "phonemes": [
      "HH",
      "UW0",
      "V"
    ],
    "stressPattern": [
      0
    ],
    "syllableCount": 1,
    "rhymeKey": "UWV",
    "freqScore": 5
  },
  {
    "id": 919,
    "text": "anticyclones",
    "phonemes": [
      "AE2",
      "N",
      "T",
      "IY0",
      "S",
      "AY1",
      "K",
      "L",
      "OW2",
      "N",
      "Z"
    ],
    "stressPattern": [
      2,
      0,
      1,
      2
    ],
    "syllableCount": 4,
    "rhymeKey": "OWNZ",
    "freqScore": 5
  },
  {
    "id": 920,
    "text": "whorehouse",
    "phonemes": [
      "HH",
      "AO1",
      "R",
      "HH",
      "AW2",
      "S"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AWS",
    "freqScore": 5
  },
  {
    "id": 921,
    "text": "herbalists",
    "phonemes": [
      "ER1",
      "B",
      "AH0",
      "L",
      "AH0",
      "S",
      "T",
      "S"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "ERBAHLAHSTS",
    "freqScore": 5
  },
  {
    "id": 922,
    "text": "alcon",
    "phonemes": [
      "AH0",
      "L",
      "K",
      "AA1",
      "N"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "AAN",
    "freqScore": 5
  },
  {
    "id": 923,
    "text": "dictaphone",
    "phonemes": [
      "D",
      "IH1",
      "K",
      "T",
      "AH0",
      "F",
      "OW2",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "OWN",
    "freqScore": 5
  },
  {
    "id": 924,
    "text": "muzio",
    "phonemes": [
      "M",
      "Y",
      "UW1",
      "Z",
      "IY0",
      "OW0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "UWZIYOW",
    "freqScore": 5
  },
  {
    "id": 925,
    "text": "latitude",
    "phonemes": [
      "L",
      "AE1",
      "T",
      "AH0",
      "T",
      "UW2",
      "D"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "UWD",
    "freqScore": 5
  },
  {
    "id": 926,
    "text": "calmed",
    "phonemes": [
      "K",
      "AA1",
      "M",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AAMD",
    "freqScore": 5
  },
  {
    "id": 927,
    "text": "fierro",
    "phonemes": [
      "F",
      "IH1",
      "R",
      "OW0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHROW",
    "freqScore": 5
  },
  {
    "id": 928,
    "text": "izard",
    "phonemes": [
      "IH1",
      "Z",
      "ER0",
      "D"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHZERD",
    "freqScore": 5
  },
  {
    "id": 929,
    "text": "annotators",
    "phonemes": [
      "AE2",
      "N",
      "AH0",
      "T",
      "EY1",
      "T",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYTERZ",
    "freqScore": 5
  },
  {
    "id": 930,
    "text": "composes",
    "phonemes": [
      "K",
      "AH0",
      "M",
      "P",
      "OW1",
      "Z",
      "IH0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "OWZIHZ",
    "freqScore": 5
  },
  {
    "id": 931,
    "text": "credibly",
    "phonemes": [
      "K",
      "R",
      "EH1",
      "D",
      "AH0",
      "B",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHDAHBLIY",
    "freqScore": 5
  },
  {
    "id": 932,
    "text": "neil",
    "phonemes": [
      "N",
      "IY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IYL",
    "freqScore": 6
  },
  {
    "id": 933,
    "text": "whitewater's",
    "phonemes": [
      "W",
      "AY1",
      "T",
      "W",
      "AO2",
      "T",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AOTERZ",
    "freqScore": 5
  },
  {
    "id": 934,
    "text": "whitner",
    "phonemes": [
      "W",
      "IH1",
      "T",
      "N",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHTNER",
    "freqScore": 5
  },
  {
    "id": 935,
    "text": "gayden",
    "phonemes": [
      "G",
      "EY1",
      "D",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYDAHN",
    "freqScore": 5
  },
  {
    "id": 936,
    "text": "dibert",
    "phonemes": [
      "D",
      "IH1",
      "B",
      "ER0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHBERT",
    "freqScore": 5
  },
  {
    "id": 937,
    "text": "nevels",
    "phonemes": [
      "N",
      "EH1",
      "V",
      "AH0",
      "L",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHVAHLZ",
    "freqScore": 5
  },
  {
    "id": 938,
    "text": "lesley",
    "phonemes": [
      "L",
      "EH1",
      "S",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHSLIY",
    "freqScore": 5
  },
  {
    "id": 939,
    "text": "launders",
    "phonemes": [
      "L",
      "AO1",
      "N",
      "D",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AONDERZ",
    "freqScore": 5
  },
  {
    "id": 940,
    "text": "gress",
    "phonemes": [
      "G",
      "R",
      "EH1",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHS",
    "freqScore": 5
  },
  {
    "id": 941,
    "text": "where've",
    "phonemes": [
      "W",
      "EH1",
      "R",
      "AH0",
      "V"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHRAHV",
    "freqScore": 5
  },
  {
    "id": 942,
    "text": "assortment",
    "phonemes": [
      "AH0",
      "S",
      "AO1",
      "R",
      "T",
      "M",
      "AH0",
      "N",
      "T"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AORTMAHNT",
    "freqScore": 5
  },
  {
    "id": 943,
    "text": "alliteration",
    "phonemes": [
      "AH0",
      "L",
      "IH1",
      "T",
      "ER0",
      "EY2",
      "SH",
      "AH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0,
      2,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "EYSHAHN",
    "freqScore": 5
  },
  {
    "id": 944,
    "text": "adamantly",
    "phonemes": [
      "AE1",
      "D",
      "AH0",
      "M",
      "AH0",
      "N",
      "T",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0,
      0,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AEDAHMAHNTLIY",
    "freqScore": 5
  },
  {
    "id": 945,
    "text": "analytical",
    "phonemes": [
      "AE2",
      "N",
      "AH0",
      "L",
      "IH1",
      "T",
      "IH0",
      "K",
      "AH0",
      "L"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0,
      0
    ],
    "syllableCount": 5,
    "rhymeKey": "IHTIHKAHL",
    "freqScore": 5
  },
  {
    "id": 946,
    "text": "alleys",
    "phonemes": [
      "AE1",
      "L",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AELIYZ",
    "freqScore": 5
  },
  {
    "id": 947,
    "text": "lansdowne",
    "phonemes": [
      "L",
      "AE1",
      "N",
      "S",
      "D",
      "AW2",
      "N"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AWN",
    "freqScore": 5
  },
  {
    "id": 948,
    "text": "friedhelm",
    "phonemes": [
      "F",
      "R",
      "IY1",
      "D",
      "HH",
      "EH2",
      "L",
      "M"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "EHLM",
    "freqScore": 5
  },
  {
    "id": 949,
    "text": "condensing",
    "phonemes": [
      "K",
      "AH0",
      "N",
      "D",
      "EH1",
      "N",
      "S",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EHNSIHNG",
    "freqScore": 5
  },
  {
    "id": 950,
    "text": "bailly",
    "phonemes": [
      "B",
      "EY1",
      "L",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EYLIY",
    "freqScore": 5
  },
  {
    "id": 951,
    "text": "nagasaki",
    "phonemes": [
      "N",
      "AA2",
      "G",
      "AA0",
      "S",
      "AA1",
      "K",
      "IY0"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "AAKIY",
    "freqScore": 5
  },
  {
    "id": 952,
    "text": "wings'",
    "phonemes": [
      "W",
      "IH1",
      "NG",
      "Z"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "IHNGZ",
    "freqScore": 5
  },
  {
    "id": 953,
    "text": "wigen",
    "phonemes": [
      "W",
      "IH1",
      "G",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHGAHN",
    "freqScore": 5
  },
  {
    "id": 954,
    "text": "frida",
    "phonemes": [
      "F",
      "R",
      "IY1",
      "D",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYDAH",
    "freqScore": 5
  },
  {
    "id": 955,
    "text": "witcher",
    "phonemes": [
      "W",
      "IH1",
      "CH",
      "ER0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHCHER",
    "freqScore": 5
  },
  {
    "id": 956,
    "text": "animating",
    "phonemes": [
      "AE2",
      "N",
      "AH0",
      "M",
      "EY1",
      "T",
      "IH0",
      "NG",
      "G"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "EYTIHNGG",
    "freqScore": 5
  },
  {
    "id": 957,
    "text": "glinka",
    "phonemes": [
      "G",
      "L",
      "IH1",
      "NG",
      "K",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNGKAH",
    "freqScore": 5
  },
  {
    "id": 958,
    "text": "antitank",
    "phonemes": [
      "AE2",
      "N",
      "T",
      "IY0",
      "T",
      "AE1",
      "NG",
      "K"
    ],
    "stressPattern": [
      2,
      0,
      1
    ],
    "syllableCount": 3,
    "rhymeKey": "AENGK",
    "freqScore": 5
  },
  {
    "id": 959,
    "text": "wineman",
    "phonemes": [
      "W",
      "AY1",
      "N",
      "M",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYNMAHN",
    "freqScore": 5
  },
  {
    "id": 960,
    "text": "composing",
    "phonemes": [
      "K",
      "AH0",
      "M",
      "P",
      "OW1",
      "Z",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "OWZIHNG",
    "freqScore": 5
  },
  {
    "id": 961,
    "text": "mccranie",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "R",
      "EY1",
      "N",
      "IY0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYNIY",
    "freqScore": 5
  },
  {
    "id": 962,
    "text": "ahranat",
    "phonemes": [
      "AH0",
      "R",
      "AA1",
      "N",
      "AH0",
      "T"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AANAHT",
    "freqScore": 5
  },
  {
    "id": 963,
    "text": "nabisco's",
    "phonemes": [
      "N",
      "AH0",
      "B",
      "IH1",
      "S",
      "K",
      "OW2",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "OWZ",
    "freqScore": 5
  },
  {
    "id": 964,
    "text": "guests",
    "phonemes": [
      "G",
      "EH1",
      "S",
      "T",
      "S"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHSTS",
    "freqScore": 5
  },
  {
    "id": 965,
    "text": "achiever",
    "phonemes": [
      "AH0",
      "CH",
      "IY1",
      "V",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYVER",
    "freqScore": 5
  },
  {
    "id": 966,
    "text": "condemn",
    "phonemes": [
      "K",
      "AH0",
      "N",
      "D",
      "EH1",
      "M"
    ],
    "stressPattern": [
      0,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHM",
    "freqScore": 5
  },
  {
    "id": 967,
    "text": "wiretap",
    "phonemes": [
      "W",
      "AY1",
      "ER0",
      "T",
      "AE2",
      "P"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AEP",
    "freqScore": 5
  },
  {
    "id": 968,
    "text": "mccowin",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AW1",
      "IH0",
      "N"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AWIHN",
    "freqScore": 5
  },
  {
    "id": 969,
    "text": "mccormack",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "AO1",
      "R",
      "M",
      "AH0",
      "K"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AORMAHK",
    "freqScore": 5
  },
  {
    "id": 970,
    "text": "dibernardo",
    "phonemes": [
      "D",
      "IH0",
      "B",
      "ER0",
      "N",
      "AA1",
      "R",
      "D",
      "OW2"
    ],
    "stressPattern": [
      0,
      0,
      1,
      2
    ],
    "syllableCount": 4,
    "rhymeKey": "OW",
    "freqScore": 5
  },
  {
    "id": 971,
    "text": "winkle",
    "phonemes": [
      "W",
      "IH1",
      "NG",
      "K",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHNGKAHL",
    "freqScore": 5
  },
  {
    "id": 972,
    "text": "glittering",
    "phonemes": [
      "G",
      "L",
      "IH1",
      "T",
      "ER0",
      "IH0",
      "NG"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHTERIHNG",
    "freqScore": 5
  },
  {
    "id": 973,
    "text": "baguette",
    "phonemes": [
      "B",
      "AE2",
      "G",
      "EH1",
      "T"
    ],
    "stressPattern": [
      2,
      1
    ],
    "syllableCount": 2,
    "rhymeKey": "EHT",
    "freqScore": 5
  },
  {
    "id": 974,
    "text": "candy's",
    "phonemes": [
      "K",
      "AE1",
      "N",
      "D",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AENDIYZ",
    "freqScore": 5
  },
  {
    "id": 975,
    "text": "mary",
    "phonemes": [
      "M",
      "EH1",
      "R",
      "IY0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "EHRIY",
    "freqScore": 6
  },
  {
    "id": 976,
    "text": "winifred",
    "phonemes": [
      "W",
      "IH1",
      "N",
      "IH0",
      "F",
      "R",
      "IH0",
      "D"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHNIHFRIHD",
    "freqScore": 5
  },
  {
    "id": 977,
    "text": "mckinney's",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "IH1",
      "N",
      "IY0",
      "Z"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHNIYZ",
    "freqScore": 5
  },
  {
    "id": 978,
    "text": "fred",
    "phonemes": [
      "F",
      "R",
      "EH1",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "EHD",
    "freqScore": 6
  },
  {
    "id": 979,
    "text": "ivana",
    "phonemes": [
      "IH2",
      "V",
      "AA1",
      "N",
      "AH0"
    ],
    "stressPattern": [
      2,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AANAH",
    "freqScore": 5
  },
  {
    "id": 980,
    "text": "wineland",
    "phonemes": [
      "W",
      "AY1",
      "N",
      "L",
      "AH0",
      "N",
      "D"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYNLAHND",
    "freqScore": 5
  },
  {
    "id": 981,
    "text": "mckelvy",
    "phonemes": [
      "M",
      "AE1",
      "K",
      "AH0",
      "L",
      "V",
      "IY2"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "IY",
    "freqScore": 5
  },
  {
    "id": 982,
    "text": "wile",
    "phonemes": [
      "W",
      "AY1",
      "L"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AYL",
    "freqScore": 6
  },
  {
    "id": 983,
    "text": "amiprilose",
    "phonemes": [
      "AH0",
      "M",
      "IH1",
      "P",
      "R",
      "AH0",
      "L",
      "OW2",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0,
      2
    ],
    "syllableCount": 4,
    "rhymeKey": "OWS",
    "freqScore": 5
  },
  {
    "id": 984,
    "text": "merabank",
    "phonemes": [
      "M",
      "EH1",
      "R",
      "AH0",
      "B",
      "AE2",
      "NG",
      "K"
    ],
    "stressPattern": [
      1,
      0,
      2
    ],
    "syllableCount": 3,
    "rhymeKey": "AENGK",
    "freqScore": 5
  },
  {
    "id": 985,
    "text": "culled",
    "phonemes": [
      "K",
      "AH1",
      "L",
      "D"
    ],
    "stressPattern": [
      1
    ],
    "syllableCount": 1,
    "rhymeKey": "AHLD",
    "freqScore": 5
  },
  {
    "id": 986,
    "text": "hartigan",
    "phonemes": [
      "HH",
      "AA1",
      "R",
      "T",
      "IH0",
      "G",
      "AH0",
      "N"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AARTIHGAHN",
    "freqScore": 5
  },
  {
    "id": 987,
    "text": "whitesides",
    "phonemes": [
      "W",
      "AY1",
      "T",
      "S",
      "AY2",
      "D",
      "Z"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AYDZ",
    "freqScore": 5
  },
  {
    "id": 988,
    "text": "wiland",
    "phonemes": [
      "W",
      "AY1",
      "L",
      "AH0",
      "N",
      "D"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "AYLAHND",
    "freqScore": 5
  },
  {
    "id": 989,
    "text": "neikirk",
    "phonemes": [
      "N",
      "IY1",
      "K",
      "ER0",
      "K"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYKERK",
    "freqScore": 5
  },
  {
    "id": 990,
    "text": "hilbert",
    "phonemes": [
      "HH",
      "IH1",
      "L",
      "B",
      "ER0",
      "T"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHLBERT",
    "freqScore": 5
  },
  {
    "id": 991,
    "text": "lineitem",
    "phonemes": [
      "L",
      "AY1",
      "N",
      "EY0",
      "T",
      "AH0",
      "M"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "AYNEYTAHM",
    "freqScore": 5
  },
  {
    "id": 992,
    "text": "mccrillis",
    "phonemes": [
      "M",
      "AH0",
      "K",
      "R",
      "IH1",
      "L",
      "AH0",
      "S"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IHLAHS",
    "freqScore": 5
  },
  {
    "id": 993,
    "text": "whitenack",
    "phonemes": [
      "W",
      "AY1",
      "T",
      "N",
      "AE2",
      "K"
    ],
    "stressPattern": [
      1,
      2
    ],
    "syllableCount": 2,
    "rhymeKey": "AEK",
    "freqScore": 5
  },
  {
    "id": 994,
    "text": "anteaters",
    "phonemes": [
      "AE1",
      "N",
      "T",
      "IY2",
      "T",
      "ER0",
      "Z"
    ],
    "stressPattern": [
      1,
      2,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "IYTERZ",
    "freqScore": 5
  },
  {
    "id": 995,
    "text": "filipinos",
    "phonemes": [
      "F",
      "IH2",
      "L",
      "AH0",
      "P",
      "IY1",
      "N",
      "OW0",
      "Z"
    ],
    "stressPattern": [
      2,
      0,
      1,
      0
    ],
    "syllableCount": 4,
    "rhymeKey": "IYNOWZ",
    "freqScore": 5
  },
  {
    "id": 996,
    "text": "fluvial",
    "phonemes": [
      "F",
      "L",
      "UW1",
      "V",
      "IY0",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "UWVIYAHL",
    "freqScore": 5
  },
  {
    "id": 997,
    "text": "creator",
    "phonemes": [
      "K",
      "R",
      "IY0",
      "EY1",
      "T",
      "ER0"
    ],
    "stressPattern": [
      0,
      1,
      0
    ],
    "syllableCount": 3,
    "rhymeKey": "EYTER",
    "freqScore": 5
  },
  {
    "id": 998,
    "text": "dibrell",
    "phonemes": [
      "D",
      "IH1",
      "B",
      "R",
      "AH0",
      "L"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IHBRAHL",
    "freqScore": 5
  },
  {
    "id": 999,
    "text": "friscia",
    "phonemes": [
      "F",
      "R",
      "IY1",
      "S",
      "CH",
      "AH0"
    ],
    "stressPattern": [
      1,
      0
    ],
    "syllableCount": 2,
    "rhymeKey": "IYSCHAH",
    "freqScore": 5
  }
];

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
