import type { Metadata } from "next"
import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { DeliverySteps } from "@/components/solutions/DeliverySteps"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "How We Implement Industrial AI",
  description:
    "How Zyene implements industrial AI: discover, design, build, integrate, validate, then deploy and improve. People stay on the approval step.",
  alternates: { canonical: "https://zyene.com/how-we-work" },
}

const faqs = [
  {
    question: "Do you claim AI solves everything?",
    answer:
      "No. Design decides what AI should do, what existing software should do, and what should remain human.",
  },
  {
    question: "Are you tied to one model?",
    answer: "No. OpenAI, Anthropic, Google, and Microsoft are options. We pick for the problem.",
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <SolutionsHero
        headingLines={["How the work", "actually gets built."]}
        eyebrow="How we work"
        description="Six steps from the workflow you have today to a measured deployment. Not a demo, and not a promise that AI replaces your people."
        imageAlt="How Zyene works"
        image="/images/industrial/hero-how-we-work.jpg"
      />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <DeliverySteps />
        <FAQ faqs={faqs} />
        <FooterCTA />
      </div>
    </>
  )
}
