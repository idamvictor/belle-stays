import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import { HeroVideo } from "@/components/sections/hero-video"
import { Wordmark } from "@/components/site/wordmark"
import { hero, site } from "@/content/home"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-forest pt-24 lg:pt-32">
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
        {site.name}: {hero.title.join(" ")}
      </h1>

      {/* Giant wordmark, partly hidden behind the building */}
      <div className="relative mt-4 flex justify-center px-4 lg:mt-8">
        <Wordmark className="text-[clamp(40px,9.2vw,134px)] tracking-[0.02em] text-white" />
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
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </p>
            <p className="flex items-center gap-2">
              <Image src="/icons/location.svg" alt="" width={27} height={28} />
              {hero.location}
            </p>
          </div>
        </div>
      </div>

      {/* Headline in the flow on small screens */}
      <div className="relative z-20 bg-forest px-[var(--gutter)] py-10 text-white md:hidden">
        <p className="text-display">
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </p>
        <p className="mt-4 flex items-center gap-2 text-sm">
          <Image src="/icons/location.svg" alt="" width={20} height={21} />
          {hero.location}
        </p>
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
            <p className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-[1.3] tracking-[-1px]">{hero.pitch}</p>
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
