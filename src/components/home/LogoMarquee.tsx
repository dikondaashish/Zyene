"use client"

import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"

export function LogoMarquee() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...SITE_DATA.marqueeLogos, ...SITE_DATA.marqueeLogos, ...SITE_DATA.marqueeLogos]

  return (
    <div className="w-full bg-white py-24 border-y border-black/[0.05] overflow-hidden flex flex-col items-center">
      <p className="text-[#8A8F98] text-[12px] font-medium tracking-[0.2em] uppercase mb-16 opacity-80">
        Trusted by 300+ clients worldwide
      </p>
      
      <div className="relative w-full overflow-hidden">
        {/* Exact Framer Masking */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white opacity-100" />
        
        <div className="flex w-max animate-marquee gap-24 md:gap-32 px-12 items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-[140px] md:w-[180px] h-[40px] md:h-[50px] flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
