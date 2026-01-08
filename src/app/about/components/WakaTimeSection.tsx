"use client";

import Image from "next/image";

export default function WakatimeSection() {
  const username = "Kamapra18";

  return (
    <div className="relative w-full h-[200px] bg-black/20 rounded-2xl overflow-hidden p-4">
      <Image
        // Menggunakan mirror yang lebih jarang down
        src={`https://github-readme-stats-one-eight.vercel.app/api/wakatime?username=${username}&layout=compact&theme=dark&bg_color=00000000&hide_border=true&langs_count=5`}
        alt="WakaTime Stats"
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}