"use client";

import { motion } from "framer-motion";
import { FaPalette, FaImage } from "react-icons/fa";

interface CustomColorPickerProps {
  customColor: string;
  setCustomColor: (color: string) => void;
}

const COLOR_PRESETS = [
  "#2563eb", "#ef4444", "#10b981", "#f59e0b",
  "#6366f1", "#d946ef", "#ffffff", "#1f1f1f",
];

export default function CustomColorPicker({
  customColor,
  setCustomColor,
}: CustomColorPickerProps) {
  return (
    <motion.div
      key="custom-grid"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10"
    >
      {/* PREVIEW AREA (Dua Foto) */}
      <div className="flex justify-center">
        <div
          className="relative w-64 md:w-72 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-500 border-[12px] border-white/10 flex flex-col gap-3 p-4"
          style={{ 
            backgroundColor: customColor,
            aspectRatio: "2/3" // Ratio standar strip photobox
          }}
        >
          {/* Photo Slot 1 */}
          <div className="flex-1 border-2 border-dashed border-white/20 flex items-center justify-center rounded-lg bg-black/20">
            <div className="flex flex-col items-center gap-2">
              <FaImage className="text-white/20 text-xl" />
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-black">
                Shot 01
              </span>
            </div>
          </div>

          {/* Photo Slot 2 */}
          <div className="flex-1 border-2 border-dashed border-white/20 flex items-center justify-center rounded-lg bg-black/20">
            <div className="flex flex-col items-center gap-2">
              <FaImage className="text-white/20 text-xl" />
              <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-black">
                Shot 02
              </span>
            </div>
          </div>

          {/* Branding Footer */}
          <div className="pt-2 pb-1 text-center border-t border-white/5">
            <p className="text-[9px] font-black text-white/60 uppercase tracking-[0.3em] italic">
              KAMAPRA STUDIO
            </p>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-black uppercase mb-2 flex items-center gap-3">
            <FaPalette className="text-blue-500" />
            Double Shot Frame
          </h3>
          <p className="text-gray-500 text-sm">
            Warna bingkai ini akan diterapkan pada strip dengan dua slot foto.
          </p>
        </div>

        {/* Preset Colors */}
        <div className="grid grid-cols-4 gap-4">
          {COLOR_PRESETS.map((color) => (
            <button
              key={color}
              onClick={() => setCustomColor(color)}
              className={`aspect-square rounded-xl border-4 transition-all hover:scale-105 ${
                customColor === color
                  ? "border-blue-500 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Custom Color Picker */}
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold uppercase text-gray-400 tracking-widest">
              Pick Your Own
            </label>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
              {customColor.toUpperCase()}
            </span>
          </div>
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="w-full h-14 rounded-xl bg-[#0a0a0a] border border-white/10 cursor-pointer p-1.5 transition-transform active:scale-[0.98]"
          />
        </div>
      </div>
    </motion.div>
  );
}