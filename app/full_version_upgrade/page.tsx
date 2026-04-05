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
  weight: ["300", "400", "500", "600", "700"],
});

const inputLineClass =
  "border-none border-b-2 border-[#e2e3df] bg-transparent rounded-none py-3 w-full text-lg font-medium transition-all duration-150 outline-none focus:border-[#7A8F3B] focus:bg-[rgba(122,143,59,0.02)] focus:shadow-none";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`${inter.className} min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] text-[#142034] relative`}
        data-flow-screen="full_version_upgrade"
      >
        <main className="w-full max-w-2xl flex flex-col items-center relative z-10">
          <header className="text-center mb-12">
            <h1
              className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold tracking-tight text-[#142034] mb-4`}
            >
              יש לך גרסה מלאה שמחכה לך
            </h1>
            <p className="text-lg text-[#2a354b] opacity-80 max-w-xl mx-auto leading-relaxed">
              מה שראית עד עכשיו זה רק התחלה — בגרסה המלאה אפשר לקבל כיוון הרבה
              יותר מדויק והכוונה שלב אחר שלב
            </p>
          </header>

          <div className="w-full bg-white rounded-none shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 md:p-14 mb-8">
            <h2
              className={`${spaceGrotesk.className} text-xl font-bold mb-8 text-[#142034]`}
            >
              בגרסה המלאה תוכל לקבל:
            </h2>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-[#7A8F3B] mt-1 text-xl"
                  data-icon="task_alt"
                >
                  task_alt
                </span>
                <span className="text-lg text-[#142034]">
                  תוכנית פעולה מדויקת לפי הנתונים שלך
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-[#7A8F3B] mt-1 text-xl"
                  data-icon="person_pin_circle"
                >
                  person_pin_circle
                </span>
                <span className="text-lg text-[#142034]">
                  הכוונה אישית לכל שלב בתהליך
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-[#7A8F3B] mt-1 text-xl"
                  data-icon="question_answer"
                >
                  question_answer
                </span>
                <span className="text-lg text-[#142034]">
                  תשובות מותאמות לשאלות שלך לאורך הדרך
                </span>
              </li>
            </ul>

            <div className="space-y-8">
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#2a354b] mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  className={inputLineClass}
                  placeholder="הכנס מייל"
                  type="email"
                />
              </div>
              <div className="relative">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#2a354b] mb-1">
                  PHONE NUMBER (OPTIONAL)
                </label>
                <input
                  className={inputLineClass}
                  placeholder="הכנס מספר טלפון (לא חובה)"
                  type="tel"
                />
              </div>
            </div>

            <div className="mt-14 flex flex-col items-center gap-6">
              <button
                type="button"
                data-flow-primary
                onClick={() => {
                  router.push("/pricing_survey_light_style");
                }}
                className={`${spaceGrotesk.className} w-full py-5 px-8 font-bold text-base uppercase tracking-wider bg-[#7A8F3B] text-white transition-all duration-75 ease-in-out hover:bg-[#6a7c33] hover:-translate-y-px`}
              >
                שלח לי גישה לגרסה המלאה
              </button>
              <a
                className="text-[#2a354b] hover:text-[#7A8F3B] font-semibold text-sm transition-colors duration-200"
                href="#"
              >
                אני רוצה להמשיך לבד בינתיים
              </a>
            </div>
          </div>

          <footer className="text-center">
            <p className="text-xs font-medium text-[#2a354b] opacity-60 tracking-wide uppercase">
              בלי ספאם. רק דברים שיעזרו לך להתקדם נכון
            </p>
          </footer>
        </main>

        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]"
          data-alt="Subtle natural paper texture for organic tactile feel"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj71hS5iJEbvuD-BF7aPWY-KMp2MAGmrGMugSk1663fJXIrr2DPyNsdO4Lg0IRG7Ne9NC9VDPvUfVVjj0C4aEh7SJWX8NKz_O_-DUiFJt0ZY5Ge5qUAImEE3odlxUSqa7PCXlsbf-ArcfMx07udJuQOcDBQ2Friuxh9EeWIgAln4wosv1MxWWbcovHbmeUBUxnrd_mQ-kuqGZ6ZDEOFNfhna7kFLF7cllbiDAAC4hKfTGcQfayFoA33BNwHO9bkVbY3iz8uVBPUcU')",
          }}
          aria-hidden
        />
      </div>
    </>
  );
}
