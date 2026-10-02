import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: { absolute: "Zyene Reviews & Zentraic AI | Reputation and Voice Software" },
  description:
    "Zyene Reviews monitors reviews and drafts replies. Zentraic AI handles inbound and outbound calls, qualifies leads, and writes the outcome back to your CRM.",
  keywords: [
    "Zyene Reviews",
    "Zentraic AI",
    "AI review management software",
    "voice AI for business",
    "AI voice agent",
    "reputation management AI",
    "AI call handling",
    "CRM automation AI",
    "AI digital transformation products",
  ],
  alternates: { canonical: "https://zyene.com/products" },
  openGraph: {
    title: "Zyene Reviews & Zentraic AI | Reputation and Voice Software",
    description:
      "Zyene Reviews monitors reviews and drafts replies. Zentraic AI handles calls and writes the outcome back to your CRM.",
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
        "AI-powered reputation management for local businesses. Monitor reviews across platforms, generate AI-assisted replies, and grow your review count automatically.",
      provider: { "@id": "https://zyene.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://zyene.com/products#zentraic-ai",
      name: "Zentraic AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Voice AI for business operations. Handles inbound and outbound calls, qualifies leads, routes conversations, and syncs with your CRM automatically.",
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
