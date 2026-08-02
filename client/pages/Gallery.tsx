import React from "react";
import { GalleryHero } from "../components/gallery/GalleryHero";
import { MasonryGallery } from "../components/gallery/MasonryGallery";
import { GalleryCTA } from "../components/gallery/GalleryCTA";

export const Gallery: React.FC = () => {
  return (
    <main>
      <GalleryHero />
      <MasonryGallery />
      <GalleryCTA />
    </main>
  );
};

export default Gallery;
