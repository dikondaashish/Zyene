import type { Metadata } from "next"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutMission } from "@/components/about/AboutMission"
import { AboutExecutionModel } from "@/components/about/AboutExecutionModel"
import { AboutGlobalOperations } from "@/components/about/AboutGlobalOperations"
import { Hiring } from "@/components/about/Hiring"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: { absolute: "About Zyene | Applied AI for Industrial Operations" },
  description:
    "Zyene is an applied AI engineering company focused on industrial operations for distributors, manufacturers, and specialty contractors.",
  keywords: ["about Zyene", "applied AI for industrial operations", "industrial AI company", "operational AI"],
  alternates: { canonical: "https://zyene.com/about" },
  openGraph: {
    title: "About Zyene | Applied AI for Industrial Operations",
    description:
      "An applied AI engineering company for distributors, manufacturers, and specialty contractors.",
    url: "https://zyene.com/about",
    type: "website",
  },
}

const ABOUT_FAQS = [
  {
    question: "What is Zyene's mission?",
    answer:
      "Industrial companies already bought ERP, CRM, and field systems. We build the intelligence layer that connects email, documents, and those systems.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Wholesale distributors, SMB manufacturers, and specialty contractors such as HVAC, electrical, mechanical, plumbing, fire protection, and roofing firms.",
  },
  {
    question: "Are you an AI consulting company?",
    answer:
      "No. We are an applied AI engineering company: we design, build, and integrate production systems. Advice without a working workflow is not what we sell.",
  },
  {
    question: "Do you stay after launch?",
    answer:
      "Yes. Deployment includes monitoring, the agreed metric, employee feedback, and improvement from real use.",
  },
  {
    question: "How do we start?",
    answer:
      "Book an AI workflow assessment. We map one workflow and recommend a pilot. There is no commitment after the first conversation.",
  },
]

export default function About() {
  return (
    <>
      <AboutHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <AboutMission />
        <AboutExecutionModel />
        <AboutGlobalOperations />
        <FAQ faqs={ABOUT_FAQS} />
        <Hiring />
        <FooterCTA />
      </div>
    </>
  )
}
