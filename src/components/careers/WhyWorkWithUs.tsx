"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

const VALUES = [
  {
    title: "Work on Real Impact",
    description:
      "Everything we build directly improves how businesses operate, so your work creates visible results in real environments.",
  },
  {
    title: "AI-First Environment",
    description:
      "You work with modern AI workflows and tools every day, helping us move fast, iterate faster, and build smarter systems.",
  },
  {
    title: "Ownership & Responsibility",
    description:
      "You are trusted to own outcomes end-to-end. Less micromanagement, more responsibility, and meaningful decision-making.",
  },
  {
    title: "Fast Growth",
    description:
      "As the company scales quickly, your role, learning curve, and leadership opportunities grow at the same pace.",
  },
  {
    title: "Remote-Friendly",
    description:
      "We are output-focused and async-friendly. Work from anywhere while staying aligned on goals, quality, and delivery.",
  },
]

export function WhyWorkWithUs() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[14px] border border-[#E2E8EF] bg-white p-6 md:p-8 shadow-[0_16px_34px_rgba(10,16,21,0.07)]"
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0A1015]/20 via-[#0099FF]/45 to-[#0A1015]/20" />
          <div className="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-[#0099FF]/12 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-6 lg:gap-8">
            <div className="rounded-[12px] border border-[#1B2631] bg-[#0A1015] p-6 md:p-7 text-white shadow-[0_18px_34px_rgba(10,16,21,0.28)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85">
                  Why Work With Us
                </span>
              </div>
              <h2 className="text-[30px] md:text-[38px] leading-[1.06] tracking-[-0.03em] text-white">
                Build with speed, ownership, and real outcomes
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-white/75 max-w-[460px]">
                We are building an execution-first company where every role has direct impact on product quality, client outcomes, and company growth.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-white/85">
                High ownership culture
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VALUES.map((value, index) => (
                <div
                  key={value.title}
                  className={`group rounded-[12px] border border-[#E2E8EF] bg-[#F9FBFD] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_26px_rgba(10,16,21,0.08)] ${
                    index === 4 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#0A1015] px-2.5 text-[10px] font-semibold text-white">
                      0{index + 1}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#0A1015]/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-[18px] leading-[1.3] font-semibold tracking-[-0.01em] text-[#0A1015] mb-2">
                    {value.title}
                  </p>
                  <p className="text-[14px] leading-[1.65] text-[#4A4F59]">
                    {value.description}
                  </p>
                  <div className="mt-4 h-[2px] w-12 bg-[#0A1015]/15 transition-all duration-300 group-hover:w-20 group-hover:bg-[#0099FF]/55" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
