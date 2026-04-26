"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const HOW_WE_WORK = [
  {
    step: "01",
    title: "Audit",
    description: "We map your current operations, bottlenecks, and execution gaps across teams and workflows.",
    accent: "from-[#EAF4FF] to-[#F7FAFF]",
    badge: "A",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "object-left",
    overlay: "bg-[#0A1015]/28",
  },
  {
    step: "02",
    title: "Build",
    description: "We design and implement practical systems that automate workflows without adding tool clutter.",
    accent: "from-[#EEF8F2] to-[#F7FCF9]",
    badge: "B",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "object-center",
    overlay: "bg-[#0A1015]/30",
  },
  {
    step: "03",
    title: "Operate",
    description: "We monitor outcomes, optimize continuously, and keep systems aligned with business growth.",
    accent: "from-[#F4F2FF] to-[#FAF9FF]",
    badge: "O",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "object-right",
    overlay: "bg-[#0A1015]/32",
  },
]

const PRINCIPLES = [
  {
    title: "Execution Over Noise",
    body: "We focus on systems that remove bottlenecks and create real execution momentum. Instead of adding layers of reporting or vanity dashboards, we design workflows that help teams take action faster, reduce dependency loops, and consistently move priorities from planning to completion.",
    tag: "Principle 01",
    accent: "from-[#0A1015] to-[#111A23]",
    pill: "Action-first systems",
  },
  {
    title: "Systems Thinking",
    body: "Every solution is built as part of a connected operating system, not as an isolated fix. We define clear process ownership, handoff logic, and team responsibilities so execution remains repeatable, aligned, and scalable as your company grows across functions and regions.",
    tag: "Principle 02",
    accent: "from-[#EAF4FF] to-[#F7FAFF]",
    pill: "Connected workflows",
  },
  {
    title: "Measured Outcomes",
    body: "We measure success through operational outcomes that leadership and teams can actually use: turnaround time, completion velocity, error reduction, and system adoption quality. This keeps decisions grounded in evidence and ensures improvements remain visible, accountable, and continuously optimized.",
    tag: "Principle 03",
    accent: "from-[#EEF8F2] to-[#F8FCFA]",
    pill: "Evidence-based decisions",
  },
  {
    title: "Speed With Reliability",
    body: "We deliver with urgency, but never at the cost of process clarity or quality control. Our approach balances rapid implementation with stable foundations, documentation, and review loops so teams can move quickly while maintaining dependable, long-term operational consistency.",
    tag: "Principle 04",
    accent: "from-[#F4F2FF] to-[#FAF9FF]",
    pill: "Fast and dependable",
  },
]

export function AboutExecutionModel() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 rounded-[14px] border border-[#DFE4EA] bg-white p-6 md:p-8"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8F98]">How Zyene Works</p>
          <h3 className="mb-6 text-[30px] leading-[1.15] tracking-[-0.03em] text-[#0A1015] md:text-[40px]">
            Audit, Build, Operate.
          </h3>

          <div className="space-y-4">
            {HOW_WE_WORK.map((item, index) => (
              <div
                key={item.step}
                className={`rounded-[12px] border border-[#E3E8EE] bg-[#F9FBFD] p-4 md:p-5 ${
                  index === 1 ? "lg:[&>div]:grid-cols-[0.95fr_1.05fr]" : ""
                }`}
              >
                <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className={`rounded-[10px] bg-gradient-to-br ${item.accent} p-5 md:p-6`}>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0099FF]">
                      Step {item.step}
                    </p>
                    <p className="mb-2 text-[28px] leading-[1.1] tracking-[-0.02em] text-[#0A1015]">{item.title}</p>
                    <p className="text-[14px] leading-[1.68] text-[#4A4F59]">{item.description}</p>
                  </div>

                  <div className="relative min-h-[200px] overflow-hidden rounded-[10px] border border-[#E1E6EC] bg-white">
                    <Image
                      src={item.image}
                      alt={`${item.title} visual`}
                      fill
                      className={`object-cover ${item.imagePosition}`}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className={`absolute inset-0 ${item.overlay}`} />
                    <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/30 text-[13px] font-semibold text-white backdrop-blur-sm">
                      {item.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-[6px] bg-white/92 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A1015]">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16"
        >
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#8A8F98]">Core Principles</p>
          <h3 className="mb-8 text-[30px] leading-[1.12] tracking-[-0.03em] text-[#0A1015] md:text-[40px]">
            Principles that guide every system we build.
          </h3>

          <div className="space-y-4">
            {PRINCIPLES.map((item, index) => (
              <div
                key={item.title}
                className={`grid items-stretch gap-0 overflow-hidden rounded-[12px] border border-[#E2E7ED] ${
                  index % 2 === 0 ? "md:grid-cols-[0.34fr_1fr]" : "md:grid-cols-[1fr_0.34fr]"
                }`}
              >
                <div
                  className={`flex min-h-[120px] flex-col justify-center border-[#E2E7ED] bg-[#F7F9FC] px-5 py-5 ${
                    index % 2 === 0 ? "border-r" : "border-l md:order-2"
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8F98]">{item.tag}</p>
                  <p className="mt-2 text-[22px] leading-[1.18] tracking-[-0.02em] text-[#0A1015]">{item.title}</p>
                  <span className="mt-3 inline-flex w-fit rounded-full border border-[#D9E8F8] bg-[#EDF5FF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#0A1015]/80">
                    {item.pill}
                  </span>
                </div>

                <div className={`${index % 2 !== 0 ? "md:order-1" : ""} bg-white px-5 py-5 md:px-6`}>
                  <p className="text-[14px] leading-[1.75] text-[#4A4F59]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
