import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How 1st Blessed Adult Family Home collects, uses, and protects information on this website.",
  path: "/privacypolicy",
});

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Introduction",
    content: (
      <>
        <p>
          1st Blessed Adult Family Home ("we," "our," or "us") is committed to
          protecting the privacy of those who visit our website at{" "}
          <strong>1stblessedafh.com</strong> (the "Site"). This Privacy Policy
          explains what information we collect, how we use it, and your rights
          regarding that information.
        </p>
        <p>
          By using this Site, you agree to the collection and use of information
          as described in this policy. If you do not agree, please do not use
          the Site.
        </p>
      </>
    ),
  },
  {
    heading: "Information We Collect",
    content: (
      <>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> — When you fill
            out our contact form, you may provide your name, email address,
            phone number, and any details you include in your message.
          </li>
          <li>
            <strong>Automatically collected information</strong> — Like most
            websites, we may collect technical information when you visit,
            including your IP address, browser type, pages visited, and time
            spent on the Site.
          </li>
          <li>
            <strong>Cookies</strong> — Our Site may use cookies or similar
            technologies to improve functionality and understand usage.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your enquiries and messages</li>
          <li>Schedule tours or follow up on care-related questions</li>
          <li>Improve the usability and content of our Site</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy, please contact us:
        </p>
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect information on this website."
      lastUpdated="April 2025"
      sections={PRIVACY_SECTIONS}
    />
  );
}
