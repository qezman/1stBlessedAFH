import Link from "next/link";
import { GALLERY_PHOTOS } from "../../data/galleryPhotos";
import { Button } from "../ui/Button";

export function GalleryPreview() {
  const photos = GALLERY_PHOTOS.slice(0, 5);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy-500 mb-4">
              <span className="w-5 h-[1px] bg-navy-500" />
              Gallery
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-light text-navy-950 tracking-[-0.02em] leading-tight">
              Take a look inside our home.
            </h2>
          </div>
          <Button to="/gallery" variant="outline" size="md">
            View full gallery →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <Link
              key={photo.id}
              href="/gallery"
              className={`relative overflow-hidden group block border border-gray-100 ${
                i === 0
                  ? "sm:col-span-2 sm:row-span-2 h-[340px] sm:h-[460px]"
                  : "h-[225px]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white font-light tracking-wide">
                  {photo.caption}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
