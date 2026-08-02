import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustBar } from '../components/home/TrustBar';
import { AboutSnapshot } from '../components/home/AboutSnapshot';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { BlogPreview } from '../components/home/BlogPreview';
import { Button } from '../components/ui/Button';

export const Index: React.FC = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. About Snapshot */}
      <AboutSnapshot />

      {/* 4. Services Grid */}
      <ServicesGrid />

      {/* 5. Lifestyle Gallery Preview */}
      <GalleryPreview />

      {/* 6. Testimonials */}
      <TestimonialSection />

      {/* 7. Blog Preview */}
      <BlogPreview />

      {/* 8. Call To Action Banner */}
      <section className="py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white border-t border-navy-700 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
            TAKE THE NEXT STEP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to See 1st Blessed AFH for Yourself?
          </h2>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
            No phone trees, no intake forms. Just a real, compassionate conversation about what's right for your family.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="gold" size="lg">
              Schedule a Private Tour
            </Button>
            <a
              href="tel:2063030549"
              className="px-8 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Call (206) 303-0549
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
