import { HeroSection } from "../components/home/HeroSection";
import { TrustBar } from "../components/home/TrustBar";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { LifestyleSection } from "../components/home/LifestyleSection";
import { GalleryPreview } from "../components/home/GalleryPreview";
import { WhyUsSection } from "../components/home/WhyUsSection";
import { HomeCTA } from "../components/home/HomeCTA";

export function Index() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <LifestyleSection />
      <GalleryPreview />
      <WhyUsSection />
      <HomeCTA />
    </main>
  );
}
