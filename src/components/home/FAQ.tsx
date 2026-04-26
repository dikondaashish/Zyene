"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SITE_DATA } from "@/lib/constants"

const textRevealVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    }
  })
}

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  label?: string
  headingText?: string
  faqs?: FAQItem[]
  sectionClassName?: string
}

export function FAQ({
  label = "FAQ",
  headingText = "Frequently asked questions",
  faqs = SITE_DATA.faqs,
  sectionClassName = "py-32 px-6 bg-white overflow-hidden",
}: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)
  const headingWords = headingText.split(" ")

  return (
    <section className={sectionClassName}>
      <div className="max-w-[800px] mx-auto">
        {/* Title Wrapper - Centered */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14px] font-bold text-[#0A1015] tracking-[0.2em] uppercase mb-8"
          >
            {label}
          </motion.p>
          <h2 className="text-[44px] md:text-[64px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015]">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textRevealVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-b transition-all duration-300"
                style={{
                  borderColor: isOpen ? '#0A1015' : '#EEEEEE',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                >
                  <h4 className={`text-[18px] font-bold pr-8 tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#0A1015]' : 'text-[#B0B3B8]'}`}>
                    {faq.question}
                  </h4>

                  {/* Plus/X Icon - Two perpendicular bars */}
                  <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: isOpen ? -135 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-[14px] h-[14px]"
                    >
                      {/* Horizontal bar */}
                      <div
                        className="absolute top-1/2 left-0 right-0 h-[2px] rounded-[10px] -translate-y-1/2"
                        style={{ backgroundColor: isOpen ? '#101010' : '#0A1015' }}
                      />
                      {/* Vertical bar */}
                      <div
                        className="absolute left-1/2 top-0 bottom-0 w-[2px] rounded-[10px] -translate-x-1/2"
                        style={{ backgroundColor: isOpen ? '#101010' : '#0A1015' }}
                      />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[15px] text-[#3D4145] leading-[1.6] max-w-[600px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
