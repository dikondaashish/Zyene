"use client"

import * as React from "react"
import { motion, animate } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = React.useState(value);

  React.useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.8,
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value, displayValue]);

  return <>{displayValue.toLocaleString()}</>;
}

export function Calculator() {
  const [teamSize, setTeamSize] = React.useState(10)
  const [hoursPerWeek, setHoursPerWeek] = React.useState(13)
  const [hourlyCost, setHourlyCost] = React.useState(40)

  // Computations
  const totalHoursLostPerWeek = teamSize * hoursPerWeek
  const hoursLostPerMonth = totalHoursLostPerWeek * 4
  const costPerMonth = hoursLostPerMonth * hourlyCost
  const potentialSavings = costPerMonth * 0.8

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-semibold text-[#0A1015] tracking-widest uppercase mb-6">ROI Calculator</p>
          <h2 className="text-[36px] md:text-[48px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015] max-w-[800px] mx-auto">
            Quantify the cost of not automating
          </h2>
          <p className="text-[16px] text-[#4A4F59] mt-6 max-w-[600px] mx-auto">
            How many hours per week each team member spends on manual tasks (estimated).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/10 rounded-[4px] overflow-hidden bg-[#F7F8FA] shadow-2xl">
          
          {/* Inputs */}
          <div className="flex flex-col gap-12 p-10 md:p-14 bg-white border-r border-black/10">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <label className="font-medium text-[15px] text-[#4A4F59]">Team Size</label>
                <span className="font-semibold text-[#0A1015] text-[20px]">{teamSize}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-1 bg-black/10 rounded-full appearance-none cursor-pointer accent-brand-blue slider-thumb"
              />
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <label className="font-medium text-[15px] text-[#4A4F59]">Hours lost per week (per person)</label>
                <span className="font-semibold text-[#0A1015] text-[20px]">{hoursPerWeek}h</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-1 bg-black/10 rounded-full appearance-none cursor-pointer accent-brand-blue slider-thumb"
              />
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <label className="font-medium text-[15px] text-[#4A4F59]">Average hourly cost</label>
                <span className="font-semibold text-[#0A1015] text-[20px]">${hourlyCost}</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full h-1 bg-black/10 rounded-full appearance-none cursor-pointer accent-brand-blue slider-thumb"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="flex flex-col justify-center gap-10 p-10 md:p-14 bg-[#F7F8FA]">
            <h3 className="text-[28px] md:text-[36px] font-normal text-[#0A1015] leading-[1.2] tracking-tight">
              You&apos;re losing <span className="text-[#4A4F59]"><AnimatedNumber value={hoursLostPerMonth} /> hours/month</span> to repetitive tasks. That&apos;s <span className="text-[#4A4F59]">${(costPerMonth).toLocaleString()}/month</span> in time costs.
            </h3>
            <div className="h-px w-full bg-black/10" />
            <p className="text-[18px] text-[#4A4F59] leading-[1.6]">
              AI Supply could reclaim 80% of that — saving <span className="text-[#0A1015] font-semibold font-display tracking-tight">${(potentialSavings).toLocaleString()}/month</span>.
            </p>
            <div className="mt-4">
              <Button size="lg" className="w-full" variant="dark" asChild>
                <Link
                  href="/contact"
                  scroll
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  Get a custom automation plan
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <style jsx global>{`
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #0099FF;
            border-radius: 50%;
            cursor: pointer;
            border: 4px solid #FFFFFF;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          input[type='range']::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #0099FF;
            border-radius: 50%;
            cursor: pointer;
            border: 4px solid #FFFFFF;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
        `}</style>
      </div>
    </section>
  )
}
