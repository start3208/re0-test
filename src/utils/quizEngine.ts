import {
  CHARACTERS,
  CHARACTER_LIST,
  CharacterId,
  ReZeroCharacter,
  QUIZ_QUESTIONS,
  SoulDimensions,
  DIMENSION_LABELS,
} from '../data/rezeroData.ts';

export interface QuizAnswerMap {
  [questionId: number]: number; // choice index (0..3)
}

export interface CharacterScoreEntry {
  character: ReZeroCharacter;
  matchPercentage: number;
  rawDistance: number;
  directPointBonus: number;
}

export interface QuizEvaluationResult {
  primaryMatch: CharacterScoreEntry;
  secondaryMatch: CharacterScoreEntry;
  ifCounterpartMatch: CharacterScoreEntry;
  allRankings: CharacterScoreEntry[];
  normalizedTraits: SoulDimensions;
  exclusiveRoastQuote: string;
}

const ALL_DIMENSIONS: (keyof SoulDimensions)[] = [
  'obsession',
  'sanity',
  'ruthlessness',
  'empathy',
  'wit',
];

export const DIMENSION_COLORS: Record<keyof SoulDimensions, string> = {
  obsession: '#7C3AED',
  sanity: '#0284C7',
  ruthlessness: '#E11D48',
  empathy: '#10B981',
  wit: '#F59E0B',
};

/**
 * Precompute the maximum achievable direct points per character across all 20 questions
 * so that affinity ratios are normalized fairly across all 36 characters.
 */
const MAX_POSSIBLE_DIRECT_POINTS: Record<CharacterId, number> = (() => {
  const maxMap = {} as Record<CharacterId, number>;
  for (const char of CHARACTER_LIST) {
    maxMap[char.id] = 0;
  }
  for (const q of QUIZ_QUESTIONS) {
    const bestForQuestion: Partial<Record<CharacterId, number>> = {};
    for (const c of q.choices) {
      for (const [charId, pts] of Object.entries(c.characterWeights)) {
        const id = charId as CharacterId;
        if (pts && pts > (bestForQuestion[id] ?? 0)) {
          bestForQuestion[id] = pts;
        }
      }
    }
    for (const [charId, pts] of Object.entries(bestForQuestion)) {
      const id = charId as CharacterId;
      if (pts) {
        maxMap[id] += pts;
      }
    }
  }
  return maxMap;
})();

/**
 * Pure deterministic scoring engine for the 36-character, 20-question Re:Zero SBTI quiz.
 */
export function evaluateQuizAnswers(answers: QuizAnswerMap): QuizEvaluationResult {
  const rawTraits: SoulDimensions = {
    obsession: 50,
    sanity: 50,
    ruthlessness: 50,
    empathy: 50,
    wit: 50,
  };

  const directPoints = {} as Record<CharacterId, number>;
  for (const char of CHARACTER_LIST) {
    directPoints[char.id] = 0;
  }

  const roastTags: string[] = [];

  for (const question of QUIZ_QUESTIONS) {
    const selectedIdx = answers[question.id];
    if (selectedIdx === undefined) continue;

    const choice = question.choices.find((c) => c.index === selectedIdx);
    if (!choice) continue;

    roastTags.push(choice.roastTag);

    for (const dim of ALL_DIMENSIONS) {
      const delta = choice.dimensionDelta[dim] ?? 0;
      rawTraits[dim] += delta * 0.55;
    }

    for (const [charId, pts] of Object.entries(choice.characterWeights)) {
      const id = charId as CharacterId;
      if (pts && typeof directPoints[id] === 'number') {
        directPoints[id] += pts;
      }
    }
  }

  const normalizedTraits: SoulDimensions = {
    obsession: Math.max(5, Math.min(99, Math.round(rawTraits.obsession))),
    sanity: Math.max(5, Math.min(99, Math.round(rawTraits.sanity))),
    ruthlessness: Math.max(5, Math.min(99, Math.round(rawTraits.ruthlessness))),
    empathy: Math.max(5, Math.min(99, Math.round(rawTraits.empathy))),
    wit: Math.max(5, Math.min(99, Math.round(rawTraits.wit))),
  };

  const rankings: CharacterScoreEntry[] = CHARACTER_LIST.map((char) => {
    let sumSquaredDiff = 0;
    for (const dim of ALL_DIMENSIONS) {
      const diff = normalizedTraits[dim] - char.dimensions[dim];
      sumSquaredDiff += diff * diff;
    }
    const euclideanDist = Math.sqrt(sumSquaredDiff);
    const maxPossibleDist = 175;
    const vectorSimilarity = Math.max(0, 100 * (1 - euclideanDist / maxPossibleDist));

    // Normalized direct choice affinity (0..100 scale)
    const maxPossible = Math.max(60, MAX_POSSIBLE_DIRECT_POINTS[char.id] || 100);
    const directAffinity = Math.min(100, ((directPoints[char.id] || 0) / maxPossible) * 100);

    const combinedScore = Math.min(
      99,
      Math.max(40, Math.round(vectorSimilarity * 0.52 + directAffinity * 0.62))
    );

    return {
      character: char,
      matchPercentage: combinedScore,
      rawDistance: Math.round(euclideanDist * 10) / 10,
      directPointBonus: directPoints[char.id] || 0,
    };
  });

  rankings.sort((a, b) => {
    if (b.matchPercentage !== a.matchPercentage) {
      return b.matchPercentage - a.matchPercentage;
    }
    if (b.directPointBonus !== a.directPointBonus) {
      return b.directPointBonus - a.directPointBonus;
    }
    return a.rawDistance - b.rawDistance;
  });

  const primaryMatch = rankings[0];
  const secondaryMatch = rankings[1] ?? rankings[0];

  const ifCounterpartMatch =
    primaryMatch.character.routeCategory === 'if_route'
      ? rankings.find((r) => r.character.routeCategory !== 'if_route') ?? secondaryMatch
      : rankings.find((r) => r.character.routeCategory === 'if_route') ?? secondaryMatch;

  let topDim: keyof SoulDimensions = 'obsession';
  for (const dim of ALL_DIMENSIONS) {
    if (normalizedTraits[dim] > normalizedTraits[topDim]) {
      topDim = dim;
    }
  }
  const topLabel = DIMENSION_LABELS[topDim];
  const topVal = normalizedTraits[topDim];
  const lastRoast = roastTags[roastTags.length - 1] ?? '精神状态极度美丽';

  const exclusiveRoastQuote = `${topLabel}高达 ${topVal}%，${lastRoast}。`;

  return {
    primaryMatch,
    secondaryMatch,
    ifCounterpartMatch,
    allRankings: rankings,
    normalizedTraits,
    exclusiveRoastQuote,
  };
}

/**
 * Generates clean, copy-ready social share text (no nickname needed).
 */
export function formatSocialShareText(result: QuizEvaluationResult): string {
  const { primaryMatch, secondaryMatch } = result;
  const char = primaryMatch.character;

  return [
    `【Re:0 灵魂属性测试】`,
    `我的测试结果是：${char.name}（契合度 ${primaryMatch.matchPercentage}%）`,
    `称号：${char.title}`,
    `「${char.oneLiner}」`,
    `标签：#${char.tags.join(' #')}`,
    `副人格：${secondaryMatch.character.name}（${secondaryMatch.matchPercentage}%）`,
    `👉 测测你是从零开始的异世界里的谁！`,
  ].join('\n');
}

export { CHARACTERS, DIMENSION_LABELS };
