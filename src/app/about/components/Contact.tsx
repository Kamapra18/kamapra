"use client";

import Heading from "@/app/components/Heading";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactBento() {
  const socialCards = [
    {
      title: "Stay in Touch",
      desc: "Hubungi saya via email untuk pertanyaan atau kolaborasi.",
      icon: <SiGmail className="text-4xl opacity-80" />,
      btnText: "Go to Gmail",
      link: "mailto:marioprayoga18@gmail.com",
      color: "bg-[#940002]",
      grid: "md:col-span-5",
    },
    {
      title: "Instagram",
      desc: "Follow Instagram saya",
      icon: <FaInstagram className="text-4xl opacity-80" />,
      btnText: "Go to Instagram",
      link: "https://www.instagram.com/marioprayoga46",
      color:
        "bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 opacity-90",
      grid: "md:col-span-2",
    },
    {
      title: "Let's Connect",
      desc: "Mari terhubung secara profesional..",
      icon: <FaLinkedin className="text-4xl opacity-80" />,
      btnText: "Go to Linkedin",
      link: "#",
      color: "bg-blue-700/80",
      grid: "md:col-span-2",
    },
    {
      title: "Github",
      desc: "Lihat proyek open-source yang saya kerjakan.",
      icon: <FaGithub className="text-4xl opacity-80" />,
      btnText: "Go to Github",
      link: "https://github.com/Kamapra18",
      color: "bg-gray-800/80",
      grid: "md:col-span-2",
    },
    {
      title: "Tiktok",
      desc: "Follow Tiktok saya",
      icon: <FaTiktok className="text-4xl opacity-80" />,
      btnText: "Go to Tiktok",
      link: "https://www.tiktok.com/@kadekmarioprayoga",
      color: "bg-black/60 border border-white/10",
      grid: "md:col-span-2",
    },
  ];

  return (
    <section id="contact" className="py-20 px-5 max-w-5xl mx-auto min-h-screen">
      <div className="mb-12">
        <Heading text="Contact" highlight="Me" />
        <p className="text-gray-400">Find me on social media</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {socialCards.map((card, index) => (
          <div
            key={index}
            className={`${card.grid} ${card.color} backdrop-blur-md rounded-3xl p-8 flex justify-between items-center group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl relative overflow-hidden`}>
            <div className="flex flex-col h-full justify-between z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm max-w-[200px] leading-snug">
                  {card.desc}
                </p>
              </div>

              <a
                href={card.link}
                target="_blank"
                className="mt-6 flex items-center gap-2 bg-white/20 hover:bg-white text-white hover:text-black py-2 px-4 rounded-xl backdrop-blur-md transition-all text-sm font-medium w-fit">
                {card.btnText} <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

            <div className="z-10">{card.icon}</div>

            {/* Efek kilauan halus saat hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
