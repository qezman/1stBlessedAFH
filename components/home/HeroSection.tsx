import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const META_ITEMS = [
  { val: "12", label: "Residents Max" },
  { val: "24/7", label: "On-site Care" },
  { val: "100%", label: "Family Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="bg-[#FAFAFC] pt-[72px] relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:max-w-[1136px] lg:px-0">
        <div className="grid grid-cols-1 items-center gap-10 py-16 md:py-24 lg:py-32 lg:grid-cols-[1fr_550px] lg:items-start lg:gap-[42px] lg:py-[66px]">
          {/* Left column */}
          <Reveal className="flex flex-col">
            {/* Label */}
            <div className="mb-7 flex items-center gap-2.5 text-[11px] font-medium tracking-[0.08em] uppercase text-[#0B1628]">
              <span className="w-5 h-px bg-[#0B1628]" />
              Everett, Washington · Licensed Adult Family Home
            </div>

            {/* Heading */}
            <h1 className="mb-7 font-serif text-[42px] font-light leading-[1.2] tracking-[-0.03em] text-[#0B1628] sm:text-[52px] lg:text-[54px]">
              Senior care that
              <br />
              feels like home.
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-[460px] text-[16px] font-light leading-[1.65] text-[#495057]">
              A private, twelve-resident home in Everett providing 24-hour
              personalized care. Not a facility — a family. Where dignity,
              comfort, and compassion come first.
            </p>

            {/* Buttons */}
            <div className="mb-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#2B1E78] px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#221766]"
              >
                <span>Schedule a tour</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center text-[15px] font-medium text-[#0B1628] border border-[#DEE2E6] hover:border-[#2B1E78] hover:text-[#2B1E78] px-6 py-3.5 rounded-lg transition-colors"
              >
                See our Home
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-8">
              {META_ITEMS.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[36px] sm:text-[42px] font-light leading-none text-[#0B1628] tracking-[-0.03em]">
                    {m.val}
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-[#6C757D] tracking-[0.01em]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right column image */}
          <Reveal
            className="relative aspect-[4/5] overflow-hidden rounded-md lg:h-[480px] lg:aspect-auto"
            delay={0.15}
          >
            <Image
              src="/hero-img.jpg"
              alt="Caregivers and a resident at 1st Blessed Adult Family Home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
