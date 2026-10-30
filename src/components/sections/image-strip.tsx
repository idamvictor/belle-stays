import Image from "next/image"

import { strip } from "@/content/home"

// Endless, slowly scrolling row of interiors. Pauses on hover; static with reduced motion.
export function ImageStrip() {
  return (
    <section aria-label="Interior gallery" className="group overflow-hidden bg-forest">
      <ul className="flex w-max motion-safe:animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...strip, ...strip].map((image, i) => (
          <li key={i} aria-hidden={i >= strip.length} className="relative h-40 w-60 shrink-0 overflow-hidden sm:h-60 sm:w-90">
            <Image
              src={image.src}
              alt={i < strip.length ? image.alt : ""}
              fill
              sizes="360px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
