import { SplitList } from "@/components/ui/SplitList"

const audienceItems = [
  {
    title: "Wholesale distributors",
    description: "Order desks still retype customer emails and purchase orders into the ERP.",
  },
  {
    title: "Manufacturers",
    description:
      "RFQs, drawings, purchasing emails, and quality documents still sit between the office and the shop floor.",
  },
  {
    title: "Specialty contractors",
    description: "Bids, RFIs, submittals, daily reports, and closeout still depend on someone reading the packet.",
  },
  {
    title: "Operators with an ERP",
    description: "You already have the system of record. The gap is the manual work around it.",
  },
]

export function WhoThisIsFor() {
  return (
    <SplitList
      className="border-t border-line"
      heading="You already have the software."
      intro="If email, PDFs, and spreadsheets still sit between your people and your ERP, this assessment is for you."
      items={audienceItems}
    />
  )
}
