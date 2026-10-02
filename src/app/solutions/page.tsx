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
    question: "Do we need to replace our ERP?",
    answer: "No. These solutions sit on the systems you already run.",
  },
  {
    question: "Are the system names official partnerships?",
    answer: "No. They are integration capabilities. We do not imply a partnership we do not have.",
  },
  {
    question: "Does every action post automatically?",
    answer: "No. Orders, quotes, and other critical writes can require an employee approval.",
  },
  {
    question: "Where do we start?",
    answer: "With an assessment that maps one workflow and recommends a pilot.",
  },
]

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <SolutionLayers />
        <ArchitectureSnapshot />
        <UseCaseLayerMapping />
        <DeliverySteps />
        <ExecutionTeam />
        <WeeklyOutputs />
        <FAQ faqs={SOLUTIONS_FAQS} />
        <FooterCTA />
      </div>
    </>
  )
}
