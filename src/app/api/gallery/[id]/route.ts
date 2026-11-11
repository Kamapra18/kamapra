import { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  if (!apiKey || !id) {
    return new Response("Konfigurasi tidak valid", { status: 400 });
  }

  try {
    const url = new URL(
      `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}`,
    );

    url.searchParams.set("alt", "media");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      const errorDetails = await response.text();

      console.error("Google Drive image error:", {
        fileId: id,
        status: response.status,
        details: errorDetails,
      });

      return new Response("Gagal mengambil gambar dari Google Drive", {
        status: response.status,
      });
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.startsWith("image/")) {
      console.error("Invalid image content type:", {
        fileId: id,
        contentType,
      });

      return new Response("File bukan gambar", { status: 415 });
    }

    return new Response(response.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Gallery image proxy error:", error);

    return new Response("Gagal memuat gambar", { status: 502 });
  }
}
