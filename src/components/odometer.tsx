"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const DIGITS = "0123456789"

// Rolls each digit up from 0 when the number first scrolls into view, like the
// odometer in the design. The real value is rendered on the server, so it
// shows correctly without JS and nothing shifts when it hydrates.
export function Odometer({
  value,
  className,
  replay,
}: {
  value: string
  className?: string
  // Change this key to roll the digits again (e.g. when a slide becomes active).
  replay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [rolled, setRolled] = useState(true)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    setAnimate(false)
    setRolled(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        // Next frame so the reset to 0 paints before the roll starts.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimate(true)
            setRolled(true)
          })
        )
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [replay])

  return (
    <span ref={ref} className={cn("inline-flex", className)}>
      <span className="sr-only">{value}</span>
      {value.split("").map((char, i) => {
        const digit = DIGITS.indexOf(char)
        if (digit === -1) {
          return (
            <span key={i} aria-hidden>
              {char}
            </span>
          )
        }
        return (
          <span key={i} aria-hidden className="relative inline-block h-[1.2em] overflow-hidden">
            <span
              className={cn(
                "flex flex-col",
                animate && "transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              )}
              style={{
                transform: `translateY(-${(rolled ? digit : 0) * 1.2}em)`,
                transitionDelay: animate ? `${i * 90}ms` : undefined,
              }}
            >
              {DIGITS.split("").map((d) => (
                <span key={d} className="block h-[1.2em] text-center">
                  {d}
                </span>
              ))}
            </span>
          </span>
        )
      })}
    </span>
  )
}
