import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"
import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { servicePageJsonLd } from "@/lib/seo"
import { SolutionLayers } from "@/components/solutions/SolutionLayers"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "AI for Wholesale Distributors",
  description:
    "AI for wholesale distributors that still retype emailed purchase orders into the ERP. Order entry, quotes, and customer questions, with an employee approving before anything posts.",
  alternates: { canonical: "https://zyene.com/industries/wholesale-distribution" },
}

const faqs = [
  {
    question: "Is this only order-entry software?",
    answer:
      "No. Order entry is one workflow. The offer is AI operations infrastructure for distributors: quotes, customer questions, and product data as well.",
  },
  {
    question: "Does the AI post the order by itself?",
    answer: "It prepares the order. An employee approves before it is posted to the ERP.",
  },
]

export default function WholesaleDistributionPage() {
  return (
    <>
      <JsonLd
        data={servicePageJsonLd({
          path: "/industries/wholesale-distribution",
          name: "AI for Wholesale Distributors",
          description:
            "Order entry, quote processing, and customer questions for wholesale distributors, connected to the ERP they already run.",
          serviceType: "Wholesale distribution AI operations",
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Wholesale Distribution", path: "/industries/wholesale-distribution" },
          ],
        })}
      />
      <SolutionsHero
        headingLines={["Remove repetitive", "work from your order desk."]}
        eyebrow="Wholesale Distribution"
        description="Customer emails, PDFs, and purchase orders still get read by people. We connect that work to the ERP you already run."
        imageAlt="Wholesale distribution operations"
        image="/images/industrial/hero-distribution.jpg"
      />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <SolutionLayers
          eyebrow="Operational problems"
          heading="The order desk is still the integration layer"
          layers={[
            {
              title: "Purchase orders arrive as files",
              subtitle: "Email and PDF, not a clean EDI feed",
              image: "/images/industrial/dist-purchase-orders.jpg",
              points: ["Customers send POs the way they already work.", "Someone opens the attachment and reads it.", "The ERP never sees the order until a person types it."],
            },
            {
              title: "Quotes wait on lookups",
              subtitle: "SKU, price, and stock live in another system",
              image: "/images/industrial/dist-quote-lookup.jpg",
              points: ["An RFQ lists items the way the customer wrote them.", "A person matches them to your catalog.", "The quote cannot start until that match is done."],
            },
            {
              title: "Where is my order?",
              subtitle: "The answer is in the ERP. The email is not.",
              image: "/images/industrial/dist-customer-ops.jpg",
              points: ["Service reads the question.", "Then they search the order.", "Then they write the reply."],
            },
          ]}
        />
        <SolutionLayers
          eyebrow="Workflows"
          heading="AI operations infrastructure for distributors"
          layers={[
            {
              title: "Order entry",
              subtitle: "Email to a prepared ERP order",
              image: "/images/industrial/sol-human-approval.jpg",
              points: [
                "Customer emails a purchase order.",
                "AI reads it, matches the customer and products, and validates the data.",
                "An employee approves the prepared ERP order.",
              ],
            },
            {
              title: "RFQ and quote processing",
              subtitle: "Request to a quote a salesperson can review",
              image: "/images/industrial/sol-documents.jpg",
              points: [
                "Extract SKUs and quantities from the customer RFQ.",
                "Look up inventory and pricing.",
                "Prepare the quote for sales review.",
              ],
            },
            {
              title: "Customer operations",
              subtitle: "Where is my order?",
              image: "/images/industrial/sol-workflow-agents.jpg",
              points: [
                "AI checks the ERP.",
                "It finds the order or shipment.",
                "It prepares the response for a person to send.",
              ],
            },
            {
              title: "Product data",
              subtitle: "Catalogs and PDFs into a cleaner record",
              image: "/images/industrial/dist-product-data.jpg",
              points: [
                "Supplier catalogs and PDFs come in as files.",
                "AI extracts attributes and standardizes them.",
                "The product-information workflow gets an update to review.",
              ],
            },
          ]}
        />
        <FAQ faqs={faqs} />
        <FooterCTA />
      </div>
    </>
  )
}
