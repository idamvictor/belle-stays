import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import { Accent, plain } from "@/components/accent"
import { HeroVideo } from "@/components/sections/hero-video"
import { Wordmark } from "@/components/site/wordmark"
import { hero, site } from "@/content/home"

export function Hero() {
  return (
    <section id="home" className="relative bg-black">
      <h1 className="sr-only">
        {site.name}: {plain(hero.title.join(" "))}
      </h1>

      {/* Full-bleed photo with the name and headline in front of it */}
      <div className="relative isolate flex min-h-[640px] flex-col items-center justify-center overflow-hidden px-[var(--gutter)] pt-36 pb-20 text-center text-white sm:min-h-[720px] lg:min-h-[860px] lg:pt-44 lg:pb-52">
        <Image
          src="/images/hero/home-houses-hd.jpg"
          alt="Modern Belle Stays homes with timber accents under a clear blue sky"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-transparent via-50% to-black" />

        <Wordmark className="text-[clamp(44px,10.4vw,152px)] [text-shadow:0_2px_30px_rgb(0_0_0/0.35)]" />
        <p className="text-display mt-6 [text-shadow:0_2px_24px_rgb(0_0_0/0.4)] lg:mt-8">
          <Accent text={hero.title[0]} />
          <br />
          <Accent text={hero.title[1]} />
        </p>
        <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 flex items-center gap-2 transition-colors hover:text-copper lg:mt-8">
          <Image src="/icons/location.svg" alt="" width={27} height={28} className="size-5 lg:size-7" />
          {hero.location}
        </a>
      </div>

      {/* Host card + photo card */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1340px] md:grid-cols-2 md:px-[50px] lg:-mt-36">
        <div className="flex min-h-[335px] items-end justify-between gap-4 bg-copper px-5 md:px-[30px]">
          <Image
            src="/images/hero/agent.png"
            alt="A member of the Belle Stays guest team"
            width={212}
            height={319}
            className="hidden h-auto w-[clamp(140px,15vw,212px)] self-end sm:block md:hidden lg:block"
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
