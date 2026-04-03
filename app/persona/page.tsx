"use client";

import { useRouter } from "next/navigation";

export default function PersonaPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-[#1A1C1E]">

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
            <div
              onClick={() => router.push("/parent-intro")}
              className="bg-white p-8 h-72 flex flex-col justify-between cursor-pointer rounded-xl border hover:border-[#6B7D3A] transition"
            >
              <div className="text-right">
                <div className="text-4xl mb-4">👨‍👩‍👦</div>
                <h2 className="text-2xl font-bold mb-3">הורה</h2>
                <p className="text-gray-500 text-lg">
                  אני רוצה להבין ולעזור לילד שלי בתהליך הגיוס
                </p>
              </div>
            </div>

            {/* Candidate */}
            <div
              onClick={() => router.push("/candidate-unit")}
              className="bg-white p-8 h-72 flex flex-col justify-between cursor-pointer rounded-xl border border-[#6B7D3A]"
            >
              <div className="text-right">
                <div className="text-4xl mb-4">🧑‍🎓</div>
                <h2 className="text-2xl font-bold mb-3">מלש״ב</h2>
                <p className="text-gray-500 text-lg">
                  אני רוצה להבין מה הכי מתאים לי בשירות הצבאי
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="w-full bg-[#6B7D3A] text-white py-5 rounded-lg font-bold text-lg hover:opacity-90 transition">
            המשך לתהליך
          </button>

        </div>
      </main>

    </div>
  );
}