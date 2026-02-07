"use client";

import { motion } from "framer-motion";
import KamapraButton from "@/app/components/ui/ButtonKamapra";
import Image from "next/image";
import { FaCamera, FaCheckCircle, FaBolt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#050505] px-5 py-10 md:py-20">
      {/* Background Decor - Diperhalus untuk mobile */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-900/10 blur-[70px] md:blur-[100px] rounded-full -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 pt-10 lg:pt-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[60px] md:blur-[80px] opacity-20 pointer-events-none -z-1"
            style={{
              background:
                "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex gap-2 md:gap-5 items-center justify-center w-full max-w-[320px] md:max-w-none">
            {/* Card 1 - Small Left */}
            <div className="relative w-20 md:w-44 aspect-[9/16] rounded-lg md:rounded-xl shadow-2xl -rotate-12 translate-y-6 md:translate-y-10 border border-white/10 overflow-hidden bg-white p-1 md:p-2">
              <div className="relative w-full h-full bg-gray-200 rounded-md overflow-hidden">
                <Image
                  src="/frame/frame-hero2.png"
                  alt="Photo 1"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Card 2 - Main Center */}
            <div className="relative w-24 md:w-56 aspect-[9/16] rounded-lg md:rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] z-20 border-2 border-blue-500/30 overflow-hidden bg-white p-1.5 md:p-3 scale-110 md:scale-105">
              <div className="relative w-full h-full bg-gray-300 rounded-md overflow-hidden">
                <Image
                  src="/frame/frame-hero1.png"
                  alt="Photo 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-center">
                <p className="text-[7px] md:text-[12px] font-black text-black uppercase tracking-tighter italic">
                  Kamapra Studio
                </p>
              </div>
            </div>

            {/* Card 3 - Small Right */}
            <div className="relative w-20 md:w-44 aspect-[9/16] rounded-lg md:rounded-xl shadow-2xl rotate-12 translate-y-10 md:translate-y-14 border border-white/10 overflow-hidden bg-white p-1 md:p-2">
              <div className="relative w-full h-full bg-gray-200 rounded-md overflow-hidden">
                <Image
                  src="/frame/frame-hero3.png"
                  alt="Photo 3"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* LEFT CONTENT (Mobile: Bawah, Desktop: Kiri) */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <FaCamera />
            <span>Free Premium Photobox</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-7xl leading-[1.1] text-white uppercase font-black">
            Momen <span className="text-blue-500">Abadi</span>
            <br />
            Dalam <span className="text-blue-400">Satu Klik.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-8 text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            Abadikan setiap tawa secara gratis dengan kualitas profesional.
            Cukup bergaya, klik, dan simpan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center">
            <KamapraButton
              text={
                <div className="flex items-center gap-2">
                  <span>Mulai Berfoto</span>
                  <FaBolt className="text-sm" />
                </div>
              }
              href="#frame"
              variant="blue"
              className="w-full sm:w-auto !text-base md:!text-lg !px-10"
            />
            <div className="flex items-center gap-2 text-gray-500 text-[10px] md:text-sm font-medium tracking-widest uppercase">
              <FaCheckCircle className="text-blue-500" />
              <span>100% Free Forever</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
