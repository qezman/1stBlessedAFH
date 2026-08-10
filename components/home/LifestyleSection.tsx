import Image from "next/image";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const LIFESTYLE_POINTS = [
  "Peaceful neighborhood setting in Everett",
  "Spacious common areas for socializing",
  "Fully landscaped outdoor spaces",
  "Family visits welcomed anytime",
];

export function LifestyleSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:gap-20 items-center">
<Reveal className="relative">
          <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden border border-gray-100 shadow-lg">
            <Image
              src="https://framerusercontent.com/assets/xkjm8YFt86QMxl6KrvoqMGtrSI0.jpg"
              alt="Home interior at 1st Blessed AFH"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 aspect-square bg-gold-50 border-4 border-white rounded-none p-4 flex flex-col justify-center shadow-lg">
            <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-600 mb-1">
              Cozy & Safe
            </span>
            <span className="text-xs font-light text-navy-950 leading-relaxed">
              Designed for daily dignity and warmth.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy-500 mb-5">
            <span className="w-5 h-[1px] bg-navy-500" />
            Life at 1st Blessed
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-light text-navy-950 tracking-[-0.02em] leading-[1.3] mb-6">
            A home designed for comfort, not efficiency.
          </h2>

          <p className="text-base font-light text-gray-600 leading-[1.8] mb-4">
            We believe senior care should feel like living, not waiting. Our
            Everett home is designed around the rhythms of daily life — real
            meals, real rest, real connection.
          </p>

          <p className="text-base font-light text-gray-600 leading-[1.8]">
            Surrounded by natural beauty with easy access for family visits, our
            six-person model means every resident is known by name, not room
            number.
          </p>

          <ul className="mt-8 mb-10 space-y-3.5">
            {LIFESTYLE_POINTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-gray-800"
              >
                <div className="w-5 h-5 rounded-full bg-navy-50 flex items-center justify-center text-xs text-navy-700 flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button to="/gallery" variant="outline" size="lg">
            Take a virtual tour →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
