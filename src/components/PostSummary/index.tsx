import React from 'react'
import { PostHeading } from '../PostHeading'
import { PostDate } from '../PostDate'

type PostSummaryProps = {
  postLink: string
  postHeadring: 'h1' | 'h2';
  createdAt: string
  title: string
  excerpt: string
}


export function PostSummary({ title, createdAt, excerpt, postLink }: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />
      <PostHeading children={title} url={postLink} as="h2" />
      <p>{excerpt}</p>
    </div>
  )
}
