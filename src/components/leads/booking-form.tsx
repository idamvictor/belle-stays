"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { differenceInCalendarDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useSyncExternalStore } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitLead } from "@/app/actions"
import { Field, fieldA11y } from "@/components/leads/field"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { guestOptions, stayOptions } from "@/content/home"
import { bookingSchema, type BookingInput } from "@/lib/lead-schema"
import { cn } from "@/lib/utils"

const wideQuery = "(min-width: 640px)"

// Two calendar months side by side on wider screens, one on phones.
function useIsWide() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(wideQuery)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    () => window.matchMedia(wideQuery).matches,
    () => false
  )
}

function formatRange(dates?: { from?: Date; to?: Date }) {
  if (!dates?.from) return "Check-in → Check-out"
  if (!dates.to) return `${format(dates.from, "MMM d")} → Check-out`
  const nights = differenceInCalendarDays(dates.to, dates.from)
  return `${format(dates.from, "MMM d")} → ${format(dates.to, "MMM d, yyyy")} · ${nights} night${nights === 1 ? "" : "s"}`
}

export function BookingForm({ stay, onDone }: { stay?: string; onDone: () => void }) {
  const isWide = useIsWide()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { kind: "booking", name: "", email: "", phone: "", guests: "", stay: stay ?? "" },
  })

  const onSubmit = async (data: BookingInput) => {
    const result = await submitLead(data)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    toast.success("Booking request sent", {
      description: `We'll confirm availability for ${formatRange(data.dates)} shortly.`,
    })
    onDone()
  }

  const datesError = errors.dates?.message ?? errors.dates?.to?.message ?? errors.dates?.root?.message

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      <Controller
        control={control}
        name="dates"
        render={({ field }) => (
          <Field id="booking-dates" label="Dates" error={datesError}>
            <Popover>
              <PopoverTrigger
                render={
                  <Button
                    variant="outline"
                    {...fieldA11y("booking-dates", datesError)}
                    className={cn("h-9 justify-start font-normal", !field.value?.from && "text-muted-foreground")}
                  />
                }
              >
                <CalendarIcon />
                {formatRange(field.value)}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  numberOfMonths={isWide ? 2 : 1}
                  selected={field.value}
                  onSelect={(range) => field.onChange(range as BookingInput["dates"])}
                  disabled={{ before: new Date() }}
                />
              </PopoverContent>
            </Popover>
          </Field>
        )}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Controller
          control={control}
          name="guests"
          render={({ field }) => (
            <Field id="booking-guests" label="Guests" error={errors.guests?.message}>
              <Select value={field.value || null} onValueChange={(v) => field.onChange(v ?? "")}>
                <SelectTrigger className="h-9 w-full" {...fieldA11y("booking-guests", errors.guests?.message)}>
                  <SelectValue placeholder="How many guests?" />
                </SelectTrigger>
                <SelectContent>
                  {guestOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option} {option === "1" ? "guest" : "guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          )}
        />
        <Controller
          control={control}
          name="stay"
          render={({ field }) => (
            <Field id="booking-stay" label="Stay" error={errors.stay?.message}>
              <Select value={field.value || null} onValueChange={(v) => field.onChange(v ?? "")}>
                <SelectTrigger className="h-9 w-full" {...fieldA11y("booking-stay", errors.stay?.message)}>
                  <SelectValue placeholder="Which stay?" />
                </SelectTrigger>
                <SelectContent>
                  {stayOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          )}
        />
      </div>
      <Field id="booking-name" label="Full name" error={errors.name?.message}>
        <Input autoComplete="name" {...fieldA11y("booking-name", errors.name?.message)} {...register("name")} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="booking-email" label="Email" error={errors.email?.message}>
          <Input type="email" autoComplete="email" {...fieldA11y("booking-email", errors.email?.message)} {...register("email")} />
        </Field>
        <Field id="booking-phone" label="Phone" error={errors.phone?.message}>
          <Input type="tel" autoComplete="tel" {...fieldA11y("booking-phone", errors.phone?.message)} {...register("phone")} />
        </Field>
      </div>
      <Button type="submit" variant="brand" size="cta" disabled={isSubmitting} className="mt-2 w-full">
        {isSubmitting ? "Sending…" : "Request booking"}
      </Button>
    </form>
  )
}
