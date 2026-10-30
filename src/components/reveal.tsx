"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

// Fades its children up the first time they scroll into view.
// Content is visible by default, so it still shows without JS or with reduced motion.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle")

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Only animate content that starts below the fold.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setState("hidden")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown")
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : undefined }}
      className={cn(
        state !== "idle" && "transition-[opacity,translate] duration-700 ease-out",
        state === "hidden" && "translate-y-8 opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}
