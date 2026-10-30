import { site } from "@/content/home"
import { cn } from "@/lib/utils"

// "BELLE STAYS" in Cormorant capitals, echoing the logo lettering.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-brand leading-none font-medium tracking-[0.08em] whitespace-nowrap uppercase", className)}>
      {site.name}
    </span>
  )
}
