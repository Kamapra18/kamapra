"use client";

import { motion } from "framer-motion";
import { FaPalette, FaImage, FaHeart } from "react-icons/fa";
import { IoSquare, IoEllipse } from "react-icons/io5";
import { MdCropPortrait } from "react-icons/md";
import { IconType } from "react-icons";

interface CustomColorPickerProps {
  customColor: string;
  setCustomColor: (color: string) => void;
  photoShape: PhotoShape; // Tambah ini
  setPhotoShape: (shape: PhotoShape) => void; // Tambah ini
}

type PhotoShape = "square" | "circle" | "heart" | "portrait";

const COLOR_PRESETS = [
  "#2563eb",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#6366f1",
  "#d946ef",
  "#ffffff",
  "#1f1f1f",
];

// 1. Landscape dihapus dari opsi
const SHAPE_OPTIONS: { value: PhotoShape; label: string; icon: IconType }[] = [
  { value: "square", label: "Square", icon: IoSquare },
  { value: "circle", label: "Circle", icon: IoEllipse },
  { value: "heart", label: "Heart", icon: FaHeart },
  { value: "portrait", label: "Portrait", icon: MdCropPortrait },
];

export default function CustomColorPicker({
  customColor,
  setCustomColor,
  photoShape,
  setPhotoShape,
}: CustomColorPickerProps) {
  // const [photoShape, setPhotoShape] = useState<PhotoShape>("square");

  const getPhotoSlotStyle = (shape: PhotoShape) => {
    const baseStyle: React.CSSProperties = {
      width: "100%",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    };

    switch (shape) {
      case "circle":
        return { ...baseStyle, aspectRatio: "1/1", borderRadius: "9999px" };
      case "heart":
        return {
          ...baseStyle,
          aspectRatio: "1/1",
          // Polygon dengan banyak titik supaya lekukannya bulat (HD)
          clipPath:
            "polygon(50% 15%, 57% 9%, 66% 5%, 75% 4%, 84% 6%, 92% 11%, 97% 19%, 99% 28%, 99% 38%, 96% 48%, 90% 58%, 82% 67%, 72% 76%, 62% 85%, 50% 95%, 38% 85%, 28% 76%, 18% 67%, 10% 58%, 4% 48%, 1% 38%, 1% 28%, 3% 19%, 8% 11%, 16% 6%, 25% 4%, 34% 5%, 43% 9%)",
          borderRadius: "0px",
          backgroundColor: "rgba(0,0,0,0.3)", // Pastikan ada background biar kelihatan
        };
      case "portrait":
        // 2. Perbaikan Rasio Portrait (2:3 atau 3:4 yang lebih tinggi)
        return { ...baseStyle, aspectRatio: "2/3", borderRadius: "12px" };
      default:
        return { ...baseStyle, aspectRatio: "1/1", borderRadius: "12px" };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 bg-white/5 rounded-[2.5rem] border border-white/10">
      {/* PREVIEW AREA */}
      <div className="flex justify-center lg:sticky lg:top-8">
        <div
          className="relative w-full max-w-[280px] rounded-[2.2rem] border-[12px] border-white/10 flex flex-col items-center p-6 gap-6 transition-all duration-500 shadow-2xl"
          style={{
            backgroundColor: customColor,
            // 3. Tinggi otomatis mengikuti konten agar Portrait tidak terpotong
            minHeight: "550px",
            height: "fit-content",
          }}>
          {[1, 2].map((num) => (
            <div
              key={num}
              className="bg-black/20 border-2 border-dashed border-white/20 flex items-center justify-center overflow-hidden w-full shadow-inner"
              style={getPhotoSlotStyle(photoShape)}>
              <div className="flex flex-col items-center gap-2">
                <FaImage className="text-white/20 text-2xl" />
                <span className="text-[9px] font-black text-white/30 tracking-[0.2em] uppercase">
                  SHOT 0{num}
                </span>
              </div>
            </div>
          ))}

          <div className="w-full pt-4 mt-4 border-t border-white/10 text-center">
            <p className="text-[10px] font-black text-white/40 tracking-[0.4em] italic uppercase">
              KAMAPRA STUDIO
            </p>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="space-y-10">
        <div>
          <h3 className="text-3xl font-black uppercase flex items-center gap-4 mb-2">
            <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
              <FaPalette className="text-white text-xl" />
            </div>
            Frame Editor
          </h3>
          <p className="text-gray-400 text-sm">
            Sesuaikan desain photostrip-mu
          </p>
        </div>

        {/* Shape Selector - Grid disesuaikan jadi 4 kolom */}
        <div className="space-y-4">
          <label className="text-xs font-black uppercase text-blue-400 tracking-[0.2em]">
            1. Bentuk Foto
          </label>
          <div className="grid grid-cols-4 gap-3">
            {SHAPE_OPTIONS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setPhotoShape(value)}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                  photoShape === value
                    ? "border-blue-500 bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    : "border-white/5 bg-white/5 hover:border-white/10"
                }`}>
                <Icon
                  className={`text-2xl ${photoShape === value ? "text-blue-400" : "text-white/40"}`}
                />
                <span className="text-[9px] font-black uppercase">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Presets */}
        <div className="space-y-4">
          <label className="text-xs font-black uppercase text-blue-400 tracking-[0.2em]">
            2. Warna Frame
          </label>
          <div className="grid grid-cols-4 gap-4">
            {COLOR_PRESETS.map((color) => (
              <button
                key={color}
                onClick={() => setCustomColor(color)}
                className={`aspect-square rounded-2xl border-4 transition-all hover:scale-105 ${
                  customColor === color
                    ? "border-blue-500 scale-105 shadow-xl"
                    : "border-white/10"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Custom Hex Picker */}
        <div className="p-6 bg-white/[0.03] rounded-3xl border border-white/10 space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">
              Custom Hex
            </label>
            <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
              {customColor.toUpperCase()}
            </span>
          </div>
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
            className="w-full h-14 rounded-xl bg-black/40 border border-white/10 cursor-pointer p-2"
          />
        </div>
      </div>
    </motion.div>
  );
}
