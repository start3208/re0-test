import React from 'react';
import { ArrowLeft, Zap } from 'lucide-react';
import { QuizQuestion } from '../data/rezeroData';

interface QuizStageProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedChoiceIndex?: number;
  isTransitioning: boolean;
  onSelectChoice: (questionId: number, choiceIndex: number, roastTag: string) => void;
  onPrevious: () => void;
  activeToast: string | null;
  persistentToast: string | null;
}

const BADGE_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizStage: React.FC<QuizStageProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedChoiceIndex,
  isTransitioning,
  onSelectChoice,
  onPrevious,
  activeToast,
  persistentToast,
}) => {
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-3.5 sm:px-4 pt-2 pb-6 sm:py-8 flex flex-col justify-between min-h-[calc(100dvh-56px)] sm:min-h-0">
      {/* Top Section: Progress Bar + Fixed-Height Lightning Banner (Zero Layout Shift) */}
      <div>
        <div className="mb-2.5 sm:mb-3.5 px-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
            <span className="tabular-nums">
              第 {currentIndex + 1} / {totalQuestions} 题
            </span>
            <span className="font-mono tabular-nums text-violet-700">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-violet-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Fixed-Height Slot: Only highlights when current question's choice is actively triggered; otherwise quiet muted caption */}
        <div className="mb-2.5 h-10 flex items-center">
          {activeToast ? (
            <div className="w-full h-full px-3.5 rounded-2xl bg-slate-900 text-amber-300 shadow-sm border border-slate-800 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all duration-200">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
              <span className="truncate">{activeToast}</span>
            </div>
          ) : persistentToast ? (
            <div className="w-full h-full px-2 flex items-center gap-1.5 text-xs text-slate-400 font-normal">
              <span className="truncate">上题：{persistentToast}</span>
            </div>
          ) : (
            <div className="w-full h-full px-2 flex items-center text-xs text-slate-400 font-normal">
              <span>凭第一直觉点击选项</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Question & Thumb-Zone Choices Card */}
      <div className="bg-white border-2 border-slate-900 rounded-3xl p-4 sm:p-7 shadow-[0_10px_25px_rgba(15,23,42,0.06)] flex-1 sm:flex-initial flex flex-col justify-between">
        {/* Min-height question container so 1-line vs 2-line questions never shift option positions */}
        <div className="min-h-[52px] sm:min-h-[60px] flex items-center mb-3 sm:mb-5">
          <h2 className="text-base sm:text-xl font-black text-slate-900 leading-snug">
            {question.question}
          </h2>
        </div>

        {/* Ergonomic Thumb-Zone Option Buttons (Consistent height, >= 54px touch targets) */}
        <div className="space-y-2.5 my-auto">
          {question.choices.map((choice, idx) => {
            const isSelected = selectedChoiceIndex === choice.index;
            return (
              <button
                key={`${question.id}-${choice.index}`}
                data-testid={`choice-${BADGE_LETTERS[idx] ?? idx + 1}`}
                disabled={isTransitioning}
                onClick={() =>
                  onSelectChoice(question.id, choice.index, choice.roastTag)
                }
                className={`w-full min-h-[54px] sm:min-h-[58px] text-left px-3.5 py-3 sm:p-4 rounded-2xl border-2 transition-transform duration-150 flex items-center gap-3 cursor-pointer touch-manipulation active:scale-[0.98] ${
                  isSelected
                    ? 'bg-violet-600 border-slate-900 text-white shadow-sm'
                    : 'bg-slate-50/80 sm:hover:bg-violet-50/60 border-slate-200/90 sm:hover:border-violet-400 text-slate-800'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-white text-violet-700'
                      : 'bg-white border border-slate-200 text-slate-600'
                  }`}
                >
                  {BADGE_LETTERS[idx] ?? idx + 1}
                </span>
                <span className="text-sm sm:text-base font-bold leading-snug">
                  {choice.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Navigation Bar (44px min touch target) */}
        <div className="mt-3.5 sm:mt-5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
          {currentIndex > 0 ? (
            <button
              disabled={isTransitioning}
              onClick={onPrevious}
              className="min-h-[44px] px-3 -ml-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 active:bg-slate-100 transition-colors cursor-pointer touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回上一题</span>
            </button>
          ) : (
            <div className="min-h-[44px] flex items-center text-xs text-slate-400 font-medium">
              共 20 道直觉快问快答
            </div>
          )}

          <span className="text-[11px] font-bold text-slate-400 tabular-nums">
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
      </div>
    </div>
  );
};
