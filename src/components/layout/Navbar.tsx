"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ChevronDown, Building2, UserRoundSearch, Newspaper, BriefcaseBusiness } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SITE_DATA } from "@/lib/constants"
import { ScheduleCallModal } from "@/components/shared/ScheduleCallModal"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDark, setIsDark] = React.useState(true) // true = over dark bg, false = over light bg
  const [isCalOpen, setIsCalOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const scheduleCallUrl = process.env.NEXT_PUBLIC_CAL_SCHEDULE_URL || "/contact"
  type NavItem = (typeof SITE_DATA.nav)[number]
  const getAboutMenuIcon = (label: string) => {
    if (label.toLowerCase() === "about") return <Building2 className="w-3.5 h-3.5" />
    if (label.toLowerCase() === "careers") return <UserRoundSearch className="w-3.5 h-3.5" />
    if (label.toLowerCase() === "case studies") return <BriefcaseBusiness className="w-3.5 h-3.5" />
    if (label.toLowerCase() === "blog") return <Newspaper className="w-3.5 h-3.5" />
    return null
  }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-5' : 'py-9'}`}
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
              alt="Zyene Logo"
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
          {SITE_DATA.nav.map((item: NavItem) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 text-[13px] font-medium transition-all duration-300 tracking-wide ${
                    isDark ? "text-[#CECFD0] group-hover:text-white" : "text-[#4A4F59] group-hover:text-[#0A1015]"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div
                  className={`absolute left-0 top-[calc(100%+10px)] min-w-[170px] rounded-[8px] border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                    isDark
                      ? "bg-[#0A1015]/95 border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                      : "bg-white border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-[6px] text-[13px] ${
                        isDark ? "text-[#CECFD0] hover:bg-white/10 hover:text-white" : "text-[#4A4F59] hover:bg-black/[0.04] hover:text-[#0A1015]"
                      }`}
                    >
                      {getAboutMenuIcon(child.label)}
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium transition-all duration-300 tracking-wide ${
                  isDark ? "text-[#CECFD0] hover:text-white" : "text-[#4A4F59] hover:text-[#0A1015]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
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
            {SITE_DATA.nav.map((item: NavItem) =>
              item.children ? (
                <div key={item.label} className="space-y-3">
                  <p className="text-[20px] font-medium text-white">{item.label}</p>
                  <div className="pl-4 border-l border-white/15 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 text-[17px] text-[#CECFD0] transition-colors hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {getAboutMenuIcon(child.label)}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[20px] font-medium text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
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

      <ScheduleCallModal
        open={isCalOpen}
        onClose={() => setIsCalOpen(false)}
        scheduleCallUrl={scheduleCallUrl}
        title="Schedule a Call"
      />
    </motion.nav>
  )
}
