import Image from "next/image";
import { Reveal } from "../ui/Reveal";

export function OurStory() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
            — Our Story
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-light text-[#0B1628] tracking-[-0.02em] leading-[1.25] mb-7">
            We started small — and that was always the plan.
          </h2>

          <p className="text-base font-light text-gray-600 leading-[1.85] mb-5">
            1st Blessed Adult Family Home was born from a personal experience
            with senior care — seeing firsthand how large facilities, despite
            their best intentions, can leave residents feeling anonymous and
            overlooked. We knew there had to be a better way.
          </p>

          <blockquote className="border-l-[3px] border-[#C9992E] pl-6 my-9">
            <p className="font-sans text-xl font-light text-[#0B1628] leading-[1.5] tracking-[-0.01em] italic">
              "We wanted to create the kind of home we'd want for our own
              parents — warm, attentive, and genuinely caring."
            </p>
          </blockquote>

          <p className="text-base font-light text-gray-600 leading-[1.85] mb-5">
            Located in a quiet Everett neighborhood, our home is licensed by the
            State of Washington to care for up to six residents at a time. That
            limit isn't a constraint — it's a commitment. Six residents means
            every person is known, every preference is remembered, and every day
            is intentional.
          </p>

          <p className="text-base font-light text-gray-600 leading-[1.85]">
            Today, we serve seniors and their families across Marysville,
            Everett, Arlington, Lake Stevens, and the surrounding communities —
            offering a level of care that feels personal because it is.
          </p>
        </Reveal>

        <Reveal className="relative" delay={0.1}>
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gold-50 -z-10" />

          <div className="relative w-full aspect-[3/4] rounded-none overflow-hidden border border-gray-100 shadow-lg">
            <Image
              src="/Founder.jpg"
              alt="1st Blessed Adult Family Home founder"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border border-gray-200 rounded-none p-5 shadow-lg flex items-center gap-4 min-w-[240px]">
            <div className="w-12 h-12 rounded-full bg-[#EEF5FC] flex items-center justify-center text-lg flex-shrink-0">
              👤
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0B1628] mb-0.5">
                [Founder Name]
              </div>
              <div className="text-xs font-light text-gray-500">
                Founder & Lead Caregiver
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
