"use client";

import React from "react";
import Link from "next/link";
import { FaPlay, FaPause } from "react-icons/fa";

interface ButtonProjectLinksProps {
  isPlaying: boolean;
  toggleAutoplay: () => void;
}

const ButtonProjectLinks: React.FC<ButtonProjectLinksProps> = ({
  isPlaying,
  toggleAutoplay,
}) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={toggleAutoplay}
        className="flex items-center justify-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-105"
      >
        {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>

      <Link
        href="/projects"
        className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 ml-4"
      >
        View All Projects
      </Link>
    </div>
  );
};

export default ButtonProjectLinks;
