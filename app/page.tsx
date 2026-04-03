"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8FAF8] text-[#1C1C1C] relative">
      
      <div className="relative z-10 w-full max-w-[560px] flex flex-col items-center text-center space-y-12">

        {/* Header */}
        <header className="w-full flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center space-y-1">
            <span className="text-[11px] tracking-[0.2rem] uppercase font-semibold text-[#6B7D3A] opacity-80">
              DraftEdge Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              DraftEdge
            </h1>
            <div className="w-12 h-1 bg-[#6B7D3A] rounded-full mt-2"></div>
          </div>
        </header>

        {/* Main */}
        <main className="w-full space-y-8">
          <div className="p-10 md:p-12 bg-white rounded-lg shadow border border-[#E2E8E2]">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              להתגייס בביטחון וללא דאגות ליחידה המתאימה בצבא
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              התהליך האישי שלך מתחיל כאן. בואו נמצא את המקום הנכון ביותר עבורכם.
            </p>
          </div>

          {/* Button */}
          <div className="w-full px-4">
            <button
              type="button"
              onClick={() => router.push("/persona")}
              className="w-full py-5 bg-[#6B7D3A] text-white rounded-lg font-bold text-xl hover:opacity-90 transition"
            >
              התחל עכשיו
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full pt-8">
          <p className="text-gray-400 text-sm font-medium">
            מי שמבין את התהליך — מגיע לאן שהוא באמת מתאים.
          </p>
        </footer>

      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#6B7D3A]/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#6B7D3A]/5 blur-3xl"></div>
      </div>

    </div>
  );
}
