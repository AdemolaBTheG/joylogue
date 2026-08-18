import Image from "next/image";
import Link from "next/link";

const features = [
  { number: "01", title: "Catch every recommendation", description: "Share a link from TikTok, YouTube, Instagram, or a store. Joylogue finds the game and puts it in your backlog." },
  { number: "02", title: "Make the backlog useful", description: "Tonight's Pick, quick wins, upcoming releases, and personal recommendations turn a pile of saves into a plan." },
  { number: "03", title: "Keep the whole story", description: "Track what you want to play, what is in progress, what you finished, and what was worth the hours." },
  { number: "04", title: "Compare notes with friends", description: "See shared games, current playthroughs, ratings, and overlap without turning your library into a public feed." },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;
}

function AppIcon({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "app-icon app-icon--small" : "app-icon"}>
      <Image alt="" aria-hidden="true" height={760} src="/joylogue/icon-symbol.png" width={760} />
    </span>
  );
}

function PhoneShot({ alt, className = "", priority = false, src }: { alt: string; className?: string; priority?: boolean; src: string }) {
  return (
    <div className={`phone-shot ${className}`}>
      <Image alt={alt} fill priority={priority} sizes="(max-width: 720px) 86vw, 520px" src={src} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Joylogue home"><AppIcon small /><span>Joylogue</span></a>
        <nav aria-label="Primary navigation"><a href="#how-it-works">How it works</a><a href="#friends">With friends</a></nav>
        <a className="header-cta" href="mailto:support@joylogue.app?subject=Joylogue%20beta">Get early access</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Your personal play log</p>
          <h1>Never lose your <span>next game.</span></h1>
          <p className="hero-lede">Save games the moment you find them. Play, finish, rate, and compare your backlog with friends.</p>
          <div className="hero-actions">
            <a className="button button--light" href="mailto:support@joylogue.app?subject=Joylogue%20beta">Join the beta <ArrowIcon /></a>
            <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Joylogue highlights">
            <span>iPhone beta</span><span>Private by default</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Joylogue Tonight's Pick screen">
          <PhoneShot alt="Joylogue choosing Portal 2 as Tonight's Pick" className="hero-phone" priority src="/joylogue/tonights-pick.png" />
          <p className="shot-caption">Tonight&apos;s Pick · Portal 2 · 3–4 hours</p>
        </div>
      </section>

      <section className="capture-section" id="how-it-works">
        <div className="section-index">01 / CAPTURE</div>
        <div className="capture-copy">
          <p className="eyebrow"><span /> Share it to Joylogue</p>
          <h2>See it.<br />Send it.<br /><em>Saved.</em></h2>
          <p>The games you discover between videos should not disappear between tabs. Share the link, confirm the match, and keep moving.</p>
          <div className="source-row" aria-label="Supported discovery sources"><span>TikTok</span><span>YouTube</span><span>Instagram</span><span>Stores</span></div>
        </div>
        <div className="capture-stage">
          <PhoneShot alt="Joylogue identifying Super Smash Bros. Ultimate from a YouTube link" className="capture-phone" src="/joylogue/link-capture.png" />
          <p className="shot-caption">Shared from YouTube · matched in seconds</p>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-heading"><p className="eyebrow"><span /> A backlog with a pulse</p><h2>Built for playing.<br />Not collecting dust.</h2></div>
        <div className="feature-list">
          {features.map((feature) => <article key={feature.number}><span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}
        </div>
      </section>

      <section className="friends-section" id="friends">
        <div className="friends-visual">
          <PhoneShot alt="A Joylogue friend profile comparing shared games and progress" className="friend-phone" src="/joylogue/friend-profile.png" />
          <p className="shot-caption">Shared games · ratings · current progress</p>
        </div>
        <div className="friends-copy">
          <div className="section-index">02 / TOGETHER</div>
          <p className="eyebrow"><span /> Backlogs are better shared</p>
          <h2>Compare taste.<br /><em>Not trophies.</em></h2>
          <p>Swap a private invite, see what you have in common, and find out what friends are actually playing. No follower counts. No performance.</p>
          <p className="friends-note"><strong>Quietly social.</strong> Your library is shared only with people you choose.</p>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-icon"><AppIcon /></div>
        <div><p className="eyebrow"><span /> iPhone beta · now inviting</p><h2>Your next favorite game<br />is already out there.</h2></div>
        <a className="button button--mint" href="mailto:support@joylogue.app?subject=Joylogue%20beta">Get early access <ArrowIcon /></a>
      </section>

      <footer>
        <a className="brand" href="#top"><AppIcon small /><span>Joylogue</span></a>
        <p>Save what you want to play. Remember what you loved.</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:support@joylogue.app">Contact</a>
          <span>© 2026 Joylogue</span>
        </div>
      </footer>
    </main>
  );
}
