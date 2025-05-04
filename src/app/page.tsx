import { Container } from "@/components/container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading/inde";
import { PostsLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2  group">
        <Link href={"/posts"} className="text-2xl font-bold text-blue-500 w-full h-full overflow-hidden transition rounded-xl hover:shadow-lg ">
          <Image src={'/images/bryen_0.png'} width={1200} height={720} alt="Titulo do Post" className="group-hover:scale-105 w-full h-full transition object-cover object-center"  priority/>
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time dateTime="2025-05-04" className="text-slate-600 text-sm/tight block ">04-05-2024 10:00</time>
          <PostHeading children={'teste'} url="#" as="h2"/>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni suscipit impedit laudantium optio obcaecati quisquam adipisci voluptates aliquam incidunt, labore ipsa provident hic, sapiente quam blanditiis voluptatibus quibusdam vitae laboriosam.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsLists />
      </Suspense>
    </Container>
  );
}
