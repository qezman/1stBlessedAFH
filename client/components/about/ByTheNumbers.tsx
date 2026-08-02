const STATS = [
  { val: "6", unit: "", label: "Maximum residents. Always." },
  { val: "24", unit: "/7", label: "Hours of on-site care" },
  { val: "100", unit: "%", label: "Licensed & state inspected" },
  { val: "5", unit: "★", label: "Family satisfaction rating" },
];

export function ByTheNumbers() {
  return (
    <section className="bg-[#0B1628] py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-center">
        <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-navy-300 leading-relaxed">
          1st Blessed
          <br />
          by the
          <br />
          numbers
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-white/10">
          {STATS.map((st, i) => (
            <div
              key={i}
              className="px-6 sm:px-10 py-4 border-r border-white/10"
            >
              <div className="font-sans text-5xl font-light text-white tracking-[-0.04em] leading-none mb-2.5">
                {st.val}
                {st.unit && (
                  <span className="text-3xl text-[#C9992E]">{st.unit}</span>
                )}
              </div>
              <div className="text-[13px] font-light text-navy-300 leading-relaxed">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
