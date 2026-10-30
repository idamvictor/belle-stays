import { cn } from "@/lib/utils"

// The "▪ —— LABEL" kicker that sits above most section headings.
export function Eyebrow({
  children,
  tone = "copper",
  size = "md",
  className,
}: {
  children: React.ReactNode
  tone?: "copper" | "white"
  size?: "sm" | "md"
  className?: string
}) {
  return (
    <p
      className={cn(
        "flex items-center font-bold uppercase",
        size === "md" ? "text-base leading-[23.2px]" : "text-xs leading-[18.84px]",
        tone === "copper" ? "text-copper" : "text-white",
        className
      )}
    >
      <span aria-hidden className="mr-2 size-1 shrink-0 bg-current" />
      <span aria-hidden className="mr-[11px] h-px w-8 shrink-0 bg-current" />
      {children}
    </p>
  )
}
