import { BlogHero } from "../components/blog/BlogHero";
import { FeaturedPost } from "../components/blog/FeaturedPost";
import { PostGrid } from "../components/blog/PostGrid";
import { BlogCTA } from "../components/blog/BlogCTA";
import { FEATURED_POST, POSTS } from "../components/blog/blogData";

export function Blog() {
  return (
    <main>
      <BlogHero />
      <FeaturedPost post={FEATURED_POST} />
      <PostGrid posts={POSTS} />
      <BlogCTA />
    </main>
  );
}
