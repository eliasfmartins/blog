import { PostFeatured } from "@/components/PostFeatured";
import { PostsLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsLists />
      </Suspense>
    </>
  );
}
