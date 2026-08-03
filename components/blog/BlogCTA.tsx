import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCTAProps {
  heading?: string;
  sub?: string;
  label?: string;
}

export function BlogCTA({
  heading = "Ready to talk about care\nfor your loved one?",
  sub = "Our blog covers the questions — we cover the care. Reach out any time.",
  label = "Have questions?",
}: BlogCTAProps) {
  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#0A1220] rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#DDB04A] mb-5">
              — {label}
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-light text-white tracking-[-0.025em] leading-[1.25] mb-6 whitespace-pre-line">
              {heading}
            </h2>
            <p className="text-sm sm:text-base font-light text-gray-300 leading-[1.7] max-w-[500px]">
              {sub}
            </p>
          </div>

          <div className="flex flex-col gap-3.5 min-w-[260px] w-full sm:w-auto">
            <a
              href="tel:2063030549"
              className="inline-flex items-center justify-center bg-[#E5B248] text-white border border-[#E5B248] px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 text-center hover:bg-transparent hover:text-[#E5B248]"
            >
              206-303-0549
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border border-white/80 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 text-center hover:bg-white hover:text-[#0A1220] group"
            >
              Contact us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <span className="text-[12px] text-gray-300 text-center mt-1 tracking-wide">
              Everett, WA · 7 days a week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
