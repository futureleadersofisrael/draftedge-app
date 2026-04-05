"use client";

import { Space_Grotesk } from "next/font/google";
import { useRouter } from "next/navigation";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`${spaceGrotesk.className} min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] text-[#1C1C1C]`}
        data-flow-screen="personalized_paths_light_style"
      >
        <main
          className="w-full max-w-[800px] flex flex-col items-center space-y-12"
          id="personalized_paths_01"
        >
          <header className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#7A8F3B]/10 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7A8F3B]">
                Mission Analysis Complete
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight">
              על סמך מה שענית — אלו הכיוונים שהכי מתאימים לך
            </h1>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              שקללנו את הפרופיל, הדפ״ר, מה שחשוב לך והזמן שלך לגיוס
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.01]">
              <div className="flex items-start justify-between mb-6">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <span
                    className="material-symbols-outlined text-[#7A8F3B] text-2xl"
                    data-icon="monitoring"
                  >
                    monitoring
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280]/50 tracking-widest uppercase">
                  01/Combat
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 leading-snug">
                  שירות קרבי עם פוטנציאל לקצונה
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  מתאים לפרופיל שלך ולרצון להתפתח ולהוביל
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.01]">
              <div className="flex items-start justify-between mb-6">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <span
                    className="material-symbols-outlined text-[#7A8F3B] text-2xl"
                    data-icon="hub"
                  >
                    hub
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280]/50 tracking-widest uppercase">
                  02/Intel
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 leading-snug">
                  תפקידי מודיעין וטכנולוגיה
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  שקלול הנתונים הקוגניטיביים וההעדפות המקצועיות שלך
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.01]">
              <div className="flex items-start justify-between mb-6">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <span
                    className="material-symbols-outlined text-[#7A8F3B] text-2xl"
                    data-icon="military_tech"
                  >
                    military_tech
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280]/50 tracking-widest uppercase">
                  03/Support
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 leading-snug">
                  מערך תומך לחימה משמעותי
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  שילוב של תרומה מבצעית עם יתרון מקצועי לאזרחות
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full transition-transform hover:scale-[1.01]">
              <div className="flex items-start justify-between mb-6">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <span
                    className="material-symbols-outlined text-[#7A8F3B] text-2xl"
                    data-icon="groups"
                  >
                    groups
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280]/50 tracking-widest uppercase">
                  04/Training
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 leading-snug">
                  קורס קדם-צבאי והכשרה טכנית
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  מסלול המעניק כלים מעשיים וניסיון משמעותי לחיים
                </p>
              </div>
            </div>
          </section>

          <footer className="w-full flex flex-col items-center">
            <button
              type="button"
              data-flow-primary
              onClick={() => {
                router.push("/combat_path_details");
              }}
              className="bg-[#7A8F3B] text-white font-bold rounded-full px-12 py-4 shadow-lg shadow-[#7A8F3B]/20 hover:shadow-[#7A8F3B]/30 transition-all active:scale-95 flex items-center gap-3"
            >
              <span>תראה לי איך להגיע לשם</span>
              <span
                className="material-symbols-outlined text-xl"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </button>
            <p className="mt-8 text-[9px] font-bold text-[#6B7280]/40 tracking-[0.2em] uppercase">
              Secure Link Established | Connection Encrypted
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
