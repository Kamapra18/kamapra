import {
  getAllPosts,
  getPostBySlug,
  getPostChapters,
  type Chapter,
} from "@/app/lib/posts";
import PostReader from "@/app/components/card/Postreader";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20 text-center text-slate-300">
        <p className="text-xl font-semibold text-white">
          Post tidak ditemukan.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Pastikan slug post di URL sudah benar.
        </p>
      </div>
    );
  }

  const chapters: Chapter[] =
    post.type === "belajar"
      ? getPostChapters(post.content)
      : [{ id: "isi", title: post.title, content: post.content.trim() }];

  return <PostReader post={post} chapters={chapters} />;
}
