"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SiGoogle, SiFacebook, SiApple, SiNetflix, SiAirbnb, SiTwitch } from "react-icons/si"
import { FaAmazon } from "react-icons/fa"

const brands = [
  { id: "google", name: "Google", Icon: SiGoogle },
  { id: "amazon", name: "Amazon", Icon: FaAmazon },
  { id: "facebook", name: "Facebook", Icon: SiFacebook },
  { id: "apple", name: "Apple", Icon: SiApple },
  { id: "netflix", name: "Netflix", Icon: SiNetflix },
  { id: "airbnb", name: "Airbnb", Icon: SiAirbnb },
  { id: "twitch", name: "Twitch", Icon: SiTwitch },
]

export function Products() {
  const [hoveredCard1, setHoveredCard1] = useState<string | null>(null)
  const [hoveredCard2, setHoveredCard2] = useState<string | null>(null)
  const activeBrand1 = brands.find((b) => b.id === hoveredCard1)
  const activeBrand2 = brands.find((b) => b.id === hoveredCard2)

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
          <Link href="/products/zyene-reviews" className="group block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F7F8FA] rounded-[24px] overflow-hidden flex flex-col h-full border border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,16,21,0.06)] hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#EAECEF]">
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" 
                  alt="Zyene Reviews Interface" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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
                          {activeBrand1?.name ?? "leading companies"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2">
                    {brands.map(({ id, name, Icon }) => {
                      const isActive = hoveredCard1 === id
                      const isDimmed = hoveredCard1 !== null && !isActive
                      return (
                        <button
                          key={id}
                          aria-label={name}
                          className={[
                            "flex items-center justify-center p-2.5 rounded-lg border transition-all duration-200",
                            isActive
                              ? "border-[#0A1015]/30 text-[#0A1015] bg-[#0A1015]/5"
                              : "border-transparent text-[#0A1015]/35 hover:text-[#0A1015]/60",
                            isDimmed ? "opacity-40" : "",
                          ].join(" ")}
                          onMouseEnter={() => setHoveredCard1(id)}
                          onMouseLeave={() => setHoveredCard1(null)}
                        >
                          <Icon className="w-5 h-5" />
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
          <Link href="/products/zentraic-ai" className="group block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F7F8FA] rounded-[24px] overflow-hidden flex flex-col h-full border border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,16,21,0.06)] hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#EAECEF]">
                <Image 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop" 
                  alt="Zentraic AI Interface" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
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
                      leading companies
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
                          {activeBrand2?.name ?? "leading companies"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2">
                    {brands.map(({ id, name, Icon }) => {
                      const isActive = hoveredCard2 === id
                      const isDimmed = hoveredCard2 !== null && !isActive
                      return (
                        <button
                          key={id}
                          aria-label={name}
                          className={[
                            "flex items-center justify-center p-2.5 rounded-lg border transition-all duration-200",
                            isActive
                              ? "border-[#0A1015]/30 text-[#0A1015] bg-[#0A1015]/5"
                              : "border-transparent text-[#0A1015]/35 hover:text-[#0A1015]/60",
                            isDimmed ? "opacity-40" : "",
                          ].join(" ")}
                          onMouseEnter={() => setHoveredCard2(id)}
                          onMouseLeave={() => setHoveredCard2(null)}
                        >
                          <Icon className="w-5 h-5" />
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
