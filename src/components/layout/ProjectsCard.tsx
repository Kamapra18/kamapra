import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRight, PiCalendarBlank, PiStack } from "react-icons/pi";

import type { Project } from "@/lib/Projects";

type Props = {
  project: Project;
  index: number;
  viewLabel: string;
};

export default function ProjectCard({ project, index, viewLabel }: Props) {
  return (
    <article className="group overflow-hidden border border-(--border) bg-(--surface) transition-colors duration-300 hover:border-(--accent)">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${viewLabel}: ${project.title}`}
        className="block">
        {/* Project Image */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-(--border) bg-background">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-(--font-space-grotesk) text-lg font-semibold tracking-[0.2em] text-(--text-muted)">
                KAMAPRA
              </span>
            </div>
          )}

          {/* Category */}
          <div className="absolute left-4 top-4 flex items-center gap-2 border border-(--border) bg-background px-3 py-2">
            <span className="size-2 shrink-0 bg-(--accent)" />
            <span className="text-xs font-medium text-foreground">
              {project.category}
            </span>
          </div>

          {/* Image Action */}
          <div className="absolute bottom-4 right-4 flex size-10 items-center justify-center bg-(--accent) text-white transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
            <PiArrowUpRight size={21} />
          </div>
        </div>

        {/* Project Information */}
        <div className="p-4 sm:p-5">
          {/* Metadata */}
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold tracking-[0.12em] text-(--accent-text)">
              PROJECT / {String(index + 1).padStart(2, "0")}
            </span>

            <span className="flex shrink-0 items-center gap-1.5 text-sm text-(--text-muted)">
              <PiCalendarBlank size={16} />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-(--font-space-grotesk) text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-(--accent-text) sm:text-2xl">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-2 min-h-12 text-[15px] leading-6 text-(--text-muted)">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex items-start gap-2.5 border-t border-(--border) pt-4">
            <PiStack
              size={18}
              className="mt-0.5 shrink-0 text-(--accent-text)"
            />

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="border border-(--border) px-2.5 py-1 text-xs text-(--text-muted)">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-(--border) pt-4">
            <span className="text-sm font-semibold text-(--accent-text)">
              {viewLabel}
            </span>

            <span className="flex size-9 items-center justify-center border border-(--border) text-(--text-muted) transition-colors duration-300 group-hover:border-(--accent) group-hover:bg-(--accent) group-hover:text-white">
              <PiArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
