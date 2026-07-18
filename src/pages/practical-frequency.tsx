import { useCallback } from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components";
import { usePageMeta } from "@/hooks";
import FrequencyContent from "../content/practical/frequency.mdx";

export default function PracticalFrequency() {
  usePageMeta({
    title: "기출 빈출 - 실기 대비",
    description: "정보보안기사 실기 기출복원 3~29회 분석 기반 빈출 주제·유형·전략 정리",
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">기출 빈출 분석</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          기출복원 3~29회를 분석한 빈출 주제·유형별 반복 패턴·대비 전략
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <MDXProvider components={mdxComponents}>
              <FrequencyContent />
            </MDXProvider>
          </article>
        </div>
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
