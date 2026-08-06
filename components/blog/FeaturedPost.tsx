import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Post } from "./blogData";

export function CategoryPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1A3358] bg-[#EEF5FC] rounded-sm px-2.5 py-1.5 mb-3.5">
      {label}
    </span>
  );
}

export function PostMeta({
  date,
  readTime,
}: {
  date: string;
  readTime: string;
}) {
  return (
    <div className="flex items-center gap-3 text-xs font-light text-gray-400 mb-2.5">
      <span>{date}</span>
      <span className="w-1 h-1 rounded-full bg-gray-300" />
      <span>{readTime}</span>
    </div>
  );
}

export function PostCover({
  post,
  className,
  style,
  priority,
  sizes,
  children,
}: {
  post: Post;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}) {
  if (post.coverUrl) {
    return (
      <div className={`relative ${className ?? ""}`} style={style}>
        <Image
          src={post.coverUrl}
          alt={post.coverAlt || post.title}
          fill
          priority={priority}
          sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
          className="object-cover"
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ ...style, background: post.coverBg }}
    >
      <span className="text-[11px] tracking-widest uppercase text-white/30">
        Cover Image
      </span>
      {children}
    </div>
  );
}

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="pt-20 sm:pt-24 pb-0 bg-white px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-wider uppercase text-gray-400 mb-7">
          <span className="w-5 h-px bg-gray-300" />
          Latest post
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-lg overflow-hidden hover:border-[#A8C3E0] transition-colors group"
        >
          {/* Cover */}
          <PostCover
            post={post}
            className="min-h-[320px] lg:min-h-[480px]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          >
            <div className="absolute top-5 left-5 bg-[#C9992E] text-white text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm">
              Featured
            </div>
          </PostCover>

          {/* Content */}
          <div className="p-10 sm:p-14 flex flex-col justify-center bg-white">
            <CategoryPill label={post.category} />
            <PostMeta date={post.date} readTime={post.readTime} />
            <h2 className="font-sans text-2xl sm:text-[28px] font-normal text-[#0B1628] tracking-[-0.015em] leading-[1.3] mb-5">
              {post.title}
            </h2>
            <p className="text-[15px] font-light text-gray-500 leading-[1.8] mb-8">
              {post.excerpt}
            </p>
            <div className="inline-flex items-center gap-2.5 bg-[#1A3358] group-hover:bg-[#122240] text-white text-sm font-medium px-7 py-3.5 rounded transition-colors w-fit">
              Read article
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
