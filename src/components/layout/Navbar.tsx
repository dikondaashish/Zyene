"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SITE_DATA } from "@/lib/constants"
import { ScheduleCallModal } from "@/components/shared/ScheduleCallModal"
import { cn } from "@/lib/utils"

const INDUSTRY_MENU = [
  {
    label: "Wholesale Distribution",
    href: "/industries/wholesale-distribution",
    image: "/images/industrial/hero-distribution.jpg",
    blurb: "Orders, quotes, and customer questions into the ERP.",
  },
  {
    label: "Manufacturing",
    href: "/industries/manufacturing",
    image: "/images/industrial/hero-manufacturing.jpg",
    blurb: "RFQs, drawings, purchasing, and quality documents.",
  },
  {
    label: "Specialty Contractors",
    href: "/industries/specialty-contractors",
    image: "/images/industrial/hero-contractors.jpg",
    blurb: "Bids, RFIs, submittals, change orders, and closeout.",
  },
]

const COMPANY_BLURBS: Record<string, string> = {
  About: "Who we are and how we operate",
  "Use Cases": "Order desks, RFQs, and bid intake",
  Products: "Zyene Reviews and Zentraic AI",
  "Case Studies": "Reference workflows and outcomes",
  Security: "Approvals, access, and logging",
  Resources: "Field notes on industrial AI",
  Careers: "Build production AI with us",
}

type NavItem = (typeof SITE_DATA.nav)[number]

