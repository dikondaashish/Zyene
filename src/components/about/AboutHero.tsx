"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import * as React from "react"

const textRevealVariants = {
  hidden: {
    opacity: 0.001,
    filter: "blur(10px)",
    transform: "translateY(10px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0)",
    transform: "translateY(0)",
    transition: {
      delay: 0.2 + i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    }
  })
}

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center pt-32 pb-12 px-6 overflow-hidden rounded-b-[20px] sticky top-0 z-0 bg-[#0A1015]"
    >
      {/* Background Image from Framer Source */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-mesh.jpg" 
          alt="About Hero Background" 
          fill 
          className="object-cover object-center opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1015]/40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <motion.div 
        style={{ y: contentY, opacity }}
        className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end relative z-10 md:px-6 lg:px-24"
      >
        {/* Left: Heading with Word Reveal */}
        <div>
          <h1 className="text-[34px] sm:text-[42px] md:text-[64px] lg:text-[80px] leading-[1.05] font-normal tracking-[-0.04em] text-white font-display-serif">
            {[
              "Who we are and",
              "what we’re building"
            ].map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split(" ").map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    custom={lineIdx * 5 + wordIdx}
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

        {/* Right: Label + Subtext */}
        <div className="max-w-[400px] pb-4 md:ml-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-white mb-6"
          >
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image 
                src="/images/Logo_White.png" 
                alt="Zyene Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-[16px] font-medium text-white/90">About</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] md:text-[16px] text-[#CECFD0] leading-[1.6]"
          >
            Zyene builds intelligent systems that help teams scale execution across operations, sales, and growth with more clarity, speed, and consistency.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
