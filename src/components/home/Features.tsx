"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SITE_DATA } from "@/lib/constants"
import { Button } from "@/components/ui/Button"

export function Features() {
  return (
    <section className="relative w-full bg-white pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-12"
        >
          <p className="text-[13px] font-semibold text-[#0A1015] tracking-widest uppercase mb-6">Problem</p>
          <h2 className="text-[26px] sm:text-[32px] md:text-[48px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015]">
            Most Businesses Don&apos;t Have a Growth Problem — They Have a Systems Problem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Feature 1: Unify and Analyze */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col group"
          >
            <div className="bg-[#F7F8FA] rounded-[4px] border border-[#EEEEEE] p-4 sm:p-8 md:p-12 aspect-[4/3] flex items-center justify-center mb-8 overflow-hidden">
               {/* Visualizer Placeholder - Pie Chart Style */}
               <div className="relative w-full max-w-[320px] bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl transform transition-transform duration-700 group-hover:scale-105">
                 <div className="flex flex-col gap-1 mb-4 md:mb-8">
                  <p className="text-[12px] font-bold text-[#8A8F98] uppercase tracking-widest">Problem Signals</p>
                   <p className="text-[36px] font-semibold text-[#0A1015]">4</p>
                 </div>
                 <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                   <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-sm bg-[#0A1015]" />
                      <span className="text-[13px] font-medium text-[#8A8F98]">Manual workflows slow everything down</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-sm bg-[#0099FF]" />
                      <span className="text-[13px] font-medium text-[#8A8F98]">Leads fall through gaps</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-sm bg-[#E5E7EB]" />
                      <span className="text-[13px] font-medium text-[#8A8F98]">Tools are disconnected</span>
                     </div>
                   </div>
                   <div className="relative w-32 h-32">
                     <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                       <circle cx="18" cy="18" r="16" fill="transparent" stroke="#E5E7EB" strokeWidth="4"></circle>
                       <circle cx="18" cy="18" r="16" fill="transparent" stroke="#0099FF" strokeWidth="4" strokeDasharray="75 100" strokeDashoffset="0"></circle>
                       <circle cx="18" cy="18" r="16" fill="transparent" stroke="#0A1015" strokeWidth="4" strokeDasharray="62 100" strokeDashoffset="0"></circle>
                     </svg>
                   </div>
                 </div>
               </div>
            </div>
            <div className="max-w-[500px]">
              <h3 className="text-[28px] font-normal text-[#0A1015] tracking-tight mb-4">Scaling requires more people, not better systems</h3>
              <p className="text-[16px] text-[#4A4F59] leading-[1.6]">
                Most businesses don&apos;t have a growth problem - they have a systems problem. Disconnected tools and manual processes make scale expensive and unpredictable.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Automate Workflows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col group"
          >
            <div className="bg-[#F7F8FA] rounded-[4px] border border-[#EEEEEE] p-4 sm:p-8 md:p-12 aspect-[4/3] flex items-center justify-center mb-4 overflow-hidden">
               {/* Workflow Issue Table */}
               <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-105 border border-[#EDF1F5]">
                 <div className="flex items-center justify-between px-4 sm:px-5 py-4 bg-[#F9FBFD] border-b border-[#EDF1F5]">
                    <span className="text-[10px] font-bold text-[#7D8694] tracking-[0.12em] uppercase">ID</span>
                    <span className="text-[10px] font-bold text-[#7D8694] tracking-[0.12em] uppercase">Workflow</span>
                    <span className="text-[10px] font-bold text-[#7D8694] tracking-[0.12em] uppercase">Issue</span>
                 </div>
                 {[1,2,3,4,5].map((i) => (
                   <div
                     key={i}
                     className="flex items-center justify-between px-3 sm:px-5 py-3.5 border-b border-[#F1F4F7] last:border-0 hover:bg-[#FBFCFD] transition-colors"
                   >
                      <span className="text-[12px] font-semibold text-[#0A1015]">#920{i}</span>
                      <div className="flex items-center gap-2.5 min-w-0 sm:min-w-[130px]">
                        <div className="relative w-6 h-6 rounded-full bg-[#EAF4FF] border border-[#D5E8FF] overflow-hidden flex-shrink-0">
                          <Image src={SITE_DATA.badgeIcon} alt="Lead Capture" fill className="object-contain p-1" />
                        </div>
                        <span className="text-[12px] font-medium text-[#4A4F59]">Lead Capture</span>
                      </div>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold tracking-[0.06em] ${i % 2 === 0 ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                        {i % 2 === 0 ? 'DELAYED' : 'MISSED'}
                      </span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="max-w-[500px]">
              <h3 className="text-[28px] font-normal text-[#0A1015] tracking-tight mb-4">Disconnected workflows create hidden bottlenecks</h3>
              <p className="text-[16px] text-[#4A4F59] leading-[1.6]">
                When systems don&apos;t talk to each other, handoffs fail, updates are delayed, and teams lose momentum at every stage of execution.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature 3: Accelerate Execution (Full Width / Split) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F8FA] rounded-[4px] border border-[#EEEEEE] overflow-hidden group"
        >
          <div className="p-6 sm:p-10 md:p-20 flex flex-col justify-center">
            <h3 className="text-[28px] md:text-[36px] font-normal text-[#0A1015] leading-[1.1] tracking-tight mb-8">
              Visibility is low when systems are fragmented
            </h3>
            <p className="text-[16px] text-[#4A4F59] leading-[1.6] mb-12 max-w-[480px]">
              Without a unified operating layer, leaders can&apos;t see what&apos;s breaking, teams can&apos;t optimize fast enough, and growth depends on hiring more people instead of better systems.
            </p>
          </div>
          <div className="relative bg-white/50 flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden">
             {/* Gradient Accent */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-50" />
             
             {/* Visualizer - Automation Performance Graph */}
             <div className="relative w-full bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 transform transition-transform duration-700 group-hover:scale-105">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-[12px] font-bold text-[#6B7280] uppercase tracking-[0.14em]">System Friction</p>
                  <span className="text-[12px] font-semibold text-[#0A1015]">Weekly Snapshot</span>
                </div>
                <div className="h-44 w-full rounded-[10px] border border-[#EEF1F4] bg-[#FAFCFE] p-4 mb-5">
                  <svg viewBox="0 0 320 140" className="w-full h-full">
                    <path d="M0 108 L40 104 L80 96 L120 86 L160 78 L200 66 L240 55 L280 43 L320 30" stroke="#0099FF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M0 120 L40 118 L80 112 L120 105 L160 98 L200 92 L240 86 L280 80 L320 74" stroke="#0A1015" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="5 5" opacity="0.55" />
                    <circle cx="320" cy="30" r="4" fill="#0099FF" />
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-[8px] border border-[#EEF1F4] bg-[#F9FBFD] px-3 py-2">
                    <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-[0.08em]">Manual Handoffs</p>
                    <p className="text-[15px] font-semibold text-[#0A1015] mt-1">42%</p>
                  </div>
                  <div className="rounded-[8px] border border-[#EEF1F4] bg-[#F9FBFD] px-3 py-2">
                    <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-[0.08em]">Leak Rate</p>
                    <p className="text-[15px] font-semibold text-[#0A1015] mt-1">18.4%</p>
                  </div>
                  <div className="rounded-[8px] border border-[#EEF1F4] bg-[#F9FBFD] px-3 py-2">
                    <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-[0.08em]">Ops Delay</p>
                    <p className="text-[15px] font-semibold text-[#0A1015] mt-1">1.2d</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
