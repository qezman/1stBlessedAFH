import React from "react";

export const GalleryCTA: React.FC = () => {
  return (
    <section className="px-6 md:px-12 pb-24 bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto bg-[#0B1628] rounded-none p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left info */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] font-semibold tracking-widest text-uppercase text-[#C9992E] uppercase">
            <span className="w-5 h-[1px] bg-[#C9992E] inline-block" />
            <span>See it in person</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-light text-white tracking-tight leading-snug">
            Photos don't do it justice.
            <br />
            Come visit.
          </h2>

          <p className="text-sm sm:text-base font-light text-[#A8C3E0] leading-relaxed max-w-xl">
            Schedule a tour and walk through every room yourself. No pressure,
            open-door, 7 days a week.
          </p>
        </div>

        {/* Right buttons - Sharp Edges */}
        <div className="lg:col-span-4 flex flex-col space-y-3 shrink-0">
          <a
            href="tel:+12063030549"
            className="inline-flex items-center justify-center gap-2 bg-[#C9992E] hover:bg-[#b28522] text-white px-7 py-3.5 rounded-none font-sans text-sm font-medium transition-colors text-center shadow-sm"
          >
            Call 206-303-0549
          </a>
          <a
            href="mailto:1stblessedafh@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-[#A8C3E0] hover:text-white border border-white/20 px-7 py-3 rounded-none font-sans text-sm font-normal transition-colors text-center"
          >
            Email us
          </a>
          <span className="text-xs text-[#6B93C4] text-center pt-1">
            6007 Rockefeller Ave, Everett WA
          </span>
        </div>
      </div>
    </section>
  );
};
