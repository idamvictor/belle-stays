import { UsersRoundIcon } from "lucide-react"
import Image from "next/image"

import { LeadButton } from "@/components/leads/lead-button"
import { Reveal } from "@/components/reveal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { featuredStays, featuredTitle } from "@/content/home"

export function FeaturedStays() {
  return (
    <section id="featured" className="bg-forest py-20 lg:py-32">
      <div className="container-site">
        <h2 className="text-title mx-auto max-w-[650px] text-center text-white">{featuredTitle}</h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {featuredStays.map((stay, i) => (
            <li key={stay.name}>
              <Reveal delay={i * 120} className="flex h-full flex-col bg-white px-5 pt-4 pb-5">
                <Dialog>
                  <DialogTrigger className="group relative block aspect-square w-full overflow-hidden" aria-label={`View the ${stay.name} layout`}>
                    <Image src={stay.plan} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="object-contain" />
                    <Image
                      src={stay.photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                    <span className="absolute bottom-3 left-3 bg-forest/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      View layout
                    </span>
                  </DialogTrigger>
                  <DialogContent className="max-w-[min(760px,calc(100%-2rem))] p-6 sm:max-w-[min(760px,calc(100%-2rem))]">
                    <DialogTitle className="text-subtitle font-normal text-forest">{stay.name}</DialogTitle>
                    <DialogDescription>
                      {stay.type} · {stay.guests} · {stay.beds} · {stay.baths}
                    </DialogDescription>
                    <div className="relative aspect-square w-full">
                      <Image src={stay.plan} alt={`${stay.name} layout`} fill sizes="760px" className="object-contain" />
                    </div>
                  </DialogContent>
                </Dialog>

                <p className="mt-4 text-xs leading-[18.84px] font-bold text-copper uppercase">{stay.type}</p>
                <h3 className="text-subtitle mt-2 text-forest">{stay.name}</h3>
                <p className="mt-2 text-[#343434]/70">{stay.price}</p>
                <hr className="mt-4 border-copper/20" />
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-forest">
                  <li className="flex items-center gap-[7px]">
                    <UsersRoundIcon aria-hidden className="size-[18px] stroke-[1.5]" />
                    {stay.guests}
                  </li>
                  <li className="flex items-center gap-[7px]">
                    <Image src="/icons/bed.svg" alt="" width={18} height={18} />
                    {stay.beds}
                  </li>
                  <li className="flex items-center gap-[7px]">
                    <Image src="/icons/bath.svg" alt="" width={18} height={18} />
                    {stay.baths}
                  </li>
                </ul>
                <LeadButton
                  kind="booking"
                  stay={stay.name}
                  variant="brand"
                  className="mt-5 h-[55px] w-full gap-3 text-[15px] capitalize"
                >
                  Check Availability
                  <Image src="/icons/availability-lg.svg" alt="" width={24} height={24} />
                </LeadButton>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
