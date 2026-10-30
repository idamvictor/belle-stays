import { Reveal } from "@/components/reveal"
import { features } from "@/content/home"

export function Features() {
  return (
    <section id="features" aria-label="What every stay includes" className="bg-sand pt-16 pb-4 lg:pt-32 lg:pb-16">
      <ul className="container-site grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <li key={feature.title} className="pb-12 lg:pb-16">
            <Reveal delay={i * 100} className="flex flex-col gap-4">
              <feature.icon aria-hidden className="size-12 stroke-[1.25] text-copper" />
              <h3 className="text-sm leading-[22.75px] font-bold text-forest uppercase">{feature.title}</h3>
              <p className="max-w-[300px] text-ink">{feature.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
