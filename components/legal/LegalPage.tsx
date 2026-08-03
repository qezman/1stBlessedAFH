import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export interface LegalSection {
  heading: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPage({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#0B1628] pt-24 pb-16 px-6 sm:px-12 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[rgba(25,80,138,0.12)] -top-[120px] -right-[80px]" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-xs font-normal text-navy-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-xs text-navy-600">›</span>
            <span className="text-xs font-normal text-navy-200">{title}</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-[56px] font-light text-white tracking-[-0.025em] leading-[1.2] mb-4">
            {title}
          </h1>
          <p className="text-base font-light text-navy-200 leading-relaxed mb-5 max-w-[600px]">
            {subtitle}
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded px-3.5 py-1.5 text-xs font-light text-navy-300">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20 items-start">
          {/* Sticky TOC sidebar */}
          <div className="lg:sticky lg:top-[100px]">
            <div className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-3">
              Contents
            </div>
            <div className="flex flex-col gap-0.5">
              {sections.map((sec, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="text-xs font-light text-gray-500 hover:text-[#0B1628] hover:border-[#1A3358] border-l-2 border-gray-200 pl-3 py-2 leading-snug transition-colors block"
                >
                  {sec.heading}
                </a>
              ))}
            </div>

            <div className="mt-7 p-4 bg-gray-50 border border-gray-100 rounded">
              <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-2">
                Questions?
              </div>
              <div className="text-xs font-light text-gray-500 leading-relaxed mb-2.5">
                If you have questions about this policy, please contact us
                directly.
              </div>
              <a
                href="mailto:1stblessedafh@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A3358] hover:text-[#C9992E] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Email us →
              </a>
            </div>
          </div>

          {/* Legal content */}
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div
                key={i}
                id={`section-${i}`}
                className="first:pt-0 pt-10 border-t border-gray-100 first:border-t-0"
              >
                <h2 className="font-sans text-lg font-medium text-[#0B1628] tracking-[-0.01em] mb-3.5">
                  {sec.heading}
                </h2>
                <div className="text-[15px] font-light text-gray-600 leading-[1.85] space-y-4 [&_strong]:font-medium [&_strong]:text-[#0B1628] [&_a]:text-[#1A3358] [&_a]:underline [&_a]:underline-offset-2 [&_ul]:space-y-2 [&_ul]:my-3 [&_li]:pl-5 [&_li]:relative [&_li::before]:content-['—'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-[#C9992E]">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
