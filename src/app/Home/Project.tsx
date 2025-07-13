"use client";

import { projects } from "./data/DataProject";
import Heading from "../components/Heading";
import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectCarousel = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);

    const getItemsPerView = () => (window.innerWidth < 768 ? 1 : 3);
    setItemsPerView(getItemsPerView());

    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerView);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, totalSlides]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const toggleAutoplay = () => setIsPlaying(!isPlaying);

  if (!isClient) return null;

  return (
    <div
      id="projects"
      className="py-16 px-4 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading text="My Lates" highlight="Project" />
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                width: `${(projects.length * 100) / itemsPerView}%`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`${
                    itemsPerView === 1 ? "w-full" : "w-1/3"
                  } px-4 py-2`}
                >
                  <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 shadow-lg">
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 drop-shadow-sm">
                        {project.title}
                      </h3>
                      <p className="text-white/90 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-md text-xs text-cyan-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 shadow-md"
                        >
                          <FaGithub size={16} /> Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white text-sm transition-all duration-300 hover:scale-105 shadow-md"
                        >
                          <FaExternalLinkAlt size={14} /> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={toggleAutoplay}
              className="flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-105"
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>

            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 ml-4"
            >
              View All Projects
            </Link>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 scale-125 shadow-lg"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
