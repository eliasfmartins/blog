import PostCoverImage from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export const PostsLists = async () => {
  const posts = await findAllPublicPostsCached();

  return (
    <div className="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            <h2 className="text-xl font-bold">{post.title}</h2>

            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
              }}
            />

            <PostSummary createdAt={post.createdAt} title={post.title} excerpt={post.excerpt} postLink={postLink} postHeadring='h2' />
          </div>
        );
      })}
    </div>
  );
};
