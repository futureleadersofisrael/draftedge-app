"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const WEAKNESS_OPTIONS = [
  { id: "fitness", label: "כושר גופני" },
  { id: "tests_dapar", label: "מבחנים (דפ״ר וכדומה)" },
  { id: "interviews", label: "ראיונות ומיונים" },
  { id: "process_knowledge", label: "ידע על התהליך" },
] as const;

export default function Page() {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleContinue = () => {
    if (selectedOptions.length === 0) return;
    localStorage.setItem(
      "candidateWeakness1",
      JSON.stringify(selectedOptions)
    );
    router.push("/candidate_flow_weakness_2");
  };

  return (
    <div
      dir="rtl"
      lang="he"
      className={`min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] ${inter.className}`}
    >
      <main className="w-full max-w-[600px] flex flex-col items-center gap-12 relative z-0">
        <header className="text-center space-y-3">
          <h1
            className={`${spaceGrotesk.className} font-bold text-[32px] md:text-[40px] text-[#1C1C1C] leading-tight tracking-tight`}
          >
            איפה אתה מרגיש שהכי קשה לך כרגע?
          </h1>
          <p className="text-[#6B7280] text-sm font-medium">
            ניתן לבחור יותר מאפשרות אחת
          </p>
        </header>

        <div className="w-full flex flex-col gap-4">
          {WEAKNESS_OPTIONS.map((opt) => {
            const selected = selectedOptions.includes(opt.id);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelectedOptions((prev) =>
                    prev.includes(opt.id)
                      ? prev.filter((id) => id !== opt.id)
                      : [...prev, opt.id]
                  );
                }}
                className={`w-full p-6 text-right flex items-center justify-between gap-4 transition-all duration-200 rounded-[12px] border ${
                  selected
                    ? "bg-[#7A8F3B] border-[#7A8F3B] shadow-lg"
                    : "bg-white border-[#E5E7EB] shadow-sm hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]"
                } group`}
              >
                <span
                  className={`text-xl font-medium ${
                    selected ? "text-white" : "text-[#1C1C1C]"
                  }`}
                >
                  {opt.label}
                </span>
                {selected ? (
                  <div className="w-7 h-7 shrink-0 rounded-full bg-white/25 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      aria-hidden
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-7 h-7 shrink-0 rounded-full border-2 border-[#E5E7EB] group-hover:border-[#7A8F3B]/30 transition-colors" />
                )}
              </button>
            );
          })}
        </div>

        <footer className="w-full mt-4">
          <button
            type="button"
            disabled={selectedOptions.length === 0}
            onClick={handleContinue}
            className={`w-full py-5 bg-[#7A8F3B] text-white ${spaceGrotesk.className} font-bold text-lg rounded-xl shadow-md hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50`}
          >
            המשך
          </button>
        </footer>
      </main>
    </div>
  );
}
