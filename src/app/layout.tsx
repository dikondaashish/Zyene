import type { Metadata } from "next";
import { DM_Sans, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyene.com"),
  title: {
    default: "Zyene | AI-Powered Digital Marketing & Business Infrastructure",
    template: "%s | Zyene",
  },
  icons: {
    icon: "/zyene.png",
  },
  description:
    "Zyene builds the marketing systems, CRM automation, and AI voice tools businesses use to scale. Partner with us to implement measurable growth infrastructure.",
  keywords: [
    "digital marketing agency",
    "AI solutions",
    "SEO services",
    "Zentraic AI voice agent",
    "Zyene Reviews",
    "review management platform",
    "CRM automation",
    "social media marketing",
    "content marketing",
    "email marketing",
    "web development",
    "business scaling",
    "marketing infrastructure",
  ],
  authors: [{ name: "Zyene" }],
  creator: "Zyene",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zyene.com",
    siteName: "Zyene",
    title: "Zyene | AI-Powered Digital Marketing & Business Infrastructure",
    description:
      "We build the marketing systems, CRM automation, and AI tools businesses use to scale predictably.",
    images: [
      {
        url: "/zyene_logo.png",
        width: 1200,
        height: 630,
        alt: "Zyene — AI-Powered Business Growth Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyene | AI-Powered Digital Marketing & Business Infrastructure",
    description:
      "We build the marketing systems, CRM automation, and AI tools businesses use to scale predictably.",
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
      <body className={`${dmSans.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
