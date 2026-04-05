"use client";

import { useRouter } from "next/navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import { MaterialSymbolsFont } from "../parent-pain/material-symbols-font";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
        className={`bg-[#F8FAF8] text-[#1C1C1C] flex items-center justify-center min-h-screen p-4 md:p-8 ${inter.className}`}
      >
        <main className="relative z-10 w-full max-w-2xl bg-white rounded-xl px-8 py-16 md:px-12 md:py-20 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-black/[0.05]">
          <div className="mb-10 flex justify-center items-center gap-4 opacity-70">
            <span className="text-[11px] tracking-[0.1em] uppercase border-r border-[#E5E7EB] pr-4 text-[#6B7280]">
              System_Auth_OK
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#6B7D3A] rounded-full" />
              <span className="text-[11px] tracking-[0.1em] uppercase text-[#6B7280]">
                Intelligence Node: 07-G
              </span>
            </div>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="w-16 h-16 bg-[#F8FAF8] flex items-center justify-center rounded-2xl border border-[#E5E7EB]">
              <span className="material-symbols-outlined text-3xl text-[#6B7D3A]">
                verified_user
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h1
              className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1C] leading-tight`}
            >
              הצלחה בתהליך הגיוס לא תלויה במזל — אלא בהבנה מה לעשות ומתי.
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] font-light max-w-lg mx-auto leading-relaxed">
              מי שמבין את התהליך — פועל נכון בזמן הנכון.
            </p>
          </div>

          <div className="my-10 flex justify-center items-center gap-3">
            <div className="h-px w-8 bg-[#E5E7EB]" />
            <div className="w-1.5 h-1.5 bg-[#6B7D3A] rounded-full" />
            <div className="h-px w-8 bg-[#E5E7EB]" />
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              type="button"
              onClick={() => router.push("/candidate_flow_direction")}
              className="group relative px-10 py-4 bg-[#6B7D3A] text-white rounded-lg transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg shadow-[#6B7D3A]/10"
            >
              <span className="relative font-bold tracking-wide text-lg flex items-center gap-4 justify-center">
                המשך
                <span className="material-symbols-outlined text-xl rotate-180">
                  arrow_forward
                </span>
              </span>
            </button>
            <div className="flex items-center gap-2 text-[#6B7280]/50">
              <span className="text-[10px] tracking-widest uppercase">
                Operational Readiness Confirmed
              </span>
            </div>
          </div>
        </main>

        <div className="fixed top-8 left-8 hidden md:block opacity-40">
          <div className="text-[10px] text-[#1C1C1C] uppercase tracking-widest leading-none">
            DraftEdge Control
          </div>
          <div className="text-[9px] text-[#6B7280] uppercase tracking-widest mt-1">
            v4.0.22_STABLE
          </div>
        </div>
        <div className="fixed bottom-8 right-8 hidden md:block opacity-40">
          <div className="text-[10px] text-[#1C1C1C] uppercase tracking-widest leading-none">
            Terminal Status
          </div>
          <div className="text-[9px] text-[#6B7280] uppercase tracking-widest mt-1 flex items-center gap-1">
            <span className="w-1 h-1 bg-[#6B7280] rounded-full" />
            Encrypted
          </div>
        </div>
      </div>
    </>
  );
}
