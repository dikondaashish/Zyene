import { ContactHero } from "@/components/contact/ContactHero"
import { ContactGlobalReach } from "@/components/contact/ContactGlobalReach"
import { StrategyCallWidget } from "@/components/contact/StrategyCallWidget"
import { WhoThisIsFor } from "@/components/contact/WhoThisIsFor"
import { WhatHappensNext } from "@/components/contact/WhatHappensNext"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

const CONTACT_FAQS = [
  {
    question: "What happens after I submit the contact form?",
    answer:
      "Our team reviews your details, then reaches out with next steps to schedule a strategy conversation and assess fit.",
  },
  {
    question: "What should I prepare before the strategy call?",
    answer:
      "Bring context on your current workflows, bottlenecks, tools in use, and goals so we can recommend a practical action plan.",
  },
  {
    question: "Do you work with teams in different regions?",
    answer:
      "Yes. We support distributed teams and can align implementation timelines around your operating timezone needs.",
  },
  {
    question: "Can Zyene support both systems and execution?",
    answer:
      "Yes. We can help design and deploy systems while also supporting execution so your team can move faster with less overhead.",
  },
  {
    question: "Is there any commitment after the first call?",
    answer:
      "No. The first conversation is focused on clarity and fit, so you can decide the right next step with no pressure.",
  },
]

export const metadata = {
  title: "Contact Zyene | Start Your Digital Transformation",
  description:
    "Ready to transform your business with AI? Contact Zyene to book a free strategy call. We'll map your workflows, identify transformation opportunities, and deliver a clear action plan.",
  keywords: [
    "contact digital transformation company",
    "book AI transformation call",
    "digital transformation consultation",
    "Zyene contact",
    "AI transformation strategy call",
  ],
  alternates: { canonical: "https://zyene.com/contact" },
  openGraph: {
    title: "Contact Zyene | Start Your Digital Transformation",
    description:
      "Book a free strategy call with Zyene. We'll map your workflows, identify AI transformation opportunities, and deliver a clear action plan.",
    url: "https://zyene.com/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <ContactGlobalReach />
        <WhoThisIsFor />
        <StrategyCallWidget />
        <WhatHappensNext />
        <FAQ faqs={CONTACT_FAQS} sectionClassName="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden" />
        <FooterCTA />
      </div>
    </>
  )
}
