"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Reveal, RevealText } from "@/components/ui/Reveal"

export function FooterCTA() {
  const ref = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section ref={ref} id="footer-cta" className="relative overflow-hidden bg-[#0A1015] text-white">
      <motion.div aria-hidden="true" style={reduce ? undefined : { y }} className="absolute inset-[-10%_0]">
        <Image
          src="/images/industrial/cta-district.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#0A1015_0%,rgba(10,16,21,0.55)_35%,rgba(10,16,21,0.35)_65%,#0A1015_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,16,21,0.75)_0%,rgba(10,16,21,0)_70%)]" />
      <div aria-hidden="true" className="zy-grain absolute inset-0" />

      <div className="zy-container relative flex min-h-[86vh] flex-col justify-center py-28 md:py-36">
        <RevealText
          text="Map one workflow that still moves by hand."
          className="zy-display max-w-[1000px] text-[clamp(38px,6vw,88px)] text-white"
        />
        <Reveal delay={0.15} className="mt-8 max-w-[560px]">
          <p className="text-[17px] leading-[1.6] text-white/70 md:text-[18px]">
            We&apos;ll walk through the email, documents, and ERP around that workflow, and recommend a pilot. The
            systems you already run stay in place.
          </p>
        </Reveal>
        <Reveal delay={0.25} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">
              Book an Assessment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/how-we-work">How we work</Link>
          </Button>
          <a
            href="mailto:support@zyene.com"
            className="inline-flex items-center gap-2 px-2 py-3 text-[14.5px] text-white/65 transition-colors hover:text-white sm:ml-3"
          >
            <Mail className="h-4 w-4" />
            support@zyene.com
          </a>
        </Reveal>
      </div>
    </section>
  )
}
