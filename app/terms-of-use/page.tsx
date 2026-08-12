import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "The terms and conditions governing your use of the 1st Blessed Adult Family Home website.",
  path: "/terms-of-use",
});

const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing and using the website at{" "}
          <strong>1stblessedafh.com</strong> (the "Site"), you accept and agree
          to be bound by these Terms of Use. If you do not agree to these terms,
          please do not use the Site.
        </p>
        <p>
          These Terms of Use apply to all visitors, users, and others who access
          or use the Site.
        </p>
      </>
    ),
  },
  {
    heading: "Use of the Site",
    content: (
      <>
        <p>
          You agree to use this Site only for lawful purposes and in a manner
          that does not infringe the rights of others.
        </p>
        <ul>
          <li>
            Use the Site in any way that violates applicable federal, state, or
            local laws
          </li>
          <li>Attempt to gain unauthorized access to any part of the Site</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Informational Purpose Only",
    content: (
      <>
        <p>
          The content on this Site — including our blog, FAQ, and photo
          gallery — is provided for general informational purposes only.
          Nothing on this Site constitutes medical or legal advice, and
          nothing on this Site forms a care agreement or admission contract.
          Availability, pricing, and services should be confirmed directly
          with our team.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    content: (
      <>
        <p>
          The text, photographs, and graphics on this Site — including our
          gallery images and blog articles — belong to 1st Blessed Adult
          Family Home unless otherwise noted, and may not be copied,
          reproduced, or reused without our written permission.
        </p>
      </>
    ),
  },
  {
    heading: "Accessibility",
    content: (
      <>
        <p>
          This Site includes an accessibility menu, provided by UserWay, that
          lets visitors adjust display and navigation settings. We are
          committed to making this Site usable for all visitors; if you
          encounter an accessibility barrier, please contact us so we can
          assist you.
        </p>
      </>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <>
        <p>Questions about these Terms of Use? Please contact us:</p>
        <ul>
          <li>
            <strong>1st Blessed Adult Family Home</strong>
          </li>
          <li>6007 Rockefeller Avenue, Everett, WA 98203</li>
          <li>Phone: 206-303-0549</li>
          <li>Email: 1stblessedafh@gmail.com</li>
        </ul>
      </>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="The terms and conditions governing your use of this website."
      lastUpdated="August 2026"
      sections={TERMS_SECTIONS}
    />
  );
}
