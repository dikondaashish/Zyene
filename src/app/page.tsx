import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { PlatformStrip } from "@/components/home/PlatformStrip"
import { Features } from "@/components/home/Features"
import { Industries } from "@/components/home/Industries"
import { SolutionLayers } from "@/components/solutions/SolutionLayers"
import { AIAction } from "@/components/use-cases/AIAction"
import { DeliverySteps } from "@/components/solutions/DeliverySteps"
import { SecurityStrip } from "@/components/home/SecurityStrip"
import { Benefits } from "@/components/home/Benefits"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: { absolute: "AI Operations for Distributors & Manufacturers | Zyene" },
  description:
    "Zyene builds production AI for distributors, manufacturers, and specialty contractors. It reads purchase orders, RFQs, and bid documents, then prepares the next step in the ERP you already run.",
  keywords: [
    "AI operations for industrial businesses",
    "wholesale distribution automation",
    "manufacturing RFQ automation",
    "specialty contractor AI",
    "ERP document automation",
    "industrial AI implementation",
  ],
  alternates: { canonical: "https://zyene.com" },
  openGraph: {
    title: "AI Operations for Distributors & Manufacturers | Zyene",
    description:
      "Production AI systems for distributors, manufacturers, and specialty contractors, connected to the email, documents, and business software they already use.",
    url: "https://zyene.com",
    type: "website",
  },
}

const HOME_FAQS = [
  {
    question: "Who is Zyene for?",
    answer:
      "Wholesale distributors, SMB manufacturers, and specialty contractors that still move work by hand between email, documents, spreadsheets, and business systems.",
  },
  {
    question: "Do we need to replace our ERP or field software?",
    answer:
      "No. We connect to the systems you already use and prepare actions for your team.",
  },
  {
    question: "What does a first project look like?",
    answer:
      "An assessment maps one workflow, the repetitive steps, system access, and a metric. Then we recommend a pilot with a human approval step where it matters.",
  },
  {
    question: "Will the AI post orders or quotes on its own?",
    answer:
      "Only if you want that. Critical actions can require an employee to approve before anything is written to ERP, CRM, or a field system.",
  },
  {
    question: "What happens to our data?",
    answer:
      "Customer operational data is kept separated. A workflow receives only the access it needs. Important actions can be logged so a decision can be reviewed later.",
  },
]

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://zyene.com/#webpage",
      url: "https://zyene.com",
      name: "Zyene | AI Operations for Industrial Businesses",
      description:
        "Production AI systems for distributors, manufacturers, and specialty contractors.",
      isPartOf: { "@id": "https://zyene.com/#website" },
      about: { "@id": "https://zyene.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://zyene.com/#service",
      name: "AI Operations for Industrial Businesses",
      provider: { "@id": "https://zyene.com/#organization" },
      image: "https://zyene.com/images/og-image.jpg",
      telephone: "+1-415-409-9798",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 Geary St Ste 650 #1892",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94108",
        addressCountry: "US",
      },
      serviceType: "Industrial AI Implementation",
      description:
        "Zyene designs, builds, and integrates production AI systems for distributors, manufacturers, and specialty contractors.",
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://zyene.com/contact",
        serviceType: "Online",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial AI Operations",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Order and Quote Automation",
              description:
                "Read email and documents, validate against business systems, and prepare orders or quotes for approval.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Document Intelligence",
              description:
                "Turn POs, RFQs, invoices, drawings, and spreadsheets into structured business information.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP and CRM Integration",
              description:
                "Connect AI workflows to the ERP, CRM, and field systems a company already uses.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <PlatformStrip />
        <Features />
        <Industries ctaLabel="Explore Distribution AI" ctaHref="/industries/wholesale-distribution" />
        <SolutionLayers />
        <AIAction />
        <DeliverySteps />
        <Benefits />
        <SecurityStrip />
        <FAQ faqs={HOME_FAQS} />
        <FooterCTA />
      </div>
    </>
  )
}
