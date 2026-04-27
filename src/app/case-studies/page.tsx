import type { Metadata } from "next"
import Script from "next/script"
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero"
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid"
import { CASE_STUDIES } from "@/lib/case-studies"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "Case Studies | AI Digital Transformation Results — Zyene",
  description:
    "See how businesses use Zyene's AI systems and execution support to automate workflows, reduce manual overhead, and deliver measurable digital transformation outcomes across marketing, sales, and operations.",
  keywords: [
    "digital transformation case studies",
    "AI transformation results",
    "AI automation case study",
    "CRM automation results",
    "voice AI case study",
    "Zyene client results",
    "digital transformation ROI",
    "AI workflow automation examples",
  ],
  alternates: { canonical: "https://zyene.com/case-studies" },
  openGraph: {
    title: "Case Studies | AI Digital Transformation Results — Zyene",
    description:
      "Real outcomes from businesses that replaced manual execution with Zyene's AI-powered workflows. 3× ROI, 68% faster CRM updates, and more.",
    url: "https://zyene.com/case-studies",
    type: "website",
  },
}

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://zyene.com/case-studies",
  name: "Zyene Case Studies — AI Digital Transformation Results",
  description:
    "Real-world outcomes from businesses that used Zyene's AI systems and execution support to transform marketing, sales, and operations workflows.",
  url: "https://zyene.com/case-studies",
  isPartOf: { "@id": "https://zyene.com/#website" },
  about: { "@id": "https://zyene.com/#organization" },
  hasPart: CASE_STUDIES.map((study) => ({
    "@type": "Article",
    headline: `${study.company} — ${study.industry} Digital Transformation with Zyene`,
    description: study.challenge,
    author: { "@id": "https://zyene.com/#organization" },
  })),
}

export default function CaseStudiesPage() {
  return (
    <>
      <Script
        id="case-studies-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />
      <CaseStudiesHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <CaseStudiesGrid />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
