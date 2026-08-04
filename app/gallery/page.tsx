import { GalleryHero } from "@/components/gallery/GalleryHero";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { GalleryCTA } from "@/components/gallery/GalleryCTA";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Photo Gallery — Inside Our Home",
  description:
    "Explore photos of our Everett adult family home, including private bedrooms, living areas, dining room, kitchen, and peaceful outdoor yard.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <MasonryGallery />
      <GalleryCTA />
    </main>
  );
}
