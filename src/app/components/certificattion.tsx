"use client";

import Image from "next/image";
import Heading from "./ui/Heading";
import KamapraButton from "@/app/coba/components/Button";
import useInView from "./hooks/InView";
import { FaCertificate, FaCalendarAlt, FaMedal } from "react-icons/fa";
import { certificatesData } from "./data/sertif";

export default function CertificateSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="certificate"
      className="py-24 px-6 sm:px-10 md:px-20 overflow-hidden">

      <Heading text="My" highlight="Certificates" />

      <div className="flex items-center justify-center gap-3 mb-20">
        <div className="w-10 h-[2px]" style={{ background: "var(--accent)" }} />
        <span
          className="font-bold uppercase tracking-widest text-xs"
          style={{ color: "var(--accent)" }}>
          Credentials
        </span>
        <div className="w-10 h-[2px]" style={{ background: "var(--accent)" }} />
      </div>

      <div ref={ref} className="flex flex-col gap-24 max-w-6xl mx-auto w-full">
        {certificatesData.map((cert, index) => (
          <div
            key={cert.id}
            className={`flex flex-col items-center gap-12 lg:gap-20 w-full ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}>

            {/* ── Gambar ── */}
            <div
              className={`transition-all duration-1000 delay-100 flex-1 flex justify-center ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-16"
                    : "opacity-0 translate-x-16"
              }`}>

              {/* Outer wrapper — ruang untuk shadow frame */}
              <div
                className="relative"
                style={{ width: "460px", height: "300px", flexShrink: 0 }}>

                {/* Shadow frame layer 2 — paling jauh */}
                <div
                  className="absolute inset-0 rounded-[2rem]"
                  style={{
                    transform: "translate(14px, 14px)",
                    background: "var(--gradient-primary)",
                    opacity: 0.12,
                    zIndex: 0,
                    borderRadius: "2rem",
                  }}
                />

                {/* Shadow frame layer 1 — tengah */}
                <div
                  className="absolute inset-0 rounded-[2rem]"
                  style={{
                    transform: "translate(7px, 7px)",
                    border: "1px solid rgba(56,189,248,0.35)",
                    background: "rgba(56,189,248,0.04)",
                    zIndex: 1,
                    borderRadius: "2rem",
                  }}
                />

                {/* Gambar utama */}
                <div
                  className="group absolute inset-0 rounded-[2rem] overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    zIndex: 2,
                    transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(56,189,248,0.5)";
                    el.style.boxShadow = "0 0 40px rgba(56,189,248,0.2), 0 8px 32px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
                  }}>

                  {/* Badge nomor */}
                  <div
                    className="absolute top-4 left-4 z-10 w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "var(--gradient-primary)",
                      color: "#fff",
                      fontFamily: "var(--font-heading)",
                      boxShadow: "0 4px 12px rgba(56,189,248,0.3)",
                    }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Medal icon pojok kanan atas */}
                  <div
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}>
                    <FaMedal className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </div>

                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="460px"
                    priority
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(3,7,18,0.7) 0%, transparent 60%)",
                    }}
                  />

                  {/* Provider di bawah gambar */}
                  <div
                    className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                    <FaCertificate className="w-3 h-3" style={{ color: "var(--accent)" }} />
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: "var(--accent)" }}>
                      {cert.provider}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Konten ── */}
            <div
              className={`flex-1 w-full transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 translate-x-16"
                    : "opacity-0 -translate-x-16"
              }`}>
              <div
                className="relative p-8 rounded-[2rem] flex flex-col gap-6 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(56,189,248,0.2)";
                  el.style.boxShadow = "0 0 40px rgba(56,189,248,0.08), 0 4px 24px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                }}>

                {/* Glow dekoratif pojok */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Index line dekoratif */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-[3px] rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(148,163,184,0.5)" }}>
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Judul */}
                <h3
                  className="text-2xl sm:text-[1.75rem] font-bold leading-tight"
                  style={{
                    color: "var(--foreground)",
                    fontFamily: "var(--font-heading)",
                  }}>
                  {cert.title}
                </h3>

                {/* Divider accent */}
                <div
                  className="w-16 h-[2px] rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />

                {/* Deskripsi */}
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "rgba(148,163,184,0.75)" }}>
                  {cert.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Year chip */}
                  <div
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-xl"
                    style={{
                      color: "rgba(148,163,184,0.6)",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}>
                    <FaCalendarAlt className="w-3 h-3" />
                    {cert.year}
                  </div>

                  {/* Provider chip */}
                  <div
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-xl"
                    style={{
                      color: "var(--accent)",
                      background: "rgba(56,189,248,0.06)",
                      border: "1px solid rgba(56,189,248,0.12)",
                    }}>
                    <FaCertificate className="w-3 h-3" />
                    {cert.provider}
                  </div>
                </div>

                {/* Button */}
                <div className="mt-1">
                  <KamapraButton
                    href={cert.pdf}
                    iconType="external"
                    target="_blank"
                    rel="noopener noreferrer"
                    text="View Certificate"
                  />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}