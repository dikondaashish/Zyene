"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SITE_DATA } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

const PANEL_META: Record<string, { image: string; alt: string; title: string; systems: string }> = {
  Distribution: {
    image: "/images/industrial/hero-distribution.jpg",
    alt: "Staff walking the main aisle of a distribution center",
    title: "Wholesale Distribution",
    systems: "NetSuite, Epicor, Infor, Acumatica",
  },
  Manufacturing: {
    image: "/images/industrial/hero-manufacturing.jpg",
    alt: "Machinist in a hard hat running a lathe",
    title: "Manufacturing",
    systems: "ERP, MES, quality, purchasing",
  },
  Contractors: {
    image: "/images/industrial/hero-contractors.jpg",
    alt: "Two site leads in hard hats reviewing a rebar deck",
    title: "Specialty Contractors",
    systems: "ServiceTitan, Procore, accounting",
  },
}

export function Industries({
  ctaLabel = "See industries",
  ctaHref = "/industries/wholesale-distribution",
}: {
  ctaLabel?: string
  ctaHref?: string
} = {}) {
  const industries = SITE_DATA.industries.filter((i) => PANEL_META[i.name])
  const [active, setActive] = React.useState(0)

  return (
    <section id="industries" className="relative bg-paper">
      <div className="zy-container zy-section">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Reveal className="mb-6">
              <span className="zy-kicker">Industries</span>
            </Reveal>
            <RevealText
              text="Three markets. One operations problem."
              className="zy-display text-[clamp(34px,5vw,68px)] text-[#0A1015]"
            />
          </div>
          <Reveal delay={0.1} className="flex flex-col items-start gap-7">
            <p className="max-w-[440px] text-[17px] leading-[1.6] text-[#4B525C]">
              Different documents, the same pattern: information arrives as files, and people carry it into the
              systems by hand.
            </p>
            <Button variant="dark" asChild>
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal className="flex flex-col gap-3 lg:h-[640px] lg:flex-row">
          {industries.map((ind, i) => {
            const meta = PANEL_META[ind.name]
            const isActive = active === i
            return (
              <article
                key={ind.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group relative min-h-[460px] overflow-hidden rounded-[28px] bg-[#0A1015] text-white lg:min-h-0",
                  "transition-[flex-grow] duration-[900ms] ease-out-expo",
                  isActive ? "lg:flex-[2.6]" : "lg:flex-1"
                )}
              >
                <Image
                  src={meta.image}
                  alt={meta.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={cn(
                    "object-cover transition-[transform,opacity] duration-[1200ms] ease-out-expo",
                    isActive ? "scale-100 opacity-100" : "scale-[1.08] opacity-60"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015] via-[#0A1015]/30 to-[#0A1015]/10" />

                <div className="relative flex h-full flex-col justify-between p-7 md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/60">
                      {meta.systems}
                    </span>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-[#0A1015]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[30px] leading-[1.02] tracking-[-0.03em] text-white md:text-[40px]">
                      {meta.title}
                    </h3>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-700 ease-out-expo",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-[460px] text-[15.5px] leading-[1.6] text-white/75">{ind.description}</p>
                        {"href" in ind && ind.href ? (
                          <Link
                            href={ind.href}
                            className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-medium text-white after:absolute after:inset-0 after:content-['']"
                          >
                            {"cta" in ind && ind.cta ? ind.cta : "Explore"}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
