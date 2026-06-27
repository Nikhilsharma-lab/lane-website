export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-name">
              <svg className="footer-icon" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M0 100V0H93.2753L0 100Z" fill="currentColor" />
                <path d="M0 100H100V6.7247L0 100Z" fill="currentColor" />
              </svg>
              Lane
            </span>
            <p className="footer-tagline">Design-ops without the surveillance.</p>
            <p className="footer-desc">Lane turns design requests into the real problem, proves the impact with the person who asked, and refuses to track the people doing the work.</p>
            <a className="btn btn-primary footer-cta" href="#waitlist">Join the waitlist</a>
            <div className="footer-legal">
              <span>&copy; 2026 Lane &middot; all rights reserved</span>
              <span>Built by <a href="https://x.com/thesharmaxp" target="_blank" rel="noopener noreferrer">@thesharmaxp</a></span>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-h">Explore</span>
              <a href="#how-it-works">How it works</a>
              <a href="#refusal">What we refuse</a>
              <a href="#waitlist">Waitlist</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-h">Elsewhere</span>
              <a href="https://x.com/thesharmaxp" target="_blank" rel="noopener noreferrer">@thesharmaxp</a>
              <a href="https://uselane.app" target="_blank" rel="noopener noreferrer">uselane.app</a>
            </div>
          </div>
        </div>

        <a className="footer-wordmark" href="#top" aria-label="Lane — back to top">
          <svg className="logo" viewBox="0 0 492 101" fill="none" aria-hidden="true">
            <path d="M0 100V0H93.2753L0 100Z" fill="currentColor" />
            <path d="M0 100H100V6.7247L0 100Z" fill="currentColor" />
            <path d="M123 100.231V0H137.823V94.5839L128.788 86.2549H185.679V100.231H123Z" fill="currentColor" />
            <path d="M197.2 100.231L226.564 0H245.763L275.126 100.231H259.739L236.163 15.3875L212.588 100.231H197.2ZM213.576 74.1142L218.093 60.4208H254.233L258.75 74.1142H213.576Z" fill="currentColor" />
            <path d="M288.059 100.231V0H306.128L339.021 79.1964V0H353.561V100.231H335.492L302.599 21.0343V100.231H288.059Z" fill="currentColor" />
            <path d="M375.529 100.231V0H437.079V13.9758H390.352V43.198H435.385V56.7503H390.352V86.2549H438.208V100.231H375.529Z" fill="currentColor" />
            <rect x="462" y="70" width="30" height="30" fill="currentColor" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
