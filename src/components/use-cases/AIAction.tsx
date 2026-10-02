"use client"

import * as React from "react"
import Link from "next/link"
import { useInView, useReducedMotion } from "framer-motion"
import { ArrowRight, Check, FileText, Loader2, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

type Line = {
  qty: number
  customerPart: string
  sku: string
  description: string
  unit: number
  confidence: number
  contractUnit?: number
}

const LINES: Line[] = [
  {
    qty: 24,
    customerPart: "NM-CU-1250",
    sku: "CPT-L-125-20",
    description: "Copper tube, type L, 1-1/4 in x 20 ft",
    unit: 118.4,
    confidence: 0.98,
  },
  {
    qty: 60,
    customerPart: "NM-FT-1250E",
    sku: "FTG-90-125W",
    description: "90° elbow, wrought copper, 1-1/4 in",
    unit: 6.85,
    confidence: 0.96,
  },
  {
    qty: 12,
    customerPart: "NM-VB-100",
    sku: "VLV-BL-100-LF",
    description: "Ball valve, lead-free brass, 1 in",
    unit: 41.2,
    contractUnit: 43.75,
    confidence: 0.94,
  },
  {
    qty: 200,
    customerPart: "NM-HG-125",
    sku: "HNG-CL-125",
    description: "Clevis hanger, 1-1/4 in",
    unit: 2.14,
    confidence: 0.91,
  },
]

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })

type Resolution = "contract" | "hold" | null

