"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
  {
    title: "Instant Setup",
    text: "Get your SIP-Voice AI bridge running in under 5 minutes, while competitors require hours of complex configuration.",
  },
  {
    title: "Developer-First Platform",
    text: "Our platform is intuitive and easy to work with, making Voice AI integration smooth across multiple platforms.",
  },
  {
    title: "Multi-Provider Support",
    text: "Connect with Vapi, LiveKit, Daily, and more Voice AI providers through one unified interface with no vendor lock-in.",
  },
  {
    title: "Global Edge Network",
    text: "Calls are routed through worldwide infrastructure for low latency and strong call quality in 150+ countries.",
  },
  {
    title: "Enterprise Security",
    text: "Built-in compliance with HIPAA, ISO-27001, and telecom regulations to protect your voice data.",
  },
  {
    title: "Real-time Analytics",
    text: "Track call quality, latency, and AI performance with detailed analytics and alerts.",
  },
]

const executionModel = [
  {
    title: "Call handling layer",
    text: "Run inbound support, outbound follow-up, and appointment reminders with clear fallback logic to human agents.",
  },
  {
    title: "Decision layer",
    text: "Apply business rules for lead scoring, qualification, urgency routing, and compliance-safe conversation flows.",
  },
  {
    title: "Action layer",
    text: "Write call summaries, update CRM fields, trigger tasks, and notify teams in real time after every interaction.",
  },
]

const deploymentModes = [
  "Sales qualification and callback automation",
  "Appointment booking and reminder operations",
  "Support deflection for repetitive inbound questions",
  "After-hours call handling with CRM handoff",
]

export function WhyZentraic() {
  return (
    <section id="zentraic-ai" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A1015]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-center mb-14 rounded-[20px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div>
            <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#98A2B3] mb-4">Zentraic AI</p>
            <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-white mb-4">
              Voice AI platform built for real teams
            </h2>
            <p className="text-[16px] text-[#D0D5DD] leading-[1.75]">
              Zentraic AI gives you the infrastructure and execution layer to automate voice operations while staying connected to your existing CRM and workflows.
            </p>
          </div>
          <div className="relative rounded-[14px] overflow-hidden border border-white/10 aspect-[16/10]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Team operating voice AI workflows"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-14">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#98A2B3] mb-4">Why teams choose Zentraic AI</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="w-10 h-10 rounded-[8px] bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-[14px] font-semibold text-white">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-[20px] text-white leading-[1.25] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#D0D5DD] leading-[1.65]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#98A2B3] mb-4">How the platform executes work</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {executionModel.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-[14px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#98A2B3] mb-3">Layer {idx + 1}</p>
                <h3 className="text-[22px] text-white leading-[1.25] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#D0D5DD] leading-[1.65]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6 md:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#98A2B3] mb-4">Common deployment modes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {deploymentModes.map((mode) => (
              <div key={mode} className="rounded-[10px] border border-white/10 bg-black/20 px-4 py-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  <p className="text-[14px] text-[#E4E7EC] leading-[1.6]">{mode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
