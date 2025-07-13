"use client";

import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "gallery", "projects", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      });

      setActiveAnchor(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMoveToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveAnchor(anchor);
    }
  };

  const navItems = [
    { icon: <FaHome />, anchor: "home" },
    { icon: <FaUser />, anchor: "about" },
    { icon: <FaFolderOpen />, anchor: "projects" },
    { icon: <FaEnvelope />, anchor: "contact" },
  ];

  return (
    <div className="hidden md:flex fixed z-50 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul className="flex flex-col justify-evenly items-center h-full text-gray-50">
        {navItems.map(({ icon, anchor }) => (
          <li key={anchor}>
            <button
              onClick={() => handleMoveToSection(anchor)}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer
                ${activeAnchor === anchor ? "bg-gray-500" : "bg-transparent"}
                hover:bg-gray-600
              `}>
              <span className="text-xl">{icon}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
