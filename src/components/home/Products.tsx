"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const reviewBrands = [
  { id: "dunkin", name: "Dunkin'", logo: "https://www.google.com/s2/favicons?domain=dunkindonuts.com&sz=64" },
  { id: "ups-store", name: "The UPS Store", logo: "https://www.google.com/s2/favicons?domain=theupsstore.com&sz=64" },
  { id: "jiffy-lube", name: "Jiffy Lube", logo: "https://www.google.com/s2/favicons?domain=jiffylube.com&sz=64" },
  { id: "supercuts", name: "Supercuts", logo: "https://www.google.com/s2/favicons?domain=supercuts.com&sz=64" },
  { id: "planet-fitness", name: "Planet Fitness", logo: "https://www.google.com/s2/favicons?domain=planetfitness.com&sz=64" },
  { id: "h-r-block", name: "H&R Block", logo: "https://www.google.com/s2/favicons?domain=hrblock.com&sz=64" },
  { id: "great-clips", name: "Great Clips", logo: "https://www.google.com/s2/favicons?domain=greatclips.com&sz=64" },
  { id: "jersey-mikes", name: "Jersey Mike's", logo: "https://www.google.com/s2/favicons?domain=jerseymikes.com&sz=64" },
]

const voiceBrands = [
  { id: "bayview-dental", name: "Bayview Dental Studio", logo: "https://www.google.com/s2/favicons?domain=bayviewdental.com&sz=64" },
  { id: "sunrise-insurance", name: "Sunrise Insurance Group", logo: "https://www.google.com/s2/favicons?domain=sunriseinsurancegroup.com&sz=64" },
  { id: "best-western", name: "Best Western", logo: "https://www.google.com/s2/favicons?domain=bestwestern.com&sz=64" },
  { id: "joint-chiro", name: "The Joint Chiropractic", logo: "https://www.google.com/s2/favicons?domain=thejoint.com&sz=64" },
  { id: "execucar", name: "ExecuCar", logo: "https://www.google.com/s2/favicons?domain=execucar.com&sz=64" },
  { id: "prime-pest", name: "Prime Pest Control", logo: "https://www.google.com/s2/favicons?domain=primepestcontrol.com&sz=64" },
  { id: "evergreen-plumbing", name: "Evergreen Plumbing Co.", logo: "https://www.google.com/s2/favicons?domain=evergreenplumbing.com&sz=64" },
  { id: "wilshire-law", name: "Wilshire Law Firm", logo: "https://www.google.com/s2/favicons?domain=wilshirelawfirm.com&sz=64" },
]

