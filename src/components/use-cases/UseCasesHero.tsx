import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function UseCasesHero() {
  return (
    <SolutionsHero
      eyebrow="Use Cases"
      headingLines={["Industrial", "workflows."]}
      description="Order desks, RFQs, bids, and the documents that still get retyped into ERP. These are the workflows we take off your team's plate first."
      image="/images/industrial/con-project-docs.jpg"
      imageAlt="Two site engineers in hard hats reviewing paperwork"
    />
  )
}
