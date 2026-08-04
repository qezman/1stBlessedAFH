import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { FULL_POSTS, RELATED_POSTS } from "@/components/blog/blogData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return FULL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = FULL_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = FULL_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <RelatedPosts posts={RELATED_POSTS} />
      <BlogCTA
        label="Take the next step"
        heading={"Have more questions?\nWe're happy to talk."}
        sub="No phone trees, no intake forms. Just a real conversation about what's right for your family."
      />
    </main>
  );
}
