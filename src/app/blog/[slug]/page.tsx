import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug, getPostChapters } from "@/lib/Posts";

import BlogDetailPage from "@/components/feature/BlogDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background">
          <p className="text-sm text-(--text-muted)">Memuat artikel...</p>
        </div>
      }>
      <BlogContent params={params} />
    </Suspense>
  );
}

async function BlogContent({ params }: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const chapters = getPostChapters(post.content);
  const allPosts = getAllPosts();

  return <BlogDetailPage post={post} chapters={chapters} allPosts={allPosts} />;
}
