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

interface CharacterCalibrationStats {
  directMean: number;
  directStd: number;
  maxDirect: number;
  unitTraitDir: SoulDimensions;
  traitProjMean: number;
  traitProjStd: number;
}

/**
 * Precompute exact analytical mean, standard deviation, and 5D directional unit vectors
 * for all 36 characters across the 20 questions so no character suffers from
 * 5D hubness bias or question-count denominator penalty.
 */
const CHARACTER_CALIBRATION: Record<CharacterId, CharacterCalibrationStats> = (() => {
  const meanCharDims: SoulDimensions = {
    obsession: 0,
    sanity: 0,
    ruthlessness: 0,
    empathy: 0,
    wit: 0,
  };
  for (const char of CHARACTER_LIST) {
    for (const dim of ALL_DIMENSIONS) {
      meanCharDims[dim] += char.dimensions[dim] / CHARACTER_LIST.length;
    }
  }

  const stats = {} as Record<CharacterId, CharacterCalibrationStats>;

  for (const char of CHARACTER_LIST) {
    // 1. Unit direction vector of character in 5D space relative to roster centroid
    let normSq = 0;
    const centered: SoulDimensions = {
      obsession: 0,
      sanity: 0,
      ruthlessness: 0,
      empathy: 0,
      wit: 0,
    };
    for (const dim of ALL_DIMENSIONS) {
      centered[dim] = char.dimensions[dim] - meanCharDims[dim];
      normSq += centered[dim] * centered[dim];
    }
    const norm = Math.sqrt(normSq) || 1;
    const unitTraitDir: SoulDimensions = {
      obsession: centered.obsession / norm,
      sanity: centered.sanity / norm,
      ruthlessness: centered.ruthlessness / norm,
      empathy: centered.empathy / norm,
      wit: centered.wit / norm,
    };

    // 2. Exact analytical mean & variance of direct points and 5D trait projection across 20 questions
    let directMean = 0;
    let directVar = 0;
    let maxDirect = 0;
    let traitProjMean = 0;
    let traitProjVar = 0;

    for (const q of QUIZ_QUESTIONS) {
      const wVals = q.choices.map((c) => c.characterWeights[char.id] ?? 0);
      const qMax = Math.max(...wVals);
      maxDirect += qMax;

      const qMean = wVals.reduce((a, b) => a + b, 0) / 4;
      const qVar = wVals.reduce((acc, w) => acc + (w - qMean) * (w - qMean), 0) / 4;
      directMean += qMean;
      directVar += qVar;

      const projVals = q.choices.map((c) => {
        let p = 0;
        for (const dim of ALL_DIMENSIONS) {
          p += (c.dimensionDelta[dim] ?? 0) * unitTraitDir[dim];
        }
        return p;
      });
      const pMean = projVals.reduce((a, b) => a + b, 0) / 4;
      const pVar = projVals.reduce((acc, p) => acc + (p - pMean) * (p - pMean), 0) / 4;
      traitProjMean += pMean;
      traitProjVar += pVar;
    }

    stats[char.id] = {
      directMean,
      directStd: Math.sqrt(directVar) || 1,
      maxDirect: Math.max(60, maxDirect),
      unitTraitDir,
      traitProjMean,
      traitProjStd: Math.sqrt(traitProjVar) || 1,
    };
  }

  return stats;
})();

/**
 * Pure deterministic scoring engine for the 36-character, 20-question Re:Zero SBTI quiz.
 */
export function evaluateQuizAnswers(answers: QuizAnswerMap): QuizEvaluationResult {
  const deltaSum: SoulDimensions = {
    obsession: 0,
    sanity: 0,
    ruthlessness: 0,
    empathy: 0,
    wit: 0,
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
      deltaSum[dim] += choice.dimensionDelta[dim] ?? 0;
    }

    for (const [charId, pts] of Object.entries(choice.characterWeights)) {
      const id = charId as CharacterId;
      if (pts && typeof directPoints[id] === 'number') {
        directPoints[id] += pts;
      }
    }
  }

  // Normalized 5D display bars (centered at 55 with dynamic range across 5..99)
  const normalizedTraits: SoulDimensions = {
    obsession: Math.max(8, Math.min(99, Math.round(55 + deltaSum.obsession * 0.55))),
    sanity: Math.max(8, Math.min(99, Math.round(55 + deltaSum.sanity * 0.55))),
    ruthlessness: Math.max(8, Math.min(99, Math.round(55 + deltaSum.ruthlessness * 0.55))),
    empathy: Math.max(8, Math.min(99, Math.round(55 + deltaSum.empathy * 0.55))),
    wit: Math.max(8, Math.min(99, Math.round(55 + deltaSum.wit * 0.55))),
  };

  const rawRankingData = CHARACTER_LIST.map((char) => {
    const cal = CHARACTER_CALIBRATION[char.id];

    // 1. Standardized direct choice Z-score
    const pts = directPoints[char.id] || 0;
    const directZ = (pts - cal.directMean) / cal.directStd;

    // 2. Standardized 5D directional projection Z-score
    let rawProj = 0;
    let sumSquaredDiff = 0;
    for (const dim of ALL_DIMENSIONS) {
      rawProj += deltaSum[dim] * cal.unitTraitDir[dim];
      const diff = normalizedTraits[dim] - char.dimensions[dim];
      sumSquaredDiff += diff * diff;
    }
    const traitZ = (rawProj - cal.traitProjMean) / cal.traitProjStd;
    const euclideanDist = Math.sqrt(sumSquaredDiff);

    // Combined composite Z-score (mean 0, std ~1 across all 36 characters)
    const compositeZ = directZ * 0.72 + traitZ * 0.38;

    const matchPercentage = Math.min(
      99,
      Math.max(42, Math.round(64 + compositeZ * 11.5))
    );

    return {
      character: char,
      matchPercentage,
      rawDistance: Math.round((100 - compositeZ * 10) * 10) / 10,
      directPointBonus: pts,
      compositeZ,
      euclideanDist,
    };
  });

  rawRankingData.sort((a, b) => {
    if (Math.abs(b.compositeZ - a.compositeZ) > 1e-6) {
      return b.compositeZ - a.compositeZ;
    }
    if (b.directPointBonus !== a.directPointBonus) {
      return b.directPointBonus - a.directPointBonus;
    }
    return a.euclideanDist - b.euclideanDist;
  });

  const rankings: CharacterScoreEntry[] = rawRankingData.map(
    ({ character, matchPercentage, rawDistance, directPointBonus }) => ({
      character,
      matchPercentage,
      rawDistance,
      directPointBonus,
    })
  );

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
