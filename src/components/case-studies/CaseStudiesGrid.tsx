"use client"

import { ArrowRight } from "lucide-react"
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

function Flow({ label, steps, emphasis = false }: { label: string; steps: string[]; emphasis?: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[72px_1fr] sm:items-baseline sm:gap-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A8F98]">{label}</p>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((step, i) => (
          <li key={`${step}-${i}`} className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-[13.5px] leading-[1.4]",
                emphasis ? "border-[#0A1015]/20 bg-white text-[#0A1015]" : "border-transparent bg-[#0A1015]/[0.05] text-[#5B6470]"
              )}
            >
              {step}
            </span>
            {i < steps.length - 1 ? <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-[#0A1015]/30" /> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function CaseStudyRow({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Reveal
      as="article"
      className="grid gap-10 border-t border-[#0A1015]/15 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 md:py-20"
    >
      <div className="lg:sticky lg:top-32 lg:self-start">
        <p className="font-mono text-[12px] tracking-[0.04em] text-[#8A8F98]">
          {String(index + 1).padStart(2, "0")} · {study.industry}
        </p>
        <h2 className="zy-display mt-5 max-w-[520px] text-[clamp(28px,3.2vw,44px)] text-[#0A1015]">{study.title}</h2>
        <ul className="mt-7 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 text-[12.5px] text-[#4B525C]">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <dl className="space-y-8">
          <div>
            <dt className="text-[15px] font-medium text-[#0A1015]">The work today</dt>
            <dd className="mt-2 text-[16.5px] leading-[1.65] text-[#4B525C]">{study.challenge}</dd>
          </div>
          <div>
            <dt className="text-[15px] font-medium text-[#0A1015]">What the system does</dt>
            <dd className="mt-2 text-[16.5px] leading-[1.65] text-[#4B525C]">{study.solution}</dd>
          </div>
        </dl>
        <div className="mt-10 space-y-5 rounded-[20px] border border-line bg-paper p-6 md:p-7">
          <Flow label="Before" steps={study.before} />
          <Flow label="After" steps={study.after} emphasis />
        </div>
      </div>
    </Reveal>
  )
}

export function CaseStudiesGrid() {
  return (
    <section className="bg-white">
      <div className="zy-container zy-section">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 md:mb-20">
          <RevealText
            text="What the workflow looks like."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1} className="lg:self-end">
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#4B525C]">
              Three reference implementations, one per industry we serve. Each is built and demonstrated on
              synthetic business data. They show the pattern, not a customer result, and we will publish customer
              studies as they are approved.
            </p>
          </Reveal>
        </div>

        {CASE_STUDIES.map((study, i) => (
          <CaseStudyRow key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
