"use client";

import { Space_Grotesk } from "next/font/google";
import { useRouter } from "next/navigation";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`${spaceGrotesk.className} text-[#1C1C1C] antialiased min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8]`}
        data-flow-screen="next_steps_roadmap_updated_content"
      >
        <main className="w-full max-w-[600px] flex flex-col items-center">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight mb-4">
              זה מה שכדאי לך להתחיל לעשות כבר עכשיו
            </h1>
            <p className="text-[#6B7280] text-base max-w-md mx-auto">
              רוב האנשים נתקעים כאן כי הם לא יודעים מה לעשות בזמן
            </p>
          </header>

          <div
            className="w-full bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 mb-8 relative overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
          >
            <ul className="space-y-6">
              <li className="flex items-center gap-6 group">
                <span className="text-xl font-bold text-[#7A8F3B]/30 group-hover:text-[#7A8F3B] transition-colors duration-200">
                  01
                </span>
                <div className="flex-1">
                  <p className="text-[#1C1C1C] font-medium text-lg">
                    לבדוק לאילו מיונים אתה יכול להגיע לפי הנתונים שלך
                  </p>
                </div>
              </li>
              <div className="h-px w-full bg-gray-50" />
              <li className="flex items-center gap-6 group">
                <span className="text-xl font-bold text-[#7A8F3B]/30 group-hover:text-[#7A8F3B] transition-colors duration-200">
                  02
                </span>
                <div className="flex-1">
                  <p className="text-[#1C1C1C] font-medium text-lg">
                    להתחיל הכנה בסיסית שמתאימה למסלול (פיזית או מנטלית)
                  </p>
                </div>
              </li>
              <div className="h-px w-full bg-gray-50" />
              <li className="flex items-center gap-6 group">
                <span className="text-xl font-bold text-[#7A8F3B]/30 group-hover:text-[#7A8F3B] transition-colors duration-200">
                  03
                </span>
                <div className="flex-1">
                  <p className="text-[#1C1C1C] font-medium text-lg">
                    לזהות מה חסר לך כרגע כדי להתקדם לשלב הבא
                  </p>
                </div>
              </li>
              <div className="h-px w-full bg-gray-50" />
              <li className="flex items-center gap-6 group">
                <span className="text-xl font-bold text-[#7A8F3B]/30 group-hover:text-[#7A8F3B] transition-colors duration-200">
                  04
                </span>
                <div className="flex-1">
                  <p className="text-[#1C1C1C] font-medium text-lg">
                    להבין מה הצעד הבא שאתה צריך לעשות בתהליך
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center mb-10">
            <p className="text-[#6B7280] text-sm font-medium">
              זה כיוון ראשוני — אפשר לדייק את זה הרבה יותר
            </p>
          </div>

          <div className="flex flex-col items-center w-full space-y-6">
            <button
              type="button"
              data-flow-primary
              onClick={() => {
                router.push("/personal_ai_coach_intro_tailored_guidance");
              }}
              className="w-full py-4 bg-[#7A8F3B] text-white font-bold rounded-full shadow-lg shadow-[#7A8F3B]/20 hover:shadow-[#7A8F3B]/30 hover:scale-[1.01] transition-all active:scale-95"
            >
              תרצה שנבנה לך תוכנית מדויקת יותר?
            </button>
            <button
              type="button"
              className="text-[#6B7280] font-medium text-sm hover:text-[#1C1C1C] transition-colors duration-150 group flex items-center gap-2"
            >
              אני רוצה להבין לבד בינתיים
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform duration-150">
                arrow_back
              </span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
