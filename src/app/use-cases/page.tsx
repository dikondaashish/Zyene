"use client"

import { UseCasesHero } from "@/components/use-cases/UseCasesHero"
import { Industries } from "@/components/home/Industries"
import { Calculator } from "@/components/home/Calculator"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

import { UseCasesList } from "@/components/use-cases/UseCasesList"

import { RealNumbers } from "@/components/use-cases/RealNumbers"

import { AIAction } from "@/components/use-cases/AIAction"

const USE_CASES_FAQS = [
  {
    question: "How do I choose the right use case to start with?",
    answer:
      "Start with the workflow that is repeated most often and causes the biggest delays, errors, or manual follow-up across your team.",
  },
  {
    question: "Can these playbooks be customized for our process?",
    answer:
      "Yes. Every use case can be tailored to your tools, decision rules, team handoffs, and reporting requirements.",
  },
  {
    question: "How long does implementation usually take?",
    answer:
      "It depends on the workflow and the systems involved. An assessment maps one workflow and recommends a pilot before any build starts.",
  },
  {
    question: "Will this work with our existing stack?",
    answer:
      "Yes. Zyene integrates with common business systems and keeps your current stack in place while improving execution flow.",
  },
  {
    question: "What outcomes should we expect first?",
    answer:
      "A working workflow on one process, with a metric agreed before the pilot. We do not publish results we have not measured on your work.",
  },
]

export default function UseCases() {
  return (
    <>
      <UseCasesHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <UseCasesList />
        <AIAction />
        <Industries ctaLabel="Book a Strategy Call" ctaHref="/contact" />
        <RealNumbers />
        <Calculator />
        <FAQ faqs={USE_CASES_FAQS} />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  )
}
