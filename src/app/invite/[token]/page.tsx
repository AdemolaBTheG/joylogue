import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const inviteTokenPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID?.trim();

export const metadata: Metadata = {
  title: "Friend Invite | Joylogue",
  description: "Open a private Joylogue friend invitation.",
  robots: {
    follow: false,
    index: false,
    nocache: true,
  },
  ...(appStoreId
    ? { other: { "apple-itunes-app": `app-id=${appStoreId}` } }
    : {}),
};

export default async function InvitePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const isValidToken = inviteTokenPattern.test(token);
  const appUrl = `joylogue://invite/${encodeURIComponent(token)}`;

  return (
    <main className="invite-page">
      <header className="invite-header">
        <Link className="brand" href="/" aria-label="Joylogue home">
          <span className="app-icon app-icon--small">
            <Image
              alt=""
              aria-hidden="true"
              height={760}
              src="/joylogue/icon-symbol.png"
              width={760}
            />
          </span>
          <span>Joylogue</span>
        </Link>
        <Link className="invite-home-link" href="/">
          About Joylogue
        </Link>
      </header>

      <section className="invite-shell">
        <div className="invite-copy">
          <p className="eyebrow"><span /> Private friend invite</p>
          <h1>
            {isValidToken ? "Compare backlogs." : "Invite unavailable."}{" "}
            <span>{isValidToken ? "Find the overlap." : "Check the link."}</span>
          </h1>
          <p className="invite-lede">
            {isValidToken
              ? "A friend invited you to connect on Joylogue. Open the app to see what you both want to play, compare ratings, and respond privately."
              : "This Joylogue invitation is incomplete or malformed. Ask your friend to create a fresh link from the Share Invite screen."}
          </p>

          <div className="invite-actions">
            {isValidToken ? (
              <a className="button button--light" href={appUrl}>
                Open Joylogue
                <svg aria-hidden="true" viewBox="0 0 20 20">
                  <path d="M4 10h11M11 5l5 5-5 5" />
                </svg>
              </a>
            ) : null}
            <Link className="invite-secondary" href="/">
              Learn about Joylogue
            </Link>
          </div>

          <p className="invite-note">
            Invite links expire after 30 days and can only be accepted inside
            Joylogue.
          </p>
        </div>

        <aside className="invite-card" aria-label="Joylogue invite status">
          <span className="invite-card-label">Friend invite</span>
          <span className="app-icon invite-card-icon">
            <Image
              alt="Joylogue"
              height={760}
              src="/joylogue/icon-symbol.png"
              width={760}
            />
          </span>
          <div>
            <strong>{isValidToken ? "Ready to open" : "Link unavailable"}</strong>
            <p>
              {isValidToken
                ? "Your invite details stay inside the app."
                : "No account or invite information was loaded."}
            </p>
          </div>
        </aside>
      </section>

      <footer className="invite-footer">
        <span>© 2026 Joylogue</span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </footer>
    </main>
  );
}
