"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const PRICING_OPTIONS = [
  { id: "pay_none", label: "לא הייתי משלם" },
  { id: "up_to_29", label: "עד 29 ש״ח בחודש" },
  { id: "49", label: "49 ש״ח בחודש" },
  { id: "69", label: "69 ש״ח בחודש" },
  { id: "99", label: "99 ש״ח בחודש" },
  { id: "over_100", label: "מעל 100 ש״ח בחודש" },
  { id: "depends", label: "תלוי מה אני מקבל" },
] as const;

export default function Page() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div
      dir="rtl"
      lang="he"
      className={`${inter.className} antialiased text-[#1C1C1C] min-h-screen flex flex-col items-center bg-[#F8FAF8]`}
      data-flow-screen="pricing_survey_light_style"
    >
      <main className="w-full max-w-[640px] px-6 py-16 md:py-24 flex flex-col gap-12">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1C]">
            כמה זה שווה לך?
          </h1>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            בהנחה שאתה מקבל הכוונה אישית לאורך כל התהליך — מה היית מוכן לשלם על
            מנוי חודשי כזה?
          </p>
          <p className="text-sm font-medium text-[#6B7280]">
            יש לבחור אפשרות כדי להמשיך
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-[12px] border border-gray-100 shadow-sm">
          <h2 className="text-xs font-bold tracking-wider uppercase text-[#6B7280] mb-6 opacity-70">
            מפרט טכני / בגרסה המלאה תקבל:
          </h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="text-lg text-[#1C1C1C]">•</span>
              <span className="text-base text-[#1C1C1C] font-medium">
                מאמנים אישיים דיגיטליים לכל יחידה — מבוססים על ניסיון אמיתי
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg text-[#1C1C1C]">•</span>
              <span className="text-base text-[#1C1C1C] font-medium">
                סימולציות מדויקות לשלבי המיון והראיונות
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg text-[#1C1C1C]">•</span>
              <span className="text-base text-[#1C1C1C] font-medium">
                מאגר ידע שנבנה מתוך ניסיון של מאות מלש״בים והורים
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg text-[#1C1C1C]">•</span>
              <span className="text-base text-[#1C1C1C] font-medium">
                הכוונה אישית לאורך כל התהליך — לפי הנתונים שלך
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col gap-3">
          <h2 className="text-xs font-bold tracking-wider uppercase text-[#6B7280] mb-2 opacity-70">
            בחירת רמת תמחור
          </h2>
          {PRICING_OPTIONS.map((opt) => {
            const selected = selectedOption === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedOption(opt.id)}
                className={`w-full p-5 rounded-[12px] text-right transition-all duration-200 ${
                  selected
                    ? "bg-[#7A8F3B] text-white border border-[#7A8F3B] shadow-md"
                    : "bg-white border border-gray-200 hover:border-[#7A8F3B]"
                }`}
              >
                <span
                  className={`text-lg ${selected ? "font-bold" : "font-medium"}`}
                >
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-full flex flex-col items-center gap-8 mt-4">
          <p className="text-xs text-[#6B7280] text-center max-w-[400px]">
            זה רק כדי לעזור לנו לבנות את המוצר בצורה נכונה — אין התחייבות
          </p>
          <button
            type="button"
            disabled={!selectedOption}
            onClick={() => {
              if (!selectedOption) return;

              console.log("Before push");
              localStorage.setItem("pricingChoice", selectedOption);
              router.push("/final");
              console.log("After push");
            }}
            className="w-full py-5 bg-[#7A8F3B] text-white font-bold text-lg rounded-[12px] shadow-lg transition-all duration-200 flex items-center justify-center gap-2 enabled:hover:opacity-90 enabled:active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            המשך
          </button>
          {!selectedOption ? (
            <p className="text-sm text-red-600 text-center -mt-4" role="alert">
              נא לבחור אפשרות כדי להמשיך
            </p>
          ) : null}
        </div>
      </main>
    </div>
  );
}
