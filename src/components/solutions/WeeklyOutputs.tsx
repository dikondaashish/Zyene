"use client"

import { Reveal, RevealText } from "@/components/ui/Reveal"

const outputs = [
  {
    title: "Processing time",
    description: "How long the workflow takes, measured against the baseline you set.",
  },
  {
    title: "Exception rate",
    description: "What the system could not complete, and what a person had to handle.",
  },
  {
    title: "Quote turnaround",
    description: "How long a quote or estimate waits before a person can review it.",
  },
  {
    title: "Employee hours",
    description: "Where people still spend time, and whether the workflow gave any of it back.",
  },
]

export function WeeklyOutputs() {
  return (
    <section className="bg-[#0A1015] text-white">
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <RevealText
            text="Measure the outcome, not the demo."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-white"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[440px] text-[17px] leading-[1.6] text-white/65">
              Every pilot reports weekly: work completed, where exceptions happened, how fast work moved, and
              what to fix next. The numbers come from real use, never from a sales deck.
            </p>
          </Reveal>
        </div>

        <dl className="border-t border-white/20">
          {outputs.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.05}
              className="grid gap-2 border-b border-white/10 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10 md:py-9"
            >
              <dt className="text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-white md:text-[22px]">
                {item.title}
              </dt>
              <dd className="text-[16px] leading-[1.6] text-white/60">{item.description}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
