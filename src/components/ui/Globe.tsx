"use client"

import { useCallback, useEffect, useRef } from "react"
import createGlobe from "cobe"

type Marker = {
  id: string
  location: [number, number]
  label?: string
}

type Arc = {
  id: string
  from: [number, number]
  to: [number, number]
  label?: string
}

type GlobeProps = {
  markers?: Marker[]
  arcs?: Arc[]
  className?: string
  markerColor?: [number, number, number]
  baseColor?: [number, number, number]
  arcColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
  mapBrightness?: number
  markerSize?: number
  markerElevation?: number
  arcWidth?: number
  arcHeight?: number
  speed?: number
  theta?: number
  diffuse?: number
  mapSamples?: number
}

export function Globe({
  markers = [],
  arcs = [],
  className = "",
  markerColor = [0.3, 0.45, 0.85],
  baseColor = [1, 1, 1],
  arcColor = [0.3, 0.45, 0.85],
  glowColor = [0.94, 0.93, 0.91],
  dark = 0,
  mapBrightness = 10,
  markerSize = 0.025,
  markerElevation = 0.01,
  arcWidth = 0.5,
  arcHeight = 0.25,
  speed = 0.003,
  theta = 0.2,
  diffuse = 1.5,
  mapSamples = 16000,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const velocity = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const markerDataRef = useRef(markers)
  const arcDataRef = useRef(arcs)

  markerDataRef.current = markers
  arcDataRef.current = arcs

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!pointerInteracting.current) return

    const deltaX = e.clientX - pointerInteracting.current.x
    const deltaY = e.clientY - pointerInteracting.current.y
    dragOffset.current = { phi: deltaX / 300, theta: deltaY / 1000 }

    const now = Date.now()
    if (lastPointer.current) {
      const dt = Math.max(now - lastPointer.current.t, 1)
      const maxVelocity = 0.15
      velocity.current = {
        phi: Math.max(-maxVelocity, Math.min(maxVelocity, ((e.clientX - lastPointer.current.x) / dt) * 0.3)),
        theta: Math.max(-maxVelocity, Math.min(maxVelocity, ((e.clientY - lastPointer.current.y) / dt) * 0.08)),
      }
    }
    lastPointer.current = { x: e.clientX, y: e.clientY, t: now }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
      lastPointer.current = null
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId = 0
    let resizeObserver: ResizeObserver | null = null
    let phi = 0

    const init = () => {
      if (!canvas) return
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markerElevation,
        markers: markerDataRef.current.map((m) => ({ location: m.location, size: markerSize, id: m.id })),
        arcs: arcDataRef.current.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor,
        arcWidth,
        arcHeight,
        opacity: 0.85,
      })

      const animate = () => {
        if (!globe) return

        if (!isPausedRef.current) {
          phi += speed
          if (Math.abs(velocity.current.phi) > 0.0001 || Math.abs(velocity.current.theta) > 0.0001) {
            phiOffsetRef.current += velocity.current.phi
            thetaOffsetRef.current += velocity.current.theta
            velocity.current.phi *= 0.95
            velocity.current.theta *= 0.95
          }

          const thetaMin = -0.4
          const thetaMax = 0.4
          if (thetaOffsetRef.current < thetaMin) {
            thetaOffsetRef.current += (thetaMin - thetaOffsetRef.current) * 0.1
          } else if (thetaOffsetRef.current > thetaMax) {
            thetaOffsetRef.current += (thetaMax - thetaOffsetRef.current) * 0.1
          }
        }

        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: theta + thetaOffsetRef.current + dragOffset.current.theta,
          dark,
          mapBrightness,
          markerColor,
          baseColor,
          arcColor,
          markerElevation,
          markers: markerDataRef.current.map((m) => ({ location: m.location, size: markerSize, id: m.id })),
          arcs: arcDataRef.current.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        })
        animationId = requestAnimationFrame(animate)
      }

      animate()
      canvas.style.opacity = "1"
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver?.disconnect()
          init()
        }
      })
      resizeObserver.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (resizeObserver) resizeObserver.disconnect()
      if (globe) globe.destroy()
    }
  }, [
    theta,
    dark,
    diffuse,
    mapSamples,
    mapBrightness,
    baseColor,
    markerColor,
    glowColor,
    markerElevation,
    markerSize,
    arcColor,
    arcWidth,
    arcHeight,
    speed,
  ])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />

      {markers
        .filter((m) => m.label)
        .map((m) => (
          <div
            key={m.id}
            style={{
              position: "absolute",
              // @ts-ignore CSS Anchor Positioning
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 8,
              padding: "2px 6px",
              background: "#111A23",
              color: "#fff",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.8s, filter 0.8s",
              borderRadius: "4px",
              zIndex: 10,
            }}
          >
            {m.label}
            <span
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translate3d(-50%, -1px, 0)",
                border: "5px solid transparent",
                borderTopColor: "#111A23",
              }}
            />
          </div>
        ))}

      {arcs
        .filter((a) => a.label)
        .map((a) => (
          <div
            key={a.id}
            style={{
              position: "absolute",
              // @ts-ignore CSS Anchor Positioning
              positionAnchor: `--cobe-arc-${a.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 8,
              padding: "2px 6px",
              background: "#fff",
              color: "#0A1015",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              boxShadow: "0 2px 8px rgba(10,16,21,0.12)",
              opacity: `var(--cobe-visible-arc-${a.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-arc-${a.id}, 0)) * 8px))`,
              transition: "opacity 0.8s, filter 0.8s",
              borderRadius: "4px",
              zIndex: 10,
            }}
          >
            {a.label}
            <span
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translate3d(-50%, -1px, 0)",
                border: "5px solid transparent",
                borderTopColor: "#fff",
              }}
            />
          </div>
        ))}
    </div>
  )
}
