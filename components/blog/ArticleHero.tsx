import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FullPost } from "./blogData";
import { CategoryPill, PostCover } from "./FeaturedPost";

export function ArticleHero({ post }: { post: FullPost }) {
  const shareUrl = `https://1stblessedafh.com/blog/${post.slug}`;

  return (
    <section className="pt-28 sm:pt-24 pb-0 bg-white px-6 sm:px-12">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
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
        <div className="mb-10 flex flex-col items-center">
          <CategoryPill label={post.category} />
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-light text-[#0B1628] tracking-[-0.02em] leading-tight mt-6 mb-6">
            {post.title}
          </h1>
          <p className="text-lg sm:text-xl font-light text-gray-500 leading-[1.6] max-w-[720px] mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-x-3 text-sm font-light text-gray-500">
            <span>{post.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9992E]" />
            <span>{post.readTime}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9992E]" />
            <span>1st Blessed Team</span>
          </div>
        </div>
      </div>

      {/* Cover image - Constrained width */}
      <div className="max-w-[860px] mx-auto relative mt-8 mb-12">
        <PostCover
          post={post}
          className="w-full rounded-2xl overflow-hidden shadow-card"
          style={{ aspectRatio: "16/9" }}
          priority
          sizes="(max-width: 860px) 100vw, 860px"
        />
        {post.coverUrl && post.coverAlt && (
          <p className="mt-4 text-center text-xs font-light text-gray-400">
            {post.coverAlt}
          </p>
        )}
      </div>

      <div className="max-w-[860px] mx-auto">
        {/* Share row */}
        <div className="flex flex-col items-center gap-4 py-6 border-t border-b border-gray-100 sm:flex-row sm:justify-between">
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-gray-400">
            Share this article
          </span>
          <div className="flex flex-wrap gap-2 justify-center">
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
                className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-gray-600 hover:border-[#1A3358] hover:text-[#1A3358] hover:bg-white transition-colors"
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
