"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

type CareerFaqItem = {
  q: string
  a: string
}

type CareerFaqAccordionProps = {
  items: CareerFaqItem[]
}

export function CareerFaqAccordion({ items }: CareerFaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="bg-white px-6 pb-4 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[980px]">
        <div className="relative overflow-hidden rounded-[14px] border border-[#E2E8EF] bg-gradient-to-br from-[#F8FAFD] via-[#F3F8FC] to-[#EEF6FF] p-6 md:p-8 shadow-[0_14px_30px_rgba(10,16,21,0.08)]">
          <div className="pointer-events-none absolute -top-12 -right-10 h-36 w-36 rounded-full bg-[#0099FF]/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-[#0A1015]/5 blur-2xl" />

          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">
            Career FAQ
          </p>
          <h3 className="mb-6 text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.02em] text-[#0A1015]">
            Quick answers before you apply
          </h3>

          <div className="relative flex flex-col rounded-[10px] border border-[#DCE3EA] bg-white/95 backdrop-blur-[1px] px-4 md:px-6">
            {items.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.q}
                  className="border-b last:border-b-0"
                  style={{ borderColor: isOpen ? "#D5DEE8" : "#E9EEF4" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 flex items-center justify-between gap-6 text-left"
                  >
                    <p className={`text-[16px] font-semibold transition-colors ${isOpen ? "text-[#0A1015]" : "text-[#3A3F46]"}`}>
                      {item.q}
                    </p>
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <motion.div
                        animate={{ rotate: isOpen ? -135 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-[14px] h-[14px]"
                      >
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] rounded-[10px] -translate-y-1/2 bg-[#0A1015]" />
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] rounded-[10px] -translate-x-1/2 bg-[#0A1015]" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[14px] leading-[1.65] text-[#4A4F59] max-w-[760px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
