"use client"

import { motion } from "framer-motion"
import { Bot, Link2, PlayCircle } from "lucide-react"

const mappings = [
  {
    useCase: "Lead follow-up",
    ai: "Agent drafts and personalizes follow-up.",
    integration: "CRM + email tools + API webhooks sync status.",
    execution: "Messages send on time, replies are tracked, next tasks auto-created.",
  },
  {
    useCase: "Sales pipeline updates",
    ai: "Agent reads updates and applies workflow rules.",
    integration: "CRM + Notion/Airtable records stay aligned.",
    execution: "Pipeline stages update, owners notified, reports refreshed.",
  },
  {
    useCase: "Client onboarding",
    ai: "Agent checks required onboarding steps and dependencies.",
    integration: "Forms, docs, task tools, and CRM are connected.",
    execution: "Tasks are assigned automatically and progress is monitored live.",
  },
  {
    useCase: "Weekly ops reporting",
    ai: "Agent summarizes key wins, delays, and risk items.",
    integration: "Data pulled from CRM, Notion/Airtable, and internal APIs.",
    execution: "Report is delivered weekly with next recommended actions.",
  },
]

export function UseCaseLayerMapping() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[linear-gradient(180deg,#F8FAFD_0%,#F3F7FC_100%)] border-y border-[#E3E8EF]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 max-w-[860px]">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Use-Case to Layer Mapping</p>
          <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#0A1015]">
            Real examples mapped to each technical layer
          </h2>
          <p className="text-[16px] text-[#4A4F59] leading-[1.7] mt-4">
            Each use case runs through the same simple engine: AI decides, integrations connect, execution delivers.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-[linear-gradient(180deg,rgba(0,153,255,0.2)_0%,rgba(10,16,21,0.15)_100%)]" />

          <div className="space-y-8 md:space-y-10">
          {mappings.map((row, idx) => (
            <motion.article
              key={row.useCase}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-stretch ${
                idx % 2 === 0 ? "" : "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
              }`}
            >
              <div className="rounded-[14px] border border-[#DDE5EF] bg-white/95 backdrop-blur-sm p-6 md:p-7 shadow-[0_10px_30px_rgba(10,16,21,0.06)]">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.14em]">Use Case {idx + 1}</p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE9FF] bg-[#EEF8FF] px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF]" />
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#4A4F59]">Snake Flow</span>
                  </div>
                </div>
                <h3 className="text-[26px] text-[#0A1015] leading-[1.2] tracking-[-0.02em] mb-5">{row.useCase}</h3>
                <div className="space-y-3">
                  <div className="rounded-[10px] border border-[#DCEBFA] bg-[linear-gradient(180deg,#F8FCFF_0%,#F2F8FF_100%)] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-[#0099FF]" />
                      <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.14em]">AI Layer</p>
                    </div>
                    <p className="text-[14px] text-[#0A1015] leading-[1.6]">{row.ai}</p>
                  </div>
                  <div className="rounded-[10px] border border-[#DCEBFA] bg-[linear-gradient(180deg,#F8FCFF_0%,#F2F8FF_100%)] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Link2 className="w-4 h-4 text-[#0099FF]" />
                      <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.14em]">Integration Layer</p>
                    </div>
                    <p className="text-[14px] text-[#0A1015] leading-[1.6]">{row.integration}</p>
                  </div>
                  <div className="rounded-[10px] border border-[#DCEBFA] bg-[linear-gradient(180deg,#F8FCFF_0%,#F2F8FF_100%)] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <PlayCircle className="w-4 h-4 text-[#0099FF]" />
                      <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.14em]">Execution Layer</p>
                    </div>
                    <p className="text-[14px] text-[#0A1015] leading-[1.6]">{row.execution}</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center relative">
                <div className="w-12 h-12 rounded-full border border-[#BFE3FF] bg-[#EEF8FF] flex items-center justify-center text-[#0A1015] font-semibold text-[14px] z-10 shadow-[0_8px_20px_rgba(0,153,255,0.18)]">
                  {idx + 1}
                </div>
                <div className="absolute w-24 h-24 border border-[#D7DEE8] rounded-full opacity-50" />
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
