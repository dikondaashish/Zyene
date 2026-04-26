"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import { WaterDroplet } from "@/components/ui/WaterDroplet"
import Link from "next/link"

export function Process() {
  const [activeTabId, setActiveTabId] = React.useState(SITE_DATA.processTabs[0].id)
  const activeTab = SITE_DATA.processTabs.find(t => t.id === activeTabId) || SITE_DATA.processTabs[0]

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[800px] mx-auto mb-12"
        >
          <p className="text-[13px] font-semibold text-[#0A1015] tracking-widest uppercase mb-6">Solution</p>
          <h2 className="text-[36px] md:text-[48px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015]">
            Zyene Builds the Infrastructure Behind Modern Businesses
          </h2>
          <p className="text-[16px] text-[#4A4F59] leading-[1.6] mt-6 max-w-[720px] mx-auto">
            We unify your marketing, operations, and sales into one AI-powered system.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Tab Buttons - Premium Underline Style */}
          <div className="flex justify-center border-b border-[#EEEEEE] mb-12">
            <div className="flex gap-12">
              {SITE_DATA.processTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative pb-4 text-[15px] font-medium transition-all duration-300 ${
                    activeTabId === tab.id
                      ? "text-[#0A1015]"
                      : "text-[#8A8F98] hover:text-[#0A1015]"
                  }`}
                >
                  {tab.title}
                  {activeTabId === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A1015]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column: Dynamic Visualizer */}
            <motion.div
              key={`${activeTabId}-visual`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square bg-[#F7F8FA] rounded-[4px] border border-[#EEEEEE] overflow-hidden group"
            >
              {activeTabId === 'develop' ? (
                /* Develop Visual: Exact Framer Match */
                <div className="relative h-full w-full flex">
                  {/* Left Side: Image */}
                  <div className="w-1/2 h-full relative overflow-hidden bg-[#F7F8FA]">
                    <Image
                      src="/images/process-main.jpg"
                      alt="Develop Visual"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Center Divider Line */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-20 opacity-60" 
                    style={{ background: 'linear-gradient(180deg, rgba(10, 16, 21, 0) 0%, #0A1015 49.54%, rgba(10, 16, 21, 0) 100%)' }} 
                  />

                  {/* Right Side: Scrolling Workflow Cards */}
                  <div className="w-1/2 h-full bg-[#F7F8FA] relative overflow-hidden flex flex-col justify-center">
                    <div className="flex w-max relative">
                      <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-4 px-2"
                      >
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="flex gap-4">
                            {["Research Workflow", "Marketing Workflow", "Outreach Workflow", "Webinar Workflow"].map((flow, j) => (
                              <div
                                key={j}
                                className="p-[2px] rounded-[16px] shadow-[0px_1px_16px_0px_rgba(10,16,21,0.08)] whitespace-nowrap min-w-[180px]"
                                style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 100%)' }}
                              >
                                <div className="bg-white rounded-[12px] px-6 py-4 flex items-center justify-center">
                                  <span className="text-[12px] font-medium text-[#6C6D80] tracking-tight">{flow}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Glass Blur Transition Partition */}
                  <div className="absolute inset-y-0 left-[45%] right-[45%] z-20 pointer-events-none overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {/* Subtle Noise for Realism */}
                    <div className="absolute inset-0 opacity-[0.02]" 
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
                    />
                    {/* Shine Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5" />
                  </div>
                </div>
              ) : activeTabId === 'optimize' ? (
                /* Optimize Visual: Gauge Animation */
                <div className="relative h-full w-full flex items-center justify-center bg-[#F7F8FA]">
                  {/* Topographic Background */}
                  <div className="absolute inset-0 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {[...Array(10)].map((_, i) => (
                        <circle
                          key={i}
                          cx="50"
                          cy="50"
                          r={10 + i * 8}
                          fill="none"
                          stroke="#DDDDDD"
                          strokeWidth="0.5"
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Optimization Score Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative bg-white p-10 rounded-2xl shadow-xl w-[320px] aspect-square flex flex-col items-center justify-center border border-[#EEEEEE]"
                  >
                    <p className="text-[14px] font-medium text-[#4A4F59] mb-8">Optimization Score</p>
                    
                    <div className="relative w-48 h-24 overflow-hidden">
                      {/* Gauge Background */}
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <path
                          d="M 10 50 A 40 40 0 0 1 90 50"
                          fill="none"
                          stroke="#F3F4F6"
                          strokeWidth="10"
                          strokeLinecap="round"
                        />
                        {/* Gauge Progress */}
                        <motion.path
                          d="M 10 50 A 40 40 0 0 1 90 50"
                          fill="none"
                          stroke="#0A1015"
                          strokeWidth="10"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 0.89 }}
                          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        />
                      </svg>
                    </div>

                    <div className="flex justify-between w-full mt-2 px-2">
                      <span className="text-[10px] text-[#8A8F98]">0%</span>
                      <span className="text-[10px] text-[#8A8F98]">100%</span>
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-[28px] font-bold text-[#0A1015] bg-[#F7F8FA] px-4 py-1 rounded-md"
                      >
                        89%
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              ) : (
                /* Discovery/Optimize Visual: Workflow Diagram Placeholder */
                <>
                  <div className="absolute inset-0 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {[...Array(10)].map((_, i) => (
                        <circle
                          key={i}
                          cx="50"
                          cy="50"
                          r={10 + i * 8}
                          fill="none"
                          stroke="#DDDDDD"
                          strokeWidth="0.5"
                        />
                      ))}
                    </svg>
                  </div>

                  <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
                    {/* Discovery Workflow Diagram */}
                    <div className="flex flex-col items-center gap-2 w-full max-w-[320px]">
                      <div className="bg-[#0A1015] text-white text-[9px] font-bold py-2 px-6 rounded-t-sm uppercase tracking-[0.2em] w-[200px] text-center">
                        System Start
                      </div>
                      
                      <div className="bg-white border border-[#EEEEEE] py-4 px-6 rounded-sm text-[12px] text-[#0A1015] font-medium w-[200px] text-center shadow-sm">
                        Capture inbound lead
                      </div>
                      
                      <div className="w-px h-4 bg-[#EEEEEE]" />
                      
                      <div className="bg-white border border-[#EEEEEE] py-4 px-6 rounded-sm text-[12px] text-[#0A1015] font-medium w-[200px] text-center shadow-sm">
                        Sync CRM and pipeline data
                      </div>
                      
                      <div className="w-px h-4 bg-[#EEEEEE]" />
                      
                      <div className="bg-white border border-[#EEEEEE] py-4 px-6 rounded-sm text-[11px] leading-tight text-[#0A1015] font-medium w-[200px] text-center shadow-sm">
                        Score lead quality and intent
                      </div>
                      
                      <div className="w-px h-4 bg-[#EEEEEE]" />
                      
                      <div className="bg-white border border-[#EEEEEE] py-4 px-6 rounded-sm text-[11px] leading-tight text-[#0A1015] font-medium w-[200px] text-center shadow-sm">
                        Route tasks to sales and ops
                      </div>

                      {/* Decision Row */}
                      <div className="mt-6 flex items-center justify-center gap-2 w-full">
                        <div className="bg-white border border-[#EEEEEE] px-4 py-3 rounded-sm text-[11px] text-[#0A1015] font-medium shadow-sm">Launch workflow</div>
                        <span className="text-[10px] text-[#8A8F98]">Yes</span>
                        <div className="bg-white border border-[#EEEEEE] px-4 py-3 rounded-sm text-[11px] text-[#0A1015] font-medium shadow-sm">Ready to automate?</div>
                        <span className="text-[10px] text-[#8A8F98]">No</span>
                        <div className="bg-white border border-[#EEEEEE] px-4 py-3 rounded-sm text-[11px] text-[#0A1015] font-medium shadow-sm">Refine rules</div>
                      </div>
                    </div>
                  </div>

                  {/* Refractive Water Droplet */}
                  <WaterDroplet
                    size={120}
                    xKeyframes={[40, 160, 60, 140, 40]}
                    yKeyframes={[20, 200, 60, 240, 20]}
                    duration={14}
                    displacementScale={50}
                    className="top-16 left-1/4"
                  />
                </>
              )}
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              key={`${activeTabId}-content`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <p className="text-[13px] font-bold text-[#0A1015] uppercase tracking-widest mb-6">
                {activeTab.label}
              </p>
              <h3 className="text-[36px] md:text-[48px] leading-[1.1] font-normal tracking-tight text-[#0A1015] mb-8">
                {activeTab.heading}
              </h3>
              <p className="text-[16px] text-[#4A4F59] leading-[1.6] mb-12 max-w-[540px]">
                {activeTab.description}
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <Button variant="dark" className="px-10 h-14" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <Image 
                          src={`https://i.pravatar.cc/100?img=${i + 30}`} 
                          alt="User" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] font-medium text-[#8A8F98]">
                    Trusted by <span className="text-[#0A1015]">300+ clients</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* What You Build (Core Pillars) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="text-center max-w-[900px] mx-auto mb-10">
            <p className="text-[13px] font-semibold text-[#0A1015] tracking-widest uppercase mb-6">
              What You Build
            </p>
            <h3 className="text-[32px] md:text-[44px] leading-[1.08] font-normal tracking-[-0.03em] text-[#0A1015]">
              3 Core Pillars + Custom Build Layer
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#E9EEF2] rounded-[8px] p-7 shadow-[0_8px_24px_rgba(10,16,21,0.04)] hover:shadow-[0_14px_30px_rgba(10,16,21,0.10)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-[0.14em]">01</p>
                <div className="w-7 h-7 rounded-full bg-[#ECF5FF] border border-[#DCEBFF]" />
              </div>
              <h4 className="text-[22px] leading-[1.15] font-normal text-[#0A1015] tracking-tight mb-3">
                Marketing Systems
              </h4>
              <p className="text-[14px] leading-[1.6] text-[#4A4F59]">
                Automated lead generation, funnels, and campaigns.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#E9EEF2] rounded-[8px] p-7 shadow-[0_8px_24px_rgba(10,16,21,0.04)] hover:shadow-[0_14px_30px_rgba(10,16,21,0.10)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-[0.14em]">02</p>
                <div className="w-7 h-7 rounded-full bg-[#EEF8F4] border border-[#DCEFE6]" />
              </div>
              <h4 className="text-[22px] leading-[1.15] font-normal text-[#0A1015] tracking-tight mb-3">
                Operations Systems
              </h4>
              <p className="text-[14px] leading-[1.6] text-[#4A4F59]">
                Workflows, internal processes, and task automation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group bg-white border border-[#E9EEF2] rounded-[8px] p-7 shadow-[0_8px_24px_rgba(10,16,21,0.04)] hover:shadow-[0_14px_30px_rgba(10,16,21,0.10)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-[0.14em]">03</p>
                <div className="w-7 h-7 rounded-full bg-[#FFF5EC] border border-[#FFE7D0]" />
              </div>
              <h4 className="text-[22px] leading-[1.15] font-normal text-[#0A1015] tracking-tight mb-3">
                Sales Systems
              </h4>
              <p className="text-[14px] leading-[1.6] text-[#4A4F59]">
                CRM automation, follow-ups, and pipeline control.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden bg-[#0A1015] border border-[#1D242B] rounded-[8px] p-7 shadow-[0_10px_30px_rgba(10,16,21,0.22)]"
            >
              <div className="absolute -top-12 -right-8 w-28 h-28 rounded-full bg-[#0099FF]/20 blur-2xl" />
              <div className="relative flex items-center justify-between mb-5">
                <p className="text-[11px] font-bold text-[#8A8F98] uppercase tracking-[0.14em]">04</p>
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15" />
              </div>
              <h4 className="relative text-[22px] leading-[1.15] font-normal text-white tracking-tight mb-3">
                Apps + Websites + Custom CRM
              </h4>
              <p className="relative text-[14px] leading-[1.6] text-[#CECFD0]">
                Custom software layers that automate work end-to-end.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
