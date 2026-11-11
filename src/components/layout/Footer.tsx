"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";
// import { useEffect, useState } from "react";
import { Suspense } from "react";
import { CurrentYear } from "@/components/feature/CurrentYears";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "WhatsApp", href: "https://wa.me/" },
  { name: "GitHub", href: "https://github.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "TikTok", href: "https://www.tiktok.com/" },
];

export function Footer() {
  const { lang } = useLanguage();

  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.footer;
  // const [year, setYear] = useState<number | null>(null);

  // useEffect(() => {
  //   setYear(new Date().getFullYear());
  // }, []);
  // const year = new Date().getFullYear();
  const navigation = [
    { label: t.about, href: "/about" },
    { label: t.portfolio, href: "/porto" },
    { label: t.gallery, href: "/gallery" },
    { label: t.blog, href: "/blog" },
    { label: t.contact, href: "/contact" },
  ];

  return (
    <footer className="overflow-hidden border-t border-(--border) bg-background">
      <div className="mx-auto max-w-8xl px-5 sm:px-10 lg:px-20">
        {/* Closing Statement */}
        <section className="relative flex min-h-105 flex-col justify-center overflow-hidden py-16 md:min-h-120 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-64 h-150 w-150 rounded-full border border-(--accent)/20 bg-[radial-gradient(circle,rgba(0,172,236,0.08),transparent_70%)]"
          />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              {/* <span className="h-[3px] w-12 bg-[var(--accent)]" /> */}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-muted)">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-7xl">
              {t.heading}
              <span className="block text-(--accent)">{t.headingAccent}</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-(--text-muted) md:text-lg">
              {t.description}
            </p>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-4 border-b-2 border-(--accent) pb-2 text-base font-semibold text-foreground transition-colors hover:text-(--accent)">
              {t.cta}
              <span className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </section>

        {/* Footer Information */}
        <section className="grid grid-cols-1 gap-10 border-t border-(--border) py-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:py-12">
          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
              {t.navigation}
            </p>

            <nav className="flex flex-col items-start gap-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-foreground transition-colors hover:text-(--accent)">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
              {t.social}
            </p>

            <div className="flex flex-col items-start gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base text-foreground transition-colors hover:text-(--accent)">
                  {social.name}
                  <span className="text-sm opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
              {t.locationLabel}
            </p>

            <p className="text-lg font-semibold text-foreground">
              Bali, Indonesia
            </p>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-(--text-muted)">
              {t.availability}
            </p>
          </div>
        </section>

        {/* Copyright */}
        <div className="flex flex-col gap-4 border-t border-(--border) py-6 text-xs text-(--text-muted) sm:flex-row sm:items-center sm:justify-between">
          {/* <p suppressHydrationWarning>
            © {year ?? ""} Kamapra. {t.rights}
          </p> */}
          <p>
            ©{" "}
            <Suspense fallback="2025">
              <CurrentYear />
            </Suspense>{" "}
            Kamapra. {t.rights}
          </p>

          <p className="tracking-[0.08em]">{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
