"use client"

import { motion } from "framer-motion"

const steps = [
  {
    text: "You book a call or submit a form",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    text: "We review your business needs",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
  },
  {
    text: "You get a clear plan of action",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    text: "We decide if we are a good fit",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
]

export function WhatHappensNext() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[900px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-7">
            <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#8A8F98] mb-3">
              What Happens Next
            </p>
            <h2 className="text-[30px] md:text-[40px] leading-[1.08] tracking-[-0.03em] text-[#0A1015]">
              A clear 4-step process after you reach out
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={step.text} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`group relative overflow-hidden rounded-[12px] border border-[#E2E8EF] bg-white p-6 md:p-8 shadow-[0_10px_22px_rgba(10,16,21,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(10,16,21,0.08)] lg:w-[54%] ${
                    index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0A1015]/20 via-[#0099FF]/45 to-[#0A1015]/20" />
                  <div className="relative mb-5 h-48 overflow-hidden rounded-[10px] border border-[#E2E8EF]">
                    <img
                      src={step.image}
                      alt={`Step ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/45 via-[#0A1015]/12 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[13px] font-semibold text-[#0A1015]">Step {index + 1}</p>
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8A8F98]">
                      Step 0{index + 1}
                    </p>
                  </div>
                  <p className="text-[15px] leading-[1.55] font-semibold text-[#0A1015]">
                    {step.text}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block relative h-16">
                      <svg viewBox="0 0 100 60" className="w-full h-full">
                        <path
                          d={index % 2 === 0 ? "M 27 8 C 45 8, 55 52, 73 52" : "M 73 8 C 55 8, 45 52, 27 52"}
                          stroke="rgba(10,16,21,0.16)"
                          strokeWidth="1.2"
                          fill="none"
                        />
                        <motion.path
                          d={index % 2 === 0 ? "M 27 8 C 45 8, 55 52, 73 52" : "M 73 8 C 55 8, 45 52, 27 52"}
                          stroke="rgba(0,153,255,0.62)"
                          strokeWidth="2.4"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="7 8"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.1 }}
                        />
                      </svg>
                    </div>
                    <div className="lg:hidden relative h-6 flex justify-center">
                      <span className="h-full w-[2px] bg-gradient-to-b from-[#0099FF]/50 to-[#0A1015]/10" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
