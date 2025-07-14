"use client";

import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaCamera,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

function SocialIcon({ Icon, href }: SocialIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="text-gray-400 text-2xl hover:text-white cursor-pointer" />
    </a>
  );
}

export default function FooterContact() {
  return (
    <div>
      <h2 className="text-lg font-bold">Get in touch</h2>
      <p className="mt-2 text-gray-400">My social media account</p>
      <div className="flex space-x-4 mt-4">
        <SocialIcon
          Icon={FaInstagram}
          href="https://www.instagram.com/mario_prayoga46/"
        />
        <SocialIcon Icon={FaWhatsapp} href="https://wa.me/081949444963" />
        <SocialIcon Icon={FaGithub} href="https://github.com/Kamapra18/" />
        <SocialIcon
          Icon={FaLinkedinIn}
          href="https://www.linkedin.com/in/mario-prayoga-6233b0333/"
        />
        <SocialIcon
          Icon={FaCamera}
          href="https://www.shutterstock.com/g/Kamapra"
        />
      </div>
    </div>
  );
}
