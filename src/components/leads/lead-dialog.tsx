"use client"

import { createContext, useCallback, useContext, useState } from "react"

import { CallbackForm } from "@/components/leads/callback-form"
import { BookingForm } from "@/components/leads/booking-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type LeadKind = "booking" | "callback"
type OpenOptions = { kind: LeadKind; stay?: string }

const LeadDialogContext = createContext<((options: OpenOptions) => void) | null>(null)

const copy: Record<LeadKind, { title: string; description: string }> = {
  booking: {
    title: "Book your stay",
    description: "Tell us your dates and we'll confirm availability and rates.",
  },
  callback: {
    title: "Request a callback",
    description: "Leave your number and our guest team will call you back.",
  },
}

// One dialog for the whole page; any button can open it with useLeadDialog().
export function LeadDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<OpenOptions>({ kind: "booking" })

  const openDialog = useCallback((next: OpenOptions) => {
    setOptions(next)
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return (
    <LeadDialogContext.Provider value={openDialog}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 sm:max-w-lg sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-subtitle font-normal text-forest">
              {copy[options.kind].title}
            </DialogTitle>
            <DialogDescription>{copy[options.kind].description}</DialogDescription>
          </DialogHeader>
          {/* Keyed so the form resets each time the dialog opens */}
          {options.kind === "booking" ? (
            <BookingForm key={`booking-${options.stay}`} stay={options.stay} onDone={close} />
          ) : (
            <CallbackForm key="callback" onDone={close} />
          )}
        </DialogContent>
      </Dialog>
    </LeadDialogContext.Provider>
  )
}

export function useLeadDialog() {
  const open = useContext(LeadDialogContext)
  if (!open) throw new Error("useLeadDialog must be used inside <LeadDialogProvider>")
  return open
}
