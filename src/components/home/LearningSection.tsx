"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";
import { skillGroups } from "@/data/Skills";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

type Language = "ID" | "EN" | "BAN";

const messages = {
  ID: id,
  EN: en,
  BAN: ban,
};

export function LearningSection() {
  const { lang } = useLanguage();
  const language = (lang in messages ? lang : "ID") as Language;
  const t = messages[language].skills;

  const [activeCategory, setActiveCategory] = useState("all");
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const visibleGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeCategory);

  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );

  const visibleSkills = visibleGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );

  const toggleCategory = (id: string) => {
    setOpenCategories((current) =>
      current.includes(id)
        ? current.filter((category) => category !== id)
        : [...current, id],
    );
  };

  return (
    <section id="skills" className="bg-background px-5 py-20 md:px-22 md:py-28">
      <div className="mx-auto max-w-8xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
            <span className="h-0.5 w-7 bg-(--accent)" />
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t.title}
          </h2>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-(--text-muted) md:text-base">
              {t.description}
            </p>

            <p className="shrink-0 text-xs text-(--text-muted)">
              {t.total}{" "}
              <span className="font-semibold tabular-nums text-foreground">
                {totalSkills}
              </span>{" "}
              {t.items}
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-2 text-xs text-(--text-muted)">{t.category}</span>

          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className={`border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
              activeCategory === "all"
                ? "border-(--accent) bg-(--accent) text-white"
                : "border-(--border) text-(--text-muted) hover:border-(--accent) hover:text-foreground"
            }`}>
            {t.all}
          </button>

          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveCategory(group.id)}
              aria-pressed={activeCategory === group.id}
              className={`border px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                activeCategory === group.id
                  ? "border-(--accent) bg-(--accent) text-white"
                  : "border-(--border) text-(--text-muted) hover:border-(--accent) hover:text-foreground"
              }`}>
              {t.groups[group.id as keyof typeof t.groups].title}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="border-t border-(--border)">
          {visibleGroups.map((group) => {
            const groupText = t.groups[group.id as keyof typeof t.groups];
            const isOpen = openCategories.includes(group.id);

            return (
              <div key={group.id} className="border-b border-(--border)">
                {/* Accordion trigger */}
                <button
                  type="button"
                  onClick={() => toggleCategory(group.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left transition-colors hover:bg-(--surface) md:py-8">
                  <div className="min-w-0">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-xs text-(--accent-text)">
                        {group.number}
                      </span>

                      <span className="h-px w-6 bg-(--border)" />

                      <span className="text-xs text-(--text-muted)">
                        {String(group.skills.length).padStart(2, "0")} {t.items}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {groupText.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-xs leading-6 text-(--text-muted)">
                      {groupText.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border border-(--border) transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-(--accent) text-(--accent-text)"
                        : "text-(--text-muted)"
                    }`}>
                    <LuChevronDown size={18} />
                  </div>
                </button>

                {/* Accordion content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 gap-x-5 gap-y-6 pb-8 sm:grid-cols-3 lg:grid-cols-4">
                      {group.skills.map((skill) => {
                        const Icon = skill.icon;
                        const detail =
                          t.details[skill.id as keyof typeof t.details];

                        return (
                          <div
                            key={skill.id}
                            className="group -ml-2 flex min-w-0 items-start gap-3 p-2 transition-colors duration-200 hover:bg-(--surface)">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-(--border) bg-(--surface) transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-(--accent)/50">
                              <Icon
                                size={19}
                                style={{ color: skill.color }}
                                aria-hidden="true"
                              />
                            </div>

                            <div className="min-w-0 pt-1">
                              <p className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-(--accent-text)">
                                {skill.name}
                              </p>

                              <p className="mt-1 truncate text-xs text-(--text-muted)">
                                {detail}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Result count */}
        <div className="mt-6 flex items-center justify-between text-xs text-(--text-muted)">
          <span>
            {visibleSkills} / {totalSkills} {t.items}
          </span>

          <div className="h-1 w-20 overflow-hidden bg-(--surface)">
            <div
              className="h-full bg-(--accent) transition-all duration-300"
              style={{
                width: `${totalSkills ? (visibleSkills / totalSkills) * 100 : 0}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
