/** @jsx jsx */
import { jsx, useColorMode, NavLink, Text } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Avatar from './avatar';
import border from './images/border.svg';
import AccessibilityWidget from './components/accessibility-widget';

import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaEnvelope as Email,
} from 'react-icons/fa';
import { Fragment } from 'react';

const modes = ['light', 'black', 'dark', 'deep', 'hack', 'pink'];

const ColorButton = ({ mode, ...props }) => (
  <button
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      },
    }}
  >
    <svg
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentcolor"
      sx={{
        display: 'block',
      }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>
);

const Draft = () => (
  <div
    sx={{
      p: 3,
      my: 4,
      fontWeight: 'bold',
      color: 'background',
      bg: 'accent',
    }}
  >
    ⚠️ You are viewing an draft post, and this may not be ready for primetime.
  </div>
);

export default (props) => {
  const [mode, setMode] = useColorMode();
  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };
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
    }
  `);

  return (
    <Fragment>
      {/* Skip Navigation Links */}
      <div
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
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
            top: '30px',
            left: '8px',
            width: 'auto',
            height: 'auto',
            padding: '12px 16px',
            backgroundColor: 'primary',
            color: 'background',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '14px',
            border: '2px solid',
            borderColor: 'background',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            zIndex: 100001,
          },
        }}
      >
        <a href="#main-content">Skip to main content</a>
        <a href="#footer-navigation">Skip to footer</a>
        <a href="#accessibility-widget">Skip to accessibility options</a>
      </div>

      <div
        sx={{
          variant: 'styles.root',
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <header
          sx={{
            width: '100%',
            height: '50px',
            backdropFilter: 'blur(5px)',
            flexShrink: 0,
            display: 'flex',
            position: 'sticky',
            top: '0',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            mx: 'auto',
            px: 3,
            py: 4,
            borderTopStyle: 'dashed',
            borderTopWidth: '16px',
            borderTopColor: 'primary',
            borderImageSource: `url("${border}")`,
            borderImageSlice: '90 0',
            borderImageRepeat: 'round',
          }}
        >
          <ColorButton mode={mode} onClick={cycleMode} />
          <NavLink
            as={Link}
            to="/"
            sx={{
              variant: 'styles.navitem',
              fontSize: 0,
            }}
          >
            <Avatar />
          </NavLink>
        </header>
        <main
          id="main-content"
          sx={{
            width: '100%',
            maxWidth: 'wide',
            px: 3,
            mx: 'auto',
            flex: '1 1 auto',
          }}
        >
          <div
            sx={{
              maxWidth: !!title ? 'container' : null,
            }}
          >
            {draft && <Draft />}
            {title && <Text as="h1">{title}</Text>}

            <div
              sx={{
                variant: 'text.small',
                fontWeight: 'bold',
              }}
            >
              {date && date} {minRead && `- ${minRead} min read`}
            </div>

            {props.children}
          </div>
        </main>
        <footer
          id="footer-navigation"
          sx={{
            px: 3,
            py: 3,
            width: '100%',
            maxWidth: 'wide',
            mx: 'auto',
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="mailto:hi@atallahsan.cc"
              title="Email"
              sx={{
                variant: 'styles.navitem',
                ml: 2,
                mr: 2,
              }}
            >
              <Email size={24} />
            </a>
            <a
              href="https://github.com/ahmadatallah"
              title="GitHub"
              sx={{
                variant: 'styles.navitem',
                mr: 2,
              }}
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://www.instagram.com/ahmad.atallah/"
              title="Instagram"
              sx={{
                variant: 'styles.navitem',
              }}
            >
              <Instagram size={24} />
            </a>

            <NavLink as={Link} to="/" title="About the avatar">
              <Avatar />
            </NavLink>
            <a
              href={query.pdf.publicURL}
              title="Resume"
              sx={{
                variant: 'styles.navitem',
                fontSize: '16px',
              }}
            >
              Resume
            </a>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              columnGap: 2,
              fontSize: 0,
              justifyContent: 'center',
              mt: ['0px', '-16px', '-16px', '-16px'],
            }}
          >
            <NavLink
              as={Link}
              to="/archive"
              sx={{
                variant: 'styles.shortcut',
                fontSize: '12px',
              }}
            >
              Archive
            </NavLink>
            <NavLink
              as={Link}
              to="/notes"
              sx={{
                variant: 'styles.shortcut',
                fontSize: '12px',
              }}
            >
              Notes
            </NavLink>
            <NavLink
              as={Link}
              to="/about"
              sx={{
                variant: 'styles.shortcut',
                fontSize: '12px',
              }}
            >
              About
            </NavLink>
            <div sx={{ my: 2 }}>© 2025 Ahmad Atallah</div>
          </div>
          {/* Accessibility Widget */}
          <AccessibilityWidget />
        </footer>
      </div>
    </Fragment>
  );
};
