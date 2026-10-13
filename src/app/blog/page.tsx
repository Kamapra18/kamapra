import { getAllPosts } from "@/app/lib/posts";
import TimelineDashboard from "@/app/blog/Timelinedashboard";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Kamapra | Cerita, Belajar & Pengalaman",
  description:
    "Baca tulisan Kamapra tentang perjalanan belajar web development, pengalaman kerja, pendidikan, event, dan cerita perjalanan di luar dunia digital.",
};

export default async function TimelinePage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <TimelineDashboard posts={posts} />
      <FooterSection />
    </>
  );
}
