import { ContactHero } from "../components/contact/ContactHero";
import { ContactSection } from "../components/contact/ContactSection";
import { MapSection } from "../components/contact/MapSection";
import { ContactCTA } from "../components/contact/ContactCTA";

export function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <MapSection />
      <ContactCTA />
    </main>
  );
}
