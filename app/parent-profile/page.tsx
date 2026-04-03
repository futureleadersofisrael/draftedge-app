"use client";

import { useRouter } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cardShadowClass =
  "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`bg-[#F8FAF8] text-[#1C1C1C] min-h-screen flex items-center justify-center p-6 selection:bg-[#7A8F3B] selection:text-white ${spaceGrotesk.className}`}
      >
        <div className="max-w-2xl w-full flex flex-col items-center">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] tracking-tight mb-4">
              מה הפרופיל והדפ״ר של הילד שלך?
            </h1>
            <p className="text-base text-[#6B7280]">
              גם הערכה כללית תעזור לנו לדייק
            </p>
          </header>

          <main className="w-full space-y-10">
            <section className="space-y-4">
              <label className="block text-sm font-bold tracking-wide text-[#6B7280] uppercase pr-2">
                פרופיל רפואי
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`}
                >
                  <span className="block text-lg font-medium text-[#1C1C1C]">
                    לא יודע
                  </span>
                </button>
                <button
                  type="button"
                  className={`w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`}
                >
                  <span className="block text-lg font-medium text-[#1C1C1C]">
                    נמוך (64 ומטה)
                  </span>
                </button>
                <button
                  type="button"
                  className={`w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`}
                >
                  <span className="block text-lg font-medium text-[#1C1C1C]">
                    בינוני (72–82)
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full text-right p-6 bg-[#7A8F3B] transition-all duration-200 rounded-xl"
                >
                  <span className="block text-lg font-bold text-white">גבוה (97)</span>
                </button>
              </div>
            </section>

            <section className="space-y-4">
              <label className="block text-sm font-bold tracking-wide text-[#6B7280] uppercase pr-2">
                דפ״ר
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`}
                >
                  <span className="block text-lg font-medium text-[#1C1C1C]">
                    לא יודע
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full text-right p-6 bg-[#7A8F3B] transition-all duration-200 rounded-xl"
                >
                  <span className="block text-lg font-bold text-white">נמוך (עד 50)</span>
                </button>
                <button
                  type="button"
                  className={`w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`}
                >
                  <span className="block text-lg font-medium text-[#1C1C1C]">
                    בינוני (50–70)
                  </span>
                </button>
                <button
                  type="button"
                  className={`w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`}
                >
                  <span className="block text-lg font-medium text-[#1C1C1C]">
                    גבוה (70+)
                  </span>
                </button>
              </div>
            </section>

            <footer className="pt-6 flex justify-center">
              <button
                type="button"
                onClick={() => router.push("/parent-values")}
                className="w-full md:w-80 py-4 bg-[#7A8F3B] text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-3"
              >
                המשך
                <span className="material-symbols-outlined transform scale-x-[-1]">
                  arrow_forward
                </span>
              </button>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
