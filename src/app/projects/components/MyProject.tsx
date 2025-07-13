"use client";

import Heading from "../../components/Heading";
import Image from "next/image";
import projects from "../data/data";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section id="projects" className="min-h-dvh p-4 sm:p-8 mt-5">
      <Heading text="My Latest" highlight="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md bg-white text-blue-900"
          >
            {/* Gambar Proyek */}
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Informasi Proyek (muncul saat hover) */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-center p-6
                         bg-white/90 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                         translate-y-5 transition-all duration-500 z-10"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-black font-bold text-sm sm:text-base mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
