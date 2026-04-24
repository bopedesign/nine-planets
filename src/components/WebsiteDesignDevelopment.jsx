import Intro from './Intro.jsx';
import MoreThanDesign from './MoreThanDesign.jsx';
import Consult from './Consult.jsx';
import Process from './Process.jsx';
import Portfolio from './Portfolio.jsx';
import ServiceArea from './ServiceArea.jsx';
import Footer from './Footer.jsx';

const WebsiteDesignDevelopment = () => (
  <>
    <style dangerouslySetInnerHTML={{
      __html: `
        :root {
          --dark: #25272b;
          --dark-2: #1d1f23;
          --dark-3: #2e3035;
          --light: #f7f5f3;
          --light-2: #efece8;
          --light-3: #e4e0db;
          --accent: #d3326a;
          --accent-text: #bd285a;
          --accent-on-dark: #f0ddd0;
          --accent-soft: #f7e1ea;
          --muted-dark: #8a8d92;
          --muted-light: #5a5d62;
          --rule-dark: #3a3c40;
          --rule-light: #d9d5d0;
        }
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        body {
          font-family: 'Inter Tight', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
          background: var(--light);
          color: var(--dark);
          font-feature-settings: 'ss01', 'cv11';
          -webkit-font-smoothing: antialiased;
          font-weight: 400;
          line-height: 1.5;
        }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
        img { max-width: 100%; display: block; }

        .wrap {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .dashed-accent {
          height: 1px;
          background: repeating-linear-gradient(
            to right,
            var(--accent) 0,
            var(--accent) 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: 'uppercase';
          color: var(--accent-text);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          border-radius: 2px;
          transition: all 0.18s ease;
        }

        .btn-primary {
          background: var(--dark);
          color: var(--light);
        }

        .btn-primary:hover {
          background: #000;
        }

        .btn-light {
          background: var(--light);
          color: var(--dark);
        }

        .btn-light:hover {
          background: #fff;
        }

        .btn-ghost-dark {
          border: 1px solid var(--rule-dark);
          color: var(--light);
          background: transparent;
        }

        .btn-ghost-dark:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .btn-outline {
          border: 1px solid var(--dark);
          color: var(--dark);
          background: transparent;
        }

        .btn-outline:hover {
          background: var(--dark);
          color: var(--light);
        }

        .btn .arrow {
          display: inline-block;
          transition: transform 0.18s ease;
        }

        .btn:hover .arrow {
          transform: translateX(3px);
        }
      `
    }} />
    <Intro />
    <MoreThanDesign />
    <Consult />
    <Process />
    <Portfolio />
    <ServiceArea />
    <Footer />
  </>
);

export default WebsiteDesignDevelopment;