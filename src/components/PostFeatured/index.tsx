import React from 'react'
import { PostHeading } from '../PostHeading'
import PostCoverImage from '../PostCoverImage'

export function PostFeatured() {
  const slug= 'asdasd'
  const postLink = `/post${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2  group">

    <PostCoverImage
      linkProps={{ href: postLink }}

      imageProps={
        {
          src: '/images/bryen_9.png',
          alt: 'teste', width: 1200,
          height: 720,
          priority: true
        }}
    />

    <div className="flex flex-col gap-4 sm:justify-center">
      <time dateTime="2025-05-04" className="text-slate-600 text-sm/tight block ">04-05-2024 10:00</time>
      <PostHeading children={'teste'} url={postLink} as="h2" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni suscipit impedit laudantium optio obcaecati quisquam adipisci voluptates aliquam incidunt, labore ipsa provident hic, sapiente quam blanditiis voluptatibus quibusdam vitae laboriosam.
      </p>
    </div>
  </section>
  )
}
