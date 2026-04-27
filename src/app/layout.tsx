import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { NavigationHandler } from "@/components/layout/NavigationHandler";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const SITE_URL = "https://zyene.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zyene | AI-Powered Digital Transformation Execution Company",
    template: "%s | Zyene",
  },
  description:
    "Zyene is an AI-powered digital transformation execution company. We design and deploy AI systems that transform how businesses run marketing, sales, and operations — with full execution support and measurable outcomes.",
  keywords: [
    "AI-powered digital transformation",
    "digital transformation execution company",
    "AI digital transformation",
    "business transformation AI",
    "AI execution company",
    "AI systems for digital transformation",
    "operational AI transformation",
    "AI business transformation",
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
    title: "Zyene | AI-Powered Digital Transformation Execution Company",
    description:
      "Zyene is an AI-powered digital transformation execution company. We design and deploy AI systems that transform how businesses run — with full execution support and measurable outcomes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zyene — AI-Powered Digital Transformation Execution Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyene | AI-Powered Digital Transformation Execution Company",
    description:
      "Zyene designs and deploys AI systems that transform how businesses run marketing, sales, and operations — with full execution support.",
    images: ["/images/og-image.jpg"],
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
        url: `${SITE_URL}/images/Logo_Black.png`,
        width: 200,
        height: 60,
      },
      email: "support@zyene.com",
      description:
        "Zyene is an AI-powered digital transformation execution company that designs and deploys AI systems transforming how businesses run marketing, sales, and operations.",
      sameAs: [
        "https://www.linkedin.com/company/zyene",
        "https://twitter.com/zyene",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Zyene",
      description:
        "AI-powered digital transformation execution company helping businesses scale with intelligent systems for marketing, sales, and operations.",
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
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white`}>
        <SmoothScrollProvider>
          <NavigationHandler />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
