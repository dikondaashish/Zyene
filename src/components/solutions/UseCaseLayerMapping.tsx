"use client"

import { Reveal, RevealText } from "@/components/ui/Reveal"

const COLUMNS = [
  { key: "ai", label: "AI reads" },
  { key: "integration", label: "Systems connect" },
  { key: "execution", label: "Work delivered" },
] as const

const mappings = [
  {
    useCase: "Order entry",
    ai: "The customer PO from email or PDF.",
    integration: "Customer and products matched in the ERP.",
    execution: "Order prepared. An employee approves.",
  },
  {
    useCase: "RFQ to quote",
    ai: "SKUs, quantities, drawings, and missing fields.",
    integration: "Inventory, price, or historical jobs looked up.",
    execution: "Quote or estimator package ready for review.",
  },
  {
    useCase: "Where is my order?",
    ai: "The customer’s question.",
    integration: "Order and shipment status checked in the ERP.",
    execution: "Reply drafted for a person to send.",
  },
  {
    useCase: "Bid intake",
    ai: "Scope, deadlines, and requirements.",
    integration: "Files land with the estimating team’s checklist.",
    execution: "Package routed to the right people.",
  },
]

export function UseCaseLayerMapping() {
  return (
    <section className="bg-paper">
      <div className="zy-container zy-section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <RevealText
            text="Four workflows, one pattern."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1} className="lg:self-end">
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#4B525C]">
              AI reads the request, integrations connect it to your systems, and the work is prepared for a person to
              approve.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="hidden border-b border-[#0A1015] pb-4 lg:grid lg:grid-cols-[1fr_1.2fr_1.2fr_1.2fr] lg:gap-10"
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A8F98]">Workflow</span>
            {COLUMNS.map((col) => (
              <span key={col.key} className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A8F98]">
                {col.label}
              </span>
            ))}
          </div>

          <div className="border-t border-[#0A1015] lg:border-t-0">
            {mappings.map((row, idx) => (
              <Reveal
                as="article"
                key={row.useCase}
                delay={idx * 0.05}
                className="grid gap-5 border-b border-[#0A1015]/12 py-8 lg:grid-cols-[1fr_1.2fr_1.2fr_1.2fr] lg:gap-10"
              >
                <h3 className="text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A1015]">
                  {row.useCase}
                </h3>
                {COLUMNS.map((col) => (
                  <div key={col.key}>
                    <p className="mb-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-[#8A8F98] lg:hidden">
                      {col.label}
                    </p>
                    <p className="text-[15.5px] leading-[1.6] text-[#3D444D]">{row[col.key]}</p>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
