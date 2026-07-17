import { useCallback } from "react";
import { MDXProvider } from "@mdx-js/react";
import { summarySections, summarySubjects } from "../content/practical/summary";
import { mdxComponents } from "@/components";
import { usePageMeta } from "@/hooks";

export default function PracticalSummary() {
  usePageMeta({
    title: "핵심 요약 - 실기 대비",
    description: "정보보안기사 실기 시험 대비 전 과목 핵심 요약 정리",
  });

  const scrollByScreen = useCallback((direction: "up" | "down") => {
    const scrollAmount = window.innerHeight * 0.8;
    window.scrollBy({
      top: direction === "down" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="py-8 px-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">핵심 요약</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          전 과목 18개 섹션 핵심 정리를 한 페이지로 학습합니다
        </p>

        {/* 목차 */}
        <nav className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            목차
          </h2>
          <div className="space-y-4">
            {summarySubjects.map((subject) => (
              <div key={subject}>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">{subject}</p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                  {summarySections
                    .filter((section) => section.subject === subject)
                    .map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="flex items-baseline gap-2 px-2 py-1 rounded text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition"
                        >
                          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                            S{String(section.no).padStart(2, "0")}
                          </span>
                          {section.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* 본문: 전 섹션 연속 스크롤 */}
        <MDXProvider components={mdxComponents}>
          <div className="space-y-10">
            {summarySections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="shrink-0 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-sm font-mono font-bold">
                    S{String(section.no).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{section.subject}</p>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <article className="prose prose-gray dark:prose-invert max-w-none">
                    <section.component />
                  </article>
                </div>
              </section>
            ))}
          </div>
        </MDXProvider>
      </div>

      {/* Scroll Buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-2">
        <button
          onClick={() => scrollByScreen("up")}
          className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600"
          aria-label="위로 스크롤"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button
          onClick={() => scrollByScreen("down")}
          className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 dark:active:bg-gray-600"
          aria-label="아래로 스크롤"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
