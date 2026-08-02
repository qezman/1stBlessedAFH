import { Button } from "../ui/Button";

export function HomeCTA() {
  return (
    <section className="py-0 bg-gray-50" id="visit">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="bg-navy-950 rounded-none p-10 sm:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center my-20">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-gold-500 mb-4">
              <span className="w-5 h-[1px] bg-gold-500" />
              Schedule a visit
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-light text-white tracking-[-0.025em] leading-[1.1] mb-4">
              Come see the home
              <br />
              for yourself.
            </h2>
            <p className="text-base font-light text-navy-200 leading-[1.7] max-w-[540px]">
              Tours are available 7 days a week. No pressure, no commitment —
              just a chance to see if 1st Blessed is the right fit for your
              family.
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-[220px]">
            <a
              href="tel:2063030549"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-7 py-3.5 rounded-none font-medium text-sm transition-colors text-center"
            >
              Call 206-303-0549
            </a>
            <a
              href="mailto:1stblessedafh@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-navy-200 border border-white/20 px-7 py-3.5 rounded-none font-medium text-sm transition-colors text-center"
            >
              Send us an email
            </a>
            <span className="text-[12px] text-navy-300 text-center mt-1">
              6007 Rockefeller Ave, Everett WA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
