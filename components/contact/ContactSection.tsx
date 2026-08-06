import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left — Form */}
        <div>
          <div className="mb-9">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
              — Send a message
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#0B1628] tracking-[-0.02em] leading-[1.3] mb-3">
              Fill in the form and we'll
              <br />
              get back to you shortly.
            </h2>
            <p className="text-[15px] font-light text-gray-500 leading-[1.75]">
              Prefer to talk? Skip the form and call us directly — no phone
              trees, a real person answers.
            </p>
          </div>
          <ContactForm />
        </div>

        {/* Right — Info */}
        <div>
          <div className="mb-9">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#25508A] mb-5">
              — Contact details
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#0B1628] tracking-[-0.02em] leading-[1.3]">
              Other ways to
              <br />
              reach us.
            </h2>
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
