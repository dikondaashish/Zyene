"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

export function LegalHero({ title, description }: { title: string; description?: string }) {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[#0A1015] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_0%,rgba(31,155,255,0.16),transparent_60%)]"
      />
      <div aria-hidden="true" className="zy-grain absolute inset-0" />
      <div className="zy-container relative flex min-h-[46vh] flex-col justify-end pb-16 pt-40 md:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-7 flex items-center gap-2 text-[13px] text-white/60"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Zyene
          </Link>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Legal</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span className="text-white">{title}</span>
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          className="zy-display max-w-[960px] text-[clamp(40px,6vw,84px)] text-white"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-white/65"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
