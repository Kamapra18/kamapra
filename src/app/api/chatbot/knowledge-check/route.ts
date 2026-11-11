import { NextResponse } from "next/server";
import { loadKnowledgeBase } from "@/lib/Chatbot/KnowledgeLoader";

export async function GET() {
  const documents = await loadKnowledgeBase();

  return NextResponse.json({
    total: documents.length,
    documents: documents.map((document) => ({
      id: document.id,
      type: document.type,
      language: document.language,
      slug: document.slug,
      title: document.title,
      contentLength: document.content.length,
    })),
  });
}
