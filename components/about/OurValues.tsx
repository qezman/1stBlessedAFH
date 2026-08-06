import { Handshake, Home, RefreshCw, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const VALUES = [
  {
    icon: Handshake,
    title: "Dignity in every interaction",
    text: "We treat every resident as we would our own family — with patience, respect, and genuine warmth in every moment of every day.",
  },
  {
    icon: Home,
    title: "A true home environment",
    text: "We intentionally cap our home at six residents. Not because we have to — because real care requires real presence, and presence requires limits.",
  },
  {
    icon: RefreshCw,
    title: "Consistent, familiar faces",
    text: "Residents see the same caregivers daily. Consistency isn't just comfortable — it's a cornerstone of quality dementia and elder care.",
  },
  {
    icon: Users,
    title: "Family as partners",
    text: "Families are not visitors — they are part of the care team. Open communication, open door visits, and regular updates are our standard.",
  },
];

export function OurValues() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
              — Our Values
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#0B1628] tracking-[-0.02em] leading-[1.3]">
              The principles behind everything we do.
            </h2>
          </div>
          <p className="text-base font-light text-gray-600 leading-[1.75]">
            These aren't mission statement words. They're the decisions we make
            every morning when our residents wake up and every evening before
            they go to sleep.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={i} delay={(i % 2) * 0.08} className="bg-white p-10 sm:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#EEF5FC] rounded-none flex items-center justify-center text-[#1A3358]">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#C9992E]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-[#0B1628] tracking-[-0.01em] mb-3.5">
                  {v.title}
                </h3>
                <p className="text-[15px] font-light text-gray-500 leading-[1.8]">
                  {v.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
