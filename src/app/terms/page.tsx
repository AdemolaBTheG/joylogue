import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Joylogue",
  description:
    "The terms governing access to and use of the Joylogue app and related services.",
};

const sections = [
  { id: "agreement", label: "Agreement and eligibility" },
  { id: "service", label: "The Joylogue service" },
  { id: "accounts", label: "Accounts and security" },
  { id: "conduct", label: "Acceptable use" },
  { id: "content", label: "Your content" },
  { id: "subscriptions", label: "Subscriptions and billing" },
  { id: "third-party", label: "Third-party services" },
  { id: "availability", label: "Availability and changes" },
  { id: "disclaimers", label: "Disclaimers and liability" },
  { id: "termination", label: "Termination and disputes" },
  { id: "changes", label: "Changes and contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The rules of play"
      lastUpdated="August 18, 2026"
      sections={sections}
      summary="These terms set the ground rules for using Joylogue. They are written to be readable, but they remain a binding agreement when you use the Service."
      title="Terms of Service"
    >
      <LegalSection id="agreement" index="01" title="Agreement and eligibility">
        <p>
          These Terms of Service (the <strong>Terms</strong>) govern your access
          to the Joylogue mobile application, website, and related services
          (collectively, the <strong>Service</strong>). By downloading, accessing,
          or using the Service, you agree to these Terms and acknowledge the
          <Link href="/privacy"> Privacy Policy</Link>. If you do not agree, do not use
          the Service.
        </p>
        <p>
          You must be at least 13 years old and legally able to enter into these
          Terms. If the law where you live requires parental consent at a higher
          age, your parent or guardian must approve your use. If you use the
          Service for an organization, you represent that you can bind that
          organization to these Terms.
        </p>
      </LegalSection>

      <LegalSection id="service" index="02" title="The Joylogue service">
        <p>
          Joylogue helps you discover, save, organize, track, rate, and share
          information about video games. Features may include a local backlog,
          recommendations, link-based game matching, progress tools, widgets,
          profile and friend features, shared-library comparisons, backups,
          notifications, and optional premium functionality.
        </p>
        <p>
          Joylogue is an organizational and discovery tool. It does not sell,
          license, stream, or provide ownership of the games shown in the
          Service. You are responsible for obtaining games and using third-party
          platforms under their applicable terms.
        </p>
      </LegalSection>

      <LegalSection id="accounts" index="03" title="Accounts and security">
        <p>
          Some connected features require an account, which may initially be
          created using a service-generated identifier. You are responsible for
          activity associated with your account and for maintaining the security
          of your device, authentication session, and invitation links.
        </p>
        <ul>
          <li>Provide accurate information when you choose a display name or other profile details.</li>
          <li>Do not impersonate another person or use a name or image you lack permission to use.</li>
          <li>Do not share authentication credentials or attempt to access another person&apos;s account.</li>
          <li>Notify us promptly at <a href="mailto:support@joylogue.app">support@joylogue.app</a> if you suspect unauthorized access.</li>
        </ul>
      </LegalSection>

      <LegalSection id="conduct" index="04" title="Acceptable use">
        <p>You may not use the Service to:</p>
        <ul>
          <li>Violate law, intellectual-property rights, privacy rights, or other rights.</li>
          <li>Harass, threaten, deceive, exploit, or abuse another person.</li>
          <li>Upload malicious, unlawful, obscene, or infringing profile content.</li>
          <li>Send spam, scrape the Service, automate abusive requests, or interfere with normal operation.</li>
          <li>Probe security, bypass access controls, reverse engineer restricted portions, or introduce malware.</li>
          <li>Use game-link resolution or AI-assisted features to process content you are not authorized to submit.</li>
          <li>Resell, sublicense, or commercially exploit the Service unless we agree in writing.</li>
        </ul>
        <p>
          Reasonable interoperability and statutory rights are not restricted to
          the extent they cannot lawfully be restricted.
        </p>
      </LegalSection>

      <LegalSection id="content" index="05" title="Your content">
        <p>
          You retain ownership of notes, profile images, display names, links,
          ratings, and other content you submit (<strong>Your Content</strong>).
          You grant Joylogue a worldwide, non-exclusive, royalty-free license to
          host, copy, process, display, and transmit Your Content only as needed
          to operate, secure, improve, and support the Service and the sharing
          choices you make.
        </p>
        <p>
          You represent that you have the rights needed to provide Your Content.
          You can end this license by deleting the relevant content or your
          account, except where limited retention is permitted by the Privacy
          Policy or where another user has retained a copy you intentionally
          shared.
        </p>
        <p>
          Joylogue&apos;s name, design, software, and original materials are owned by
          Joylogue or its licensors. Game names, cover art, screenshots,
          trademarks, and other third-party materials belong to their respective
          owners and are used for identification and informational purposes.
        </p>
      </LegalSection>

      <LegalSection id="subscriptions" index="06" title="Subscriptions and billing">
        <p>
          Joylogue may offer monthly, annual, lifetime, or other premium options.
          Available features, prices, billing intervals, trial terms, and renewal
          details are shown before purchase and may vary by country or platform.
        </p>
        <ul>
          <li>Purchases are processed by Apple, Google, or another displayed store provider, not directly by Joylogue.</li>
          <li>Recurring subscriptions renew automatically unless canceled through your store account before the renewal deadline shown by the store.</li>
          <li>You can manage or cancel a subscription in your Apple App Store or Google Play account settings.</li>
          <li>Refunds, taxes, payment disputes, and billing corrections are governed by the store&apos;s terms and applicable law.</li>
          <li>Deleting Joylogue or your Joylogue account does not automatically cancel a store subscription.</li>
        </ul>
        <p>
          We may change premium features or future pricing. Changes to an active
          recurring plan will take effect only with the notice and consent
          required by the relevant store and applicable law.
        </p>
      </LegalSection>

      <LegalSection id="third-party" index="07" title="Third-party services">
        <p>
          Joylogue relies on and links to third-party services for game metadata,
          link resolution, artificial-intelligence processing, authentication,
          cloud storage, notifications, analytics, subscriptions, stores, and
          external content. Their terms and privacy policies apply to their
          services.
        </p>
        <p>
          Game details, playtime estimates, release dates, artwork, links, and
          AI-generated matches may be incomplete, outdated, or incorrect. Verify
          important information with the relevant publisher or store. Joylogue
          does not endorse and is not responsible for third-party content,
          availability, purchases, security, or practices.
        </p>
      </LegalSection>

      <LegalSection id="availability" index="08" title="Availability and changes">
        <p>
          We may add, change, suspend, or discontinue features, integrations, or
          platform support. We aim to preserve local library access where
          practical, but connected features can be unavailable because of
          maintenance, network conditions, provider changes, legal requirements,
          or events outside our control.
        </p>
        <p>
          You are responsible for maintaining compatible devices and software.
          Exported backups are provided as a convenience; you are responsible for
          storing them safely and keeping independent copies of information that
          is important to you.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" index="09" title="Disclaimers and liability">
        <p>
          To the fullest extent permitted by law, the Service is provided “as is”
          and “as available.” Joylogue disclaims implied warranties of
          merchantability, fitness for a particular purpose, title, and
          non-infringement. We do not warrant uninterrupted operation, perfect
          matching or recommendations, preservation of every record, or the
          accuracy of third-party information.
        </p>
        <p>
          To the fullest extent permitted by law, Joylogue and its suppliers will
          not be liable for indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for lost profits, data, goodwill, or
          opportunities arising from the Service. Joylogue&apos;s aggregate liability
          for claims related to the Service will not exceed the greater of the
          amount you paid Joylogue for the Service during the 12 months before the
          claim or EUR 50.
        </p>
        <p>
          Some jurisdictions do not allow certain exclusions or limits. In those
          places, these provisions apply only to the extent permitted, and your
          mandatory consumer rights remain unaffected.
        </p>
      </LegalSection>

      <LegalSection id="termination" index="10" title="Termination and disputes">
        <p>
          You may stop using Joylogue at any time and may request account deletion
          as described in the <Link href="/privacy#deletion">Privacy Policy</Link>. We
          may restrict or terminate access if you materially or repeatedly breach
          these Terms, create risk or harm, or when required by law. Where
          appropriate, we will provide notice and an opportunity to appeal.
        </p>
        <p>
          Before filing a formal claim, please contact
          <a href="mailto:support@joylogue.app?subject=Terms%20dispute"> support@joylogue.app</a> so we can try to resolve the issue informally. These Terms are governed by the law that applies under mandatory consumer-protection and conflict-of-law rules. Nothing in these Terms deprives you of a court or forum available under non-waivable local law.
        </p>
        <p>
          Provisions that by their nature should survive termination will
          survive, including ownership, payment obligations, disclaimers,
          liability limits, and dispute provisions.
        </p>
      </LegalSection>

      <LegalSection id="changes" index="11" title="Changes and contact">
        <p>
          We may update these Terms to reflect changes to Joylogue, law, or our
          operations. We will update the date above and provide reasonable notice
          before a material change takes effect. Continuing to use the Service
          after the effective date means you accept the updated Terms; if you do
          not agree, you should stop using the Service.
        </p>
        <p>
          Questions about these Terms can be sent to
          <a href="mailto:support@joylogue.app"> support@joylogue.app</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
