import React from "react";

export const TermsOfUse: React.FC = () => {
  return (
    <main className="pt-24 pb-20 bg-brand-bg">
      <section className="bg-navy-950 text-white py-16 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-2">
            LEGAL INFORMATION
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Terms of Use
          </h1>
          <p className="text-gray-300 text-sm">Last Updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by these Terms of Use. If you do not agree to these terms,
                please do not use the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">
                2. Informational Purpose Only
              </h2>
              <p>
                The content on this site is provided for general informational
                purposes only. Nothing on this site constitutes medical advice,
                legal advice, or a binding guarantee of care outcomes. Formal
                care arrangements require a separate executed care agreement
                between 1st Blessed Adult Family Home and the resident or legal
                representative.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">
                3. Intellectual Property
              </h2>
              <p>
                All content on this site — including text, logos, layout, and
                visual designs — is the property of 1st Blessed Adult Family
                Home and protected by applicable copyright and trademark laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">
                4. Governing Law
              </h2>
              <p>
                These Terms of Use are governed by and construed in accordance
                with the laws of the State of Washington. Any disputes shall be
                resolved in the courts located in Snohomish County, Washington.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
