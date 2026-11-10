import { getAllPosts } from "@/lib/posts";
import { RelatedBlogPosts } from "@/components/card/RelateBlogPosts";

export function Blog() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-(--surface) py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-22">
        {/* Heading dan tombol lihat selengkapnya */}

        <RelatedBlogPosts posts={posts} currentSlug="" />
      </div>
    </section>
  );
}
