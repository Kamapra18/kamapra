"use client";

import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

import ProjectList from "./ProjectLits";
import type { Project } from "@/lib/Projects";

type Props = {
  projects: Project[];
};

export default function ProjectsContent({ projects }: Props) {
  const { lang } = useLanguage();

  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.projects;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-8xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-16">
        {/* Header */}
        <header className="mb-12 border-b border-(--border) pb-10 md:mb-16 md:pb-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-(--accent)" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-text)">
              {t.eyebrow}
            </span>
          </div>

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <h1 className="font-(--font-space-grotesk) text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {t.title}
                <span className="text-(--accent)">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-(--text-muted) sm:text-lg sm:leading-8">
                {t.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 border-t border-(--border) pt-4 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-6 lg:pt-0">
              <span className="font-(--font-space-grotesk) text-4xl font-semibold tabular-nums">
                {String(projects.length).padStart(2, "0")}
              </span>
              <span className="max-w-20 text-sm leading-5 text-(--text-muted)">
                {t.projectCount}
              </span>
            </div>
          </div>
        </header>

        {/* Project list */}
        <ProjectList projects={projects} labels={t.filters} />
      </section>
    </main>
  );
}
