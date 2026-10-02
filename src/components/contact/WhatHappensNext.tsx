"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { ScheduleCallModal } from "@/components/shared/ScheduleCallModal"

const steps = [
  {
    title: "You reach out",
    description: "Send the form above or pick a time directly. Tell us which workflow costs the most manual effort.",
  },
  {
    title: "We map one workflow",
    description: "On a 30-minute live call, we walk through the steps, the systems involved, and where the work slows down.",
  },
  {
    title: "You get a recommendation",
    description: "A proposed pilot: the workflow, the systems we would connect, and the metric we would measure.",
  },
  {
    title: "You decide",
    description: "Run the pilot or not. There is no commitment after the first conversation.",
  },
]

export function WhatHappensNext() {
  const scheduleCallUrl = process.env.NEXT_PUBLIC_CAL_SCHEDULE_URL || "/contact"
  const [isCalOpen, setIsCalOpen] = useState(false)

  return (
    <section className="bg-white">
      <div className="zy-container zy-section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <RevealText
            text="What happens after you reach out."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1} className="lg:self-end">
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#4B525C]">
              One 30-minute call. You leave with a clear view of where AI fits in the workflow, and where it does
              not.
            </p>
            <button
              type="button"
              onClick={() => setIsCalOpen(true)}
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
            >
              Pick a time on the calendar <ArrowUpRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal as="li" key={step.title} delay={idx * 0.06} className="border-t border-[#0A1015] pt-6">
              <p className="font-mono text-[12px] tracking-[0.04em] text-[#8A8F98]">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A1015]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[300px] text-[15.5px] leading-[1.6] text-[#4B525C]">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <ScheduleCallModal
        open={isCalOpen}
        onClose={() => setIsCalOpen(false)}
        scheduleCallUrl={scheduleCallUrl}
        title="Book an Assessment"
      />
    </section>
  )
}
