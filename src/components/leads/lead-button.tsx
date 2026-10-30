"use client"

import { useLeadDialog } from "@/components/leads/lead-dialog"
import { Button } from "@/components/ui/button"

// A Button that opens the booking/callback dialog. Usable from server components.
export function LeadButton({
  kind,
  stay,
  onClick,
  ...props
}: React.ComponentProps<typeof Button> & { kind: "booking" | "callback"; stay?: string }) {
  const open = useLeadDialog()
  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event)
        open({ kind, stay })
      }}
    />
  )
}
