import React, { useState } from "react";
import { faqsData } from "../data/faqs";
import { FAQSidebar } from "../components/faq/FAQSidebar";
import { FAQAccordion } from "../components/faq/FAQAccordion";
import { Button } from "../components/ui/Button";

export const FAQs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs =
    selectedCategory === "all"
      ? faqsData
      : faqsData.filter((f) => f.category === selectedCategory);

  return (
    <main className="pt-24 pb-20">
      {/* Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-24 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-3">
            QUESTIONS & ANSWERS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about Adult Family Home care, daily
            life, medication tracking, and our Everett home.
          </p>
        </div>
      </section>

      {/* FAQs Section with Sidebar & Accordion */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <FAQSidebar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Accordion list */}
            <div className="lg:col-span-8">
              <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Showing {filteredFaqs.length} Questions
              </div>
              <FAQAccordion items={filteredFaqs} />
            </div>
          </div>

          {/* Bottom callout */}
          <div className="mt-16 text-center bg-white p-10 rounded-2xl border border-gray-100 shadow-sm max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-navy-950">
              Have a Question Not Answered Here?
            </h3>
            <p className="text-gray-600 text-sm">
              We are happy to answer any questions directly by phone or email.
              No intake pressure, just open information.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="gold" size="md">
                Send Us a Message
              </Button>
              <a
                href="tel:2063030549"
                className="px-6 py-2.5 rounded-lg border border-navy-800 text-navy-800 font-semibold hover:bg-navy-800 hover:text-white transition-colors text-sm"
              >
                Call 206-303-0549
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
