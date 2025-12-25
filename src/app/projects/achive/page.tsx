"use client";

import Link from "next/link";
// Ganti ke react-icons
import { FaGithub, FaChevronLeft, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/data";
import Button from "../../components/Button";
import useInView from "../../components/hooks/InView";
import type { Data } from "../data/data";

export default function Page() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <main className="overflow-hidden">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button href="/projects">
          <FaChevronLeft className="mr-2 inline-block" />
          Back
        </Button>
      </div>

      <section
        ref={ref}
        className="min-h-screen w-full mt-20 p-6 md:p-10 flex flex-col items-center mb-10">
        {/* Heading */}
        <div
          className={`self-start mb-10 transition-all duration-1000 ${
            isInView ? "animate-slideInLeft" : "opacity-0 -translate-x-12"
          }`}>
          <div className="w-28 h-1 rounded-full mb-3 bg-secondary-gradient" />
          <div className="w-28 h-1 rounded-full mb-3 bg-secondary-gradient" />

          <h1 className="text-3xl text-blue-500 font-bold mt-3 bg-secondary-gradient bg-clip-text ">
            Archive
          </h1>
        </div>

        {/* Table */}
        <div
          className={`container mx-auto md:px-10 transition-all duration-1000 ${
            isInView ? "animate-fadeIn" : "opacity-0 translate-y-10"
          }`}>
          <div className="overflow-x-auto">
            {" "}
            {/* Wrapper supaya table tidak pecah di mobile */}
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
                    className="group bg-[#121212]/50 hover:bg-[#959595]/40 rounded-xl transition-all duration-300 ">
                    {/* Title */}
                    <td className="py-4 px-4 font-medium rounded-l-xl">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="hover:underline bg-primary-gradient bg-clip-text text-[#d1d5db]">
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
                    <td className="py-4 text-sm text-[##1d5db] max-w-md hidden md:table-cell">
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
