"use client"

import { Reveal, RevealText } from "@/components/ui/Reveal"
import { SplitList } from "@/components/ui/SplitList"

const METRICS = [
  {
    title: "Employee hours",
    description: "Where people spend time on the workflow today, and how much of it the system gives back.",
  },
  {
    title: "Orders processed",
    description: "How many orders, quotes, or documents move through without being retyped.",
  },
  {
    title: "Exception rate",
    description: "What the system could not complete on its own, and why a person had to step in.",
  },
  {
    title: "Cost per transaction",
    description: "The full cost of handling one order, quote, or request, before and after.",
  },
]

const HOW_WE_WORK = [
  {
    title: "Discover",
    description: "We map the workflow, the systems, the people, and the bottlenecks before we propose a build.",
  },
  {
    title: "Build",
    description: "We build on your existing ERP, CRM, email, and documents. AI does not replace those systems.",
  },
  {
    title: "Improve",
    description: "We validate, deploy, measure the agreed metric, and improve from real use and employee feedback.",
  },
]

const PRINCIPLES = [
  {
    title: "Workflow first",
    description:
      "We start with how the work actually happens: the email, the PDF, the person who retypes it, and the system that should have received it. The model comes after the workflow is clear.",
  },
  {
    title: "Systems stay in place",
    description:
      "ERP, MES, CRM, field software, and accounting stay the system of record. We integrate with them rather than asking you to rip them out for an AI project.",
  },
  {
    title: "Measured outcomes",
    description:
      "Hours, orders, quote turnaround, exceptions, and response time are agreed before a pilot and used to judge the work.",
  },
  {
    title: "Speed with reliability",
    description:
      "We move with urgency, but not at the cost of quality. Documentation, review loops, and stable foundations keep fast delivery dependable over time.",
  },
]

export function AboutExecutionModel() {
  return (
    <>
      <SplitList
        className="border-t border-line"
        heading="Every deployment starts with a business metric."
        intro="We agree on what will be measured before a pilot begins, and report against it from real use."
        items={METRICS}
      />

      <section className="bg-paper">
        <div className="zy-container zy-section">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <RevealText
              text="Discover, build, improve."
              className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
            />
            <Reveal delay={0.1} className="lg:self-end">
              <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#4B525C]">
                Three phases, the same for every customer. The full six-step process is on the How we work page.
              </p>
            </Reveal>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-20">
            {HOW_WE_WORK.map((item, idx) => (
              <Reveal as="li" key={item.title} delay={idx * 0.06} className="border-t border-[#0A1015] pt-6">
                <p className="font-mono text-[12px] tracking-[0.04em] text-[#8A8F98]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-[26px] font-medium leading-[1.2] tracking-[-0.02em] text-[#0A1015]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[360px] text-[16px] leading-[1.6] text-[#4B525C]">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <SplitList heading="Principles behind every system we build." items={PRINCIPLES} />
    </>
  )
}
