import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function BlogHero() {
  return (
    <SolutionsHero
      eyebrow="Resources"
      headingLines={["Notes for", "industrial operators."]}
      description="Practical notes for distributors, manufacturers, and specialty contractors on putting AI to work inside real operations."
      image="/images/industrial/mfg-sop-knowledge.jpg"
      imageAlt="Shelves of binders holding procedures and records"
      cta={null}
    />
  )
}
