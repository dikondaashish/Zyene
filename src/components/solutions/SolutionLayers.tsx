"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

export type SolutionLayer = {
  title: string
  subtitle: string
  image: string
  points: string[]
}

const defaultLayers: SolutionLayer[] = [
  {
    title: "Document Intelligence",
    subtitle: "Unstructured files become business data",
    image: "/images/industrial/sol-documents.jpg",
    points: [
      "PDFs, POs, RFQs, invoices, contracts, drawings, spreadsheets, and email.",
      "Extract the fields your workflow actually needs.",
      "Hand structured information to the next system or person.",
    ],
  },
  {
    title: "Order and Quote Automation",
    subtitle: "Request to draft transaction",
    image: "/images/industrial/dist-purchase-orders.jpg",
    points: [
      "Read the request and validate it.",
      "Look up customers, products, inventory, or history.",
      "Prepare the order or quote for review.",
    ],
  },
  {
    title: "Workflow Agents",
    subtitle: "Read, check, prepare, escalate",
    image: "/images/industrial/sol-workflow-agents.jpg",
    points: [
      "Read the incoming work and research what is missing.",
      "Check business systems before suggesting an action.",
      "Update an application or escalate the exception.",
    ],
  },
  {
    title: "ERP and CRM Integration",
    subtitle: "The systems you already run",
    image: "/images/industrial/mfg-erp-mes.jpg",
    points: [
      "Connect to platforms such as NetSuite, Epicor, Infor, Dynamics, Acumatica, and SAP.",
      "Also Salesforce, HubSpot, ServiceTitan, Procore, and QuickBooks where the workflow needs them.",
      "The ERP or CRM stays the system of record. The workflow writes into it the way a person would.",
    ],
  },
  {
    title: "Enterprise Knowledge",
    subtitle: "Find the procedure, not another folder",
    image: "/images/industrial/mfg-sop-knowledge.jpg",
    points: [
      "SOPs, manuals, SharePoint, Google Drive, and company documents.",
      "Answers stay tied to the source.",
      "People ask an operational question and get a traceable result.",
    ],
  },
  {
    title: "AI Operations Assessment",
    subtitle: "The lead path, before a build",
    image: "/images/industrial/hero-how-we-work.jpg",
    points: [
      "Map the current workflow and the repetitive steps.",
      "Check system and data access, then size the opportunity.",
      "Recommend an implementation and define the pilot.",
    ],
  },
]

const SPAN_PATTERN = [4, 2, 2, 4, 3, 3]
const SPAN_CLASS: Record<number, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  6: "lg:col-span-6",
}

function computeSpans(count: number): number[] {
  if (count === 1) return [6]
  if (count === 2) return [3, 3]
  if (count === 3) return [3, 3, 6]
  const spans: number[] = []
  let rowUsed = 0
  for (let i = 0; i < count; i++) {
    let span = SPAN_PATTERN[i % SPAN_PATTERN.length]
    if (rowUsed + span > 6) span = 6 - rowUsed
    spans.push(span)
    rowUsed = (rowUsed + span) % 6
  }
  if (rowUsed !== 0) spans[spans.length - 1] += 6 - rowUsed
  return spans
}

export function SolutionLayers({
  eyebrow = "Solutions",
  heading = "What we can build on top of the systems you already run",
  layers = defaultLayers,
}: {
  eyebrow?: string
  heading?: string
  layers?: SolutionLayer[]
} = {}) {
  const spans = computeSpans(layers.length)

  return (
    <section className="relative bg-white">
      <div className="zy-container zy-section">
        <div className="mb-14 max-w-[960px] md:mb-20">
          <Reveal className="mb-6">
            <span className="zy-kicker">{eyebrow}</span>
          </Reveal>
          <RevealText text={heading} className="zy-display text-[clamp(32px,4.6vw,64px)] text-[#0A1015]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {layers.map((layer, idx) => {
            const span = spans[idx]
            const wide = span >= 4
            return (
              <Reveal
                as="article"
                key={layer.title}
                delay={(idx % 3) * 0.06}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-paper",
                  SPAN_CLASS[span],
                  wide && "md:col-span-2 lg:grid lg:grid-cols-[1.1fr_1fr]"
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden bg-[#0A1015]",
                    wide ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-[16/10] lg:aspect-auto lg:h-[240px]"
                  )}
                >
                  <Image
                    src={layer.image}
                    alt={layer.title}
                    fill
                    sizes={span === 6 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/35 to-transparent" />
                </div>
                <div className={cn("flex flex-1 flex-col p-7 md:p-8", wide && "lg:justify-center lg:p-10")}>
                  <p className="mb-3 text-[13.5px] text-muted">{layer.subtitle}</p>
                  <h3 className="text-[26px] leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[30px]">
                    {layer.title}
                  </h3>
                  <ul className="mt-6 grid gap-3 border-t border-line pt-6">
                    {layer.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-[3px] flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-[#0A1015] text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-[15px] leading-[1.55] text-[#0A1015]/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
