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

const cardShadow = "shadow-[0_2px_4px_rgba(0,0,0,0.05)]";

const PROFILE_OPTIONS = [
  { id: "profile_unknown", label: "לא יודע" },
  {
    id: "profile_45",
    label: "45 ומטה — פטור משירות / שירות מותאם",
  },
  { id: "profile_64", label: "64 — תפקידים עורפיים" },
  {
    id: "profile_72_82",
    label: "72–82 — מתאים ללחימה (עם מגבלות מסוימות)",
  },
  {
    id: "profile_97",
    label: "97 — פותח את רוב האפשרויות הקרביות",
  },
] as const;

const DAPAR_OPTIONS = [
  { id: "dapar_unknown", label: "לא יודע" },
  { id: "dapar_to_40", label: "עד 40" },
  { id: "dapar_40_60", label: "40–60" },
  { id: "dapar_60_80", label: "60–80" },
  { id: "dapar_80_plus", label: "80+" },
] as const;

export default function Page() {
  const router = useRouter();
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [selectedDapar, setSelectedDapar] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedProfile || !selectedDapar) return;
    localStorage.setItem("candidateProfile", selectedProfile);
    localStorage.setItem("candidateDapar", selectedDapar);
    router.push("/candidate_flow_time_to_draft");
  };

  return (
    <div
      dir="rtl"
      lang="he"
      className={`min-h-screen flex items-center justify-center p-4 bg-[#F8FAF8] text-[#1e293b] ${inter.className}`}
    >
      <main className="w-full max-w-[600px] flex flex-col items-center relative z-0">
        <header className="text-center mb-12">
          <h1
            className={`text-4xl font-bold ${spaceGrotesk.className} text-[#0f172a] mb-3 tracking-tight`}
          >
            מה הפרופיל והדפ״ר שלך?
          </h1>
          <p className="text-[#64748b] text-sm font-medium mb-2">
            יש לבחור גם פרופיל וגם דפ&quot;ר כדי להמשיך
          </p>
          <p className="text-[#64748b] text-sm font-medium">
            גם אם אתה לא בטוח — זה בסדר
          </p>
        </header>

        <div className="w-full space-y-10">
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-[#0f172a] pr-1">
              פרופיל רפואי
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROFILE_OPTIONS.map((opt) => {
                const selected = selectedProfile === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedProfile(opt.id)}
                    className={`py-4 px-3 rounded-lg ${cardShadow} text-sm transition-colors duration-150 border text-right ${
                      selected
                        ? "bg-[#7A8F3B] text-white font-bold border-[#7A8F3B] active:scale-[0.98]"
                        : "bg-white border-[#e2e8f0] text-[#1C1C1C] font-medium hover:bg-slate-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-[#0f172a] pr-1">דפ״ר</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {DAPAR_OPTIONS.map((opt) => {
                const selected = selectedDapar === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedDapar(opt.id)}
                    className={`py-4 px-2 rounded-lg ${cardShadow} text-sm transition-colors duration-150 border text-right ${
                      selected
                        ? "bg-[#7A8F3B] text-white font-bold border-[#7A8F3B] active:scale-[0.98]"
                        : "bg-white border-[#e2e8f0] text-[#1C1C1C] font-medium hover:bg-slate-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        <footer className="mt-16 w-full flex justify-center">
          <button
            type="button"
            disabled={!selectedProfile || !selectedDapar}
            onClick={handleContinue}
            className={`bg-[#7A8F3B] text-white text-lg font-bold py-4 px-24 rounded-lg ${cardShadow} hover:brightness-110 active:scale-[0.97] transition-all duration-150 w-full sm:w-auto min-w-[200px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100`}
          >
            המשך
          </button>
        </footer>
      </main>
    </div>
  );
}
