"use client"

import * as React from "react"
import { motion } from "framer-motion"

const textRevealVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    }
  })
}

export function Comparison() {
  const headingWords = "How Zyene systems operate in real time".split(" ")

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Dark Container Card */}
        <div className="relative rounded-[12px] overflow-hidden bg-[#0A1015] border border-white/[0.06]">
          {/* Background Image - positioned at bottom */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1015] via-[#0A1015]/90 to-transparent z-[1]" />
            <div className="absolute bottom-0 left-0 right-0 h-[40%]">
              <img
                src="/images/pattern-bg.png"
                alt=""
                className="w-full h-full object-cover opacity-50"
                style={{ filter: "blur(20px)" }}
              />
            </div>
            {/* Side border lines */}
            <div className="absolute inset-y-0 left-0 w-[36px] border-r border-white/[0.06] hidden lg:block z-[2]" />
            <div className="absolute inset-y-0 right-0 w-[36px] border-l border-white/[0.06] hidden lg:block z-[2]" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-14 py-14 md:py-16">
            {/* Title Wrapper - Centered */}
            <div className="text-center max-w-[600px] mx-auto mb-12">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[13px] font-bold text-white tracking-[0.2em] uppercase mb-5"
              >
                System Demo
              </motion.p>
              <h2 className="text-[36px] md:text-[48px] leading-[1.05] font-normal tracking-[-0.03em] text-white mb-6">
                {headingWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textRevealVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14px] text-[#8A8F98] leading-[1.6] max-w-[480px] mx-auto"
              >
                Live orchestration across AI agents, workflow execution, and dashboards - all inside one operating layer.
              </motion.p>
            </div>

            {/* Demo Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.08] rounded-[8px] overflow-hidden bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#0099FF]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#2B7FE0]/10 blur-3xl pointer-events-none" />

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="border-b md:border-b-0 md:border-r border-white/[0.08] px-7 py-7"
              >
                <h4 className="text-[15px] font-bold text-white uppercase tracking-[0.08em] mb-5">
                  AI Agents
                </h4>
                <div className="space-y-3">
                  {["Lead Qualifier Agent", "Ops Coordinator Agent", "Sales Follow-up Agent"].map((item, i) => (
                    <div key={i} className="flex items-center justify-between rounded-[8px] bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 hover:bg-white/[0.07] transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                            <path d="M5 10a7 7 0 0 0 14 0"></path>
                            <line x1="12" y1="19" x2="12" y2="22"></line>
                          </svg>
                        </div>
                        <span className="text-[13px] text-[#CECFD0]">{item}</span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] text-[#63D471] font-semibold uppercase tracking-[0.08em]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#63D471] opacity-70" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#63D471]" />
                        </span>
                        Live
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="border-b md:border-b-0 md:border-r border-white/[0.08] px-7 py-7"
              >
                <h4 className="text-[15px] font-bold text-white uppercase tracking-[0.08em] mb-5">
                  Workflow Execution
                </h4>
                <div className="space-y-3 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.12]" />
                  {["Capture Trigger", "Route to Owner", "Send Follow-up", "Update CRM"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1F2224] shadow-[0_0_0_4px_rgba(31,34,36,0.2)] text-white text-[11px] font-bold flex items-center justify-center">{i + 1}</div>
                      <div className="flex-1 rounded-[6px] border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                        <span className="text-[13px] text-[#CECFD0]">{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="px-7 py-7"
              >
                <h4 className="text-[15px] font-bold text-white uppercase tracking-[0.08em] mb-5">
                  Dashboards
                </h4>
                <div className="rounded-[8px] border border-white/[0.08] bg-white/[0.03] p-4 space-y-3">
                  <div className="h-16 rounded-[6px] border border-white/[0.08] bg-[#0F1720] p-2">
                    <svg viewBox="0 0 220 48" className="w-full h-full">
                      <path d="M0 35 L30 30 L60 33 L90 24 L120 28 L150 18 L180 22 L220 12" stroke="#2B7FE0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <path d="M0 40 L30 38 L60 39 L90 36 L120 34 L150 31 L180 30 L220 27" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                    </svg>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#8A8F98]">Active Workflows</span>
                    <span className="text-[13px] text-white font-semibold">128</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#8A8F98]">Execution Success</span>
                    <span className="text-[13px] text-white font-semibold">97.8%</span>
                  </div>
                  <div className="h-[6px] rounded-full bg-white/[0.08] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-[#2B7FE0]"
                    />
                  </div>
                  <p className="text-[11px] text-[#8A8F98]">Real-time visibility across agents, actions, and outcomes.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
