import {
  Home,
  BriefcaseMedical,
  Utensils,
  HeartHandshake,
  Syringe,
  Activity,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";

const SERVICES = [
  {
    icon: Home,
    title: "Private Rooms",
    text: "Comfortable, furnished private rooms in a real home setting — not a ward or shared bay.",
  },
  {
    icon: BriefcaseMedical,
    title: "Specialized Care",
    text: "Memory care, mental health support, and full medication and insulin management.",
  },
  {
    icon: Utensils,
    title: "Home-Cooked Meals",
    text: "Three nutritious meals daily prepared in-home. Dietary needs always accommodated.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Care",
    text: "Bathing, grooming, dressing, and hygiene assistance provided with dignity and respect.",
  },
  {
    icon: Syringe,
    title: "Health Monitoring",
    text: "Regular vital checks, coordination with physicians, and family health updates.",
  },
  {
    icon: Activity,
    title: "Activities & Engagement",
    text: "Daily social activities, light exercises, and enrichment programs to keep minds active.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <Reveal className="mb-14 max-w-[500px]">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#1A3358] mb-5">
            — OUR SERVICES
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-light text-[#0B1628] tracking-[-0.025em] leading-[1.3] mb-5">
            Everything your loved one
            <br />
            needs, under one roof.
          </h2>
          <p className="text-sm sm:text-base font-light text-gray-600 leading-[1.7]">
            Comprehensive care without the complexity — all services are
            included.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal
                key={i}
                delay={(i % 3) * 0.06}
                className="bg-white border border-[#E9ECEF] rounded-2xl p-8 flex flex-col items-start shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-[#EEF5FC] rounded-xl flex items-center justify-center mb-6 text-[#1A3358]">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0B1628] tracking-[-0.015em] mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm font-light text-gray-600 leading-[1.7]">
                  {svc.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
