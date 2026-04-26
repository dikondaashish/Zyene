"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const audienceItems = [
  {
    title: "Operations-Heavy Businesses",
    text: "Businesses looking to automate operations and get execution support from Zyene team members who work like an extension of your in-house employees.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manual-Process Teams",
    text: "Teams overwhelmed by manual processes and needing dedicated Zyene support to run workflows with the same ownership as your internal team.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Scaling Companies",
    text: "Companies ready to scale efficiently and needing reliable Zyene operators integrated into day-to-day execution as if they are part of your company.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "System-Focused Founders",
    text: "Founders who want structured systems and hands-on Zyene team support to build and run operations with in-house-level accountability.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  },
]

export function WhoThisIsFor() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8">
            <div className="rounded-[14px] border border-[#E2E8EF] bg-[#0A1015] p-6 md:p-8 text-white shadow-[0_16px_32px_rgba(10,16,21,0.32)]">
              <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-white/65 mb-4">
                Who This Is For
              </p>
              <h2 className="text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.03em] text-white mb-5">
                We typically work with growth-minded teams
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.65] text-white/75 mb-7">
                If you need systems plus reliable execution support, Zyene can plug in like your own internal team.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[13px] font-medium text-white">
                In-house style support
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audienceItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-[12px] border border-[#E2E8EF] bg-white p-5 shadow-[0_10px_22px_rgba(10,16,21,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(10,16,21,0.08)]"
                >
                  <div className="relative mb-4 h-28 overflow-hidden rounded-[10px] border border-[#E2E8EF]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/40 via-[#0A1015]/10 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8A8F98]">
                      0{index + 1}
                    </span>
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0A1015]" />
                  </div>
                  <p className="text-[16px] leading-[1.35] font-semibold text-[#0A1015] mb-2.5">
                    {item.title}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-[#4A4F59]">
                    {item.text}
                  </p>
                  <div className="mt-4 h-[2px] w-14 bg-[#0A1015]/10 transition-all duration-300 group-hover:w-24 group-hover:bg-[#0099FF]/55" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
