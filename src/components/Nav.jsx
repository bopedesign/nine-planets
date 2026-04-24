const Nav = ({ onDark = true }) => {
  const color = onDark ? 'var(--light)' : 'var(--dark)';
  const muted = onDark ? 'rgba(247,245,243,0.7)' : 'rgba(37,39,43,0.65)';
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 56px',
      maxWidth: 1680,
      margin: '0 auto',
      color,
      position: 'relative',
      zIndex: 5,
    }}>
      {/* Logo */}
      <a href="Home.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="images/logo.png" alt="9 Planets" style={{ height: 55, width: 'auto', display: 'block' }} />
      </a>

      {/* Menu */}
      <div style={{ display: 'flex', gap: 36, fontSize: 14, fontWeight: 500 }}>
        {['Home', 'Services', 'Portfolio', 'About', 'Blog'].map((item, i) => {
          const activeColor = onDark ? 'var(--accent-on-dark)' : 'var(--accent-text)';
          const href = item === 'Home' ? 'Home.html' : '#';
          return (
            <a key={item} href={href} style={{
              color: item === 'Services' ? activeColor : color,
              fontWeight: item === 'Services' ? 600 : 500,
              position: 'relative',
              paddingBottom: 2,
            }}>
              {item}
              {item === 'Services' && (
                <span style={{
                  position: 'absolute',
                  left: 0, right: 0, bottom: -6,
                  height: 1,
                  background: activeColor,
                }} />
              )}
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <a href="#" className={onDark ? 'btn btn-light' : 'btn btn-primary'} style={{ padding: '10px 18px', fontSize: 13, fontWeight: 600 }}>
        Contact
      </a>
    </nav>
  );
};

window.Nav = Nav;
