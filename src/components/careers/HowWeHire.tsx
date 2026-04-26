"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const HIRING_STEPS = [
  {
    title: "Application Review",
    description: "We review your experience, communication clarity, and problem-solving ability.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Initial Conversation",
    description: "A short call to understand how you think, collaborate, and approach decisions.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Practical Task (if needed)",
    description: "For some roles, we share a small real-world prompt to evaluate execution quality.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Final Discussion",
    description: "We align on expectations, scope, ownership, and growth path before moving forward.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
]

export function HowWeHire() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[14px] border border-[#E2E8EF] bg-white p-6 md:p-8 shadow-[0_16px_34px_rgba(10,16,21,0.07)]"
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0A1015]/20 via-[#0099FF]/45 to-[#0A1015]/20" />
          <div className="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-[#0099FF]/10 blur-3xl" />

          <div className="relative mb-8">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">
              How We Hire
            </p>
            <h2 className="text-[32px] md:text-[42px] leading-[1.06] tracking-[-0.03em] text-[#0A1015]">
              A clear, practical hiring process
            </h2>
            <p className="mt-3 max-w-[680px] text-[15px] leading-[1.7] text-[#4A4F59]">
              Our process is structured to be fast and fair, focused on real ability, clarity of thinking, and role fit.
            </p>
          </div>

          <div className="hidden lg:block relative mb-2">
            <div className="absolute left-[8%] right-[8%] top-10 h-[2px] bg-gradient-to-r from-[#0A1015]/10 via-[#0099FF]/50 to-[#0A1015]/10" />
            <div className="grid grid-cols-4 gap-4">
              {HIRING_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative rounded-[12px] border border-[#E2E8EF] bg-[#F9FBFD] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_24px_rgba(10,16,21,0.08)]"
                >
                  <div className="relative mb-4 h-36 overflow-hidden rounded-[10px] border border-[#E2E8EF]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/45 via-[#0A1015]/10 to-transparent" />
                  </div>
                  <div className="relative z-10 mb-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[#0A1015] px-2.5 text-[11px] font-semibold text-white shadow-[0_6px_12px_rgba(10,16,21,0.22)]">
                    {index + 1}
                  </div>
                  <p className="mb-2 text-[18px] leading-[1.3] font-semibold tracking-[-0.01em] text-[#0A1015]">
                    {step.title}
                  </p>
                  <p className="text-[14px] leading-[1.65] text-[#4A4F59]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
            {HIRING_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-[12px] border border-[#E2E8EF] bg-[#F9FBFD] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_rgba(10,16,21,0.07)]"
              >
                <div className="relative mb-4 h-36 overflow-hidden rounded-[10px] border border-[#E2E8EF]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/45 via-[#0A1015]/10 to-transparent" />
                </div>
                <div className="mb-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#0A1015] px-2.5 text-[11px] font-semibold text-white">
                  {index + 1}
                </div>
                <p className="mb-2 text-[18px] leading-[1.3] font-semibold tracking-[-0.01em] text-[#0A1015]">
                  {step.title}
                </p>
                <p className="text-[14px] leading-[1.65] text-[#4A4F59]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
