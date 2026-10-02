import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: { absolute: "Zyene Reviews & Zentraic AI | Products from Zyene" },
  description:
    "Internal tools we opened as SaaS. Zyene Reviews handles post-service reviews. Zentraic AI handles calls and writes the outcome to your CRM. Separate from Zyene’s industrial operations work.",
  keywords: [
    "Zyene Reviews",
    "Zentraic AI",
    "post-service review software",
    "voice AI for CRM",
    "review follow-up after a job",
  ],
  alternates: { canonical: "https://zyene.com/products" },
  openGraph: {
    title: "Zyene Reviews & Zentraic AI | Products from Zyene",
    description:
      "Internal tools made public: review follow-up and voice AI, beside Zyene’s industrial operations work.",
    url: "https://zyene.com/products",
    type: "website",
  },
}

const productsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://zyene.com/products#zyene-reviews",
      name: "Zyene Reviews",
      url: "https://zyenereviews.com",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI-powered reputation management. Built as an internal tool for post-service feedback, now available at zyenereviews.com.",
      provider: { "@id": "https://zyene.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://zyene.com/products#zentraic-ai",
      name: "Zentraic AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Voice AI for inbound and outbound calls, built as an internal tool and opened as a product. Qualifies conversations and writes the outcome to the CRM.",
      provider: { "@id": "https://zyene.com/#organization" },
    },
  ],
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      {children}
    </>
  )
}
