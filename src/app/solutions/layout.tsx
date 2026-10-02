import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"
import { servicePageJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Industrial AI Solutions",
  description:
    "Industrial AI solutions for the work around your ERP: document intelligence, order and quote automation, workflow agents, integrations, and operational search.",
  alternates: { canonical: "https://zyene.com/solutions" },
  openGraph: {
    title: "Industrial AI Solutions | Zyene",
    description:
      "Six solutions, one operations layer. Production AI connected to the ERP, CRM, and documents your team already runs.",
    url: "https://zyene.com/solutions",
    type: "website",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={servicePageJsonLd({
          path: "/solutions",
          name: "Industrial AI Solutions",
          description:
            "Document intelligence, order and quote automation, workflow agents, ERP and CRM integration, and operational search.",
          serviceType: "Industrial AI implementation",
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ],
        })}
      />
      {children}
    </>
  )
}
