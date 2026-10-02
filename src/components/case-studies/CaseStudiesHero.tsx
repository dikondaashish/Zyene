import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function CaseStudiesHero() {
  return (
    <SolutionsHero
      eyebrow="Case Studies"
      headingLines={["Example workflows.", "Not client claims."]}
      description="These are reference implementations using synthetic business data. They show the pattern. They are not customer results."
      image="/images/industrial/sol-documents.jpg"
      imageAlt="Stacks of paper files waiting to be processed"
    />
  )
}
