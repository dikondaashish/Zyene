"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider"

export function NavigationHandler() {
  const pathname = usePathname()
  const { lenis } = useSmoothScroll()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  return null
}
