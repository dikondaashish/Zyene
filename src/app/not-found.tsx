import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
}

const DESTINATIONS = [
  { label: "Solutions", description: "What we build on top of your ERP", href: "/solutions" },
  { label: "How we work", description: "From assessment to measured deployment", href: "/how-we-work" },
  { label: "Case studies", description: "Reference workflows by industry", href: "/case-studies" },
  { label: "Resources", description: "Notes for industrial operators", href: "/blog" },
]

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#0A1015] text-white">
      <div aria-hidden="true" className="zy-grain absolute inset-0" />
      <div className="zy-container relative z-10 grid min-h-[88vh] gap-16 pb-20 pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24 md:pt-48">
        <div>
          <p className="mb-7 font-mono text-[13px] tracking-[0.04em] text-white/50">Error 404</p>
          <h1 className="zy-display max-w-[760px] text-[clamp(40px,6.4vw,92px)] text-white">
            We couldn’t find that page.
          </h1>
          <p className="mt-8 max-w-[480px] text-[17px] leading-[1.6] text-white/70 md:text-[18px]">
            The link may be out of date, or the page has moved. Start from the homepage or pick up where most
            visitors go next.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href="/">
                Back to home
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Book an Assessment</Link>
            </Button>
          </div>
        </div>

        <ul className="border-t border-white/12">
          {DESTINATIONS.map((item) => (
            <li key={item.href} className="border-b border-white/10">
              <Link href={item.href} className="group flex items-center justify-between gap-6 py-5">
                <span>
                  <span className="block text-[18px] font-medium tracking-[-0.015em] text-white">{item.label}</span>
                  <span className="mt-1 block text-[14px] text-white/55">{item.description}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-white/40 transition-colors duration-300 group-hover:text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
