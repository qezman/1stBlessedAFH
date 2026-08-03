import { LegalPage, LegalSection } from "../components/legal/LegalPage";

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
            spent on the Site. This is collected through standard server logs
            and, if enabled, analytics tools.
          </li>
          <li>
            <strong>Cookies</strong> — Our Site may use cookies or similar
            technologies to improve functionality and understand usage. You can
            disable cookies in your browser settings, though some features may
            not function properly as a result.
          </li>
        </ul>
        <p>
          We do not collect sensitive personal information such as health
          records, financial data, or Social Security numbers through this
          website.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>
            Respond to your enquiries and messages submitted via the contact
            form
          </li>
          <li>Schedule tours or follow up on care-related questions</li>
          <li>Improve the usability and content of our Site</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for marketing purposes. We do not use your information for
          automated decision-making or profiling.
        </p>
      </>
    ),
  },
  {
    heading: "How We Store and Protect Your Information",
    content: (
      <>
        <p>
          Information submitted through our contact form is transmitted to us
          via a third-party form service (such as Formspree or EmailJS). We take
          reasonable precautions to protect your information, but no method of
          transmission over the internet is completely secure.
        </p>
        <p>
          We retain contact enquiry information only as long as necessary to
          respond to your message or as required by law. We do not store contact
          form submissions in a permanent database unless you become a resident
          or formal client, at which point separate care-related privacy
          practices and agreements apply.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Services",
    content: (
      <>
        <p>
          Our Site may use the following third-party services, each of which has
          its own privacy policy:
        </p>
        <ul>
          <li>
            <strong>Google Maps</strong> — for the embedded location map on our
            Contact page
          </li>
          <li>
            <strong>Google Fonts</strong> — for typography (Inter)
          </li>
          <li>
            <strong>Formspree or EmailJS</strong> — for contact form submission
            processing
          </li>
          <li>
            <strong>Framer</strong> — our website platform and hosting provider
          </li>
        </ul>
        <p>
          We encourage you to review the privacy policies of these services if
          you have concerns about how they handle data.
        </p>
      </>
    ),
  },
  {
    heading: "Children's Privacy",
    content: (
      <>
        <p>
          This website is not directed at children under the age of 13, and we
          do not knowingly collect personal information from children. If you
          believe a child has submitted personal information through this Site,
          please contact us and we will delete it promptly.
        </p>
      </>
    ),
  },
  {
    heading: "Your Rights",
    content: (
      <>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information, including the right to access, correct, or
          delete information we hold about you. To exercise any of these rights,
          please contact us at:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:1stblessedafh@gmail.com">1stblessedafh@gmail.com</a>
          </li>
          <li>
            Phone: <a href="tel:2063030549">206-303-0549</a>
          </li>
          <li>Address: 6007 Rockefeller Avenue, Everett, WA 98203</li>
        </ul>
        <p>We will respond to requests within a reasonable time frame.</p>
      </>
    ),
  },
  {
    heading: "Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will update the "Last updated" date at the top of this page. We
          encourage you to review this policy periodically. Continued use of the
          Site after changes are posted constitutes your acceptance of the
          updated policy.
        </p>
      </>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please reach out:
        </p>
        <ul>
          <li>
            <strong>1st Blessed Adult Family Home</strong>
          </li>
          <li>6007 Rockefeller Avenue, Everett, WA 98203</li>
          <li>
            Phone: <a href="tel:2063030549">206-303-0549</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:1stblessedafh@gmail.com">1stblessedafh@gmail.com</a>
          </li>
        </ul>
      </>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect information on this website."
      lastUpdated="April 2025"
      sections={PRIVACY_SECTIONS}
    />
  );
}

export default PrivacyPolicy;
