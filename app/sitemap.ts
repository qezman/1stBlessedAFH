import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { postSlugsQuery } from "@/sanity/lib/queries";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    "",
    "/about",
    "/contact",
    "/faqs",
    "/gallery",
    "/blog",
    "/privacypolicy",
    "/terms-of-use",
  ];

  const posts = await client.fetch<{ slug: string; publishedAt?: string | null; _createdAt?: string }[]>(
    postSlugsQuery,
  );

  return [
    ...pages.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency:
        path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
      lastModified: post.publishedAt
        ? new Date(post.publishedAt)
        : post._createdAt
          ? new Date(post._createdAt)
          : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
