import type { Metadata } from "next";
import { Cinzel, Google_Sans_Flex, Libre_Caslon_Text } from "next/font/google";

import { LeadDialogProvider } from "@/components/leads/lead-dialog";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/content/home";
import "./globals.css";

const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
  // next/font has no metric overrides for this family yet
  adjustFontFallback: false,
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  weight: "400",
  subsets: ["latin"],
});

// Classical capitals that echo the Belle Stays logo lettering
const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | Short-Term Stays in Portland, Oregon`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/images/hero/video-cover.jpg", "/brand/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${caslon.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LeadDialogProvider>{children}</LeadDialogProvider>
        <Toaster theme="light" position="bottom-right" />
      </body>
    </html>
  );
}
