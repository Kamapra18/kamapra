"use client";

import { LuArrowUpRight } from "react-icons/lu";

export function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: "Building My First Full-Stack Project",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link artikel berhasil disalin!");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Gagal membagikan artikel:", error);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]">
      Share Article
      <LuArrowUpRight size={16} />
    </button>
  );
}
