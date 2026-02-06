"use client";

import { projects } from "./data/DataProject";
import Heading from "../components/ui/Heading";
import KamapraButton from "../components/ui/ButtonKamapra";
import { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import Image from "next/image";

const ProjectCarousel = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);

    const getItemsPerView = () => {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      setCurrentIndex(1);
    };

    setItemsPerView(getItemsPerView());
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = itemsPerView === 1;

  const extendedProjects = [
    ...projects.slice(-itemsPerView),
    ...projects,
    ...projects.slice(0, itemsPerView),
  ];
  const totalSlides = projects.length;
  // console.log("Current Index:", currentIndex);
  // console.log("Projects length:", projects.length);
  // console.log("Total Slides:", totalSlides);

  // Auto-play dengan useCallback atau langsung di dalam useEffect
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]); // HAPUS currentIndex dari sini!

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // FIX 2: Handle infinite loop SETELAH transisi selesai
  useEffect(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    // Clone terakhir -> jump ke slide pertama
    if (currentIndex > projects.length) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);
    }

    // Clone pertama -> jump ke slide terakhir
    if (currentIndex === 0) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(projects.length);

        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);
    }

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentIndex]);

  // Reset ke posisi awal (dengan clone)
  useEffect(() => {
    setCurrentIndex(1);
  }, [itemsPerView]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index + 1);
  };

  if (!isClient) return null;

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-transparent relative overflow-hidden">
      {/* Glow BG */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading text="My Latest" highlight="Projects" />
        </div>

        <div className="relative">
          {/* DESKTOP / TABLET NAV */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <FaChevronLeft size={14} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-all">
                <FaChevronRight size={14} />
              </button>
            </>
          )}

          {/* VIEWPORT */}
          <div className="overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-4">
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" : ""}`}
              style={{
                transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)`,
              }}>
              {extendedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="px-2 md:px-4 flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full shadow-xl">
                    <div className="relative h-48 md:h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto mb-6">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-[10px] uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-auto">
                        {/* Tombol GitHub Tetap Biasa */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-xs transition-all active:scale-95">
                          <FaGithub size={14} /> Code
                        </a>

                        {/* Tombol Live Pakai KamapraButton - Diadjust ukurannya */}
                        <div className="scale-90 origin-right">
                          {" "}
                          {/* Pakai scale biar tetep dapet look 3D-nya tapi muat */}
                          <KamapraButton
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="blue"
                            text={
                              <div className="flex items-center justify-center gap-2">
                                <FaExternalLinkAlt size={14} />
                                <span className="whitespace-nowrap">Live</span>
                              </div>
                            }
                            // Kita override padding raksasanya biar pas di card
                            className="!px-6 !py-3 !text-sm !rounded-xl !w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-6">
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-lg p-2 px-5 rounded-full border border-white/10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
              {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
            </button>

            <div className="flex gap-2">
              {Array.from({ length: projects.length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`rounded-full transition-all ${
                    (currentIndex - 1) % totalSlides === i
                      ? "w-8 h-2.5 bg-blue-500"
                      : "w-2.5 h-2.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <KamapraButton
            text="Lihat Semua Project"
            href="/projects"
            variant="blue"
            className="!text-lg !py-3 !px-8 w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
