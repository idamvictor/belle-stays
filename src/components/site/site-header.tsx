"use client"

import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { LeadButton } from "@/components/leads/lead-button"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav, site } from "@/content/home"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"

const sectionIds = nav.map((item) => item.href.slice(1))

export function SiteHeader() {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      // Tuck the header away while scrolling down, bring it back on the way up.
      setHidden(y > 600 && y > lastY)
      lastY = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-2 z-40 mx-auto w-[calc(100%-1rem)] max-w-[840px] transition-transform duration-500 ease-out sm:top-4",
        hidden && "-translate-y-[calc(100%+1.5rem)] focus-within:translate-y-0"
      )}
    >
      <div
        className={cn(
          "flex min-h-16 items-center gap-6 px-5 py-2 backdrop-blur-[20px] transition-colors duration-500 lg:min-h-24",
          scrolled ? "bg-forest/85" : "bg-black/15"
        )}
      >
        <a href="#home" className="shrink-0" aria-label={`${site.name} home`}>
          <Image src="/brand/logo-light.png" alt={site.name} width={1078} height={454} priority className="h-11 w-auto lg:h-[72px]" />
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex gap-8">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className="relative block py-2 font-medium text-white/90 transition-colors hover:text-white"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 w-10 origin-left bg-copper transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <LeadButton kind="booking" variant="brand" size="cta" className="ml-auto hidden sm:inline-flex lg:ml-0">
          Book Your Stay
          <Image src="/icons/calendar-sm.svg" alt="" width={34} height={18} className="-ml-3" />
        </LeadButton>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon-lg"
                className="ml-auto text-white hover:bg-white/10 hover:text-white sm:ml-0 lg:hidden"
              />
            }
          >
            <MenuIcon className="size-6" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="border-none bg-forest p-8 text-white">
            <SheetHeader className="p-0">
              <SheetTitle>
                <Image src="/brand/logo-light.png" alt={site.name} width={1078} height={454} className="h-16 w-auto" />
              </SheetTitle>
              <SheetDescription className="text-white/60">{site.description}</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-6">
              <ul className="grid gap-4">
                {nav.map((item) => (
                  <li key={item.href}>
                    <SheetClose
                      nativeButton={false}
                      render={<a href={item.href} />}
                      className="text-3xl font-bold transition-colors hover:text-copper"
                    >
                      {item.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <SheetClose
              render={<LeadButton kind="booking" variant="brand" size="cta" className="mt-auto w-full" />}
            >
              Book Your Stay
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
