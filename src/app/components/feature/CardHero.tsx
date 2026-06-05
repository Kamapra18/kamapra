"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function HeroCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
    };

    // Kita tempel event ke div kartu itu sendiri
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-[380px] h-[500px]">
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-[2rem] p-8 overflow-hidden flex flex-col justify-between transition-transform duration-300 ease-out border will-change-transform"
        style={{ 
          background: "var(--btn-glass-bg)", 
          borderColor: "var(--btn-glass-border)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)"
        }}
      >
        {/* Pointer-events-none agar tidak menghalangi mouse event pada card */}
        <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-between p-8">
           {/* Elemen dekoratif/ikon ditaruh di sini agar tidak mengganggu mouse */}
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-slate-500 font-mono">profile.tsx</span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
          {/* Tambahkan pointer-events-none pada badge agar mouse menembusnya ke card */}
          <div className="pointer-events-none absolute top-4 left-0 w-12 h-12 rounded-xl flex items-center justify-center animate-bounce-slow" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--btn-glass-border)" }}>
            <FaReact className="text-sky-400" size={24} />
          </div>
          <div className="pointer-events-none absolute top-1/2 right-0 w-12 h-12 rounded-xl flex items-center justify-center animate-bounce-slower" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--btn-glass-border)" }}>
            <FaCss3Alt className="text-sky-300" size={24} />
          </div>
          <div className="pointer-events-none absolute bottom-12 right-0 w-12 h-12 rounded-xl flex items-center justify-center animate-bounce-slow" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--btn-glass-border)" }}>
            <FaJs className="text-yellow-400" size={22} />
          </div>

          <div className="w-44 h-44 rounded-full p-[2px] bg-white/10">
            <Image
              src="/Mario15.jpg"
              alt="Mario"
              width={176}
              height={176}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-white">I Kadek Mario Prayoga</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              Web Developer
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-white/10 pt-5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <IoLocationSharp size={18} className="text-[var(--accent)]" />
            Bali, Indonesia
          </div>
          <div className="px-4 py-1.5 rounded-full flex items-center gap-2 text-[var(--btn-glass-text)]" style={{ background: "var(--btn-glass-bg-hover)" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Available
          </div>
        </div>
      </div>
    </div>
  );
}