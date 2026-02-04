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

  const activeFrame = useMemo(() => {
    if (frameId === "custom") {
      return {
        id: "custom",
        src: "",
      
        positions: [
          { top: "60", left: "60", width: "1080", height: "700", rotate: 0 }, 
          { top: "780", left: "60", width: "1080", height: "700", rotate: 0 }, 
        ],
      };
    }
    return FRAMES.find((f) => f.id.toString() === frameId) || FRAMES[0];
  }, [frameId]);

  const photos = usePhotoStore((state) => state.capturedPhotos);

  // Kalkulasi Skala Preview
  const DESIGN_WIDTH = 1200;
  const CANVAS_WIDTH = 320; 
  const scaleFactor = CANVAS_WIDTH / DESIGN_WIDTH;

  const handleDownload = async () => {
    if (!stripRef.current) return;
    setIsProcessing(true);

    try {
      // Generate Image
      const dataUrl = await toPng(stripRef.current, {
        quality: 1,
        pixelRatio: 3, 
        cacheBust: true,
      });

      // Trigger Download
      const link = document.createElement("a");
      link.download = `Kamapra-Moment-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to save image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (photos.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-4">
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
          No photos found
        </p>
        <KamapraButton
          text="Back to Home"
          onClick={() => router.push("/")}
          variant="blue"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen py-10 px-6 flex flex-col items-center bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8">
        <h2 className="font-heading text-3xl text-white font-black uppercase tracking-[0.2em]">
          Final <span className="text-blue-500">Result</span>
        </h2>
        <p className="text-white/30 text-[10px] font-bold tracking-widest mt-2 uppercase">
          Apply filter & save your moment
        </p>
      </motion.div>

      {/* STRIP PREVIEW */}
      <div className="relative bg-neutral-900/50 p-6 rounded-[3rem] mb-10 border border-white/5 shadow-2xl">
        <div
          ref={stripRef}
          className="relative overflow-hidden shadow-2xl"
          style={{
            width: `${CANVAS_WIDTH}px`,
            height: `${CANVAS_WIDTH * 1.5}px`, 
            backgroundColor: frameId === "custom" ? customColor : "#120000",
          }}>
          {/* Layer Foto */}
          <div className="absolute inset-0 z-10">
            {activeFrame.positions.map((pos, index) => {
              const parseVal = (val: string) => parseFloat(val) * scaleFactor;
              return (
                <div
                  key={index}
                  className={`absolute overflow-hidden transition-all duration-500 ${selectedFilter.class}`}
                  style={{
                    top: `${parseVal(pos.top)}px`,
                    left: `${parseVal(pos.left)}px`,
                    width: `${parseVal(pos.width)}px`,
                    height: `${parseVal(pos.height)}px`,
                    transform: `rotate(${pos.rotate}deg)`,
                  }}>
                  <Image
                    src={photos[index] || photos[0]}
                    alt="shot"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              );
            })}
          </div>

          {/* Layer Bingkai (Frame Overlay) */}
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

          {/* Branding Kamapra di Frame Custom */}
          {frameId === "custom" && (
            <div className="absolute bottom-4 w-full text-center z-30 pointer-events-none">
              <span className="font-heading text-[10px] font-black tracking-[0.5em] text-white/50 uppercase">
                KAMAPRA PHOTOBOX
              </span>
            </div>
          )}
        </div>
      </div>

      {/* FILTER CONTROLS */}
      <div className="w-full max-w-xl mb-12">
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
          {FILTERS.map((f) => (
            <button
              key={f.name}
              onClick={() => setSelectedFilter(f)}
              className={`flex-shrink-0 p-2 rounded-2xl transition-all snap-center ${
                selectedFilter.name === f.name
                  ? "bg-blue-600/20 ring-2 ring-blue-500"
                  : "bg-white/5 grayscale"
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
              <span className="text-[10px] font-black text-white/70 block mt-2 uppercase tracking-tighter text-center">
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
