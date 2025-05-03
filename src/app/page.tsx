import { PostsLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import { Suspense } from "react";

export default async function Home() {


  return (
    <div>
      <header className="text-center text-3xl font-bold r py-8">
        <h1>
          My Blog
        </h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsLists />
      </Suspense>

      <footer className="text-center text-3xl font-bold r py-8">
        <p>
          aqui e o footerzinho
        </p>
      </footer>
    </div>
  );
}