export function Products() {
  const [hoveredCard1, setHoveredCard1] = useState<string | null>(null)
  const [hoveredCard2, setHoveredCard2] = useState<string | null>(null)
  const activeBrand1 = reviewBrands.find((b) => b.id === hoveredCard1)
  const activeBrand2 = voiceBrands.find((b) => b.id === hoveredCard2)

  return (
    <section className="bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[12px] font-bold text-[#8A8F98] tracking-[0.2em] uppercase mb-4">
            Products
          </p>
          <h2 className="text-[36px] md:text-[54px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] font-display-serif">
            Proprietary AI Systems
          </h2>
          <p className="text-[16px] text-[#4A4F59] leading-[1.6] mt-6 max-w-[600px] mx-auto">
            This is where products live - separated from core homepage explanation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Zyene Reviews Card */}
          <Link href="/products#zyene-reviews" className="group block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F7F8FA] rounded-[24px] overflow-hidden flex flex-col h-full border border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,16,21,0.06)] hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-white">
                <Image 
                  src="/images/Zyene Reviews.png"
                  alt="Zyene Reviews Interface" 
                  fill 
                  className="object-contain p-8 md:p-10 transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#8A8F98] tracking-[0.12em] uppercase">
                    Product 01
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0A1015] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-[28px] md:text-[32px] leading-[1.2] font-normal tracking-[-0.02em] text-[#0A1015] mb-4 font-display-serif">
                  Zyene Reviews
                </h3>
                
                <p className="text-[16px] text-[#4A4F59] leading-[1.6]">
                  Automated review generation + management system.
                </p>

                <div className="mt-8 pt-6 border-t border-[#E5E8EC]">
                  <p className="text-[12px] font-semibold text-[#8A8F98] uppercase tracking-[0.12em] mb-1">
                    Trusted by
                  </p>
                  <div className="relative mb-4">
                    <p
                      aria-hidden
                      className="text-[18px] font-semibold text-[#0A1015] whitespace-nowrap opacity-0 pointer-events-none select-none"
                    >
                      leading companies
                    </p>
                    <div className="absolute inset-0 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={hoveredCard1 ?? "default-1"}
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -12, opacity: 0 }}
                          transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="text-[18px] font-semibold text-[#0A1015] whitespace-nowrap"
                        >
                          {activeBrand1?.name ?? "rising US businesses"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2">
                    {reviewBrands.map(({ id, name, logo }) => {
                      const isActive = hoveredCard1 === id
                      const isDimmed = hoveredCard1 !== null && !isActive
                      return (
                        <button
                          key={id}
                          aria-label={name}
                          className={[
                            "flex items-center justify-center p-2 rounded-lg border transition-all duration-200 bg-white",
                            isActive
                              ? "border-[#0A1015]/30 text-[#0A1015] bg-[#0A1015]/5"
                              : "border-[#E5E8EC] hover:border-[#CDD5DF]",
                            isDimmed ? "opacity-40" : "",
                          ].join(" ")}
                          onMouseEnter={() => setHoveredCard1(id)}
                          onMouseLeave={() => setHoveredCard1(null)}
                        >
                          <img src={logo} alt={name} className="w-5 h-5 object-contain" loading="lazy" />
                        </button>
                      )
                    })}
                    <span className="text-[13px] font-medium text-[#4A4F59] ml-1">more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Zentraic AI Card */}
          <Link href="/products#zentraic-ai" className="group block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F7F8FA] rounded-[24px] overflow-hidden flex flex-col h-full border border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,16,21,0.06)] hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0D5CC8] via-[#0A73D9] to-[#0A95F1]">
                <Image 
                  src="/images/zentraic-ai-logo.png"
                  alt="Zentraic AI Interface" 
                  fill 
                  className="object-contain p-8 md:p-10 transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#8A8F98] tracking-[0.12em] uppercase">
                    Product 02
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#0A1015] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-[28px] md:text-[32px] leading-[1.2] font-normal tracking-[-0.02em] text-[#0A1015] mb-4 font-display-serif">
                  Zentraic AI
                </h3>
                
                <p className="text-[16px] text-[#4A4F59] leading-[1.6]">
                  AI voice agent that handles calls + CRM updates.
                </p>

                <div className="mt-8 pt-6 border-t border-[#E5E8EC]">
                  <p className="text-[12px] font-semibold text-[#8A8F98] uppercase tracking-[0.12em] mb-1">
                    Trusted by
                  </p>
                  <div className="relative mb-4">
                    <p
                      aria-hidden
                      className="text-[18px] font-semibold text-[#0A1015] whitespace-nowrap opacity-0 pointer-events-none select-none"
                    >
                      call-first US businesses
                    </p>
                    <div className="absolute inset-0 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={hoveredCard2 ?? "default-2"}
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -12, opacity: 0 }}
                          transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="text-[18px] font-semibold text-[#0A1015] whitespace-nowrap"
                        >
                          {activeBrand2?.name ?? "call-first US businesses"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2">
                    {voiceBrands.map(({ id, name, logo }) => {
                      const isActive = hoveredCard2 === id
                      const isDimmed = hoveredCard2 !== null && !isActive
                      return (
                        <button
                          key={id}
                          aria-label={name}
                          className={[
                            "flex items-center justify-center p-2 rounded-lg border transition-all duration-200 bg-white",
                            isActive
                              ? "border-[#0A1015]/30 text-[#0A1015] bg-[#0A1015]/5"
                              : "border-[#E5E8EC] hover:border-[#CDD5DF]",
                            isDimmed ? "opacity-40" : "",
                          ].join(" ")}
                          onMouseEnter={() => setHoveredCard2(id)}
                          onMouseLeave={() => setHoveredCard2(null)}
                        >
                          <img src={logo} alt={name} className="w-5 h-5 object-contain" loading="lazy" />
                        </button>
                      )
                    })}
                    <span className="text-[13px] font-medium text-[#4A4F59] ml-1">more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
