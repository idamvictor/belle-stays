"use client"

import Image from "next/image"

import { useLeadDialog } from "@/components/leads/lead-dialog"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { hero } from "@/content/home"

const playButton =
  "relative grid size-[52px] place-items-center rounded-full border border-white/10 bg-black/20 backdrop-blur-[20px] transition-transform duration-300 group-hover:scale-110"

// Video card in the hero. Plays hero.videoUrl in a dialog; until a video is
// set, the card opens the booking dialog instead.
export function HeroVideo() {
  const openLead = useLeadDialog()

  const cover = (
    <>
      <Image
        src="/images/hero/video-cover.jpg"
        alt=""
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className={playButton}>
        {hero.videoUrl ? (
          <Image src="/icons/play.svg" alt="" width={51} height={51} />
        ) : (
          <Image src="/icons/calendar.svg" alt="" width={26} height={26} />
        )}
      </span>
    </>
  )
  const cardClass = "group relative grid min-h-[335px] place-items-center overflow-hidden"

  if (!hero.videoUrl) {
    return (
      <button
        type="button"
        className={cardClass}
        aria-label="Book your stay"
        onClick={() => openLead({ kind: "booking" })}
      >
        {cover}
      </button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger className={cardClass} aria-label="Play the Belle Stays film">
        {cover}
      </DialogTrigger>
      <DialogContent className="aspect-video w-full max-w-[min(1100px,calc(100%-2rem))] bg-black p-0 sm:max-w-[min(1100px,calc(100%-2rem))]">
        <DialogTitle className="sr-only">Belle Stays film</DialogTitle>
        <iframe
          src={hero.videoUrl}
          title="Belle Stays film"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="size-full"
        />
      </DialogContent>
    </Dialog>
  )
}
