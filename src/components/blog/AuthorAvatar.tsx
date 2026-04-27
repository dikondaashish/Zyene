"use client"

import { useState } from "react"
import Image from "next/image"
import type { BlogAuthor } from "@/lib/blog-posts"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export function AuthorAvatar({ author, size = 36 }: { author: BlogAuthor; size?: number }) {
  const [imgError, setImgError] = useState(false)
  const initials = getInitials(author.name)
  const fontSize = Math.round(size * 0.36)

  if (imgError) {
    return (
      <div
        aria-label={author.name}
        className="flex shrink-0 items-center justify-center rounded-full bg-[#0A1015] font-semibold text-white"
        style={{ width: size, height: size, fontSize }}
      >
        {initials}
      </div>
    )
  }

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border border-[#E3E8EF]"
      style={{ width: size, height: size }}
    >
      <Image
        src={author.avatar}
        alt={author.name}
        fill
        className="object-cover"
        sizes={`${size}px`}
        onError={() => setImgError(true)}
      />
    </div>
  )
}
