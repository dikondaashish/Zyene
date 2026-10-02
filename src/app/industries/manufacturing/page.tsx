import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"
import { SolutionsHero } from "@/components/solutions/SolutionsHero"
import { servicePageJsonLd } from "@/lib/seo"
import { SolutionLayers } from "@/components/solutions/SolutionLayers"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata: Metadata = {
  title: "AI for Manufacturers",
  description:
    "AI for manufacturers that still read RFQ packets by hand. Drawings, specifications, and quantity sheets become an estimator package, reviewed by a person before a quote goes out.",
  alternates: { canonical: "https://zyene.com/industries/manufacturing" },
}

const faqs = [
  {
    question: "Do you replace our ERP or MES?",
    answer: "No. We connect email, documents, and those systems. They stay the system of record.",
  },
  {
    question: "Who still reviews a quote?",
    answer: "The estimator. AI prepares the package and flags what is missing.",
  },
]

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd
        data={servicePageJsonLd({
          path: "/industries/manufacturing",
          name: "AI for Manufacturers",
          description:
            "RFQ intake, purchasing documents, quality records, and production knowledge for manufacturers, connected to the ERP or MES already in place.",
          serviceType: "Manufacturing AI operations",
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Manufacturing", path: "/industries/manufacturing" },
          ],
        })}
      />
      <SolutionsHero
        headingLines={["AI for the work", "between the shop and the office."]}
        eyebrow="Manufacturing"
        description="RFQs, drawings, supplier emails, inspection documents, and the question: what is the procedure for this part?"
        imageAlt="Manufacturing operations"
        image="/images/industrial/hero-manufacturing.jpg"
      />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <SolutionLayers
          eyebrow="Operational problems"
          heading="The shop and the office do not share one inbox"
          layers={[
            {
              title: "RFQs arrive as a packet",
              subtitle: "Drawings, specs, and a spreadsheet",
              image: "/images/industrial/hero-manufacturing.jpg",
              points: ["Estimators spend the first pass finding requirements.", "Related jobs live in old folders.", "Missing information shows up late."],
            },
            {
              title: "Purchasing is still email",
              subtitle: "Supplier quotes do not land in the ERP by themselves",
              image: "/images/industrial/mfg-purchasing.jpg",
              points: ["Prices are copied out of messages.", "Comparisons are rebuilt in a sheet.", "The purchasing record lags the inbox."],
            },
            {
              title: "Procedures are hard to find",
              subtitle: "SOPs exist. People still ask a coworker.",
              image: "/images/industrial/mfg-sop-knowledge.jpg",
              points: ["Work instructions sit in SharePoint or a drive.", "The ERP or MES does not answer the question.", "The delay is search, not a missing system."],
            },
          ]}
        />
        <SolutionLayers
          eyebrow="Workflows"
          heading="Paperwork between people and the systems you already run"
          layers={[
            {
              title: "RFQ to quote",
              subtitle: "An estimator package, not a black box",
              image: "/images/industrial/mfg-rfq-drawings.jpg",
              points: [
                "RFQ, drawings, specifications, and a quantity spreadsheet come in together.",
                "AI extracts requirements, finds related historical jobs, and flags missing information.",
                "A human estimator reviews the package.",
              ],
            },
            {
              title: "Purchasing",
              subtitle: "Supplier quotes compared, not retyped",
              image: "/images/industrial/sol-documents.jpg",
              points: [
                "A supplier quote or email arrives.",
                "AI extracts pricing and compares suppliers.",
                "The purchasing workflow gets an update to review.",
              ],
            },
            {
              title: "Quality documentation",
              subtitle: "Inspection records that can be found",
              image: "/images/industrial/mfg-quality.jpg",
              points: [
                "Inspection documents are read for results.",
                "Missing information is identified.",
                "Records are organized so a report can be generated.",
              ],
            },
            {
              title: "Production knowledge",
              subtitle: "SOPs, manuals, and work instructions",
              image: "/images/industrial/mfg-sop-knowledge.jpg",
              points: [
                "An employee asks for the procedure on a part.",
                "AI searches SOPs, manuals, work instructions, and historical records.",
                "The answer stays tied to the source document.",
              ],
            },
            {
              title: "ERP and MES workflows",
              subtitle: "Connect them. Do not replace them.",
              image: "/images/industrial/mfg-erp-mes.jpg",
              points: [
                "ERP, MES, email, SharePoint, and documents stay in place.",
                "The workflow moves information between them.",
                "People approve the steps that need judgment.",
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
