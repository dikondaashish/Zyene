"use client"

import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { SolutionLayers } from "@/components/solutions/SolutionLayers"
import { ArchitectureSnapshot } from "@/components/solutions/ArchitectureSnapshot"
import { UseCaseLayerMapping } from "@/components/solutions/UseCaseLayerMapping"
import { ExecutionTeam } from "@/components/solutions/ExecutionTeam"
import { DeliverySteps } from "@/components/solutions/DeliverySteps"
import { WeeklyOutputs } from "@/components/solutions/WeeklyOutputs"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

const SOLUTIONS_FAQS = [
  {
    question: "Do we need to replace our current tools?",
    answer: "No. We connect with your current stack and make it work better together.",
  },
  {
    question: "Will your team also execute the work?",
    answer: "Yes. Our team works like an extension of your team and handles execution with you.",
  },
  {
    question: "How quickly can we launch?",
    answer: "Most teams can start quickly, with first workflows live in around 1-2 weeks.",
  },
  {
    question: "Can we monitor everything clearly?",
    answer: "Yes. You get monitoring and reporting so you always know what is happening.",
  },
]

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <SolutionLayers />
        <ArchitectureSnapshot />
        <UseCaseLayerMapping />
        <DeliverySteps />
        <ExecutionTeam />
        <WeeklyOutputs />
        <FAQ faqs={SOLUTIONS_FAQS} sectionClassName="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden" />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
