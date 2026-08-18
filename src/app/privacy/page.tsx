import type { Metadata } from "next";

import { LegalPage, LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Joylogue",
  description:
    "Learn what information Joylogue processes, how it is used, and how to request access or deletion.",
};

const sections = [
  { id: "scope", label: "Scope and overview" },
  { id: "data", label: "Information we process" },
  { id: "use", label: "How we use information" },
  { id: "sharing", label: "Services and sharing" },
  { id: "friends", label: "Friends and shared libraries" },
  { id: "retention", label: "Retention and security" },
  { id: "deletion", label: "Your choices and deletion" },
  { id: "rights", label: "Privacy rights" },
  { id: "children", label: "Children and transfers" },
  { id: "changes", label: "Changes and contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Your data, without the fog"
      lastUpdated="August 18, 2026"
      sections={sections}
      summary="Joylogue is local-first. This policy explains what stays on your device, what is sent when you use connected features, and the controls available to you."
      title="Privacy Policy"
    >
      <LegalSection id="scope" index="01" title="Scope and overview">
        <p>
          This Privacy Policy applies to the Joylogue mobile application,
          Joylogue&apos;s website, and related services (collectively, the
          <strong> Service</strong>). In this policy, “Joylogue,” “we,” “us,”
          and “our” refer to the provider of the Service.
        </p>
        <div className="legal-callout">
          <strong>The short version</strong>
          <p>
            Your game library is stored on your device by default. Connected
            features send only the information needed to provide analytics,
            notifications, subscriptions, game matching, and optional social
            sharing. We do not sell personal information or use it for
            cross-context behavioral advertising.
          </p>
        </div>
        <p>
          The marketing website is currently static and does not set advertising
          cookies or run behavioral analytics. If that changes, this policy will
          be updated before the new processing begins.
        </p>
      </LegalSection>

      <LegalSection id="data" index="02" title="Information we process">
        <div className="legal-data-grid">
          <div>
            <strong>Local library data</strong>
            <p>Saved games, status, ratings, notes, progress, dates, platform preferences, badges, source links, onboarding choices, and widget state.</p>
          </div>
          <div>
            <strong>Account and profile data</strong>
            <p>A service-generated account identifier, display name, optional profile image, authentication session, invites, friend relationships, and blocks.</p>
          </div>
          <div>
            <strong>Shared-library data</strong>
            <p>Game identifiers and metadata, library status, ratings, progress, and relevant timestamps when you enable social features.</p>
          </div>
          <div>
            <strong>Discovery data</strong>
            <p>Search terms and URLs you submit for game matching, plus the resulting game candidates and metadata.</p>
          </div>
          <div>
            <strong>Usage and diagnostics</strong>
            <p>App lifecycle events, feature interactions, app and device information, error details, crash context, and service logs such as IP address and request time.</p>
          </div>
          <div>
            <strong>Purchases and notifications</strong>
            <p>Subscription entitlement and transaction status, store and app identifiers, push subscription identifiers, and notification interaction events.</p>
          </div>
        </div>
        <p>
          If you choose a profile image, Joylogue receives the selected image;
          it does not need broad access to your photo library. Joylogue does not
          access precise location unless a location-based feature is presented
          to you and you grant the relevant device permission.
        </p>
      </LegalSection>

      <LegalSection id="use" index="03" title="How we use information">
        <ul>
          <li>Provide and maintain your backlog, progress, ratings, recommendations, widgets, backups, and other requested features.</li>
          <li>Resolve shared links, retrieve game information, and improve matching quality.</li>
          <li>Create and secure profiles, invitations, friendships, and shared-library views.</li>
          <li>Deliver notifications you choose to enable and remember notification preferences.</li>
          <li>Confirm premium access, process purchase status, restore purchases, and provide customer support.</li>
          <li>Understand feature reliability, diagnose errors, prevent abuse, and improve the Service.</li>
          <li>Comply with law, enforce our Terms, and protect users, Joylogue, and others.</li>
        </ul>
        <p>
          Where applicable, we rely on performance of our contract with you,
          your consent, our legitimate interests in operating and securing the
          Service, and compliance with legal obligations. You may withdraw
          consent for optional processing through device settings or by
          contacting us, without affecting processing already completed.
        </p>
      </LegalSection>

      <LegalSection id="sharing" index="04" title="Services and sharing">
        <p>
          We disclose information to service providers only as needed for the
          purposes described above. They may process information under their own
          terms and privacy notices where they act independently.
        </p>
        <ul className="legal-provider-list">
          <li><strong>Supabase</strong><span>Authentication, cloud profiles, optional social-library sync, invitations, and profile-image storage.</span></li>
          <li><strong>PostHog</strong><span>Product analytics, app lifecycle measurement, and error diagnostics.</span></li>
          <li><strong>OneSignal</strong><span>Push delivery, device subscription management, and notification events.</span></li>
          <li><strong>RevenueCat, Apple, and Google</strong><span>Purchase processing, subscription status, entitlements, restores, and billing support. Joylogue does not receive your full payment-card details.</span></li>
          <li><strong>IGDB / Twitch</strong><span>Game search, artwork, release information, platforms, genres, and related metadata.</span></li>
          <li><strong>Google Gemini</strong><span>AI-assisted identification of the game discussed in a URL you submit. The URL and relevant extracted context may be sent to Google for this purpose.</span></li>
          <li><strong>Linked content providers</strong><span>Services such as YouTube, TikTok, Instagram, Steam, PlayStation, or Xbox may receive a server request when Joylogue resolves a link from that service.</span></li>
        </ul>
        <p>
          We may also disclose information when required by law, to respond to a
          valid legal request, to protect rights and safety, or in connection
          with a merger, financing, acquisition, or transfer of the Service. We
          will provide notice when legally required.
        </p>
      </LegalSection>

      <LegalSection id="friends" index="05" title="Friends and shared libraries">
        <p>
          Social features are optional. When you create an invite, a recipient
          with the link may see limited preview information such as your display
          name, profile image, visible game count, and selected game covers. An
          invite normally expires after 30 days and can be revoked or limited.
        </p>
        <p>
          Accepted friends may see the library information Joylogue syncs for
          sharing, including games, statuses, ratings, progress, and related
          timestamps. They may retain information they saw or captured. Removing
          or blocking a friend limits future access through Joylogue but cannot
          erase copies already made outside the Service.
        </p>
      </LegalSection>

      <LegalSection id="retention" index="06" title="Retention and security">
        <p>
          Local library data remains on your device until you remove it, clear
          the app&apos;s data, or uninstall the app. Exported backups are controlled
          by you and by whichever destination you choose in the system share
          sheet.
        </p>
        <p>
          Cloud profile and social data is retained while your account is active
          and for a limited period afterward when needed for security, dispute
          resolution, legal compliance, or backup integrity. Diagnostics and
          transaction records are retained according to operational and legal
          needs and the retention settings of the relevant provider. We delete
          or de-identify information when it is no longer needed.
        </p>
        <p>
          We use reasonable administrative and technical safeguards, including
          encrypted network transport, protected authentication storage, access
          controls, and database row-level security. No storage or transmission
          method is completely secure, so we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="deletion" index="07" title="Your choices and deletion">
        <ul>
          <li>Manage push permissions in your device settings.</li>
          <li>Edit your display name or profile image in Joylogue.</li>
          <li>Remove or block friends and stop creating new invite links.</li>
          <li>Export a local database backup using the in-app backup feature.</li>
          <li>Remove local-only data by deleting items, clearing Joylogue&apos;s app data, or uninstalling the app.</li>
        </ul>
        <div className="legal-callout legal-callout--action">
          <strong>Request account deletion</strong>
          <p>
            Email <a href="mailto:support@joylogue.app?subject=Delete%20my%20Joylogue%20account">support@joylogue.app</a> with the subject “Delete my Joylogue account.” We may ask for information needed to verify that the account is yours. After verification, we will delete or de-identify the cloud account and associated profile and social data, subject to limited legal and security retention.
          </p>
        </div>
        <p>
          Account deletion does not automatically erase local-only data or
          backups stored on your devices or with third parties. Remove the app or
          clear its local data separately, and delete exported backups from the
          locations where you saved them.
        </p>
      </LegalSection>

      <LegalSection id="rights" index="08" title="Privacy rights">
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, restrict, object to, or receive a portable copy of personal
          information, and to withdraw consent. You may also have the right to
          appeal a decision or complain to your local data-protection authority.
        </p>
        <p>
          Submit a request to <a href="mailto:support@joylogue.app?subject=Privacy%20request">support@joylogue.app</a>. We may verify your identity and will respond within the period required by applicable law. Authorized agents may submit requests where local law permits. We will not discriminate against you for exercising a privacy right.
        </p>
      </LegalSection>

      <LegalSection id="children" index="09" title="Children and transfers">
        <p>
          Joylogue is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13. If local law
          requires a higher age for independent consent, a parent or guardian
          must authorize use of connected features. Contact us if you believe a
          child provided information without appropriate permission.
        </p>
        <p>
          Joylogue and its providers may process information in countries other
          than your own. Where required, we use recognized transfer safeguards
          and require appropriate protection for personal information.
        </p>
      </LegalSection>

      <LegalSection id="changes" index="10" title="Changes and contact">
        <p>
          We may update this policy as Joylogue changes. We will change the date
          above and provide additional notice when an update materially affects
          your rights or how personal information is used.
        </p>
        <p>
          Privacy questions, requests, and complaints can be sent to
          <a href="mailto:support@joylogue.app"> support@joylogue.app</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
