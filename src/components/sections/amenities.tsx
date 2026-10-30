import Image from "next/image"

import { Accent } from "@/components/accent"
import { Eyebrow } from "@/components/eyebrow"
import { amenities } from "@/content/home"

// Full-height panels that stick and stack as you scroll.
export function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="bg-forest">
      <h2 id="amenities-title" className="sr-only">
        Amenities
      </h2>
      {amenities.map((amenity, i) => (
        <article
          key={amenity.image}
          className="sticky top-0 h-svh max-h-[900px] min-h-[560px] overflow-hidden"
          style={{ zIndex: i + 1 }}
        >
          <div aria-hidden className="absolute inset-0">
            <Image src={amenity.image} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent to-60%" />
          </div>
          <div className="relative flex items-start gap-4 p-5 sm:p-10 lg:p-16">
            <Image
              src={amenity.icon}
              alt=""
              width={96}
              height={96}
              className="size-16 shrink-0 sm:size-24"
            />
            <div className="flex flex-col gap-4 pt-1 text-white sm:gap-6">
              <Eyebrow tone="white" className="text-xs sm:text-base">
                {amenity.eyebrow}
              </Eyebrow>
              <h3 className="text-display"><Accent text={amenity.title} /></h3>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
