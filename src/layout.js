/** @jsx jsx */
import { jsx, useColorMode, NavLink, useThemeUI } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  FaArrowRight as ArrowRight,
  FaArrowLeft as ArrowLeft,
} from 'react-icons/fa';
import Avatar from './avatar';
import { Fragment, useState, useEffect, useCallback, useRef } from 'react';

const allModes = {
  light: { bg: '#fff', text: '#111', accent: '#e2e2e2', label: 'Light theme' },
  black: {
    bg: '#0a0a0a',
    text: '#f8f8f8',
    accent: '#2a2a2a',
    label: 'Black theme',
  },
  dark: {
    bg: 'hsl(180, 6%, 16%)',
    text: '#f5f5f5',
    accent: 'hsl(180, 6%, 26%)',
    label: 'Dark theme',
  },
  deep: {
    bg: 'hsl(230, 28%, 19%)',
    text: '#f8f8f8',
    accent: 'hsl(230, 28%, 29%)',
    label: 'Deep theme',
  },
  hack: {
    bg: '#171923',
    text: '#68d391',
    accent: '#2d3748',
    label: 'Hack theme',
  },
  pink: {
    bg: '#fff5f7',
    text: '#4a1a35',
    accent: '#fed7e2',
    label: 'Pink theme',
  },
};

const smallBtnStyle = {
  appearance: 'none',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '3px',
  height: '24px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '10px',
  fontWeight: 700,
  fontFamily: 'body',
  p: 0,
  px: '6px',
  bg: 'transparent',
  color: 'text',
  opacity: 0.7,
  ':hover': {
    opacity: 1,
  },
};

