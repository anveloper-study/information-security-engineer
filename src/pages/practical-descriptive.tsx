import { useState, useMemo } from "react";
import { usePageMeta } from "@/hooks";
import { PRACTICAL_SUBJECTS, type PracticalSubject } from "@/types";
import { allDescriptive } from "@/content/practical/descriptive";

export default function PracticalDescriptive() {
  usePageMeta({
    title: "서술형 - 실기 대비",
    description: "정보보안기사 실기 서술형 문제 연습",
  });

  const [selectedSubject, setSelectedSubject] = useState<PracticalSubject | "all">("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return selectedSubject === "all"
      ? allDescriptive
      : allDescriptive.filter((q) => q.subject === selectedSubject);
  }, [selectedSubject]);

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">서술형</h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value as PracticalSubject | "all")}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
          >
            <option value="all">전체 과목</option>
            {(Object.keys(PRACTICAL_SUBJECTS) as PracticalSubject[]).map((key) => (
              <option key={key} value={key}>
                {PRACTICAL_SUBJECTS[key]}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">총 {filtered.length}개</p>

        <div className="space-y-3">
          {filtered.map((q, i) => {
            const id = `${q.subject}-${i}`;
            const isOpen = openItems.has(id);
            return (
              <div
                key={id}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full text-left p-4 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition"
                >
                  <span className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 text-xs font-bold">
                    Q
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
                      {q.question}
                    </p>
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      {PRACTICAL_SUBJECTS[q.subject]}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 ml-9">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50">
                      <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                        {q.answer}
                      </p>
                    </div>
                    {q.keywords.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {q.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
