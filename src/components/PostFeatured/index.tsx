import React from 'react'
import PostCoverImage from '../PostCoverImage'
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostFeatured() {

	const posts = await findAllPublicPostsCached();
	const post = posts[0];
	const postLink = `/post${post.slug}`;
	return (
		<section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2  group">

			<PostCoverImage
				linkProps={{ href: postLink }}

				imageProps={
					{
						src: post.coverImageUrl,
						alt: post.title,
						width: 1200,
						height: 720,
						priority: true
					}}
			/>
			<PostSummary
				createdAt={post.createdAt}
				title={post.title}
				excerpt={post.excerpt}
				postLink={postLink}
				postHeadring='h1'
			/>

		</section>
	)
}
