"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

export type BlogArticleHeroProps = {
  title: string
  category: string
  excerpt: string
  coverImage: string
  dateISO: string
  dateDisplay: string
  readMinutes: number
}

export function BlogArticleHero({
  title,
  category,
  excerpt,
  coverImage,
  dateISO,
  dateDisplay,
  readMinutes,
}: BlogArticleHeroProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const words = title.trim().split(/\s+/).filter(Boolean)

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-0 flex min-h-[78vh] flex-col overflow-hidden bg-[#0A1015] text-white md:min-h-[84vh]"
    >
      <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0">
        <Image src={coverImage} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,21,0.94)_0%,rgba(10,16,21,0.7)_50%,rgba(10,16,21,0.35)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,21,0.6)_0%,rgba(10,16,21,0)_30%,rgba(10,16,21,0)_55%,rgba(10,16,21,0.92)_100%)]" />
      <div aria-hidden="true" className="zy-grain absolute inset-0" />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity }}
        className="zy-container relative z-10 flex flex-1 flex-col justify-end pb-14 pt-36 md:pb-20"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mb-7 flex items-center gap-2 text-[13px] text-white/60"
        >
          <Link href="/blog" className="transition-colors hover:text-white">
            Resources
          </Link>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span className="text-white">{category}</span>
        </motion.p>

        <h1 className="zy-display max-w-[1000px] text-[clamp(36px,5.4vw,76px)] text-white">
          {words.map((word, i) => (
            <React.Fragment key={`${word}-${i}`}>
              <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.2 + Math.min(i, 14) * 0.04, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
              {i < words.length - 1 ? " " : null}
            </React.Fragment>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[600px] text-[17px] leading-[1.6] text-white/75 md:text-[18px]">{excerpt}</p>
          <p className="flex items-center gap-3 text-[14px] text-white/60">
            <time dateTime={dateISO}>{dateDisplay}</time>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span>{readMinutes} min read</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
