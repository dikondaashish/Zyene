"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Reveal } from "@/components/ui/Reveal"

export function Hiring() {
  return (
    <section className="bg-white">
      <div className="zy-container pb-24 md:pb-32">
        <Reveal className="grid gap-8 rounded-[28px] bg-[#0A1015] p-8 text-white md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:p-14">
          <div>
            <h2 className="zy-display text-[clamp(32px,4vw,52px)] text-white">Come build with us.</h2>
            <p className="mt-5 max-w-[560px] text-[17px] leading-[1.6] text-white/65">
              A small, remote-friendly team building production AI for industrial operations. Everyone here ships,
              owns outcomes, and works directly with customers.
            </p>
          </div>
          <Button variant="primary" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/careers">
              View open roles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
