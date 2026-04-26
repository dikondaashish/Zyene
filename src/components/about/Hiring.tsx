"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"

export function Hiring() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0A1015] rounded-[24px] overflow-hidden p-8 md:p-16 lg:p-20"
        >
          {/* Background Image Wrapper */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/pattern-bg.png" 
              alt="Hiring Background" 
              fill 
              className="object-cover object-center opacity-60 blur-[100px] scale-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            {/* Left Column: Title Wrapper */}
            <div className="flex flex-col gap-6 lg:max-w-[50%]">
              <div className="space-y-4">
                <p className="text-[13px] font-bold text-white tracking-[0.2em] uppercase">
                  We&apos;re hiring
                </p>
                <h2 className="text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] font-normal tracking-[-0.03em] text-white font-display-serif">
                  Come build with us
                </h2>
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  className="bg-white text-[#0A1015] hover:bg-white/90 border-none px-7 h-[48px] rounded-[8px] font-medium transition-all duration-300 backdrop-blur-[4px]"
                  asChild
                >
                  <Link href="/careers">View open roles</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Description */}
            <div className="flex flex-col gap-6 lg:max-w-[500px]">
              <p className="text-[16px] md:text-[17px] text-white/90 leading-[1.6] font-normal">
                At Zyene, we&apos;re not building just another tool. We&apos;re building the infrastructure for how work will get done in the next decade - powered by intelligent systems and execution workflows that actually get things done.
              </p>
              <p className="text-[16px] md:text-[17px] text-white/90 leading-[1.6] font-normal">
                We&apos;re remote, async-first, and ruthlessly focused on impact. Everyone here ships, owns, and thinks in systems.
              </p>
              <p className="text-[16px] md:text-[17px] text-white/90 leading-[1.6] font-normal">
                We hire like we build: lean, deliberate, and focused on long-term value.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
