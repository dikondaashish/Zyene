"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  {
    title: "Week 1: Audit and plan",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description:
      "We map your current process, tools, blockers, and goals. Then we choose the first workflows to automate.",
  },
  {
    title: "Week 2: Build and connect",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    description:
      "We build your AI agents and workflow logic, then connect CRM, Notion/Airtable/Zapier, and APIs you already use.",
  },
  {
    title: "Week 3: Launch and run",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description:
      "We launch with your team, automate live tasks, and monitor everything in real time so execution stays smooth.",
  },
  {
    title: "Week 4: Improve and scale",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    description:
      "We review results, fix weak points, and expand automation to the next high-impact workflows.",
  },
]

export function DeliverySteps() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-[980px] mx-auto">
        <div className="mb-12">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Implementation Timeline</p>
          <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#0A1015]">
            How we start in the first 30 days
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, idx) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-[12px] border border-[#E3E8EF] bg-[#F8FAFD] overflow-hidden"
            >
              <div className="relative h-[220px]">
                <Image src={step.image} alt={step.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0A1015] text-white text-[13px] font-semibold">
                  {idx + 1}
                </div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-[22px] text-[#0A1015] leading-[1.2] mb-3">{step.title}</h3>
                <p className="text-[15px] text-[#4A4F59] leading-[1.65]">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
