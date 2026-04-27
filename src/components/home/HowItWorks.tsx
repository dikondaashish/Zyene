"use client"

import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    "Discover your business bottlenecks",
    "Design AI systems around your workflow",
    "Build & integrate automation",
    "Optimize and scale",
  ]

  return (
    <section className="pb-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center max-w-[900px] mx-auto mb-10">
            <p className="text-[13px] font-semibold text-[#0A1015] tracking-widest uppercase mb-6">
              How It Works
            </p>
            <h3 className="text-[26px] sm:text-[30px] md:text-[44px] leading-[1.08] font-normal tracking-[-0.03em] text-[#0A1015]">
              Simple Flow
            </h3>
          </div>

          <div className="relative">
            {/* Snake connectors (desktop) */}
            <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
              <svg viewBox="0 0 1200 520" className="w-full h-full">
                <path
                  d="M 220 110 C 420 110, 560 110, 760 110"
                  stroke="#E5EAF0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 220 110 C 420 110, 560 110, 760 110"
                  stroke="url(#snakeGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                />
                <path
                  d="M 760 110 C 900 110, 900 400, 760 400"
                  stroke="#E5EAF0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 760 400 C 560 400, 420 400, 220 400"
                  stroke="#E5EAF0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M 220 110 C 420 110, 560 110, 760 110 C 900 110, 900 400, 760 400 C 560 400, 420 400, 220 400"
                  stroke="url(#snakeGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <defs>
                  <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0A1015" />
                    <stop offset="100%" stopColor="#0099FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className={`relative bg-white border border-[#E9EEF2] rounded-[8px] p-6 shadow-[0_8px_24px_rgba(10,16,21,0.05)] hover:shadow-[0_16px_30px_rgba(10,16,21,0.1)] transition-all duration-300 ${
                    index % 2 === 0 ? "lg:mr-20" : "lg:ml-20"
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-[#0A1015] text-white text-[12px] font-bold flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <p className="text-[16px] leading-[1.5] text-[#0A1015]">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
