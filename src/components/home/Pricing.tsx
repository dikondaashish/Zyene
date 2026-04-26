"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SITE_DATA } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const textRevealVariants = {
  hidden: {
    opacity: 0.001,
    filter: "blur(10px)",
    transform: "translateY(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0)",
    transform: "translateY(0)",
  }
}

export function Pricing() {
  const [isYearly, setIsYearly] = React.useState(true)

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-12 flex flex-col items-center"
        >
          <p className="text-[13px] font-medium text-[#0099ff] tracking-widest uppercase mb-6">Pricing</p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.08 }}
            className="text-[36px] md:text-[48px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] mb-12"
          >
            {["Plans", "built", "for", "speed", "and", "scale"].map((word, index) => (
              <motion.span
                key={index}
                variants={textRevealVariants}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h2>

          {/* Toggle */}
          <div className="flex items-center gap-4 bg-black/[0.03] p-1.5 rounded-[4px] border border-black/10 backdrop-blur-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`text-[14px] font-medium px-6 py-2 rounded-[4px] transition-all ${!isYearly ? "bg-[#0A1015] text-white" : "text-[#8A8F98] hover:text-[#0A1015]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`text-[14px] font-medium px-6 py-2 rounded-[4px] transition-all flex items-center gap-2 ${isYearly ? "bg-[#0A1015] text-white" : "text-[#8A8F98] hover:text-[#0A1015]"}`}
            >
              Yearly
              <span className="text-[10px] font-bold bg-[#0099ff]/10 text-[#0099ff] px-2 py-0.5 rounded-[4px] border border-[#0099ff]/20 tracking-tight uppercase">Save 20%</span>
            </button>
          </div>
          <p className="text-[14px] text-[#8A8F98] mt-4 italic">Save 20% on yearly plans.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {SITE_DATA.pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`p-10 md:p-14 h-full flex flex-col rounded-[4px] border transition-all duration-500 hover:shadow-2xl ${i === 1 ? 'border-[#0099ff]/40 bg-[#F7F8FA]' : 'border-black/10 bg-white'}`}>
                <div className="mb-12">
                  <h3 className="text-[28px] font-normal text-[#0A1015] tracking-tight mb-4">{plan.name}</h3>
                  <p className="text-[16px] text-[#4A4F59] leading-[1.6]">{plan.description}</p>
                </div>
                <div className="mb-12">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[56px] md:text-[48px] font-semibold text-[#0A1015] tracking-tighter">
                      ${isYearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-[18px] text-[#4A4F59] font-medium">/mo</span>
                  </div>
                </div>
                <Button variant={i === 1 ? "dark" : "outline"} className={`w-full mb-12 h-14 text-base ${i === 0 ? 'border-black/10 text-[#0A1015] hover:bg-black/[0.03]' : ''}`} asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <div className="flex-1">
                  <ul className="flex flex-col gap-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0099ff]/10 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#0099ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-[15px] text-[#4A4F59]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
