"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  return (
    <div
      dir="rtl"
      lang="he"
      className={`bg-[#F8FAF8] text-[#1C1C1C] min-h-screen flex items-center justify-center p-6 ${inter.className}`}
    >
      <main className="w-full max-w-[560px] flex flex-col items-center">
        <header className="text-center mb-10 w-full">
          <h1
            className={`${spaceGrotesk.className} font-bold text-3xl md:text-4xl text-[#1C1C1C] tracking-tight mb-4`}
          >
            מה הכי מלחיץ אותך כרגע בתהליך?
          </h1>
          <p className="text-[#6B7280] text-lg">
            אפשר לכתוב חופשי — אין תשובה נכונה או לא נכונה
          </p>
        </header>

        <div className="w-full bg-white rounded-[12px] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] p-8 border border-[#E5E7EB]/50">
          <div className="flex flex-col gap-8">
            <div className="relative flex flex-col gap-2">
              <textarea
                id="emotional-response"
                name="emotional-response"
                placeholder="כתוב כאן..."
                rows={6}
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (e.target.value.trim() !== "") {
                    setError(false);
                  }
                }}
                className="w-full bg-transparent text-[#1C1C1C] p-0 text-lg border-0 border-b border-[#E5E7EB] focus:ring-0 focus:border-[#7A8F3B] transition-colors duration-200 resize-none placeholder:text-[#6B7280]/40 text-right outline-none"
                aria-invalid={error}
              />
              {error ? (
                <p className="text-sm text-red-600 text-right" role="alert">
                  נא לכתוב תשובה כדי להמשיך
                </p>
              ) : null}
            </div>

            <div className="flex justify-center mt-2">
              <button
                type="button"
                disabled={!answer.trim()}
                onClick={() => {
                  if (answer.trim() === "") {
                    setError(true);
                    return;
                  }
                  localStorage.setItem("candidateFinalAnswer", answer.trim());
                  router.push("/registration");
                }}
                className={`w-full sm:w-auto bg-[#7A8F3B] hover:opacity-90 text-white ${spaceGrotesk.className} font-medium px-16 py-4 rounded-full text-base transition-all duration-200 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50`}
              >
                המשך
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
