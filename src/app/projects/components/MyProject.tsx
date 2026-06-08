"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Heading from "@/app/components/ui/Heading";
import {
  projects,
  filterTabs,
  type Category,
} from "@/app/Home/data/DataProject";
import KamapraButton from "@/app/coba/components/Button";

type Filter = Category;

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const availableTabs = filterTabs.filter(
    (tab) =>
      tab.value === "all" || projects.some((p) => p.category === tab.value),
  );

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const VISIBLE = 1; // mobile: 1 kartu per slide
  const total = filtered.length;

  function navigate(dir: "left" | "right") {
    if (animating) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(dir);
    setAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        dir === "right" ? (prev + 1) % total : (prev - 1 + total) % total,
      );
      setAnimating(false);
    }, 350);
  }

  function handleFilter(cat: Filter) {
    setActiveFilter(cat);
    setCurrent(0);
  }

  // Mobile: 1 kartu aktif
  const mobileItem = filtered[current % Math.max(total, 1)];

  return (
    <section id="projects" className="py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Heading text="Proyek" highlight="Pilihan." />

        <div className="flex items-center justify-center gap-3 mb-10">
          <div
            className="w-10 h-[2px]"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="font-bold uppercase tracking-widest text-xs"
            style={{ color: "var(--accent)" }}>
            Galeri Karya
          </span>
          <div
            className="w-10 h-[2px]"
            style={{ background: "var(--accent)" }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div
            className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
            {availableTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleFilter(tab.value)}
                style={
                  activeFilter === tab.value
                    ? {
                        background: "var(--gradient-primary)",
                        color: "var(--foreground)",
                        border: "1px solid transparent",
                      }
                    : {
                        background: "transparent",
                        color: "var(--btn-glass-text)",
                        border: "1px solid transparent",
                      }
                }
                className="px-5 py-2 text-xs font-bold rounded-xl transition-all duration-300 hover:opacity-80">
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: grid biasa ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ── MOBILE: carousel 1 kartu ── */}
        <div className="md:hidden">
          <div className="relative">
            {/* Nav arrows */}
            {total > 1 && (
              <>
                <button
                  onClick={() => navigate("left")}
                  style={{
                    background: "var(--btn-glass-bg)",
                    border: "1px solid var(--btn-glass-border)",
                    color: "var(--btn-glass-text)",
                    boxShadow: "var(--btn-glass-shadow-base)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--btn-glass-bg-hover)";
                    e.currentTarget.style.borderColor =
                      "var(--btn-glass-border-hover)";
                    e.currentTarget.style.boxShadow =
                      "var(--btn-glass-shadow-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--btn-glass-bg)";
                    e.currentTarget.style.borderColor =
                      "var(--btn-glass-border)";
                    e.currentTarget.style.boxShadow =
                      "var(--btn-glass-shadow-base)";
                  }}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300">
                  <FaChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate("right")}
                  style={{
                    background: "var(--btn-glass-bg)",
                    border: "1px solid var(--btn-glass-border)",
                    color: "var(--btn-glass-text)",
                    boxShadow: "var(--btn-glass-shadow-base)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--btn-glass-bg-hover)";
                    e.currentTarget.style.borderColor =
                      "var(--btn-glass-border-hover)";
                    e.currentTarget.style.boxShadow =
                      "var(--btn-glass-shadow-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--btn-glass-bg)";
                    e.currentTarget.style.borderColor =
                      "var(--btn-glass-border)";
                    e.currentTarget.style.boxShadow =
                      "var(--btn-glass-shadow-base)";
                  }}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300">
                  <FaChevronRight className="w-3.5 h-3.5" />
                </button>
              </>
            )}

            {/* Kartu aktif */}
            <div
              className={`transition-all duration-300 ${
                animating
                  ? direction === "right"
                    ? "-translate-x-4 opacity-0"
                    : "translate-x-4 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}>
              {mobileItem && <ProjectCard project={mobileItem} />}
            </div>
          </div>

          {/* Dots */}
          {total > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                  }}
                  style={
                    i === current
                      ? { background: "var(--accent)", width: "24px" }
                      : { background: "rgba(148,163,184,0.3)" }
                  }
                  className="transition-all duration-300 rounded-full h-2 w-2"
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-12">
          <KamapraButton
            text="View All Archive"
            href={"/projects/achive"}
            iconType="arrow"
            className=" !px-12"
          />
        </div>
      </div>
    </section>
  );
};

/* ── Komponen kartu dipisah biar tidak duplikat ── */
function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github?: string;
    demo: string;
  };
}) {
  const hostname = project.demo.replace(/https?:\/\//, "").split("/")[0];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      className="group relative flex flex-col h-full rounded-[2rem] transition-all duration-500 overflow-hidden">
      {/* Browser bar */}
      <div
        className="px-4 pt-4 pb-3 border-b"
        style={{
          background: "rgba(3,7,18,0.6)",
          borderColor: "rgba(255,255,255,0.05)",
        }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-500 transition-colors" />
          </div>
          <div
            className="px-3 py-1 rounded-lg"
            style={{
              background: "var(--bg-base)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
            <span
              className="text-[10px] font-mono tracking-tighter"
              style={{ color: "rgba(148,163,184,0.6)" }}>
              {hostname}
            </span>
          </div>
        </div>

        {/* Image hover zoom + miring */}
        <div
          className="relative aspect-[16/9] rounded-xl overflow-hidden"
          style={{ background: "var(--bg-base)" }}>
          <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2 group-hover:translate-x-2">
            <Image
              src={project.image || "/placeholder.png"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--bg-fade-bottom)" }}
          />
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2.5 py-1 rounded-md"
              style={{
                color: "var(--accent)",
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.12)",
              }}>
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="text-base font-bold mb-2 line-clamp-1 transition-colors duration-300"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-heading)",
          }}>
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed line-clamp-2 mb-6"
          style={{ color: "rgba(148,163,184,0.8)" }}>
          {project.description}
        </p>

        {/* Links */}
        <div
          className="mt-auto pt-4 flex items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--btn-glass-bg)",
              border: "1px solid var(--btn-glass-border)",
              color: "var(--btn-glass-text)",
              boxShadow: "var(--btn-glass-shadow-base)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--btn-glass-bg-hover)";
              e.currentTarget.style.borderColor =
                "var(--btn-glass-border-hover)";
              e.currentTarget.style.boxShadow = "var(--btn-glass-shadow-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--btn-glass-bg)";
              e.currentTarget.style.borderColor = "var(--btn-glass-border)";
              e.currentTarget.style.boxShadow = "var(--btn-glass-shadow-base)";
            }}
            className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300">
            <FaExternalLinkAlt className="w-3 h-3" />
            Live Demo
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--btn-glass-bg)",
                border: "1px solid var(--btn-glass-border)",
                color: "var(--btn-glass-text)",
                boxShadow: "var(--btn-glass-shadow-base)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--btn-glass-bg-hover)";
                e.currentTarget.style.borderColor =
                  "var(--btn-glass-border-hover)";
                e.currentTarget.style.boxShadow =
                  "var(--btn-glass-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--btn-glass-bg)";
                e.currentTarget.style.borderColor = "var(--btn-glass-border)";
                e.currentTarget.style.boxShadow =
                  "var(--btn-glass-shadow-base)";
              }}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300">
              <FaGithub className="w-3 h-3" />
              Source
            </a>
          )}
        </div>
      </div>
      {/* Archive Button */}
    </div>
  );
}

export default PortfolioSection;
