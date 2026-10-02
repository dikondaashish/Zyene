import { UseCasesHero } from "@/components/use-cases/UseCasesHero"
import { UseCasesList } from "@/components/use-cases/UseCasesList"
import { AIAction } from "@/components/use-cases/AIAction"
import { Industries } from "@/components/home/Industries"
import { Calculator } from "@/components/home/Calculator"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"
import { JsonLd } from "@/components/seo/JsonLd"
import { webPageJsonLd } from "@/lib/seo"

const USE_CASES_FAQS = [
  {
    question: "Which use case should we start with?",
    answer:
      "The one repeated most often that still needs a person to retype or look things up. Order entry, quote requests, and RFQ intake are common first choices.",
  },
  {
    question: "Can a workflow follow our own rules?",
    answer:
      "Yes. Each workflow is built around your customers, products, approval limits, and exceptions, not a generic template.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "It depends on the workflow and the systems involved. An assessment maps one workflow and recommends a pilot before any build starts.",
  },
  {
    question: "Will this work with our ERP and field software?",
    answer:
      "We connect to the systems you already run and keep them as the system of record.",
  },
  {
    question: "What should we expect from a first pilot?",
    answer:
      "A working workflow on one process, measured against a metric agreed before the pilot: processing time, exception rate, quote turnaround, or hours returned to the team.",
  },
]

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/use-cases",
          name: "Industrial AI Use Cases",
          description:
            "Purchase order entry, quote requests, RFQ intake, supplier quotes, SOP search, bid intake, and project documents.",
          crumbs: [
            { name: "Home", path: "/" },
            { name: "Use Cases", path: "/use-cases" },
          ],
        })}
      />
      <UseCasesHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <UseCasesList />
        <AIAction />
        <Industries ctaLabel="Book an Assessment" ctaHref="/contact" />
        <Calculator />
        <FAQ faqs={USE_CASES_FAQS} />
        <FooterCTA />
      </div>
    </>
  )
}
