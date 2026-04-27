"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const flow = [
  {
    title: "Inputs",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    description: "Forms, CRM updates, support requests, and team tasks enter the system.",
  },
  {
    title: "Logic",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    description: "Rules, AI decisions, and workflow conditions decide what should happen next.",
  },
  {
    title: "Actions",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
    description: "Tasks run automatically across tools, teams, and customer touchpoints.",
  },
  {
    title: "Reporting",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    description: "You see outcomes, blockers, and next improvements in clear weekly reports.",
  },
]

export function ArchitectureSnapshot() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFD] border-y border-[#E3E8EF]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Architecture Snapshot</p>
          <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#0A1015]">
            Inputs to reporting in one clear flow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {flow.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative rounded-[12px] border border-[#E2E7EE] bg-white p-5"
            >
              <div className="relative h-[120px] rounded-[8px] overflow-hidden border border-[#E7ECF2] mb-4">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.14em] mb-2">Step {idx + 1}</p>
              <h3 className="text-[22px] text-[#0A1015] leading-[1.2] mb-2">{item.title}</h3>
              <p className="text-[14px] text-[#4A4F59] leading-[1.6]">{item.description}</p>

              {idx < flow.length - 1 ? (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] bg-[#F8FAFD]" />
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
