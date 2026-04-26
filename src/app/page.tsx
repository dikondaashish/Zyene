import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/Features"
import { Process } from "@/components/home/Process"
import { Products } from "@/components/home/Products"
import { OrbitalDemo } from "@/components/home/OrbitalDemo"
import { Calculator } from "@/components/home/Calculator"
import { HowItWorks } from "@/components/home/HowItWorks"
import { Industries } from "@/components/home/Industries"
import { Benefits } from "@/components/home/Benefits"
import { Comparison } from "@/components/home/Comparison"
import { Testimonials } from "@/components/home/Testimonials"
import { RealNumbers } from "@/components/use-cases/RealNumbers"
import { WhoItsFor } from "@/components/home/WhoItsFor"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

const HOME_FAQS = [
  {
    question: "What exactly does Zyene build?",
    answer:
      "Zyene designs and deploys AI systems that connect your marketing, sales, and operations workflows into one execution layer with clear reporting and control.",
  },
  {
    question: "How quickly can we launch our first workflow?",
    answer:
      "Most teams can launch their first automation in 1-2 weeks, depending on workflow complexity, tool access, and approval speed.",
  },
  {
    question: "Do we need to replace our current tools?",
    answer:
      "No. Zyene works with your existing stack and integrates with tools like CRM, communication, and operations platforms.",
  },
  {
    question: "Do you also provide team support?",
    answer:
      "Yes. Along with systems, Zyene can provide execution support so your team can operate faster without adding heavy overhead.",
  },
  {
    question: "How do we measure results?",
    answer:
      "We define clear performance metrics upfront and track outcomes like cycle time, response speed, and efficiency gains across workflows.",
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      {/* Content scrolls over sticky Hero — creating the card-reveal effect */}
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <Features />
        <Process />
        <HowItWorks />
        <OrbitalDemo />
        <Calculator />
        <Products />
        <Industries />
        <Benefits />
        <Comparison />
        <Testimonials />
        <RealNumbers />
        <WhoItsFor />
        <FAQ faqs={HOME_FAQS} sectionClassName="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden" />
        <FooterCTA />
      </div>
    </>
  )
}
