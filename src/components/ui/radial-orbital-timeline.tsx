"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

interface TimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: React.ElementType
  relatedIds: number[]
  status: "completed" | "in-progress" | "pending"
  energy: number
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[]
}

function StatusBadge({ status }: { status: TimelineItem["status"] }) {
  const cls =
    status === "completed"
      ? "bg-white text-[#0A1015]"
      : status === "in-progress"
      ? "bg-[#0A1015] text-white border border-white/30"
      : "bg-white/10 text-white border border-white/25"

  const label =
    status === "completed"
      ? "COMPLETE"
      : status === "in-progress"
      ? "IN PROGRESS"
      : "PENDING"

  return (
    <span className={cn("text-[10px] px-2 py-1 rounded-[4px] font-semibold tracking-wide", cls)}>
      {label}
    </span>
  )
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = React.useState<Record<number, boolean>>({})
  const [rotationAngle, setRotationAngle] = React.useState(0)
  const [autoRotate, setAutoRotate] = React.useState(true)
  const [pulseEffect, setPulseEffect] = React.useState<Record<number, boolean>>({})
  const [activeNodeId, setActiveNodeId] = React.useState<number | null>(null)
  const [isDesktop, setIsDesktop] = React.useState(false)

  const containerRef = React.useRef<HTMLDivElement>(null)
  const nodeRefs = React.useRef<Record<number, HTMLDivElement | null>>({})

  React.useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  React.useEffect(() => {
    if (!isDesktop || !autoRotate) return
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.18) % 360).toFixed(3)))
    }, 36)
    return () => clearInterval(timer)
  }, [autoRotate, isDesktop])

  const getRelatedItems = (itemId: number) =>
    timelineData.find((item) => item.id === itemId)?.relatedIds || []

  const isRelatedToActive = (itemId: number) =>
    activeNodeId ? getRelatedItems(activeNodeId).includes(itemId) : false

  const centerViewOnNode = (nodeId: number) => {
    if (!isDesktop || !nodeRefs.current[nodeId]) return
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId)
    const totalNodes = timelineData.length
    const targetAngle = (nodeIndex / totalNodes) * 360
    setRotationAngle(270 - targetAngle)
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const next: Record<number, boolean> = {}
      const willOpen = !prev[id]
      timelineData.forEach((item) => {
        next[item.id] = item.id === id ? willOpen : false
      })

      if (willOpen) {
        setActiveNodeId(id)
        setAutoRotate(false)
        centerViewOnNode(id)
        const pulse: Record<number, boolean> = {}
        getRelatedItems(id).forEach((relId) => {
          pulse[relId] = true
        })
        setPulseEffect(pulse)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }

      return next
    })
  }

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radius = 220
    const radian = (angle * Math.PI) / 180
    const x = radius * Math.cos(radian)
    const y = radius * Math.sin(radian)
    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.42, Math.min(1, 0.42 + 0.58 * ((1 + Math.sin(radian)) / 2)))
    return { x, y, zIndex, opacity }
  }

  if (!isDesktop) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {timelineData.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="rounded-[10px] border border-[#E5EAF0] bg-[#F8FAFC] p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0A1015] text-white flex items-center justify-center">
                    <Icon size={14} />
                  </div>
                  <p className="text-[14px] font-semibold text-[#0A1015]">{item.title}</p>
                </div>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-[13px] text-[#4A4F59]">{item.content}</p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className="w-full h-[760px] rounded-[14px] border border-[#1A2129] bg-[#0A1015] overflow-hidden relative"
      ref={containerRef}
      onClick={(e) => {
        if (e.target === containerRef.current) {
          setExpandedItems({})
          setActiveNodeId(null)
          setPulseEffect({})
          setAutoRotate(true)
        }
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[440px] h-[440px] rounded-full border border-white/8" />
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#0A1015] via-[#1B2C3B] to-[#0099FF] animate-pulse flex items-center justify-center z-10">
          <div className="absolute w-20 h-20 rounded-full border border-[#0099FF]/30 animate-ping opacity-70" />
          <div
            className="absolute w-24 h-24 rounded-full border border-[#0099FF]/20 animate-ping opacity-50"
            style={{ animationDelay: "0.5s" }}
          />
          <div className="relative w-8 h-8 rounded-full bg-white/90 overflow-hidden flex items-center justify-center">
            <div className="relative w-6 h-6">
              <Image src="/images/Logo_Black.png" alt="Zyene logo" fill className="object-contain" />
            </div>
          </div>
        </div>

        {timelineData.map((item, index) => {
          const pos = calculateNodePosition(index, timelineData.length)
          const isExpanded = expandedItems[item.id]
          const isRelated = isRelatedToActive(item.id)
          const isPulsing = pulseEffect[item.id]
          const Icon = item.icon

          return (
            <div
              key={item.id}
              ref={(el) => {
                nodeRefs.current[item.id] = el
              }}
              className="absolute transition-all duration-500 cursor-pointer"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                zIndex: isExpanded ? 200 : pos.zIndex,
                opacity: isExpanded ? 1 : pos.opacity,
              }}
              onClick={(e) => {
                e.stopPropagation()
                toggleItem(item.id)
              }}
            >
              <div
                className={cn("absolute rounded-full -inset-1", isPulsing ? "animate-pulse" : "")}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                  width: `${item.energy * 0.5 + 40}px`,
                  height: `${item.energy * 0.5 + 40}px`,
                  left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                }}
              />

              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  isExpanded
                    ? "bg-white text-[#0A1015] border-white scale-150 shadow-[0_0_18px_rgba(0,153,255,0.35)]"
                    : isRelated
                    ? "bg-[#D9EEFF] text-[#0A1015] border-[#9FD4FF] animate-pulse"
                    : "bg-[#0A1015] text-white border-white/35"
                )}
              >
                <Icon size={16} />
              </div>

              <div
                className={cn(
                  "absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300",
                  isExpanded ? "text-white scale-110" : "text-white/70"
                )}
              >
                {item.title}
              </div>

              {isExpanded && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 rounded-[10px] border border-white/20 bg-black/90 backdrop-blur-lg shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                  <div className="p-4 pb-3">
                    <div className="flex justify-between items-center">
                      <StatusBadge status={item.status} />
                      <span className="text-xs font-mono text-white/50">{item.date}</span>
                    </div>
                    <h4 className="text-sm mt-2 font-semibold text-white">{item.title}</h4>
                  </div>
                  <div className="px-4 pb-4 text-xs text-white/80">
                    <p>{item.content}</p>

                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="flex items-center">
                          <Zap size={10} className="mr-1" />
                          Energy Level
                        </span>
                        <span className="font-mono">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0A1015] to-[#0099FF]"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex items-center mb-2">
                          <LinkIcon size={10} className="text-white/70 mr-1" />
                          <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                            Connected Nodes
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relatedId) => {
                            const related = timelineData.find((i) => i.id === relatedId)
                            return (
                              <Button
                                key={relatedId}
                                variant="secondary"
                                size="sm"
                                className="h-6 px-2 py-0 text-xs rounded-[4px] border border-white/20 bg-transparent hover:bg-[#0099FF]/20 text-white/80 hover:text-white"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleItem(relatedId)
                                }}
                              >
                                {related?.title}
                                <ArrowRight size={8} className="ml-1 text-white/60" />
                              </Button>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
