"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Post, Chapter } from "@/app/lib/posts";

interface PostReaderProps {
  post: Post;
  chapters: Chapter[];
}

export default function PostReader({ post, chapters }: PostReaderProps) {
  const isMultiChapter = chapters.length > 1;

  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id ?? "");

  const activeIndex = chapters.findIndex(
    (chapter) => chapter.id === activeChapterId,
  );
  const activeChapter = chapters[activeIndex] ?? chapters[0];

  function goToChapter(id: string) {
    setActiveChapterId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextChapter() {
    if (activeIndex < chapters.length - 1) {
      goToChapter(chapters[activeIndex + 1].id);
    }
  }

  function prevChapter() {
    if (activeIndex > 0) {
      goToChapter(chapters[activeIndex - 1].id);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-base)] text-[var(--foreground)] md:flex-row">
      <aside className="w-full shrink-0 border-b border-[var(--btn-glass-border-hover)] bg-[var(--bg-base)]/80 md:sticky md:top-0 md:h-screen md:w-80 md:overflow-y-auto md:border-b-0 md:border-r">
        <div className="border-b border-[var(--btn-glass-border-hover)] p-6">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--btn-glass-text)] opacity-80 transition hover:text-[var(--accent)] hover:opacity-100">
            ← Kembali ke Dashboard
          </Link>

          {post.category ? (
            <span className="inline-block rounded-md border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
              {post.category}
            </span>
          ) : null}

          <h2 className="mt-3 text-xl font-extrabold leading-snug">
            {post.title}
          </h2>
        </div>

        <nav className="space-y-2 p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[var(--btn-glass-text)] opacity-60">
            {isMultiChapter ? "Materi" : "Isi"}
          </p>
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeChapterId;
            return (
              <button
                key={chapter.id}
                onClick={() => goToChapter(chapter.id)}
                className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                  isActive
                    ? "border-[var(--accent)]/40 bg-[image:var(--btn-glass-bg)]"
                    : "border-transparent hover:bg-[image:var(--btn-glass-bg)]"
                }`}>
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)]"
                      : "border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)]"
                  }`}
                />
                <span
                  className={`text-sm font-semibold leading-tight ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--btn-glass-text)] opacity-85"
                  }`}>
                  {chapter.title}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex flex-1 flex-col">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--btn-glass-border-hover)] bg-[var(--bg-base)]/80 px-6 py-4 backdrop-blur-md sm:px-10">
          <div className="flex items-center gap-2 text-xs font-medium text-[var(--btn-glass-text)] opacity-70">
            <span>{post.title}</span>
            <span>→</span>
            <span className="max-w-[180px] truncate font-semibold text-[var(--accent)] opacity-100 sm:max-w-none">
              {activeChapter?.title}
            </span>
          </div>
        </div>

        <article className="mx-auto w-full max-w-7xl flex-grow px-6 py-10 sm:px-10">
          <div
            className="
    prose
    prose-invert
    max-w-none

    prose-headings:text-[var(--foreground)]
    prose-headings:font-bold

    prose-h2:mt-14
    prose-h2:mb-6

    prose-h3:mt-12
    prose-h3:mb-5

    prose-h4:mt-8
    prose-h4:mb-4

    prose-p:my-5
    prose-p:leading-8
    prose-p:text-justify
    prose-p:text-[var(--btn-glass-text)]

    prose-ul:my-5
    prose-ul:pl-6

    prose-ol:my-5
    prose-ol:pl-6

    prose-li:my-2
    prose-li:leading-8

    prose-blockquote:my-8
    prose-blockquote:border-l-4
    prose-blockquote:border-[var(--accent)]

    prose-img:rounded-2xl
    prose-img:shadow-xl

    prose-a:text-[var(--accent)]
    prose-strong:text-[var(--foreground)]
  ">
            <ReactMarkdown>{activeChapter?.content ?? ""}</ReactMarkdown>
          </div>
        </article>

        {isMultiChapter ? (
          <footer className="mt-auto border-t border-[var(--btn-glass-border-hover)] bg-[var(--bg-base)] px-6 py-6 sm:px-10">
            <div className="mx-auto flex max-w-3xl items-center justify-between">
              <button
                onClick={prevChapter}
                disabled={activeIndex === 0}
                className="rounded-xl border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] px-5 py-2.5 text-sm font-bold text-[var(--btn-glass-text)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">
                ← Kembali
              </button>

              <button
                onClick={nextChapter}
                disabled={activeIndex === chapters.length - 1}
                className="rounded-xl bg-[image:var(--gradient-primary)] px-6 py-2.5 text-sm font-bold text-[var(--foreground)] shadow-[var(--btn-glass-shadow-base)] transition hover:shadow-[var(--btn-glass-shadow-hover)] disabled:cursor-not-allowed disabled:opacity-40">
                Lanjut Materi →
              </button>
            </div>
          </footer>
        ) : null}
      </main>
    </div>
  );
}
