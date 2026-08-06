import Link from "next/link";
import Image from "next/image";
import {
  GALLERY_PHOTOS,
  HOME_GALLERY_PREVIEW_PHOTO_IDS,
} from "../../data/galleryPhotos";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function GalleryPreview() {
  const photos = HOME_GALLERY_PREVIEW_PHOTO_IDS.map((id) =>
    GALLERY_PHOTOS.find((photo) => photo.id === id),
  ).filter((photo): photo is (typeof GALLERY_PHOTOS)[number] => Boolean(photo));
  const [featured, ...rest] = photos;

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        <Reveal className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy-500 mb-4">
              <span className="w-5 h-[1px] bg-navy-500" />
              Gallery
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-light text-navy-950 tracking-[-0.02em] leading-[1.3]">
              Take a look inside our home.
            </h2>
          </div>
          <Button to="/gallery" variant="outline" size="md">
            View full gallery →
          </Button>
        </Reveal>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Reveal
            className="relative block h-[280px] overflow-hidden rounded border border-gray-100 sm:row-span-2 sm:h-[408px]"
            delay={0}
          >
            <Link href="/gallery" className="block h-full w-full">
              <Image
                src={featured.src}
                alt={featured.caption}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-white font-light tracking-wide">
                  {featured.caption}
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-2 sm:col-span-2">
            {rest.map((photo, i) => (
              <Reveal
                key={photo.id}
                delay={0.08 + (i % 2) * 0.08}
                className="relative block h-[280px] overflow-hidden rounded border border-gray-100 sm:h-[200px]"
              >
                <Link href="/gallery" className="block h-full w-full">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-light tracking-wide">
                      {photo.caption}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