function ReviewScreen() {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const reduce = useReducedMotion()
  const [checked, setChecked] = React.useState(0)
  const [hovered, setHovered] = React.useState<number | null>(null)
  const [resolution, setResolution] = React.useState<Resolution>(null)
  const [posted, setPosted] = React.useState(false)

  React.useEffect(() => {
    if (!inView) return
    if (reduce) {
      setChecked(LINES.length)
      return
    }
    const timers = LINES.map((_, i) => window.setTimeout(() => setChecked(i + 1), 700 + i * 520))
    return () => timers.forEach(window.clearTimeout)
  }, [inView, reduce])

  const allChecked = checked >= LINES.length
  const exceptionOpen = allChecked && resolution === null
  const priceFor = (line: Line) => (line.contractUnit && resolution === "contract" ? line.contractUnit : line.unit)
  const subtotal = LINES.reduce((sum, line) => sum + line.qty * priceFor(line), 0)

  const reset = () => {
    setResolution(null)
    setPosted(false)
  }

  return (
    <div
      ref={ref}
      role="group"
      aria-label="Example order review screen"
      className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0D141A] text-left shadow-[0_50px_100px_-50px_rgba(0,0,0,0.9)]"
    >
      <div className="flex h-12 items-center justify-between gap-4 border-b border-white/[0.08] px-4 md:px-5">
        <p className="truncate text-[13px] text-white/45">
          Order desk <span className="px-1.5 text-white/20">/</span> Review queue
          <span className="px-1.5 text-white/20">/</span>
          <span className="text-white/80">PO 4471-208</span>
        </p>
        <span className="flex-shrink-0 rounded-[6px] border border-white/10 px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-white/40">
          Synthetic data
        </span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
        <div className="border-b border-white/[0.08] p-4 md:p-6 lg:border-b-0 lg:border-r">
          <dl className="grid grid-cols-[64px_1fr] gap-y-1.5 text-[13px]">
            <dt className="text-white/35">From</dt>
            <dd className="text-white/80">Dana Ruiz, Northgate Mechanical</dd>
            <dt className="text-white/35">Subject</dt>
            <dd className="text-white/80">PO 4471-208, restock for Oct 14</dd>
            <dt className="text-white/35">Received</dt>
            <dd className="text-white/55">Today, 7:42 AM</dd>
          </dl>
          <p className="mt-4 text-[13.5px] leading-[1.6] text-white/55">
            Hi team, PO attached for the Riverside job. Same pricing as last quarter please. Need it at dock 3 by
            the 14th.
          </p>

          <div className="mt-5 flex items-center gap-2 text-[12.5px] text-white/50">
            <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
            PO-4471-208.pdf <span className="text-white/25">2 pages</span>
          </div>

          <div className="mt-3 rounded-[6px] bg-[#F3F3EF] p-4 font-mono text-[10.5px] leading-[1.5] text-[#2A3036] md:p-5">
            <div className="flex items-start justify-between border-b border-[#2A3036]/15 pb-3">
              <div>
                <div className="text-[11.5px] font-semibold tracking-[0.04em] text-[#0A1015]">NORTHGATE MECHANICAL</div>
                <div className="text-[#2A3036]/60">Purchase Order</div>
              </div>
              <div className="text-right text-[#2A3036]/70">
                No. 4471-208
                <br />
                Ship: Dock 3
              </div>
            </div>
            <div className="mt-2 grid grid-cols-[28px_1fr_auto] gap-x-3 text-[#2A3036]/50">
              <span>QTY</span>
              <span>PART</span>
              <span>UNIT</span>
            </div>
            {LINES.map((line, i) => (
              <div
                key={line.customerPart}
                className={cn(
                  "-mx-1.5 mt-1 grid grid-cols-[28px_1fr_auto] gap-x-3 rounded-[3px] px-1.5 py-0.5 transition-colors duration-200",
                  hovered === i ? "bg-[#1F9BFF]/20" : "bg-transparent"
                )}
              >
                <span>{line.qty}</span>
                <span className="truncate">{line.customerPart}</span>
                <span>{line.unit.toFixed(2)}</span>
              </div>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 border-t border-[#2A3036]/15 pt-3 text-[#2A3036]/60">
              <span>Deliver by: 10/14</span>
              <span className="text-right">Terms: Net 30</span>
              <span>Job: Riverside Med. Ctr.</span>
              <span className="text-right">Auth: D. Ruiz</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4 md:p-6">
          <div className="grid gap-px overflow-hidden rounded-[10px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
            {[
              ["Customer", "Northgate Mechanical", "C-10482"],
              ["Ship to", "1180 Industrial Pkwy", "Dock 3"],
              ["Requested", "Oct 14", "Ground"],
            ].map(([label, value, meta]) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-4 bg-[#0D141A] px-3.5 py-2.5 sm:block sm:py-3"
              >
                <p className="text-[11.5px] text-white/35">{label}</p>
                <div className="min-w-0 text-right sm:mt-0.5 sm:text-left">
                  <p className="truncate text-[13.5px] text-white/85">{value}</p>
                  <p className="font-mono text-[11px] text-white/35">{meta}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-[40px_minmax(0,1fr)_auto] gap-x-4 border-b border-white/[0.08] pb-2 text-[11.5px] text-white/35 sm:grid-cols-[40px_minmax(0,1fr)_80px_96px]">
            <span>Qty</span>
            <span>Item</span>
            <span className="hidden text-right sm:block">Unit</span>
            <span className="text-right">Check</span>
          </div>

          <ul>
            {LINES.map((line, i) => {
              const isChecked = i < checked
              const isException = isChecked && line.contractUnit !== undefined
              return (
                <li
                  key={line.sku}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "grid grid-cols-[40px_minmax(0,1fr)_auto] items-start gap-x-4 border-b border-white/[0.06] py-3 transition-colors duration-200 sm:grid-cols-[40px_minmax(0,1fr)_80px_96px]",
                    hovered === i && "bg-white/[0.02]"
                  )}
                >
                  <span className="font-mono text-[13px] text-white/70">{line.qty}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-[13.5px] text-white/85">{line.description}</span>
                    <span className="mt-0.5 block truncate font-mono text-[11px] text-white/35">
                      {line.customerPart} <span className="text-white/20">→</span>{" "}
                      <span className={isChecked ? "text-white/60" : undefined}>{isChecked ? line.sku : "matching"}</span>
                    </span>
                  </span>
                  <span className="hidden text-right font-mono text-[13px] text-white/70 sm:block">
                    {priceFor(line).toFixed(2)}
                  </span>
                  <span className="flex justify-end">
                    {!isChecked ? (
                      <Loader2 className="mt-0.5 h-3.5 w-3.5 animate-spin text-white/30" aria-label="Checking" />
                    ) : isException && resolution === null ? (
                      <span className="rounded-[5px] bg-[#F2A93B]/15 px-1.5 py-0.5 font-mono text-[11px] text-[#F2B65A]">
                        Price
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[11.5px] text-white/50">
                        <Check className="h-3 w-3 text-[#1F9BFF]" strokeWidth={2.5} />
                        {Math.round(line.confidence * 100)}%
                      </span>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>

          <div className="mt-4 min-h-[112px]">
            {!allChecked ? (
              <p className="pt-2 text-[13px] text-white/40">
                Checking items against the customer&apos;s price list and on-hand inventory.
              </p>
            ) : posted ? (
              <div className="rounded-[10px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[14px] text-white/90">Draft sales order SO-30918 written to the ERP.</p>
                <p className="mt-1 text-[13px] text-white/50">
                  Confirmation to Dana Ruiz is ready to send. Approved by J. Patel at 7:51 AM.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] text-white/50 transition-colors hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" /> Replay
                </button>
              </div>
            ) : exceptionOpen ? (
              <div className="rounded-[10px] border border-[#F2A93B]/25 bg-[#F2A93B]/[0.06] p-4">
                <p className="text-[14px] text-white/90">
                  Ball valve is priced at {usd.format(41.2)} on the PO. The contract price is {usd.format(43.75)}.
                </p>
                <p className="mt-1 text-[13px] text-white/50">
                  The customer asked for last quarter&apos;s pricing. Choose how to handle it.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setResolution("contract")}
                    className="rounded-[8px] bg-white px-3 py-1.5 text-[13px] font-medium text-[#0A1015] transition-colors hover:bg-white/85"
                  >
                    Apply contract price
                  </button>
                  <button
                    type="button"
                    onClick={() => setResolution("hold")}
                    className="rounded-[8px] border border-white/15 px-3 py-1.5 text-[13px] text-white/80 transition-colors hover:border-white/35 hover:text-white"
                  >
                    Keep PO price, flag for sales rep
                  </button>
                </div>
              </div>
            ) : (
              <p className="pt-2 text-[13px] text-white/50">
                {resolution === "contract"
                  ? "Contract price applied to the ball valve line."
                  : "PO price kept. The line is flagged for the account's sales rep."}{" "}
                <button type="button" onClick={reset} className="text-white/70 underline decoration-white/25 underline-offset-2 hover:text-white">
                  Change
                </button>
              </p>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-white/[0.08] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-white/45">
              Subtotal <span className="ml-1.5 font-mono text-[14px] text-white/90">{usd.format(subtotal)}</span>
            </p>
            <button
              type="button"
              disabled={!allChecked || resolution === null || posted}
              onClick={() => setPosted(true)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#1F9BFF] px-4 text-[13.5px] font-medium text-[#0A1015] transition-[background-color,opacity] duration-200 hover:bg-[#4DB0FF] disabled:cursor-not-allowed disabled:opacity-35"
            >
              {posted ? "Approved" : "Approve and create draft order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

type AIActionProps = {
  eyebrow?: string
  heading?: string
  note?: string
  ctaHeading?: string
  ctaLabel?: string
  ctaHref?: string
}

export function AIAction({
  eyebrow = "Example workflow",
  heading = "Purchase order automation",
  note = "A purchase order arrives by email. Zyene reads it, matches the customer and items, checks pricing, and stops on anything a person should decide. Try the exception below.",
  ctaHeading = "This is the pattern. The metric is agreed on your workflow.",
  ctaLabel = "Book an AI Workflow Assessment",
  ctaHref = "/contact",
}: AIActionProps = {}) {
  return (
    <section className="bg-white">
      <div className="zy-container pb-[clamp(72px,9vw,140px)]">
        <div className="zy-grain relative overflow-hidden rounded-[32px] bg-[#0A1015] text-white">
          <div className="relative px-4 pb-6 pt-14 sm:px-8 md:px-14 md:pt-20">
            <div className="grid gap-8 px-2 sm:px-0 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
              <div>
                <Reveal className="mb-6">
                  <span className="zy-kicker !text-white/50">{eyebrow}</span>
                </Reveal>
                <RevealText text={heading} className="zy-display text-[clamp(34px,5vw,68px)] text-white" />
              </div>
              {note ? (
                <Reveal delay={0.1}>
                  <p className="max-w-[440px] text-[15.5px] leading-[1.6] text-white/60">{note}</p>
                </Reveal>
              ) : null}
            </div>

            <Reveal delay={0.1} className="mt-12 lg:mt-16">
              <ReviewScreen />
            </Reveal>
          </div>

          <div className="relative mt-6 flex flex-col gap-8 border-t border-white/10 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:px-16 md:py-12">
            <p className="max-w-[640px] font-display text-[24px] leading-[1.2] tracking-[-0.025em] text-white md:text-[30px]">
              {ctaHeading}
            </p>
            <Button variant="primary" size="lg" asChild className="w-full md:w-auto">
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
