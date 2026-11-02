import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import { Accent, plain } from "@/components/accent"
import { HeroVideo } from "@/components/sections/hero-video"
import { Wordmark } from "@/components/site/wordmark"
import { hero, site } from "@/content/home"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-forest pt-32 lg:pt-40">
      {/* Sky */}
      <Image
        src="/images/hero/sky.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-forest to-transparent" />

      <h1 className="sr-only">
        {site.name}: {plain(hero.title.join(" "))}
      </h1>

      {/* Giant wordmark, partly hidden behind the building */}
      <div className="relative mt-4 flex justify-center px-4 lg:mt-8">
        <Wordmark className="text-[clamp(44px,10.4vw,152px)] text-white" />
      </div>

      {/* Building cut-out with the headline over it */}
      <div className="relative z-10 -mt-[7.5vw]">
        <Image
          src="/images/hero/building.png"
          alt="A Belle Stays building surrounded by trees"
          width={1920}
          height={1581}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
        <div className="container-site absolute inset-x-0 top-[14%] hidden md:block">
          <div className="ml-auto flex w-1/2 flex-col items-end gap-8 text-right text-white">
            <p className="text-display">
              <Accent text={hero.title[0]} />
              <br />
              <Accent text={hero.title[1]} />
            </p>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-copper">
              <Image src="/icons/location.svg" alt="" width={27} height={28} />
              {hero.location}
            </a>
          </div>
        </div>
      </div>

      {/* Headline in the flow on small screens */}
      <div className="relative z-20 bg-forest px-[var(--gutter)] py-10 text-white md:hidden">
        <p className="text-display">
          <Accent text={hero.title[0]} />
          <br />
          <Accent text={hero.title[1]} />
        </p>
        <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 flex w-fit items-center gap-2 text-sm transition-colors hover:text-copper">
          <Image src="/icons/location.svg" alt="" width={20} height={21} />
          {hero.location}
        </a>
      </div>

      {/* Host card + photo card */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1340px] md:-mt-[23.6vw] md:grid-cols-2 md:px-[50px] min-[1440px]:-mt-[340px]">
        <div className="flex min-h-[335px] items-end justify-between gap-4 bg-copper px-5 md:px-[30px]">
          <Image
            src="/images/hero/agent.png"
            alt="A member of the Belle Stays guest team"
            width={212}
            height={319}
            className="hidden h-auto w-[clamp(140px,15vw,212px)] self-end sm:block"
          />
          <div className="flex max-w-[367px] flex-col justify-between gap-10 self-stretch py-8 text-white">
            <p className="font-heading text-[clamp(1.75rem,1.4rem+1.3vw,2.5rem)] leading-[1.15] font-medium">{hero.pitch}</p>
            <a href="#stays" className="group flex items-center gap-3 self-end text-sm font-medium uppercase">
              Explore our stays
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <HeroVideo />
      </div>
    </section>
  )
}
