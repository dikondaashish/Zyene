"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"
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
      delay: i * 0.04,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export type BlogArticleHeroProps = {
  title: string
  category: string
  excerpt: string
}

export function BlogArticleHero({ title, category, excerpt }: BlogArticleHeroProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const words = title.trim().split(/\s+/).filter(Boolean)

  return (
    <section
      ref={sectionRef}
      className="relative z-0 flex min-h-[60vh] items-center overflow-hidden rounded-b-[20px] bg-[#0A1015] px-6 pb-12 pt-32 sticky top-0"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={SITE_DATA.heroBg}
          alt=""
          fill
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-[#0a1015]/40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-end gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-12 lg:gap-24 lg:px-24"
      >
        <div className="min-w-0 max-w-[52rem]">
          <h1 className="break-words text-[clamp(22px,3.6vw,46px)] font-normal leading-[1.1] tracking-[-0.035em] text-white md:text-[clamp(24px,3.8vw,48px)] md:leading-[1.08]">
            {words.map((word, wordIdx) => (
              <motion.span
                key={`${word}-${wordIdx}`}
                custom={wordIdx}
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="max-w-[400px] pb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-[18px] w-[21px] flex-shrink-0">
                <Image src="/images/Logo_White.png" alt="" fill className="object-contain" />
              </div>
              <span className="text-[16px] font-medium text-white/90">Blog</span>
            </div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/55">{category}</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] leading-[1.6] text-[#CECFD0] md:text-[16px]"
          >
            {excerpt}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
