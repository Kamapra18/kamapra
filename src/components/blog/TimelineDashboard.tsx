"use client";

import { useMemo, useState } from "react";
import PostCard from "@/components/card/PostCard";
import type { Post } from "@/lib/Posts";

import { useLanguage } from "@/context/LanguageContext";
import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

interface TimelineDashboardProps {
  posts: Post[];
}

type FilterType = Post["type"] | "semua";

export default function TimelineDashboard({ posts }: TimelineDashboardProps) {
  const { lang } = useLanguage();
  const t = lang === "ID" ? id : lang === "EN" ? en : ban;
  const content = t.blogTimeline;

  const [activeFilter, setActiveFilter] = useState<FilterType>("semua");
  const [search, setSearch] = useState("");

  const filters: Array<{ label: string; value: FilterType }> = [
    { label: content.filters.all, value: "semua" },
    { label: content.filters.learning, value: "belajar" },
    { label: content.filters.work, value: "kerja" },
    { label: content.filters.education, value: "pendidikan" },
    { label: content.filters.event, value: "event" },
    { label: content.filters.travel, value: "liburan" },
    { label: content.filters.personal, value: "personal" },
  ];

  const filteredPosts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchType =
        activeFilter === "semua" || post.types.includes(activeFilter);

      const matchSearch =
        !keyword ||
        post.title.toLowerCase().includes(keyword) ||
        post.description.toLowerCase().includes(keyword);

      return matchType && matchSearch;
    });
  }, [posts, activeFilter, search]);

  const hasActiveFilter = activeFilter !== "semua" || search.trim() !== "";

  function resetFilters() {
    setActiveFilter("semua");
    setSearch("");
  }

  return (
    <main className="min-h-screen bg-background px-5 pb-24 pt-12 text-foreground sm:px-8 lg:px-16 lg:pt-16">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <header className="mb-14 max-w-4xl md:mb-20">
          <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-text)">
            <span className="h-px w-8 bg-(--accent)" />
            {content.eyebrow}
          </p>

          <h1 className="font-(--font-space-grotesk) text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-(--text-muted) sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <div className="mt-9 inline-flex items-center gap-3 border-t border-(--border) pt-5 text-sm text-(--text-muted)">
            <span className="h-2 w-2 rounded-full bg-(--accent)" />
            {content.totalPosts.replace("{count}", String(posts.length))}
          </div>
        </header>

        {/* Filter and Search */}
        <section className="mb-10 border-y border-(--border) py-6">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`border px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "border-(--accent) bg-(--accent) text-white"
                        : "border-(--border) bg-transparent text-(--text-muted) hover:border-(--accent) hover:text-(--accent-text)"
                    }`}>
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full xl:max-w-xs">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--text-muted)"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={content.searchPlaceholder}
                aria-label={content.searchPlaceholder}
                className="h-12 w-full border border-(--border) bg-(--surface) pl-12 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-(--text-muted) focus:border-(--accent)"
              />
            </div>
          </div>
        </section>

        {/* Results */}
        <section>
          <div className="mb-7 flex items-center justify-between">
            <p className="text-sm text-(--text-muted)">
              {content.showing.replace("{count}", String(filteredPosts.length))}
            </p>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-semibold text-(--accent-text) transition-opacity hover:opacity-70">
                {content.reset}
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="flex min-h-72 flex-col items-center justify-center border border-dashed border-(--border) px-6 text-center">
              <span className="mb-5 font-(--font-space-grotesk) text-5xl text-(--text-muted)">
                ∅
              </span>

              <h2 className="font-(--font-space-grotesk) text-xl font-semibold">
                {content.emptyTitle}
              </h2>

              <p className="mt-3 max-w-sm text-base leading-7 text-(--text-muted)">
                {content.emptyDescription}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
