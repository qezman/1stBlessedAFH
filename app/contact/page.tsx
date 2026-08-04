import { ContactHero } from "@/components/contact/ContactHero";
import { ContactSection } from "@/components/contact/ContactSection";
import { MapSection } from "@/components/contact/MapSection";
import { ContactCTA } from "@/components/contact/ContactCTA";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us & Schedule a Tour",
  description:
    "Get in touch with 1st Blessed Adult Family Home in Everett, WA. Schedule a private tour or reach out to our lead caregivers directly.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <MapSection />
      <ContactCTA />
    </main>
  );
}
