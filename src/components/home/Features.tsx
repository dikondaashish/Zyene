"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

const STEPS = [
  {
    title: "The work still moves by hand",
    body: "A customer email, PDF, purchase order, or RFQ arrives. Someone reads it, retypes it into the ERP or CRM, updates a spreadsheet, and sends the reply. That is the work we automate.",
    image: "/images/industrial/sol-documents.jpg",
    alt: "Stacks of paper files waiting to be keyed in",
    tags: ["Email", "PDF", "Excel", "RFQ", "PO"],
  },
  {
    title: "The gap is between people and systems",
    body: "Integration complexity and unclear payoff are why these projects stall. We start with one workflow, connect the software you already use, and keep a person on the approval step.",
    image: "/images/industrial/sol-workflow-agents.jpg",
    alt: "Operations analyst reviewing a spreadsheet at his desk",
    tags: ["ERP", "CRM", "Spreadsheets", "Inbox"],
  },
  {
    title: "With Zyene, the document becomes the starting point",
    body: "Email or a document comes in. AI understands it, checks your business systems, and prepares the action. A person approves when necessary. Then the ERP, CRM, or field system is updated.",
    image: "/images/industrial/sol-human-approval.jpg",
    alt: "Warehouse employee checking an order on a laptop and phone",
    tags: ["Read", "Check", "Prepare", "Approve"],
  },
]

function Step({
  index,
  step,
  onActive,
  active,
}: {
  index: number
  step: (typeof STEPS)[number]
  onActive: (i: number) => void
  active: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" })
  React.useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <div ref={ref} className="flex min-h-[auto] flex-col justify-center py-10 lg:min-h-[78vh] lg:py-0">
      <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-[24px] lg:hidden">
        <Image src={step.image} alt={step.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div
        className={cn(
          "transition-opacity duration-700 ease-out-expo",
          active ? "lg:opacity-100" : "lg:opacity-30"
        )}
      >
        <p className="mb-6 font-mono text-[13px] text-muted">
          {String(index + 1).padStart(2, "0")} <span className="text-[#0A1015]/25">/ 03</span>
        </p>
        <h3 className="max-w-[520px] text-[30px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[40px]">
          {step.title}
        </h3>
        <p className="mt-6 max-w-[500px] text-[17px] leading-[1.65] text-[#4B525C]">{step.body}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] text-[#0A1015]/75"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Features() {
  const [active, setActive] = React.useState(0)
  const reduce = useReducedMotion()
  const onActive = React.useCallback((i: number) => setActive(i), [])

  return (
    <section className="relative bg-white">
      <div className="zy-container zy-section pb-0">
        <Reveal className="mb-6">
          <span className="zy-kicker">The problem</span>
        </Reveal>
        <RevealText
          text="Your business already has software. Your people are still doing too much manually."
          className="zy-display max-w-[1080px] text-[clamp(34px,5.2vw,72px)] text-[#0A1015]"
        />
      </div>

      <div className="zy-container grid gap-10 pb-[clamp(72px,9vw,140px)] pt-12 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24 lg:pt-24">
        <div className="relative hidden lg:block">
          <div className="sticky top-[12vh] h-[76vh] overflow-hidden rounded-[28px] bg-[#0A1015]">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={STEPS[active].image}
                  alt={STEPS[active].alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/70 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-center gap-2">
              {STEPS.map((s, i) => (
                <span
                  key={s.title}
                  className={cn(
                    "h-[3px] flex-1 rounded-full transition-colors duration-700",
                    i <= active ? "bg-white" : "bg-white/25"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          {STEPS.map((step, i) => (
            <Step key={step.title} index={i} step={step} onActive={onActive} active={active === i} />
          ))}
        </div>
      </div>
    </section>
  )
}
