import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { LifestyleSection } from "@/components/home/LifestyleSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Compassionate Adult Family Home in Everett, Washington",
  description:
    "1st Blessed Adult Family Home offers 24/7 personalized care, medication management, and a warm family environment for seniors in Everett, WA. Schedule a tour today.",
  path: "/",
});

export default function HomePage() {
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
