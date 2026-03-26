import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Snowfall from "./components/Snowfall";
import { Exo_2, Montserrat } from "next/font/google";
import ConsoleLog from "./components/feature/ConsolLog";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamapra.my.id"),
  title: "Kamapra",
  description: "Website Portofolio Kamapra",
  verification: {
    google: "8F1KMMvDIzoKs4jCzzr7bVX3Udy2IhSZjST3gnvRnwk",
  },
  icons: {
    icon: "/Kamapra.png",
  },
  openGraph: {
    title: "Kamapra",
    description:
      "Website portofolio I Kadek Mario Prayoga yang mendokumentasikan proses belajar dan karya kecil seputar web development, dari HTML, CSS, Tailwind CSS, Next.js hingga SQL dasar.",
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
    <html lang="id">
      <head>
        <meta
          name="google-site-verification"
          content="8F1KMMvDIzoKs4jCzzr7bVX3Udy2IhSZjST3gnvRnwk"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} ${montserrat.variable} antialiased`}>
        <Snowfall />
        <ConsoleLog />
        {children}
        <Analytics />
        <Script id="chatbase-config" strategy="afterInteractive">
          {`
            window.CHATBASE_CONFIG = {
              chatbotId: "jKZJ1rGBWq4USeYRJMOmW"
            };
          `}
        </Script>

        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          id="jKZJ1rGBWq4USeYRJMOmW"
          defer
        />
      </body>
    </html>
  );
}
