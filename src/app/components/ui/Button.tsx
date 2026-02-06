"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  target,
  download = false,
  className,
}: ButtonProps) {
  if (download) {
    return (
      <a
        href={href}
        download
        className={
          "px-4 py-3  bg-[linear-gradient(135deg,#1E40AF,#2563EB,#38BDF8)] text-blue-200 rounded-3xl shadow-lg inline-block transition duration-300 ${className}"
        }>
        {children}
      </a>
    );
  }
  return (
    <Link
      target={target}
      href={href}
      className={`px-4 py-3 capitalize bg-[linear-gradient(135deg,#2563EB,#1E40AF)] text-blue-200 rounded-3xl shadow-lg inline-block transition duration-300 ${className}`}>
      {children}
    </Link>
  );
}
