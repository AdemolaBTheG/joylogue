import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SectionLink = {
  id: string;
  label: string;
};

export function LegalPage({
  children,
  eyebrow,
  lastUpdated,
  sections,
  summary,
  title,
}: {
  children: ReactNode;
  eyebrow: string;
  lastUpdated: string;
  sections: SectionLink[];
  summary: string;
  title: string;
}) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="Return to Joylogue home">
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
        <Link className="legal-back" href="/">
          <span aria-hidden="true">←</span> Back to the app
        </Link>
      </header>

      <section className="legal-hero">
        <div className="legal-grid" aria-hidden="true" />
        <div className="legal-hero-copy">
          <p className="eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
        </div>
        <div className="legal-stamp">
          <span>Last updated</span>
          <strong>{lastUpdated}</strong>
        </div>
      </section>

      <div className="legal-layout">
        <aside className="legal-toc" aria-label={`${title} contents`}>
          <p>On this page</p>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="legal-help">
            <span>Questions?</span>
            <a href="mailto:support@joylogue.app">support@joylogue.app</a>
          </div>
        </aside>

        <article className="legal-content">{children}</article>
      </div>

      <footer className="legal-footer">
        <Link className="brand" href="/">
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
        <nav aria-label="Legal links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:support@joylogue.app">Contact</a>
        </nav>
        <span>© 2026 Joylogue</span>
      </footer>
    </main>
  );
}

export function LegalSection({
  children,
  id,
  index,
  title,
}: {
  children: ReactNode;
  id: string;
  index: string;
  title: string;
}) {
  return (
    <section className="legal-section" id={id}>
      <div className="legal-section-heading">
        <span>{index}</span>
        <h2>{title}</h2>
      </div>
      <div className="legal-section-body">{children}</div>
    </section>
  );
}
