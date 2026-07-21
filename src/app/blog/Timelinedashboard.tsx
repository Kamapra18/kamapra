"use client";

import { useMemo, useState } from "react";
import PostCard from "@/app/components/card/Postcard";
import type { Post } from "@/app/lib/posts";

interface TimelineDashboardProps {
  posts: Post[];
}

const filters: Array<{ label: string; value: Post["type"] | "semua" }> = [
  { label: "Semua", value: "semua" },
  { label: "Belajar", value: "belajar" },
  { label: "Kerja", value: "kerja" },
  { label: "Pendidikan", value: "pendidikan" },
  { label: "Event", value: "event" },
  { label: "Liburan", value: "liburan" },
  { label: "Personal", value: "personal" },
];

export default function TimelineDashboard({ posts }: TimelineDashboardProps) {
  const [activeFilter, setActiveFilter] = useState<Post["type"] | "semua">(
    "semua",
  );
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchType = activeFilter === "semua" || post.type === activeFilter;
      const matchSearch = post.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      return matchType && matchSearch;
    });
  }, [posts, activeFilter, search]);

  return (
    <main className="relative mx-auto max-w-6xl px-6 py-16 md:px-12">
      <div className="mb-12 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
          Personal Timeline
        </p>
        <h1 className="text-4xl font-semibold text-[var(--foreground)] md:text-5xl">
          Catatan Perjalanan
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-[var(--btn-glass-text)] opacity-80">
          Kumpulan catatan belajar, riwayat kerja, pendidikan, event, dan
          liburan yang pernah dijalani.
        </p>
      </div>

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "border-[var(--accent)] bg-[image:var(--gradient-primary)] text-[var(--foreground)] shadow-[var(--btn-glass-shadow-hover)]"
                    : "border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] text-[var(--btn-glass-text)] opacity-80 hover:border-[var(--btn-glass-border-hover)] hover:opacity-100"
                }`}>
                {filter.label}
              </button>
            );
          })}
        </div>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Cari judul..."
          className="w-full rounded-full border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] px-4 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--btn-glass-text)] placeholder:opacity-60 transition focus:border-[var(--accent)] focus:outline-none sm:w-64"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <p className="py-20 text-center text-sm text-[var(--btn-glass-text)] opacity-60">
          Tidak ada catatan yang cocok.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
