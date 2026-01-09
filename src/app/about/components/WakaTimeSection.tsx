"use client";

import Image from "next/image";

export default function WakatimeSection() {
  const badgeProject =
    "https://wakatime.com/badge/user/c4132229-b4fb-4d60-9914-f82715b7e8b6/project/9e3eb7a0-b4e4-437d-8ab5-514b93e871ed.svg";

  const charts = [
    {
      title: "Coding Activity",
      src: "https://wakatime.com/share/@kamapra/0136b93a-de20-47ff-acd2-32822055fdea.svg",
    },
    {
      title: "Languages",
      src: "https://wakatime.com/share/@kamapra/b2d516d5-df12-45b2-9992-62a7e09765ba.svg",
    },
    {
      title: "Categories",
      src: "https://wakatime.com/share/@kamapra/f8b2421e-49e0-44bc-975e-be1097d57c51.svg",
    },
  ];

  return (
    <section className="w-full space-y-6 p-6 rounded-2xl border border-white/5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-white font-semibold">WakaTime Stats</h2>
        <div className="relative h-6 w-40">
          <Image
            src={badgeProject}
            alt="Project Badge"
            fill
            className="object-contain object-right"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {charts.map((chart, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-zinc-400 text-xs ml-1 font-medium">
              {chart.title}
            </p>
            <div className="relative p-2 rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center">
              <Image
                src={chart.src}
                alt={chart.title}
                width={500}
                height={200}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
