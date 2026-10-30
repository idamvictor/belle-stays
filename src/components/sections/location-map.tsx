"use client"

import "leaflet/dist/leaflet.css"

import L from "leaflet"
import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

import { location } from "@/content/home"
import { cn } from "@/lib/utils"

// OpenStreetMap's public tiles need no key but are meant for light use. For
// production, set NEXT_PUBLIC_MAP_TILE_URL to a provider such as MapTiler or Stadia.
const TILE_URL =
  process.env.NEXT_PUBLIC_MAP_TILE_URL ?? "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

function markerIcon(icon: string, tone: "forest" | "copper") {
  const bg = tone === "copper" ? "#ad7851" : "#10322d"
  // Round 64px badge from the design; the copper one gets a pointer tail.
  return L.divIcon({
    className: "",
    iconSize: [64, 64],
    iconAnchor: [32, tone === "copper" ? 76 : 32],
    popupAnchor: [0, tone === "copper" ? -76 : -36],
    html: `<span style="position:relative;display:grid;place-items:center;width:64px;height:64px;border-radius:9999px;background:${bg};box-shadow:0 1px 2px rgb(0 0 0/.25)">
      <img src="${icon}" alt="" width="26" height="26" />
      ${tone === "copper" ? `<span style="position:absolute;top:56px;left:22px;border:10px solid transparent;border-top:20px solid ${bg};border-bottom:0"></span>` : ""}
    </span>`,
  })
}

const buildingIcon = markerIcon("/icons/map-building.svg", "copper")
const placeIcons = location.places.map((place) => markerIcon(place.icon, "forest"))

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap()
  useEffect(() => {
    if (target) map.flyTo(target, 16, { duration: 0.8 })
  }, [map, target])
  return null
}

export default function LocationMap() {
  const [target, setTarget] = useState<[number, number] | null>(null)

  return (
    <div className="relative size-full">
      <MapContainer
        center={location.center}
        zoom={15.5}
        zoomSnap={0.5}
        scrollWheelZoom={false}
        dragging={!L.Browser.mobile}
        className="size-full"
        attributionControl
      >
        <TileLayer attribution={TILE_ATTRIBUTION} url={TILE_URL} />
        <Marker position={location.building.position} icon={buildingIcon} zIndexOffset={1000}>
          <Popup>
            <strong>{location.building.name}</strong>
            <br />
            {location.building.note}
          </Popup>
        </Marker>
        {location.places.map((place, i) => (
          <Marker key={place.name} position={place.position} icon={placeIcons[i]}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.kind}
            </Popup>
          </Marker>
        ))}
        <FlyTo target={target} />
      </MapContainer>

      {/* Legend: jump to each nearby place */}
      <ul className="absolute bottom-4 left-4 z-[400] hidden max-w-xs gap-1 bg-white/95 p-3 text-sm shadow-md backdrop-blur sm:grid">
        {[{ name: location.building.name, kind: location.building.note, position: location.building.position }, ...location.places].map(
          (place) => (
            <li key={place.name}>
              <button
                type="button"
                onClick={() => setTarget([...place.position])}
                className={cn(
                  "flex w-full items-baseline justify-between gap-4 px-2 py-1 text-left transition-colors hover:bg-sand",
                  target && target[0] === place.position[0] && "bg-sand"
                )}
              >
                <span className="font-medium text-forest">{place.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{place.kind}</span>
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
