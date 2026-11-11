export async function GET() {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!apiKey || !folderId) {
    return Response.json(
      { error: "Konfigurasi Google Drive belum lengkap" },
      { status: 500 },
    );
  }

  const params = new URLSearchParams({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    key: apiKey,
    pageSize: "100",
    orderBy: "createdTime desc",
    fields: "nextPageToken,files(id,name,mimeType,createdTime)",
  });

  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params.toString()}`,
      { next: { revalidate: 60 } },
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("Google Drive API error:", error);

      return Response.json(
        { error: "Google Drive API gagal mengambil foto" },
        { status: response.status },
      );
    }

    const data = await response.json();

    const photos = (data.files ?? []).map(
      (file: {
        id: string;
        name: string;
        mimeType: string;
        createdTime?: string;
      }) => ({
        id: file.id,
        name: file.name,
        thumbnail: `https://drive.google.com/thumbnail?id=${file.id}&sz=w800`,
        full: `https://drive.google.com/thumbnail?id=${file.id}&sz=w2400`,
        download: `https://drive.google.com/uc?export=download&id=${file.id}`,
        createdTime: file.createdTime,
      }),
    );

    return Response.json({
      photos,
      nextPageToken: data.nextPageToken ?? null,
    });
  } catch (error) {
    console.error("Google Drive error:", error);

    return Response.json(
      { error: "Gagal mengambil foto dari Google Drive" },
      { status: 502 },
    );
  }
}
