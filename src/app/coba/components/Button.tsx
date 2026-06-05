"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import icon baru

interface KamapraButtonProps {
  text: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  // Update tipe icon
  iconType?: "circle" | "arrow" | "arrowDown" | "external" | "none"; 
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function KamapraButton({
  text,
  href,
  onClick,
  iconType = "none",
  className = "",
  type = "button",
  target,
  rel,
}: KamapraButtonProps) {

  const buttonContent = (
    <motion.button
      suppressHydrationWarning
      type={type}
      whileHover={{
        scale: 1.02,
        backgroundColor: "var(--btn-glass-bg-hover)",
        borderColor: "var(--btn-glass-border-hover)",
        boxShadow: "var(--btn-glass-shadow-hover)",
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: "var(--btn-glass-bg-tap)",
      }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full text-base font-medium tracking-wide text-[var(--btn-glass-text)] border border-[var(--btn-glass-border)] transition-colors duration-300 cursor-pointer select-none ${className}`}
      style={{
        background: "var(--btn-glass-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Circle Icon */}
      {iconType === "circle" && (
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--btn-icon-circle-bg)", boxShadow: "var(--btn-icon-circle-shadow)" }} />
      )}

      <span>{text}</span>

      {/* Arrow Right */}
      {iconType === "arrow" && (
        <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ml-1" style={{ backgroundColor: "var(--btn-icon-arrow-bg)" }}>
          <svg className="w-3.5 h-3.5 stroke-[2.5]" style={{ color: "var(--btn-icon-arrow-stroke)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}

      {/* Arrow Down */}
      {iconType === "arrowDown" && (
        <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ml-1" style={{ backgroundColor: "var(--btn-icon-arrow-bg)" }}>
          <svg className="w-3.5 h-3.5 stroke-[2.5]" style={{ color: "var(--btn-icon-arrow-stroke)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      )}

      {/* External Link */}
      {iconType === "external" && (
        <span className="flex items-center justify-center flex-shrink-0 ml-1 text-sm">
          <FaExternalLinkAlt />
        </span>
      )}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}