import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { postBySlugQuery, postsQuery, type SanityPost } from "@/sanity/lib/queries";
import { toFullPost, toPost } from "@/sanity/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = (await sanityFetch({
    query: postBySlugQuery,
    params: { slug: params.slug },
  })) as { data: SanityPost };

  if (!data?.slug) {
    return {};
  }
  return createPageMetadata({
    title: data.title || "Blog article",
    description: data.excerpt || "",
    path: `/blog/${data.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const [{ data: post }, { data: all }] = (await Promise.all([
    sanityFetch({
      query: postBySlugQuery,
      params: { slug: params.slug },
    }),
    sanityFetch({ query: postsQuery }),
  ])) as [{ data: SanityPost }, { data: SanityPost[] }];

  if (!post?.slug) {
    notFound();
  }

  const full = toFullPost(post);
  const related = (all ?? [])
    .filter((p) => p._id !== post._id)
    .slice(0, 3)
    .map(toPost);

  return (
    <main>
      <ArticleHero post={full} />
      <ArticleBody post={full} />
      {related.length > 0 && <RelatedPosts posts={related} />}
      <BlogCTA
        label="Take the next step"
        heading={"Have more questions?\nWe're happy to talk."}
        sub="No phone trees, no intake forms. Just a real conversation about what's right for your family."
      />
      <SanityLive />
    </main>
  );
}
