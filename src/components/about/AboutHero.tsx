import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function AboutHero() {
  return (
    <SolutionsHero
      eyebrow="About"
      headingLines={["Applied AI for", "industrial operations"]}
      description="We are an applied AI engineering company focused on industrial operations. We are not pretending to be a large consultancy."
      image="/images/industrial/hero-how-we-work.jpg"
      imageAlt="Two people mapping a workflow on a whiteboard"
    />
  )
}
