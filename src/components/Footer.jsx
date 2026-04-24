export default () => {
  return (
    <footer style={{ background: 'var(--dark)', color: 'var(--light)', padding: '80px 0 40px' }}>
      <div className="wrap">
        {/* Top: giant CTA */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: 60,
          alignItems: 'end',
          paddingBottom: 60,
          borderBottom: '1px solid var(--rule-dark)',
        }}>
          <h2 style={{
            fontSize: 64,
            lineHeight: 1.02,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: 0,
            textWrap: 'balance',
          }}>
            Ready to build a<br />
            website that <span style={{ fontStyle: 'italic', fontWeight: 300 }}>works</span>?
          </h2>
          <div style={{ display: 'flex', gap: 12, paddingBottom: 12, justifyContent: 'flex-end' }}>
            <a href="#" className="btn btn-light">
              <span>Start a project</span>
              <span className="arrow">→</span>
            </a>
            <a href="#" className="btn btn-ghost-dark">
              <span>Contact</span>
            </a>
          </div>
        </div>

        {/* Mid: links + contact */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          padding: '60px 0 40px',
        }}>
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <img src="images/logo.png" alt="9 Planets" style={{ height: 70, width: 'auto', display: 'block' }} />
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(247,245,243,0.75)', margin: 0, maxWidth: 340 }}>
              Websites, marketing, and support for small businesses across Oregon and beyond. Based in Eugene since 2011.
            </p>
          </div>

          {[
            {
              title: 'Services',
              links: ['Website Design & Dev', 'Digital Marketing & SEO', 'Accessibility', 'Tech Support', 'Hosting & Domains'],
            },
            {
              title: 'Company',
              links: ['About', 'Portfolio', 'Blog', 'Careers', 'Press'],
            },
            {
              title: 'Contact',
              links: ['hello@nineplanets.co', '541-555-0142', 'Eugene, OR', 'Schedule a consult', 'LinkedIn'],
            },
          ].map((col, i) => (
            <div key={i}>
              <div style={{
                fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--accent-on-dark)', marginBottom: 20,
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                {col.links.map((l, j) => (
                  <a key={j} href="#" style={{ color: 'rgba(247,245,243,0.85)', transition: 'color .15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-on-dark)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,245,243,0.85)'}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: legal */}
        <div style={{
          borderTop: '1px solid var(--rule-dark)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 13,
          color: 'rgba(247,245,243,0.7)',
        }}>
          <div>© 2026 Nine Planets. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms</a>
            <a href="#" style={{ color: 'inherit' }}>Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
