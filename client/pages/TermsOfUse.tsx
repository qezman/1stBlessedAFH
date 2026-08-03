import { LegalPage, LegalSection } from "../components/legal/LegalPage";

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
          or use the Site. They do not govern the provision of care services,
          which are subject to separate care agreements between 1st Blessed
          Adult Family Home and residents or their families.
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
          that does not infringe the rights of others. Specifically, you agree
          not to:
        </p>
        <ul>
          <li>
            Use the Site in any way that violates applicable federal, state, or
            local laws or regulations
          </li>
          <li>
            Transmit any unsolicited or unauthorised advertising or promotional
            material
          </li>
          <li>
            Attempt to gain unauthorised access to any part of the Site or its
            related systems
          </li>
          <li>
            Engage in any conduct that restricts or inhibits anyone's use or
            enjoyment of the Site
          </li>
          <li>Use the Site to impersonate any person or entity</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Informational Purpose Only",
    content: (
      <>
        <p>
          The content on this Site is provided for general informational
          purposes only. Nothing on this Site constitutes medical advice, legal
          advice, or a guarantee of care outcomes. Information about care
          services, availability, and pricing is subject to change.
        </p>
        <p>
          You should not rely on information found on this Site as a substitute
          for professional medical, legal, or financial advice. Always consult
          qualified professionals for guidance specific to your situation.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual Property",
    content: (
      <>
        <p>
          All content on this Site — including text, images, graphics, logos,
          and the overall design — is the property of 1st Blessed Adult Family
          Home or its content suppliers, and is protected by applicable
          intellectual property laws.
        </p>
        <p>
          You may view and print pages from this Site for your personal,
          non-commercial use only. You may not reproduce, distribute, modify,
          transmit, or otherwise use any content from this Site without our
          prior written permission.
        </p>
      </>
    ),
  },
  {
    heading: "Third-Party Links",
    content: (
      <>
        <p>
          This Site may contain links to third-party websites, including Google
          Maps, social media platforms, and government resources. These links
          are provided for convenience only. We have no control over the content
          of those sites and accept no responsibility for them or for any loss
          or damage that may arise from your use of them.
        </p>
        <p>
          Inclusion of any linked website does not imply our endorsement or
          approval of that site.
        </p>
      </>
    ),
  },
  {
    heading: "Disclaimers and Limitation of Liability",
    content: (
      <>
        <p>
          This Site is provided on an "as is" and "as available" basis without
          any warranties of any kind, either express or implied. We make no
          representations or warranties that the Site will be uninterrupted,
          error-free, or free of viruses or other harmful components.
        </p>
        <p>
          To the fullest extent permitted by law, 1st Blessed Adult Family Home
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of, or
          inability to use, this Site or its content.
        </p>
      </>
    ),
  },
  {
    heading: "Contact Form and Communications",
    content: (
      <>
        <p>
          When you submit a message through our contact form, you consent to us
          using that information to respond to your enquiry. Submission of a
          contact form does not create a care agreement, service commitment, or
          client relationship. All care arrangements require a separate formal
          agreement.
        </p>
      </>
    ),
  },
  {
    heading: "Governing Law",
    content: (
      <>
        <p>
          These Terms of Use are governed by and construed in accordance with
          the laws of the State of Washington, without regard to its conflict of
          law provisions. Any disputes arising under these terms shall be
          resolved in the courts located in Snohomish County, Washington.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to These Terms",
    content: (
      <>
        <p>
          We reserve the right to update or modify these Terms of Use at any
          time. Changes will be effective immediately upon posting to the Site.
          Your continued use of the Site following any changes constitutes your
          acceptance of the new terms. We encourage you to review these terms
          periodically.
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

export function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="The terms and conditions governing your use of this website."
      lastUpdated="April 2025"
      sections={TERMS_SECTIONS}
    />
  );
}

export default TermsOfUse;
