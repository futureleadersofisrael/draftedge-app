"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SERVICE_OPTIONS = [
  { id: "safe_quiet", label: "שירות בטוח ושקט" },
  { id: "potential", label: "שימצה את היכולות והפוטנציאל שלו" },
  { id: "experience", label: "שייצא עם ניסיון משמעותי להמשך החיים" },
  { id: "meaningful", label: "שירות משמעותי שהוא יהיה גאה בו" },
] as const;

export default function Page() {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleContinue = () => {
    if (selectedOptions.length === 0) return;
    localStorage.setItem("servicePreference", JSON.stringify(selectedOptions));
    router.push("/parent_flow_emotional_question_updated");
  };

  return (
    <div dir="rtl" lang="he" className={`bg-[#F8FAF8] min-h-screen ${spaceGrotesk.className}`}>
      <main className="w-full max-w-[600px] mx-auto px-6 py-12 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight text-[#1C1C1C]">
          איך היית רוצה שהשירות שלו ייראה?
        </h1>
        <p className="text-[#585D58] font-medium text-sm text-center w-full mb-10">
          ניתן לבחור יותר מאפשרות אחת
        </p>

        <div className="w-full space-y-4 mb-16">
          {SERVICE_OPTIONS.map((opt) => {
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
                className={
                  selected
                    ? "w-full p-6 text-right flex items-center justify-between gap-4 transition-[transform,box-shadow,border-color,background-color] duration-75 ease-in-out rounded-lg border-2 border-[#7A8F3B] bg-[#7A8F3B]/12 text-[#1C1C1C] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:-translate-y-px"
                    : "w-full p-6 text-right flex items-center justify-between gap-4 transition-[transform,box-shadow,border-color] duration-75 ease-in-out rounded-lg border border-[#E5E7EB] bg-white text-[#1C1C1C] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:-translate-y-px hover:border-[#7A8F3B]/40 hover:shadow-[0_4px_6px_rgba(0,0,0,0.05)]"
                }
              >
                <span className="text-lg font-medium">{opt.label}</span>
                {selected ? (
                  <div className="w-6 h-6 shrink-0 rounded-full bg-[#7A8F3B] flex items-center justify-center">
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
                ) : (
                  <div className="w-6 h-6 shrink-0 rounded-full border-2 border-[#E5E7EB]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          <button
            type="button"
            disabled={selectedOptions.length === 0}
            onClick={handleContinue}
            className="w-full md:w-auto md:min-w-[240px] py-4 px-12 text-lg font-bold tracking-widest uppercase bg-[#7A8F3B] text-white transition-opacity duration-75 ease-in-out hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
          >
            המשך
          </button>
          {selectedOptions.length === 0 ? (
            <p className="text-sm text-[#585D58] text-center w-full mt-1">
              בחר אפשרות כדי להמשיך
            </p>
          ) : null}
        </div>
      </main>
    </div>
  );
}
