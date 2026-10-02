"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Reveal, RevealText } from "@/components/ui/Reveal"

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

type SliderProps = {
  id: string
  label: string
  value: number
  display: string
  min: number
  max: number
  step?: number
  onChange: (value: number) => void
}

function Slider({ id, label, value, display, min, max, step = 1, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[15px] text-[#4B525C]">
          {label}
        </label>
        <span className="font-mono text-[18px] text-[#0A1015]">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-[#0A1015]/10 accent-[#0A1015]"
      />
    </div>
  )
}

export function Calculator() {
  const [teamSize, setTeamSize] = React.useState(10)
  const [hoursPerWeek, setHoursPerWeek] = React.useState(13)
  const [hourlyCost, setHourlyCost] = React.useState(40)

  const hoursPerMonth = teamSize * hoursPerWeek * 4
  const costPerMonth = hoursPerMonth * hourlyCost

  return (
    <section className="border-t border-line bg-white">
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <RevealText
            text="Estimate the cost of manual work."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[440px] text-[17px] leading-[1.6] text-[#4B525C]">
              Enter your own numbers. This is the cost of the time you describe, not a promised saving. A pilot
              measures how much of it a workflow actually gives back.
            </p>
          </Reveal>
        </div>

        <Reveal className="overflow-hidden rounded-[24px] border border-line">
          <div className="grid gap-9 bg-white p-7 md:p-10">
            <Slider
              id="calc-team"
              label="People doing this work"
              value={teamSize}
              display={String(teamSize)}
              min={1}
              max={100}
              onChange={setTeamSize}
            />
            <Slider
              id="calc-hours"
              label="Hours per person, per week"
              value={hoursPerWeek}
              display={`${hoursPerWeek}h`}
              min={1}
              max={40}
              onChange={setHoursPerWeek}
            />
            <Slider
              id="calc-cost"
              label="Loaded hourly cost"
              value={hourlyCost}
              display={usd.format(hourlyCost)}
              min={10}
              max={200}
              step={5}
              onChange={setHourlyCost}
            />
          </div>
          <div className="border-t border-line bg-paper p-7 md:p-10" aria-live="polite">
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A8F98]">Each month</p>
            <p className="mt-4 text-[28px] font-medium leading-[1.2] tracking-[-0.025em] text-[#0A1015] md:text-[34px]">
              {hoursPerMonth.toLocaleString("en-US")} hours, about {usd.format(costPerMonth)} in time.
            </p>
            <Button variant="dark" size="lg" className="mt-8" asChild>
              <Link href="/contact">Book an Assessment</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
