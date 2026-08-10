import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const DIFFERENTIATORS = [
  {
    title: "Small by design",
    text: "Six residents maximum — always. This isn't about capacity, it's about what genuine care actually requires.",
  },
  {
    title: "Real home, real neighborhood",
    text: "A residential house in a real Everett neighborhood. Not a facility, not a wing — a home address.",
  },
  {
    title: "Consistent caregivers",
    text: "Your loved one is seen by the same faces every day. Continuity of care reduces anxiety and builds trust.",
  },
  {
    title: "Family-first communication",
    text: "Regular updates, open-door visits, and direct caregiver access. You are never kept in the dark.",
  },
  {
    title: "State-licensed & inspected",
    text: "Fully licensed by Washington State DSHS. We meet and exceed all AFH care standards.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy-500 mb-5">
            <span className="w-5 h-[1px] bg-navy-500" />
            Why 1st Blessed
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-light text-navy-950 tracking-[-0.02em] leading-[1.3] mb-6">
            What makes us different from every other option.
          </h2>
          <p className="text-base font-light text-gray-600 leading-[1.8] mb-8">
            Most senior care options offer scale. We offer the opposite — and
            that's exactly the point.
          </p>
          <Button to="/contact" variant="gold" size="lg">
            Talk to us today →
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={i}
              className="bg-white border border-[#E9ECEF] rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 grid grid-cols-[auto_1fr] gap-8 items-start"
            >
              <span className="font-sans text-xs font-semibold text-navy-300 tracking-[0.08em] pt-0.5">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-base font-medium text-navy-950 mb-2">
                  {d.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {d.text}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
