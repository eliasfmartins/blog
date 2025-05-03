import { Container } from "@/components/container";
import { Header } from "@/components/Header";
import { PostsLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostsLists />
      </Suspense>
    </Container>
  );
}
