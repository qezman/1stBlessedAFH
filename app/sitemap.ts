import type { MetadataRoute } from "next";
import { FULL_POSTS } from "@/components/blog/blogData";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [
    ...pages.map((path) => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency:
        path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...FULL_POSTS.map((post) => ({
      url: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
