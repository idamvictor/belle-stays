import Image from "next/image"

import { Accent } from "@/components/accent"
import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"
import { host, intro, site } from "@/content/home"

export function Intro() {
  return (
    <section id="about" className="grid grid-cols-[minmax(0,1fr)] bg-forest text-white lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,740px)]">
      <div className="flex justify-end px-[var(--gutter)] py-20 lg:py-48 lg:pr-28">
        <Reveal className="flex max-w-[520px] flex-col gap-8">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 className="text-display"><Accent text={intro.title} /></h2>
          <p className="text-lg leading-normal lg:text-[22px]">{intro.body}</p>
          <a
            href="#stays"
            className="group w-fit"
            aria-label="Explore our stays"
          >
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

      <div className="relative flex min-h-[480px] items-end justify-end p-5 lg:min-h-[760px] lg:px-[70px] lg:pb-16">
        <Image
          src="/images/intro/building.jpg"
          alt="A Belle Stays building at dusk"
          fill
          sizes="(min-width: 1024px) 740px, 100vw"
          className="object-cover"
        />
        {/* Host card */}
        <div className="relative flex gap-4 border border-white/10 bg-black/20 p-4 backdrop-blur-[20px]">
          <div className="flex w-[230px] flex-col justify-between gap-10">
            <div>
              <p className="font-medium">{host.name}</p>
              <p className="text-xs uppercase">{host.role}</p>
            </div>
            <div className="flex items-start gap-3 text-xs leading-[18px]">
              <a href={host.instagram} target="_blank" rel="noreferrer" aria-label={`${host.name} on Instagram`}>
                <Image src="/icons/social-instagram.svg" alt="" width={35} height={35} />
              </a>
              <a href={`mailto:${site.email}`} className="self-center hover:underline">
                {site.email}
              </a>
            </div>
          </div>
          <Image
            src={host.photo}
            alt={host.name}
            width={90}
            height={127}
            className="h-auto w-[90px] self-start object-cover"
          />
        </div>
      </div>
    </section>
  )
}
