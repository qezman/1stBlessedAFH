import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    author,
    category,
    excerpt,
    readTime,
    publishedAt,
    featured,
    coverImage,
    body
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    author,
    category,
    excerpt,
    readTime,
    publishedAt,
    featured,
    coverImage,
    body
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    _createdAt
  }
`;

export interface PortableSpan {
  _type?: string;
  text?: string;
  marks?: string[];
  _key?: string;
}

export interface PortableMarkDef {
  _key: string;
  _type: string;
  href?: string;
}

export interface PortableBlock {
  _type: "block";
  _key?: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  level?: number;
  markDefs?: PortableMarkDef[];
  children?: PortableSpan[];
}

export interface SanityImageField {
  asset?: { _ref?: string; _type?: string } | null;
  alt?: string;
}

export interface SanityPost {
  _id: string;
  _createdAt?: string;
  title?: string;
  slug?: string;
  author?: string;
  category?: string;
  excerpt?: string;
  readTime?: string;
  publishedAt?: string;
  featured?: boolean;
  coverImage?: SanityImageField | null;
  body?: PortableBlock[];
}
