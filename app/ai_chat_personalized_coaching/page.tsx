"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { useRouter } from "next/navigation";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const shadowSoft = "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <MaterialSymbolsFont />
      <div
        dir="rtl"
        lang="he"
        className={`${inter.className} bg-[#F8FAF8] min-h-screen flex flex-col items-center text-[#1C1C1C]`}
        data-flow-screen="ai_chat_personalized_coaching"
      >
        <header className="w-full max-w-3xl flex justify-between items-center py-8 px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#7A8F3B] flex items-center justify-center">
              <span
                className="material-symbols-outlined text-white text-sm"
                data-icon="smart_toy"
              >
                smart_toy
              </span>
            </div>
            <h1
              className={`text-lg font-semibold tracking-tight ${spaceGrotesk.className}`}
            >
              מאמן אישי לגיוס של [שם המשתמש]
            </h1>
          </div>
          <button
            type="button"
            className="text-[#6B7280] hover:text-[#1C1C1C] transition-colors"
          >
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
          </button>
        </header>

        <main className="flex-1 w-full max-w-3xl px-6 flex flex-col gap-8 pb-20 pt-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start max-w-[85%] self-start">
              <div
                className={`bg-white p-4 rounded-2xl ${shadowSoft} text-[#1C1C1C] text-base leading-relaxed`}
              >
                לפי מה שענית — זה הצעד הכי נכון להתחיל ממנו
              </div>
              <span
                className={`text-[10px] text-[#6B7280] mt-2 px-1 uppercase tracking-wider font-medium ${spaceGrotesk.className}`}
              >
                DraftEdge System
              </span>
            </div>
            <div className="flex flex-col items-start max-w-[85%] self-start">
              <div
                className={`bg-white p-4 rounded-2xl ${shadowSoft} text-[#1C1C1C] text-base leading-relaxed border border-transparent`}
              >
                אני כאן כדי לעזור לך להבין בדיוק מה לעשות בכל שלב — בצורה שמתאימה
                לך
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 py-4">
            <button
              type="button"
              className="bg-white border border-[#E5E7EB] hover:border-[#7A8F3B] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-[#1C1C1C] hover:text-[#7A8F3B] shadow-sm"
            >
              מה הצעד הראשון שאני צריך לעשות?
            </button>
            <button
              type="button"
              className="bg-white border border-[#E5E7EB] hover:border-[#7A8F3B] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-[#1C1C1C] hover:text-[#7A8F3B] shadow-sm"
            >
              איך אני מגיע ליחידה שאני רוצה?
            </button>
            <button
              type="button"
              className="bg-white border border-[#E5E7EB] hover:border-[#7A8F3B] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 text-[#1C1C1C] hover:text-[#7A8F3B] shadow-sm"
            >
              מה הכי חשוב לשפר עכשיו?
            </button>
          </div>

          <div className="w-full flex justify-center pt-2">
            <button
              type="button"
              data-flow-primary
              onClick={() => {
                router.push("/full_version_upgrade");
              }}
              className="px-10 py-3 rounded-full bg-[#7A8F3B] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              המשך
            </button>
          </div>

          <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 mt-4">
            <div
              className={`w-full bg-white ${shadowSoft} border border-[#E5E7EB] p-2 rounded-2xl flex items-center gap-2`}
            >
              <div className="flex-1 px-4">
                <input
                  className="w-full bg-transparent border-none focus:ring-0 text-[#1C1C1C] placeholder:text-[#6B7280] text-base py-2 outline-none"
                  placeholder="שאל אותי כל מה שתרצה..."
                  type="text"
                />
              </div>
              <button
                type="button"
                className="bg-[#7A8F3B] text-white px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2"
              >
                <span className={spaceGrotesk.className}>שלח</span>
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="send"
                >
                  send
                </span>
              </button>
            </div>
            <div
              className={`text-[11px] text-[#6B7280] text-center font-medium uppercase tracking-tighter opacity-60 ${spaceGrotesk.className}`}
            >
              AI can make mistakes. Verify critical information.
            </div>
          </div>
        </main>

        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7A8F3B] opacity-[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#7A8F3B] opacity-[0.02] rounded-full blur-[100px]" />
        </div>
      </div>
    </>
  );
}
