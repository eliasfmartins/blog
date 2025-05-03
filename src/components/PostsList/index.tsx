import { postRepository } from '@/repositories/post';

export const PostsLists = async () => {
  const posts = await postRepository.findAll();
  
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b">
          <h2 className="text-xl font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  )
}
