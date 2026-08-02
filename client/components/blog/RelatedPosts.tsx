import { Link } from "react-router-dom";
import type { Post } from "./blogData";
import { CategoryPill } from "./FeaturedPost";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="px-6 sm:px-12 pb-20 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto pt-16">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-4">
            — Keep reading
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#0B1628] tracking-[-0.015em]">
            More from our blog
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="flex flex-col group"
            >
              <div className="overflow-hidden rounded mb-4">
                <div
                  className="w-full h-[180px] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ background: post.coverBg }}
                >
                  <span className="text-[11px] tracking-widest uppercase text-white/30">
                    Cover Image
                  </span>
                </div>
              </div>
              <CategoryPill label={post.category} />
              <h3 className="font-sans text-base font-normal text-[#0B1628] tracking-[-0.01em] leading-[1.4] mb-2 group-hover:text-[#1A3358] transition-colors">
                {post.title}
              </h3>
              <span className="text-xs font-light text-gray-400">
                {post.date} · {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
