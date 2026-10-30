import { Odometer } from "@/components/odometer"
import { Reveal } from "@/components/reveal"
import { stats } from "@/content/home"

export function Stats() {
  return (
    <section aria-label="Key figures" className="bg-forest pt-16 pb-4 text-white lg:pt-32 lg:pb-16">
      <div className="container-site">
        <Reveal className="lg:ml-[50%] lg:pl-5">
          <p className="text-subtitle max-w-[620px]">{stats.statement}</p>
        </Reveal>
        <dl className="mt-10 grid gap-x-6 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:gap-x-10">
          {stats.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse pb-12 lg:pb-16">
              <dt className="mt-2 border-t border-white/10 pt-[18px] text-xs font-medium uppercase">
                {item.label}
              </dt>
              <dd className="flex items-end gap-2 leading-none">
                {item.prefix && <span className="mb-[0.4em] text-sm lg:text-base">{item.prefix}</span>}
                <Odometer value={item.value} className="text-[clamp(2.75rem,1.5rem+4vw,4.5rem)] leading-[1.2]" />
                <span className="mb-[0.4em] text-sm lg:text-base">{item.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
