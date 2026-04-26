import * as React from "react"
import { cn } from "@/lib/utils"

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-brand-border bg-white/[0.02] backdrop-blur-md shadow-lg",
        className
      )}
      {...props}
    />
  )
}
