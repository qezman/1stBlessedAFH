import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <main className="pt-24 pb-20 bg-brand-bg">
      <section className="bg-navy-950 text-white py-16 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-2">
            LEGAL INFORMATION
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-300 text-sm">Last Updated: April 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">1. Introduction</h2>
              <p>
                1st Blessed Adult Family Home ("we," "our," or "us") is committed to protecting the privacy of those who visit our website. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information you provide directly:</strong> When you fill out our contact form, you may provide your name, email address, phone number, and any details you include in your message.</li>
                <li><strong>Automatically collected information:</strong> Technical information such as IP address, browser type, and pages visited through standard server logs.</li>
                <li><strong>Cookies:</strong> Our Site may use cookies to improve functionality and understand website usage.</li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                We do not collect sensitive health records or financial data through this public website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your enquiries and messages submitted via our contact form</li>
                <li>To schedule tours or follow up on care-related questions</li>
                <li>To improve the usability and content of our website</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>
              <p className="mt-3 font-medium text-navy-950">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-950 mb-3">4. Contact Us</h2>
              <p>If you have any questions or concerns regarding this policy, please reach out to us:</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-xl space-y-1 font-medium text-navy-950">
                <p>1st Blessed Adult Family Home</p>
                <p>6007 Rockefeller Avenue, Everett, WA 98203</p>
                <p>Phone: 206-303-0549 | Email: 1stblessedafh@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
