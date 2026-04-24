const Hero = () => {
  return (
    <section style={{
      background: 'var(--dark)',
      color: 'var(--light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial glow top-right */}
      <div style={{
        position: 'absolute',
        top: -200, right: -150,
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(211,50,106,0.18) 0%, transparent 60%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />
      {/* Subtle dark gradient bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: -100, left: -100,
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <Nav onDark />

      <div className="wrap" style={{ position: 'relative', padding: '90px 56px 0' }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontSize: 12,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(247,245,243,0.7)',
          marginBottom: 28,
        }}>
          <span>Services</span>
          <span style={{ color: 'var(--accent-on-dark)' }}>/</span>
          <span style={{ color: 'var(--light)' }}>Website Design & Development</span>
        </div>

        {/* Title block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end', paddingBottom: 70 }}>
          <div>
            <h1 style={{
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: '-0.028em',
              fontWeight: 400,
              margin: 0,
              textWrap: 'balance',
            }}>
              Your website is a<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>marketing </span>
              &amp; <span style={{ fontStyle: 'italic', fontWeight: 300 }}>sales</span> tool.
            </h1>
          </div>
          <div style={{ paddingBottom: 12, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'left', maxWidth: 560 }}>
              <p style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(247,245,243,0.8)',
                margin: 0,
              }}>
                But only if it's used effectively. We build sites designed around your goals, your audience, and the outcomes you actually care about.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip — matches homepage */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--rule-dark)',
        }}>
          {[
            { label: 'Get a quote', sub: 'Priced to your scope' },
            { label: 'Our process', sub: 'Seven steps from brief to launch' },
            { label: 'Questions?', sub: 'Schedule a free consult' },
          ].map((cta, i) => (
            <a key={i} href="#" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '28px 28px 28px 0',
              paddingLeft: i === 0 ? 0 : 32,
              borderLeft: i === 0 ? 'none' : '1px solid var(--rule-dark)',
              color: 'var(--light)',
              transition: 'background .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 4 }}>{cta.label}</div>
                <div style={{ fontSize: 13, color: 'rgba(247,245,243,0.7)' }}>{cta.sub}</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: 'var(--accent-on-dark)' }}>
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
