"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Photo = {
  id: string;
  name: string;
  thumbnail: string;
  download: string;
};

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selected, setSelected] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) throw new Error("Gagal memuat foto");
        return response.json();
      })
      .then((data: { photos: Photo[] }) => setPhotos(data.photos))
      .catch((error) => console.error("Gagal memuat galeri:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Memuat galeri...</p>;

  return (
    <main className="gallery">
      <h1>Photo Gallery</h1>

      <div className="photo-grid">
        {photos.map((photo) => (
          <button
            key={photo.id}
            className="photo-item"
            onClick={() => setSelected(photo)}>
            <Image
              src={photo.thumbnail}
              alt={photo.name}
              width={400}
              height={300}
            />
          </button>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <button
            className="close"
            onClick={() => setSelected(null)}
            aria-label="Tutup foto">
            ×
          </button>

          <Image
            src={selected.thumbnail}
            alt={selected.name}
            width={1200}
            height={800}
            className="modal-image"
            onClick={(event) => event.stopPropagation()}
          />

          <a
            href={selected.download}
            target="_blank"
            rel="noreferrer"
            className="download"
            onClick={(event) => event.stopPropagation()}>
            Download Foto
          </a>
        </div>
      )}
    </main>
  );
}
