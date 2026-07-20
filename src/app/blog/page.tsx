import { getAllPosts } from "@/app/lib/posts";
import TimelineDashboard from "@/app/blog/Timelinedashboard";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Footer";

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
