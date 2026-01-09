"use client";

import Image from "next/image";

export default function GithubSection() {
  const username = "Kamapra18";
  const blueColor = "3b82f6"; // Warna biru tema utama

  // Data ini bisa kamu update manual sesuai dashboard GitHub kamu
  const stats = {
    total: "570",
    thisWeek: "103",
    best: "50",
    average: "2",
  };

  return (
    <section className="py-20 px-5 max-w-6xl mx-auto font-sans">
      {/* Header Section */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
          My GitHub <span className="text-blue-500">Activity</span>
        </h2>
        <p className="text-zinc-400">
          Monitoring my daily coding contributions
        </p>
      </div>

      <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-xl">
        {/* Header Card */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <h3 className="text-xl font-bold text-white">
              GitHub Contributions
            </h3>
          </div>
          <span className="text-zinc-500 text-sm font-mono tracking-tighter">
            @marioprayoga18
          </span>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-zinc-800/30 border border-white/5 p-4 rounded-2xl text-center">
            <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
              Total
            </p>
            <p className="text-3xl font-bold text-blue-500">{stats.total}</p>
          </div>
          <div className="bg-zinc-800/30 border border-white/5 p-4 rounded-2xl text-center">
            <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
              This week
            </p>
            <p className="text-3xl font-bold text-blue-500">{stats.thisWeek}</p>
          </div>
          <div className="bg-zinc-800/30 border border-white/5 p-4 rounded-2xl text-center">
            <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
              Best
            </p>
            <p className="text-3xl font-bold text-blue-500">{stats.best}</p>
          </div>
          <div className="bg-zinc-800/30 border border-white/5 p-4 rounded-2xl text-center">
            <p className="text-xs text-zinc-500 uppercase font-bold mb-1">
              Average
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <p className="text-3xl font-bold text-blue-500">
                {stats.average}
              </p>
              <p className="text-xs text-zinc-500">/ day</p>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="relative overflow-x-auto overflow-y-hidden pb-4">
          <div className="min-w-[800px] h-[160px] relative">
            <Image
              src={`https://ghchart.rshah.org/${blueColor}/${username}`}
              alt="GitHub Contributions Graph"
              fill
              className="object-contain filter hue-rotate-[10deg] brightness-110"
              unoptimized
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 mt-6">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
            Less
          </span>
          <div className="flex gap-1.5">
            <div className="h-4 w-4 rounded bg-zinc-800"></div>
            <div className="h-4 w-4 rounded bg-blue-900"></div>
            <div className="h-4 w-4 rounded bg-blue-700"></div>
            <div className="h-4 w-4 rounded bg-blue-500"></div>
            <div className="h-4 w-4 rounded bg-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
          </div>
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
            More
          </span>
        </div>
      </div>
    </section>
  );
}
