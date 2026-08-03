import Link from "next/link";
import { ArrowRight } from "lucide-react";

const META_ITEMS = [
  { val: "12", label: "Residents" },
  { val: "24/7", label: "On-site care" },
  { val: "100%", label: "Family satisfaction" },
];

export function HeroSection() {
  return (
    <section className="bg-[#FAFAFC] pt-[72px]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-72px)] py-16 lg:py-20">
          {/* Left column */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.08em] uppercase text-[#0B1628] mb-10">
              <span className="w-5 h-px bg-[#0B1628]" />
              Everett, Washington · Licensed Adult Family Home
            </div>

            {/* Heading */}
            <h1 className="font-sans text-[42px] sm:text-[52px] lg:text-[64px] font-light leading-[1.15] tracking-[-0.03em] text-[#0B1628] mb-8">
              Senior care that
              <br />
              feels like home.
            </h1>

            {/* Description */}
            <p className="text-[16px] font-light leading-[1.8] text-[#495057] mb-12 max-w-[460px]">
              A private, twelve-resident home in Everett providing 24-hour
              personalized care. Not a facility — a family. Where dignity,
              comfort, and compassion come first.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#2B1E78] hover:bg-[#221766] text-white text-[15px] font-medium pl-6 pr-5 py-3.5 rounded-lg transition-colors"
              >
                <span>Schedule a tour</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center text-[15px] font-medium text-[#0B1628] border border-[#DEE2E6] hover:border-[#2B1E78] hover:text-[#2B1E78] px-6 py-3.5 rounded-lg transition-colors"
              >
                See our Home
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 sm:gap-16">
              {META_ITEMS.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[36px] sm:text-[42px] font-light leading-none text-[#0B1628] tracking-[-0.03em]">
                    {m.val}
                  </span>
                  <span className="text-sm font-normal text-[#6C757D] tracking-[0.01em]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/hero-img.jpg"
              alt="Caregivers and a resident at 1st Blessed Adult Family Home"
              className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto lg:max-h-[680px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
