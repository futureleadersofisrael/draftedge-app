"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cardShadowClass =
  "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]";

const PROFILE_OPTIONS = [
  { id: "unknown", label: "לא יודע" },
  { id: "low64", label: "נמוך (64 ומטה)" },
  { id: "mid72", label: "בינוני (72–82)" },
  { id: "high97", label: "גבוה (97)" },
] as const;

const DAPAR_OPTIONS = [
  { id: "unknown", label: "לא יודע" },
  { id: "low50", label: "נמוך (עד 50)" },
  { id: "mid50_70", label: "בינוני (50–70)" },
  { id: "high70", label: "גבוה (70+)" },
] as const;

type ProfileId = (typeof PROFILE_OPTIONS)[number]["id"];
type DaparId = (typeof DAPAR_OPTIONS)[number]["id"];

export default function Page() {
  const router = useRouter();
  const [profileId, setProfileId] = useState<ProfileId | null>(null);
  const [daparId, setDaparId] = useState<DaparId | null>(null);
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    if (!profileId || !daparId) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const profileLabel =
      PROFILE_OPTIONS.find((o) => o.id === profileId)?.label ?? profileId;
    const daparLabel =
      DAPAR_OPTIONS.find((o) => o.id === daparId)?.label ?? daparId;
    localStorage.setItem(
      "parentProfile",
      JSON.stringify({
        profileId,
        profileLabel,
        daparId,
        daparLabel,
      })
    );
    router.push("/parent_flow_time_to_draft_light_style");
  };

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`bg-[#F8FAF8] text-[#1C1C1C] min-h-screen flex items-center justify-center p-6 selection:bg-[#7A8F3B] selection:text-white ${spaceGrotesk.className}`}
      >
        <div className="max-w-2xl w-full flex flex-col items-center">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] tracking-tight mb-4">
              מה הפרופיל והדפ״ר של הילד שלך?
            </h1>
            <p className="text-base text-[#6B7280]">
              גם הערכה כללית תעזור לנו לדייק
            </p>
          </header>

          <main className="w-full space-y-10">
            <section className="space-y-4">
              <label className="block text-sm font-bold tracking-wide text-[#6B7280] uppercase pr-2">
                פרופיל רפואי
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROFILE_OPTIONS.map((opt) => {
                  const selected = profileId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setProfileId(opt.id);
                        setShowError(false);
                      }}
                      className={
                        selected
                          ? "w-full text-right p-6 bg-[#7A8F3B] transition-all duration-200 rounded-xl"
                          : `w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`
                      }
                    >
                      <span
                        className={
                          selected
                            ? "block text-lg font-bold text-white"
                            : "block text-lg font-medium text-[#1C1C1C]"
                        }
                      >
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="space-y-4">
              <label className="block text-sm font-bold tracking-wide text-[#6B7280] uppercase pr-2">
                דפ״ר
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DAPAR_OPTIONS.map((opt) => {
                  const selected = daparId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setDaparId(opt.id);
                        setShowError(false);
                      }}
                      className={
                        selected
                          ? "w-full text-right p-6 bg-[#7A8F3B] transition-all duration-200 rounded-xl"
                          : `w-full text-right p-6 bg-white ${cardShadowClass} hover:bg-gray-50 transition-all duration-200 border border-transparent rounded-xl`
                      }
                    >
                      <span
                        className={
                          selected
                            ? "block text-lg font-bold text-white"
                            : "block text-lg font-medium text-[#1C1C1C]"
                        }
                      >
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <footer className="pt-6 flex flex-col items-center gap-2">
              {showError ? (
                <p className="text-sm text-red-600 text-center w-full md:w-80" role="alert">
                  נא למלא את כל השדות
                </p>
              ) : null}
              <button
                type="button"
                onClick={handleContinue}
                className="w-full md:w-80 py-4 bg-[#7A8F3B] text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-3"
              >
                המשך
                <span className="material-symbols-outlined transform scale-x-[-1]">
                  arrow_forward
                </span>
              </button>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
