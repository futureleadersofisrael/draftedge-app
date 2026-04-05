"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    void localStorage.getItem("servicePreference");
  }, []);

  const handleContinue = () => {
    const trimmed = answer.trim();
    if (!trimmed) {
      setShowError(true);
      return;
    }
    setShowError(false);
    localStorage.setItem("parentPain", trimmed);
    router.push("/registration");
  };

  return (
    <div
      dir="rtl"
      lang="he"
      className={`min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] text-[#142034] ${spaceGrotesk.className}`}
    >
      <main className="w-full max-w-2xl flex flex-col items-center relative z-0">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
            מה הכי מלחיץ אותך כרגע בתהליך של הילד שלך?
          </h1>
          <p className="text-lg text-[#6B7280] mt-4 font-normal">
            אפשר לכתוב חופשי - אין תשובה נכונה או לא נכונה
          </p>
        </div>

        <div className="w-full space-y-8">
          <div className="relative">
            <textarea
              className="w-full p-8 text-xl bg-[#FFFFFF] border-none rounded-[2rem] resize-none text-slate-800 placeholder:text-slate-300 transition-all duration-300 ease-in-out shadow-[0_10px_40px_rgba(0,0,0,0.03)] focus:outline-none focus:shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
              placeholder="כתוב כאן..."
              rows={8}
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setShowError(false);
              }}
              aria-invalid={showError}
            />
          </div>

          <div className="flex flex-col items-center justify-center pt-4 gap-2">
            {showError ? (
              <p className="text-sm text-red-600 text-center w-full" role="alert">
                נא להזין תשובה כדי להמשיך
              </p>
            ) : null}
            <button
              type="button"
              onClick={handleContinue}
              className="px-16 py-5 bg-[#7A8F3B] hover:bg-[#6a7d32] text-white text-xl font-medium rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-[#7A8F3B]/20"
            >
              המשך
            </button>
          </div>
        </div>

        <div className="mt-24 flex gap-3">
          <div className="h-1 w-8 rounded-full bg-[#7A8F3B]/10" />
          <div className="h-1 w-12 rounded-full bg-[#7A8F3B]" />
          <div className="h-1 w-8 rounded-full bg-[#7A8F3B]/10" />
        </div>
      </main>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7A8F3B]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#7A8F3B]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
