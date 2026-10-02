import type { Metadata } from "next"
import Script from "next/script"
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero"
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid"
import { CASE_STUDIES } from "@/lib/case-studies"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "Industrial AI Workflow Examples",
  description:
    "Reference implementations for distribution, manufacturing, and specialty contractors. Demonstration using synthetic business data, not customer results.",
  keywords: [
    "distributor order automation example",
    "manufacturing RFQ automation",
    "contractor bid intake automation",
    "industrial AI workflow examples",
  ],
  alternates: { canonical: "https://zyene.com/case-studies" },
  openGraph: {
    title: "Example Workflows | Zyene",
    description:
      "Reference implementations using synthetic business data. Not published customer results.",
    url: "https://zyene.com/case-studies",
    type: "website",
  },
}

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://zyene.com/case-studies",
  name: "Zyene example workflows",
  description:
    "Reference implementations using synthetic business data for distribution, manufacturing, and specialty contractors.",
  url: "https://zyene.com/case-studies",
  isPartOf: { "@id": "https://zyene.com/#website" },
  about: { "@id": "https://zyene.com/#organization" },
  hasPart: CASE_STUDIES.map((study) => ({
    "@type": "Article",
    headline: study.title,
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
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <CaseStudiesGrid />
        <FooterCTA />
      </div>
    </>
  )
}
