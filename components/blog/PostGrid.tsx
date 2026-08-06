import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "./blogData";
import { CategoryPill, PostMeta, PostCover } from "./FeaturedPost";

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col group">
      <div className="overflow-hidden rounded mb-5">
        <PostCover
          post={post}
          className="w-full h-[220px] transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <CategoryPill label={post.category} />
      <PostMeta date={post.date} readTime={post.readTime} />

      <h3 className="font-sans text-[18px] font-normal text-[#0B1628] tracking-[-0.01em] leading-[1.4] mb-2.5 group-hover:text-[#1A3358] transition-colors">
        {post.title}
      </h3>
      <p className="text-sm font-light text-gray-500 leading-[1.75] mb-4 flex-grow">
        {post.excerpt}
      </p>

      <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1A3358] border-b border-[#A8C3E0] pb-0.5 w-fit transition-all duration-150 group-hover:gap-3">
        Read article
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}

export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="px-6 py-20 sm:px-12 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between pb-6 mb-12 border-b border-gray-100">
          <h2 className="font-sans text-xl font-normal text-[#0B1628] tracking-[-0.01em]">
            All articles
          </h2>
          <span className="text-[13px] font-light text-gray-400">
            {posts.length} posts
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
