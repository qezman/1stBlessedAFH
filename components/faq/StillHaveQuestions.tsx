import { ArrowRight } from "lucide-react";

const CONTACTS = [
  {
    icon: "📞",
    iconBg: "#EEF5FC",
    title: "Call us",
    text: "Speak directly with a caregiver. We're available 7 days a week and happy to answer anything.",
    link: { href: "tel:2063030549", label: "206-303-0549" },
  },
  {
    icon: "✉️",
    iconBg: "#F7EDD4",
    title: "Email us",
    text: "Prefer to write? Send us your questions and we'll respond within one business day.",
    link: {
      href: "mailto:1stblessedafh@gmail.com",
      label: "1stblessedafh@gmail.com",
    },
  },
  {
    icon: "🏠",
    iconBg: "#E8F0EA",
    title: "Visit the home",
    text: "Nothing answers questions better than walking through the door. Schedule an in-person tour.",
    link: { href: "#visit", label: "Schedule a tour" },
  },
];

export function StillHaveQuestions() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
              — Get in touch
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#0B1628] tracking-[-0.02em] leading-[1.3]">
              Still have questions?
            </h2>
          </div>
          <p className="text-sm font-light text-gray-500 max-w-[360px] sm:text-right leading-[1.7]">
            We'd rather over-answer than leave a family uncertain. Reach out —
            there are no bad questions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTACTS.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded p-8 sm:p-10 flex flex-col gap-3.5"
            >
              <div
                className="w-11 h-11 rounded flex items-center justify-center text-xl mb-1.5"
                style={{ backgroundColor: c.iconBg }}
              >
                {c.icon}
              </div>
              <h3 className="text-base font-medium text-[#0B1628] tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="text-sm font-light text-gray-500 leading-[1.75] flex-grow">
                {c.text}
              </p>
              <a
                href={c.link.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1A3358] hover:text-[#C9992E] transition-colors mt-2 group"
              >
                {c.link.label}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
