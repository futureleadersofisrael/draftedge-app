"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function FinalPage() {
  const router = useRouter()
  /** Avoid ghost click: mouse-up from pricing CTA can hit this button in the same spot. */
  const [allowHomeNavigation, setAllowHomeNavigation] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = window.setTimeout(() => setAllowHomeNavigation(true), 400)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">
          סיימת את התהליך בהצלחה 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          קיבלת כיוון ברור יותר — עכשיו אפשר להתחיל לעבוד על זה
        </p>

        <button
          type="button"
          onClick={() => {
            if (!allowHomeNavigation) return
            router.push("/")
          }}
          className={
            "w-full bg-[#6B7D3A] text-white py-3 rounded-lg font-medium " +
            (!allowHomeNavigation ? "pointer-events-none select-none" : "")
          }
        >
          סיום
        </button>
      </div>
    </div>
  )
}
