import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type SinglePostProps = {
  slug: string
}


export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug).catch(notFound);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">This is a single post page.</p>
    </div>
  );
}
