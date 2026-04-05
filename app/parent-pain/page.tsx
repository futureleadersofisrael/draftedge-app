"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { MaterialSymbolsFont } from "./material-symbols-font";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const softShadowStyle = {
  boxShadow:
    "0 4px 12px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.06)",
} as const;

const PAIN_OPTIONS = [
  {
    id: "dont_understand_process",
    stage: "שלב 01",
    label: "אני לא מבין את תהליך הגיוס",
  },
  {
    id: "fear_missed_opportunities",
    stage: "שלב 02",
    label: "אני מפחד שהוא יפספס הזדמנויות",
  },
  {
    id: "summons_coaching",
    stage: "שלב 03",
    label: "קיבלנו זימון ואני לא יודע איך לכוון אותו",
  },
  {
    id: "what_fits",
    stage: "שלב 04",
    label: "אני לא יודע מה באמת מתאים לו",
  },
  {
    id: "failed_screening",
    stage: "שלב 05",
    label: "הוא כבר נכשל במיון ואני לא יודע מה לעשות עכשיו",
  },
] as const;

export default function ModernParentPainQuestionPage() {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleContinue = () => {
    if (selectedOptions.length === 0) return;
    localStorage.setItem("parentPain", JSON.stringify(selectedOptions));
    router.push("/parent-profile");
  };

  return (
    <>
      <MaterialSymbolsFont />
    <div
      dir="rtl"
      lang="he"
      className={`min-h-screen flex flex-col antialiased overflow-x-hidden bg-[#F8FAF8] text-[#1A1C1A] ${inter.className}`}
    >
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E0E3E0] h-16 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <span
            className={`text-xl font-bold tracking-tight text-[#6B7D3A] ${spaceGrotesk.className}`}
          >
            DRAFTEDGE
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-[#585D58] cursor-pointer hover:bg-black/5 p-2 rounded-full transition-colors"
            data-icon="account_circle"
          >
            account_circle
          </span>
          <span
            className="material-symbols-outlined text-[#585D58] cursor-pointer hover:bg-black/5 p-2 rounded-full transition-colors"
            data-icon="settings"
          >
            settings
          </span>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-start pt-32 pb-24 px-4 sm:px-6">
        <div className="w-full max-w-[600px] flex flex-col space-y-10">
          <header className="text-center space-y-4">
            <h1
              className={`text-4xl md:text-5xl font-bold text-[#1C1C1C] ${spaceGrotesk.className} tracking-tight leading-tight`}
            >
              מה הכי מטריד אותך לגבי הילד שלך?
            </h1>
            <p className="text-[#585D58] font-medium text-sm text-center w-full">
              ניתן לבחור יותר מאפשרות אחת
            </p>
            <p className="text-[#585D58] font-medium tracking-wide text-sm opacity-80">
              ייעוץ אישי להורים בתהליך הגיוס
            </p>
          </header>

          <section className="flex flex-col space-y-4">
            {PAIN_OPTIONS.map((opt) => {
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
                  style={softShadowStyle}
                  className={
                    selected
                      ? `w-full text-right p-7 bg-[#6B7D3A]/12 border-2 border-[#6B7D3A] rounded-lg flex items-center justify-between transition-all duration-200 group`
                      : `w-full text-right p-7 bg-white border border-[#E0E3E0] rounded-lg flex items-center justify-between transition-all duration-200 hover:border-[#6B7D3A]/30 group`
                  }
                >
                  <div className="flex flex-col">
                    <span
                      className={`text-[10px] uppercase tracking-widest mb-1 ${spaceGrotesk.className} ${
                        selected
                          ? "text-[#6B7D3A] font-bold"
                          : "text-[#585D58] font-medium"
                      }`}
                    >
                      {opt.stage}
                    </span>
                    <span
                      className={`text-lg font-semibold ${spaceGrotesk.className} text-[#1C1C1C]`}
                    >
                      {opt.label}
                    </span>
                  </div>
                  {selected ? (
                    <div className="w-6 h-6 shrink-0 rounded-full bg-[#6B7D3A] flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-white text-sm"
                        data-icon="check"
                        data-weight="fill"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                          fontSize: "18px",
                        }}
                      >
                        check
                      </span>
                    </div>
                  ) : (
                    <div className="w-6 h-6 shrink-0 rounded-full border-2 border-[#E0E3E0] group-hover:border-[#6B7D3A]/50 transition-colors" />
                  )}
                </button>
              );
            })}
          </section>

          <footer className="pt-4">
            <button
              type="button"
              disabled={selectedOptions.length === 0}
              onClick={handleContinue}
              style={softShadowStyle}
              className={`w-full py-5 bg-[#6B7D3A] hover:bg-[#5a6a31] text-white text-xl font-bold rounded-lg ${spaceGrotesk.className} transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#6B7D3A]`}
            >
              המשך
            </button>
            {selectedOptions.length === 0 ? (
              <p className="text-center mt-3 text-[#585D58] text-sm font-medium">
                בחר אפשרות כדי להמשיך
              </p>
            ) : null}
            <p className="text-center mt-6 text-[#585D58] text-[11px] font-medium tracking-wide">
              המידע שלך מאובטח ופרטי
            </p>
          </footer>
        </div>
      </main>

      <footer className="w-full border-t border-[#E0E3E0] bg-white flex flex-col md:flex-row-reverse justify-between items-center px-8 py-8 mt-auto">
        <div className="flex gap-8 mb-4 md:mb-0">
          <a
            className="text-[11px] font-semibold text-[#585D58] hover:text-[#6B7D3A] transition-colors uppercase tracking-wider"
            href="#"
          >
            מדיניות פרטיות
          </a>
          <a
            className="text-[11px] font-semibold text-[#585D58] hover:text-[#6B7D3A] transition-colors uppercase tracking-wider"
            href="#"
          >
            תנאי שימוש
          </a>
          <a
            className="text-[11px] font-semibold text-[#585D58] hover:text-[#6B7D3A] transition-colors uppercase tracking-wider"
            href="#"
          >
            צור קשר
          </a>
        </div>
        <div className="text-[#585D58]/60 text-[11px] font-medium tracking-wider">
          © 2024 DRAFTEDGE. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
    </>
  );
}
