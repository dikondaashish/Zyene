"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SITE_DATA } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDark, setIsDark] = React.useState(true) // true = over dark bg, false = over light bg
  const [isCalOpen, setIsCalOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const scheduleCallUrl = process.env.NEXT_PUBLIC_CAL_SCHEDULE_URL || "/contact"

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)

    // Navbar sits at the top, we want to know what's under it (approx 40px down)
    const navThreshold = latest + 40

    const mainContentEl = document.getElementById("main-content")
    const footerCtaEl = document.getElementById("footer-cta")

    let mainContentTop = 0
    if (mainContentEl) {
      // getBoundingClientRect is relative to viewport
      mainContentTop = mainContentEl.getBoundingClientRect().top + latest
    }

    let footerCtaTop = Infinity
    if (footerCtaEl) {
      footerCtaTop = footerCtaEl.getBoundingClientRect().top + latest
    }

    if (navThreshold < mainContentTop) {
      setIsDark(true) // Over Hero (dark)
    } else if (navThreshold >= footerCtaTop) {
      setIsDark(true) // Over FooterCTA/Footer (dark)
    } else {
      setIsDark(false) // Over Main Content (light)
    }
  })

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src={isDark ? SITE_DATA.logoDark : SITE_DATA.logoLight}
              alt="AI Supply Logo"
              fill
              className="object-contain transition-all duration-300"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-space-grotesk font-bold text-[28px] tracking-[-0.02em] group-hover:opacity-80 transition-all duration-300 ${isDark ? 'text-white' : 'text-[#0A1015]'}`}>
              Zyene
              <sup className="ml-[-0.15em] inline-block text-[7px] translate-x-[0.8em] -translate-y-[2.1em] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]">TM</sup>
            </span>
            <span className={`font-space-grotesk text-[9px] tracking-[0.06em] mt-0.5 group-hover:opacity-80 transition-all duration-300 ${isDark ? 'text-[#CECFD0]' : 'text-[#4A4F59]'}`}>
              Growth Powered by Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Nav links container */}
        <div className={`hidden lg:flex items-center gap-8 backdrop-blur-xl px-8 py-3 rounded-[4px] transition-all duration-300 ${
          isDark 
            ? 'bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.2)]' 
            : 'bg-black/[0.03] border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
        }`}>
          {SITE_DATA.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium transition-all duration-300 tracking-wide ${
                isDark 
                  ? 'text-[#CECFD0] hover:text-white' 
                  : 'text-[#4A4F59] hover:text-[#0A1015]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button 
            variant="secondary" 
            size="sm" 
            className={`px-6 h-[42px] transition-all duration-300 ${
              isDark
                ? ""
                : "bg-black/[0.03] text-[#0A1015] hover:bg-black/[0.06] border border-black/10"
            }`}
          >
            Client Login
          </Button>
          <Button 
            variant={isDark ? "primary" : "dark"} 
            size="sm" 
            className="px-6 h-[42px] transition-all duration-300"
            onClick={() => setIsCalOpen(true)}
          >
            Schedule a Call
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden w-11 h-11 flex items-center justify-center border rounded-[4px] transition-all duration-300 ${
            isDark 
              ? 'text-white bg-white/[0.05] border-white/10' 
              : 'text-[#0A1015] bg-black/[0.03] border-black/10'
          }`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-[100%] left-6 right-6 bg-[#0A1015]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-8"
        >
          <div className="flex flex-col gap-6">
            {SITE_DATA.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[20px] font-medium text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="primary"
              className="w-full mt-2"
              size="lg"
              onClick={() => {
                setIsOpen(false)
                setIsCalOpen(true)
              }}
            >
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      )}

      {isCalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[960px] h-[80vh] bg-white rounded-xl overflow-hidden shadow-2xl">
            <button
              type="button"
              aria-label="Close scheduling popup"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              onClick={() => setIsCalOpen(false)}
            >
              ×
            </button>
            <iframe
              src={scheduleCallUrl}
              title="Schedule a Call"
              className="w-full h-full border-0"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
            />
          </div>
        </div>
      )}
    </motion.nav>
  )
}
