const SERVICES = [
  {
    icon: "🏠",
    title: "Private Rooms",
    text: "Comfortable, furnished private rooms in a real home setting — not a ward or shared bay.",
  },
  {
    icon: "💊",
    title: "Medication Management",
    text: "Structured medication schedules managed by trained caregivers, every day.",
  },
  {
    icon: "🍽️",
    title: "Home-Cooked Meals",
    text: "Three nutritious meals daily prepared in-home. Dietary needs always accommodated.",
  },
  {
    icon: "🛁",
    title: "Personal Care",
    text: "Bathing, grooming, dressing, and hygiene assistance provided with dignity and respect.",
  },
  {
    icon: "🩺",
    title: "Health Monitoring",
    text: "Regular vital checks, coordination with physicians, and family health updates.",
  },
  {
    icon: "🎯",
    title: "Activities & Engagement",
    text: "Daily social activities, light exercises, and enrichment programs to keep minds active.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="mb-14 max-w-[520px]">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy-500 mb-5">
            <span className="w-5 h-[1px] bg-navy-500" />
            Our Services
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-light text-navy-950 tracking-[-0.02em] leading-tight mb-4">
            Everything your loved one needs, under one roof.
          </h2>
          <p className="text-base font-light text-gray-600 leading-relaxed">
            Comprehensive care without the complexity — all services are
            included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 border border-gray-200 rounded-none overflow-hidden">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="bg-white p-8 sm:p-9 flex flex-col gap-4 hover:bg-navy-50/30 transition-colors"
            >
              <div className="w-11 h-11 bg-navy-50 rounded-none flex items-center justify-center text-xl">
                {svc.icon}
              </div>
              <h3 className="text-[17px] font-medium text-navy-950 tracking-[-0.01em]">
                {svc.title}
              </h3>
              <p className="text-sm font-light text-gray-600 leading-relaxed">
                {svc.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
