import type { Metadata } from "next";
import { Inter, Space_Grotesk, Figtree } from "next/font/google";
import { Suspense } from "react";

import "./globals.css";

import { LanguageProvider } from "@/context/language-context";
import { cn } from "@/lib/utils";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/chatbot/Chatbot";

import ConsoleLog from "./components/feature/ConsolLog";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://kamapra.my.id"),
  title: "Kamapra",
  description: "Personal portfolio website",

  verification: {
    google: "8F1KMMvDIzoKs4jCzzr7bVX3Udy2IhSZjST3gnvRnwk",
  },

  icons: {
    icon: "/Kamapra.png",
  },

  openGraph: {
    title: "Kamapra",
    description:
      "Website portofolio I Kadek Mario Prayoga yang mendokumentasikan proses belajar dan karya kecil seputar web development, dari HTML, CSS, Tailwind CSS, Next.js SQL dasar hingga WordPress.",
    url: "https://www.kamapra.my.id",
    siteName: "Kamapra",
    images: [
      {
        url: "https://www.kamapra.my.id/Kamapra.png",
        width: 1200,
        height: 630,
        alt: "Logo Kamapra",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        inter.variable,
        "font-sans",
        figtree.variable,
      )}>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          {children}

          <Footer />
          <Chatbot />
        </LanguageProvider>

        <ConsoleLog />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
