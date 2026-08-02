import { AboutHero } from "../components/about/AboutHero";
import { OurStory } from "../components/about/OurStory";
import { OurValues } from "../components/about/OurValues";
import { MeetTheTeam } from "../components/about/MeetTheTeam";
import { ByTheNumbers } from "../components/about/ByTheNumbers";
import { LicenseSection } from "../components/about/LicenseSection";
import { AboutCTA } from "../components/about/AboutCTA";

export function About() {
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
