import { ContactHero } from "@/components/contact/ContactHero"
import { WhoThisIsFor } from "@/components/contact/WhoThisIsFor"
import { WhatHappensNext } from "@/components/contact/WhatHappensNext"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

const CONTACT_FAQS = [
  {
    question: "What happens after I submit the form?",
    answer:
      "We review the workflow you described and follow up to schedule an assessment.",
  },
  {
    question: "What should I prepare?",
    answer:
      "One painful workflow, the systems it touches, and who approves the result today.",
  },
  {
    question: "Do you work with teams in different regions?",
    answer:
      "Yes. We support distributed teams and can align implementation timelines around your operating timezone needs.",
  },
  {
    question: "Do you replace our ERP?",
    answer:
      "No. The assessment looks at how to connect the workflow to the systems you already run.",
  },
  {
    question: "Is there any commitment after the first call?",
    answer:
      "No. The first conversation is focused on clarity and fit, so you can decide the right next step with no pressure.",
  },
]

export const metadata = {
  title: "Book an AI Workflow Assessment",
  description:
    "Map one operational workflow for a distributor, manufacturer, or specialty contractor and leave with a recommended pilot.",
  keywords: [
    "AI workflow assessment",
    "industrial AI implementation",
    "distributor order automation",
    "Zyene contact",
  ],
  alternates: { canonical: "https://zyene.com/contact" },
  openGraph: {
    title: "Book an AI Workflow Assessment | Zyene",
    description:
      "Map one operational workflow and leave with a recommended pilot.",
    url: "https://zyene.com/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <WhatHappensNext />
        <WhoThisIsFor />
        <FAQ faqs={CONTACT_FAQS} aside={null} />
        <FooterCTA />
      </div>
    </>
  )
}
