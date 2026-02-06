"use client";

import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
  Suspense,
} from "react";
import Webcam from "react-webcam";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import KamapraButton from "@/app/components/ui/ButtonKamapra";
import { usePhotoStore } from "../../../../store/usePhotoStore";
import { FRAMES } from "../data/FrameData";
import {
  FaChevronLeft,
  FaUpload,
  FaSync,
  FaExpand,
  FaCamera,
  FaTimes,
  FaCheck,
  FaMagic,
} from "react-icons/fa";

export default function CameraPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-blue-500 font-heading tracking-[0.3em]">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
          INITIALIZING CAMERA...
        </div>
      }>
      <CameraContent />
    </Suspense>
  );
}

function CameraContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const frameId = searchParams.get("frame") || "1";
  const customColor = searchParams.get("color") || "#2563eb";
  const photoShape = searchParams.get("shape") || "square";

  const currentFrame = useMemo(() => {
    if (frameId === "custom") {
      return {
        id: "custom",
        name: "Custom Frame",
        maxPhotos: 2,
        category: "Personalized",
      };
    }
    // Pastikan di FrameData.ts, frame template lainnya juga punya properti maxPhotos
    return FRAMES.find((f) => f.id === Number(frameId)) || FRAMES[0];
  }, [frameId]);

  const setCapturedPhotos = usePhotoStore((state) => state.setCapturedPhotos);
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [photos, setPhotos] = useState<string[]>([]);
  const [tempPhoto, setTempPhoto] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [timerSetting, setTimerSetting] = useState(3);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  const isFrontCamera = facingMode === "user";

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setFacingMode("environment");
    }
  }, []);

  const switchCamera = () =>
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));

  const handleFinalize = () => {
    if (photos.length === currentFrame.maxPhotos) {
      setCapturedPhotos(photos);
      router.push(
        `/photobooth/edit?frame=${frameId}&color=${encodeURIComponent(customColor)}&shape=${photoShape}`,
      );
    }
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setTempPhoto(imageSrc);
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 150);
      }
    }
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setTempPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const confirmPhoto = () => {
    if (tempPhoto && photos.length < currentFrame.maxPhotos) {
      setPhotos((prev) => [...prev, tempPhoto]);
      setTempPhoto(null);
    }
  };

  const startSequence = () => {
    setIsCapturing(true);
    let timer = timerSetting;
    setCountdown(timer);

    const interval = setInterval(() => {
      timer--;
      setCountdown(timer);
      if (timer === 0) {
        clearInterval(interval);
        capture();
        setCountdown(null);
        setIsCapturing(false);
      }
    }, 1000);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center py-10 px-6 bg-[#050505]">
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[200] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* TOP MENU */}
      <div className="relative z-10 flex flex-wrap gap-4 mb-8 items-center bg-white/5 p-2 px-6 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl">
        <button
          onClick={() => router.push("/photobooth")}
          className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-blue-500 hover:text-white transition">
          <FaChevronLeft /> BACK
        </button>

        <div className="h-4 w-px bg-white/10" />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white/60 hover:text-white transition">
          <FaUpload /> UPLOAD
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleUpload}
            accept="image/*"
          />
        </button>

        <div className="h-4 w-px bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-white/40 uppercase font-bold">
            Timer:
          </span>
          <select
            value={timerSetting}
            onChange={(e) => setTimerSetting(Number(e.target.value))}
            className="bg-transparent text-blue-400 text-[10px] font-black outline-none cursor-pointer">
            {[3, 5, 10].map((t) => (
              <option key={t} value={t} className="bg-[#050505]">
                {t}S
              </option>
            ))}
          </select>
        </div>

        <div className="h-4 w-px bg-white/10" />

        <button
          onClick={() => setIsBlur(!isBlur)}
          className={`flex items-center gap-2 text-[10px] uppercase font-black transition ${isBlur ? "text-blue-500" : "text-white/60"}`}>
          <FaExpand /> {isBlur ? "SOFT" : "SHARP"}
        </button>

        <div className="h-4 w-px bg-white/10" />

        <button
          onClick={switchCamera}
          className="text-[10px] uppercase font-black tracking-widest text-white/60 hover:text-blue-500 transition">
          <FaSync />
        </button>
      </div>

      {/* VIEWPORT 3:4 */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/5 bg-neutral-900">
          <Webcam
            audio={false}
            key={facingMode}
            ref={webcamRef}
            screenshotFormat="image/png"
            className={`absolute inset-0 w-full h-full object-cover ${isFrontCamera ? "scale-x-[-1]" : ""}`}
            videoConstraints={{ facingMode, aspectRatio: 3 / 4 }}
          />

          <AnimatePresence>
            {isBlur && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none z-10 backdrop-blur-md"
                style={{
                  maskImage:
                    "radial-gradient(circle, transparent 20%, black 80%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, transparent 20%, black 80%)",
                }}
              />
            )}
          </AnimatePresence>

          {countdown !== null && (
            <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/20">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                key={countdown}
                className="font-heading text-[180px] font-black text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                {countdown}
              </motion.span>
            </div>
          )}
        </div>

        <div className="mt-10 h-20">
          {!isCapturing && photos.length < currentFrame.maxPhotos && (
            <KamapraButton
              text={
                <div className="flex items-center gap-3">
                  <span>Capture Moment</span>
                  <FaCamera />
                </div>
              }
              onClick={startSequence}
              variant="blue"
              className="!px-12 !py-6 !text-xl"
            />
          )}
        </div>

        {/* PHOTO TRAY */}
        <div className="mt-6 w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-md">
          <div className="flex justify-between items-center mb-5 px-2">
            <div className="flex items-center gap-2">
              <FaMagic className="text-blue-500 text-xs" />
              <span className="font-heading text-white text-xs font-black uppercase tracking-widest">
                {currentFrame.name}
              </span>
            </div>
            <span className="font-mono text-[10px] text-blue-500/50 font-bold uppercase tracking-widest">
              Captured: {photos.length} / {currentFrame.maxPhotos}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {photos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-xl overflow-hidden ring-2 ring-white/5 group shadow-lg">
                <Image src={src} alt="captured" fill className="object-cover" />
                <button
                  onClick={() =>
                    setPhotos((prev) => prev.filter((_, idx) => idx !== i))
                  }
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20">
                  <FaTimes className="text-[10px]" />
                </button>
              </div>
            ))}
            {[...Array(currentFrame.maxPhotos - photos.length)].map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center bg-white/2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
            ))}
          </div>

          {photos.length === currentFrame.maxPhotos && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8">
              <KamapraButton
                text={
                  <div className="flex items-center gap-2">
                    <span>Finalize Results</span>
                    <FaCheck />
                  </div>
                }
                onClick={handleFinalize}
                variant="blue"
                className="w-full !py-4"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* PREVIEW POP-UP */}
      <AnimatePresence>
        {tempPhoto && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-neutral-900 border border-white/10 rounded-[3rem] p-8 max-w-sm w-full shadow-2xl text-center">
              <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-2">
                Review Shot
              </p>
              <h3 className="text-white font-heading text-3xl font-black uppercase mb-6">
                Looking Good!
              </h3>

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-2xl ring-1 ring-white/20">
                <Image
                  src={tempPhoto}
                  alt="Preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setTempPhoto(null)}
                  className="py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all">
                  Retake
                </button>
                <button
                  onClick={confirmPhoto}
                  className="py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-600/20 transition-all">
                  Keep It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
