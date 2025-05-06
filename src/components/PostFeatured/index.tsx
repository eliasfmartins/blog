import React from 'react'
import PostCoverImage from '../PostCoverImage'
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'asdasd'
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
      <PostSummary
        createdAt={"2025-04-07T00:33:56.907Z"}
        title={"Como a escrita pode mudar sua carreira"}
        excerpt={"Muitas empresas e desenvolvedores individuais escolhem o Next.js justamente porque ele consegue unir simplicidade com recursos avançados."}
        postLink={postLink}
        postHeadring='h1' />

    </section>
  )
}
