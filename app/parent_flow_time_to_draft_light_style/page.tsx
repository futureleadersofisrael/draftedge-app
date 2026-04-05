"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TIME_OPTIONS = [
  { id: "gt2y", label: "יותר משנתיים", icon: "calendar_month" as const },
  { id: "y18m", label: "בערך שנה וחצי", icon: "event_repeat" as const },
  { id: "1y", label: "בערך שנה", icon: "check_circle" as const },
  { id: "6to12", label: "בין 6 ל-12 חודשים", icon: "timer" as const },
  { id: "lt6", label: "פחות מ-6 חודשים", icon: "alarm" as const },
] as const;

type TimeId = (typeof TIME_OPTIONS)[number]["id"];

export default function Page() {
  const router = useRouter();
  const [timeId, setTimeId] = useState<TimeId | null>(null);
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    if (!timeId) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const label = TIME_OPTIONS.find((o) => o.id === timeId)?.label ?? timeId;
    localStorage.setItem("draftTime", label);
    router.push("/parent_flow_values");
  };

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`antialiased min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-[#F8FAF8] text-[#1C1C1C] ${spaceGrotesk.className}`}
      >
        <main className="w-full max-w-md flex flex-col items-center space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1C]">
              כמה זמן נשאר עד הגיוס?
            </h1>
            <p className="text-[#6B7280] text-base md:text-lg">
              זה עוזר לנו להבין כמה אפשר להספיק
            </p>
          </div>

          <div className="w-full flex flex-col gap-3">
            {TIME_OPTIONS.map((opt) => {
              const selected = timeId === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setTimeId(opt.id);
                    setShowError(false);
                  }}
                  className={
                    selected
                      ? "w-full bg-[#7A8F3B] border border-[#7A8F3B] rounded-[12px] flex items-center justify-between p-5 transition-all duration-200 shadow-md active:scale-[0.99]"
                      : "w-full bg-white border border-gray-100 rounded-[12px] flex items-center justify-between p-5 transition-all duration-200 hover:border-[#7A8F3B]/30 shadow-sm active:scale-[0.99]"
                  }
                >
                  <span
                    className={
                      selected ? "text-lg font-bold text-white" : "text-lg font-medium"
                    }
                  >
                    {opt.label}
                  </span>
                  <span
                    className={
                      selected
                        ? "material-symbols-outlined text-white"
                        : "material-symbols-outlined text-gray-400"
                    }
                    style={
                      opt.icon === "check_circle" && selected
                        ? { fontVariationSettings: "'FILL' 1" }
                        : undefined
                    }
                  >
                    {opt.icon}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full pt-4 flex flex-col items-center gap-2">
            {showError ? (
              <p className="text-sm text-red-600 text-center w-full" role="alert">
                נא לבחור את זמן הגיוס
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleContinue}
              className="w-full bg-[#7A8F3B] text-white py-4 px-8 rounded-[12px] text-lg font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#7A8F3B]/20"
            >
              המשך
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
