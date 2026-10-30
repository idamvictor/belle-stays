"use client"

import { useEffect, useState } from "react"

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { included } from "@/content/home"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 4000

// Glass card that cycles through what every stay includes.
export function IncludedCard() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [api, paused])

  return (
    <div
      className="relative w-full max-w-[360px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ loop: true }} className="bg-black/20 backdrop-blur-[20px]">
        <CarouselContent className="ml-0">
          {included.items.map((item, i) => (
            <CarouselItem key={item.label} className="pl-0">
              <div className="flex flex-col items-center gap-[22px] py-24 text-white lg:py-32">
                <div className="relative grid size-32 place-items-center">
                  <span
                    aria-hidden
                    style={{ "--p": i === current ? "100%" : "0%" } as React.CSSProperties}
                    className="absolute inset-0 rounded-full transition-[--p] duration-[1600ms] ease-out [background:conic-gradient(from_0deg,#fff_0%,#ad7851_var(--p),rgb(255_255_255/0.15)_var(--p))] [mask:radial-gradient(farthest-side,transparent_calc(100%-6px),#000_calc(100%-5px))]"
                  />
                  <item.icon aria-hidden className="size-12 stroke-[1.25]" />
                </div>
                <p className="text-lg uppercase">{item.label}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-x-0 -bottom-8 flex justify-center gap-4">
        {included.items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Show ${item.label.toLowerCase()}`}
            aria-current={i === current}
            className={cn("size-2 rounded-full transition-colors", i === current ? "bg-copper" : "bg-white")}
          />
        ))}
      </div>
    </div>
  )
}
