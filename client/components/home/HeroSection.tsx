import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const META_ITEMS = [
  { val: "6", label: "Residents max" },
  { val: "24/7", label: "On-site care" },
  { val: "100%", label: "Family satisfaction" },
];

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-72px)] bg-white grid grid-cols-1 lg:grid-cols-2 max-w-full pt-20 lg:pt-0">
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-20 max-w-[660px] mx-auto lg:mx-0">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy-500 mb-7">
          <span className="w-5 h-[1px] bg-navy-500" />
          Everett, Washington · Licensed Adult Family Home
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl lg:text-[60px] font-light leading-[1.2] tracking-[-0.03em] text-navy-950 mb-6">
          Senior care that
          <br />
          feels like <span className="font-semibold">home.</span>
        </h1>

        <p className="text-base sm:text-[17px] font-light leading-[1.75] text-gray-600 mb-10 max-w-[440px]">
          A private, six-resident home in Everett providing 24-hour personalized
          care. Not a facility — a family. Where dignity, comfort, and
          compassion come first.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button to="/contact" variant="gold" size="lg">
            Schedule a Tour →
          </Button>
          <Button to="/gallery" variant="outline" size="lg">
            See Our Home
          </Button>
        </div>

        <div className="w-10 h-[1px] bg-gray-200 mb-6" />

        <div className="flex gap-8">
          {META_ITEMS.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-navy-950 tracking-[-0.02em]">
                {m.val}
              </span>
              <span className="text-xs font-normal text-gray-600 tracking-[0.02em]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy-50 relative overflow-hidden flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-navy-500/5 -top-24 -right-24" />
        <div className="absolute w-[240px] h-[240px] rounded-full bg-gold-500/5 bottom-10 left-5" />

        <div className="relative z-10 flex items-center justify-center w-full max-w-[460px] aspect-[4/5] rounded-none overflow-hidden border border-navy-100 shadow-xl group">
          <img
            src="https://framerusercontent.com/assets/NAzYO2o1MS3dK9Xa3ksU5oCAREU.jpg"
            alt="1st Blessed Adult Family Home exterior"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-4 left-4 bg-white rounded-none p-4 shadow-lg border border-gray-100 min-w-[180px]">
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-500 mb-1">
              Google Rating
            </div>
            <div className="text-xl font-semibold text-navy-950 tracking-[-0.02em]">
              ★ 5.0{" "}
              <span className="text-xs font-light text-gray-500">/ 5.0</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-success text-white rounded-none px-4 py-2 flex items-center gap-2 text-xs font-medium shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#7DFFC4] animate-pulse" />
            Now accepting
          </div>
        </div>
      </div>
    </section>
  );
}
