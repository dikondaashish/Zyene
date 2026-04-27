"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, Users, Workflow } from "lucide-react"

const workFlow = [
  {
    title: "Setup with your goals",
    description: "We align your goals, team workflows, and systems before launch.",
  },
  {
    title: "Daily execution support",
    description: "Our team runs execution with your process rules and priorities.",
  },
  {
    title: "Weekly visibility",
    description: "You receive updates, reports, and clear progress every week.",
  },
  {
    title: "Continuous improvement",
    description: "We refine the system as your business grows and needs change.",
  },
]

export function ExecutionTeam() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F4F7FB] border-y border-[#E2E7EE]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 max-w-[860px]">
          <p className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#8A8F98] mb-4">Execution Team</p>
          <h2 className="text-[36px] md:text-[56px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] mb-5">
            We work like your employee team
          </h2>
          <p className="text-[17px] text-[#4A4F59] leading-[1.65]">
            You do not just get software. You get people from Zyene who run the system with you, like your in-house
            team, and execute what is needed on time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[14px] overflow-hidden border border-[#DCE2EA] bg-white lg:h-full flex flex-col"
          >
            <div className="relative h-[280px] lg:flex-1 lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                alt="Zyene execution team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute left-5 bottom-5">
                <p className="text-white text-[11px] font-semibold tracking-[0.16em] uppercase opacity-90 mb-1">
                  Embedded Support
                </p>
                <p className="text-white text-[18px] font-medium tracking-[-0.01em]">Zyene Execution Team</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-5 bg-[#F8FAFD] border-t border-[#E3E8EF]">
              <div className="rounded-[10px] border border-[#E3E8EF] bg-white p-4">
                <Users className="w-4 h-4 text-[#0A1015] mb-2" />
                <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.12em] mb-1">Model</p>
                <p className="text-[14px] text-[#0A1015] font-medium leading-[1.4]">Team + Systems</p>
              </div>
              <div className="rounded-[10px] border border-[#E3E8EF] bg-white p-4">
                <Workflow className="w-4 h-4 text-[#0A1015] mb-2" />
                <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.12em] mb-1">Approach</p>
                <p className="text-[14px] text-[#0A1015] font-medium leading-[1.4]">Process-led execution</p>
              </div>
              <div className="rounded-[10px] border border-[#E3E8EF] bg-white p-4">
                <ShieldCheck className="w-4 h-4 text-[#0A1015] mb-2" />
                <p className="text-[11px] text-[#8A8F98] uppercase tracking-[0.12em] mb-1">Outcome</p>
                <p className="text-[14px] text-[#0A1015] font-medium leading-[1.4]">Reliable delivery</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="rounded-[14px] border border-[#DCE2EA] bg-white p-7 md:p-8 lg:h-full"
          >
            <h3 className="text-[22px] text-[#0A1015] mb-6">How we work with you</h3>
            <ul className="space-y-4 mb-8">
              {workFlow.map((item, idx) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0A1015] text-white text-[12px] font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="text-[16px] text-[#0A1015] font-medium leading-[1.4]">{item.title}</p>
                    <p className="text-[14px] text-[#4A4F59] leading-[1.6] mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 h-11 rounded-[6px] bg-[#0A1015] text-white text-[14px] font-medium hover:bg-[#111A23] transition-colors"
              >
                Talk to our team
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-7 h-11 rounded-[6px] border border-[#DCE2EA] text-[#0A1015] text-[14px] font-medium hover:bg-[#F8FAFD] transition-colors"
              >
                View full solution flow
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