const PANEL_WIDTH: Record<string, number> = { Industries: 780 }
const DEFAULT_PANEL_WIDTH = 620
const VIEWPORT_GUTTER = 16

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDark, setIsDark] = React.useState(true)
  const [isCalOpen, setIsCalOpen] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [mobileGroup, setMobileGroup] = React.useState<string | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = React.useRef<HTMLElement>(null)
  const triggerRefs = React.useRef<Record<string, HTMLButtonElement | null>>({})
  const [panel, setPanel] = React.useState({ left: 0, width: DEFAULT_PANEL_WIDTH })
  const { scrollY } = useScroll()

  React.useLayoutEffect(() => {
    if (!openMenu) return
    const place = () => {
      const nav = navRef.current
      const trigger = triggerRefs.current[openMenu]
      if (!nav || !trigger) return
      const navRect = nav.getBoundingClientRect()
      const triggerRect = trigger.getBoundingClientRect()
      const width = Math.min(PANEL_WIDTH[openMenu] ?? DEFAULT_PANEL_WIDTH, window.innerWidth - VIEWPORT_GUTTER * 2)
      const centered = triggerRect.left + triggerRect.width / 2 - width / 2
      const left = Math.max(VIEWPORT_GUTTER, Math.min(centered, window.innerWidth - VIEWPORT_GUTTER - width))
      setPanel({ left: left - navRect.left, width })
    }
    place()
    window.addEventListener("resize", place)
    return () => window.removeEventListener("resize", place)
  }, [openMenu])
  const scheduleCallUrl = process.env.NEXT_PUBLIC_CAL_SCHEDULE_URL || "/contact"

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24)
    const probe = latest + 36
    const main = document.getElementById("main-content")
    const footerCta = document.getElementById("footer-cta")
    const mainTop = main ? main.getBoundingClientRect().top + latest : Infinity
    const footerTop = footerCta ? footerCta.getBoundingClientRect().top + latest : Infinity
    setIsDark(probe < mainTop || probe >= footerTop)
  })

  React.useEffect(() => {
    setIsOpen(false)
    setOpenMenu(null)
  }, [pathname])

  React.useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [isOpen])

  const openWith = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  const onDark = isDark && !isOpen
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))
  const isPortal = pathname === "/login"

  if (isPortal) return null

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpenMenu(null)
        }}
      >
        <nav
          ref={navRef}
          aria-label="Primary"
          className={cn(
            "relative mx-auto mt-3 flex h-16 max-w-[1360px] items-center justify-between rounded-full pl-5 pr-2.5 transition-[background-color,border-color,box-shadow,margin] duration-500 ease-out-expo md:h-[68px]",
            isScrolled || openMenu
              ? onDark
                ? "border border-white/10 bg-[#0A1015]/70 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150"
                : "border border-black/[0.07] bg-white/75 shadow-[0_20px_50px_-28px_rgba(10,16,21,0.35)] backdrop-blur-2xl backdrop-saturate-150"
              : "border border-transparent bg-transparent"
          )}
        >
          <Link
            href="/"
            aria-label="Zyene home"
            className="group flex items-center gap-2.5"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
          >
            <span className="relative h-7 w-7 flex-shrink-0">
              <Image
                src={SITE_DATA.logoDark}
                alt=""
                fill
                sizes="28px"
                className={cn("object-contain transition-opacity duration-300", onDark ? "opacity-100" : "opacity-0")}
                priority
              />
              <Image
                src={SITE_DATA.logoLight}
                alt=""
                fill
                sizes="28px"
                className={cn("object-contain transition-opacity duration-300", onDark ? "opacity-0" : "opacity-100")}
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-space-grotesk text-[23px] font-bold tracking-[-0.02em] transition-colors duration-300",
                  onDark ? "text-white" : "text-[#0A1015]"
                )}
              >
                Zyene
                <sup className="ml-0.5 align-super text-[6.5px] font-semibold tracking-normal">TM</sup>
              </span>
              <span
                className={cn(
                  "mt-0.5 hidden font-space-grotesk text-[8.5px] tracking-[0.08em] transition-colors duration-300 sm:block",
                  onDark ? "text-white/55" : "text-[#0A1015]/50"
                )}
              >
                Industrial AI Operations
              </span>
            </span>
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {SITE_DATA.nav.map((item: NavItem) => {
              const active = isActive(item.href)
              const base = cn(
                "relative inline-flex h-10 items-center gap-1 rounded-full px-4 text-[14px] font-medium transition-colors duration-200",
                onDark
                  ? active
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                  : active
                    ? "text-[#0A1015]"
                    : "text-[#0A1015]/60 hover:text-[#0A1015]"
              )
              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={base} aria-current={active ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                )
              }
              const expanded = openMenu === item.label
              return (
                <li key={item.label} onMouseEnter={() => openWith(item.label)} onMouseLeave={scheduleClose}>
                  <button
                    ref={(el) => {
                      triggerRefs.current[item.label] = el
                    }}
                    type="button"
                    className={base}
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(expanded ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform duration-300", expanded && "rotate-180")}
                      strokeWidth={2}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Button
              variant={onDark ? "ghost" : "outline"}
              size="sm"
              className={cn("h-11 px-5", !onDark && "border-transparent")}
              asChild
            >
              <Link href="https://clients.zyene.com">Client Login</Link>
            </Button>
            <Button
              variant={onDark ? "primary" : "dark"}
              size="sm"
              className="h-11 px-5"
              onClick={() => setIsCalOpen(true)}
            >
              Book an Assessment
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              onDark ? "bg-white/10 text-white" : "bg-[#0A1015]/[0.06] text-[#0A1015]"
            )}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <AnimatePresence>
            {openMenu ? (
              <motion.div
                key={openMenu}
                initial={{ opacity: 0, y: -8, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.985 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => openWith(openMenu)}
                onMouseLeave={scheduleClose}
                style={{ left: panel.left, width: panel.width }}
                className="absolute top-[calc(100%+10px)] hidden origin-top overflow-hidden rounded-[28px] border border-white/10 bg-[#0A1015]/95 p-3 text-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.75)] backdrop-blur-2xl lg:block"
              >
                {openMenu === "Industries" ? (
                  <div className="grid grid-cols-3 gap-3">
                    {INDUSTRY_MENU.map((ind) => (
                      <Link
                        key={ind.href}
                        href={ind.href}
                        className="group relative block overflow-hidden rounded-[20px] bg-[#121A22]"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={ind.image}
                            alt=""
                            fill
                            sizes="280px"
                            className="object-cover opacity-80 transition-[transform,opacity] duration-700 ease-out-expo group-hover:scale-[1.05] group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015] via-[#0A1015]/20 to-transparent" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="flex items-center justify-between text-[15px] font-medium text-white">
                            {ind.label}
                            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </p>
                          <p className="mt-1 text-[12.5px] leading-[1.45] text-white/60">{ind.blurb}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-[1fr_1.1fr] gap-3">
                    <ul className="grid gap-1 p-2">
                      {SITE_DATA.nav
                        .find((n: NavItem) => n.label === openMenu)
                        ?.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="group flex items-center justify-between rounded-2xl px-4 py-3 transition-colors hover:bg-white/[0.06]"
                            >
                              <span>
                                <span className="block text-[15px] font-medium text-white">{child.label}</span>
                                <span className="mt-0.5 block text-[12.5px] text-white/50">
                                  {COMPANY_BLURBS[child.label] ?? ""}
                                </span>
                              </span>
                              <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                    <Link
                      href="/security"
                      className="group relative overflow-hidden rounded-[20px] bg-[#121A22]"
                    >
                      <Image
                        src="/images/industrial/hero-security.jpg"
                        alt=""
                        fill
                        sizes="420px"
                        className="object-cover opacity-75 transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015] via-[#0A1015]/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[18px] font-medium leading-tight text-white">
                          Human approval on every critical write.
                        </p>
                        <p className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-white/65 group-hover:text-white">
                          Our security approach <ArrowUpRight className="h-3.5 w-3.5" />
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#0A1015] px-6 pb-10 pt-28 lg:hidden"
            data-lenis-prevent
          >
            <ul className="flex flex-col">
              {SITE_DATA.nav.map((item: NavItem, i: number) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/10"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-5 text-left font-display text-[30px] font-medium tracking-[-0.03em] text-white"
                        aria-expanded={mobileGroup === item.label}
                        onClick={() => setMobileGroup(mobileGroup === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-white/50 transition-transform duration-300",
                            mobileGroup === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-500 ease-out-expo",
                          mobileGroup === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="overflow-hidden">
                          <ul className="flex flex-col gap-1 pb-5">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="flex items-center justify-between rounded-xl py-2.5 text-[17px] text-white/70 hover:text-white"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.label}
                                  <ArrowUpRight className="h-4 w-4 text-white/40" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-5 font-display text-[30px] font-medium tracking-[-0.03em] text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 grid gap-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setIsOpen(false)
                  setIsCalOpen(true)
                }}
              >
                Book an Assessment
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
                asChild
              >
                <Link href="https://clients.zyene.com" onClick={() => setIsOpen(false)}>
                  Client Login
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ScheduleCallModal
        open={isCalOpen}
        onClose={() => setIsCalOpen(false)}
        scheduleCallUrl={scheduleCallUrl}
        title="Book an Assessment"
      />
    </>
  )
}
