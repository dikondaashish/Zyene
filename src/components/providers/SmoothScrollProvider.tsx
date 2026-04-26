"use client"

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react"
import Lenis from "lenis"

// ─── Context ───────────────────────────────────────────────
interface SmoothScrollContextType {
  lenis: Lenis | null
  isSmooth: boolean
  toggleSmooth: () => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  isSmooth: true,
  toggleSmooth: () => {},
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

// ─── Provider ──────────────────────────────────────────────
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number>(0)
  const [isSmooth, setIsSmooth] = useState(true)

  const toggleSmooth = useCallback(() => {
    setIsSmooth((prev) => !prev)
  }, [])

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !isSmooth) {
      // Destroy existing instance if toggling off
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Orientation & gesture direction
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Smooth wheel & touch
      smoothWheel: true,
      touchMultiplier: 2,
      // Infinite scroll off
      infinite: false,
    })

    lenisRef.current = lenis

    // RAF loop — 60fps smooth updates
    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [isSmooth])

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, isSmooth, toggleSmooth }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
