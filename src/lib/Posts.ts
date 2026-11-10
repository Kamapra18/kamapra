import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostType =
  | "belajar"
  | "kerja"
  | "pendidikan"
  | "event"
  | "liburan"
  | "personal";

export interface Post {
  title: string;
  description: string;
  readTime: number;
  type: PostType;
  types: PostType[];
  category?: string;
  level?: string;
  coverImage?: string;
  location?: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  date: string;
  slug: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content", "posts");

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date === b.date) return 0;
    return a.date > b.date ? -1 : 1;
  });
}

function normalizeTypes(raw: unknown): PostType[] {
  const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

  const types = list.map((t) => String(t).trim()).filter(Boolean) as PostType[];

  return types.length > 0 ? types : ["personal"];
}

function calculateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function mapPost(filename: string, slug: string): Post {
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const types = normalizeTypes(data.type);
  const markdownContent = String(content || "");

  return {
    title: String(data.title || "Untitled"),
    description: String(data.description || ""),
    readTime: data.readTime
      ? Number(data.readTime)
      : calculateReadTime(markdownContent),
    type: types[0],
    types,
    category: data.category ? String(data.category) : undefined,
    level: data.level ? String(data.level) : undefined,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    location: data.location ? String(data.location) : undefined,
    organization: data.organization ? String(data.organization) : undefined,
    startDate: data.startDate ? String(data.startDate) : undefined,
    endDate: data.endDate ? String(data.endDate) : undefined,
    date: String(data.date || "1970-01-01"),
    slug,
    content: markdownContent,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    return mapPost(filename, slug);
  });

  return sortPosts(posts);
}

export function getPostBySlug(slug: string): Post | null {
  const safeSlug = path.basename(slug);

  const fullPath = path.join(postsDirectory, `${safeSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return mapPost(`${safeSlug}.md`, safeSlug);
}

export function getPostsByType(type: string): Post[] {
  return getAllPosts().filter((post) => post.types.includes(type as PostType));
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getPostChapters(content: string): Chapter[] {
  const headingRegex = /^###\s+(.+)$/gm;
  const matches = [...content.matchAll(headingRegex)];

  if (matches.length === 0) {
    return [
      {
        id: "isi",
        title: "Isi",
        content: content.trim(),
      },
    ];
  }

  return matches.map((match, index) => {
    const start = match.index ?? 0;

    const end =
      index + 1 < matches.length
        ? (matches[index + 1].index ?? content.length)
        : content.length;

    const title = match[1].trim();
    const chapterContent = content.slice(start, end).trim();
    const baseId = slugify(title) || `chapter-${index}`;

    return {
      id: baseId,
      title,
      content: chapterContent,
    };
  });
}
