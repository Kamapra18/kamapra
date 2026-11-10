"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category?: string;
  type?: string;
  coverImage?: string;
  description: string;
}

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const { lang } = useLanguage();
  const messages = lang === "ID" ? id : lang === "EN" ? en : ban;
  const t = messages.blogSection;

  return (
    <section className="bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-22">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-12">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)]">
              {t.eyebrow}
            </span>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
              {t.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
              {t.description}
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[var(--accent)] pb-2 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent-text)]">
            {t.viewAll}
            <span className="text-base transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col">
                <div className="relative mb-5 aspect-[16/10] overflow-hidden border border-[var(--border)] bg-[var(--bg)]">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-[var(--text-muted)]">
                        Kamapra Blog
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>

                    {(post.category || post.type) && (
                      <>
                        <span>·</span>
                        <span className="text-[var(--accent-text)]">
                          {post.category || post.type}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent-text)]">
                    {post.title}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {post.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-[var(--text)]">
                    <span>{t.readMore}</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-sm text-[var(--text-muted)]">
            {t.empty}
          </p>
        )}

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-text)]">
            {t.viewAll}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
