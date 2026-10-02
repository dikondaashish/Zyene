"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

export type DeliveryStep = {
  title: string
  image: string
  description: string
}

const defaultSteps: DeliveryStep[] = [
  {
    title: "Discover",
    image: "/images/industrial/hero-how-we-work.jpg",
    description: "We map the workflow, the systems, the people, and the bottlenecks.",
  },
  {
    title: "Design",
    image: "/images/industrial/mfg-rfq-drawings.jpg",
    description:
      "We decide what AI should automate, what existing software should do, and what should stay human.",
  },
  {
    title: "Build",
    image: "/images/industrial/sol-workflow-agents.jpg",
    description:
      "We build the workflow with the appropriate models and integrations. We are not tied to one provider.",
  },
  {
    title: "Integrate",
    image: "/images/industrial/mfg-erp-mes.jpg",
    description: "We connect ERP, CRM, email, documents, and internal systems instead of replacing them.",
  },
  {
    title: "Validate",
    image: "/images/industrial/mfg-quality.jpg",
    description: "We test accuracy, exceptions, permissions, failure cases, and business rules before go-live.",
  },
  {
    title: "Deploy and improve",
    image: "/images/industrial/sol-human-approval.jpg",
    description:
      "Production deployment, monitoring, measurement, employee feedback, and continuous improvement.",
  },
]

export function DeliverySteps({
  eyebrow = "How we work",
  heading = "Discover, design, build, integrate, validate, improve",
  steps = defaultSteps,
}: {
  eyebrow?: string
  heading?: string
  steps?: DeliveryStep[]
} = {}) {
  const railRef = React.useRef<HTMLOListElement>(null)
  const [edge, setEdge] = React.useState({ start: true, end: false })

  const updateEdges = React.useCallback(() => {
    const el = railRef.current
    if (!el) return
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }, [])

  React.useEffect(() => {
    updateEdges()
    const el = railRef.current
    if (!el) return
    el.addEventListener("scroll", updateEdges, { passive: true })
    window.addEventListener("resize", updateEdges)
    return () => {
      el.removeEventListener("scroll", updateEdges)
      window.removeEventListener("resize", updateEdges)
    }
  }, [updateEdges])

  const scrollByCard = (dir: 1 | -1) => {
    const el = railRef.current
    if (!el) return
    const card = el.querySelector("li")
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="zy-container zy-section pb-0">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[880px]">
            <Reveal className="mb-6">
              <span className="zy-kicker">{eyebrow}</span>
            </Reveal>
            <RevealText text={heading} className="zy-display text-[clamp(32px,4.6vw,64px)] text-[#0A1015]" />
          </div>
          <div className="flex gap-2">
            {[
              { dir: -1 as const, Icon: ArrowLeft, disabled: edge.start, label: "Previous step" },
              { dir: 1 as const, Icon: ArrowRight, disabled: edge.end, label: "Next step" },
            ].map(({ dir, Icon, disabled, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                disabled={disabled}
                onClick={() => scrollByCard(dir)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A1015]/15 text-[#0A1015] transition-[background-color,color,opacity] duration-300 hover:bg-[#0A1015] hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <ol
        ref={railRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-[clamp(72px,9vw,140px)] [scroll-padding-inline:max(20px,calc((100vw-1360px)/2+56px))]"
        style={{ paddingInline: "max(20px, calc((100vw - 1360px) / 2 + clamp(20px, 4vw, 56px)))" }}
      >
        {steps.map((step, idx) => (
          <li
            key={step.title}
            className={cn(
              "group relative flex w-[82vw] flex-shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-line bg-white sm:w-[420px]"
            )}
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-[#0A1015]">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="420px"
                className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="mb-4 font-mono text-[12.5px] text-muted">
                Step {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[26px] leading-[1.1] tracking-[-0.03em] text-[#0A1015]">{step.title}</h3>
              <p className="mt-3 text-[15.5px] leading-[1.6] text-[#4B525C]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
