"use client";

import Heading from "../../components/Heading";
import Image from "next/image";
import projects from "../data/data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import KamapraButton from "../../components/ui/ButtonKamapra";

export default function MyProjects() {
  return (
    <section id="projects" className="p-4 sm:p-8 mt-5 ">
      <Heading text="My Latest" highlight="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-2xl bg-[#0a0a0a] border border-white/5 text-white">
            {/* Image Container */}
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Container (Mobile & Desktop Overlay) */}
            <div className="p-6 md:absolute md:inset-0 md:flex md:flex-col md:justify-center md:items-center md:text-center md:opacity-0 md:group-hover:opacity-100 md:translate-y-5 md:group-hover:translate-y-0 transition-all duration-500 z-10 md:bg-black/60 md:backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300 mb-4 line-clamp-2 md:line-clamp-none">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 md:justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 items-center md:justify-center">
                {project.link && (
                  <div className="scale-75 sm:scale-90 origin-left md:origin-center">
                    <KamapraButton
                      href={project.link}
                      variant="blue"
                      text={
                        <div className="flex items-center gap-2">
                          <FaExternalLinkAlt size={14} />
                          <span>Demo</span>
                        </div>
                      }
                      className="!px-6 !py-3 !text-xs !rounded-xl"
                    />
                  </div>
                )}
                {project.github && (
                  <div className="scale-75 sm:scale-90 origin-left md:origin-center">
                    <KamapraButton
                      href={project.github}
                      variant="red" // Kita kasih warna merah biar beda sama demo
                      text={
                        <div className="flex items-center gap-2">
                          <FaGithub size={16} />
                          <span>Repo</span>
                        </div>
                      }
                      className="!px-6 !py-3 !text-xs !rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Archive Button */}
      <div className="flex justify-center mt-12">
        <KamapraButton
          href="/projects/achive"
          variant="blue"
          text="View All Archive"
          className="!text-sm md:!text-base !px-10"
        />
      </div>
    </section>
  );
}
