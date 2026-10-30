import React, { useState } from 'react';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CHARACTER_LIST,
  ReZeroCharacter,
  RouteCategory,
  DIMENSION_LABELS,
  SoulDimensions,
} from '../data/rezeroData';
import { DIMENSION_COLORS } from '../utils/quizEngine';
import { ChibiCharacterArt } from './ChibiCharacterArt';

interface CharacterCodexProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedCharacterId?: string;
}

const TRAIT_ORDER: (keyof SoulDimensions)[] = [
  'obsession',
  'sanity',
  'ruthlessness',
  'empathy',
  'wit',
];

export const CharacterCodex: React.FC<CharacterCodexProps> = ({
  isOpen,
  onClose,
  unlockedCharacterId,
}) => {
  const [filter, setFilter] = useState<'all' | RouteCategory>('all');
  const [selectedChar, setSelectedChar] = useState<ReZeroCharacter>(
    CHARACTER_LIST.find((c) => c.id === unlockedCharacterId) || CHARACTER_LIST[0]
  );
  // On mobile (< md), toggle between full-screen grid browsing and full-screen character detail
  const [mobileShowDetail, setMobileShowDetail] = useState<boolean>(false);

  if (!isOpen) return null;

  const filteredList = CHARACTER_LIST.filter((c) => {
    if (filter === 'all') return true;
    return c.routeCategory === filter;
  });

  const emiliaCount = CHARACTER_LIST.filter((c) => c.routeCategory === 'emilia_camp').length;
  const royalCount = CHARACTER_LIST.filter((c) => c.routeCategory === 'royal_camps').length;
  const witchCount = CHARACTER_LIST.filter((c) => c.routeCategory === 'witches_cult').length;
  const ifCount = CHARACTER_LIST.filter((c) => c.routeCategory === 'if_route').length;

  const handleSelectCharacter = (char: ReZeroCharacter) => {
    setSelectedChar(char);
    setMobileShowDetail(true);
  };

  const currentIdxInFiltered = filteredList.findIndex((c) => c.id === selectedChar.id);
  const handleStepCharacter = (delta: number) => {
    if (filteredList.length === 0) return;
    const nextIdx =
      (Math.max(0, currentIdxInFiltered) + delta + filteredList.length) %
      filteredList.length;
    setSelectedChar(filteredList[nextIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[92dvh] sm:h-auto sm:max-h-[88vh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        {/* Mobile Drag Handle Affordance */}
        <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

        {/* Header */}
        <div className="px-4 sm:px-5 pt-2 sm:pt-3.5 pb-2.5 border-b border-slate-100 shrink-0">
          <div className="flex items-center justify-between mb-2">
            {mobileShowDetail ? (
              <button
                onClick={() => setMobileShowDetail(false)}
                className="md:hidden min-h-[40px] -ml-1 px-2 rounded-xl inline-flex items-center gap-1.5 text-xs font-black text-violet-700 bg-violet-50 active:bg-violet-100 touch-manipulation"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>返回角色列表 ({filteredList.length})</span>
              </button>
            ) : (
              <h3 className="font-black text-slate-900 text-sm sm:text-base">
                Re:0 全角色结局图鉴（共 {CHARACTER_LIST.length} 人）
              </h3>
            )}

            <h3 className="hidden md:block font-black text-slate-900 text-base">
              Re:0 全角色结局图鉴（共 {CHARACTER_LIST.length} 人）
            </h3>

            <button
              onClick={onClose}
              aria-label="关闭图鉴"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer touch-manipulation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontally scrollable tabs (hidden on mobile when inspecting a single character detail to save vertical space) */}
          <div
            className={`${
              mobileShowDetail ? 'hidden md:flex' : 'flex'
            } items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar`}
          >
            <button
              onClick={() => setFilter('all')}
              className={`min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              全部 ({CHARACTER_LIST.length})
            </button>
            <button
              onClick={() => setFilter('emilia_camp')}
              className={`min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation ${
                filter === 'emilia_camp'
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              艾米莉亚/监视塔 ({emiliaCount})
            </button>
            <button
              onClick={() => setFilter('royal_camps')}
              className={`min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation ${
                filter === 'royal_camps'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              王选各阵营 ({royalCount})
            </button>
            <button
              onClick={() => setFilter('witches_cult')}
              className={`min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation ${
                filter === 'witches_cult'
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              魔女与司教 ({witchCount})
            </button>
            <button
              onClick={() => setFilter('if_route')}
              className={`min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 touch-manipulation ${
                filter === 'if_route'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              大罪IF线 ({ifCount})
            </button>
          </div>
        </div>

        {/* Body: On Mobile, cleanly switch between Full Grid and Full Detail View (Zero Cramped Split!) */}
        <div className="flex-1 overflow-hidden flex flex-col md:grid md:grid-cols-12 md:divide-x divide-slate-100">
          {/* Character Grid (Full height on mobile when !mobileShowDetail; Left 7 cols on desktop) */}
          <div
            className={`${
              mobileShowDetail ? 'hidden md:grid' : 'grid'
            } md:col-span-7 flex-1 p-3.5 sm:p-4 grid-cols-2 sm:grid-cols-3 gap-2.5 content-start overflow-y-auto`}
          >
            {filteredList.map((char) => {
              const isSelected = selectedChar.id === char.id;
              return (
                <button
                  key={char.id}
                  onClick={() => handleSelectCharacter(char)}
                  className={`min-h-[68px] p-2.5 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer touch-manipulation active:scale-[0.98] ${
                    isSelected
                      ? 'bg-violet-50/90 border-violet-500 shadow-xs'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <ChibiCharacterArt
                    characterId={char.id}
                    size="sm"
                    className="w-11 h-11 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div
                      className="font-black text-xs sm:text-sm truncate leading-tight mb-0.5"
                      style={{ color: isSelected ? char.themeColor : '#0F172A' }}
                    >
                      {char.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {char.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail View (Full height on mobile when mobileShowDetail; Right 5 cols on desktop) */}
          <div
            className={`${
              mobileShowDetail ? 'flex' : 'hidden md:flex'
            } md:col-span-5 flex-1 p-4 sm:p-5 bg-slate-50/60 flex-col justify-between overflow-y-auto`}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="min-w-0">
                  <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-200/80 text-slate-700 mb-1.5">
                    {selectedChar.routeTag}
                  </span>
                  <h4
                    className="text-2xl sm:text-3xl font-black tracking-tight break-words"
                    style={{ color: selectedChar.themeColor }}
                  >
                    {selectedChar.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                    {selectedChar.title}
                  </p>
                </div>
                <ChibiCharacterArt
                  characterId={selectedChar.id}
                  size="md"
                  className="w-24 h-24 shrink-0"
                />
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-3.5 mb-3.5 text-xs sm:text-sm font-bold leading-snug">
                “{selectedChar.oneLiner}”
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 mb-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedChar.shortRoast}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {selectedChar.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Character Base 5-Dimension Bars */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-3.5 space-y-2">
                {TRAIT_ORDER.map((dim) => {
                  const val = selectedChar.dimensions[dim];
                  return (
                    <div key={dim} className="flex items-center gap-2.5">
                      <span className="w-14 text-xs font-bold text-slate-500 shrink-0">
                        {DIMENSION_LABELS[dim]}
                      </span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${val}%`,
                            backgroundColor: DIMENSION_COLORS[dim],
                          }}
                        />
                      </div>
                      <span className="w-8 text-right text-xs font-mono font-bold text-slate-700 tabular-nums">
                        {val}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Prev / Next Character Quick Switcher */}
            <div className="md:hidden mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
              <button
                onClick={() => handleStepCharacter(-1)}
                className="flex-1 min-h-[44px] px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 inline-flex items-center justify-center gap-1 active:scale-[0.98] touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>上一位角色</span>
              </button>
              <button
                onClick={() => setMobileShowDetail(false)}
                className="min-h-[44px] px-4 rounded-xl bg-slate-900 text-white text-xs font-bold inline-flex items-center justify-center active:scale-[0.98] touch-manipulation"
              >
                全部列表
              </button>
              <button
                onClick={() => handleStepCharacter(1)}
                className="flex-1 min-h-[44px] px-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 inline-flex items-center justify-center gap-1 active:scale-[0.98] touch-manipulation"
              >
                <span>下一位角色</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
