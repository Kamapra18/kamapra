"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import KamapraButton from "@/app/components/ui/ButtonKamapra";
import { FRAMES } from "../data/FrameData";
import {
  FaLayerGroup,
  FaPalette,
  FaCamera,
  FaArrowRight,
} from "react-icons/fa";
import CustomColorPicker from "./CustomFrame";

export default function FrameSelection() {
  const [activeTab, setActiveTab] = useState("template");
  const [customColor, setCustomColor] = useState("#2563eb");
  const [photoShape, setPhotoShape] = useState("square");

  // Fungsi navigasi otomatis untuk Template
  const handleTemplateSelect = (frameId: string | number) => {
    window.location.href = `/photobooth/camera?frame=${frameId}`;
  };

  // Fungsi navigasi untuk Custom Color
  const handleCustomConfirm = () => {
    const colorParam = encodeURIComponent(customColor);
    window.location.href = `/photobooth/camera?frame=custom&color=${colorParam}&shape=${photoShape}`;
  };

  return (
    <main
      id="frame"
      className="min-h-screen py-20 px-10 relative bg-[#050505] text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <FaLayerGroup />
            <span>Step 1: Style Selection</span>
          </motion.div>

          <motion.h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Pilih <span className="text-blue-500">Bingkai</span>
          </motion.h2>
          <motion.p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Pilih template bingkai yang kamu suka atau buat bingkai custom
            sesuai warna favoritmu. Untuk frame lainnya bakal ditambahin terus
            nih! masih dalam pengembangan.
          </motion.p>
        </header>

        {/* TAB SWITCHER */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex gap-1">
            <button
              onClick={() => setActiveTab("template")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "template"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-500 hover:text-white"
              }`}>
              <FaLayerGroup /> Template
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === "custom"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-500 hover:text-white"
              }`}>
              <FaPalette /> Custom Color
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <AnimatePresence mode="wait">
          {activeTab === "template" ? (
            <motion.div
              key="template-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {FRAMES.map((frame) => (
                <motion.div
                  key={frame.id}
                  whileHover={{ y: -10 }}
                  onClick={() => handleTemplateSelect(frame.id)}
                  className="cursor-pointer relative group rounded-3xl p-5 transition-all duration-500 border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5">
                  <div className="relative aspect-[3/4] w-full mb-6 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
                    <Image
                      src={frame.src}
                      alt={frame.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay saat hover untuk mempertegas klik */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-tighter flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Use Frame <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="font-bold text-lg uppercase tracking-tight">
                        {frame.name}
                      </h3>
                      <p className="text-blue-500 text-[10px] font-black uppercase mt-1">
                        {frame.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="custom-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center">
              <CustomColorPicker
                customColor={customColor}
                setCustomColor={setCustomColor}
                photoShape={photoShape}
                setPhotoShape={setPhotoShape}
              />

              {/* Tombol khusus untuk Custom Color */}
              <div className="mt-10">
                <KamapraButton
                  text={
                    <div className="flex items-center gap-3">
                      <span>Mulai dengan Warna Ini</span>
                      <FaCamera />
                    </div>
                  }
                  onClick={handleCustomConfirm}
                  variant="blue"
                  className="!text-xl !px-16 !py-5"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
