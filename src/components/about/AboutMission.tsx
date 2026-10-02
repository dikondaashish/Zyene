"use client"

import { Reveal } from "@/components/ui/Reveal"

export function AboutMission() {
  return (
    <section className="bg-white">
      <div className="zy-container zy-section">
        <Reveal>
          <p className="zy-display max-w-[1100px] text-[clamp(30px,4vw,56px)] text-[#0A1015]">
            Industrial companies have invested heavily in ERP, CRM, and field systems.{" "}
            <span className="text-[#0A1015]/40">
              Critical work still moves by hand between emails, documents, spreadsheets, and those applications.
            </span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-[#0A1015]/15 pt-10 md:grid-cols-3 md:gap-12 lg:mt-24">
          {[
            "We are building the intelligence layer that connects them, for distributors, manufacturers, and specialty contractors.",
            "We do not ask you to replace the systems you already paid for. We design, build, and integrate production AI that reads the work, checks those systems, and prepares the next action.",
            "People stay involved wherever judgment or approval matters. Every deployment starts with a business metric, not a model name.",
          ].map((text, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-[17px] leading-[1.65] text-[#3D444D]">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
