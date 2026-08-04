import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostGrid } from "@/components/blog/PostGrid";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { FEATURED_POST, POSTS } from "@/components/blog/blogData";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Family Resources",
  description:
    "Guides, care advice, and senior health tips from our team at 1st Blessed Adult Family Home in Everett, WA.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPost post={FEATURED_POST} />
      <PostGrid posts={POSTS} />
      <BlogCTA />
    </main>
  );
}
