"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/card/ProjectsCard";
import type { Project } from "@/lib/Projects";

type Category =
  | "All"
  | "Application"
  | "Landing Page"
  | "Company Profile"
  | "College Design Figma";

type Props = {
  projects: Project[];
  labels: {
    all: string;
    application: string;
    landingPage: string;
    companyProfile: string;
    collegeDesign: string;
    empty: string;
    showing: string;
    of: string;
    viewProject: string;
  };
};

export default function ProjectList({ projects, labels }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filters: { value: Category; label: string }[] = [
    { value: "All", label: labels.all },
    { value: "Application", label: labels.application },
    { value: "Landing Page", label: labels.landingPage },
    { value: "Company Profile", label: labels.companyProfile },
    { value: "College Design Figma", label: labels.collegeDesign },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) =>
        project.category.toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [projects, activeCategory]);

  return (
    <div>
      {/* Category Filters */}
      <div className="mb-8 overflow-x-auto border-b border-(--border)">
        <div className="flex min-w-max gap-6 sm:gap-8">
          {filters.map((filter) => {
            const active = activeCategory === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveCategory(filter.value)}
                aria-pressed={active}
                className={`relative pb-4 text-base transition-colors duration-200 ${
                  active
                    ? "font-semibold text-(--accent-text)"
                    : "text-(--text-muted) hover:text-foreground"
                }`}>
                {filter.label}

                {active && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-(--accent)" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              viewLabel={labels.viewProject}
            />
          ))}
        </div>
      ) : (
        <div className="border-y border-(--border) py-20 text-center">
          <p className="text-base text-(--text-muted)">{labels.empty}</p>
        </div>
      )}

      {/* Results Information */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-(--border) pt-5">
        <p className="text-sm text-(--text-muted)">
          {labels.showing}{" "}
          <span className="font-semibold text-(--accent-text)">
            {String(filteredProjects.length).padStart(2, "0")}
          </span>{" "}
          {labels.of} {String(projects.length).padStart(2, "0")}
        </p>

        <span className="text-xs font-medium tracking-[0.12em] text-(--text-muted)">
          {activeCategory === "All"
            ? "ALL PROJECTS"
            : activeCategory.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
