import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-hero-glow pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[rgba(25,80,138,0.13)] -top-[150px] -right-[100px]" />
      <div className="absolute w-[220px] h-[220px] rounded-full bg-[rgba(201,153,46,0.06)] bottom-[20px] left-[400px]" />

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
            Contact
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[68px] font-light text-white tracking-[-0.03em] leading-[1.2] max-w-[600px] mb-6">
          We'd love to
          <br />
          <span className="text-[#C9992E]">hear from you.</span>
        </h1>

        <p className="text-[17px] font-light text-navy-200 leading-[1.75] max-w-[480px] mb-10">
          Whether you're ready to schedule a tour, have questions about care, or
          just want to talk — we're here. Reach out any way that's easiest for
          you.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:2063030549"
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-[13px] font-light text-navy-200 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-navy-300" />
            206-303-0549
          </a>
          <a
            href="mailto:1stblessedafh@gmail.com"
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-[13px] font-light text-navy-200 hover:bg-white/10 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-navy-300" />
            1stblessedafh@gmail.com
          </a>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2.5 text-[13px] font-light text-navy-200">
            <MapPin className="w-3.5 h-3.5 text-navy-300" />
            Everett, WA 98203
          </div>
        </div>
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
