import React from "react";

export const GalleryCTA: React.FC = () => {
  return (
    <section className="px-6 md:px-12 pb-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto bg-[#0A1220] rounded-2xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl">
        {/* Left info */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center space-x-2 text-[11px] font-semibold tracking-widest text-[#DDB04A] uppercase">
            <span className="w-5 h-[1px] bg-[#DDB04A] inline-block" />
            <span>SEE IT IN PERSON</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-light text-white tracking-[-0.025em] leading-[1.25]">
            Photos don't do it justice.
            <br />
            Come visit.
          </h2>

          <p className="text-sm sm:text-base font-light text-gray-300 leading-relaxed max-w-xl">
            Schedule a tour and walk through every room yourself. No pressure,
            open-door, 7 days a week.
          </p>
        </div>

        {/* Right buttons - Matching rounded-lg style */}
        <div className="lg:col-span-4 flex flex-col space-y-3.5 shrink-0 min-w-[260px] w-full sm:w-auto">
          <a
            href="tel:+12063030549"
            className="inline-flex items-center justify-center gap-2 bg-[#E5B248] text-white border border-[#E5B248] px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 text-center hover:bg-transparent hover:text-[#E5B248]"
          >
            Call 206-303-0549
          </a>
          <a
            href="mailto:1stblessedafh@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/80 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 text-center hover:bg-white hover:text-[#0A1220]"
          >
            Email us
          </a>
          <span className="text-[12px] text-gray-300 text-center mt-1 tracking-wide">
            6007 Rockefeller Ave, Everett WA
          </span>
        </div>
      </div>
    </section>
  );
};
