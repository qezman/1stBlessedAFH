import Link from "next/link";
import { CATEGORIES, FAQS } from "./faqData";

export function FAQsHero() {
  const categoryCounts = CATEGORIES.slice(1).map((cat) => ({
    label: cat.label,
    count: FAQS.filter((f) => f.category === cat.id).length,
  }));

  return (
    <section className="bg-[#0B1628] pt-28 sm:pt-32 pb-24 sm:pb-32 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[rgba(25,80,138,0.13)] -top-[150px] -right-[100px]" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[rgba(201,153,46,0.05)] bottom-[20px] left-[350px]" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-10">
          <Link
            href="/"
            className="text-xs font-normal text-navy-300 hover:text-white transition-colors tracking-wide"
          >
            Home
          </Link>
          <span className="text-xs text-navy-600">›</span>
          <span className="text-xs font-normal text-navy-200 tracking-wide">
            FAQs
          </span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[68px] font-light text-white tracking-[-0.03em] leading-[1.2] max-w-[620px] mb-6">
          Questions families
          <br />
          <span className="text-[#C9992E]">ask us most.</span>
        </h1>

        <p className="text-[17px] font-light text-navy-200 leading-[1.75] max-w-[480px] mb-9">
          Everything you need to know about care, admissions, the home, and what
          life at 1st Blessed looks like — before you even visit.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <div className="bg-white/5 border border-white/10 rounded-md px-3.5 py-2 text-xs font-light text-navy-200">
            {FAQS.length} questions answered
          </div>
          {categoryCounts.map((c) => (
            <div
              key={c.label}
              className="bg-white/5 border border-white/10 rounded-md px-3.5 py-2 text-xs font-light text-navy-200"
            >
              {c.count} on {c.label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-[0] z-10">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          <path
            d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 48 1440 48H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
