"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const MANUAL_ITEMS = [
  "Teams spend hours collecting updates across tools",
  "Marketing and CRM follow-ups happen inconsistently",
  "Operations rely on repeated manual coordination",
  "Important actions get delayed between handoffs",
  "Leaders lack one clear execution view daily",
]

const AI_ITEMS = [
  "Zyene systems automate repetitive workflows end-to-end",
  "Zyene team works like your extended execution team",
  "CRM, marketing, and ops actions stay synced automatically",
  "You get one clear daily brief across your stack",
  "Follow-ups are triggered, tracked, and completed on time",
]

export function AIAction() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-bold text-[#0A1015] tracking-[0.2em] uppercase mb-6">
            See Zyene in Action
          </p>
          <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-normal tracking-[-0.03em] text-[#0A1015] font-display-serif max-w-[800px] mx-auto">
            Manual execution slows growth. Zyene systems and team support scale it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F8FA] rounded-[12px] overflow-hidden mb-12">
          {/* Manual Execution */}
          <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-[#E5E5E5]">
            <h3 className="text-[20px] font-normal text-[#0A1015] mb-8">Manual Execution</h3>
            <ul className="space-y-4">
              {MANUAL_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3D4145] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#4D4D4D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With Zyene */}
          <div className="p-10 md:p-12">
            <h3 className="text-[20px] font-normal text-[#0A1015] mb-8">With Zyene</h3>
            <ul className="space-y-4">
              {AI_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0A1015] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#4D4D4D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#0A1015] rounded-[12px] p-12 md:p-16 overflow-hidden text-center min-h-[350px] flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src="/images/pattern-bg.png" 
              alt="CTA Background" 
              fill 
              className="object-cover object-center opacity-100 blur-[60px] scale-125"
              priority
            />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.17c0-.41-.16-.8-.44-1.1L12 12"></path>
                <path d="M7 22v-4.17c0-.41.16-.8.44-1.1L12 12"></path>
                <path d="M17 2v4.17c0 .41-.16.8-.44 1.1L12 12"></path>
                <path d="M7 2v4.17c0 .41.16.8.44 1.1L12 12"></path>
              </svg>
            </div>
            
            <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-normal tracking-[-0.03em] text-white font-display-serif mb-8">
              Ready to scale execution without adding complexity?
            </h2>

            <Button variant="primary" size="default" className="px-8 h-[52px] rounded-[8px]" asChild>
              <Link href="/contact">Book a Strategy Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
