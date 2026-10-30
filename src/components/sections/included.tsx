import Image from "next/image"

import { Accent } from "@/components/accent"
import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"
import { IncludedCard } from "@/components/sections/included-card"
import { included } from "@/content/home"

export function Included() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)] bg-sand text-forest lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)]">
      <div className="relative grid min-h-[560px] grid-cols-[minmax(0,1fr)] place-items-center px-5 pt-16 pb-20 lg:min-h-[760px]">
        <Image
          src="/images/material/living.jpg"
          alt="Calm, light-filled living room"
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
        <IncludedCard />
      </div>
      <div className="flex items-center px-[var(--gutter)] py-20 lg:px-[50px] lg:py-48">
        <Reveal className="flex max-w-[550px] flex-col gap-8">
          <Eyebrow>{included.eyebrow}</Eyebrow>
          <h2 className="text-display"><Accent text={included.title} /></h2>
          <p className="text-lg leading-normal lg:text-[22px]">{included.body}</p>
          <a href="#features" className="group w-fit" aria-label="See what every stay includes">
            <Image
              src="/icons/arrow-right.svg"
              alt=""
              width={29}
              height={29}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
