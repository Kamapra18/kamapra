"use client";

import KamapraButton from "@/app/coba/components/Button";
import { HiOutlineCamera, HiOutlineShieldCheck } from "react-icons/hi2";

export default function PhotoboxInvitation() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 relative">
      <div
        className="w-full rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl border border-[var(--btn-glass-border)] backdrop-blur-xl"
        style={{
          background: "var(--btn-glass-bg)", // Menggunakan variabel glass
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Pattern Background agar tetap ada tekstur titik */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8">
          {/* Icon Badge */}
          <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-md">
            <HiOutlineCamera className="w-8 h-8 md:w-10 md:h-10 text-[var(--accent)]" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mampir sebentar ke <br className="hidden sm:block" />
            <span className="text-[var(--accent)]"> Photobox digital gue yuk!</span>
          </h2>

          <p className="text-zinc-300 text-base md:text-xl max-w-xl mx-auto leading-relaxed px-2 md:px-0">
            Sambil liat-liat porto, kamu bisa coba fitur photobox ini secara
            gratis. Silakan ambil foto buat kenang-kenangan kalau kamu mau.
          </p>

          <div className="pt-2 md:pt-4 w-full sm:w-auto">
            <KamapraButton
              text="Coba Photobox"
              iconType="arrow"
              href="/photobooth"
              className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4"
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-white/50 text-[10px] md:text-sm italic pt-2">
            <HiOutlineShieldCheck className="text-sm md:text-lg text-[var(--accent)] shrink-0" />
            <p>Hasil foto tidak disimpan di database, privasi kamu aman.</p>
          </div>
        </div>
      </div>
    </section>
  );
}