"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { REVEAL_VIEWPORT } from "@/lib/motion"

const pillars = [
  {
    title: "The call still has to be answered",
    text: "Inbound and outbound calls that used to sit on a person: status questions, follow-up after a job, and routing to the right desk.",
  },
  {
    title: "The CRM stays the record",
    text: "The outcome of the call is written back to the CRM you already run. Zentraic does not replace that system.",
  },
  {
    title: "A person can stay on the step",
    text: "Qualification, routing, and summaries can be prepared automatically. You decide which conversations need an employee before anything is sent or saved.",
  },
  {
    title: "Built as an internal tool",
    text: "We kept seeing the same gap while working with businesses: the phone and the CRM were not connected. This product is that tool, opened as SaaS.",
  },
]

const executionModel = [
  {
    title: "Handle the call",
    text: "Inbound questions, outbound follow-up after a job, and after-hours coverage, with a path to a person when the conversation is not routine.",
  },
  {
    title: "Apply your rules",
    text: "Qualify, route, and flag urgency using the rules you set. Exceptions go to someone on your team.",
  },
  {
    title: "Write the outcome",
    text: "A summary, updated fields, and a task in the CRM so the next person does not retype the call.",
  },
]

const deploymentModes = [
  "Follow-up after a service job",
  "Status and scheduling questions on the phone",
  "After-hours coverage with a handoff to your team",
  "Call notes written back to the CRM",
]

export function WhyZentraic() {
  return (
    <section id="zentraic-ai" className="bg-[#0A1015] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 grid items-center gap-8 rounded-[20px] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1fr_1fr] md:p-8">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#98A2B3]">Zentraic AI</p>
            <h2 className="mb-4 text-[36px] leading-[1.08] tracking-[-0.03em] text-white md:text-[56px]">
              Voice for the work around the CRM
            </h2>
            <p className="text-[16px] leading-[1.75] text-[#D0D5DD]">
              Zentraic handles the call and writes what happened into the system you already use.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-white/10">
            <Image
              src="/images/industrial/dist-customer-ops.jpg"
              alt="Operations desk handling customer calls and system updates"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-14">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#98A2B3]">What it is for</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {pillars.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="mb-3 text-[20px] leading-[1.25] text-white">{item.title}</h3>
                <p className="text-[14px] leading-[1.65] text-[#D0D5DD]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#98A2B3]">How a call moves</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {executionModel.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#98A2B3]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-[22px] leading-[1.25] text-white">{item.title}</h3>
                <p className="text-[14px] leading-[1.65] text-[#D0D5DD]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#98A2B3]">Typical uses</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {deploymentModes.map((mode) => (
              <div key={mode} className="rounded-[10px] border border-white/10 bg-black/20 px-4 py-3">
                <p className="text-[14px] leading-[1.6] text-[#E4E7EC]">{mode}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
