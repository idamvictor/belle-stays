import { site } from "@/content/home"
import { cn } from "@/lib/utils"

// "Belle Stays" set in Cinzel to echo the logo lettering.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-brand leading-none font-medium whitespace-nowrap", className)}>
      {site.name}
    </span>
  )
}
