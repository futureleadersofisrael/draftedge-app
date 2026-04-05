"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const fontHeadline = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const OPTIONS = [
  { id: "before_first_order", label: "לפני צו ראשון" },
  { id: "after_first_order", label: "אחרי צו ראשון" },
  { id: "screenings", label: "במיונים" },
  { id: "placement", label: "קיבל שיבוץ" },
] as const;

export default function ParentFlowStep1FocusedPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedOption) return;
    localStorage.setItem("parentStep1", selectedOption);
    router.push("/parent-pain");
  };

  return (
    <div
      dir="rtl"
      className={`bg-[#F8FAF8] min-h-screen flex items-center justify-center p-6 ${fontHeadline.className}`}
    >
      <main className="w-full max-w-[600px] flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1C1C1C] tracking-tight">
            באיזה שלב הילד שלך בתהליך?
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {OPTIONS.map((opt) => {
            const selected = selectedOption === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedOption(opt.id)}
                className={
                  selected
                    ? "text-right w-full bg-[#6B7D3A] p-6 rounded-[12px] shadow-sm cursor-pointer border border-transparent transition-all duration-75"
                    : "text-right w-full bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer border border-slate-100 transition-all duration-75 hover:border-[#6B7D3A]"
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className={
                      selected
                        ? "text-white text-xl font-semibold"
                        : "text-[#1C1C1C] text-xl font-semibold"
                    }
                  >
                    {opt.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          <button
            type="button"
            disabled={!selectedOption}
            onClick={handleContinue}
            className="w-full bg-[#6B7D3A] text-white py-5 px-12 rounded-[12px] font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#6B7D3A]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:active:scale-100"
          >
            המשך
          </button>
        </div>
      </main>
    </div>
  );
}
