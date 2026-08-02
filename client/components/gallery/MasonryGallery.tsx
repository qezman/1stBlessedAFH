import { useState, useCallback } from 'react';
import { GALLERY_PHOTOS } from '../../data/galleryPhotos';
import { Lightbox } from './Lightbox';

const len = GALLERY_PHOTOS.length;

export function MasonryGallery() {
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i !== null ? (i - 1 + len) % len : 0)), []);
  const next = useCallback(() => setIndex((i) => (i !== null ? (i + 1) % len : 0)), []);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#E9ECEF] gap-2">
          <span className="text-xs font-light text-[#ADB5BD] tracking-wide">
            {len} photos · 1st Blessed Adult Family Home · Everett, WA
          </span>
          <div className="flex items-center space-x-2 text-xs font-light text-[#ADB5BD]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" stroke="#ADB5BD" strokeWidth="1" />
              <rect x="8" y="1" width="5" height="5" stroke="#ADB5BD" strokeWidth="1" />
              <rect x="1" y="8" width="5" height="5" stroke="#ADB5BD" strokeWidth="1" />
              <rect x="8" y="8" width="5" height="5" stroke="#ADB5BD" strokeWidth="1" />
            </svg>
            <span>Click any photo to expand</span>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-3 space-y-3">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={photo.id}
              onClick={() => open(i)}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${photo.caption}`}
              onKeyDown={(e) => e.key === 'Enter' && open(i)}
              className="break-inside-avoid relative overflow-hidden cursor-pointer group block"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                style={{ height: photo.height }}
                className="w-full object-cover block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0B1628]/45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="1.2" />
                  <path d="M11 16h10M16 11v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {index !== null && (
        <Lightbox photos={GALLERY_PHOTOS} index={index} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
