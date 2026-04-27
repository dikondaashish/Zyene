import type { Metadata } from "next"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutMission } from "@/components/about/AboutMission"
import { AboutExecutionModel } from "@/components/about/AboutExecutionModel"
import { AboutGlobalOperations } from "@/components/about/AboutGlobalOperations"
import { Hiring } from "@/components/about/Hiring"
import { RealNumbers } from "@/components/use-cases/RealNumbers"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "About Zyene | AI-Powered Digital Transformation Execution Company",
  description:
    "Zyene is an AI-powered digital transformation execution company helping founders, operators, and growth teams transform how their businesses run. We build AI systems with full execution support and measurable outcomes.",
  keywords: [
    "about Zyene",
    "AI digital transformation company",
    "AI-powered transformation",
    "digital transformation execution",
    "AI business transformation company",
    "operational AI",
  ],
  alternates: { canonical: "https://zyene.com/about" },
  openGraph: {
    title: "About Zyene | AI-Powered Digital Transformation Execution Company",
    description:
      "Zyene helps founders, operators, and growth teams transform how their businesses run with AI systems and full execution support.",
    url: "https://zyene.com/about",
    type: "website",
  },
}

const ABOUT_FAQS = [
  {
    question: "What is Zyene's core mission?",
    answer:
      "Our mission is to help modern businesses scale with intelligent systems that improve execution quality, speed, and consistency.",
  },
  {
    question: "What kind of teams do you work with?",
    answer:
      "We work with founders, operators, and growth teams that want structured systems across marketing, operations, and sales.",
  },
  {
    question: "What makes Zyene different from typical agencies?",
    answer:
      "Zyene focuses on building reusable operating systems and measurable process outcomes, not one-off campaigns or disconnected tasks.",
  },
  {
    question: "Do you support long-term optimization after launch?",
    answer:
      "Yes. We continuously review system performance and improve workflows using real usage data and team feedback.",
  },
  {
    question: "How can we start working with Zyene?",
    answer:
      "You can book a strategy call through the contact page and we will map your current bottlenecks with a clear action plan.",
  },
]

export default function About() {
  return (
    <>
      <AboutHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <AboutMission />
        <RealNumbers variant="aboutTrustedOutcomes" />
        <AboutExecutionModel />
        <AboutGlobalOperations />
        <FAQ faqs={ABOUT_FAQS} sectionClassName="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden" />
        <Hiring />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
