const CHECKLIST = [
  "Washington State DSHS Adult Family Home License",
  "Annual state inspections — results available on request",
  "All caregivers background checked & certified",
  "First aid and CPR certified staff on-site at all times",
  "Compliance with all WA AFH care plan requirements",
  "Medication management protocols per state standards",
];

const BADGES = [
  { label: "License Type", val: "Adult Family Home" },
  { label: "State", val: "Washington (WA)" },
  { label: "Issuing Body", val: "WA DSHS" },
  { label: "Capacity", val: "Up to 6 Residents" },
  { label: "Location", val: "Everett, WA 98203" },
  { label: "Status", val: "✓ Active & In Good Standing" },
];

export function LicenseSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
            — Licensing & Compliance
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#0B1628] tracking-[-0.02em] leading-[1.3] mb-6">
            Fully licensed, regularly inspected, always accountable.
          </h2>
          <p className="text-base font-light text-gray-600 leading-[1.85] mb-10">
            We meet and exceed all State of Washington adult family home
            requirements. Families can verify our license status anytime through
            the Washington DSHS public directory.
          </p>

          <div className="flex flex-col gap-4">
            {CHECKLIST.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3.5 px-5 py-4 bg-gray-50 rounded-none border-l-[3px] border-[#1A3358]"
              >
                <div className="w-5 h-5 bg-[#EEF5FC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-semibold text-[#1A3358]">
                  ✓
                </div>
                <span className="text-sm font-normal text-gray-800 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0B1628] rounded-lg p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9992E]" />

          <div className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#C9992E] mb-6">
            License Information
          </div>

          <p className="text-[15px] font-light text-navy-200 leading-[1.8] mb-8">
            Our license is issued and maintained by the Washington State
            Department of Social and Health Services. We are in good standing
            and welcome any questions about our compliance record.
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="bg-white/5 border border-white/10 rounded-none p-4 flex flex-col gap-1"
              >
                <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-navy-300">
                  {b.label}
                </span>
                <span className="text-[13px] font-normal text-white">
                  {b.val}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 pt-6 border-t border-white/10 text-xs font-light text-gray-500 leading-relaxed">
            License verification available at
            <br />
            <span className="text-navy-300">fortress.wa.gov/dshs/adsaapps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
