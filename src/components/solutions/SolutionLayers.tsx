"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const layers = [
  {
    title: "AI Systems Layer",
    subtitle: "Your smart automation brain",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    points: [
      "AI agents handle repeated tasks for your team.",
      "Workflows move tasks from one step to the next automatically.",
      "Automation logic applies rules so work happens the right way every time.",
    ],
  },
  {
    title: "Integration Layer",
    subtitle: "Your tools connected in one flow",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    points: [
      "CRM integration keeps your lead and customer data updated.",
      "Notion, Airtable, and Zapier stay in sync with your workflows.",
      "APIs connect your existing tools so nothing works in isolation.",
    ],
  },
  {
    title: "Execution Layer",
    subtitle: "Daily work done in real time",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Real-time task automation keeps operations moving without delay.",
      "Monitoring helps catch issues quickly and keep systems healthy.",
      "Reporting shows what is working, what is blocked, and what to improve next.",
    ],
  },
]

export function SolutionLayers() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Technical Breakdown</p>
          <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#0A1015]">
            Built in clear layers, so your team can scale faster
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {layers.map((layer, idx) => (
            <motion.article
              key={layer.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-[14px] border border-[#E4E8EE] bg-[#F8FAFD] overflow-hidden"
            >
              <div className="relative h-[190px]">
                <Image
                  src={layer.image}
                  alt={layer.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-[24px] leading-[1.15] tracking-[-0.02em] text-[#0A1015] mb-2">{layer.title}</h3>
                <p className="text-[14px] text-[#4A4F59] mb-5">{layer.subtitle}</p>
                <ul className="space-y-3">
                  {layer.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0A1015]" />
                      <span className="text-[15px] text-[#0A1015] leading-[1.6]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
