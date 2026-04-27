"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Activity, BellRing, ChartColumnIncreasing, ListChecks } from "lucide-react"

const outputs = [
  {
    icon: ListChecks,
    title: "Tasks completed",
    description: "Total workflows completed this week across marketing, sales, and operations.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    value: "148",
    label: "This week",
  },
  {
    icon: Activity,
    title: "Error rate",
    description: "Where issues happened, how often, and what has already been fixed.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    value: "1.9%",
    label: "Down from 3.4%",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Cycle-time improvement",
    description: "How much faster work is moving compared to your previous manual process.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    value: "+37%",
    label: "Avg speed gain",
  },
  {
    icon: BellRing,
    title: "Next recommended actions",
    description: "The next high-impact updates our team recommends for better performance.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    value: "4",
    label: "Priority actions",
  },
]

export function WeeklyOutputs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A1015]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#98A2B3] mb-4">Reporting Outputs</p>
          <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-white">
            Weekly reporting that shows what matters
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="rounded-[14px] overflow-hidden border border-white/10 bg-white/[0.04]"
          >
            <div className="relative h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                alt="Weekly reporting dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/80 to-transparent" />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="text-[24px] text-white leading-[1.2] mb-3">Simple weekly view for your team</h3>
              <p className="text-[15px] text-[#D0D5DD] leading-[1.65] mb-5">
                You get one clear report: what got done, where issues happened, how fast work moved, and what to
                do next.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Tasks completed by workflow",
                  "Live error trends and fixes",
                  "Cycle-time and execution speed",
                  "Priority actions for next week",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-[14px] text-[#E4E7EC] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {outputs.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[12px] border border-white/10 bg-white/[0.04] overflow-hidden"
              >
                <div className="relative h-[120px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="w-10 h-10 rounded-[8px] bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[30px] leading-none tracking-[-0.02em] text-white mb-2">{item.value}</p>
                  <p className="text-[12px] uppercase tracking-[0.12em] text-[#98A2B3] mb-4">{item.label}</p>
                  <h3 className="text-[22px] text-white leading-[1.2] mb-3">{item.title}</h3>
                  <p className="text-[15px] text-[#D0D5DD] leading-[1.65]">{item.description}</p>
                </div>
              </motion.article>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
