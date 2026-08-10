import Link from "next/link";

export function BlogHero() {
  return (
    <section className="bg-hero-glow pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[rgba(25,80,138,0.13)] -top-[150px] -right-[100px]" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-10">
          <Link
            href="/"
            className="text-xs font-normal text-navy-300 hover:text-white transition-colors tracking-wide"
          >
            Home
          </Link>
          <span className="text-xs text-navy-600">›</span>
          <span className="text-xs font-normal text-navy-200 tracking-wide">
            Blog
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[68px] font-light text-white tracking-[-0.03em] leading-[1.2] max-w-[640px] mb-6">
          Resources for
          <br />
          <span className="text-[#C9992E]">families and caregivers.</span>
        </h1>

        <p className="text-[17px] font-light text-navy-200 leading-[1.75] max-w-[500px]">
          Honest, practical guides on senior care, adult family homes, and what
          to expect at every step of the journey.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-[0] z-10 -mb-px">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          <path
            d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 48 1440 48H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
