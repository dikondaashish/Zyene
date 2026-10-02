import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FooterGate } from "@/components/layout/FooterGate";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { NavigationHandler } from "@/components/layout/NavigationHandler";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const SITE_URL = "https://zyene.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zyene | AI Operations for Industrial Businesses",
    template: "%s | Zyene",
  },
  description:
    "Zyene designs, builds, and integrates production AI systems for distributors, manufacturers, and specialty contractors — connecting email, documents, ERP, CRM, and the operational software teams already use.",
  keywords: [
    "AI operations for industrial businesses",
    "wholesale distribution AI",
    "manufacturing workflow AI",
    "specialty contractor AI",
    "ERP AI integration",
    "order automation",
    "RFQ automation",
    "document intelligence",
  ],
  authors: [{ name: "Zyene", url: SITE_URL }],
  creator: "Zyene",
  publisher: "Zyene",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Zyene",
    title: "Zyene | AI Operations for Industrial Businesses",
    description:
      "Production AI systems for distributors, manufacturers, and specialty contractors. We connect email, documents, ERP, CRM, and the software your teams already use.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zyene — AI operations for industrial businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyene | AI Operations for Industrial Businesses",
    description:
      "We design, build, and integrate production AI systems for distributors, manufacturers, and specialty contractors.",
    images: ["/images/og-image.jpg"],
    site: "@zyene",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Zyene",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-black.png`,
        width: 200,
        height: 60,
      },
      email: "support@zyene.com",
      telephone: "+1-415-409-9798",
      description:
        "Zyene is an applied AI engineering company for distributors, manufacturers, and specialty contractors. It connects email, documents, and the ERP or field software a company already runs.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 Geary St Ste 650 #1892",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94108",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@zyene.com",
        telephone: "+1-415-409-9798",
        availableLanguage: "English",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Wholesale distribution order automation",
        "Manufacturing RFQ processing",
        "Specialty contractor bid intake",
        "ERP integration",
        "Document intelligence",
      ],
      sameAs: [
        "https://www.linkedin.com/company/zyene",
        "https://twitter.com/zyene",
        "https://zyenereviews.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Zyene",
      description:
        "AI operations for industrial businesses. Production systems that connect email, documents, ERP, CRM, and people.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${geistMono.variable} ${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Information for AI systems" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white">
        <SmoothScrollProvider>
          <NavigationHandler />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <FooterGate />
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
