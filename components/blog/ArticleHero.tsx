import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FullPost } from "./blogData";
import { CategoryPill, PostCover } from "./FeaturedPost";

export function ArticleHero({ post }: { post: FullPost }) {
  const shareUrl = `https://1stblessedafh.com/blog/${post.slug}`;

  return (
    <section className="pt-16 sm:pt-24 pb-0 bg-white px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <Link
            href="/"
            className="text-xs text-[#6B93C4] hover:text-[#1A3358] transition-colors"
          >
            Home
          </Link>
          <span className="text-xs text-gray-300">›</span>
          <Link
            href="/blog"
            className="text-xs text-[#6B93C4] hover:text-[#1A3358] transition-colors"
          >
            Blog
          </Link>
          <span className="text-xs text-gray-300">›</span>
          <span className="text-xs text-gray-400 truncate max-w-[260px]">
            {post.title}
          </span>
        </div>

        {/* Header */}
        <div className="max-w-[760px] mb-12">
          <CategoryPill label={post.category} />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-light text-gray-400 mb-6">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>1st Blessed Team</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-[52px] font-light text-[#0B1628] tracking-[-0.025em] leading-relaxed mb-6">
            {post.title}
          </h1>
          <p className="text-lg font-light text-gray-500 leading-[1.75]">
            {post.excerpt}
          </p>
        </div>

        {/* Cover image */}
        <div className="max-w-[960px] mx-auto">
          <PostCover
            post={post}
            className="w-full rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-black/5"
            style={{ aspectRatio: "16/9" }}
            priority
            sizes="(max-width: 768px) 100vw, 960px"
          />
          {post.coverUrl && post.coverAlt && (
            <p className="mt-3 text-center text-xs font-light text-gray-400">
              {post.coverAlt}
            </p>
          )}
        </div>

        {/* Share row */}
        <div className="flex flex-col items-start gap-3 py-5 border-t border-b border-gray-100 mt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-gray-400">
            Share this article
          </span>
          <div className="flex w-full flex-wrap gap-2 sm:w-auto">
            {[
              {
                label: "Facebook",
                href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                external: true,
              },
              {
                label: "Email",
                href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`,
                external: false,
              },
              { label: "Copy link", href: "#", external: false },
            ].map((b) => (
              <a
                key={b.label}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded px-3.5 py-2 text-xs font-normal text-gray-600 hover:border-gray-300 hover:bg-gray-100 transition-colors"
              >
                {b.label}
                {b.external && <ArrowRight className="w-3 h-3" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
