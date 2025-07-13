"use client";

import Image from "next/image";
import { useRef, useState, FC } from "react";
import Link from "next/link";

interface NavItemsProps {
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
}

const NavItems: FC<NavItemsProps> = ({ isNavOpen, setIsNavOpen }) => {
  const handleItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-screen z-[45] 
        flex items-center justify-center 
        backdrop-blur-sm transition-all duration-500 transform
        ${
          isNavOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}>
      <div className="relative flex flex-col items-center min-h-screen bg-blue-500 min-w-full opacity-95">
        <div className="flex flex-col items-center space-y-8 my-auto z-50">
          <h1 className="text-6xl font-bold text-white">Menu</h1>
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              href={`/${
                section === "home"
                  ? "/"
                  : section === "contact"
                  ? "/#contact"
                  : section
              }`}
              onClick={handleItemClick}
              className="group relative text-2xl font-bold text-white cursor-pointer transition duration-300">
              <h2 className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar: FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar px-7 md:px-18 w-screen fixed transition-colors duration-500 ${
          isNavOpen
            ? "backdrop-blur-md bg-blue-500 bg-opacity-50"
            : "backdrop-blur-md"
        } inset-0 flex justify-between items-center h-16 z-50`}>
        <div className="flex items-center space-x-2">
          <Image
            src="/Kamapra.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-white">Kamapra</h1>
        </div>
        <button
          className="burger button flex flex-col justify-center items-center space-y-1.5"
          onClick={toggleNav}>
          <div
            className={`w-10 h-1 rounded-full transition-all duration-300 ${
              isNavOpen ? "rotate-45 bg-white translate-y-[2px]" : "bg-white"
            }`}></div>
          <div
            className={`w-10 h-1 rounded-full transition-all duration-300 ${
              isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-white"
            }`}></div>
        </button>
      </nav>
      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Navbar;
