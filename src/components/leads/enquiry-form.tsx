"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitLead } from "@/app/actions"
import { Field, fieldA11y } from "@/components/leads/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { enquirySchema, type EnquiryInput } from "@/lib/lead-schema"

// Underlined fields on the dark footer background, as in the design.
const underline =
  "rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-sm text-white shadow-none placeholder:text-white/50 focus-visible:border-white focus-visible:ring-0 aria-invalid:border-red-300 aria-invalid:ring-0 dark:bg-transparent"

export function EnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { kind: "enquiry", name: "", phone: "", email: "", message: "" },
  })

  const onSubmit = async (data: EnquiryInput) => {
    const result = await submitLead(data)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    toast.success("Enquiry sent", { description: "Thank you, we'll be in touch within one business day." })
    reset()
  }

  const errorClass = "[&_[role=alert]]:text-red-300"

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6">
      <div className="grid gap-x-3 gap-y-6 sm:grid-cols-3">
        <Field id="enq-name" label="Name" error={errors.name?.message} labelClassName="sr-only" className={errorClass}>
          <Input placeholder="Name" autoComplete="name" className={`h-16 ${underline}`} {...fieldA11y("enq-name", errors.name?.message)} {...register("name")} />
        </Field>
        <Field id="enq-phone" label="Phone number" error={errors.phone?.message} labelClassName="sr-only" className={errorClass}>
          <Input type="tel" placeholder="Phone number" autoComplete="tel" className={`h-16 ${underline}`} {...fieldA11y("enq-phone", errors.phone?.message)} {...register("phone")} />
        </Field>
        <Field id="enq-email" label="Email address" error={errors.email?.message} labelClassName="sr-only" className={errorClass}>
          <Input type="email" placeholder="Email address" autoComplete="email" className={`h-16 ${underline}`} {...fieldA11y("enq-email", errors.email?.message)} {...register("email")} />
        </Field>
      </div>
      <Field id="enq-message" label="Message" error={errors.message?.message} labelClassName="sr-only" className={errorClass}>
        <Textarea placeholder="Message" rows={4} className={`min-h-[126px] resize-y py-3 ${underline}`} {...fieldA11y("enq-message", errors.message?.message)} {...register("message")} />
      </Field>
      <Button type="submit" variant="light" disabled={isSubmitting} className="mx-auto mt-2 h-14 px-5 text-base capitalize">
        {isSubmitting ? "Sending…" : "Submit Your Enquiry"}
      </Button>
    </form>
  )
}
