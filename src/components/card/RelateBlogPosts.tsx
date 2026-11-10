"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuCalendarDays,
} from "react-icons/lu";

import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

import type { Post } from "@/lib/posts";

interface RelatedBlogPostsProps {
  posts: Post[];
  currentSlug: string;
}

export function RelatedBlogPosts({
  posts,
  currentSlug,
}: RelatedBlogPostsProps) {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.blog.related;

  const randomPosts = useMemo(() => {
    const getScore = (slug: string) => {
      const value = `${currentSlug}-${slug}`;
      let hash = 0;

      for (let i = 0; i < value.length; i++) {
        hash = (hash * 31 + value.charCodeAt(i)) | 0;
      }

      return Math.abs(hash);
    };

    return posts
      .filter((post) => post.slug !== currentSlug)
      .sort((a, b) => getScore(a.slug) - getScore(b.slug))
      .slice(0, 3);
  }, [posts, currentSlug]);

  if (randomPosts.length === 0) return null;

  const dateLocale = lang === "EN" ? "en-US" : "id-ID";

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
    <section className="mt-10 border-t border-[var(--border)] pt-10 md:pt-14">
      {/* Section Header */}
      <div className="mb-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-4xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-xs">
            {t.eyebrow}
          </p>

          <h2 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            {t.title}
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous articles"
            className="flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent-text)]">
            <LuArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next articles"
            className="flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent-text)]">
            <LuArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Blog Cards */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5">
        {randomPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group w-[85%] flex-none snap-start overflow-hidden border border-[var(--border)] bg-[var(--bg)] transition-colors duration-300 hover:border-[var(--accent)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
            {/* Cover Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="font-[var(--font-space-grotesk)] text-xl font-semibold tracking-[0.2em] text-[var(--text-muted)]">
                    KAMAPRA
                  </span>
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5">
              <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                <span className="text-[var(--accent)]">
                  {post.category || post.type}
                </span>

                {post.date && (
                  <span className="flex items-center gap-1.5">
                    <LuCalendarDays size={12} />

                    {new Date(post.date).toLocaleDateString(dateLocale, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>

              <h3 className="mb-2 line-clamp-2 font-[var(--font-space-grotesk)] text-base font-semibold leading-snug transition-colors group-hover:text-[var(--accent-text)] sm:text-lg">
                {post.title}
              </h3>

              {post.description && (
                <p className="line-clamp-2 text-sm leading-6 text-[var(--text-muted)]">
                  {post.description}
                </p>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)]">
                <span>
                  {post.readTime} {t.minRead}
                </span>

                <LuArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* All Articles */}
      <div className="mt-4 flex justify-end">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent-text)]">
          {t.allArticles}
          <LuArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
