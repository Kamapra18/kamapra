"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {
  LuArrowLeft,
  LuArrowRight,
  LuClock3,
  LuCalendarDays,
  LuTag,
} from "react-icons/lu";

import { useLanguage } from "@/context/LanguageContext";
import { RelatedBlogPosts } from "@/components/card/RelateBlogPosts";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

import type { Post, Chapter } from "@/lib/Posts";
import { ShareButton } from "@/components/feature/ShareButton";

interface BlogDetailPageProps {
  post: Post;
  chapters: Chapter[];
  allPosts: Post[];
}

export default function BlogDetailPage({
  post,
  chapters,
  allPosts,
}: BlogDetailPageProps) {
  const { lang } = useLanguage();

  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.blog.detail;

  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id ?? "");

  const isLearningArticle = post.types.includes("belajar");
  const isMultiChapter = isLearningArticle && chapters.length > 1;

  const activeIndex = chapters.findIndex(
    (chapter) => chapter.id === activeChapterId,
  );

  const activeChapter = chapters[activeIndex] ?? chapters[0];

  const dateLocale = lang === "EN" ? "en-US" : "id-ID";

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString(dateLocale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const goToChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      goToChapter(chapters[activeIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (activeIndex < chapters.length - 1) {
      goToChapter(chapters[activeIndex + 1].id);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-8xl px-5 pb-24 pt-10 sm:px-8 lg:px-20">
        {/* Back Navigation */}
        <Link
          href="/blog"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-(--text-muted) transition-colors hover:text-(--accent-text)">
          <LuArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          {t.back}
        </Link>

        {/* Article Header */}
        <header className="mx-auto mb-14 max-w-8xl">
          <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-(--text-muted)">
            <span className="text-(--accent)">
              {post.category || post.type}
            </span>

            {formattedDate && (
              <span className="flex items-center gap-2">
                <LuCalendarDays size={14} />
                {formattedDate}
              </span>
            )}

            {post.readTime > 0 && (
              <span className="flex items-center gap-2">
                <LuClock3 size={14} />
                {post.readTime} {t.minRead}
              </span>
            )}
          </div>

          <h1 className="mb-7 font-(--font-space-grotesk) text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.description && (
            <p className="max-w-3xl text-base leading-8 text-(--text-muted) sm:text-lg">
              {post.description}
            </p>
          )}

          <div className="mt-9 flex items-center gap-4 border-t border-(--border) pt-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--surface) font-(--font-space-grotesk) text-sm">
              MP
            </div>

            <div>
              <p className="text-sm font-semibold">Mario Prayoga</p>
              <p className="mt-1 text-xs text-(--text-muted)">Web Developer</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative mb-20 aspect-16/8 w-full overflow-hidden border border-(--border) bg-(--surface)">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-(--font-space-grotesk) text-2xl tracking-[0.2em] text-(--text-muted) sm:text-4xl">
                KAMAPRA
              </span>
            </div>
          )}

          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/70 via-black/10 to-transparent p-6 sm:p-10">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 sm:text-xs">
              {post.category || post.type}
            </p>

            <h2 className="max-w-2xl font-(--font-space-grotesk) text-xl leading-tight text-white sm:text-3xl">
              {post.title}
            </h2>

            {formattedDate && (
              <p className="mt-3 text-xs text-white/70">{formattedDate}</p>
            )}
          </div>
        </div>

        {/* Article Body */}
        <div className="mx-auto max-w-8xl">
          {/* Table of Contents */}
          {isMultiChapter && (
            <aside className="mb-16 border-y border-(--border) py-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--accent)">
                    {t.readingGuide}
                  </p>

                  <h2 className="font-(--font-space-grotesk) text-xl">
                    {t.tableOfContents}
                  </h2>
                </div>

                <span className="text-xs text-(--text-muted)">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(chapters.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {chapters.map((chapter, index) => {
                  const isActive = chapter.id === activeChapterId;

                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => goToChapter(chapter.id)}
                      className={`flex items-start gap-4 border p-4 text-left transition-colors ${
                        isActive
                          ? "border-(--accent) bg-(--surface)"
                          : "border-(--border) hover:border-(--text-muted)"
                      }`}>
                      <span
                        className={`pt-0.5 font-(--font-space-grotesk) text-xs ${
                          isActive ? "text-(--accent)" : "text-(--text-muted)"
                        }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-foreground" : "text-(--text-muted)"
                        }`}>
                        {chapter.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>
          )}
          {/* Chapter Heading */}
          {isLearningArticle && activeChapter && isMultiChapter && (
            <div className="mb-9 border-b border-(--border) pb-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--accent)">
                {t.chapter} {String(activeIndex + 1).padStart(2, "0")}
              </p>

              <h2 className="font-(--font-space-grotesk) text-3xl tracking-tight sm:text-4xl">
                {activeChapter.title}
              </h2>
            </div>
          )}

          {/* Article Content */}
          <div className="blog-markdown">
            {isLearningArticle ? (
              activeChapter ? (
                <ReactMarkdown>{activeChapter.content}</ReactMarkdown>
              ) : null
            ) : (
              <ReactMarkdown>{post.content}</ReactMarkdown>
            )}
          </div>
          {/* Article Footer */}
          <div className="mt-16 border-t border-(--border) pt-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-(--text-muted)">
                  <LuTag size={14} />
                  {t.topics}
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.types.map((type) => (
                    <span
                      key={type}
                      className="border border-(--border) px-3 py-1.5 text-xs text-(--text-muted)">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <ShareButton />
            </div>
          </div>
          {/* Previous / Next */}
          {isMultiChapter && (
            <div className="mt-14 grid grid-cols-2 gap-4 border-t border-(--border) pt-8">
              <button
                type="button"
                onClick={goToPrevious}
                disabled={activeIndex <= 0}
                className="group flex items-center gap-3 border border-(--border) p-4 text-left transition-colors hover:border-(--accent) disabled:cursor-not-allowed disabled:opacity-30">
                <LuArrowLeft
                  size={18}
                  className="shrink-0 transition-transform group-hover:-translate-x-1"
                />

                <span>
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-(--text-muted)">
                    {t.previous}
                  </span>

                  <span className="block text-sm font-medium text-foreground">
                    {activeIndex > 0
                      ? chapters[activeIndex - 1].title
                      : t.firstChapter}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={goToNext}
                disabled={activeIndex >= chapters.length - 1}
                className="group flex items-center justify-end gap-3 border border-(--border) p-4 text-right transition-colors hover:border-(--accent) disabled:cursor-not-allowed disabled:opacity-30">
                <span>
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.15em] text-(--text-muted)">
                    {t.next}
                  </span>

                  <span className="block text-sm font-medium text-foreground">
                    {activeIndex < chapters.length - 1
                      ? chapters[activeIndex + 1].title
                      : t.lastChapter}
                  </span>
                </span>

                <LuArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          )}
          <RelatedBlogPosts posts={allPosts} currentSlug={post.slug} />
          {/* Back to Blog */}
          <div className="mt-16 border-t border-(--border) pt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-sm font-medium text-(--text-muted) transition-colors hover:text-foreground">
              <LuArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              {t.backToAllArticles}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
