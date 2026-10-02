"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Plus } from "lucide-react"
import { SITE_DATA } from "@/lib/constants"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

type FAQAside = {
  title: string
  body: string
  linkLabel: string
  href: string
}

type FAQProps = {
  label?: string
  headingText?: string
  faqs?: FAQItem[]
  aside?: FAQAside | null
}

const DEFAULT_ASIDE: FAQAside = {
  title: "Have a workflow in mind?",
  body: "Bring one process. We will map it with you and size the opportunity.",
  linkLabel: "Talk to an engineer",
  href: "/contact",
}

export function FAQ({
  label,
  headingText = "Frequently asked questions",
  faqs = SITE_DATA.faqs,
  aside = DEFAULT_ASIDE,
}: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)
  const baseId = React.useId()

  return (
    <section className="bg-white">
      <div className="zy-container zy-section grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          {label ? (
            <Reveal className="mb-6">
              <span className="zy-kicker">{label}</span>
            </Reveal>
          ) : null}
          <RevealText text={headingText} className="zy-display text-[clamp(34px,4.4vw,60px)] text-[#0A1015]" />
          {aside ? (
            <Reveal delay={0.1} className="mt-10 hidden rounded-[24px] border border-line bg-paper p-7 lg:block">
              <p className="text-[16px] font-medium text-[#0A1015]">{aside.title}</p>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#4B525C]">{aside.body}</p>
              <Link
                href={aside.href}
                className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
              >
                {aside.linkLabel} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ) : null}
        </div>

        <div className="border-t border-[#0A1015]/12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`
            return (
              <Reveal key={faq.question} delay={index * 0.04} className="border-b border-[#0A1015]/12">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className={cn(
                        "text-[19px] font-medium leading-[1.35] tracking-[-0.015em] transition-colors duration-300 md:text-[21px]",
                        isOpen ? "text-[#0A1015]" : "text-[#0A1015]/70 group-hover:text-[#0A1015]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out-expo",
                        isOpen
                          ? "rotate-45 border-[#0A1015] bg-[#0A1015] text-white"
                          : "border-[#0A1015]/15 text-[#0A1015] group-hover:border-[#0A1015]/40"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pb-8 pr-14 text-[16px] leading-[1.65] text-[#4B525C]">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
