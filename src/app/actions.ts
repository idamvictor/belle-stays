"use server"

import { leadSchema, type LeadInput } from "@/lib/lead-schema"

export type LeadResult = { ok: true } | { ok: false; error: string }

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const parsed = leadSchema.safeParse(input)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid form data" }
  }

  // TODO: deliver the lead (e.g. send an email with Resend, or post to your CRM).
  console.info("[lead] received", parsed.data.kind)

  return { ok: true }
}
