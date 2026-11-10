"use client";

import { useRef, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

import id from "@/message/id.json";
import en from "@/message/en.json";
import ban from "@/message/ban.json";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Data dummy, urut dari terbaru ke terlama agar terasa "kembali ke masa lalu".
// Field year harus 4 digit karena dipakai untuk animasi angka berputar.
type TimelineContent = typeof id.educationTimeline;
// Jarak dari atas layar ke atas panel (navbar 72px)
const TOP_OFFSET = 72;

// Posisi titik fokus pada kolom kanan, sebagai rasio tinggi kolom
const FOCAL_RATIO = 0.3;

// Tinggi scroll untuk berpindah satu item, sebagai rasio tinggi layar
const STEP_RATIO = 0.55;

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

function Eyebrow({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-(--text-muted)">
      <span aria-hidden className="h-px w-5 bg-(--accent)" />
      {label}
    </p>
  );
}

// Versi tanpa pin dan animasi untuk pengguna yang memilih mengurangi gerakan
function StaticTimeline({ content }: { content: TimelineContent }) {
  const milestones = content.milestones;
  return (
    <section aria-label="My story" className="bg-background py-6 sm:py-10">
      <Eyebrow label={content.label} />

      <h1 className="mt-3 font-(--font-space-grotesk) text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {content.heading}
      </h1>

      <ol className="mt-10 space-y-10 border-l border-(--border) pl-6 sm:pl-10">
        {milestones.map((item) => (
          <li key={item.id} className="relative">
            <span
              aria-hidden
              className="absolute -left-7 top-1.5 size-2 rounded-full bg-(--accent) sm:-left-11"
            />

            <p className="text-xs font-medium tracking-[0.12em] text-(--accent-text)">
              {item.period}
            </p>

            <h2 className="mt-2 font-(--font-space-grotesk) text-2xl tracking-tight text-foreground">
              {item.title}
            </h2>

            <p className="mt-1.5 text-sm text-(--text-muted) sm:text-base">
              {item.place}
            </p>

            <ul className="mt-4 space-y-2.5">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-(--text-muted) sm:text-base">
                  <span
                    aria-hidden
                    className="mt-[0.7em] h-px w-2.5 shrink-0 bg-(--accent)"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ScrollTimeline({ content }: { content: TimelineContent }) {
  const milestones = content.milestones;
  const sectionRef = useRef<HTMLElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const srYearRef = useRef<HTMLSpanElement>(null);
  const periodRef = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const windowEl = windowRef.current;
      const track = trackRef.current;
      const yearEl = yearRef.current;
      const bar = barRef.current;

      if (!section || !windowEl || !track || !yearEl || !bar) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-item]", track);
      const strips = gsap.utils.toArray<HTMLElement>(
        "[data-digit-strip]",
        yearEl,
      );
      const last = items.length - 1;

      // Posisi tiap item (titik jangkar di label periode) dan titik fokus
      let anchors: number[] = [];
      let focal = 0;
      let gap = 1;

      const state = { progress: 0 };
      let current = -1;

      const setTrackY = gsap.quickSetter(track, "y", "px");
      const setBar = gsap.quickSetter(bar, "scaleX");
      const setOpacity = items.map((item) => gsap.quickSetter(item, "opacity"));

      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

      function measure() {
        anchors = items.map((item) => {
          const anchor = item.querySelector<HTMLElement>("[data-anchor]");

          return (
            item.offsetTop +
            (anchor ? anchor.offsetTop + anchor.offsetHeight / 2 : 0)
          );
        });

        focal = (windowEl?.clientHeight ?? 0) * FOCAL_RATIO;
        gap = last > 0 ? (anchors[last] - anchors[0]) / last : 1;
      }

      // Angka tahun berputar seperti odometer, satu kolom per digit
      function setYear(year: string, animate: boolean) {
        strips.forEach((strip, index) => {
          const digit = Number(year[index] ?? 0);

          if (animate) {
            gsap.to(strip, {
              yPercent: -digit * 10,
              duration: 0.9,
              delay: index * 0.04,
              ease: "power3.out",
              overwrite: true,
            });
          } else {
            gsap.set(strip, { yPercent: -digit * 10 });
          }
        });

        if (srYearRef.current) srYearRef.current.textContent = year;
      }

      function setActive(index: number, animate: boolean) {
        if (index === current) return;
        current = index;

        const item = milestones[index];

        setYear(item.year, animate);

        if (periodRef.current) periodRef.current.textContent = item.period;

        if (counterRef.current) {
          counterRef.current.textContent = String(index + 1).padStart(2, "0");
        }
      }

      function render() {
        if (anchors.length === 0) return;

        const segment = state.progress * last;
        const from = Math.min(Math.max(last - 1, 0), Math.floor(segment));
        const fraction = last > 0 ? segment - from : 0;

        // Posisi gulir: bergerak sama rata antar item
        const position =
          last > 0
            ? anchors[from] + (anchors[from + 1] - anchors[from]) * fraction
            : anchors[0];

        setTrackY(focal - position);

        // Item terdekat dengan titik fokus paling terang, lainnya meredup
        items.forEach((_, index) => {
          const distance = Math.abs(anchors[index] - position);
          const strength = gsap.utils.clamp(0, 1, 1 - distance / gap);

          setOpacity[index](0.28 + 0.72 * strength);
        });

        setBar(state.progress);
        setActive(Math.round(segment), true);
      }

      measure();
      setActive(0, false);
      render();

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: `top ${TOP_OFFSET}px`,
          end: () => `+=${Math.round(window.innerHeight * STEP_RATIO * last)}`,
          pin: section,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            measure();
            render();
          },
        },
      });

      // Progres yang sudah dihaluskan scrub dipakai sebagai satu-satunya sumber
      timeline.to(state, { progress: 1, onUpdate: render }, 0);

      // Ukuran berubah setelah font selesai dimuat, hitung ulang posisi pin
      let cancelled = false;

      document.fonts?.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });

      return () => {
        cancelled = true;
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-label="My story"
      className="relative isolate flex h-[calc(100svh-5.5rem)] flex-col overflow-hidden bg-background px-2 py-12 sm:px-10 lg:px-6">
      <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:grid-rows-1 lg:gap-12 lg:p-12">
        {/* Kolom kiri: judul, tahun besar, penanda posisi */}
        <div className="flex min-w-0 flex-col justify-center">
          <Eyebrow label={content.label} />

          <h1 className="mt-4 font-(--font-space-grotesk) text-3xl tracking-tight text-foreground sm:text-6xl font-semibold">
            {content.heading}
          </h1>
          <div
            ref={yearRef}
            aria-hidden
            className="mt-4 flex h-[1.15em] overflow-hidden font-(--font-space-grotesk) text-[clamp(4rem,11vw,8.5rem)] font-bold leading-none tracking-tight text-foreground tabular-nums lg:mt-6">
            {[0, 1, 2, 3].map((slot) => (
              <div key={slot} className="h-[1.15em] overflow-hidden">
                <div data-digit-strip className="will-change-transform">
                  {DIGITS.map((digit) => (
                    <div
                      key={digit}
                      className="flex h-[1.15em] items-start leading-none">
                      {digit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <span ref={srYearRef} className="sr-only" aria-live="polite">
            {milestones[0].year}
          </span>

          <p
            ref={periodRef}
            className="mt-4 text-xs font-medium tracking-[0.14em] text-(--text-muted) lg:mt-6">
            {milestones[0].period}
          </p>

          <div className="mt-4 flex items-center gap-4 text-lg font-black tabular-nums text-(--text-muted)">
            <span>
              <span ref={counterRef} className="font-semibold text-foreground">
                01
              </span>{" "}
              / {String(milestones.length).padStart(2, "0")}
            </span>

            <div className="relative h-px w-28 overflow-hidden bg-(--border) sm:w-40">
              <div ref={barRef} className="absolute inset-0 bg-(--accent)" />
            </div>
          </div>
        </div>

        {/* Kolom kanan: rel, penanda fokus, dan daftar yang bergerak naik */}
        <div ref={windowRef} className="relative min-h-0">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-0.5 bg-(--border)"
          />

          <div
            aria-hidden
            className="absolute left-0 top-0 w-0.5 bg-(--accent)"
            style={{ height: `${FOCAL_RATIO * 100}%` }}
          />

          <div
            aria-hidden
            className="absolute left-0 top-0 w-px bg-(--accent)"
            style={{ height: `${FOCAL_RATIO * 100}%` }}>
            <span className="absolute -bottom-1 -left-1.75 size-3.75 rounded-full bg-(--accent)" />
          </div>

          <ol
            ref={trackRef}
            className="relative pl-8 will-change-transform sm:pl-25">
            {milestones.map((item) => (
              <li key={item.id} data-item className="relative max-w-xl pb-14">
                <p
                  data-anchor
                  className="text-md  font-black tracking-[0.12em] text-(--accent-text)">
                  {item.period}
                </p>

                <h2 className="mt-2 font-(--font-space-grotesk) text-2xl tracking-tight text-foreground sm:text-5xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-1.5 text-sm text-(--text-muted) sm:text-lg font-bold">
                  {item.place}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-(--text-muted) sm:text-base">
                      <span
                        aria-hidden
                        className="mt-[0.7em] h-px w-2.5 shrink-0 bg-(--accent)"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function EducationTimeline() {
  const { lang } = useLanguage();

  const t = lang === "ID" ? id : lang === "EN" ? en : ban;
  const content = t.educationTimeline;

  const reduceMotion = usePrefersReducedMotion();

  return reduceMotion ? (
    <StaticTimeline content={content} />
  ) : (
    <ScrollTimeline content={content} />
  );
}
