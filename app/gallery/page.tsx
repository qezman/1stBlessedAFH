import { GalleryHero } from "@/components/gallery/GalleryHero";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { GalleryCTA } from "@/components/gallery/GalleryCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery — Inside Our Home",
  description:
    "Explore photos of our Everett adult family home, including private bedrooms, living areas, dining room, kitchen, and peaceful outdoor yard.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <MasonryGallery />
      <GalleryCTA />
    </main>
  );
}
