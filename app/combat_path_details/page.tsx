"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { useRouter } from "next/navigation";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const noiseSvg = encodeURIComponent(
  `<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)'/></svg>`
);

const iconFilled = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
} as const;

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] text-[#1C1C1C] relative ${inter.className}`}
        data-flow-screen="combat_path_details"
      >
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
          }}
          aria-hidden
        />

        <main className="w-full max-w-2xl flex flex-col items-center relative z-10">
          <h1
            className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-12 text-center tracking-tight`}
          >
            זה מסלול שיכול להתאים לך
          </h1>

          <div className="w-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-12 border-t-4 border-[#7A8F3B] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">
                verified_user
              </span>
            </div>
            <div className="relative z-10">
              <h2
                className={`${spaceGrotesk.className} text-2xl md:text-3xl font-extrabold text-[#1C1C1C] mb-3 leading-tight`}
              >
                שירות קרבי עם פוטנציאל לקצונה
              </h2>
              <p className="text-[#6B7280] text-lg font-medium mb-10 leading-relaxed max-w-md">
                לפי מה שענית — זה אחד הכיוונים שיכול להתאים לך במיוחד
              </p>
              <div className="space-y-6">
                <h3
                  className={`${spaceGrotesk.className} text-sm uppercase tracking-widest font-bold text-[#1C1C1C]`}
                >
                  זה מתאים לך כי:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-[#7A8F3B] mt-0.5"
                      style={iconFilled}
                    >
                      check_circle
                    </span>
                    <span className="text-[#1C1C1C] font-medium text-lg">
                      הפרופיל שלך מאפשר את זה
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-[#7A8F3B] mt-0.5"
                      style={iconFilled}
                    >
                      check_circle
                    </span>
                    <span className="text-[#1C1C1C] font-medium text-lg">
                      זה תואם למה שחשוב לך בשירות
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-[#7A8F3B] mt-0.5"
                      style={iconFilled}
                    >
                      check_circle
                    </span>
                    <span className="text-[#1C1C1C] font-medium text-lg">
                      ויש לך מספיק זמן להתקדם לשם
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center w-full">
            <p className="text-[#6B7280] text-sm font-semibold mb-8 text-center tracking-wide">
              זה לא קורה לבד — צריך לדעת איך לפעול נכון לאורך הדרך
            </p>
            <button
              type="button"
              data-flow-primary
              onClick={() => {
                router.push("/next_steps_roadmap_updated_content");
              }}
              className="group relative flex items-center justify-center gap-3 bg-[#7A8F3B] hover:bg-[#6a7d33] text-white px-10 py-5 w-full md:w-auto min-w-[320px] transition-all duration-150 active:scale-95 shadow-lg"
            >
              <span
                className={`${spaceGrotesk.className} font-bold text-lg tracking-tight uppercase`}
              >
                מה הצעד הראשון שאני צריך לעשות?
              </span>
              <span className="material-symbols-outlined group-hover:translate-x-[-4px] transition-transform">
                arrow_back
              </span>
            </button>
            <div className="mt-12 flex gap-2 items-center opacity-40">
              <div className="h-1 w-12 bg-[#1C1C1C]" />
              <div className="h-1 w-12 bg-[#7A8F3B]" />
              <div className="h-1 w-12 bg-[#1C1C1C]" />
            </div>
          </div>
        </main>

        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#7A8F3B] blur-[120px] rounded-full" />
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1C1C1C] blur-[120px] rounded-full" />
        </div>
      </div>
    </>
  );
}
