"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScheduleCallModal } from "@/components/shared/ScheduleCallModal"

export function StrategyCallWidget() {
  const scheduleCallUrl = process.env.NEXT_PUBLIC_CAL_SCHEDULE_URL || "/contact"
  const [isCalOpen, setIsCalOpen] = useState(false)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[16px] border border-[#DFE4EA] bg-white shadow-[0_18px_40px_rgba(10,16,21,0.09)]"
        >
          <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-[#0099FF]/12 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#0A1015]/8 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12 lg:p-14">
              <p className="text-[12px] font-bold text-[#8A8F98] tracking-[0.18em] uppercase mb-5">
                Schedule a Strategy Call
              </p>

              <h2 className="text-[34px] md:text-[52px] leading-[1.04] font-normal tracking-[-0.03em] text-[#0A1015] mb-5 max-w-[700px]">
                The fastest way to get started.
              </h2>

              <p className="text-[16px] text-[#4A4F59] leading-[1.65] mb-6">
                In this 30-minute call, we will:
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Understand your current systems and workflows",
                  "Identify automation opportunities",
                  "Show you how Zyene can improve your operations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 mt-0.5 rounded-full bg-[#0A1015] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 shadow-[0_4px_10px_rgba(10,16,21,0.2)]">
                      ✓
                    </span>
                    <span className="text-[16px] text-[#0A1015] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[15px] text-[#4A4F59] mb-8">No pressure. Just clarity.</p>

              <button
                type="button"
                onClick={() => setIsCalOpen(true)}
                className="inline-flex items-center justify-center px-8 h-12 bg-[#0A1015] text-white text-[14px] font-medium rounded-[6px] hover:bg-[#111A23] shadow-[0_10px_24px_rgba(10,16,21,0.24)] transition-all duration-300"
              >
                Schedule a Strategy Call
              </button>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-[#DFE4EA] bg-[#F6F8FB] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-[8px] border border-[#E1E6EC] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <p className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-[0.12em] mb-1">Duration</p>
                  <p className="text-[22px] font-semibold text-[#0A1015]">30 min</p>
                </div>
                <div className="rounded-[8px] border border-[#E1E6EC] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  <p className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-[0.12em] mb-1">Format</p>
                  <p className="text-[22px] font-semibold text-[#0A1015]">Live Call</p>
                </div>
              </div>

              <div className="rounded-[10px] border border-[#E1E6EC] bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <p className="text-[12px] font-bold text-[#8A8F98] uppercase tracking-[0.12em] mb-2">What you leave with</p>
                <p className="text-[15px] text-[#0A1015] leading-[1.6]">
                  A clear roadmap for where automation can create the biggest impact first.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ScheduleCallModal
        open={isCalOpen}
        onClose={() => setIsCalOpen(false)}
        scheduleCallUrl={scheduleCallUrl}
        title="Schedule a Strategy Call"
      />
    </section>
  )
}
