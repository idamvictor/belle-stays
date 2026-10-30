import { z } from "zod"

const name = z.string().trim().min(2, "Please enter your name")
const phone = z
  .string()
  .trim()
  .regex(/^[+()\d\s-]{7,20}$/, "Please enter a valid phone number")
const email = z.email("Please enter a valid email address")

export const bookingSchema = z.object({
  kind: z.literal("booking"),
  name,
  email,
  phone,
  dates: z
    .object(
      { from: z.date(), to: z.date({ error: "Please choose a check-out date" }) },
      { error: "Please choose your check-in and check-out dates" }
    )
    .refine((d) => d.to > d.from, "Check-out must be after check-in"),
  guests: z.string().min(1, "Please choose the number of guests"),
  stay: z.string().min(1, "Please choose a stay"),
})

export const callbackSchema = z.object({
  kind: z.literal("callback"),
  name,
  phone,
  time: z.string().min(1, "Please choose a time"),
})

export const enquirySchema = z.object({
  kind: z.literal("enquiry"),
  name,
  phone,
  email,
  message: z.string().trim().min(10, "Please write a short message (10+ characters)"),
})

export const leadSchema = z.discriminatedUnion("kind", [
  bookingSchema,
  callbackSchema,
  enquirySchema,
])

export type BookingInput = z.infer<typeof bookingSchema>
export type CallbackInput = z.infer<typeof callbackSchema>
export type EnquiryInput = z.infer<typeof enquirySchema>
export type LeadInput = z.infer<typeof leadSchema>

export const timeSlots = ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–7)"]
