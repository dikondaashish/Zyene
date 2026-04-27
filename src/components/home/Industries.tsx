"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SITE_DATA } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import {
  Building2,
  Truck,
  Heart,
  GraduationCap,
  ShoppingBag,
  Scale,
  Home,
  Monitor,
} from "lucide-react"

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  Finance: Building2,
  Logistics: Truck,
  Healthcare: Heart,
  Education: GraduationCap,
  "E-commerce": ShoppingBag,
  Legal: Scale,
  "Real Estate": Home,
  SaaS: Monitor,
}

// Pyramid layout: rows of tags that "fall" from top
const PYRAMID_ROWS = [
  ["Finance"],
  ["Logistics", "Healthcare"],
  ["Education", "E-commerce"],
  ["Legal", "Real Estate", "SaaS"],
]
const INDUSTRY_DETAIL_ORDER = [
  "Finance",
  "Logistics",
  "Healthcare",
  "Education",
  "E-commerce",
  "Legal",
  "Real Estate",
  "SaaS",
]

export function Industries({
  ctaLabel = "View use cases",
  ctaHref = "/use-cases",
}: {
  ctaLabel?: string
  ctaHref?: string
} = {}) {
  const [activeId, setActiveId] = React.useState<string>("Finance")
  const activeIndustry = SITE_DATA.industries.find(
    (ind) => ind.name === activeId
  ) || SITE_DATA.industries[0]

  return (
    <section id="industries" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Falling Industry Tags Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[4px] border border-[#EEEEEE] overflow-hidden bg-[#F7F8FA] aspect-square flex flex-col justify-end p-6"
          >
            {/* Warm gradient background */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,248,250,0) 0%, rgba(255,200,170,0.5) 60%, rgba(200,210,240,0.3) 100%)",
              }}
            />

            {/* Falling tags in pyramid layout */}
            <div className="relative z-10 flex flex-col items-center gap-3 mt-auto">
              {PYRAMID_ROWS.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex items-center justify-center gap-3"
                >
                  {row.map((name, colIndex) => {
                    const Icon = INDUSTRY_ICONS[name] || Building2
                    const delay = rowIndex * 0.15 + colIndex * 0.08

                    return (
                      <motion.button
                        key={name}
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 0.6,
                          delay,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        onClick={() => setActiveId(name)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-[4px] text-[12px] font-medium transition-all duration-300 shadow-sm whitespace-nowrap ${
                          activeId === name
                            ? "bg-[#0A1015] text-white shadow-xl"
                            : "bg-white text-[#4A4F59] border border-[#EEEEEE] hover:border-[#CCCCCC]"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {name}
                      </motion.button>
                    )
                  })}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Heading + Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="text-[14px] font-bold text-[#0A1015] uppercase tracking-widest mb-6">
              Industries
            </p>
            <h2 className="text-[38px] md:text-[52px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] mb-12">
              Built for the real world. Across every industry.
            </h2>

            {/* Accordion List */}
            <div className="flex flex-col">
              {SITE_DATA.industries
                .filter((ind) => INDUSTRY_DETAIL_ORDER.includes(ind.name))
                .sort(
                  (a, b) =>
                    INDUSTRY_DETAIL_ORDER.indexOf(a.name) - INDUSTRY_DETAIL_ORDER.indexOf(b.name)
                )
                .map((ind) => {
                const isOpen = activeId === ind.name
                return (
                  <div
                    key={ind.name}
                    className="border-b border-[#EEEEEE]"
                  >
                    <button
                      onClick={() =>
                        setActiveId(isOpen ? "" : ind.name)
                      }
                      className="w-full flex items-center justify-between py-5 text-left group"
                    >
                      <span
                        className={`text-[17px] font-medium transition-colors duration-200 ${
                          isOpen
                            ? "text-[#0A1015]"
                            : "text-[#4A4F59] group-hover:text-[#0A1015]"
                        }`}
                      >
                        {ind.name}
                      </span>
                      <span
                        className={`text-[20px] leading-none transition-transform duration-300 ${
                          isOpen
                            ? "rotate-45 text-[#0A1015]"
                            : "text-[#8A8F98]"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-[15px] text-[#4A4F59] leading-[1.6] pb-6 max-w-[460px]">
                            {ind.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Button variant="dark" asChild className="px-10 h-14 text-base">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
