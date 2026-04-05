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

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`${inter.className} text-[#1C1C1C] antialiased overflow-x-hidden min-h-screen bg-[#F8FAF8]`}
        data-flow-screen="personal_ai_coach_intro_tailored_guidance"
      >
        <main className="min-h-screen flex flex-col items-center justify-center p-6 py-12 md:py-24">
          <div className="w-full max-w-[540px] flex flex-col items-center">
            <div className="text-center mb-12">
              <h1
                className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-[#1C1C1C] tracking-tight mb-4 leading-tight`}
              >
                בוא נדייק מה נכון לך לעשות עכשיו
              </h1>
              <p className="text-[#6B7280] text-base md:text-lg font-medium max-w-sm mx-auto">
                בהתבסס על הנתונים שלך — אפשר להבין בדיוק איך להתקדם מכאן
              </p>
            </div>

            <div className="w-full bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E5E7EB]">
              <h2
                className={`${spaceGrotesk.className} text-xl font-bold text-[#1C1C1C] mb-8 flex items-center gap-3`}
              >
                <span
                  className="material-symbols-outlined text-[#7A8F3B] text-2xl"
                  data-icon="psychology"
                >
                  psychology
                </span>
                מה המאמן יכול לעשות עבורך:
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#F1F3ED] flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[#7A8F3B] text-sm"
                      data-icon="target"
                    >
                      target
                    </span>
                  </div>
                  <span className="text-[#1C1C1C] text-lg leading-snug font-medium">
                    להבין לאן באמת כדאי לכוון לפי הנתונים שלך
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#F1F3ED] flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[#7A8F3B] text-sm"
                      data-icon="trending_up"
                    >
                      trending_up
                    </span>
                  </div>
                  <span className="text-[#1C1C1C] text-lg leading-snug font-medium">
                    לקבל צעד מדויק שאתה צריך לעשות עכשיו
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#F1F3ED] flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[#7A8F3B] text-sm"
                      data-icon="shield"
                    >
                      shield
                    </span>
                  </div>
                  <span className="text-[#1C1C1C] text-lg leading-snug font-medium">
                    להימנע מטעויות שגורמות לפספס הזדמנויות
                  </span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-[#6B7280] text-sm font-medium text-center">
              זה כבר לא כיוון כללי — זה מותאם למה שאתה צריך עכשיו
            </p>

            <div className="mt-12 w-full flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  router.push("/ai_chat_personalized_coaching");
                }}
                className={`w-full py-4 bg-[#7A8F3B] hover:opacity-90 transition-all duration-200 text-white ${spaceGrotesk.className} font-bold text-lg rounded-full flex items-center justify-center gap-2 shadow-sm`}
              >
                בוא נראה מה נכון לי עכשיו
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="arrow_forward_ios"
                >
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                className="w-full py-3 text-[#6B7280] hover:text-[#1C1C1C] transition-colors duration-200 font-bold text-sm flex items-center justify-center gap-2"
              >
                <span
                  className="material-symbols-outlined text-base"
                  data-icon="person_off"
                >
                  person_off
                </span>
                אני אמשיך לבד בינתיים
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
