"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { roles } from "../../data/DataRoles";
import { useLanguage } from "@/context/LanguageContext";
import ProfileCard from "@/components/card/ProfileCard";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Jeda antar pergantian peran, dalam detik
const HOLD = 2.2;

const RING_COUNT = 12;

// Tinggi teks maksimum terhadap tinggi kertas
const TEXT_HEIGHT_RATIO = 0.46;

// Ukuran acuan untuk mengukur lebar tiap peran, hasilnya diskalakan
const MEASURE_SIZE = 100;

const formatCounter = (index: number) =>
  `${String(index + 1).padStart(2, "0")} / ${String(roles.length).padStart(2, "0")}`;

const hiddenFace = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
} as const;

// Ukuran teks diatur lewat variabel CSS yang dihitung agar peran terpanjang muat
const faceTextStyle = {
  fontSize: "var(--role-size, 2rem)",
  lineHeight: 1,
} as const;

export function RolesHero() {
  const { lang } = useLanguage();

  const t = lang === "ID" ? id : lang === "EN" ? en : ban;
  const content = t.rolesHero;
  const profile = t.profileCard;

  const rootRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const measurerRef = useRef<HTMLDivElement>(null);
  const underFaceRef = useRef<HTMLDivElement>(null);
  const underTextRef = useRef<HTMLSpanElement>(null);
  const underCounterRef = useRef<HTMLSpanElement>(null);
  const frontTextRef = useRef<HTMLSpanElement>(null);
  const frontCounterRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const card = cardRef.current;
      const flip = flipRef.current;
      const measurer = measurerRef.current;
      const underFace = underFaceRef.current;
      const underText = underTextRef.current;
      const underCounter = underCounterRef.current;
      const frontText = frontTextRef.current;
      const frontCounter = frontCounterRef.current;

      if (
        !root ||
        !card ||
        !flip ||
        !measurer ||
        !underFace ||
        !underText ||
        !underCounter ||
        !frontText ||
        !frontCounter
      ) {
        return;
      }

      const rings = gsap.utils.toArray<HTMLElement>("[data-ring]", root);
      const measureSpans = gsap.utils.toArray<HTMLElement>(
        "[data-measure]",
        measurer,
      );

      // Ukuran kertas tetap (diatur CSS). Yang disesuaikan hanya ukuran teks,
      // supaya peran terpanjang selalu muat di dalam kertas.
      function fit() {
        const cardEl = card as HTMLDivElement;
        const style = getComputedStyle(underFace as HTMLElement);
        const padding =
          parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

        const innerWidth = cardEl.clientWidth - padding;
        const innerHeight = cardEl.clientHeight;

        if (innerWidth <= 0 || innerHeight <= 0) return;

        const widest = Math.max(
          ...measureSpans.map((span) => span.offsetWidth),
        );

        if (widest <= 0) return;

        const byWidth = (innerWidth / widest) * MEASURE_SIZE;
        const byHeight = innerHeight * TEXT_HEIGHT_RATIO;

        cardEl.style.setProperty(
          "--role-size",
          `${Math.floor(Math.min(byWidth, byHeight))}px`,
        );
      }

      fit();

      // Hitung ulang saat ukuran kertas atau font berubah
      const observer = new ResizeObserver(fit);
      observer.observe(card);

      let cancelled = false;

      document.fonts?.ready.then(() => {
        if (!cancelled) fit();
      });

      // Halaman atas berputar di sisi atas, seperti notepad spiral
      gsap.set(flip, { transformPerspective: 900, transformOrigin: "50% 0%" });
      gsap.set(rings, { transformOrigin: "50% 100%" });

      underText.textContent = roles[1];
      underCounter.textContent = formatCounter(1);

      function buildFlip(to: number) {
        const timeline = gsap.timeline({
          onStart: () => {
            // Halaman di bawah menampilkan peran berikutnya
            (underText as HTMLElement).textContent = roles[to];
            (underCounter as HTMLElement).textContent = formatCounter(to);
          },
          onComplete: () => {
            // Halaman atas diganti isinya lalu dikembalikan ke posisi awal
            (frontText as HTMLElement).textContent = roles[to];
            (frontCounter as HTMLElement).textContent = formatCounter(to);

            gsap.set(flip, { rotationX: 0, rotation: 0, y: 0, autoAlpha: 1 });
          },
        });

        timeline
          // Halaman terangkat dan terbalik ke belakang
          .to(
            flip,
            {
              rotationX: -178,
              rotation: -3,
              duration: 0.65,
              ease: "power2.in",
            },
            0,
          )
          // Cincin bergoyang saat halaman lewat, lalu menenang
          .to(
            rings,
            {
              rotation: (index: number) => (index % 2 === 0 ? -9 : 9),
              duration: 0.18,
              ease: "power1.out",
              stagger: { each: 0.015 },
            },
            0.38,
          )
          .to(
            rings,
            {
              rotation: 0,
              duration: 0.9,
              ease: "elastic.out(1, 0.35)",
              stagger: { each: 0.015 },
            },
            0.58,
          )
          // Halaman yang sudah terbalik menghilang
          .to(
            flip,
            { autoAlpha: 0, y: -18, duration: 0.25, ease: "power1.in" },
            0.52,
          )
          // Kertas sedikit menghentak saat halaman jatuh
          .to(
            card,
            {
              y: 3,
              duration: 0.1,
              yoyo: true,
              repeat: 1,
              ease: "power1.out",
            },
            0.52,
          );

        return timeline;
      }

      const mm = gsap.matchMedia();

      // Animasi hanya berjalan jika pengguna tidak meminta pengurangan gerakan
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Animasi masuk
        gsap.from("[data-reveal]", {
          yPercent: 110,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.1,
        });

        gsap.from("[data-fade]", {
          y: 16,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.6,
        });

        gsap.from(card, {
          y: -36,
          rotation: -6,
          autoAlpha: 0,
          duration: 0.9,
          ease: "back.out(1.6)",
          delay: 0.3,
        });

        gsap.from(rings, {
          y: -14,
          autoAlpha: 0,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: 0.03,
          delay: 0.55,
        });

        if (dotRef.current) {
          gsap.to(dotRef.current, {
            scale: 1.8,
            opacity: 0.3,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        // Pergantian peran berulang, dari peran 1 sampai terakhir lalu kembali ke 0
        const master = gsap.timeline({ repeat: -1, delay: 1 });

        roles.forEach((_, index) => {
          master.add(buildFlip((index + 1) % roles.length), `+=${HOLD}`);
        });

        // Berhenti saat bagian ini tidak terlihat agar hemat tenaga
        ScrollTrigger.create({
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => master.paused(!self.isActive),
        });
      });

      return () => {
        cancelled = true;
        observer.disconnect();
        mm.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      aria-label="Perkenalan"
      className="relative isolate flex flex-col overflow-hidden px-2 py-12 sm:px-10 lg:px-6">
      {/* Dua kolom: teks dan kertas peran di kiri, kartu profil di kanan */}
      <div className="grid flex-1 items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16 lg:px-14">
        {/* Kiri */}
        <div className="min-w-0">
          <p
            data-fade
            className="flex items-center gap-2 text-sm font-medium text-muted">
            <span className="size-1.5 rounded-full bg-muted" />
            {content.label}
          </p>

          <h1 className="mt-5 text-[clamp(2.25rem,5.2vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
            <span className="block overflow-hidden pb-1">
              <span data-reveal className="block">
                {content.greeting}
              </span>
            </span>

            <span className="block overflow-hidden pb-1 text-muted">
              <span data-reveal className="block">
                {content.introduction}
              </span>
            </span>

            <span className="sr-only">{roles.join(", ")}</span>
          </h1>

          {/* Kertas notepad spiral: ukuran tetap, hanya teks yang menyesuaikan */}
          <div aria-hidden className="mt-8">
            <div
              ref={cardRef}
              className="relative isolate aspect-16/5 w-[min(100%,34rem)] rotate-[-1.5deg] sm:aspect-24/5">
              {/* Lapisan kertas di bawah */}
              <div className="absolute inset-x-1.5 top-1.5 -z-10 h-full rounded-xl bg-foreground/60" />
              <div className="absolute inset-x-3 top-3 -z-20 h-full rounded-xl bg-foreground/35" />

              {/* Cincin spiral */}
              <div className="absolute inset-x-5 -top-3 z-20 flex justify-between">
                {Array.from({ length: RING_COUNT }).map((_, index) => (
                  <span
                    key={index}
                    data-ring
                    className="h-5 w-1.5 rounded-full border border-muted bg-background"
                  />
                ))}
              </div>

              {/* Halaman bawah: menampilkan peran berikutnya */}
              <div
                ref={underFaceRef}
                className="absolute inset-0 flex items-center rounded-xl bg-foreground px-[6%] text-background shadow-lg shadow-black/20">
                <span
                  ref={underTextRef}
                  className="whitespace-nowrap font-semibold tracking-tight"
                  style={faceTextStyle}>
                  {roles[1]}
                </span>

                <span
                  ref={underCounterRef}
                  className="absolute bottom-2 right-3 font-mono text-[10px] font-normal tracking-normal opacity-50">
                  {formatCounter(1)}
                </span>
              </div>

              {/* Halaman atas: berputar di sisi atas */}
              <div
                ref={flipRef}
                className="absolute inset-0 z-10"
                style={{ transformStyle: "preserve-3d" }}>
                <div
                  className="absolute inset-0 flex items-center rounded-xl bg-foreground px-[6%] text-background"
                  style={hiddenFace}>
                  <span
                    ref={frontTextRef}
                    className="whitespace-nowrap font-semibold tracking-tight"
                    style={faceTextStyle}>
                    {roles[0]}
                  </span>

                  <span
                    ref={frontCounterRef}
                    className="absolute bottom-2 right-3 font-mono text-[10px] font-normal tracking-normal opacity-50">
                    {formatCounter(0)}
                  </span>
                </div>

                {/* Sisi belakang halaman, terlihat saat halaman sudah terbalik */}
                <div
                  className="absolute inset-0 rounded-xl bg-foreground/85"
                  style={{ ...hiddenFace, transform: "rotateX(180deg)" }}
                />
              </div>

              {/* Pengukur lebar tiap peran, di luar layar dan tidak terlihat */}
              <div
                ref={measurerRef}
                className="pointer-events-none invisible absolute left-[-9999px] top-0">
                {roles.map((role) => (
                  <span
                    key={role}
                    data-measure
                    className="block w-max whitespace-nowrap font-semibold leading-none tracking-tight"
                    style={{ fontSize: `${MEASURE_SIZE}px` }}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kanan: kartu profil */}
        <div
          data-fade
          className="mx-auto w-full max-w-88 lg:mx-0 lg:justify-self-end">
          <ProfileCard
            name={profile.name}
            title={content.profileTitle}
            handle={profile.handle}
            status={content.profileStatus}
            contactText={content.profileContact}
            contactHref={`mailto:${profile.email}`}
            avatarUrl={profile.avatar}
            miniAvatarUrl={profile.avatar}
          />
        </div>
      </div>
    </section>
  );
}
