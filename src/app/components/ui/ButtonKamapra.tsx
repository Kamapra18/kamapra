"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface KamapraButtonProps {
  text: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "red" | "blue";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function KamapraButton({
  text,
  href,
  onClick,
  variant = "blue",
  className = "",
  type = "button", // Default ke button
}: KamapraButtonProps) {
  const colors = {
    gold: { bg: "var(--accent-gold)", shadow: "#8c6d1a", text: "#2b0202" },
    red: { bg: "var(--accent-primary)", shadow: "#7a0c0c", text: "#ffffff" },
    blue: { bg: "#2563eb", shadow: "#1e3a8a", text: "#ffffff" },
  };

  const activeColor = colors[variant];

  // Base style untuk animasi dan UI
  const buttonContent = (
    <motion.button
      type={type} // Penting agar bisa submit form
      whileHover={{
        scale: 1.05,
        filter: "brightness(1.1)",
        boxShadow: `inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 8px 0 0 ${activeColor.shadow}, 0 20px 30px rgba(37, 99, 235, 0.3)`,
      }}
      whileTap={{
        scale: 0.98,
        translateY: 4,
        boxShadow: `inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 2px 0 0 ${activeColor.shadow}, 0 5px 10px rgba(0, 0, 0, 0.4)`,
      }}
      onClick={onClick}
      className={`
        relative px-10 py-4 rounded-full 
        font-heading text-xl tracking-wider uppercase font-bold
        transition-all duration-200
        ${className}
      `}
      style={{
        backgroundColor: activeColor.bg,
        color: activeColor.text,
        boxShadow: `inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 6px 0 0 ${activeColor.shadow}, 0 15px 25px rgba(37, 99, 235, 0.2)`,
        fontFamily: "var(--font-heading)",
      }}>
      {text}
    </motion.button>
  );

  // Jika ada href, bungkus pakai Link. Jika tidak (buat submit), langsung button saja.
  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
