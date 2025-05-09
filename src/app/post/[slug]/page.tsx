import { SinglePost } from "@/components/SinglePost";
import { SpinLoader } from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  )
}
