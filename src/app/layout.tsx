import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import { LeadDialogProvider } from "@/components/leads/lead-dialog";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/content/home";
import "./globals.css";

// Easy-to-read sans for body copy, buttons and labels
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

// High-contrast luxury serif for headings and other large text
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | Short-Term Stays in Portland, Oregon`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/images/hero/building-exterior.jpg", "/brand/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LeadDialogProvider>{children}</LeadDialogProvider>
        <Toaster theme="light" position="bottom-right" />
      </body>
    </html>
  );
}
