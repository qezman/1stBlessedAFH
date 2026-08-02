import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

const HIGHLIGHTS = [
  "Fully licensed & regulated by Washington State DSHS",
  "Caregivers certified in CPR, First Aid, and Dementia Care",
  "Intimate 6-bed capacity ensures high staff-to-resident ratio",
  "Customized care plans reviewed and updated regularly",
  "Open-door family visiting policy in a cozy neighborhood setting",
  "Safe, accessible single-story layout with no stairs",
];

export function AboutSnapshot() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://framerusercontent.com/assets/xkjm8YFt86QMxl6KrvoqMGtrSI0.jpg"
                alt="Caregivers and family environment at 1st Blessed"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/10" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy-800 text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-navy-600">
              <span className="block text-3xl font-bold text-gold-500 mb-1">
                Dignity & Respect
              </span>
              <p className="text-xs text-gray-300 leading-normal">
                Every resident is cherished as a family member with personalized
                attention every hour of the day.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="WHO WE ARE"
              title="A Loving Home Built Around Dignity, Safety & Family"
              subtitle="1st Blessed Adult Family Home in Everett was created to offer an alternative to massive, impersonal institutional care facilities."
              align="left"
            />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We believe that as our parents and grandparents age, they deserve
              to live in a clean, tranquil, single-family neighborhood home
              where they are known by name, voice, and personal preference.
            </p>
            <ul className="space-y-3 pt-2">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start space-x-3 text-sm text-navy-950 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button to="/about" variant="primary" size="md">
                Meet Our Caregivers & Values{" "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
