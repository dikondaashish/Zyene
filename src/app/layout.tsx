import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Zyene - Growth Powered by Intelligence",
  description: "Zyene transforms ambitious brands into category leaders through AI-powered search optimization and a content engine that drives real revenue.",
  openGraph: {
    title: "Zyene - Growth Powered by Intelligence",
    description: "Zyene transforms ambitious brands into category leaders through AI-powered search optimization and a content engine that drives real revenue.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`tw-dark ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo/logo.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] tw-text-black dark:tw-bg-black dark:tw-text-white" suppressHydrationWarning>
        <Header />
        <main className="tw-flex-1">{children}</main>
        <Footer />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
