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
      "Most use case implementations can start quickly, with first workflows typically launched in 1-2 weeks based on complexity.",
  },
  {
    question: "Will this work with our existing stack?",
    answer:
      "Yes. Zyene integrates with common business systems and keeps your current stack in place while improving execution flow.",
  },
  {
    question: "What outcomes should we expect first?",
    answer:
      "Teams usually see faster turnaround time, lower manual workload, and more consistent execution visibility across departments.",
  },
]

export default function UseCases() {
  return (
    <>
      <UseCasesHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <UseCasesList />
        <AIAction />
        <Industries ctaLabel="Book a Strategy Call" ctaHref="/contact" />
        <RealNumbers />
        <Calculator />
        <FAQ faqs={USE_CASES_FAQS} sectionClassName="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden" />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
