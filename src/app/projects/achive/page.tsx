"use client";

import Link from "next/link";
import { FaGithub, FaChevronLeft, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/data";
import KamapraButton from "../../components/ui/ButtonKamapra"; // Button andalan
import useInView from "../../components/hooks/InView";
import type { Data } from "../data/data";

export default function Page() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <main className="overflow-hidden bg-[#050505] min-h-screen text-white">
      {/* Back Button - Pakai KamapraButton dengan scaling */}
      <div className="fixed top-6 left-6 z-50 scale-75 md:scale-90 origin-top-left">
        <KamapraButton
          href="/projects"
          variant="blue"
          text={
            <div className="flex items-center gap-2">
              <FaChevronLeft size={16} />
              <span>Back</span>
            </div>
          }
          className="!py-3 !px-8 !rounded-2xl"
        />
      </div>

      <section
        ref={ref}
        className="min-h-screen w-full mt-24 p-6 md:p-10 flex flex-col items-center mb-10 max-w-7xl mx-auto">
        {/* Heading Baru */}
        <div
          className={`self-start mb-12 transition-all duration-1000 ${
            isInView ? "animate-slideInLeft" : "opacity-0 -translate-x-12"
          }`}>
          <div className="w-28 h-1 rounded-full mb-3 bg-blue-600" />
          <div className="w-28 h-1 rounded-full mb-3 bg-blue-400" />

          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-blue-500 uppercase tracking-tight">
            Archive
          </h1>
        </div>

        {/* Table - Desain Tetap Sesuai Request Kamu */}
        <div
          className={`container mx-auto md:px-10 transition-all duration-1000 ${
            isInView ? "animate-fadeIn" : "opacity-0 translate-y-10"
          }`}>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-[#d1d5db]">
                  <th className="border-b border-r border-white pb-4 pl-4">
                    Title
                  </th>
                  <th className="border-b border-r border-white pb-4 pl-4">
                    Technology
                  </th>
                  <th className="border-b border-r border-white pb-4 pl-4 hidden md:table-cell">
                    Description
                  </th>
                  <th className="border-b border-r border-white pb-4 pl-2 text-center">
                    Link
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project: Data, index: number) => (
                  <tr
                    key={index}
                    className="group bg-[#121212]/50 hover:bg-[#959595]/40 rounded-xl transition-all duration-300">
                    {/* Title */}
                    <td className="py-4 px-4 font-medium rounded-l-xl">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="hover:underline text-[#d1d5db]">
                        {project.title}
                      </Link>
                    </td>

                    {/* Tech */}
                    <td className="py-4 text-[#d1d5db]">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.join(", ")}
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-4 text-sm text-[#d1d5db] max-w-md hidden md:table-cell">
                      {project.description}
                    </td>

                    {/* Links */}
                    <td className="py-4 px-4 rounded-r-xl text-center">
                      <div className="flex justify-center gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Preview"
                          className="text-blue-500 hover:text-cyan-400 transition-colors">
                          <FaExternalLinkAlt className="text-lg" />
                        </a>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                            className="text-blue-500 hover:text-cyan-400 transition-colors">
                            <FaGithub className="text-xl" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
