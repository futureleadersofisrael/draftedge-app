"use client";

import { Inter, Space_Grotesk } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Registration() {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    void localStorage.getItem("parentPain");
    void localStorage.getItem("servicePreference");
  }, []);

  return (
    <div
      dir="rtl"
      lang="he"
      className={`light min-h-screen flex items-center justify-center p-4 bg-[#F8FAF8] ${inter.className}`}
    >
      <main className="w-full max-w-[480px] relative z-0">
        <div className="mb-12 text-center">
          <h1
            className={`text-2xl font-bold tracking-tighter text-[#1A1C1A] uppercase ${spaceGrotesk.className}`}
          >
            DRAFTEDGE
          </h1>
        </div>

        <div className="bg-white rounded-[12px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E7EB]/50">
          <div className="text-center mb-10">
            <h2
              className={`text-2xl md:text-3xl font-bold text-[#1A1C1A] mb-4 leading-tight ${spaceGrotesk.className}`}
            >
              כדי להמשיך — בוא נשמור את הנתונים שלך
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-2">
              נשתמש במידע שלך כדי לדייק עבורך את ההכוונה ולתת לך מסלולים שמתאימים
              באמת
            </p>
            <p className="text-[#6B7280]/70 text-xs font-medium">
              בלי ספאם. רק מידע רלוונטי שיעזור לך לקבל החלטות נכונות
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const emailEl = emailInputRef.current;
              const phoneEl = phoneInputRef.current;
              if (!emailEl || !phoneEl) return;

              const emailOk =
                emailEl.value.trim() !== "" && emailEl.validity.valid;
              const phoneOk = phoneEl.value.trim() !== "";
              if (!emailOk || !phoneOk) return;

              localStorage.setItem("registrationCompleted", "true");
              router.push("/personalized_paths_light_style");
            }}
          >
            <div className="space-y-2">
              <label
                className={`block text-xs font-bold uppercase tracking-wider text-[#6B7280] ${spaceGrotesk.className}`}
              >
                אימייל
              </label>
              <input
                ref={emailInputRef}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E5E7EB] focus:border-[#7A8F3B] focus:ring-0 transition-colors text-right placeholder:text-[#6B7280]/40 outline-none"
                placeholder="הכנס אימייל"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label
                className={`block text-xs font-bold uppercase tracking-wider text-[#6B7280] ${spaceGrotesk.className}`}
              >
                טלפון
              </label>
              <input
                ref={phoneInputRef}
                className="w-full px-4 py-3 bg-transparent border-b-2 border-[#E5E7EB] focus:border-[#7A8F3B] focus:ring-0 transition-colors text-right placeholder:text-[#6B7280]/40 outline-none"
                placeholder="הכנס מספר טלפון"
                type="tel"
              />
            </div>

            <div className="pt-4">
              <button
                className={`w-full py-4 bg-[#7A8F3B] hover:bg-[#6A7C33] text-white font-bold text-sm uppercase tracking-widest transition-all duration-150 ${spaceGrotesk.className}`}
                type="submit"
              >
                המשך
              </button>
            </div>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-[#6B7280] font-medium">
                או
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 border border-[#E5E7EB] hover:bg-[#F8FAF8] transition-colors font-medium text-[#1A1C1A] text-sm"
            >
              <svg
                height="18"
                viewBox="0 0 18 18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
                  fill="#34A853"
                />
                <path
                  d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
                  fill="#EA4335"
                />
              </svg>
              <span>המשך עם Google</span>
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-[#6B7280]/50">
            בלחיצה על &quot;המשך&quot;, הינך מסכים/מה ל-
            <a
              className="underline hover:text-[#7A8F3B] transition-colors"
              href="#"
            >
              תנאי השימוש
            </a>
            &nbsp;ו-
            <a
              className="underline hover:text-[#7A8F3B] transition-colors"
              href="#"
            >
              מדיניות הפרטיות
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="h-px bg-[#E5E7EB]/30" />
          <div className="h-px bg-[#E5E7EB]/30" />
          <div className="h-px bg-[#E5E7EB]/30" />
        </div>
      </main>

      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7A8F3B]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-[#1A1C1A]/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
