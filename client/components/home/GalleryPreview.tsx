import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const GalleryPreview: React.FC = () => {
  const images = [
    {
      url: 'https://framerusercontent.com/assets/NAzYO2o1MS3dK9Xa3ksU5oCAREU.jpg',
      title: 'Warm Residential Exterior',
      desc: 'Located in a peaceful, quiet neighborhood in Everett',
    },
    {
      url: 'https://framerusercontent.com/assets/xkjm8YFt86QMxl6KrvoqMGtrSI0.jpg',
      title: 'Comfortable Common Living Room',
      desc: 'Spacious areas for rest, television, and social visits',
    },
    {
      url: 'https://framerusercontent.com/assets/NAzYO2o1MS3dK9Xa3ksU5oCAREU.jpg',
      title: 'Private & Semi-Private Bedrooms',
      desc: 'Sunlit, accessible, and ready for personal furnishings',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="LIFESTYLE & ENVIRONMENT"
          title="Take a Look Inside Our Home"
          subtitle="Designed to feel like home from day one. Single-story accessibility, cozy private rooms, and welcoming shared spaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-navy-950">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase mb-1">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>1st Blessed AFH</span>
                </div>
                <h4 className="font-bold text-lg text-white mb-1">{img.title}</h4>
                <p className="text-xs text-gray-300 leading-normal">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button to="/gallery" variant="outline" size="md">
            View Full Photo Gallery <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
