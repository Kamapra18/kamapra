"use client";

import React, { useState, useRef, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import Image from "next/image";
import KamapraButton from "@/app/components/ui/ButtonKamapra";
import { usePhotoStore } from "../../../../store/usePhotoStore";
import { useRouter, useSearchParams } from "next/navigation";
import { FRAMES } from "../data/FrameData";
import { FaDownload, FaChevronLeft, FaHome } from "react-icons/fa";

const FILTERS = [
  { name: "Original", class: "" },
  { name: "Warm Film", class: "sepia-[0.3] saturate-[1.2] contrast-[1.1]" },
  { name: "Muted", class: "saturate-[0.5] contrast-[0.9] brightness-[1.1]" },
  { name: "Retro", class: "contrast-[0.8] brightness-[1.1] grayscale-[0.2]" },
  { name: "B&W Noir", class: "grayscale brightness-[0.8] contrast-[1.2]" },
  { name: "Soft", class: "contrast-[1.1] brightness-[1.05]" },
];

export default function EditorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-blue-500 font-black tracking-widest">
          RENDERING ENGINE...
        </div>
      }>
      <EditorContent />
    </Suspense>
  );
}

function EditorContent() {
  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);
  const [isProcessing, setIsProcessing] = useState(false);

  const stripRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const frameId = searchParams.get("frame") || "1";
  const customColor = searchParams.get("color") || "#2563eb";
  const photoShape = searchParams.get("shape") || "square";

  // Ukuran Desain Internal (High Res)
  const DESIGN_WIDTH = 1200;
  // Khusus Custom Frame, kita buat sedikit lebih pendek agar rasio 1:1 tidak jomplang
  const DESIGN_HEIGHT = frameId === "custom" ? 2000 : 1800;

  const activeFrame = useMemo(() => {
    if (frameId === "custom") {
      return {
        id: "custom",
        src: "",
        positions: [
          // KUNCI: Width & Height harus SAMA (850x850) agar Heart/Circle tidak gepeng
          { top: "120", left: "175", width: "850", height: "850", rotate: 0 },
          { top: "1050", left: "175", width: "850", height: "850", rotate: 0 },
        ],
      };
    }
    return FRAMES.find((f) => f.id.toString() === frameId) || FRAMES[0];
  }, [frameId]);

  const photos = usePhotoStore((state) => state.capturedPhotos);

  const CANVAS_WIDTH = 320;
  const scaleFactor = CANVAS_WIDTH / DESIGN_WIDTH;

  const getClipStyle = (shape: string): React.CSSProperties => {
    // Base style untuk memastikan rasio 1:1 tetap terjaga
    const baseStyle: React.CSSProperties = {
      aspectRatio: "1/1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    switch (shape) {
      case "circle":
        return { ...baseStyle, borderRadius: "9999px" };
      case "heart":
        return {
          ...baseStyle,
          clipPath:
            "polygon(50% 15%, 57% 9%, 66% 5%, 75% 4%, 84% 6%, 92% 11%, 97% 19%, 99% 28%, 99% 38%, 96% 48%, 90% 58%, 82% 67%, 72% 76%, 62% 85%, 50% 95%, 38% 85%, 28% 76%, 18% 67%, 10% 58%, 4% 48%, 1% 38%, 1% 28%, 3% 19%, 8% 11%, 16% 6%, 25% 4%, 34% 5%, 43% 9%)",
          borderRadius: "0px",
        };
      case "portrait":
        return { borderRadius: "24px", aspectRatio: "2/3" };
      default:
        return { ...baseStyle, borderRadius: "12px" };
    }
  };

  const handleDownload = async () => {
    if (!stripRef.current) return;
    setIsProcessing(true);
    try {
      const dataUrl = await toPng(stripRef.current, {
        quality: 1,
        pixelRatio: 3,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `Kamapra-Moment-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Gagal menyimpan gambar.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (photos.length === 0) return null;

  return (
    <main className="min-h-screen py-10 px-6 flex flex-col items-center "
    style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8 text-center">
        <h2 className="font-heading text-3xl text-white font-black uppercase tracking-[0.2em]">
          Final <span className="text-blue-500">Result</span>
        </h2>
        <p className="text-white/30 text-[10px] font-bold tracking-widest mt-2 uppercase">
          Apply filter & save your moment
        </p>
      </motion.div>

      {/* STRIP PREVIEW */}
      <div className="relative bg-neutral-900/50 p-6 rounded-[3.5rem] mb-10 border border-white/5 shadow-2xl">
        <div
          ref={stripRef}
          className="relative overflow-hidden shadow-2xl"
          style={{
            width: `${CANVAS_WIDTH}px`,
            height: `${DESIGN_HEIGHT * scaleFactor}px`,
            backgroundColor: frameId === "custom" ? customColor : "#120000",
          }}>
          {/* Layer Foto */}
          <div className="absolute inset-0 z-10">
            {activeFrame.positions.map((pos, index) => {
              const parseVal = (val: string) => parseFloat(val) * scaleFactor;

              return (
                <div
                  key={index}
                  className={`absolute overflow-hidden flex items-center justify-center transition-all duration-500 ${selectedFilter.class}`}
                  style={{
                    top: `${parseVal(pos.top)}px`,
                    left: `${parseVal(pos.left)}px`,
                    width: `${parseVal(pos.width)}px`,
                    height: `${parseVal(pos.height)}px`,
                    transform: `rotate(${pos.rotate}deg)`,
                    ...getClipStyle(photoShape),
                  }}>
                  <Image
                    src={photos[index] || photos[0]}
                    alt="shot"
                    fill
                    className="object-cover scale-110"
                    unoptimized
                  />
                </div>
              );
            })}
          </div>

          {/* Frame Template Overlay */}
          {frameId !== "custom" && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <Image
                src={activeFrame.src}
                alt="frame"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Branding Custom Frame */}
          {frameId === "custom" && (
            <div className="absolute bottom-3 w-full text-center z-30 pointer-events-none">
              <p className="font-heading text-[10px] font-black tracking-[0.4em] text-white/50 uppercase italic">
                KAMAPRA PHOTOBOX
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FILTER CONTROLS */}
      <div className="w-full max-w-xl mb-12">
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x px-4">
          {FILTERS.map((f) => (
            <button
              key={f.name}
              onClick={() => setSelectedFilter(f)}
              className={`flex-shrink-0 p-2 rounded-2xl transition-all snap-center ${
                selectedFilter.name === f.name
                  ? "bg-blue-600/20 ring-2 ring-blue-500"
                  : "bg-white/5 grayscale hover:grayscale-0"
              }`}>
              <div
                className={`relative w-16 h-16 rounded-xl overflow-hidden ${f.class}`}>
                <Image
                  src={photos[0]}
                  alt="preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <span className="text-[10px] font-black text-white/70 block mt-2 uppercase text-center">
                {f.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        <KamapraButton
          text={
            <div className="flex items-center gap-3">
              <span>{isProcessing ? "PROCESSING..." : "DOWNLOAD PHOTO"}</span>
              {!isProcessing && <FaDownload />}
            </div>
          }
          onClick={handleDownload}
          variant="blue"
          className="w-full !py-6 !text-lg shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
          disabled={isProcessing}
        />
        <div className="flex items-center gap-8 mt-2">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/40 hover:text-white uppercase text-[10px] font-black tracking-widest transition-all">
            <FaChevronLeft /> Retake
          </button>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <button
            onClick={() => {
              usePhotoStore.getState().clearPhotos();
              router.push("/photobooth");
            }}
            className="flex items-center gap-2 text-white/40 hover:text-blue-500 uppercase text-[10px] font-black tracking-widest transition-all">
            <FaHome /> Start Over
          </button>
        </div>
      </div>
    </main>
  );
}
