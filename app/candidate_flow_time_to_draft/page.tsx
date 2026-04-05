"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const softShadow = "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]";

const TIME_OPTIONS = [
  { id: "gt_2_years", label: "יותר משנתיים" },
  { id: "about_18_months", label: "בערך שנה וחצי" },
  { id: "about_1_year", label: "בערך שנה" },
  { id: "6_to_12_months", label: "בין 6 ל-12 חודשים" },
  { id: "lt_6_months", label: "פחות מ-6 חודשים" },
] as const;

export default function Page() {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedTime) return;
    localStorage.setItem("candidateTimeToDraft", selectedTime);
    router.push("/candidate_flow_weakness_1");
  };

  return (
    <div
      dir="rtl"
      lang="he"
      className={`min-h-screen flex items-center justify-center p-4 bg-[#F8FAF8] ${spaceGrotesk.className}`}
    >
      <main className="w-full max-w-md flex flex-col items-center">
        <header className="text-center mb-10">
          <h1 className="text-[32px] font-bold text-[#071327] leading-tight mb-3">
            כמה זמן נשאר לך עד הגיוס?
          </h1>
          <p className="text-[#64748b] text-sm font-medium mb-2 w-full">
            יש לבחור אפשרות כדי להמשיך
          </p>
          <p className="text-[#64748b] text-lg">
            זה עוזר לנו להבין כמה אפשר להספיק
          </p>
        </header>

        <div className="w-full space-y-4 mb-12">
          {TIME_OPTIONS.map((opt) => {
            const selected = selectedTime === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedTime(opt.id)}
                className={`w-full p-5 text-right rounded-[12px] ${softShadow} transition-all duration-150 border ${
                  selected
                    ? "bg-[#7A8F3B] border-transparent ring-2 ring-[#7A8F3B] ring-offset-2"
                    : "bg-white border-[#e2e8f0] hover:border-[#7A8F3B]/30"
                }`}
              >
                <span
                  className={`text-lg ${
                    selected
                      ? "font-bold text-white"
                      : "font-medium text-[#071327]"
                  }`}
                >
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <footer className="w-full">
          <button
            type="button"
            disabled={!selectedTime}
            onClick={handleContinue}
            className="w-full py-4 bg-[#7A8F3B] text-white text-xl font-bold rounded-[12px] shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100"
          >
            המשך
          </button>
        </footer>
      </main>
    </div>
  );
}
