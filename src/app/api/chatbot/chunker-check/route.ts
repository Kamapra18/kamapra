import { NextResponse } from "next/server";
import { loadKnowledgeBase } from "@/lib/Chatbot/KnowledgeLoader";
import { chunkKnowledge } from "@/lib/Chatbot/KnowledgeChunker";

export async function GET() {
  const documents = await loadKnowledgeBase();
  const chunks = chunkKnowledge(documents);

  return NextResponse.json({
    totalDocuments: documents.length,
    totalChunks: chunks.length,
    preview: chunks.slice(0, 5),
  });
}
