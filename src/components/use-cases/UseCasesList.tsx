import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal, RevealText } from "@/components/ui/Reveal"

type UseCase = {
  id: string
  industry: string
  industryHref: string
  title: string
  today: string
  prepares: string
  approval: string
  systems: string[]
}

const USE_CASES: UseCase[] = [
  {
    id: "purchase-order-entry",
    industry: "Wholesale distribution",
    industryHref: "/industries/wholesale-distribution",
    title: "Purchase order entry",
    today: "Customer POs arrive as PDFs and email bodies. Someone retypes every line into the ERP and checks part numbers by hand.",
    prepares: "Reads the PO, matches the customer, SKUs, prices, and ship-to, and builds a draft sales order with every mismatch flagged.",
    approval: "A customer service rep reviews the draft and posts it.",
    systems: ["Email", "ERP", "Product catalog"],
  },
  {
    id: "quote-requests",
    industry: "Wholesale distribution",
    industryHref: "/industries/wholesale-distribution",
    title: "Quote requests",
    today: "Inside sales looks up price, stock, and substitutes across several screens before replying.",
    prepares: "Pulls price, availability, and alternates for each requested item and drafts the quote.",
    approval: "The salesperson adjusts margin and sends it.",
    systems: ["Email", "ERP", "Pricing"],
  },
  {
    id: "order-status",
    industry: "Wholesale distribution",
    industryHref: "/industries/wholesale-distribution",
    title: "“Where is my order?” requests",
    today: "Status questions interrupt the desk all day, even though the answer already sits in the ERP.",
    prepares: "Finds the order, shipment, and tracking details and drafts a reply with the current status.",
    approval: "Routine replies can go out once you approve the rule. Exceptions go to a person.",
    systems: ["Shared inbox", "ERP", "Carrier tracking"],
  },
  {
    id: "rfq-intake",
    industry: "Manufacturing",
    industryHref: "/industries/manufacturing",
    title: "RFQ intake",
    today: "Estimators open every drawing, specification, and quantity sheet before they can start pricing.",
    prepares: "Extracts materials, tolerances, quantities, and due dates, finds similar past jobs, and lists what is missing.",
    approval: "The estimator prices the job from a complete package.",
    systems: ["Email", "ERP", "Job history"],
  },
  {
    id: "supplier-quotes",
    industry: "Manufacturing",
    industryHref: "/industries/manufacturing",
    title: "Supplier quote comparison",
    today: "Buyers copy supplier quotes from emails and PDFs into a spreadsheet to compare them.",
    prepares: "Lines quotes up by price, lead time, and terms, and drafts the purchase order for the chosen supplier.",
    approval: "The buyer picks the supplier and releases the PO.",
    systems: ["Email", "ERP", "Purchasing"],
  },
  {
    id: "sop-search",
    industry: "Manufacturing",
    industryHref: "/industries/manufacturing",
    title: "Procedure and SOP search",
    today: "The procedure exists, but people still ask the one coworker who knows where it is.",
    prepares: "Answers questions from your SOPs, manuals, and work instructions, and cites the source document.",
    approval: "Answers link to the source, so people can check the original.",
    systems: ["Document library", "Quality system"],
  },
  {
    id: "bid-intake",
    industry: "Specialty contractors",
    industryHref: "/industries/specialty-contractors",
    title: "Bid and RFP intake",
    today: "Estimators read a pile of plans, specifications, and addenda just to decide whether to bid.",
    prepares: "Summarizes scope, deadlines, bonding, and insurance requirements into a go or no-go checklist.",
    approval: "The estimator decides whether to bid.",
    systems: ["Email", "Plan rooms", "Estimating"],
  },
  {
    id: "project-documents",
    industry: "Specialty contractors",
    industryHref: "/industries/specialty-contractors",
    title: "Project documents and closeout",
    today: "RFIs, submittals, change orders, and closeout packages are assembled by hand from scattered files.",
    prepares: "Drafts RFIs and logs, tracks submittals, and assembles the closeout package from job records.",
    approval: "The project manager reviews before anything goes to the general contractor or owner.",
    systems: ["Procore", "ServiceTitan", "Accounting"],
  },
]

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A8F98]">{label}</dt>
      <dd className="mt-2 text-[16px] leading-[1.6] text-[#4B525C]">{children}</dd>
    </div>
  )
}

export function UseCasesList() {
  return (
    <section className="bg-white">
      <div className="zy-container zy-section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <RevealText
            text="Eight workflows we take off the desk first."
            className="zy-display max-w-[640px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1} className="lg:pt-3">
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#4B525C]">
              Each one starts with documents that arrive by email and ends in the system you already run. A person
              approves wherever judgment matters.
            </p>
            <nav aria-label="Use cases" className="mt-8 flex flex-wrap gap-2">
              {USE_CASES.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[13.5px] text-[#0A1015]/75 transition-colors hover:border-[#0A1015]/30 hover:text-[#0A1015]"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-[#0A1015]/15 md:mt-24">
          {USE_CASES.map((item, index) => (
            <li key={item.id} id={item.id} className="scroll-mt-32 border-b border-[#0A1015]/10">
              <Reveal className="grid gap-8 py-10 md:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                <div>
                  <p className="font-mono text-[12px] tracking-[0.04em] text-[#8A8F98]">
                    {String(index + 1).padStart(2, "0")} · {item.industry}
                  </p>
                  <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.025em] text-[#0A1015] md:text-[34px]">
                    {item.title}
                  </h2>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.systems.map((system) => (
                      <li key={system} className="rounded-full bg-paper px-3 py-1 text-[12.5px] text-[#4B525C]">
                        {system}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.industryHref}
                    className="group mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#0A1015]"
                  >
                    More on {item.industry.toLowerCase()}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <dl className="grid gap-7">
                  <Field label="The work today">{item.today}</Field>
                  <Field label="What the system prepares">{item.prepares}</Field>
                  <Field label="Who approves">{item.approval}</Field>
                </dl>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
