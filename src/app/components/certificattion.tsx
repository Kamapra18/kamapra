"use client";

import Image from "next/image";
import Heading from "./ui/Heading";
import KamapraButton from "./ui/ButtonKamapra"; // Sesuaikan path importnya
import useInView from "./hooks/InView";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certificatesData } from "./data/sertif";

export default function CertificateSection() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="certificate"
      className="flex flex-col items-center justify-center m-8 px-6 py-20 sm:px-6 md:px-10 overflow-hidden">
      <Heading text="My" highlight="Certificates" />

      <div ref={ref} className="mt-14 flex flex-col gap-20 max-w-6xl w-full">
        {certificatesData.map((cert, index) => (
          <div
            key={cert.id}
            className={`flex flex-col items-center gap-10 lg:gap-16 w-full ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}>
            {/* Bagian Gambar */}
            <div
              className={`transition-all duration-1000 flex-1 flex justify-center ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
              }`}>
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[480px] border border-white/5">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Bagian Teks */}
            <div
              className={`transition-all duration-1000 flex-1 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                    ? "opacity-0 translate-x-20"
                    : "opacity-0 -translate-x-20"
              }`}>
              <div className="p-2 sm:p-5 rounded-3xl w-full">
                <span className="flex items-center gap-2 text-sm mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-widest uppercase">
                  <FaCertificate className="text-blue-600" />
                  {cert.provider}
                </span>

                <h3 className="text-2xl sm:text-4xl font-bold mb-6 text-white leading-tight">
                  {cert.title}
                </h3>

                <p className="text-[#959595] text-base sm:text-lg leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <p className="text-sm text-gray-400 uppercase tracking-widest">
                    Year:{" "}
                    <span className="text-white font-semibold">
                      {cert.year}
                    </span>
                  </p>
                </div>

                {/* Pakai KamapraButton di sini */}
                <div className="scale-90 origin-left md:scale-100">
                  <KamapraButton
                    href={cert.pdf}
                    variant="blue"
                    target="blank"
                    rel="noopener noreferer"
                    text={
                      <div className="flex items-center gap-2">
                        <span>Lihat Sertifikat</span>
                        <FaExternalLinkAlt size={14} />
                      </div>
                    }
                    // Atur ukuran biar nggak kegedean buat section list
                    className="!px-8 !py-3 !text-sm md:!text-base"
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
