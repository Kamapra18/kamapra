"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { certificatesData } from "@/data/sertif";
import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

export function Certificates() {
  const { lang } = useLanguage();

  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.certificates;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollCards = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      "[data-certificate-card]",
    );

    if (!card) return;

    const amount = card.offsetWidth + 24;

    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      "[data-certificate-card]",
    );

    if (!card) return;

    const amount = card.offsetWidth + 24;

    setActiveIndex(
      Math.min(
        certificatesData.length - 1,
        Math.max(0, Math.round(container.scrollLeft / amount)),
      ),
    );
  };

  return (
    <section
      id="certificates"
      className="overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-6 md:px-22">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.75 w-10 bg-(--accent)" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-muted)">
                {t.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {t.title}
              <span className="text-(--accent)">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--text-muted) md:text-base">
              {t.description}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-6 md:justify-end">
            <span className="text-sm text-(--text-muted)">
              <span className="font-semibold text-foreground">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(certificatesData.length).padStart(2, "0")}
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollCards("prev")}
                disabled={activeIndex === 0}
                aria-label={t.previous}
                className="flex h-10 w-10 items-center justify-center border border-(--border) text-lg text-foreground transition-colors hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-30">
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollCards("next")}
                disabled={activeIndex >= certificatesData.length - 1}
                aria-label={t.next}
                className="flex h-10 w-10 items-center justify-center border border-(--border) text-lg text-foreground transition-colors hover:border-(--accent) hover:text-(--accent) disabled:cursor-not-allowed disabled:opacity-30">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Cards */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-5 md:px-22 pb-6 scrollbar-thin [scrollbar-color:var(--border)_transparent]"
        style={{
          scrollPaddingLeft: "220px",
        }}>
        {certificatesData.map((certificate, index) => (
          <article
            key={certificate.id}
            data-certificate-card
            className="group w-[min(82vw,380px)] shrink-0 snap-start sm:w-95">
            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden border border-(--border) bg-(--surface)">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                sizes="(max-width: 640px) 82vw, 380px"
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <span className="absolute left-3 top-3 bg-(--bg)/90 px-3 py-1.5 font-mono text-xs text-(--text-muted) backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="absolute right-3 top-3 bg-(--bg)/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
                {certificate.year}
              </span>
            </div>

            {/* Information */}
            <div className="flex flex-col pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-(--accent-text)">
                {certificate.provider}
              </span>

              <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-(--accent)">
                {certificate.title}
              </h3>

              <p className="mt-3 line-clamp-3 min-h-15 text-sm leading-relaxed text-(--text-muted)">
                {certificate.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-(--border) pt-4">
                <span className="text-xs text-(--text-muted)">
                  {t.issued} · {certificate.year}
                </span>

                <Link
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-(--accent)">
                  {t.viewCertificate}
                  <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Information */}
      <div className="mx-auto mt-5 max-w-8xl px-2 sm:px-10 lg:px-20">
        <div className="flex flex-col justify-between gap-3 border-t border-(--border) pt-5 text-xs text-(--text-muted) sm:flex-row">
          <p>{t.note}</p>
          <p className="font-mono">
            CERTIFICATE ARCHIVE / {certificatesData.length}
          </p>
        </div>
      </div>
    </section>
  );
}
