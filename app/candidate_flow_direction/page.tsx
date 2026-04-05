"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const softShadowClass =
  "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]";

const DIRECTION_OPTIONS = [
  { id: "clear", label: "כן, די ברור לי" },
  { id: "partial", label: "בערך, יש לי כיוון" },
  { id: "none", label: "לא באמת יודע" },
] as const;

export default function Page() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedOption) return;
    localStorage.setItem("candidateDirection", selectedOption);
    router.push("/candidate_flow_unit_input");
  };

  return (
    <div
      dir="rtl"
      lang="he"
      className={`antialiased text-[#1C1C1C] bg-[#F8FAF8] ${spaceGrotesk.className}`}
    >
      <main className="min-h-screen w-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-[480px] flex flex-col items-center">
          <header className="text-center mb-12">
            <h1 className="text-[32px] font-bold text-[#1C1C1C] leading-tight tracking-tight mb-2">
              יש לך כיוון לשירות שלך?
            </h1>
            <p className="text-[13px] text-[#6B7280] font-medium mb-2 w-full">
              יש לבחור אפשרות אחת כדי להמשיך
            </p>
            <p className="text-[14px] text-[#6B7280] font-medium">
              גם תחושה כללית זה מצוין
            </p>
          </header>

          <div className="w-full space-y-4 mb-12">
            {DIRECTION_OPTIONS.map((opt) => {
              const selected = selectedOption === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full rounded-xl p-6 text-right border border-transparent ${softShadowClass} cursor-pointer transition-all duration-150 flex items-center justify-between gap-4 active:scale-[0.98] ${
                    selected
                      ? "bg-[#7A8F3B]"
                      : `bg-white hover:bg-slate-50`
                  }`}
                >
                  <span
                    className={`text-[18px] font-medium ${
                      selected ? "text-white" : "text-[#1C1C1C]"
                    }`}
                  >
                    {opt.label}
                  </span>
                  {selected ? (
                    <div className="w-6 h-6 shrink-0 rounded-full bg-white/25 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="w-full">
            <button
              type="button"
              disabled={!selectedOption}
              onClick={handleContinue}
              className="w-full bg-[#7A8F3B] hover:opacity-90 text-white font-bold py-4 rounded-xl text-[18px] transition-all duration-150 shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-100"
            >
              המשך
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
