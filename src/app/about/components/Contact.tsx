"use client";

import Heading from "@/app/components/ui/Heading";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaSpotify,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiGmail, SiShutterstock } from "react-icons/si";

export default function ContactBento() {
  const socialCards = [
    {
      title: "Stay in Touch",
      desc: "Hubungi saya via email untuk pertanyaan atau kolaborasi.",
      icon: <SiGmail className="text-4xl" />,
      btnText: "Go to Gmail",
      link: "mailto:marioprayoga18@gmail.com",
      color: "from-red-600/20 to-red-900/20 border-red-500/20",
      grid: "md:col-span-8",
      iconColor: "text-red-500",
    },
    {
      title: "Instagram",
      desc: "Follow Instagram saya",
      icon: <FaInstagram className="text-4xl" />,
      btnText: "Go to Instagram",
      link: "https://www.instagram.com/marioprayoga46",
      color: "from-pink-600/20 to-purple-600/20 border-pink-500/20",
      grid: "md:col-span-4",
      iconColor: "text-pink-500",
    },
    {
      title: "Let's Connect",
      desc: "Mari terhubung secara profesional..",
      icon: <FaLinkedin className="text-4xl" />,
      btnText: "Go to Linkedin",
      link: "#",
      color: "from-blue-600/20 to-blue-900/20 border-blue-500/20",
      grid: "md:col-span-4",
      iconColor: "text-blue-500",
    },
    {
      title: "Spotify",
      desc: "Follow Spotify saya",
      icon: <FaSpotify className="text-4xl" />,
      btnText: "Go to Spotify",
      link: "https://open.spotify.com/user/kadekmarioprayoga",
      color: "from-green-600/20 to-green-900/20 border-green-500/20",
      grid: "md:col-span-8",
      iconColor: "text-green-500",
    },
    {
      title: "Github",
      desc: "Lihat proyek open-source.",
      icon: <FaGithub className="text-4xl" />,
      btnText: "Go to Github",
      link: "https://github.com/Kamapra18",
      color: "from-gray-600/20 to-gray-900/20 border-gray-500/20",
      grid: "md:col-span-7",
      iconColor: "text-gray-400",
    },
    {
      title: "Tiktok",
      desc: "Follow Tiktok saya",
      icon: <FaTiktok className="text-4xl" />,
      btnText: "Go to Tiktok",
      link: "https://www.tiktok.com/@kadekmarioprayoga",
      color: "from-slate-600/20 to-slate-900/20 border-slate-500/20",
      grid: "md:col-span-5",
      iconColor: "text-white",
    },
    {
      title: "Shutterstock",
      desc: "Lihat Koleksi foto saya",
      icon: <SiShutterstock className="text-4xl" />,
      btnText: "Go to Shutterstock",
      link: "https://www.shutterstock.com/g/Kamapra",
      color: "from-orange-600/20 to-orange-900/20 border-orange-500/20",
      grid: "md:col-span-12",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section className="py-20 px-5 max-w-6xl mx-auto min-h-screen">
      <div className="mb-16 text-center md:text-left">
        <Heading text="Find Me" highlight="On" />
        <p className="text-gray-400 mt-2 text-lg">
          Let&apos;s build something amazing together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {socialCards.map((card, index) => (
          <div
            key={index}
            className={`${card.grid} bg-gradient-to-br ${card.color} backdrop-blur-xl rounded-[2rem] p-8 border hover:border-white/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-white/5`}>
            {/* Background Glow */}
            <div
              className={`absolute -right-10 -top-10 w-40 h-40 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-700`}></div>

            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/60 text-base max-w-[280px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div
                className={`${card.iconColor} p-3 rounded-2xl bg-white/5 backdrop-blur-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                {card.icon}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between z-10 w-full">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black hover:bg-black hover:text-white py-3 px-6 rounded-2xl transition-all duration-300 text-sm font-bold shadow-lg shadow-black/20 group/btn">
                {card.btnText}
                <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
