import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Transformation Solutions | AI Systems & Execution — Zyene",
  description:
    "Zyene's digital transformation solutions connect your tools, deploy AI systems across marketing, sales, and operations, and provide full execution support. First workflows live in 1–2 weeks.",
  keywords: [
    "digital transformation solutions",
    "AI digital transformation services",
    "AI systems integration",
    "AI execution services",
    "business digital transformation",
    "AI-powered transformation solutions",
    "operational transformation AI",
    "AI implementation services",
  ],
  alternates: { canonical: "https://zyene.com/solutions" },
  openGraph: {
    title: "Digital Transformation Solutions | AI Systems & Execution — Zyene",
    description:
      "Zyene connects your tools, deploys AI systems, and provides execution support so your digital transformation delivers real, measurable outcomes.",
    url: "https://zyene.com/solutions",
    type: "website",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
