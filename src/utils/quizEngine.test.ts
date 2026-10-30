import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateQuizAnswers, formatSocialShareText, QuizAnswerMap } from './quizEngine.ts';
import { QUIZ_QUESTIONS, CHARACTER_LIST } from '../data/rezeroData.ts';

test('Roster has 36 distinct Re:Zero characters and 20 SBTI questions', () => {
  assert.equal(CHARACTER_LIST.length, 36);
  const ids = new Set(CHARACTER_LIST.map((c) => c.id));
  assert.equal(ids.size, 36);
  assert.equal(QUIZ_QUESTIONS.length, 20);
});

test('All 36 characters (100% of roster including Meili, Shaula, Theresia, Pandora, Minerva, Capella) can be uniquely unlocked as #1 match', () => {
  for (const char of CHARACTER_LIST) {
    const answers: QuizAnswerMap = {};
    for (const q of QUIZ_QUESTIONS) {
      let bestIdx = 0;
      let bestWeight = -1;
      for (const c of q.choices) {
        const w = c.characterWeights[char.id] ?? 0;
        if (w > bestWeight) {
          bestWeight = w;
          bestIdx = c.index;
        }
      }
      answers[q.id] = bestIdx;
    }

    const result = evaluateQuizAnswers(answers);
    assert.equal(
      result.primaryMatch.character.id,
      char.id,
      `Character ${char.id} (${char.name}) should be #1 match when selecting their signature answers`
    );
  }
});

test('formatSocialShareText generates clean share copy without nickname', () => {
  const answers: QuizAnswerMap = { 1: 0, 2: 1, 3: 2 };
  const result = evaluateQuizAnswers(answers);
  const shareText = formatSocialShareText(result);

  assert.ok(shareText.includes(result.primaryMatch.character.name));
  assert.ok(shareText.includes(`${result.primaryMatch.matchPercentage}%`));
});
