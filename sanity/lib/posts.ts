import { urlFor } from "./image";
import type { SanityPost } from "./queries";
import type { Post, FullPost } from "@/components/blog/blogData";

const FALLBACK_COVERS = [
  "#C8D8E8",
  "#D6C8A8",
  "#B8CEB8",
  "#C8B8D8",
  "#C8D4D0",
  "#D8C8B8",
];

export function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function coverUrl(
  post: Pick<SanityPost, "coverImage">,
  width = 1200,
): string | undefined {
  if (!post.coverImage?.asset) return undefined;
  return urlFor(post.coverImage).width(width).url();
}

export function coverAlt(
  post: Pick<SanityPost, "coverImage" | "title">,
): string {
  return post.coverImage?.alt || post.title || "Blog article cover";
}

function hashToIndex(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function toPost(post: SanityPost): Post {
  const idx = hashToIndex(post._id) % FALLBACK_COVERS.length;
  return {
    id: post._id,
    slug: post.slug || "",
    category: post.category || "Care & Education",
    title: post.title || "",
    excerpt: post.excerpt || "",
    date: formatDate(post.publishedAt || post._createdAt),
    readTime: post.readTime || "5 min read",
    coverBg: FALLBACK_COVERS[idx],
    coverUrl: coverUrl(post),
    coverAlt: coverAlt(post),
  };
}

export function toFullPost(post: SanityPost): FullPost {
  return {
    ...toPost(post),
    author: post.author,
    body: post.body || [],
  };
}
