import Link from "next/link";
import type { FullPost, BodyBlock } from "./blogData";

function renderBlock(block: BodyBlock, i: number) {
  if (block.type === "h2")
    return (
      <h2
        key={i}
        className="font-sans text-2xl font-medium text-[#0B1628] tracking-[-0.015em] leading-tight mt-11 mb-5"
      >
        {block.text}
      </h2>
    );

  if (block.type === "callout")
    return (
      <blockquote
        key={i}
        className="border-l-[3px] border-[#C9992E] bg-[#FDF8EE] rounded-r px-6 py-5 my-9 text-lg font-light text-[#0B1628] leading-[1.65] italic"
      >
        {block.text}
      </blockquote>
    );

  return (
    <p
      key={i}
      className="text-[17px] font-light text-gray-700 leading-[1.85] mb-6"
    >
      {block.text}
    </p>
  );
}

export function ArticleBody({ post }: { post: FullPost }) {
  const headings = post.body.filter((b) => b.type === "h2");

  return (
    <section className="px-6 py-20 sm:px-12 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-20 items-start">
        {/* Article body */}
        <div>
          {post.body.map((block, i) => renderBlock(block, i))}

          <div className="mt-14 pt-10 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1A3358] hover:text-[#C9992E] transition-colors group"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 7H3M6 4L3 7l3 3"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>

        {/* Sticky sidebar */}
        <div className="lg:sticky lg:top-[100px] flex flex-col gap-6">
          {/* Table of contents */}
          {headings.length > 0 && (
            <div className="bg-gray-50 border border-gray-100 rounded p-6">
              <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-4">
                In this article
              </div>
              <ul className="flex flex-col gap-2.5">
                {headings.map((h, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-[13px] font-light text-gray-500 leading-relaxed pl-3 border-l-2 border-gray-200 hover:border-[#1A3358] hover:text-[#1A3358] transition-colors block"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Author */}
          <div className="bg-gray-50 border border-gray-100 rounded p-6">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-4">
              Written by
            </div>
            <div className="w-12 h-12 rounded-full bg-[#EEF5FC] flex items-center justify-center text-xl mb-3">
              👤
            </div>
            <div className="text-sm font-medium text-[#0B1628] mb-0.5">
              [Author Name]
            </div>
            <div className="text-xs font-light text-gray-500">
              1st Blessed Care Team
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-[#0B1628] rounded p-6">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-navy-300 mb-4">
              Thinking about a tour?
            </div>
            <h3 className="text-base font-normal text-white tracking-[-0.01em] mb-2.5">
              Come see 1st Blessed for yourself.
            </h3>
            <p className="text-[13px] font-light text-navy-200 leading-[1.7] mb-5">
              No pressure, no commitment. Just an open door and honest answers.
            </p>
            <a
              href="tel:2063030549"
              className="block text-center bg-[#C9992E] hover:bg-[#B8882A] text-white text-[13px] font-medium px-5 py-3 rounded transition-colors"
            >
              Call 206-303-0549
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
