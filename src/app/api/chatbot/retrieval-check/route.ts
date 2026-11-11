import { NextRequest, NextResponse } from "next/server";
import { retrieveKnowledge } from "@/lib/Chatbot/Retrieval";

export async function GET(request: NextRequest) {
  try {
    const query =
      request.nextUrl.searchParams.get("q") ??
      "Apa saja proyek website yang pernah dibuat Mario?";

    const results = await retrieveKnowledge(query, {
      topK: 5,
      language: "id",
    });

    return NextResponse.json({
      query,
      totalResults: results.length,
      results: results.map((chunk) => ({
        title: chunk.title,
        heading: chunk.heading,
        slug: chunk.slug,
        type: chunk.type,
        similarity: Number(chunk.similarity.toFixed(4)),
        content: chunk.content,
      })),
    });
  } catch (error) {
    console.error("Retrieval error:", error);

    return NextResponse.json(
      { error: "Gagal melakukan pencarian knowledge." },
      { status: 500 },
    );
  }
}
