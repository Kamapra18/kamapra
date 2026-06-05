"use client";

import Link from "next/link";
import { FaGithub,  FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/app/Home/data/DataProject";
import KamapraButton from "@/app/coba/components/Button";
import useInView from "@/app/components/hooks/InView";

export default function Page() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <main
      className="overflow-hidden min-h-screen text-white"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}>
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50 scale-75 md:scale-90 origin-top-left">
        <KamapraButton href="/" text="Back" iconType="none" />
      </div>

      <section
        ref={ref}
        className="min-h-screen w-full mt-24 p-6 md:p-10 flex flex-col items-center mb-10 max-w-7xl mx-auto"
        style={{
          backgroundColor: "var(--background)",
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.15) 0.8px, transparent 0.8px)`,
          backgroundSize: "24px 24px",
        }}>
        {/* Heading */}
        <div
          className={`self-start mb-12 transition-all duration-1000 ${
            isInView ? "animate-slideInLeft" : "opacity-0 -translate-x-12"
          }`}>
          <div
            className="w-28 h-1 rounded-full mb-3"
            style={{ background: "var(--accent)" }}
          />
          <div
            className="w-28 h-1 rounded-full mb-3"
            style={{ background: "var(--gradient-primary)" }}
          />
          <h1
            className="text-4xl md:text-5xl font-bold mt-3 uppercase tracking-tight"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-heading)",
            }}>
            Archive
          </h1>
        </div>

        {/* Table */}
        <div
          className={`w-full transition-all duration-1000 ${
            isInView ? "animate-fadeIn" : "opacity-0 translate-y-10"
          }`}>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr
                  className="text-left text-sm"
                  style={{ color: "rgba(148,163,184,0.8)" }}>
                  <th
                    className="pb-4 pl-4 font-semibold"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Title
                  </th>
                  <th
                    className="pb-4 pl-4 font-semibold"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Technology
                  </th>
                  <th
                    className="pb-4 pl-4 font-semibold hidden md:table-cell"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Description
                  </th>
                  <th
                    className="pb-4 pl-4 font-semibold text-center"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Link
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="group transition-all duration-300 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLTableRowElement
                      ).style.background = "rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLTableRowElement
                      ).style.background = "rgba(255,255,255,0.02)";
                    }}>
                    {/* Title */}
                    <td
                      className="py-4 px-4 font-semibold rounded-l-xl text-sm"
                      style={{
                        color: "var(--foreground)",
                        fontFamily: "var(--font-heading)",
                      }}>
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="transition-colors duration-200 hover:underline"
                        style={{ color: "var(--foreground)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--foreground)")
                        }>
                        {project.title}
                      </Link>
                    </td>

                    {/* Tech */}
                    <td
                      className="py-4 px-4 text-sm"
                      style={{ color: "rgba(148,163,184,0.8)" }}>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                            style={{
                              color: "var(--accent)",
                              background: "rgba(56,189,248,0.08)",
                              border: "1px solid rgba(56,189,248,0.12)",
                            }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Full Description */}
                    <td
                      className="py-4 px-4 text-sm leading-relaxed max-w-md hidden md:table-cell"
                      style={{ color: "rgba(148,163,184,0.7)" }}>
                      {project.fullDescription}
                    </td>

                    {/* Links */}
                    <td className="py-4 px-4 rounded-r-xl text-center">
                      <div className="flex justify-center gap-4">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className="transition-colors duration-200"
                          style={{ color: "var(--accent)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--foreground)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--accent)")
                          }>
                          <FaExternalLinkAlt className="text-lg" />
                        </a>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                            className="transition-colors duration-200"
                            style={{ color: "var(--accent)" }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color =
                                "var(--foreground)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--accent)")
                            }>
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
