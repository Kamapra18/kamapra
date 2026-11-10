"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

const messages = {
  ID: id,
  EN: en,
  BAN: ban,
};

type Language = keyof typeof messages;

const projectLinks: Record<string, string> = {
  "zasgo-mart": "",
  mystarspa: "",
  "brasika-asta-dharma": "",
  clamonic: "",
};

const projectImages: Record<string, string> = {
  "zasgo-mart": "/images/mystarspa.png",
  mystarspa: "/images/mystarspa.png",
  "brasika-asta-dharma": "/images/mystarspa.png",
  clamonic: "/images/mystarspa.png",
};

export function ProjectSection() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const language: Language = lang in messages ? (lang as Language) : "ID";
  const t = messages[language].projectsSection;
  const projects = t.projects;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        direction === "right"
          ? scrollRef.current.clientWidth * 0.85
          : -scrollRef.current.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="bg-background px-5 py-20 text-foreground md:px-22 md:py-28">
      <div className="mx-auto max-w-8xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-(--accent-text) md:text-base">
              {t.eyebrow}
            </p>

            <h2 className="font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight md:text-6xl">
              {t.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-(--text-muted) md:text-lg">
              {t.description}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 md:justify-end">
            <Link
              href="/porto"
              className="group inline-flex items-center gap-2 border-b border-(--border) pb-2 text-sm transition-colors hover:border-current md:text-base">
              {t.viewAll}
              <LuArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            {/* Carousel controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous projects"
                className="flex h-10 w-10 items-center justify-center border border-(--border) transition-colors hover:border-foreground">
                <LuArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next projects"
                className="flex h-10 w-10 items-center justify-center border border-(--border) transition-colors hover:border-foreground">
                <LuArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile carousel / Desktop grid */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-x-7 md:gap-y-14 md:overflow-visible md:pb-0">
          {projects.map((project, index) => {
            const image = projectImages[project.slug];
            const href = projectLinks[project.slug];
            const isFeatured = index === 0;
            const isLast = index === projects.length - 1;

            return (
              <article
                key={project.slug}
                className={`group w-[88%] min-w-0 flex-none snap-start md:w-auto ${
                  isFeatured || isLast ? "md:col-span-2" : ""
                }`}>
                {/* Project image */}
                <div
                  className={`relative overflow-hidden bg-(--surface) ${
                    isFeatured || isLast
                      ? "aspect-video md:aspect-[2.1/1]"
                      : "aspect-[4/3] md:aspect-4/3"
                  }`}>
                  {image && (
                    <Image
                      src={image}
                      alt={project.name}
                      fill
                      unoptimized
                      sizes={
                        isFeatured || isLast
                          ? "(max-width: 768px) 88vw, 90vw"
                          : "(max-width: 768px) 88vw, 45vw"
                      }
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.viewProject}: ${project.name}`}
                      className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100">
                      <LuArrowUpRight size={22} />
                    </a>
                  )}
                </div>

                {/* Project information */}
                <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2.5 text-xs text-(--text-muted) md:text-sm">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span className="h-1 w-1 rounded-full bg-current opacity-50" />
                      <span>{project.category}</span>
                      <span className="h-1 w-1 rounded-full bg-current opacity-50" />
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-[var(--font-space-grotesk)] text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-(--text-muted) md:text-base md:leading-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex max-w-sm flex-wrap gap-2 lg:justify-end">
                    {project.stack.map((technology: string) => (
                      <span
                        key={technology}
                        className="border border-(--border) px-3 py-1.5 text-[11px] tracking-wide text-(--text-muted) md:text-xs">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-12 flex justify-center md:mt-20">
          <Link
            href="/porto"
            className="group inline-flex items-center gap-3 border border-(--border) px-7 py-3.5 text-sm transition-colors hover:border-foreground md:text-base">
            {t.viewAll}
            <LuArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
