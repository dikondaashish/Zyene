import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Transformation Use Cases | AI-Powered Workflows — Zyene",
  description:
    "Explore real digital transformation use cases powered by Zyene's AI systems: marketing automation, CRM workflows, client onboarding, weekly reporting, lead follow-up, and more — all tailored to your tools.",
  keywords: [
    "digital transformation use cases",
    "AI-powered transformation examples",
    "marketing transformation AI",
    "CRM digital transformation",
    "business transformation use cases",
    "AI workflow transformation",
    "operational transformation examples",
    "AI implementation examples",
  ],
  alternates: { canonical: "https://zyene.com/use-cases" },
  openGraph: {
    title: "Digital Transformation Use Cases | AI-Powered Workflows — Zyene",
    description:
      "Real digital transformation playbooks from Zyene: marketing, CRM, onboarding, reporting, and more. Launch your first AI-powered workflow in 1–2 weeks.",
    url: "https://zyene.com/use-cases",
    type: "website",
  },
}

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
