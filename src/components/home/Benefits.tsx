"use client"

import { SITE_DATA } from "@/lib/constants"
import { Reveal, RevealText } from "@/components/ui/Reveal"

export function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <RevealText
            text="Built for production, not demonstrations."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[420px] text-[17px] leading-[1.6] text-[#4B525C]">
              Six principles decide every engagement, from the first assessment to the workflow your team runs
              every day.
            </p>
          </Reveal>
        </div>

        <dl className="border-t border-[#0A1015]/15">
          {SITE_DATA.benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index * 0.04}
              className="grid gap-2 border-b border-[#0A1015]/10 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10 md:py-9"
            >
              <dt className="text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A1015] md:text-[22px]">
                {benefit.title}
              </dt>
              <dd className="text-[16px] leading-[1.6] text-[#4B525C]">{benefit.description}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
