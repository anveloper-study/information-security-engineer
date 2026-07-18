import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks";

export default function PracticalHome() {
  usePageMeta({
    title: "실기 대비",
    description: "정보보안기사 실기 시험 대비 - 약어/용어, 서술형, 실무형",
  });

  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">실기 대비</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">약어·용어 암기, 서술형 답안 연습, 실무형 문제 풀이</p>

        <div className="grid gap-4">
          <Link
            to="/practical/summary"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center bg-sky-50 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">핵심 요약</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">전 과목 핵심 정리를 한 페이지로 학습합니다</p>
              </div>
            </div>
          </Link>

          <Link
            to="/practical/frequency"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-400 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center bg-violet-50 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h2v8H3v-8zM9 3h2v18H9V3zm6 6h2v12h-2V9z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">기출 빈출</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">기출복원 분석 기반 빈출 주제·전략을 확인합니다</p>
              </div>
            </div>
          </Link>

          <Link
            to="/practical/terms"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-lg text-xl font-bold">
                A
              </span>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">약어 / 용어</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">필수 약어와 핵심 용어를 암기합니다</p>
              </div>
            </div>
          </Link>

          <Link
            to="/practical/descriptive"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center bg-amber-50 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">서술형</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">개념 설명과 비교 서술을 연습합니다</p>
              </div>
            </div>
          </Link>

          <Link
            to="/practical/hands-on"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-rose-500 dark:hover:border-rose-400 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center bg-rose-50 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">실무형</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">로그 분석, 명령어, 설정 실습을 합니다</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
