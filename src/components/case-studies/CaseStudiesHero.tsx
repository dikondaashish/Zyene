import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function CaseStudiesHero() {
  return (
    <SolutionsHero
      eyebrow="Case Studies"
      headingLines={["Example workflows.", "How the work runs."]}
      description="Purchase orders, RFQs, and bid packages — the pattern of documents, people, and the system of record, shown as reference implementations."
      image="/images/industrial/sol-documents.jpg"
      imageAlt="Stacks of paper files waiting to be processed"
    />
  )
}
