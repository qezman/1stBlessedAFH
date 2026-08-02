import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeader } from '../ui/SectionHeader';
import { TestimonialCard } from '../ui/TestimonialCard';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gold-50/50 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAMILY TESTIMONIALS"
          title="What Families Say About Our Care"
          subtitle="Real words from daughters, sons, and family representatives who trusted 1st Blessed Adult Family Home with their loved ones."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};
