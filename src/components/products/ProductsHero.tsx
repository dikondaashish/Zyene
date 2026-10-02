import { SolutionsHero } from "@/components/solutions/SolutionsHero"

export function ProductsHero() {
  return (
    <SolutionsHero
      eyebrow="Products"
      headingLines={["Internal tools.", "Opened as products."]}
      description="We built Zyene Reviews and Zentraic AI for work we kept seeing across businesses: getting service feedback, and handling the call. They are now available as SaaS."
      image="/images/industrial/dist-customer-ops.jpg"
      imageAlt="Operations coordinator at a warehouse desk terminal"
    />
  )
}
