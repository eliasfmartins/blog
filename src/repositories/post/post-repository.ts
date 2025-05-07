import { PostModel } from "@/models/post/post-model.D";

export interface PostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlug(slug: string): Promise<PostModel>;
  // findBySlug(slug: string): Promise<PostModel | null>;
  // create(post: PostModel): Promise<PostModel>;
  // update(post: PostModel): Promise<PostModel>;
  // delete(id: string): Promise<void>;
  // findByAuthor(authorId: string): Promise<PostModel[]>;
  // findByPublished(published: boolean): Promise<PostModel[]>;
}
