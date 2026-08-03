const STATS = [
  { val: "12", unit: "", label: "Maximum residents. Always." },
  { val: "24", unit: "/7", label: "Hours of on-site care" },
  { val: "100", unit: "%", label: "Licensed & state inspected" },
  { val: "5", unit: "★", label: "Family satisfaction rating" },
];

export function ByTheNumbers() {
  return (
    <section className="bg-[#0B1628] py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-10 lg:gap-32 items-center">
        <div className="text-[15px] font-semibold tracking-wider uppercase text-white leading-relaxed">
          1ST
          <br />
          BLESSED BY
          <br />
          THE
          <br />
          NUMBERS
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATS.map((st, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="font-sans text-[42px] font-light text-white tracking-[-0.04em] leading-none flex items-baseline">
                {st.val}
                {st.unit && (
                  <span className="text-[28px] text-[#C9992E] ml-1">
                    {st.unit}
                  </span>
                )}
              </div>
              <div className="text-xs font-normal text-white/90 leading-relaxed max-w-[140px]">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
