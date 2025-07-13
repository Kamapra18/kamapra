"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  download = false,
  className,
}: ButtonProps) {
  if (download) {
    return (
      <a
        href={href}
        download
        className={
          "px-4 py-3 bg-black text-blue-200 rounded-3xl shadow-lg inline-block transition duration-300 hover:bg-blue-950 ${className}"
        }>
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={`px-4 py-3 bg-black text-blue-200 rounded-3xl shadow-lg inline-block transition duration-300 hover:bg-blue-950 ${className}`}>
      {children}
    </Link>
  );
}
