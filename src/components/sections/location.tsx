"use client"

import dynamic from "next/dynamic"

// Leaflet needs `window`, so the map only renders in the browser.
const LocationMap = dynamic(() => import("@/components/sections/location-map"), {
  ssr: false,
  loading: () => <div className="size-full animate-pulse bg-[#eeeeec]" />,
})

export function Location() {
  return (
    <section id="location" aria-label="Location and neighbourhood" className="h-[480px] bg-[#eeeeec] sm:h-auto sm:aspect-[1440/570]">
      <LocationMap />
    </section>
  )
}
