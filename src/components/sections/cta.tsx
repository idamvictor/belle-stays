import Image from "next/image"

import { LeadButton } from "@/components/leads/lead-button"
import { Reveal } from "@/components/reveal"
import { cta } from "@/content/home"

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-[#5c5f60]">
      <Image src="/images/cta/wall.jpg" alt="" fill sizes="100vw" className="object-cover" />
      {/* Second frame of the leaf shadow fades in and out so the shadows seem to sway */}
      <Image
        src="/images/cta/shadow.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-0 motion-safe:animate-[shadow-sway_9s_ease-in-out_infinite]"
      />
      <Reveal className="relative mx-auto flex max-w-[700px] flex-col items-center gap-16 px-5 pt-24 pb-20 text-center lg:pt-32 lg:pb-16">
        <h2 id="cta-title" className="text-display text-white">
          {cta.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <LeadButton kind="booking" variant="outline-light" size="cta-lg" className="backdrop-blur-sm">
            Book Your Stay
            <Image src="/icons/calendar.svg" alt="" width={26} height={26} />
          </LeadButton>
          <LeadButton kind="callback" variant="brand" size="cta-lg">
            Request A Callback
            <Image src="/icons/phone-callback.svg" alt="" width={26} height={26} />
          </LeadButton>
        </div>
      </Reveal>
    </section>
  )
}
