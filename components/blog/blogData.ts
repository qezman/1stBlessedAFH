import type { PortableBlock } from "@/sanity/lib/queries";

export interface Post {
  id: string | number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverBg: string;
  coverUrl?: string;
  coverAlt?: string;
}

export interface FullPost extends Post {
  body: PortableBlock[];
  author?: string;
}