const TopBar = () => {
  const [mode, setMode] = useColorMode();
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [adhdMode, setAdhdMode] = useState(false);
  const [epilepticMode, setEpilepticMode] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const topBarRef = useRef(null);

  useEffect(() => {
    if (!expanded) return;
    const handleClick = (e) => {
      if (topBarRef.current && !topBarRef.current.contains(e.target))
        setExpanded(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [expanded]);

  const changeFontSize = useCallback((delta) => {
    setFontSize((prev) => {
      const next = Math.min(150, Math.max(80, prev + delta));
      if (next === 100) {
        const el = document.getElementById('a11y-font-styles');
        if (el) el.remove();
      } else {
        let el = document.getElementById('a11y-font-styles');
        if (!el) {
          el = document.createElement('style');
          el.id = 'a11y-font-styles';
          document.head.appendChild(el);
        }
        el.textContent = `body { zoom: ${next / 100} !important; }`;
      }
      return next;
    });
  }, []);

  const toggleContrast = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev;
      document.documentElement.style.filter = next
        ? 'contrast(150%) brightness(1.2)'
        : 'none';
      return next;
    });
  }, []);

  const toggleAdhd = useCallback(() => {
    setAdhdMode((prev) => {
      const next = !prev;
      if (next) {
        const overlay = document.createElement('div');
        overlay.id = 'adhd-focus-overlay';
        const initTop = window.innerHeight * 0.7 - 50;
        overlay.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:8000;background:linear-gradient(to bottom,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) ${initTop}px,transparent ${initTop}px,transparent ${
          initTop + 100
        }px,rgba(0,0,0,0.8) ${initTop + 100}px,rgba(0,0,0,0.8) 100%);`;
        document.body.appendChild(overlay);
        let rafId = null;
        const onMove = (e) => {
          if (rafId) return;
          rafId = requestAnimationFrame(() => {
            const t = Math.max(
              0,
              Math.min(e.clientY - 50, window.innerHeight - 100)
            );
            overlay.style.background = `linear-gradient(to bottom,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) ${t}px,transparent ${t}px,transparent ${
              t + 100
            }px,rgba(0,0,0,0.8) ${t + 100}px,rgba(0,0,0,0.8) 100%)`;
            rafId = null;
          });
        };
        document.addEventListener('mousemove', onMove, { passive: true });
        overlay.cleanup = () => {
          if (rafId) cancelAnimationFrame(rafId);
          document.removeEventListener('mousemove', onMove);
        };
      } else {
        const overlay = document.getElementById('adhd-focus-overlay');
        if (overlay) {
          if (overlay.cleanup) overlay.cleanup();
          overlay.remove();
        }
      }
      return next;
    });
  }, []);

  const toggleEpileptic = useCallback(() => {
    setEpilepticMode((prev) => {
      const next = !prev;
      const root = document.documentElement;
      if (next) {
        root.classList.add('epileptic-safe');
        if (!document.getElementById('epileptic-safe-styles')) {
          const s = document.createElement('style');
          s.id = 'epileptic-safe-styles';
          s.textContent = `.epileptic-safe *{animation:none!important;transition:none!important}.epileptic-safe video,.epileptic-safe img[src*=".gif"]{filter:grayscale(100%)!important}.epileptic-safe{filter:saturate(50%)!important}`;
          document.head.appendChild(s);
        }
      } else {
        root.classList.remove('epileptic-safe');
        const s = document.getElementById('epileptic-safe-styles');
        if (s) s.remove();
      }
      return next;
    });
  }, []);

  const currentColors = allModes[mode] || allModes.light;

  const themeButtons = Object.entries(allModes).map(([name, colors]) => (
    <button
      key={name}
      onClick={() => setMode(name)}
      title={colors.label}
      aria-label={colors.label}
      sx={{
        appearance: 'none',
        border: '1px solid',
        borderColor: mode === name ? colors.text : 'transparent',
        borderRadius: '3px',
        width: '24px',
        height: '24px',
        bg: colors.bg,
        color: colors.text,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        fontWeight: 700,
        fontFamily: 'body',
        p: 0,
        opacity: mode === name ? 1 : 0.6,
        ':hover': {
          opacity: 1,
          borderColor: colors.text,
        },
      }}
    >
      A
    </button>
  ));

  const a11yButtons = (
    <Fragment>
      <button
        onClick={() => changeFontSize(-10)}
        title="Decrease text size"
        aria-label={`Decrease text size (${fontSize}%)`}
        sx={smallBtnStyle}
      >
        A-
      </button>
      <button
        onClick={() => changeFontSize(10)}
        title="Increase text size"
        aria-label={`Increase text size (${fontSize}%)`}
        sx={smallBtnStyle}
      >
        A+
      </button>
      <button
        onClick={toggleContrast}
        title={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
        aria-label={
          highContrast ? 'Disable high contrast' : 'Enable high contrast'
        }
        aria-pressed={highContrast}
        sx={{
          ...smallBtnStyle,
          opacity: highContrast ? 1 : 0.6,
          color: 'text',
        }}
      >
        HC
      </button>
      <button
        onClick={toggleAdhd}
        title={adhdMode ? 'Disable ADHD focus mode' : 'Enable ADHD focus mode'}
        aria-label={
          adhdMode ? 'Disable ADHD focus mode' : 'Enable ADHD focus mode'
        }
        aria-pressed={adhdMode}
        sx={{
          ...smallBtnStyle,
          opacity: adhdMode ? 1 : 0.6,
          color: 'text',
        }}
      >
        FO
      </button>
      <button
        onClick={toggleEpileptic}
        title={
          epilepticMode
            ? 'Disable epilepsy-safe mode'
            : 'Enable epilepsy-safe mode'
        }
        aria-label={
          epilepticMode
            ? 'Disable epilepsy-safe mode'
            : 'Enable epilepsy-safe mode'
        }
        aria-pressed={epilepticMode}
        sx={{
          ...smallBtnStyle,
          opacity: epilepticMode ? 1 : 0.6,
          color: 'text',
        }}
      >
        ES
      </button>
    </Fragment>
  );

  return (
    <div
      ref={topBarRef}
      sx={{
        position: 'fixed',
        top: 3,
        right: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '4px',
        zIndex: 1000,
      }}
    >
      {/* Collapsed toggle - small screens only */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? 'Close settings' : 'Open settings'}
        aria-expanded={expanded}
        sx={{
          display: ['flex', 'none', 'none'],
          appearance: 'none',
          border: '1px solid',
          borderColor: 'transparent',
          borderRadius: '3px',
          width: '24px',
          height: '24px',
          bg: currentColors.text,
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
          fontWeight: 700,
          fontFamily: 'body',
          color: currentColors.bg,
          p: 0,
          transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
          ':active': {
            transform: 'scale(0.9)',
          },
        }}
      >
        A
      </button>

      {/* Expanded panel - small screens */}
      <div
        sx={{
          display: [expanded ? 'flex' : 'none', 'none', 'none'],
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '4px',
          overflow: 'hidden',
          opacity: expanded ? 1 : 0,
          transform: expanded ? 'translateY(0)' : 'translateY(-8px)',
          transition:
            'opacity 200ms cubic-bezier(0.23, 1, 0.32, 1), transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px',
            bg: currentColors.accent,
            p: '4px',
            borderRadius: '5px',
          }}
        >
          {a11yButtons}
        </div>
        <div
          sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}
        >
          {themeButtons}
        </div>
      </div>

      {/* Desktop - always visible */}
      <div sx={{ display: ['none', 'flex', 'flex'], gap: '4px' }}>
        {themeButtons}
      </div>
      <div
        sx={{
          display: ['none', 'flex', 'flex'],
          gap: '4px',
          bg: currentColors.accent,
          p: '4px',
          borderRadius: '5px',
        }}
      >
        {a11yButtons}
      </div>
    </div>
  );
};

const Draft = () => (
  <div
    sx={{
      p: 3,
      my: 4,
      fontWeight: 'bold',
      color: 'background',
      bg: 'text',
    }}
  >
    Draft - this may not be ready for primetime.
  </div>
);

const navLinkStyle = {
  variant: 'styles.navlink',
  display: 'block',
  fontSize: 2,
  py: '2px',
};

const parentRoutes = {
  '/archive/': { label: 'Archive', to: '/archive' },
  '/notes/': { label: 'Notes', to: '/notes' },
};

const getBackLink = (pathname) => {
  for (const [prefix, info] of Object.entries(parentRoutes)) {
    if (pathname.startsWith(prefix) && pathname !== prefix) {
      return info;
    }
  }
  return { label: 'Back', to: '/' };
};

const SidebarNav = ({ query, isHome, pathname }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  const links = (
    <Fragment>
      <NavLink as={Link} to="/projects" sx={navLinkStyle}>
        Projects <ArrowRight size={10} sx={{ opacity: 0.4, ml: 1 }} />
      </NavLink>
      <NavLink as={Link} to="/notes" sx={navLinkStyle}>
        Notes <ArrowRight size={10} sx={{ opacity: 0.4, ml: 1 }} />
      </NavLink>
      <NavLink as={Link} to="/archive" sx={navLinkStyle}>
        Archive <ArrowRight size={10} sx={{ opacity: 0.4, ml: 1 }} />
      </NavLink>
      <NavLink as={Link} to="/music" sx={navLinkStyle}>
        Music <ArrowRight size={10} sx={{ opacity: 0.4, ml: 1 }} />
      </NavLink>
      <NavLink as={Link} to="/about" sx={navLinkStyle}>
        About <ArrowRight size={10} sx={{ opacity: 0.4, ml: 1 }} />
      </NavLink>
    </Fragment>
  );

  return (
    <nav
      ref={navRef}
      sx={{
        flexShrink: 0,
        width: ['100%', '100%', '180px'],
        mb: [4, 4, 0],
        position: ['static', 'static', 'sticky'],
        top: [0, 0, 5],
        alignSelf: 'flex-start',
      }}
    >
      {isHome ? (
        <Fragment>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <NavLink
              as={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: [0, 0, 3],
                color: 'text',
                textDecoration: 'none',
              }}
            >
              <GatsbyImage
                image={query.avatar.childImageSharp.gatsbyImageData}
                alt="Ahmad Atallah"
                imgStyle={{ borderRadius: '50%' }}
                sx={{
                  width: '44px',
                  height: '44px',
                  flexShrink: 0,
                  borderRadius: '50%',
                }}
              />
              <Avatar />
            </NavLink>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              sx={{
                display: ['flex', 'flex', 'none'],
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                appearance: 'none',
                bg: 'transparent',
                border: 'none',
                cursor: 'pointer',
                p: 1,
                width: '28px',
                height: '28px',
                gap: 0,
                transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
                ':active': {
                  transform: 'scale(0.9)',
                },
                '@media (prefers-reduced-motion: reduce)': {
                  '& span': {
                    transition: 'none',
                  },
                },
              }}
            >
              <span
                sx={{
                  display: 'block',
                  width: '18px',
                  height: '2px',
                  bg: 'text',
                  borderRadius: '1px',
                  transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: open
                    ? 'translateY(3px) rotate(45deg)'
                    : 'translateY(-1.5px) rotate(0)',
                }}
              />
              <span
                sx={{
                  display: 'block',
                  width: '18px',
                  height: '2px',
                  bg: 'text',
                  borderRadius: '1px',
                  transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: open
                    ? 'translateY(1px) rotate(-45deg)'
                    : 'translateY(1.5px) rotate(0)',
                }}
              />
            </button>
          </div>
          {/* Links visible on desktop always */}
          <div sx={{ display: ['none', 'none', 'block'], mt: 0 }}>{links}</div>
          {/* Collapsible links on small screens */}
          <div
            sx={{
              display: ['block', 'block', 'none'],
              mt: 2,
              pb: 2,
              borderBottom: open ? '1px solid' : 'none',
              borderColor: 'muted',
              overflow: 'hidden',
              visibility: open ? 'visible' : 'hidden',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(-8px)',
              maxHeight: open ? '300px' : '0px',
              transition:
                'opacity 200ms cubic-bezier(0.23, 1, 0.32, 1), transform 200ms cubic-bezier(0.23, 1, 0.32, 1), max-height 200ms cubic-bezier(0.23, 1, 0.32, 1), visibility 0ms linear ' +
                (open ? '0ms' : '200ms'),
              '& a': {
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(-4px)',
                transition:
                  'opacity 200ms cubic-bezier(0.23, 1, 0.32, 1), transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
              },
              '& a:nth-of-type(1)': { transitionDelay: open ? '40ms' : '0ms' },
              '& a:nth-of-type(2)': { transitionDelay: open ? '80ms' : '0ms' },
              '& a:nth-of-type(3)': { transitionDelay: open ? '120ms' : '0ms' },
              '& a:nth-of-type(4)': { transitionDelay: open ? '160ms' : '0ms' },
              '& a:nth-of-type(5)': { transitionDelay: open ? '200ms' : '0ms' },
              '@media (prefers-reduced-motion: reduce)': {
                transform: 'none',
                transition:
                  'opacity 150ms ease, max-height 150ms ease, visibility 0ms linear ' +
                  (open ? '0ms' : '150ms'),
                '& a': {
                  transform: 'none',
                  transition: 'opacity 150ms ease',
                },
              },
            }}
          >
            {links}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <NavLink
              as={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                color: 'text',
                textDecoration: 'none',
              }}
            >
              <GatsbyImage
                image={query.avatar.childImageSharp.gatsbyImageData}
                alt="Ahmad Atallah"
                imgStyle={{ borderRadius: '50%' }}
                sx={{
                  width: '44px',
                  height: '44px',
                  flexShrink: 0,
                  borderRadius: '50%',
                }}
              />
              <Avatar />
            </NavLink>
          </div>
          <NavLink
            as={Link}
            to={getBackLink(pathname).to}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              color: 'text',
              textDecoration: 'none',
              fontSize: 1,
              opacity: 0.6,
              ':hover': {
                opacity: 1,
              },
            }}
          >
            <ArrowLeft size={12} />
            {getBackLink(pathname).label}
          </NavLink>
        </Fragment>
      )}
    </nav>
  );
};

export default (props) => {
  const title = props.pageContext?.frontmatter?.title;
  let date = props.pageContext?.frontmatter?.date;
  const minRead = props.pageContext?.frontmatter?.minRead;

  if (date)
    date = new Date(date).toLocaleDateString('en-US', {
      timeZone: 'UTC',
    });
  const draft = props.pageContext?.frontmatter?.draft;

  const query = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resumelatest" }) {
        name
        extension
        publicURL
      }
      avatar: file(name: { eq: "about-img" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 80)
        }
      }
    }
  `);

  return (
    <Fragment>
      {/* Skip Navigation */}
      <div
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 100000,
          '& a': {
            position: 'absolute',
            left: '-10000px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          },
          '& a:focus': {
            position: 'fixed',
            top: '10px',
            left: '10px',
            width: 'auto',
            height: 'auto',
            padding: '8px 12px',
            backgroundColor: 'text',
            color: 'background',
            textDecoration: 'none',
            fontSize: 0,
            zIndex: 100001,
          },
        }}
      >
        <a href="#main-content">Skip to main content</a>
      </div>

      <TopBar />

      <div
        sx={{
          variant: 'styles.root',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          maxWidth: '960px',
          mx: 'auto',
          px: [3, 3, 4],
          transitionProperty: 'background-color, color',
          transitionTimingFunction: 'ease-out',
          transitionDuration: '.4s',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            gap: [0, 0, 5],
            pt: [3, 4, 5],
            flex: '1 1 auto',
          }}
        >
          {/* Sidebar Nav */}
          <SidebarNav
            query={query}
            isHome={props.location?.pathname === '/'}
            pathname={props.location?.pathname || '/'}
          />

          {/* Main Content */}
          <main
            id="main-content"
            role="main"
            sx={{
              flex: '1 1 auto',
              minWidth: 0,
              pb: 5,
            }}
          >
            {draft && <Draft />}
            {title && (
              <h1
                sx={{
                  fontSize: 5,
                  fontWeight: 900,
                  lineHeight: 'heading',
                  mt: 0,
                  mb: 2,
                }}
              >
                {title}
              </h1>
            )}

            {(date || minRead) && (
              <div
                sx={{
                  fontSize: 0,
                  color: 'gray',
                  mb: 4,
                }}
              >
                {date} {minRead && `- ${minRead} min read`}
              </div>
            )}

            {props.children}
          </main>
        </div>

        <footer
          id="footer-navigation"
          sx={{
            py: 4,
            borderTop: '1px solid',
            borderColor: 'muted',
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap',
              gap: 2,
              fontSize: 0,
              color: 'gray',
            }}
          >
            <div sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <a
                href="mailto:hi@atallahsan.cc"
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                Email
              </a>
              <a
                href="https://github.com/ahmadatallah"
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/ahmad.atallah/"
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-atallah-7ba192392/"
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                LinkedIn
              </a>
              <a
                href={query.pdf.publicURL}
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                Resume
              </a>
              <NavLink
                as={Link}
                to="/license"
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                License
              </NavLink>
              <NavLink
                as={Link}
                to="/accessibility-statement"
                sx={{ variant: 'styles.navlink', fontSize: 0 }}
              >
                Accessibility
              </NavLink>
            </div>
            <NavLink
              as={Link}
              to="/"
              sx={{
                color: 'text',
                textDecoration: 'none',
                opacity: 0.6,
                ':hover': { opacity: 1 },
              }}
            >
              <Avatar />
            </NavLink>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};
