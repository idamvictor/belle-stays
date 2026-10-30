"use client"

import Image from "next/image"
import { useState } from "react"

import { LeadButton } from "@/components/leads/lead-button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { stayTypes } from "@/content/home"
import { cn } from "@/lib/utils"

type StayType = (typeof stayTypes)[number]

function InfoBar({ stay, className }: { stay: StayType; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-6 border border-white/10 bg-black/20 p-6 text-white backdrop-blur-[20px]",
        className
      )}
    >
      <dl className="flex flex-wrap gap-x-12 gap-y-4">
        <div>
          <dt className="text-xs uppercase">Sleeps</dt>
          <dd className="text-[32px] leading-[1.3] font-medium tracking-[-1px]">{stay.sleeps}</dd>
        </div>
        <div className="border-l border-white/10 pl-6">
          <dt className="text-xs uppercase">Nightly rates</dt>
          <dd className="text-[32px] leading-[1.3] font-medium tracking-[-1px]">On request</dd>
        </div>
      </dl>
      <LeadButton kind="booking" stay={stay.option} variant="brand" size="cta">
        Check Availability
        <Image src="/icons/availability.svg" alt="" width={22} height={22} />
      </LeadButton>
    </div>
  )
}

export function StayTypes() {
  const [active, setActive] = useState(1)

  return (
    <section id="stays" aria-label="Types of stay" className="bg-forest">
      {/* Desktop: expanding panels */}
      <div className="hidden h-[900px] lg:flex">
        {stayTypes.map((stay, i) => {
          const isActive = i === active
          return (
            <div
              key={stay.name}
              onMouseEnter={() => setActive(i)}
              className={cn(
                "relative overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
                isActive ? "grow-[4.67]" : "grow"
              )}
              style={{ flexBasis: 0 }}
            >
              <Image
                src={stay.image}
                alt=""
                fill
                sizes="70vw"
                className={cn("object-cover transition-transform duration-1000", isActive && "scale-105")}
              />
              <div
                aria-hidden
                className={cn("absolute inset-0 bg-black/60 transition-opacity duration-700", isActive && "opacity-0")}
              />
              <h3 className="absolute inset-0 text-2xl font-bold text-white uppercase">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-expanded={isActive}
                  className="grid size-full place-items-center uppercase"
                >
                  {stay.name}
                </button>
              </h3>
              <div
                className={cn(
                  "absolute inset-x-10 bottom-5 transition-all duration-500",
                  isActive ? "translate-y-0 opacity-100 delay-300" : "pointer-events-none translate-y-6 opacity-0"
                )}
                inert={!isActive}
              >
                <InfoBar stay={stay} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile and tablet: swipeable cards */}
      <Carousel opts={{ align: "start" }} className="lg:hidden">
        <CarouselContent className="ml-0">
          {stayTypes.map((stay) => (
            <CarouselItem key={stay.name} className="pl-0">
              <div className="relative flex aspect-[3/4] flex-col justify-between p-4 sm:aspect-[4/3]">
                <Image src={stay.image} alt="" fill sizes="100vw" className="object-cover" />
                <h3 className="relative pt-20 text-center text-2xl font-bold text-white uppercase">{stay.name}</h3>
                <InfoBar stay={stay} className="relative p-4 [&_dd]:text-2xl" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-1/3 left-4 size-11 border-none bg-white/90" />
        <CarouselNext className="top-1/3 right-4 size-11 border-none bg-white/90" />
      </Carousel>
    </section>
  )
}
