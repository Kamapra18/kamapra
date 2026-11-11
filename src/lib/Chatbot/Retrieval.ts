import "server-only";

import { GoogleGenAI } from "@google/genai";
import fs from "node:fs/promises";
import path from "node:path";

interface StoredChunk {
  id: string;
  documentId: string;
  type: "post" | "project" | "profile";
  language: "id" | "en" | "ban";
  slug: string;
  title: string;
  heading: string;
  content: string;
  metadata: Record<string, unknown>;
  embedding: number[];
}

interface EmbeddingDatabase {
  model: string;
  dimensions: number;
  totalDocuments: number;
  totalChunks: number;
  generatedAt: string;
  data: StoredChunk[];
}

export interface RetrievedChunk extends StoredChunk {
  similarity: number;
}

interface RetrievalOptions {
  topK?: number;
  language?: "id" | "en" | "ban";
  type?: "post" | "project" | "profile";
  slug?: string;
  currentPage?: {
    type?: "home" | "profile" | "project" | "post";
    slug?: string;
  };
}

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY belum dikonfigurasi.");
}

const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    apiVersion: "v1beta",
  },
});

const embeddingPath = path.join(
  process.cwd(),
  "data",
  "chatbot",
  "embeddings.json",
);

let databasePromise: Promise<EmbeddingDatabase> | null = null;

async function loadEmbeddingDatabase(): Promise<EmbeddingDatabase> {
  if (!databasePromise) {
    databasePromise = fs
      .readFile(embeddingPath, "utf-8")
      .then((content) => JSON.parse(content) as EmbeddingDatabase)
      .catch((error) => {
        databasePromise = null;
        throw error;
      });
  }

  return databasePromise;
}

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length || a.length === 0) return 0;

  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    magnitudeA += a[i] * a[i];
    magnitudeB += b[i] * b[i];
  }

  if (magnitudeA === 0 || magnitudeB === 0) return 0;

  return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}

export async function retrieveKnowledge(
  query: string,
  options?: RetrievalOptions,
): Promise<RetrievedChunk[]> {
  if (!query.trim()) return [];

  const database = await loadEmbeddingDatabase();

  if (!database.data.length) return [];

  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: query.trim(),
    config: {
      taskType: "RETRIEVAL_QUERY",
      outputDimensionality: database.dimensions,
    },
  });

  const queryEmbedding = response.embeddings?.[0]?.values;

  if (!queryEmbedding?.length) {
    throw new Error("Gagal membuat embedding pertanyaan.");
  }

  let candidates = database.data;

  if (options?.language) {
    candidates = candidates.filter(
      (chunk) => chunk.language === options.language,
    );
  }

  if (options?.type) {
    candidates = candidates.filter((chunk) => chunk.type === options.type);
  }

  if (options?.slug) {
    candidates = candidates.filter((chunk) => chunk.slug === options.slug);
  }

  const currentPage = options?.currentPage;

  return candidates
    .map((chunk) => {
      const similarity = cosineSimilarity(queryEmbedding, chunk.embedding);

      const samePage =
        currentPage?.slug &&
        chunk.slug === currentPage.slug &&
        (currentPage.type === "home" || currentPage.type === chunk.type);

      // Bonus kecil agar sumber halaman aktif lebih diprioritaskan.
      const pageBonus = samePage ? 0.08 : 0;

      return {
        ...chunk,
        similarity: Math.min(similarity + pageBonus, 1),
      };
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, options?.topK ?? 5);
}
