import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function CareersHero() {
  return (
    <SolutionsHero
      eyebrow="Careers"
      headingLines={["Build the systems", "industry runs on."]}
      description="We build production AI for distributors, manufacturers, and specialty contractors. A small team shipping work that real operations depend on."
      image="/images/industrial/sol-human-approval.jpg"
      imageAlt="Team member reviewing an order on a laptop in a warehouse"
      cta={{ label: "See open roles", href: "#open-roles" }}
    />
  )
}
