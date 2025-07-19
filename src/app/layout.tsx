import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamapra",
  description: "Website Portofolio Kamapra",
  icons: {
    icon: "/Kamapra.png",
  },
  openGraph: {
    title: "Kamapra",
    description: "Website portofolio I Kadek Mario Prayoga yang mendokumentasikan proses belajar dan karya kecil seputar web development, dari HTML, CSS, Tailwind CSS, Next.js hingga SQL dasar.", 
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}
