import "server-only";

import type { RetrievedChunk } from "./Retrieval";

interface ContextOptions {
  maxChunks?: number;
  maxCharacters?: number;
  currentPage?: {
    type?: "home" | "profile" | "project" | "post";
    slug?: string;
  };
}

export function buildKnowledgeContext(
  chunks: RetrievedChunk[],
  options?: ContextOptions,
): string {
  const maxChunks = options?.maxChunks ?? 5;
  const maxCharacters = options?.maxCharacters ?? 9000;

  const selectedChunks = [...chunks]
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, maxChunks);

  const sections: string[] = [];
  let totalCharacters = 0;

  for (const chunk of selectedChunks) {
    const section = [
      `[Sumber: ${chunk.type}]`,
      `Judul: ${chunk.title}`,
      `Bagian: ${chunk.heading}`,
      `Slug: ${chunk.slug}`,
      `Relevansi: ${chunk.similarity.toFixed(4)}`,
      chunk.content,
    ].join("\n");

    if (totalCharacters + section.length > maxCharacters) {
      continue;
    }

    sections.push(section);
    totalCharacters += section.length;
  }

  const page = options?.currentPage;

  const pageContext = page
    ? [
        "KONTEKS HALAMAN SAAT INI:",
        `Jenis halaman: ${page.type ?? "home"}`,
        `Slug: ${page.slug ?? "-"}`,
      ].join("\n")
    : "";

  return [
    "INFORMASI SUMBER KNOWLEDGE BASE:",
    pageContext,
    sections.join("\n\n---\n\n"),
  ]
    .filter(Boolean)
    .join("\n\n");
}
