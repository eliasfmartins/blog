import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PostHeading } from "../PostHeading";
import { PostDate } from '../PostDate/index';
import { SafeMarkDown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string
}


export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug).catch(notFound);
  return (
    <article className="flex flex-col gap-4 mb-16">
      <header className="group flex flex-col gap-4 mb-4">

        <Image

          className="rounded-xl "
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />
        <PostHeading url={`/post/${slug}`} children={post.title} />
        <p>{post.author} | <PostDate dateTime={post.createdAt} /> </p>
      </header>
      <p className="mb-4 text-xl text-slate-600">{post.excerpt}</p>
      <SafeMarkDown markdown={post.content} />
    </article>
  );
}
