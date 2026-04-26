"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import * as React from "react"

export function CareersHero() {
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
      className="relative min-h-[60vh] flex items-center pt-32 pb-12 overflow-hidden bg-[#0A1015]"
    >
      {/* Background Image — matches the HTML snippet */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-mesh.jpg" 
          alt="Careers Hero Background" 
          fill 
          className="object-cover object-center opacity-100"
          priority
        />
        {/* Masking Gradient from Framer source */}
        <div className="absolute inset-0 bg-[#0a1015]/40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <motion.div 
        style={{ y: contentY, opacity }}
        className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-end relative z-10 px-6 lg:px-24"
      >
        {/* Left: Heading */}
        <div className="flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] md:text-[64px] lg:text-[80px] leading-[1.05] font-normal tracking-[-0.04em] text-white font-display-serif"
          >
            Join us in building <br /> the future
          </motion.h1>
        </div>

        {/* Right: Pre-Heading & Description */}
        <div className="flex flex-col gap-8 lg:pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <div className="relative w-5 h-5 flex-shrink-0">
              <Image 
                src="/images/Logo_White.png"
                alt="Zyene Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-[16px] font-medium text-white/90">Careers</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] md:text-[18px] text-[#CECFD0] leading-[1.6] max-w-[440px]"
          >
            We’re hiring builders who want to solve meaningful problems with AI — not chase hype. Our team values clarity, speed, and doing work that lasts.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
