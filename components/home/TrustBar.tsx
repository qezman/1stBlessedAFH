const TRUST_ITEMS = [
  {
    val: "6",
    unit: "",
    label: "Maximum residents for truly personalized care",
  },
  {
    val: "24",
    unit: "/7",
    label: "On-site caregiver coverage, day and night",
  },
  {
    val: "5",
    unit: "★",
    label: "Family satisfaction rating from our residents",
  },
  {
    val: "WA",
    unit: "",
    label: "State-licensed adult family home in Everett",
  },
];

export function TrustBar() {
  return (
    <section className="bg-[#0A1220] py-14 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-sans text-5xl sm:text-[56px] font-light text-white tracking-tight leading-none mb-4 flex items-baseline">
                <span>{item.val}</span>
                {item.unit && (
                  <span className="text-3xl sm:text-4xl font-light text-[#E5B248] ml-0.5">
                    {item.unit}
                  </span>
                )}
              </div>
              <div className="text-[13px] font-normal text-gray-300 leading-relaxed max-w-[200px]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
