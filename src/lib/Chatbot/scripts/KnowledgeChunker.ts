// import "server-only";

import type { KnowledgeDocument } from "./KnowledgeLoader";

export interface KnowledgeChunk {
  id: string;
  documentId: string;
  type: KnowledgeDocument["type"];
  language: KnowledgeDocument["language"];
  slug: string;
  title: string;
  heading: string;
  content: string;
  metadata: Record<string, unknown>;
}

function splitLongContent(content: string, maxLength = 1200): string[] {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    if (paragraph.length > maxLength) {
      if (current) {
        chunks.push(current);
        current = "";
      }

      for (let i = 0; i < paragraph.length; i += maxLength) {
        chunks.push(paragraph.slice(i, i + maxLength));
      }

      continue;
    }

    const combined = current ? `${current}\n\n${paragraph}` : paragraph;

    if (combined.length > maxLength) {
      if (current) chunks.push(current);
      current = paragraph;
    } else {
      current = combined;
    }
  }

  if (current) chunks.push(current);

  return chunks;
}

export function chunkKnowledge(
  documents: KnowledgeDocument[],
): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  for (const document of documents) {
    const sections = document.content.split(/(?=^#{1,3}\s+)/m);

    let currentHeading = "Introduction";

    for (const section of sections) {
      const trimmed = section.trim();

      if (!trimmed) continue;

      const headingMatch = trimmed.match(/^#{1,3}\s+(.+)/);

      if (headingMatch) {
        currentHeading = headingMatch[1].trim();
      }

      const body = trimmed.replace(/^#{1,3}\s+.+\n?/, "").trim();

      if (!body) continue;

      const pieces = splitLongContent(body);

      pieces.forEach((piece, index) => {
        chunks.push({
          id: `${document.id}:chunk:${chunks.length}`,
          documentId: document.id,
          type: document.type,
          language: document.language,
          slug: document.slug,
          title: document.title,
          heading: currentHeading,
          content: piece,
          metadata: document.metadata,
        });
      });
    }
  }

  return chunks;
}
