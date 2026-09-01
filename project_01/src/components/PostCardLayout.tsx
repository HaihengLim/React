import { posts } from '../data/post';
import PostCard from './PostCard';

export default function PostCardLayout() {
  return (
    <section id="post-card-layout">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          pageName={post.pageName}
          isVerified={post.isVerified}
          imagePost={post.imagePost}
          status={post.status}
          like={post.like}
          comment={post.comment}
          share={post.share}
          dateOfPost={post.dateOfPost}
          privacy={post.privacy}
        />
      ))}
    </section>
  );
}
