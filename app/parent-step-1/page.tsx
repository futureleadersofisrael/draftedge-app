"use client";

import { useRouter } from "next/navigation";
import { Space_Grotesk } from "next/font/google";

const fontHeadline = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ParentFlowStep1FocusedPage() {
  const router = useRouter();

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
          <div className="bg-[#6B7D3A] p-6 rounded-[12px] shadow-sm cursor-pointer border border-transparent transition-all duration-75">
            <div className="flex items-center justify-between">
              <span className="text-white text-xl font-semibold">לפני צו ראשון</span>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer border border-slate-100 transition-all duration-75 hover:border-[#6B7D3A]">
            <div className="flex items-center justify-between">
              <span className="text-[#1C1C1C] text-xl font-semibold">אחרי צו ראשון</span>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer border border-slate-100 transition-all duration-75 hover:border-[#6B7D3A]">
            <div className="flex items-center justify-between">
              <span className="text-[#1C1C1C] text-xl font-semibold">במיונים</span>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer border border-slate-100 transition-all duration-75 hover:border-[#6B7D3A]">
            <div className="flex items-center justify-between">
              <span className="text-[#1C1C1C] text-xl font-semibold">קיבל שיבוץ</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => router.push("/parent-pain")}
            className="w-full bg-[#6B7D3A] text-white py-5 px-12 rounded-[12px] font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#6B7D3A]/20"
          >
            המשך
          </button>
        </div>
      </main>
    </div>
  );
}
