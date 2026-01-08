"use client";

import Image from "next/image";

export default function GithubSection() {
  const username = "Kamapra18";

  return (
    <section className="py-20 px-5 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-2">
          My GitHub <span className="text-blue-500">Activity</span>
        </h2>
        <p className="text-gray-400">
          Monitoring my daily coding contributions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card Utama: Grafik Kotak Hijau */}
        <div className="md:col-span-12 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[2.5rem] overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              Contribution Graph
            </h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              className="text-sm text-blue-400 hover:underline">
              @marioprayoga18
            </a>
          </div>

          <div className="relative min-w-[700px] w-full h-[150px]">
            <Image
              src={`https://ghchart.rshah.org/4078c0/${username}`}
              alt="GitHub Contributions"
              fill
              className="object-contain opacity-90 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
        </div>

        {/* Card Tambahan: Link ke Repo Terpopuler (Opsional) */}
        <div className="md:col-span-12 flex justify-center mt-4">
          <div className="flex gap-4">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-700"></div>
            <div className="h-2 w-2 rounded-full bg-green-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
