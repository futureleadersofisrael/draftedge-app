"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const noiseSvg = encodeURIComponent(
  `<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>`
);

export default function Page() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("candidateDirection");
    if (saved) setDirection(saved);
  }, []);

  let title = "";
  if (direction === "clear") {
    title = "מעולה — איזה כיוון יש לך?";
  } else if (direction === "partial") {
    title = "סבבה — מה הכי מושך אותך כרגע?";
  } else {
    title = "זה לגמרי בסדר — יש משהו קטן שמסקרן אותך?";
  }

  let subtitle = "";
  if (direction === "clear") {
    subtitle = "כתוב את היחידה או התחום שמעניין אותך";
  } else if (direction === "partial") {
    subtitle = "גם אם זה לא סגור — כתוב מה שמרגיש לך נכון";
  } else {
    subtitle = "גם מחשבה קטנה או כיוון כללי זה מעולה";
  }

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] text-[#1a1c1a] relative ${inter.className}`}
      >
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
          }}
          aria-hidden
        />

        <main className="w-full max-w-2xl mx-auto flex flex-col items-center gap-y-12 relative z-10">
          <header className="text-center space-y-4">
            <h1
              className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold tracking-tight text-[#1a1c1a]`}
            >
              {title}
            </h1>
            <p className="text-lg text-[#6B7280]">{subtitle}</p>
          </header>

          <div className="w-full space-y-8 flex flex-col items-center">
            <div className="w-full space-y-2 flex flex-col">
              <div className="w-full relative">
                <textarea
                  className="w-full h-48 p-6 text-xl bg-white border-none focus:ring-0 placeholder:text-[#9CA3AF] resize-none shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[12px] text-right outline-none focus:outline-none"
                  placeholder="לדוגמה: קרבי, מודיעין, טכנולוגי, אנשים, לא יודע עדיין…"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <div className="absolute bottom-4 right-4 flex gap-2 pointer-events-none">
                  <span
                    className={`text-[10px] ${spaceGrotesk.className} uppercase tracking-[0.1rem] font-bold text-[#6B7280] opacity-40`}
                  >
                    UNIT_PREFERENCE_INPUT
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center pt-4">
              <button
                type="button"
                onClick={() => {
                  if (answer.trim() !== "") {
                    localStorage.setItem(
                      "candidateUnitPreference",
                      answer.trim()
                    );
                  }
                  router.push("/candidate_flow_profile_dapar");
                }}
                className={`group relative overflow-hidden px-12 py-4 bg-[#7A8F3B] text-white ${spaceGrotesk.className} font-bold text-lg transition-all duration-75 hover:bg-[#687a32] active:scale-[0.98] flex items-center gap-3 rounded-[12px]`}
              >
                המשך
                <span className="material-symbols-outlined transform rotate-180 text-white/80 group-hover:translate-x-[-4px] transition-transform">
                  arrow_back
                </span>
              </button>
            </div>
          </div>

          <div className="h-12" />
        </main>

        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7A8F3B]/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#7A8F3B]/3 blur-[100px]" />
        </div>
      </div>
    </>
  );
}
