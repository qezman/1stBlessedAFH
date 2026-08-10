"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { CATEGORIES, FAQS } from "./faqData";
import { cn } from "../../lib/utils"; // using tailwind-merge util

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: any;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 first:border-t">
      <button
        className="w-full bg-transparent border-none py-6 flex items-center justify-between gap-8 cursor-pointer text-left transition-colors group hover:bg-gray-50/50"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-base font-normal leading-relaxed tracking-tight transition-colors group-hover:text-[#1A3358]",
            isOpen ? "text-[#1A3358] font-medium" : "text-[#0B1628]",
          )}
        >
          {faq.question}
        </span>
        <div
          className={cn(
            "w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200",
            isOpen
              ? "bg-[#EEF5FC] border-[#A8C3E0] text-[#1A3358] rotate-45"
              : "border-gray-200 text-gray-400 bg-white group-hover:border-gray-300 group-hover:text-gray-500",
          )}
        >
          <Plus className="w-4 h-4" strokeWidth={1.5} />
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[600px] pb-7 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p
          className="pr-12 text-[15px] font-light text-gray-600 leading-[1.85] [&>a]:text-[#1A3358] [&>a]:underline [&>a]:underline-offset-2 [&>strong]:font-medium [&>strong]:text-[#0B1628]"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
}

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenId(null);
  };

  const getCount = (catId: string) =>
    catId === "all"
      ? FAQS.length
      : FAQS.filter((f) => f.category === catId).length;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 lg:gap-20 items-start">
        {/* ── SIDEBAR ── */}
        <div className="lg:sticky lg:top-[100px]">
          <div className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-4">
            Browse by topic
          </div>
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-r text-sm transition-colors text-left",
                    active
                      ? "bg-[#EEF5FC] border-l-2 border-[#1A3358] font-medium text-[#0B1628]"
                      : "bg-transparent border-l-2 border-transparent font-light text-gray-500 hover:bg-gray-50",
                  )}
                >
                  {cat.label}
                  <span
                    className={cn(
                      "text-[11px] px-2 py-0.5 rounded-full",
                      active
                        ? "text-[#25508A] bg-[rgba(25,80,138,0.08)] font-normal"
                        : "text-gray-400 bg-transparent font-light",
                    )}
                  >
                    {getCount(cat.id)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="h-px bg-gray-100 my-6" />

          <div className="bg-gray-50 p-5 rounded border border-gray-100">
            <div className="text-xs font-medium text-[#0B1628] mb-1.5">
              Can't find your answer?
            </div>
            <div className="text-xs font-light text-gray-500 leading-relaxed mb-4">
              Call or email us directly — we're happy to answer any question, no
              matter how small.
            </div>
            <a
              href="tel:2063030549"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1A3358] hover:text-[#C9992E] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 2C3 2 2 2 2 3C2 4 2 7 5 10C8 13 11 13 12 13C13 13 13 12 13 12L11 10L9.5 11C9.5 11 7.5 10 6.3 8.7C5.1 7.4 4.5 5.5 4.5 5.5L6 4L3 2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              206-303-0549
            </a>
          </div>
        </div>

        {/* ── ACCORDION ── */}
        <div>
          <div className="text-[13px] font-light text-gray-400 mb-8 tracking-wide">
            Showing {filtered.length} question
            {filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" &&
              ` in ${CATEGORIES.find((c) => c.id === activeCategory)?.label}`}
          </div>

          <div className="flex flex-col">
            {filtered.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
