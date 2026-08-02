const TRUST_ITEMS = [
  {
    val: "6",
    unit: "",
    label: "Maximum residents for truly personalized care",
  },
  { val: "24", unit: "/7", label: "On-site caregiver coverage, day and night" },
  {
    val: "5",
    unit: "★",
    label: "Family satisfaction rating from our residents",
  },
  { val: "WA", unit: "", label: "State-licensed adult family home in Everett" },
];

export function TrustBar() {
  return (
    <section className="bg-navy-950 p-0 border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-white/10">
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={i}
            className="py-10 px-8 border-r border-white/10 flex flex-col gap-2"
          >
            <div className="font-sans text-4xl font-light text-white tracking-[-0.03em]">
              {item.val}
              <span className="text-2xl font-light text-gold-500">
                {item.unit}
              </span>
            </div>
            <div className="text-xs font-normal text-navy-200 leading-relaxed max-w-[180px]">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
