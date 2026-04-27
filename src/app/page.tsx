import type { Metadata } from "next"
import Script from "next/script"
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

export const metadata: Metadata = {
  title: "Zyene | AI-Powered Digital Transformation Execution Company",
  description:
    "Zyene is an AI-powered digital transformation execution company. We design and deploy AI systems that transform how you run marketing, sales, and operations — with full execution support. Launch in 1–2 weeks.",
  keywords: [
    "AI-powered digital transformation",
    "digital transformation execution company",
    "AI digital transformation company",
    "AI systems for business",
    "business transformation AI",
    "AI execution company",
    "marketing transformation AI",
    "operations transformation AI",
  ],
  alternates: { canonical: "https://zyene.com" },
  openGraph: {
    title: "Zyene | AI-Powered Digital Transformation Execution Company",
    description:
      "Zyene designs and deploys AI systems that transform how businesses run marketing, sales, and operations — with full execution support and measurable outcomes.",
    url: "https://zyene.com",
    type: "website",
  },
}

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

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://zyene.com/#webpage",
      url: "https://zyene.com",
      name: "Zyene | AI-Powered Digital Transformation Execution Company",
      description:
        "Zyene designs and deploys AI systems that transform how businesses run marketing, sales, and operations — with full execution support and measurable outcomes.",
      isPartOf: { "@id": "https://zyene.com/#website" },
      about: { "@id": "https://zyene.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://zyene.com/#service",
      name: "AI-Powered Digital Transformation",
      provider: { "@id": "https://zyene.com/#organization" },
      serviceType: "Digital Transformation Execution",
      description:
        "Zyene designs and deploys AI systems that transform marketing, sales, and operations workflows for growing businesses. Includes system design, integration, execution support, and reporting.",
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://zyene.com/contact",
        serviceType: "Online",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Transformation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marketing Automation Systems",
              description:
                "AI-powered marketing workflow automation connecting CRM, email, and campaigns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Operations Automation Systems",
              description:
                "AI systems automating repetitive operations tasks with full reporting and control.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sales Workflow Automation",
              description:
                "AI-driven sales process automation including lead follow-up, CRM sync, and pipeline reporting.",
            },
          },
        ],
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
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
