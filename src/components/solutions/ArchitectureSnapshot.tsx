"use client"

import { Reveal, RevealText } from "@/components/ui/Reveal"

const flow = [
  {
    title: "Understand",
    description: "Email, PDFs, ERP, CRM, documents, and field systems are the inputs.",
  },
  {
    title: "Reason",
    description: "The operations layer reads the work and checks it against your business rules.",
  },
  {
    title: "Validate",
    description: "Missing data and exceptions are flagged before anything is posted.",
  },
  {
    title: "Act",
    description: "Orders, quotes, updates, and replies are prepared for your systems and your approval.",
  },
]

export function ArchitectureSnapshot() {
  return (
    <section className="border-t border-line bg-white">
      <div className="zy-container zy-section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <RevealText
            text="How every solution runs."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1} className="lg:self-end">
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#4B525C]">
              Your business systems on one side, the outcome on the other. In between, the same four steps,
              whichever solution you start with.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {flow.map((item, idx) => (
            <Reveal as="li" key={item.title} delay={idx * 0.06} className="border-t border-[#0A1015] pt-6">
              <p className="font-mono text-[12px] tracking-[0.04em] text-[#8A8F98]">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-[#0A1015]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[300px] text-[15.5px] leading-[1.6] text-[#4B525C]">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
