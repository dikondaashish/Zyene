export type CaseStudy = {
  id: string
  industry: string
  title: string
  challenge: string
  solution: string
  before: string[]
  after: string[]
  tags: string[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "distributor-order-desk",
    industry: "Wholesale Distribution",
    title: "Customer purchase orders, from inbox to ERP",
    challenge:
      "Customer purchase orders arrive by email and PDF. An employee reads each one, matches the customer and products, and retypes the order into the ERP.",
    solution:
      "AI reads the order, matches the customer and products, validates prices and quantities, and prepares the ERP order. An employee approves before it posts.",
    before: ["Email", "Employee retypes", "ERP"],
    after: ["Email", "AI extraction", "Validation", "Approval", "ERP"],
    tags: ["Order entry", "ERP", "Human approval"],
  },
  {
    id: "manufacturer-rfq",
    industry: "Manufacturing",
    title: "RFQ packets, turned into estimator-ready packages",
    challenge:
      "An RFQ arrives with drawings, specifications, and a quantity spreadsheet. Estimators spend the first pass hunting for requirements and related historical jobs.",
    solution:
      "AI extracts requirements, finds related historical jobs, flags missing information, and prepares an estimator package. A human estimator reviews it.",
    before: ["RFQ packet", "Read by hand", "Estimate"],
    after: ["RFQ packet", "Requirements extracted", "Related jobs", "Estimator review"],
    tags: ["RFQ", "Estimating", "Documents"],
  },
  {
    id: "contractor-bid-intake",
    industry: "Specialty Contractors",
    title: "Bid documents, summarized into a checklist",
    challenge:
      "An RFP lands in an inbox. Someone has to summarize scope, pull deadlines, and build a bid checklist before estimating can start.",
    solution:
      "AI reads the documents, summarizes scope, extracts deadlines and requirements, and creates a bid checklist for the estimating team. The same office pattern applies across HVAC, electrical, mechanical, plumbing, fire protection, and roofing.",
    before: ["RFP", "Read by hand", "Checklist"],
    after: ["RFP", "Scope summary", "Deadlines extracted", "Checklist review"],
    tags: ["Bid intake", "RFP", "Estimating"],
  },
]
