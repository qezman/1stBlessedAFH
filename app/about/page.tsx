import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { OurValues } from "@/components/about/OurValues";
import { MeetTheTeam } from "@/components/about/MeetTheTeam";
import { ByTheNumbers } from "@/components/about/ByTheNumbers";
import { LicenseSection } from "@/components/about/LicenseSection";
import { AboutCTA } from "@/components/about/AboutCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Values",
  description:
    "Learn about 1st Blessed Adult Family Home in Everett, WA. Meet our licensed lead caregivers, explore our story, and understand our commitment to 24/7 senior care.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <ByTheNumbers />
      <LicenseSection />
      <AboutCTA />
    </main>
  );
}
