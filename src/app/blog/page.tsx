import type { Metadata } from "next";

import { getAllPosts } from "@/lib/Posts";
import TimelineDashboard from "@/components/blog/TimelineDashboard";
// import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Journal | Kamapra",
  description:
    "A collection of thoughts, learning experiences, projects, and personal journeys by Mario Prayoga. Exploring ideas, development, and continuous growth.",
  openGraph: {
    title: "Journal | Kamapra",
    description:
      "Stories, lessons, projects, and experiences from the journey of learning and growing.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <TimelineDashboard posts={posts} />

      {/* <Footer /> */}
    </main>
  );
}
