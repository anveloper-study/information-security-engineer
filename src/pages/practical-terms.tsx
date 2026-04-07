import { useState, useMemo } from "react";
import { usePageMeta } from "@/hooks";
import { PRACTICAL_SUBJECTS, type PracticalSubject } from "@/types";
import { allTerms, type Term } from "@/content/practical/terms";

type StudyMode = "list" | "card";

export default function PracticalTerms() {
  usePageMeta({
    title: "약어/용어 - 실기 대비",
    description: "정보보안기사 실기 필수 약어 및 핵심 용어 암기",
  });

  const [selectedSubject, setSelectedSubject] = useState<PracticalSubject | "all">("all");
  const [mode, setMode] = useState<StudyMode>("list");
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let terms = selectedSubject === "all" ? allTerms : allTerms.filter((t) => t.subject === selectedSubject);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      terms = terms.filter(
        (t) =>
          t.abbreviation.toLowerCase().includes(q) ||
          t.fullName.toLowerCase().includes(q) ||
          t.korean.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
    return terms;
  }, [selectedSubject, search]);

  const currentCard: Term | undefined = filtered[cardIndex];

  const nextCard = () => {
    setShowAnswer(false);
    setCardIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCardIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">약어 / 용어</h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value as PracticalSubject | "all");
              setCardIndex(0);
              setShowAnswer(false);
            }}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          >
            <option value="all">전체 과목</option>
            {(Object.keys(PRACTICAL_SUBJECTS) as PracticalSubject[]).map((key) => (
              <option key={key} value={key}>
                {PRACTICAL_SUBJECTS[key]}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="검색 (약어, 이름, 설명)"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCardIndex(0);
              setShowAnswer(false);
            }}
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm placeholder:text-gray-400"
          />

          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
            <button
              onClick={() => setMode("list")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                mode === "list"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              목록
            </button>
            <button
              onClick={() => {
                setMode("card");
                setCardIndex(0);
                setShowAnswer(false);
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                mode === "card"
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              카드
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">총 {filtered.length}개</p>

        {mode === "list" ? (
          /* List Mode */
          <div className="space-y-3">
            {filtered.map((term, i) => (
              <div
                key={`${term.subject}-${term.abbreviation}-${i}`}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                      {term.abbreviation}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{term.fullName}</span>
                  </div>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {PRACTICAL_SUBJECTS[term.subject]}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">{term.korean}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{term.description}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Card Mode */
          filtered.length > 0 && currentCard ? (
            <div className="flex flex-col items-center">
              <div
                onClick={() => setShowAnswer(!showAnswer)}
                className="w-full max-w-md min-h-[280px] p-8 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-500 transition flex flex-col items-center justify-center text-center select-none"
              >
                {!showAnswer ? (
                  <>
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                      {currentCard.abbreviation}
                    </p>
                    <p className="text-sm text-gray-400">탭하여 정답 확인</p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {currentCard.fullName}
                    </p>
                    <p className="text-base font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                      {currentCard.korean}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentCard.description}
                    </p>
                  </>
                )}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={prevCard}
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-medium"
                >
                  ← 이전
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {cardIndex + 1} / {filtered.length}
                </span>
                <button
                  onClick={nextCard}
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-medium"
                >
                  다음 →
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-12">검색 결과가 없습니다.</p>
          )
        )}
      </div>
    </div>
  );
}
