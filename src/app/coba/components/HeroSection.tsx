"use client";

import { useEffect, useRef } from "react";
import HeroCard from "@/app/components/feature/CardHero";
import KamapraButton from "./Button";

interface HeroStat {
  value: string;
  label: string;
}

const STATS: HeroStat[] = [
  {
    value: "20+",
    label: "Project",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

const TYPING_WORDS: string[] = [
  "Web Developer",
  "UI Designer",
  "Frontend Engineer",
  "React Developer",
];

export default function HeroSection() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const word = TYPING_WORDS[wordIdx];

      if (!deleting) {
        el.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % TYPING_WORDS.length;
        }
      }

      timeout = setTimeout(type, deleting ? 60 : 100);
    };

    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 sm:px-6 md:px-17"
      style={{
        // ── GRADIENT DIHAPUS TOTAL DI SINI ──
        backgroundColor: "var(--bg-base)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs md:text-sm font-semibold tracking-wide uppercase hover:scale-105 transition-transform cursor-pointer">
            <span className="text-xs md:text-md uppercase text-foreground font-semibold">
              FRONTEND DEVELOPER • BALI, INDONESIA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-white">
            Crafting
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}>
              Digital Experiences
            </span>
            <br />
            That Matter.
          </h1>

          {/* Typing */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            Hi, I&apos;m a{" "}
            <span
              ref={typingRef}
              className="text-sky-400 font-bold border-r-2 border-sky-400 animate-pulse"
            />
            . I build fast, responsive, and visually engaging digital
            experiences that combine performance with modern design.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <KamapraButton
              text="View Projects"
              iconType="circle"
              href="#portofolio"
            />

            <KamapraButton
              text="Get In Touch"
              iconType="arrow"
              href="#kontak"
            />
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-6 pt-6 border-t border-slate-800 w-full">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <span className="block text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-slate-400">
                    {stat.label}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px h-8 bg-slate-800" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroCard />
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-10"
        onClick={() =>
          document
            .getElementById("tentang")
            ?.scrollIntoView({ behavior: "smooth" })
        }>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-sky-400 transition-colors">
          Gulir ke Bawah
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-sky-400 p-1 transition-colors">
          <div className="w-1.5 h-2 bg-sky-400 rounded-full mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
}
