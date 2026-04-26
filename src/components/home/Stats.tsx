"use client"

import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"

export function Stats() {
  return (
    <section className="py-16 border-b border-brand-border/50 bg-brand-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex -space-x-5">
          {SITE_DATA.statsProfiles.map((imgUrl, i) => (
            <div key={i} className="w-[60px] h-[60px] rounded-full border-4 border-brand-dark overflow-hidden bg-brand-border relative shadow-lg">
              <Image 
                src={imgUrl} 
                alt={`Client ${i}`} 
                fill
                className="object-cover" 
              />
            </div>
          ))}
        </div>
        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="text-[20px] font-medium text-white tracking-tight">Trusted by</p>
          <p className="text-[#0099FF] text-[24px] font-bold tracking-tight">300+ clients</p>
        </div>
      </div>
    </section>
  )
}
