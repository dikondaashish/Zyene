"use client"

import * as React from "react"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

type SplitListItem = {
  title: string
  description: string
}

type SplitListProps = {
  id?: string
  heading: string
  intro?: React.ReactNode
  items: SplitListItem[]
  numbered?: boolean
  footer?: React.ReactNode
  className?: string
}

export function SplitList({ id, heading, intro, items, numbered = false, footer, className }: SplitListProps) {
  return (
    <section id={id} className={cn("bg-white", className)}>
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <RevealText text={heading} className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]" />
          {intro ? (
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-[440px] text-[17px] leading-[1.6] text-[#4B525C]">{intro}</div>
            </Reveal>
          ) : null}
          {footer ? <Reveal delay={0.15}>{footer}</Reveal> : null}
        </div>

        <dl className="border-t border-[#0A1015]/15">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className="grid gap-2 border-b border-[#0A1015]/10 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10 md:py-9"
            >
              <dt className="text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A1015] md:text-[22px]">
                {numbered ? (
                  <span className="mb-2 block font-mono text-[12px] font-normal tracking-[0.04em] text-[#8A8F98]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : null}
                {item.title}
              </dt>
              <dd className={cn("text-[16px] leading-[1.6] text-[#4B525C]", numbered && "sm:pt-[26px]")}>
                {item.description}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
