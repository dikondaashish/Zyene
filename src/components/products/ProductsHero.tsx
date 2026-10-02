import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function ProductsHero() {
  return (
    <SolutionsHero
      eyebrow="Products"
      headingLines={["Two products.", "One clear outcome."]}
      description="Zyene Reviews and Zentraic AI help you automate follow-up, protect your reputation, qualify leads, and keep CRM data in sync."
      image="/images/industrial/dist-customer-ops.jpg"
      imageAlt="Operations coordinator at a warehouse desk terminal"
    />
  )
}
