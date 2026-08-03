import React from "react";
import Link from "next/link";
import { GALLERY_PHOTOS } from "../../data/galleryPhotos";

export const GalleryHero: React.FC = () => {
  return (
    <section className="bg-[#0B1628] pt-28 pb-24 md:pt-36 md:pb-32 px-6 md:px-12 relative overflow-hidden text-white">
      {/* Background Decorative Circle */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#19508A]/12 -top-36 -right-24 pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs mb-10">
          <Link
            href="/"
            className="text-[#6B93C4] hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="text-[#1E3D6B]">›</span>
          <span className="text-[#A8C3E0]">Gallery</span>
        </div>

        {/* Heading */}
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] mb-6 max-w-[600px]">
          A look inside
          <br />
          <span className="text-[#C9992E] font-normal">our home.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-light text-[#A8C3E0] leading-relaxed max-w-[480px]">
          Every corner of 1st Blessed is designed for comfort, warmth, and
          dignity. Take a look around.
        </p>

        {/* Photo Count Badge - Sharp Edges */}
        <div className="inline-flex items-center space-x-2.5 mt-8 bg-white/5 border border-white/10 rounded-none px-4 py-2 text-xs font-light text-[#6B93C4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9992E]" />
          <span>{GALLERY_PHOTOS.length} photos</span>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-auto block">
          <path
            d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 48 1440 48H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};
