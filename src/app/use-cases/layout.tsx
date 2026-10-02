import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial AI Use Cases",
  description:
    "Industrial AI use cases for order desks, RFQs, bids, and the documents that still get retyped into an ERP. Each workflow keeps a person on the approval step.",
  keywords: [
    "industrial AI use cases",
    "purchase order automation",
    "RFQ automation",
    "contractor bid intake AI",
    "ERP workflow automation",
  ],
  alternates: { canonical: "https://zyene.com/use-cases" },
  openGraph: {
    title: "Industrial AI Use Cases | Zyene",
    description:
      "Order desks, RFQs, bids, and documents, connected to the ERP a team already runs.",
    url: "https://zyene.com/use-cases",
    type: "website",
  },
}

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
