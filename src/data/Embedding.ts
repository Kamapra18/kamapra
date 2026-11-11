import { GoogleGenAI } from "@google/genai";
import fs from "node:fs/promises";
import path from "node:path";

import { loadKnowledgeBase } from "../lib/Chatbot/scripts/KnowledeLoader";
import { chunkKnowledge } from "../lib/Chatbot/scripts/KnowledgeChunker";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY tidak ditemukan.");
}

const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    apiVersion: "v1beta",
  },
});

const MODEL = "gemini-embedding-001";
const OUTPUT_DIMENSIONALITY = 768;

const MAX_RETRIES = 5;
const REQUEST_DELAY = 300;
const SAVE_INTERVAL = 5;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type EmbeddedChunk = {
  id: string;
  embedding: number[];
  [key: string]: unknown;
};

async function saveProgress(
  outputDirectory: string,
  results: EmbeddedChunk[],
  totalDocuments: number,
) {
  const checkpointPath = path.join(outputDirectory, "embeddings.progress.json");

  await fs.mkdir(outputDirectory, { recursive: true });

  await fs.writeFile(
    checkpointPath,
    JSON.stringify(
      {
        model: MODEL,
        dimensions: OUTPUT_DIMENSIONALITY,
        totalDocuments,
        totalChunks: results.length,
        updatedAt: new Date().toISOString(),
        data: results,
      },
      null,
      2,
    ),
    "utf-8",
  );
}

async function loadProgress(
  checkpointPath: string,
  finalPath: string,
): Promise<EmbeddedChunk[]> {
  // Prioritaskan checkpoint.
  for (const filePath of [checkpointPath, finalPath]) {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const saved = JSON.parse(content);

      if (
        saved.model !== MODEL ||
        saved.dimensions !== OUTPUT_DIMENSIONALITY ||
        !Array.isArray(saved.data)
      ) {
        console.warn(`Format progress tidak cocok: ${filePath}`);
        continue;
      }

      console.log(`Progress ditemukan: ${filePath}`);

      return saved.data.filter(
        (item: EmbeddedChunk) =>
          typeof item.id === "string" &&
          Array.isArray(item.embedding) &&
          item.embedding.length === OUTPUT_DIMENSIONALITY,
      );
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        console.warn(`Tidak dapat membaca ${filePath}:`, error);
      }
    }
  }

  return [];
}

async function generateEmbedding(content: string): Promise<number[]> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.embedContent({
        model: MODEL,
        contents: content,
        config: {
          taskType: "RETRIEVAL_DOCUMENT",
          outputDimensionality: OUTPUT_DIMENSIONALITY,
        },
      });

      const values = response.embeddings?.[0]?.values;

      if (!values?.length) {
        throw new Error("Embedding kosong.");
      }

      return values;
    } catch (error) {
      lastError = error;

      console.error(`Request gagal (${attempt}/${MAX_RETRIES}):`, error);

      if (attempt < MAX_RETRIES) {
        const delay = Math.min(1000 * 2 ** (attempt - 1), 15000);

        console.log(`Mencoba kembali dalam ${delay / 1000} detik...`);

        await sleep(delay);
      }
    }
  }

  throw lastError;
}

async function main() {
  const outputDirectory = path.join(process.cwd(), "data", "chatbot");

  const checkpointPath = path.join(outputDirectory, "embeddings.progress.json");

  const outputPath = path.join(outputDirectory, "embeddings.json");

  console.log("Memuat knowledge base...");

  const documents = await loadKnowledgeBase();
  const chunks = chunkKnowledge(documents);

  console.log(`Dokumen: ${documents.length}`);
  console.log(`Total chunks: ${chunks.length}`);

  const savedResults = await loadProgress(checkpointPath, outputPath);

  // Hanya gunakan embedding yang ID-nya masih ada di knowledge base.
  const validChunkIds = new Set(chunks.map((chunk) => chunk.id));

  const resultsMap = new Map<string, EmbeddedChunk>();

  for (const result of savedResults) {
    if (validChunkIds.has(result.id)) {
      resultsMap.set(result.id, result);
    }
  }

  console.log(`Embedding tersimpan: ${resultsMap.size}`);
  console.log(`Embedding tersisa: ${chunks.length - resultsMap.size}`);

  let processedSinceSave = 0;

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    // Lewati chunk yang sudah berhasil dibuat.
    if (resultsMap.has(chunk.id)) {
      continue;
    }

    try {
      const content = `${chunk.title}\n${chunk.heading}\n${chunk.content}`;

      const values = await generateEmbedding(content);

      resultsMap.set(chunk.id, {
        ...chunk,
        embedding: values,
      });

      processedSinceSave++;

      console.log(`[${resultsMap.size}/${chunks.length}] ${chunk.id}`);

      // Simpan progress setiap 5 chunk.
      if (processedSinceSave >= SAVE_INTERVAL) {
        await saveProgress(
          outputDirectory,
          Array.from(resultsMap.values()),
          documents.length,
        );

        console.log("Progress berhasil disimpan.");

        processedSinceSave = 0;
      }

      await sleep(REQUEST_DELAY);
    } catch (error) {
      console.error(`Gagal pada chunk ${chunk.id}:`, error);

      // Simpan hasil yang sudah berhasil sebelum berhenti.
      await saveProgress(
        outputDirectory,
        Array.from(resultsMap.values()),
        documents.length,
      );

      throw error;
    }
  }

  const results = Array.from(resultsMap.values());

  // Simpan hasil final.
  await fs.writeFile(
    outputPath,
    JSON.stringify(
      {
        model: MODEL,
        dimensions: OUTPUT_DIMENSIONALITY,
        totalDocuments: documents.length,
        totalChunks: results.length,
        generatedAt: new Date().toISOString(),
        data: results,
      },
      null,
      2,
    ),
    "utf-8",
  );

  // Hapus checkpoint setelah hasil final berhasil dibuat.
  await fs.rm(checkpointPath, { force: true });

  console.log("\nEmbedding berhasil dibuat!");
  console.log(`Total embedding: ${results.length}`);
  console.log(`Lokasi: ${outputPath}`);
}

main().catch((error) => {
  console.error("\nGagal membuat embeddings:", error);
  process.exit(1);
});
