import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AI Products | Zyene Reviews & Zentraic AI Voice Agent",
  description:
    "Zyene's AI-powered products drive digital transformation across reputation and voice operations. Zyene Reviews automates review management. Zentraic AI handles inbound/outbound calls, qualifies leads, and syncs your CRM.",
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
    title: "AI Products | Zyene Reviews & Zentraic AI Voice Agent",
    description:
      "Zyene Reviews automates reputation management. Zentraic AI handles inbound and outbound calls, qualifies leads, and syncs your CRM — part of Zyene's AI-powered digital transformation platform.",
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
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free trial available" },
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
