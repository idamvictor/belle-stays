"use client"

import Image from "next/image"
import { useState } from "react"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { rooms } from "@/content/home"
import { cn } from "@/lib/utils"

// Room-by-room interior views: tabs swap the photo, "+" hotspots open details.
export function InteriorGallery() {
  const [active, setActive] = useState(1)

  const onKeyDown = (event: React.KeyboardEvent) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0
    if (!step) return
    event.preventDefault()
    const next = (active + step + rooms.length) % rooms.length
    setActive(next)
    document.getElementById(`room-tab-${next}`)?.focus()
  }

  return (
    <section aria-label="Interiors" className="relative aspect-[4/5] max-h-[900px] w-full overflow-hidden bg-forest sm:aspect-[1440/807]">
      {rooms.map((room, i) => (
        <div
          key={room.name}
          id={`room-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`room-tab-${i}`}
          hidden={i !== active}
          className="absolute inset-0 animate-in duration-700 fade-in"
        >
          {i === active && <Image src={room.image} alt={room.alt} fill sizes="100vw" className="object-cover" />}
          {room.hotspots.map((spot) => (
            <Popover key={spot.title}>
              <PopoverTrigger
                className="absolute grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_1px_2px_rgb(0_0_0/0.25)] transition-transform duration-300 hover:scale-110 data-popup-open:rotate-45 sm:size-16"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                aria-label={spot.title}
              >
                <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-white/60 [animation-duration:2.5s]" />
                <Image src="/icons/plus.svg" alt="" width={27} height={28} className="relative" />
              </PopoverTrigger>
              <PopoverContent className="w-64 border-none bg-forest p-4 text-white">
                <p className="font-heading text-xl tracking-[-0.5px]">{spot.title}</p>
                <p className="mt-1 text-sm text-white/80">{spot.text}</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      ))}

      <div
        role="tablist"
        aria-label="Rooms"
        onKeyDown={onKeyDown}
        className="absolute inset-x-4 top-4 mx-auto flex w-fit max-w-[calc(100%-2rem)] overflow-x-auto border border-white/20 bg-black/15 p-2 backdrop-blur-[20px] sm:top-8 sm:p-4"
      >
        {rooms.map((room, i) => (
          <button
            key={room.name}
            id={`room-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`room-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 px-2 py-2 text-sm whitespace-nowrap text-white transition sm:text-base",
              i === active ? "bg-black/15" : "opacity-60 hover:opacity-100"
            )}
          >
            {room.name}
          </button>
        ))}
      </div>
    </section>
  )
}
