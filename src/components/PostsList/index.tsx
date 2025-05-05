import { postRepository } from '@/repositories/post';
import PostCoverImage from '../PostCoverImage';
import { PostHeading } from '../PostHeading/index';

export const PostsLists = async () => {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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

            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                dateTime={post.createdAt}
                className="text-slate-600 text-sm/tight block"
              >
                {post.createdAt}
              </time>

              <PostHeading children={post.title} url={postLink} as="h2" />
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
