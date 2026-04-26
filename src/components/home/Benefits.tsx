"use client"

import { motion } from "framer-motion"
import { SITE_DATA } from "@/lib/constants"
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  RefreshCcw, 
  Puzzle, 
  ShieldCheck 
} from "lucide-react"

const BENEFIT_ICONS = [
  TrendingUp,
  DollarSign,
  BarChart3,
  RefreshCcw,
  Puzzle,
  ShieldCheck
]

const textRevealVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
}

export function Benefits() {
  const headingWords = "Let your team focus on what matters most".split(" ")

  return (
    <section id="benefits" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Title Wrapper - Left Aligned */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14px] font-bold text-[#0A1015] tracking-[0.2em] uppercase mb-8"
          >
            Benefits
          </motion.p>
          <h2 className="text-[44px] md:text-[64px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] max-w-[700px]">
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
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {SITE_DATA.benefits.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                {/* Icon Wrapper - Matching Framer Gradient */}
                <div 
                  className="w-11 h-11 flex items-center justify-center rounded-[4px] shadow-[0_6px_16px_-3px_rgba(14,23,30,0.2)]"
                  style={{ background: 'linear-gradient(180deg, #0A1015 0%, #3B5E7B 100%)' }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-[20px] font-bold text-[#0A1015] tracking-tight">{benefit.title}</h4>
                  <p className="text-[15px] text-[#3D4145] leading-[1.6]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
