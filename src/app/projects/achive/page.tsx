"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
          Back
        </Button>
      </div>

      <section
        ref={ref}
        className="min-h-screen w-full mt-20 p-6 md:p-10
                   flex flex-col items-center mb-10">
        {/* Heading */}
        <div
          className={`self-start mb-10 transition-all duration-1000 ${
            isInView ? "animate-slideInLeft" : "opacity-0 -translate-x-12"
          }`}>
          <div
            className="w-28 h-1 rounded-full mb-3
            bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)]"
          />
          <div
            className="w-28 h-1 rounded-full mb-3
            bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)]"
          />

          <h1
            className="text-3xl font-bold mt-3
              bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)]
              bg-clip-text text-transparent">
            Archive
          </h1>
        </div>

        {/* Table */}
        <div
          className={`container mx-auto md:px-10 transition-all duration-1000 ${
            isInView ? "animate-slideInUp" : "opacity-0 translate-y-10"
          }`}>
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-left text-[#959595]">
                <th>Title</th>
                <th>Technology</th>
                <th>Description</th>
                <th className="text-center">Link</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project: Data, index: number) => (
                <tr
                  key={index}
                  className="rounded-xl hover:shadow-lg transition-all">
                  {/* Title */}
                  <td className="py-4 font-medium">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="hover:underline
                        bg-[linear-gradient(135deg,#2563EB,#38BDF8)]
                        bg-clip-text text-transparent">
                      {project.title}
                    </Link>
                  </td>

                  {/* Tech */}
                  <td className="py-4 text-[#959595]">
                    {project.tech.join(", ")}
                  </td>

                  {/* Description */}
                  <td className="py-4 text-sm text-[#b5b5b5] max-w-md">
                    {project.description}
                  </td>

                  {/* Links */}
                  <td className="py-4">
                    <div className="flex justify-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Preview">
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="text-xl text-blue-600 hover:opacity-80"
                        />
                      </a>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub">
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="text-xl text-blue-600 hover:opacity-80"
                          />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
