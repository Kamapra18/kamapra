"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";
import Heading from "../components/ui/Heading";

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

  const backgroundStyle = {
    backgroundColor: "var(--background)",
    backgroundImage:
      "radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)",
    backgroundSize: "24px 24px",
  };

  if (loading) {
    return (
      <div
        className="min-h-screen text-[var(--foreground)]"
        style={backgroundStyle}>
        <Navbar />
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-2 border-[var(--btn-glass-border)] border-t-[var(--accent)]" />
          <p className="font-heading text-lg font-medium text-[var(--btn-glass-text)] opacity-80 animate-pulse">
            Memuat galeri...
          </p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-[var(--foreground)]"
      style={backgroundStyle}>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-24">
        <div className="mb-12 text-center">
          <Heading text="Photo" highlight="Gallery." />
          <div className="flex items-center justify-center gap-3">
            <div
              className="h-[2px] w-10"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="font-heading text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}>
              Dokumentasi & Kenangan
            </span>
            <div
              className="h-[2px] w-10"
              style={{ background: "var(--accent)" }}
            />
          </div>
        </div>

        {photos.length === 0 ? (
          <p className="py-20 text-center font-heading text-sm text-[var(--btn-glass-text)] opacity-60">
            Tidak ada foto yang tersedia saat ini.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-4">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelected(photo)}
                className="group relative flex min-h-40 items-center justify-center overflow-hidden rounded-2xl border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)] hover:bg-[image:var(--btn-glass-bg-hover)] hover:shadow-[var(--btn-glass-shadow-hover)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
                <Image
                  src={photo.thumbnail}
                  alt={photo.name}
                  width={1200}
                  height={1200}
                  className="h-auto max-h-80 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        )}
      </main>

      <FooterSection />

      {selected && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-5 bg-black/85 p-6 backdrop-blur-md"
          onClick={() => setSelected(null)}>
          <button
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-[var(--btn-glass-border)] bg-[image:var(--btn-glass-bg)] text-2xl leading-none text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[image:var(--btn-glass-bg-hover)] hover:text-[var(--accent)] hover:shadow-[var(--btn-glass-shadow-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] cursor-pointer"
            onClick={() => setSelected(null)}
            aria-label="Tutup foto">
            ×
          </button>

          <Image
            src={selected.thumbnail}
            alt={selected.name}
            width={1200}
            height={800}
            className="h-auto max-h-[78vh] w-auto max-w-[92vw] cursor-default rounded-2xl border border-[var(--btn-glass-border)] object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <a
            href={selected.download}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[image:var(--gradient-primary)] px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-[var(--btn-glass-shadow-hover)] transition-all duration-300 hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            onClick={(event) => event.stopPropagation()}>
            Download Foto
          </a>
        </div>
      )}
    </div>
  );
}
