import { useState, useMemo, useRef } from 'react';
import { BookOpen, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from './data/rezeroData';
import { evaluateQuizAnswers, QuizAnswerMap } from './utils/quizEngine';
import { QuizStage } from './components/QuizStage';
import { ResultView } from './components/ResultView';
import { ShareModal } from './components/ShareModal';
import { CharacterCodex } from './components/CharacterCodex';

type AppViewState = 'TITLE_MENU' | 'ACTIVE_QUIZ' | 'RESULT_SUMMARY';

export default function App() {
  const [viewState, setViewState] = useState<AppViewState>('TITLE_MENU');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswerMap>({});
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const [persistentToast, setPersistentToast] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isCodexOpen, setIsCodexOpen] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const evaluationResult = useMemo(() => {
    if (viewState !== 'RESULT_SUMMARY') return null;
    return evaluateQuizAnswers(answers);
  }, [viewState, answers]);

  const handleStartQuiz = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setActiveToast(null);
    setPersistentToast(null);
    setIsTransitioning(false);
    setViewState('ACTIVE_QUIZ');
  };

  const handleSelectChoice = (
    questionId: number,
    choiceIndex: number,
    roastTag: string
  ) => {
    if (isTransitioning) return;

    setAnswers((prev) => ({
      ...prev,
      [questionId]: choiceIndex,
    }));
    setActiveToast(roastTag);
    setPersistentToast(roastTag);
    setIsTransitioning(true);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setActiveToast(null);
      } else {
        setViewState('RESULT_SUMMARY');
      }
      setIsTransitioning(false);
    }, 1050);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0 && !isTransitioning) {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setCurrentQuestionIndex((prev) => prev - 1);
      setActiveToast(null);
    }
  };

  const handleRetake = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setActiveToast(null);
    setPersistentToast(null);
    setIsTransitioning(false);
    setViewState('TITLE_MENU');
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#F8F7FC] text-slate-900 select-none">
      {/* Compact Sticky Mobile/Desktop Header Bar (52px height, <8% of viewport) */}
      <header className="sticky top-0 z-20 h-13 bg-white/85 backdrop-blur-md border-b border-slate-200/80 px-3.5 sm:px-6 flex items-center justify-between">
        <button
          onClick={handleRetake}
          className="min-h-[44px] inline-flex items-center gap-2 text-left cursor-pointer touch-manipulation"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-violet-600 shrink-0" />
          <span className="font-black text-xs sm:text-sm tracking-tight text-slate-900 truncate">
            Re:0 灵魂属性测试
          </span>
        </button>

        <div className="flex items-center gap-1.5">
          {viewState !== 'TITLE_MENU' && (
            <button
              onClick={handleRetake}
              className="min-h-[40px] px-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 active:bg-slate-200 inline-flex items-center gap-1 cursor-pointer touch-manipulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>首页</span>
            </button>
          )}
          <button
            onClick={() => setIsCodexOpen(true)}
            className="min-h-[40px] px-3 rounded-xl bg-violet-50 hover:bg-violet-100 active:bg-violet-200 text-violet-800 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer touch-manipulation"
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-600" />
            <span>图鉴 (36)</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col ${
          viewState === 'TITLE_MENU' ? 'justify-center' : 'justify-start'
        }`}
      >
        {viewState === 'TITLE_MENU' && (
          <div className="w-full max-w-md mx-auto px-4 py-6 sm:py-8">
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.07)] text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>36位人气角色 · 含监视塔与大罪IF线</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
                测测你是《Re:0》里的谁
              </h1>

              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                20 道直觉快问快答，高区分度测出你的异世界精神状态与本命角色（收录主线全阵营、梅莉、夏乌拉、魔女教与 IF 线共 36 人）
              </p>

              {/* Primary CTA — 52px tall thumb-friendly button */}
              <button
                onClick={handleStartQuiz}
                className="w-full min-h-[52px] py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-violet-700 text-white font-black text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation active:scale-[0.98]"
              >
                <span>开始测试（20题直觉速测）</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCodexOpen(true)}
                className="mt-3 min-h-[44px] px-4 rounded-xl inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 hover:text-violet-700 active:bg-slate-100 transition-colors cursor-pointer touch-manipulation"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>查看全部 36 种角色结局图鉴</span>
              </button>
            </div>
          </div>
        )}

        {viewState === 'ACTIVE_QUIZ' && (
          <QuizStage
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={QUIZ_QUESTIONS.length}
            selectedChoiceIndex={answers[QUIZ_QUESTIONS[currentQuestionIndex].id]}
            isTransitioning={isTransitioning}
            onSelectChoice={handleSelectChoice}
            onPrevious={handlePreviousQuestion}
            activeToast={activeToast}
            persistentToast={persistentToast}
          />
        )}

        {viewState === 'RESULT_SUMMARY' && evaluationResult && (
          <ResultView
            result={evaluationResult}
            onRetake={handleRetake}
            onOpenShare={() => setIsShareModalOpen(true)}
            onOpenCodex={() => setIsCodexOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      {evaluationResult && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          result={evaluationResult}
        />
      )}

      <CharacterCodex
        isOpen={isCodexOpen}
        onClose={() => setIsCodexOpen(false)}
        unlockedCharacterId={evaluationResult?.primaryMatch.character.id}
      />
    </div>
  );
}
