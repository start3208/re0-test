import React, { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import { QuizEvaluationResult, formatSocialShareText } from '../utils/quizEngine';
import { ChibiCharacterArt } from './ChibiCharacterArt';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: QuizEvaluationResult;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  result,
}) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const char = result.primaryMatch.character;
  const shareText = formatSocialShareText(result);

  const handleCopyShareText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md max-h-[90dvh] flex flex-col bg-white rounded-t-3xl sm:rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        {/* Mobile Drag Handle */}
        <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-violet-600" />
            <h3 className="font-bold text-slate-900 text-sm">
              长按截屏或复制文案分享
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="关闭分享弹窗"
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer touch-manipulation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {/* Screenshot Card */}
          <div className="rounded-2xl border-2 border-slate-900 p-4 sm:p-5 bg-white">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
              <span className="truncate pr-2">Re:0 灵魂属性测试 · {char.routeTag}</span>
              <span className="text-violet-700 font-mono shrink-0">
                契合度 {result.primaryMatch.matchPercentage}%
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 mb-3">
              <div>
                <div
                  className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-1"
                  style={{ color: char.themeColor }}
                >
                  {char.name}
                </div>
                <div className="text-xs font-bold text-slate-600">
                  {char.title}
                </div>
              </div>
              <ChibiCharacterArt characterId={char.id} size="md" />
            </div>

            <div className="bg-slate-900 text-white rounded-xl px-3.5 py-2.5 text-xs font-bold mb-3">
              “{char.oneLiner}”
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {char.shortRoast}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {char.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyShareText}
            className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-violet-700 text-white text-sm font-bold transition-colors cursor-pointer touch-manipulation active:scale-[0.98]"
          >
            {copiedText ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>已复制结果文案！快去粘贴分享吧</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>一键复制结果文案</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
