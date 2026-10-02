"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

const EASE = [0.16, 1, 0.3, 1] as const

type SolutionsHeroProps = {
  headingLines?: string[]
  eyebrow?: string
  description?: string
  imageAlt?: string
  image?: string
  cta?: { label: string; href: string } | null
}

export function SolutionsHero({
  headingLines = ["Six solutions.", "One operations layer."],
  eyebrow = "Solutions",
  description = "Industries tell you we understand the work. Solutions tell you what we can build: documents, orders, quotes, agents, integrations, and operational search.",
  imageAlt = "Solutions background",
  image = "/images/industrial/hero-solutions.jpg",
  cta = { label: "Book an Assessment", href: "/contact" },
}: SolutionsHeroProps = {}) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  let wordIndex = 0

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-0 flex min-h-[86vh] flex-col overflow-hidden bg-[#0A1015] text-white md:min-h-[92vh]"
    >
      <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0">
        {image ? (
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-[70%_center]" />
        ) : null}
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,21,0.92)_0%,rgba(10,16,21,0.6)_45%,rgba(10,16,21,0.15)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,21,0.6)_0%,rgba(10,16,21,0)_30%,rgba(10,16,21,0)_60%,rgba(10,16,21,0.9)_100%)]" />
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
          <Link href="/" className="transition-colors hover:text-white">
            Zyene
          </Link>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span className="text-white">{eyebrow}</span>
        </motion.p>

        <h1 className="zy-display max-w-[1100px] text-[clamp(40px,7vw,100px)] text-white">
          {headingLines.map((line, lineIdx) => {
            const words = line.split(" ")
            return (
              <span key={lineIdx} className="block">
                {words.map((word, wi) => {
                  const i = wordIndex++
                  return (
                    <React.Fragment key={`${word}-${wi}`}>
                      <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                        <motion.span
                          className="inline-block"
                          initial={reduce ? false : { y: "110%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1.05, delay: 0.2 + i * 0.05, ease: EASE }}
                        >
                          {word}
                        </motion.span>
                      </span>
                      {wi < words.length - 1 ? " " : null}
                    </React.Fragment>
                  )
                })}
              </span>
            )
          })}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[540px] text-[17px] leading-[1.6] text-white/75 md:text-[18px]">{description}</p>
          {cta ? (
            <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  )
}
