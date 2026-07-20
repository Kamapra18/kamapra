import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/app/lib/posts";

interface PostCardProps {
  post: Post;
}

const typeLabel: Record<Post["type"], string> = {
  belajar: "Belajar",
  kerja: "Kerja",
  pendidikan: "Pendidikan",
  event: "Event",
  liburan: "Liburan",
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
  const excerpt = getExcerpt(post.content);
  const metaLine = getMetaLine(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--btn-glass-border-hover)] bg-[var(--bakground))] transition duration-300 hover:border-[var(--accent)] hover:shadow-[var(--btn-glass-shadow-hover)]">
      <div className="relative h-56 w-full overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--bg-base)] text-xs uppercase tracking-widest text-[var(--btn-glass-text)] opacity-60">
            Tanpa Gambar
          </div>
        )}

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--foreground)] backdrop-blur">
            {typeLabel[post.type]}
          </span>
          {post.type === "belajar" && post.level ? (
            <span className="rounded-full border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--foreground)] backdrop-blur">
              {post.level}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-bold leading-snug text-[var(--foreground)] line-clamp-2">
          {post.title}
        </h3>

        {metaLine ? (
          <p className="text-xs text-[var(--btn-glass-text)] opacity-70">
            {metaLine}
          </p>
        ) : null}

        {excerpt ? (
          <p className="text-sm leading-6 text-[var(--btn-glass-text)] opacity-90 line-clamp-3">
            {excerpt}
          </p>
        ) : null}

        <span className="relative mt-auto inline-flex w-fit items-center overflow-hidden rounded-full px-4 py-1.5 text-sm font-semibold">
          <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 rounded-full bg-[image:var(--gradient-primary)] transition-transform duration-300 ease-out group-hover:scale-y-100" />
          <span className="relative z-10 border-b border-[var(--accent)] text-[var(--accent)] transition-colors duration-300 group-hover:border-transparent group-hover:text-[var(--foreground)]">
            Read more
          </span>
        </span>
      </div>
    </Link>
  );
}
