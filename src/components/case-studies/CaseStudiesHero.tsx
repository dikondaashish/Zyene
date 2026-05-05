"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"
import * as React from "react"

const textRevealVariants = {
  hidden: { opacity: 0.001, filter: "blur(10px)", transform: "translateY(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0)",
    transform: "translateY(0)",
    transition: { delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export function CaseStudiesHero() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const headingLines = ["Real results.", "Real businesses."]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center pt-32 pb-12 px-6 overflow-hidden rounded-b-[20px] sticky top-0 z-0 bg-[#0A1015]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={SITE_DATA.heroBg}
          alt="Zyene case studies — AI-powered digital transformation results"
          fill
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[#0a1015]/40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end relative z-10 md:px-6 lg:px-24"
      >
        <div>
          <h1 className="text-[36px] sm:text-[44px] md:text-[80px] leading-[1.05] font-normal tracking-[-0.04em] text-white font-display-serif">
            {headingLines.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split(" ").map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    custom={lineIdx * 2 + wordIdx}
                    initial="hidden"
                    animate="visible"
                    variants={textRevealVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <div className="max-w-[420px] pb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="relative w-[21px] h-[18px]">
              <Image src="/images/Logo_White.png" alt="Zyene Logo" fill className="object-contain" />
            </div>
            <span className="text-[16px] font-medium text-white/90">Case Studies</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] md:text-[16px] text-[#CECFD0] leading-[1.6]"
          >
            How businesses used Zyene&apos;s AI systems and execution support to automate workflows, reduce manual overhead, and deliver measurable outcomes across marketing, sales, and operations.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
