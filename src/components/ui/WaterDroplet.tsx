"use client"

import React, { useId } from "react"
import { motion } from "framer-motion"

interface WaterDropletProps {
  /** Size of the droplet in pixels */
  size?: number
  /** Animation keyframes for x position */
  xKeyframes?: number[]
  /** Animation keyframes for y position */
  yKeyframes?: number[]
  /** Duration of the full animation loop in seconds */
  duration?: number
  /** Displacement scale — higher = more visible refraction (30–80 recommended) */
  displacementScale?: number
  /** Additional className */
  className?: string
}

/**
 * A refractive "liquid glass" water droplet that distorts background content
 * using SVG feDisplacementMap filters — matching the Framer liquid-glass effect.
 */
export function WaterDroplet({
  size = 120,
  xKeyframes = [40, 160, 60, 140, 40],
  yKeyframes = [20, 200, 60, 240, 20],
  duration = 14,
  displacementScale = 60,
  className = "",
}: WaterDropletProps) {
  const filterId = useId().replace(/:/g, "")

  return (
    <>
      {/* SVG Filter Definition — scoped per instance */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute", pointerEvents: "none" }}
        aria-hidden
      >
        <defs>
          <filter
            id={`liquid-glass-${filterId}`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            {/* Radial displacement map: R channel = horizontal, G channel = vertical */}
            <feImage
              href={`data:image/svg+xml,${encodeURIComponent(`
                <svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="rg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="rgb(200,200,128)"/>
                      <stop offset="60%" stop-color="rgb(128,128,128)"/>
                      <stop offset="100%" stop-color="rgb(128,128,128)"/>
                    </radialGradient>
                  </defs>
                  <rect width="${size}" height="${size}" fill="rgb(128,128,128)"/>
                  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.42}" fill="url(#rg)"/>
                </svg>
              `)}`}
              x="0"
              y="0"
              width="100%"
              height="100%"
              result="dispMap"
            />
            {/* Displacement — maps R→X, G→Y */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="dispMap"
              scale={displacementScale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* Very subtle smoothing to remove aliasing */}
            <feGaussianBlur in="displaced" stdDeviation="0.3" />
          </filter>
        </defs>
      </svg>

      {/* The droplet element */}
      <motion.div
        animate={{
          x: xKeyframes,
          y: yKeyframes,
          rotate: [-2, 2, -1.5, 1, -2],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute pointer-events-none z-20 ${className}`}
        style={{ width: size, height: size }}
      >
        {/* Outer wrapper for positioning */}
        <div className="relative w-full h-full">
          {/* Glass body — applies the SVG displacement filter as backdrop-filter */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: `url(#liquid-glass-${filterId})`,
              WebkitBackdropFilter: `url(#liquid-glass-${filterId})`,
            }}
          />

          {/* Gradient border (Framer-style) — mask trick for transparent inner */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(315deg, rgba(120,120,120,0.7) 0%, rgba(120,120,120,0) 30%, rgba(120,120,120,0) 70%, rgba(120,120,120,0.7) 100%)",
              WebkitMask:
                "linear-gradient(#fff 0, #fff 0) padding-box, linear-gradient(#fff 0, #fff 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              border: "1px solid transparent",
              boxSizing: "border-box",
            }}
          />

          {/* Top-left specular highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: "12%",
              left: "18%",
              width: "35%",
              height: "22%",
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)",
              transform: "rotate(-25deg)",
              filter: "blur(1px)",
            }}
          />

          {/* Subtle rim light around the whole edge */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "inset 0 2px 8px rgba(255,255,255,0.35), inset 0 -1px 4px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.08)",
            }}
          />

          {/* Bottom-right secondary caustic */}
          <div
            className="absolute rounded-full"
            style={{
              bottom: "18%",
              right: "22%",
              width: "14%",
              height: "10%",
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 80%)",
              filter: "blur(2px)",
            }}
          />
        </div>
      </motion.div>
    </>
  )
}
