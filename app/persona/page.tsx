"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type PersonaChoice = "parent" | "candidate" | null;

export default function PersonaPage() {
  const router = useRouter();
  const [selectedPersona, setSelectedPersona] = useState<PersonaChoice>(null);

  const handleContinue = () => {
    if (!selectedPersona) return;
    if (selectedPersona === "parent") router.push("/parent-intro");
    else router.push("/candidate-unit");
  };

  return (
    <div dir="rtl" lang="he" className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#1A1C1E]">

      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex justify-center items-center h-20 bg-[#F8FAF8]/80 backdrop-blur-md">
        <div className="text-2xl font-black text-[#6B7D3A] tracking-tighter uppercase">
          DraftEdge
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-32 px-4">
        <div className="w-full max-w-[720px] flex flex-col items-center">

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              לפני שנתחיל נשמח להכיר אותך
            </h1>
            <p className="text-gray-500 text-lg">
              כדי לדייק את ההכוונה האישית עבורך
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">

            {/* Parent */}
            <button
              type="button"
              onClick={() => setSelectedPersona("parent")}
              className={`w-full text-right bg-white p-8 h-72 flex flex-col justify-between cursor-pointer rounded-xl border transition ${
                selectedPersona === "parent"
                  ? "border-2 border-[#6B7D3A] shadow-sm"
                  : "border hover:border-[#6B7D3A]"
              }`}
            >
              <div>
                <div className="text-4xl mb-4">👨‍👩‍👦</div>
                <h2 className="text-2xl font-bold mb-3">הורה</h2>
                <p className="text-gray-500 text-lg">
                  אני רוצה להבין ולעזור לילד שלי בתהליך הגיוס
                </p>
              </div>
            </button>

            {/* Candidate */}
            <button
              type="button"
              onClick={() => setSelectedPersona("candidate")}
              className={`w-full text-right bg-white p-8 h-72 flex flex-col justify-between cursor-pointer rounded-xl border transition ${
                selectedPersona === "candidate"
                  ? "border-2 border-[#6B7D3A] shadow-sm"
                  : "border hover:border-[#6B7D3A]"
              }`}
            >
              <div>
                <div className="text-4xl mb-4">🧑‍🎓</div>
                <h2 className="text-2xl font-bold mb-3">מלש״ב</h2>
                <p className="text-gray-500 text-lg">
                  אני רוצה להבין מה הכי מתאים לי בשירות הצבאי
                </p>
              </div>
            </button>

          </div>

          {/* Button */}
          <button
            type="button"
            disabled={!selectedPersona}
            onClick={handleContinue}
            className="w-full bg-[#6B7D3A] text-white py-5 rounded-lg font-bold text-lg hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50"
          >
            המשך לתהליך
          </button>

        </div>
      </main>

    </div>
  );
}