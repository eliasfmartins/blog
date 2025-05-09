import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostSlugProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug)
  return {
    title: `Post - ${post.title}`,
    description: `Post - ${post.excerpt}`,
  }
}

export default async function SlugPage({ params }: PostSlugProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug).catch(notFound);

  const { title, excerpt, content, createdAt, updatedAt } = post;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
