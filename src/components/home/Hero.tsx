"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { SITE_DATA } from "@/lib/constants"
import Link from "next/link"
import * as React from "react"

const textRevealVariants = {
  hidden: {
    opacity: 0.001,
    filter: "blur(10px)",
    transform: "translateY(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0)",
    transform: "translateY(0)",
  }
}

export function Hero() {
  const headlineWords = ["Reimagine", "work", "with", "autonomous", "AI", "agents"]
  const sectionRef = React.useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  // Hero content moves up as we scroll
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden rounded-b-[20px] sticky top-0 z-0"
    >
      {/* Background Image with Masking */}
      <div className="absolute inset-0 z-0 h-[120vh]">
        <Image
          src={SITE_DATA.heroBg}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-center opacity-100"
        />
        {/* Masking Gradient - matching Framer's mask-image */}
        <div className="absolute inset-0 bg-[#0a1015]/40 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] md:[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      {/* Content Wrapper */}
      <motion.div 
        style={{ y: contentY, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center"
      >
        {/* Badge / Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-[4px] border border-white/10 bg-white/[0.04] backdrop-blur-sm mb-8 shadow-lg"
        >
          <div className="relative w-[21px] h-[18px]">
            <Image 
              src={SITE_DATA.badgeIcon} 
              alt="Icon" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-[13px] font-medium text-white/90 tracking-[0.02em]">
            Introducing{" "}
            <a
              href="https://zyenereviews.com"
              target="_blank"
              rel="noopener noreferrer"
                className="font-bold hover:text-white transition-colors"
            >
              Zyene Reviews
            </a>
          </span>
        </motion.div>

        {/* Headline with simplified animation for reliability */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[80px] leading-[1.05] font-normal tracking-[-0.04em] text-white max-w-[1000px] mb-6 font-display-serif"
        >
          We Build AI Systems
          <br />
          That Scale Your Business
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16px] text-[#CECFD0] max-w-[640px] leading-[1.6] mb-10 font-normal text-center"
        >
          Automate marketing, operations, and sales with AI-powered infrastructure — so your business scales without increasing overhead.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
            <Link href="/contact">Schedule a Strategy Call</Link>
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
            <Link href="/use-cases">View use cases</Link>
          </Button>
        </motion.div>

        {/* Logo Marquee integrated into Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full flex flex-col items-center gap-6"
        >
          <p className="text-[#8A8F98] text-[12px] font-medium tracking-[0.2em] uppercase opacity-60">
            Trusted by 300+ clients worldwide
          </p>
          
          <div className="relative w-full overflow-hidden">
            {/* Dark Masking */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a1015] via-transparent to-[#0a1015] opacity-100" />
            
            <div className="flex w-max animate-marquee gap-24 md:gap-32 px-12 items-center">
              {[...SITE_DATA.marqueeLogos, ...SITE_DATA.marqueeLogos, ...SITE_DATA.marqueeLogos].map((logo, index) => (
                <div
                  key={index}
                  className="relative w-[120px] md:w-[150px] h-[30px] md:h-[40px] flex-shrink-0 grayscale brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-700"
                >
                  <Image
                    src={logo}
                    alt={`Client Logo ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
