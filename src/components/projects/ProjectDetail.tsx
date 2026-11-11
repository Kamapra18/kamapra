"use client";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {
  PiArrowLeft,
  PiArrowUpRight,
  PiCalendarBlank,
  PiCode,
  PiGithubLogo,
  PiStack,
} from "react-icons/pi";

import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

import type { Project } from "@/lib/Projects";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  const { lang } = useLanguage();

  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.projects.detail;

  const localizedProject = project.translations[lang] ?? project;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="mx-auto  max-w-8xl pb-24 pt-20 px-2 py-12 sm:px-10 lg:px-20 md:pt-20">
        <Link
          href="/projects"
          className="mb-12 inline-flex items-center gap-2 text-sm text-(--text-muted) transition-colors hover:text-(--accent-text)">
          <PiArrowLeft size={18} />
          {t.back}
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-(--accent)" />
          <span className="caption uppercase tracking-[0.18em] text-(--accent-text)">
            {localizedProject.category}
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              {localizedProject.title}
              <span className="text-(--accent)">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-(--text-muted) md:text-base">
              {localizedProject.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-(--accent) bg-(--accent) px-5 py-3 text-sm font-medium text-text-(--on-accent)sition-colors hover:bg-transparent hover:text-(--accent-text)">
                {t.livePreview}
                <PiArrowUpRight size={17} />
              </a>
            )}

            {project.links.repository && (
              <a
                href={project.links.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-(--border) px-5 py-3 text-sm transition-colors hover:border-(--accent) hover:text-(--accent-text)">
                <PiGithubLogo size={17} />
                {t.repository}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="mx-auto max-w-8xl px-6 md:px-20">
        <div className="relative aspect-video overflow-hidden border border-(--border) bg-(--surface)">
          <Image
            src={project.coverImage}
            alt={localizedProject.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Information */}
      <section className="mx-auto grid max-w-8xl gap-12 px-6 py-16 md:grid-cols-[1fr_2fr] md:px-20 md:py-24">
        <div>
          <p className="caption mb-4 uppercase tracking-[0.18em] text-(--accent-text)">
            {t.overview}
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t.projectInfo}
            <span className="text-(--accent)">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-y border-(--border) py-8 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 text-(--text-muted)">
              <PiCalendarBlank size={17} />
              <span className="caption">{t.year}</span>
            </div>
            <p className="text-sm font-medium">{localizedProject.year}</p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-(--text-muted)">
              <PiStack size={17} />
              <span className="caption">{t.category}</span>
            </div>
            <p className="text-sm font-medium">{localizedProject.category}</p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-(--text-muted)">
              <PiCode size={17} />
              <span className="caption">{t.status}</span>
            </div>
            <p className="text-sm font-medium">{localizedProject.status}</p>
          </div>

          <div className="col-span-2 sm:col-span-3">
            <p className="caption mb-3 text-(--text-muted)">{t.myRole}</p>

            <div className="flex flex-wrap gap-2">
              {localizedProject.roles.map((role) => (
                <span
                  key={role}
                  className="border border-(--border) bg-(--surface) px-3 py-2 text-xs">
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-3">
            <p className="caption mb-3 text-(--text-muted)">{t.technologies}</p>

            <div className="flex flex-wrap gap-2">
              {localizedProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-(--border) px-3 py-2 text-xs text-(--text-muted)">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="border-t border-(--border)">
        <div className="mx-auto max-w-8xl px-6 py-16 md:px-20 md:py-24">
          <div className="mb-12 max-w-8xl">
            <p className="caption mb-4 uppercase tracking-[0.18em] text-(--accent-text)">
              {t.caseStudy}
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {t.projectJourney}
              <span className="text-(--accent)">.</span>
            </h2>
          </div>

          <article className="project-markdown mx-auto max-w-8xl">
            <ReactMarkdown
              components={{
                a: ({ children, href }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => {
                  if (!src || typeof src !== "string") return null;

                  return (
                    <span className="my-8 block">
                      <Image
                        src={src}
                        alt={alt || localizedProject.title}
                        width={1200}
                        height={675}
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="h-auto w-full border border-(--border) object-cover"
                      />
                    </span>
                  );
                },
              }}>
              {localizedProject.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="border-t border-(--border) bg-(--surface)">
        <div className="mx-auto flex max-w-8xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between md:px-20">
          <div>
            <p className="caption mb-2 text-(--text-muted)">{t.endOfProject}</p>
            <h2 className="text-xl font-semibold">{localizedProject.title}</h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-3 border border-(--border) px-5 py-3 text-sm transition-colors hover:border-(--accent) hover:text-(--accent-text)">
            <PiArrowLeft size={17} />
            {t.allProjects}
          </Link>
        </div>
      </section>
    </main>
  );
}
