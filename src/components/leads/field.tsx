import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

// Label + control + error message, wired up for screen readers.
export function Field({
  id,
  label,
  error,
  className,
  labelClassName,
  children,
}: {
  id: string
  label: string
  error?: string
  className?: string
  labelClassName?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={id} className={labelClassName}>
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function fieldA11y(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  }
}
