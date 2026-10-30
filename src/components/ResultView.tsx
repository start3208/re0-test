import React from 'react';
import { RotateCcw, Share2, BookOpen } from 'lucide-react';
import { QuizEvaluationResult, DIMENSION_LABELS, DIMENSION_COLORS } from '../utils/quizEngine';
import { SoulDimensions } from '../data/rezeroData';
import { ChibiCharacterArt } from './ChibiCharacterArt';

interface ResultViewProps {
  result: QuizEvaluationResult;
  onRetake: () => void;
  onOpenShare: () => void;
  onOpenCodex: () => void;
}

const TRAIT_ORDER: (keyof SoulDimensions)[] = [
  'obsession',
  'sanity',
  'ruthlessness',
  'empathy',
  'wit',
];

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetake,
  onOpenShare,
  onOpenCodex,
}) => {
  const {
    primaryMatch,
    secondaryMatch,
    ifCounterpartMatch,
    normalizedTraits,
    exclusiveRoastQuote,
  } = result;

  const char = primaryMatch.character;

  return (
    <div className="w-full max-w-lg mx-auto pt-2 pb-24 sm:py-6 px-3.5 sm:px-4">
      {/* Single Compact Result Card */}
      <div className="bg-white/95 backdrop-blur-md border-2 border-slate-900 rounded-3xl p-4 sm:p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        {/* Top Tagline */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
          <span className="text-xs font-bold text-slate-500 truncate pr-2">
            你的测试结果 · {char.routeTag}
          </span>
          <span className="text-xs font-mono font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-md border border-violet-200 shrink-0">
            契合度 {primaryMatch.matchPercentage}%
          </span>
        </div>

        {/* Hero Row: Character True Name + Title + Transparent Q-Chibi */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="inline-block px-2 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-600 mb-1">
              本命灵魂角色
            </div>
            <h1
              className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-1 break-words"
              style={{ color: char.themeColor }}
            >
              {char.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-slate-700">
              {char.title}
            </p>
          </div>

          <div className="shrink-0">
            <ChibiCharacterArt
              characterId={char.id}
              size="lg"
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
          </div>
        </div>

        {/* Punchy 1-liner Headline */}
        <div className="bg-slate-900 text-white rounded-2xl px-3.5 sm:px-4 py-2.5 mb-3">
          <p className="text-xs sm:text-sm font-bold leading-snug">
            “{char.oneLiner}”
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {char.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Short Roast Paragraph */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 mb-3.5">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
            {char.shortRoast}
          </p>
          <p className="text-xs font-bold text-violet-700 border-t border-slate-200/70 pt-2">
            💡 {exclusiveRoastQuote}
          </p>
        </div>

        {/* Compact 5-Bar Stats */}
        <div className="space-y-2 mb-3.5">
          {TRAIT_ORDER.map((dim) => {
            const label = DIMENSION_LABELS[dim];
            const color = DIMENSION_COLORS[dim];
            const val = normalizedTraits[dim];
            return (
              <div key={dim} className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-14 text-xs font-bold text-slate-600 shrink-0">
                  {label}
                </span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${val}%`,
                      backgroundColor: color,
                    }}
                  />
                </div>
                <span className="w-9 text-right text-xs font-mono font-bold text-slate-700 tabular-nums">
                  {val}%
                </span>
              </div>
            );
          })}
        </div>

        {/* Compact Footer: Secondary & Counterpart */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200/80 text-xs">
          <div className="bg-slate-50 rounded-xl p-2 flex items-center gap-2">
            <ChibiCharacterArt
              characterId={secondaryMatch.character.id}
              size="sm"
              className="w-9 h-9 shrink-0"
            />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 font-bold">副人格</div>
              <div className="font-bold text-slate-800 truncate">
                {secondaryMatch.character.name}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-2 flex items-center gap-2">
            <ChibiCharacterArt
              characterId={ifCounterpartMatch.character.id}
              size="sm"
              className="w-9 h-9 shrink-0"
            />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 font-bold">黑化/镜像线</div>
              <div className="font-bold text-slate-800 truncate">
                {ifCounterpartMatch.character.name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Action Bar (Inline) */}
      <div className="hidden sm:flex items-center justify-center gap-2.5 mt-4">
        <button
          onClick={onOpenShare}
          className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-violet-700 text-white text-sm font-bold transition-colors cursor-pointer shadow-sm"
        >
          <Share2 className="w-4 h-4" />
          分享测试结果
        </button>
        <button
          onClick={onOpenCodex}
          className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-bold transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-violet-600" />
          36角色图鉴
        </button>
        <button
          onClick={onRetake}
          className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-sm font-bold transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          再测一次
        </button>
      </div>

      {/* Mobile Sticky Bottom Thumb-Zone Action Bar (Always accessible on any phone screen height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3.5 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
        <div className="max-w-lg mx-auto flex items-center gap-2">
          <button
            onClick={onOpenShare}
            className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-1.5 px-4 rounded-xl bg-slate-900 active:bg-violet-700 text-white text-sm font-bold transition-transform active:scale-[0.98] touch-manipulation"
          >
            <Share2 className="w-4 h-4" />
            <span>分享结果</span>
          </button>
          <button
            onClick={onOpenCodex}
            className="min-h-[46px] px-3.5 rounded-xl bg-violet-50 active:bg-violet-100 text-violet-800 border border-violet-200 text-xs font-bold inline-flex items-center justify-center gap-1 transition-transform active:scale-[0.98] touch-manipulation"
          >
            <BookOpen className="w-4 h-4 text-violet-600" />
            <span>全图鉴</span>
          </button>
          <button
            onClick={onRetake}
            aria-label="再测一次"
            className="min-h-[46px] px-3.5 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-700 text-xs font-bold inline-flex items-center justify-center gap-1 transition-transform active:scale-[0.98] touch-manipulation"
          >
            <RotateCcw className="w-4 h-4" />
            <span>重测</span>
          </button>
        </div>
      </div>
    </div>
  );
};
