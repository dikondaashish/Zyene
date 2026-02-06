import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyene.com"),
  title: {
    default: "Zyene | Digital Marketing & AI Solutions",
    template: "%s | Zyene",
  },
  icons: {
    icon: "/zyene.png",
  },
  description:
    "Zyene is a strategy-first digital marketing and AI technology company. We turn strategy into measurable growth with SEO, social media, content marketing, and AI-powered solutions.",
  keywords: [
    "digital marketing",
    "AI solutions",
    "SEO",
    "social media marketing",
    "content marketing",
    "email marketing",
    "web development",
    "AI voice",
    "marketing agency",
  ],
  authors: [{ name: "Zyene" }],
  creator: "Zyene",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zyene.com",
    siteName: "Zyene",
    title: "Zyene | Digital Marketing & AI Solutions",
    description:
      "Strategy-first digital marketing and AI technology for measurable growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyene | Digital Marketing & AI Solutions",
    description:
      "Strategy-first digital marketing and AI technology for measurable growth.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
