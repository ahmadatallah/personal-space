/** @jsx jsx */
import { jsx, useColorMode, NavLink, Text } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Avatar from './avatar';
import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaEnvelope as Email,
} from 'react-icons/fa';

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

  const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume" }) {
        name
        extension
        publicURL
      }
    }
  `);

  return (
    <div
      sx={{
        variant: 'styles.root',
        display: 'flex',
        height: '100%',
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
          backgroundColor: 'muted',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          mx: 'auto',
          px: 3,
          py: 4,
        }}
      >
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
        <NavLink
          as={Link}
          to="/archive"
          sx={{
            variant: 'styles.navitem',
            fontSize: 0,
            mr: 3,
          }}
        >
          Archive
        </NavLink>
        <ColorButton mode={mode} onClick={cycleMode} />
      </header>
      <main
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
        sx={{
          px: 3,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
        }}
      >
        <div
          sx={{
            py: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <NavLink as={Link} to="/" title="About the avatar">
            <Avatar />
          </NavLink>
          <a
            href="https://twitter.com/ahmadatallah"
            title="Twitter"
            sx={{
              variant: 'styles.navitem',
            }}
          >
            <Twitter size={24} />
          </a>
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
              mr: 2,
            }}
          >
            <Instagram size={24} />
          </a>
          <a
            href={resume.pdf.publicURL}
            title="Resume"
            sx={{
              variant: 'styles.navitem',
            }}
          >
            Resume
          </a>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 0,
          }}
        >
          <NavLink
            as={Link}
            to="/"
            sx={{
              variant: 'styles.navitem',
              mr: 3,
            }}
          >
            atallahsan
          </NavLink>
          <NavLink
            as={Link}
            to="/archive"
            sx={{
              variant: 'styles.navitem',
              mr: 3,
            }}
          >
            Archive
          </NavLink>
          <NavLink
            as={Link}
            to="/about"
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}
          >
            About
          </NavLink>
          <div sx={{ mx: 'auto' }} />
          <div sx={{ my: 2 }}>© 2021 Ahmad Atallah</div>
        </div>
      </footer>
    </div>
  );
};
