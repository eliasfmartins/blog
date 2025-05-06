import React from 'react'
import { PostHeading } from '../PostHeading'
import { formatDateTime, formatRelativeDate } from '@/utils/format-date-time'
import { PostModel } from '@/models/post/post-model.D'

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
      <time
        dateTime={createdAt}
        className="text-slate-600 text-sm/tight block"
        title={formatRelativeDate(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>

      <PostHeading children={title} url={postLink} as="h2" />
      <p>{excerpt}</p>
    </div>
  )
}
