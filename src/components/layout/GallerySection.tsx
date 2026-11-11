"use client";

// import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

import { LuX, LuChevronLeft, LuChevronRight, LuExpand } from "react-icons/lu";

interface GalleryPhoto {
  id: string;
  name: string;
  thumbnail: string;
  full: string;
  download: string;
  createdTime: string;
}

interface GalleryResponse {
  photos?: GalleryPhoto[];
  nextPageToken?: string | null;
  error?: string;
}

export function GallerySection() {
  const { lang } = useLanguage();

  const messages = {
    ID: id,
    EN: en,
    BAN: ban,
  };

  const language = (lang in messages ? lang : "ID") as keyof typeof messages;
  const t = messages[language].gallery;

  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGallery() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/gallery", {
          signal: controller.signal,
        });

        const data: GalleryResponse = await response.json();

        if (!response.ok) {
          throw new Error(data.error || t.error);
        }

        setPhotos(data.photos ?? []);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGallery();

    return () => controller.abort();
  }, [t.error]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || photos.length === 0) return current;

      return current === 0 ? photos.length - 1 : current - 1;
    });
  }, [photos.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || photos.length === 0) return current;

      return current === photos.length - 1 ? 0 : current + 1;
    });
  }, [photos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, closeLightbox, showPrevious, showNext]);

  return (
    <>
      <section
        id="gallery"
        className="bg-background px-5 py-20 text-foreground md:px-22 md:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium tracking-[0.2em] text-(--accent-text)">
                {t.eyebrow}
              </p>

              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {t.title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-(--text-muted) md:text-base">
                {t.description}
              </p>
            </div>

            {!loading && !error && (
              <p className="text-xs tracking-wide text-(--text-muted)">
                {photos.length} {t.images}
              </p>
            )}
          </div>

          {loading && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className={`animate-pulse bg-(--surface) ${
                    index % 3 === 0 ? "h-72" : "h-52"
                  }`}
                />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="border border-(--border) px-5 py-10 text-center">
              <p className="text-sm text-(--text-muted)">{error}</p>
            </div>
          )}

          {!loading && !error && photos.length === 0 && (
            <div className="border border-(--border) px-5 py-10 text-center">
              <p className="text-sm text-(--text-muted)">{t.empty}</p>
            </div>
          )}

          {!loading && !error && photos.length > 0 && (
            <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
              {photos.map((photo, index) => (
                <figure
                  key={photo.id}
                  className="mb-3 break-inside-avoid md:mb-5">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative block w-full cursor-zoom-in overflow-hidden bg-(--surface) text-left"
                    aria-label={`View ${photo.name}`}>
                    <img
                      src={photo.thumbnail}
                      alt={photo.name}
                      loading="lazy"
                      className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black">
                        <LuExpand size={18} />
                      </span>
                    </span>
                  </button>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm md:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-7 md:top-7"
            aria-label="Close gallery">
            <LuX size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6 md:h-12 md:w-12"
            aria-label="Previous photo">
            <LuChevronLeft size={26} />
          </button>

          <div
            className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4"
            onClick={(event) => event.stopPropagation()}>
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              <img
                src={selectedPhoto.full}
                alt={selectedPhoto.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex w-full items-center justify-center gap-3 pb-2 text-white">
              <p className="max-w-[70%] truncate text-xs text-white/75 md:text-sm">
                {selectedPhoto.name}
              </p>

              <span className="text-xs tabular-nums text-white/50">
                {selectedIndex! + 1} / {photos.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:h-12 md:w-12"
            aria-label="Next photo">
            <LuChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}
