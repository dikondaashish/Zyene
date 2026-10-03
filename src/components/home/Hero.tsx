"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const EASE = [0.16, 1, 0.3, 1] as const

const INDUSTRY_LINKS = [
  { href: "/industries/wholesale-distribution", label: "Wholesale Distribution", detail: "Orders, quotes, product data" },
  { href: "/industries/manufacturing", label: "Manufacturing", detail: "RFQs, drawings, purchasing" },
  { href: "/industries/specialty-contractors", label: "Specialty Contractors", detail: "Bids, RFIs, closeout" },
]

const HEADLINE = [["Put", "AI", "to", "work"], ["inside", "your", "operations."]]

export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.6])

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const desktop = window.matchMedia("(min-width: 768px)").matches
    if (reduce || !desktop) {
      video.pause()
      return
    }
    const start = () => {
      video.play().catch(() => {})
    }
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 2000 })
      return () => window.cancelIdleCallback(id)
    }
    const timer = window.setTimeout(start, 1200)
    return () => window.clearTimeout(timer)
  }, [reduce])

  let wordIndex = 0

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="sticky top-0 z-0 flex min-h-[100dvh] flex-col overflow-hidden bg-[#0A1015] text-white"
    >
      <motion.div aria-hidden="true" style={{ scale: reduce ? 1 : mediaScale }} className="absolute inset-0 origin-center">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/hero-home-poster.webp"
          className="absolute inset-0 h-full w-full object-cover object-bottom motion-reduce:hidden"
        >
          <source src="/videos/hero-home-av1.mp4" type='video/mp4; codecs="av01.0.08M.10"' />
          <source src="/videos/hero-home-hevc.mp4" type='video/mp4; codecs="hvc1"' />
          <source src="/videos/hero-home.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,21,0.78)_0%,rgba(10,16,21,0.4)_45%,rgba(10,16,21,0)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,21,0.45)_0%,rgba(10,16,21,0)_22%,rgba(10,16,21,0)_58%,rgba(10,16,21,0.85)_100%)]" />
      <motion.div aria-hidden="true" style={{ opacity: veil }} className="absolute inset-0 bg-[#0A1015]" />
      <div aria-hidden="true" className="zy-grain absolute inset-0" />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="zy-container relative z-10 flex flex-1 flex-col justify-end pb-12 pt-32 md:pb-16"
      >
        <h1
          aria-label="Put AI to work inside your operations."
          className="zy-display max-w-[1280px] text-[clamp(44px,6.4vw,100px)] text-white"
        >
          {HEADLINE.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => {
                const i = wordIndex++
                return (
                  <React.Fragment key={word}>
                    <span aria-hidden="true" className="inline-block align-bottom">
                      <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: 8 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, delay: 0.04 + i * 0.03, ease: EASE }}
                      >
                        {word}
                      </motion.span>
                    </span>
                    {wi < line.length - 1 ? " " : null}
                  </React.Fragment>
                )
              })}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid items-end gap-10 lg:mt-14 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-[560px]">
            <p className="text-[17px] leading-[1.55] text-white/75 md:text-[19px]">
              We design, build, and integrate production AI for distributors, manufacturers, and specialty
              contractors, inside the systems you already run.
            </p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">
                  Book an AI Workflow Assessment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/how-we-work">See How It Works</Link>
              </Button>
            </motion.div>
          </div>

          <motion.nav
            aria-label="Industries"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.95, ease: EASE }}
            className="hidden w-full gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 backdrop-blur-xl md:grid md:grid-cols-3 lg:w-[620px]"
          >
            {INDUSTRY_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col justify-between gap-6 bg-[#0A1015]/55 p-5 transition-colors duration-300 hover:bg-[#0A1015]/30"
              >
                <ArrowUpRight className="h-4 w-4 text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                <span>
                  <span className="block text-[14.5px] font-medium text-white">{item.label}</span>
                  <span className="mt-1 block text-[12.5px] text-white/55">{item.detail}</span>
                </span>
              </Link>
            ))}
          </motion.nav>
        </div>
      </motion.div>
    </section>
  )
}
