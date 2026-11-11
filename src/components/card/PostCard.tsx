"use client";

import Image from "next/image";
import Link from "next/link";
import type { Post, PostType } from "@/lib/Posts";

import { useLanguage } from "@/context/LanguageContext";
import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

interface PostCardProps {
  post: Post;
}

const typeLabel: Record<PostType, string> = {
  belajar: "Belajar",
  kerja: "Kerja",
  pendidikan: "Pendidikan",
  event: "Event",
  liburan: "Liburan",
  personal: "Personal",
};

function getExcerpt(content: string, maxLength = 140) {
  const stripped = content
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_`>]/g, "")
    .replace(/\n+/g, " ")
    .trim();

  if (stripped.length <= maxLength) return stripped;
  return `${stripped.slice(0, maxLength).trim()}...`;
}

function getMetaLine(post: Post): string {
  if (post.type === "belajar") {
    return [post.category, post.level].filter(Boolean).join(" · ");
  }

  if (post.type === "kerja" || post.type === "pendidikan") {
    const period = `${post.startDate ?? "-"} → ${post.endDate ?? "Sekarang"}`;
    return [post.organization, period].filter(Boolean).join(" · ");
  }

  return [post.location, post.startDate ?? post.date]
    .filter(Boolean)
    .join(" · ");
}

export default function PostCard({ post }: PostCardProps) {
  const { lang } = useLanguage();
  const t = lang === "ID" ? id : lang === "EN" ? en : ban;
  const content = t.blogCard;

  const excerpt = getExcerpt(post.content);
  const metaLine = getMetaLine(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg)]">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-[var(--font-space-grotesk)] text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
              {content.noImage}
            </span>
          </div>
        )}

        {/* Categories */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {post.types.map((type) => (
            <span
              key={type}
              className="border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
              {content.categories[type] ?? typeLabel[type] ?? type}
            </span>
          ))}

          {post.types.includes("belajar") && post.level && (
            <span className="border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
              {post.level}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {metaLine && (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
            {metaLine}
          </p>
        )}

        <h3 className="line-clamp-2 font-[var(--font-space-grotesk)] text-xl font-semibold leading-snug tracking-tight text-[var(--text)] transition-colors duration-300 group-hover:text-[var(--accent)]">
          {post.title}
        </h3>

        {excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--text-muted)]">
            {excerpt}
          </p>
        )}

        {/* Read More */}
        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-5 mt-6">
          <span className="text-xs font-semibold text-[var(--accent)]">
            {content.readMore}
          </span>

          <svg
            className="h-4 w-4 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
