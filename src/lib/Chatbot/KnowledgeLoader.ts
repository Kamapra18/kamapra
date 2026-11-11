import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type KnowledgeLanguage = "id" | "en" | "ban";
export type KnowledgeType = "post" | "project" | "profile";

export interface KnowledgeDocument {
  id: string;
  type: KnowledgeType;
  language: KnowledgeLanguage;
  slug: string;
  title: string;
  metadata: Record<string, unknown>;
  content: string;
  sourcePath: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");
const LANGUAGES: KnowledgeLanguage[] = ["id", "en", "ban"];

async function parseMarkdown(
  filePath: string,
  type: KnowledgeType,
  slug: string,
  language: KnowledgeLanguage,
): Promise<KnowledgeDocument | null> {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const parsed = matter(raw);

    const metadata = parsed.data as Record<string, unknown>;
    const content = parsed.content.trim();

    if (!content) return null;

    const title = typeof metadata.title === "string" ? metadata.title : slug;

    return {
      id: `${type}:${slug}:${language}`,
      type,
      language,
      slug,
      title,
      metadata,
      content,
      sourcePath: path.relative(process.cwd(), filePath),
    };
  } catch (error) {
    console.error(`Failed to parse ${filePath}:`, error);
    return null;
  }
}

async function readPosts(): Promise<KnowledgeDocument[]> {
  const directory = path.join(CONTENT_ROOT, "posts");
  const documents: KnowledgeDocument[] = [];

  let files: string[];

  try {
    files = await fs.readdir(directory);
  } catch {
    return documents;
  }

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const slug = file.replace(/\.md$/, "");
    const document = await parseMarkdown(
      path.join(directory, file),
      "post",
      slug,
      "id",
    );

    if (document) documents.push(document);
  }

  return documents;
}

async function readProjects(): Promise<KnowledgeDocument[]> {
  const directory = path.join(CONTENT_ROOT, "projects");
  const documents: KnowledgeDocument[] = [];

  let entries;

  try {
    entries = await fs.readdir(directory, {
      withFileTypes: true,
    });
  } catch {
    return documents;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    for (const language of LANGUAGES) {
      const filePath = path.join(directory, entry.name, `${language}.md`);

      try {
        await fs.access(filePath);
      } catch {
        continue;
      }

      const document = await parseMarkdown(
        filePath,
        "project",
        entry.name,
        language,
      );

      if (document) documents.push(document);
    }
  }

  return documents;
}

async function readProfile(): Promise<KnowledgeDocument[]> {
  const directory = path.join(CONTENT_ROOT, "profile");
  const documents: KnowledgeDocument[] = [];

  for (const language of LANGUAGES) {
    const filePath = path.join(directory, `${language}.md`);

    try {
      await fs.access(filePath);
    } catch {
      continue;
    }

    const document = await parseMarkdown(
      filePath,
      "profile",
      "profile",
      language,
    );

    if (document) documents.push(document);
  }

  return documents;
}

export async function loadKnowledgeBase(): Promise<KnowledgeDocument[]> {
  const [posts, projects, profiles] = await Promise.all([
    readPosts(),
    readProjects(),
    readProfile(),
  ]);

  return [...posts, ...projects, ...profiles];
}
