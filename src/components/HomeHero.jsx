import { Link } from 'react-router-dom';

export default () => {
  const ctas = [
    { label: 'Get a Quote', sub: 'When you are ready to move' },
    { label: 'Our Process', sub: 'How we make your vision work' },
    { label: 'Questions?',  sub: 'We are here to help find answers' },
  ];

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--dark)',
      color: 'var(--light)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("images/heroBackground-100.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />
      {/* Subtle darkening for legibility on the left */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(20,22,25,0.55) 0%, rgba(20,22,25,0.25) 45%, rgba(20,22,25,0.0) 75%)',
        pointerEvents: 'none',
      }} />
      {/* Faint accent glow top-right to tie into brand */}
      <div style={{
        position: 'absolute',
        top: -220, right: -180,
        width: 720, height: 720,
        background: 'radial-gradient(circle, rgba(211,50,106,0.10) 0%, transparent 62%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />

      {/* Top nav — reuse existing Nav, but override menu to match screenshot */}
      <div style={{ position: 'relative', zIndex: 5 }}>
        <HomeNav />
      </div>

      {/* Main content, vertically centered */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        <div className="wrap" style={{ width: '100%' }}>
          {/* Full-width two-line headline */}
          <h1 style={{
            fontSize: 92,
            lineHeight: 1.04,
            letterSpacing: '-0.028em',
            fontWeight: 400,
            margin: '0 0 56px 0',
            color: 'var(--light)',
          }}>
            A better website starts<br />
            with the{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>right approach</span>.
          </h1>

          {/* Support block — right-aligned under the headline */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: 460 }}>
              <p style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: 'rgba(247,245,243,0.82)',
                margin: '0 0 32px 0',
              }}>
                We plan every project like an architect, aligning strategy,
                design, and development to create a site that makes a
                measurable difference for your business.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
              }}>
                {['Eugene, OR', 'Detroit, MI', '& Beyond'].map((loc) => (
                  <div key={loc}>
                    <div style={{
                      height: 1,
                      background: 'var(--accent)',
                      width: 28,
                      marginBottom: 14,
                    }} />
                    <div style={{
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: '-0.005em',
                      color: 'var(--light)',
                    }}>
                      {loc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid rgba(247,245,243,0.12)',
          }}>
            {ctas.map((cta, i) => (
              <a
                key={cta.label}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '30px 28px 30px',
                  paddingLeft: i === 0 ? 0 : 32,
                  paddingRight: i === 2 ? 0 : 32,
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(247,245,243,0.12)',
                  color: 'var(--light)',
                  transition: 'background .2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  const arrow = e.currentTarget.querySelector('.cta-arrow');
                  if (arrow) arrow.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  const arrow = e.currentTarget.querySelector('.cta-arrow');
                  if (arrow) arrow.style.transform = 'translateX(0)';
                }}
              >
                <div>
                  <div style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--light)',
                    marginBottom: 8,
                  }}>
                    {cta.label}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: 'rgba(247,245,243,0.65)',
                    fontWeight: 400,
                  }}>
                    {cta.sub}
                  </div>
                </div>
                <svg
                  className="cta-arrow"
                  width="22" height="22" viewBox="0 0 22 22" fill="none"
                  style={{
                    color: 'var(--accent)',
                    transition: 'transform .2s ease',
                    flexShrink: 0,
                  }}
                >
                  <path d="M4 11h13M12 6l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" fill="none" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Home-specific nav — logo + centered menu + "Get a Quote" pill.
   Matches the screenshot rather than reusing the Services nav exactly. */
const HomeNav = () => {
  const items = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '#',
      children: [
        { label: 'Website Design & Development', href: '/website-design-development' },
        { label: 'Brand & Identity',             href: '#' },
        { label: 'SEO & Content Strategy',       href: '#' },
        { label: 'Ongoing Support',              href: '#' },
      ],
    },
    { label: 'Portfolio', href: '#' },
    { label: 'About',     href: '#' },
    { label: 'Blog',      href: '#' },
  ];
  const [openMenu, setOpenMenu] = React.useState(null);
  return (
    <nav style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '26px 56px',
      maxWidth: 1680,
      margin: '0 auto',
      color: 'var(--light)',
    }}>
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, justifySelf: 'start' }}>
        <img src="images/logo.png" alt="9 Planets" style={{ height: 64, width: 'auto', display: 'block' }} />
      </a>

      {/* Menu */}
      <div style={{ display: 'flex', gap: 36, fontSize: 14, fontWeight: 500, justifySelf: 'center' }}>
        {items.map((item) => {
          const isActive = item.label === 'Home';
          const hasDropdown = Array.isArray(item.children) && item.children.length > 0;
          const isOpen = openMenu === item.label;
          return (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
              onMouseLeave={() => hasDropdown && setOpenMenu(null)}
            >
              <a
                href={item.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: isActive ? 'var(--light)' : 'rgba(247,245,243,0.82)',
                  fontWeight: isActive ? 600 : 400,
                  paddingBottom: 2,
                  transition: 'color .15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-on-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--light)' : 'rgba(247,245,243,0.82)')}
              >
                {item.label}
                {hasDropdown && (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform .18s ease',
                    opacity: 0.85,
                  }}>
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" fill="none" />
                  </svg>
                )}
              </a>

              {hasDropdown && isOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 14px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  minWidth: 280,
                  background: 'var(--dark-2)',
                  border: '1px solid rgba(247,245,243,0.08)',
                  borderRadius: 2,
                  boxShadow: '0 20px 40px -12px rgba(0,0,0,0.5)',
                  padding: '8px 0',
                  zIndex: 20,
                }}>
                  {/* Invisible hover bridge so dropdown doesn't flicker */}
                  <div style={{
                    position: 'absolute',
                    top: -14, left: 0, right: 0, height: 14,
                  }} />
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'rgba(247,245,243,0.85)',
                        transition: 'background .15s ease, color .15s ease',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                        e.currentTarget.style.color = 'var(--accent-on-dark)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(247,245,243,0.85)';
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="#"
        style={{
          justifySelf: 'end',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '12px 22px',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '-0.005em',
          background: 'var(--light-2)',
          color: 'var(--dark)',
          borderRadius: 2,
          transition: 'background .18s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--light)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--light-2)')}
      >
        Get a Quote
      </a>
    </nav>
  );
};
