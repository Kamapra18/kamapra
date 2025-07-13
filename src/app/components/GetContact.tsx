"use client";

import {
  FaArrowRight,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaCamera,
} from "react-icons/fa";
import useInView from "./hooks/InView";

export default function GetContact() {
  const icons = [
    {
      icon: <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />,
      link: "https://www.instagram.com/04_kmario/",
    },
    {
      icon: <FaGithub className="hover:text-gray-500 transition-colors duration-300" />,
      link: "https://github.com/Kamapra18/",
    },
    {
      icon: <FaLinkedinIn className="hover:text-blue-500 hover:bg-white transition-colors duration-300" />,
      link: "https://www.linkedin.com/in/mario-prayoga-6233b0333/",
    },
    {
      icon: <FaCamera className="hover:text-pink-500 transition-colors duration-300" />,
      link: "https://www.shutterstock.com/g/Kamapra",
    },
  ];

  const { ref, isInView } = useInView<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col justify-center items-center px-4 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all duration-1000 ${
        isInView ? "animate-slideInLeft" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-1 bg-black w-32 sm:w-40 md:w-60 lg:w-72 mb-1.5"></div>
      <div className="h-1 bg-black w-40 sm:w-52 md:w-72 lg:w-96 mb-1.5"></div>

      <div className="flex items-center gap-3 sm:gap-5 mb-2">
        <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center">
          get in <span className="text-amber-200 ml-2">touch</span>
        </h1>
        <a
          href="https://wa.me/081949444963"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaArrowRight className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-200 cursor-pointer hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      <div className="h-1 mt-2 bg-white rounded-2xl w-48 sm:w-72 md:w-96 lg:w-[28rem] mb-2"></div>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {icons.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:scale-110 transition-transform duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
