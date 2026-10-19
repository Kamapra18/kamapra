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

  if (loading) {
    return (
      <p className="min-h-screen bg-slate-200 py-24 text-center text-slate-500 dark:bg-slate-900 dark:text-slate-400">
        Memuat galeri...
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-10 sm:py-16">
        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:mb-10 sm:text-5xl">
          Photo Gallery
        </h1>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-4">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelected(photo)}
              className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl bg-slate-400/20 p-0 shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 dark:focus-visible:outline-teal-400">
              <Image
                src={photo.thumbnail}
                alt={photo.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-5 bg-slate-900/90 p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}>
          <button
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-3xl leading-none text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            onClick={() => setSelected(null)}
            aria-label="Tutup foto">
            ×
          </button>

          <Image
            src={selected.thumbnail}
            alt={selected.name}
            width={1200}
            height={800}
            className="h-auto max-h-[78vh] w-auto max-w-[92vw] cursor-default rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <a
            href={selected.download}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-px hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 dark:bg-teal-400 dark:text-teal-950"
            onClick={(event) => event.stopPropagation()}>
            Download Foto
          </a>
        </div>
      )}
    </main>
  );
}