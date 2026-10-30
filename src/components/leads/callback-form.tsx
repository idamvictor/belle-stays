"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitLead } from "@/app/actions"
import { Field, fieldA11y } from "@/components/leads/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { callbackSchema, timeSlots, type CallbackInput } from "@/lib/lead-schema"

export function CallbackForm({ onDone }: { onDone: () => void }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CallbackInput>({
    resolver: zodResolver(callbackSchema),
    defaultValues: { kind: "callback", name: "", phone: "", time: "" },
  })

  const onSubmit = async (data: CallbackInput) => {
    const result = await submitLead(data)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    toast.success("Callback requested", { description: "Our guest team will call you soon." })
    onDone()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4">
      <Field id="cb-name" label="Full name" error={errors.name?.message}>
        <Input autoComplete="name" {...fieldA11y("cb-name", errors.name?.message)} {...register("name")} />
      </Field>
      <Field id="cb-phone" label="Phone" error={errors.phone?.message}>
        <Input type="tel" autoComplete="tel" {...fieldA11y("cb-phone", errors.phone?.message)} {...register("phone")} />
      </Field>
      <Controller
        control={control}
        name="time"
        render={({ field }) => (
          <Field id="cb-time" label="Best time to call" error={errors.time?.message}>
            <Select value={field.value || null} onValueChange={(v) => field.onChange(v ?? "")}>
              <SelectTrigger className="h-9 w-full" {...fieldA11y("cb-time", errors.time?.message)}>
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        )}
      />
      <Button type="submit" variant="brand" size="cta" disabled={isSubmitting} className="mt-2 w-full">
        {isSubmitting ? "Sending…" : "Request callback"}
      </Button>
    </form>
  )
}
