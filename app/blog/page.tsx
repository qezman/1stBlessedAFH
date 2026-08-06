import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostGrid } from "@/components/blog/PostGrid";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { postsQuery, type SanityPost } from "@/sanity/lib/queries";
import { toPost } from "@/sanity/lib/posts";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog & Family Resources",
  description:
    "Guides, care advice, and senior health tips from our team at 1st Blessed Adult Family Home in Everett, WA.",
  path: "/blog",
});

export const revalidate = 60;

export default async function BlogPage() {
  const { data } = (await sanityFetch({
    query: postsQuery,
  })) as { data: SanityPost[] };
  const docs = data ?? [];
  const featuredDoc = docs.find((d) => d.featured) ?? docs[0];
  const posts = docs.map(toPost);
  const featured = featuredDoc ? posts.find((p) => p.id === featuredDoc._id) : undefined;
  const rest = featured ? posts.filter((p) => p.id !== featured.id) : posts;

  return (
    <main>
      <BlogHero />
      {featured && <FeaturedPost post={featured} />}
      {rest.length > 0 && <PostGrid posts={rest} />}
      {posts.length === 0 && (
        <section className="px-6 py-24 sm:px-12 bg-white text-center">
          <p className="text-gray-500 font-light">
            No articles published yet. Check back soon.
          </p>
        </section>
      )}
      <BlogCTA />
      <SanityLive />
    </main>
  );
}
