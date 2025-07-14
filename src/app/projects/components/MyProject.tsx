"use client";

import Heading from "../../components/Heading";
import Image from "next/image";
import projects from "../data/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section id="projects" className="min-h-dvh p-4 sm:p-8 mt-5">
      <Heading text="My Latest" highlight="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md bg-white text-blue-900">
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 md:group-hover:scale-110 rounded-t-xl"
              />
            </div>

            <div className="md:hidden p-4">
              <h2 className="text-xl font-bold mb-1">{project.title}</h2>
              <p className="text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Lihat Proyek</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition-colors">
                    <FaGithub className="text-base" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>

            <div
              className={`hidden md:flex absolute inset-0 flex-col justify-center items-center text-center p-6
                bg-white/80 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0
                transition-all duration-500 z-10`}>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition-colors">
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Lihat Proyek</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-700 transition-colors">
                    <FaGithub className="text-base" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
