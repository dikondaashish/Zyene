"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { SITE_DATA, type MarqueePartner } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import * as React from "react"

function renderPartnerLabel(partner: MarqueePartner): React.ReactNode {
  switch (partner.labelVariant) {
    case "google":
      return (
        <span className="text-[22px] md:text-[26px] font-bold tracking-[-0.01em] normal-case leading-none">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      )
    case "simple":
      return (
        <span className="text-[20px] md:text-[24px] text-[#E7EBF2] font-bold tracking-[0.01em] leading-none">
          {partner.label}
        </span>
      )
    case "uppercase":
      return (
        <span
          className={cn(
            "text-[18px] md:text-[22px] text-[#D8DDE6] font-bold uppercase leading-none",
            partner.id === "scale-ai" ? "tracking-[0.08em]" : "tracking-[0.14em]"
          )}
        >
          {partner.label}
        </span>
      )
    case "none":
      return null
    default:
      return null
  }
}

function partnerAlt(p: MarqueePartner): string {
  if (p.labelVariant === "none") return "Glean"
  if (p.labelVariant === "google") return "Google"
  return p.label ?? p.id
}

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
          alt="Zyene — AI-Powered Digital Transformation Execution Company"
          fill
          priority
          fetchPriority="high"
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
          className="text-[32px] sm:text-[44px] md:text-[80px] leading-[1.05] font-normal tracking-[-0.04em] text-white max-w-[1000px] mb-6 font-display-serif"
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
          <Button variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
            <Link href="/contact">Schedule a Strategy Call</Link>
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
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
            We partner with the world's leading organizations to advance their industries:
          </p>
          
          <div className="relative w-full overflow-hidden">
            {/* Dark Masking */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a1015] via-transparent to-[#0a1015] opacity-100" />
            
            <div className="flex w-max animate-marquee gap-8 md:gap-20 px-4 sm:px-8 md:px-12 items-center">
              {[...SITE_DATA.marqueePartners, ...SITE_DATA.marqueePartners, ...SITE_DATA.marqueePartners].map(
                (partner, index) => {
                  const labelNode = renderPartnerLabel(partner)
                  const invertIcon = partner.iconInvert !== false
                  const wordmarkOnly = partner.labelVariant === "none"
                  return (
                    <div
                      key={`${partner.id}-${index}`}
                      className={cn(
                        "flex items-center gap-2 flex-shrink-0 opacity-50 hover:opacity-100 transition-all duration-700",
                        wordmarkOnly ? "w-auto min-w-[120px] sm:min-w-[160px] md:min-w-[200px] justify-center" : "min-w-[140px] sm:min-w-[200px] md:min-w-[240px]"
                      )}
                    >
                      <div
                        className={cn(
                          "relative flex-shrink-0",
                          wordmarkOnly ? "h-8 w-[112px] md:h-9 md:w-[132px]" : "h-8 w-8 md:h-9 md:w-9",
                          invertIcon && "grayscale brightness-0 invert"
                        )}
                      >
                        <Image
                          src={partner.icon}
                          alt={`${partnerAlt(partner)} logo`}
                          fill
                          className="object-contain object-left"
                          sizes={wordmarkOnly ? "132px" : "40px"}
                        />
                      </div>
                      {labelNode ? (
                        <span className="whitespace-nowrap leading-none">{labelNode}</span>
                      ) : null}
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
