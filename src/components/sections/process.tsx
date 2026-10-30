"use client"

import Image from "next/image"
import { useState } from "react"

import { Accent } from "@/components/accent"
import { Eyebrow } from "@/components/eyebrow"
import { journey } from "@/content/home"
import { cn } from "@/lib/utils"

// Three steps; the hovered/focused card widens and reveals its description.
export function Process() {
  const [active, setActive] = useState(1)

  return (
    <section aria-labelledby="process-title" className="bg-sand py-20 lg:py-32">
      <div className="container-site">
        <h2 id="process-title" className="text-title mx-auto max-w-[650px] text-center text-ink">
          <Accent text={journey.title} />
        </h2>
        <ol className="mt-12 flex flex-col gap-2.5 lg:mt-14 lg:h-[400px] lg:flex-row">
          {journey.steps.map((step, i) => {
            const isActive = i === active
            return (
              <li
                key={step.title}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "group relative flex min-h-[260px] flex-col justify-between overflow-hidden bg-white p-8 outline-none focus-visible:ring-2 focus-visible:ring-copper lg:min-h-0 lg:basis-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.65,0,0.35,1)]",
                  isActive ? "lg:grow-3" : "lg:grow"
                )}
              >
                <Image src={step.icon} alt="" width={64} height={64} className="self-end" />
                <div className="flex flex-col gap-[22px]">
                  <Eyebrow size="sm">{step.step}</Eyebrow>
                  <h3 className="font-heading text-[40px] leading-[1.1] font-medium text-forest">{step.title}</h3>
                  <p
                    className={cn(
                      "max-w-[450px] leading-[1.8] text-forest lg:transition-all lg:duration-500",
                      isActive ? "lg:opacity-100 lg:delay-200" : "lg:pointer-events-none lg:absolute lg:opacity-0"
                    )}
                  >
                    {step.text}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
