/** @jsx jsx */
import { jsx, useThemeUI, NavLink } from 'theme-ui';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GeometricBackground } from '../components/geometric-background';

const TextShadow = (props) => {
  const { theme, colorMode } = useThemeUI();

  const result = useStaticQuery(graphql`
    {
      main: file(name: { eq: "about-img" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 200)
        }
      }

      pdf: file(name: { eq: "resumelatest" }) {
        name
        extension
        publicURL
      }
    }
  `);

  // Get current theme colors
  const currentColors =
    colorMode === 'light'
      ? theme.colors
      : theme.colors?.modes?.[colorMode] || theme.colors;

  // Determine if we're on a dark background
  const isDarkTheme =
    colorMode === 'black' ||
    colorMode === 'dark' ||
    colorMode === 'deep' ||
    colorMode === 'hack';

  return (
    <section
      aria-labelledby="intro-section"
      sx={{
        display: 'flex',
        columnGap: 2,
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        flexDirection: ['column', 'column', 'row'],
      }}
    >
      <GeometricBackground>
        <div
          aria-label="Decorative geometric pattern background"
          role="img"
          aria-hidden="true"
        />
        <Link
          to="/about"
          aria-label="View detailed about page with more information about Ahmad"
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.location.href = '/about';
            }
          }}
          sx={{
            display: 'block',
            borderRadius: '10px',
            '&:focus': {
              outline: '3px solid',
              outlineColor: 'accent',
              outlineOffset: '3px',
            },
          }}
        >
          <GatsbyImage
            image={result.main.childImageSharp.gatsbyImageData}
            alt="Profile photo showing ahmad in a silhouette with double exposure effect with a grafity"
            imgStyle={{
              borderRadius: '10px',
            }}
            sx={{
              my: 4,
              width: ['170px', '170px', '205px'],
              marginTop: '20px',
              opacity: 1,
              borderRadius: '10px',
              '&:hover, &:focus-within': {
                opacity: 0.8,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'scale(1.08) rotate(3deg)',
                cursor: 'pointer',
                filter: 'brightness(1.2) contrast(1.15) saturate(1.1)',
                objectFit: 'cover',
                boxShadow: `0 0 25px ${currentColors.accent}90, 0 0 50px ${currentColors.primary}70, 0 0 75px ${currentColors.secondary}50, 0 0 100px ${currentColors.muted}30`,
                animation: 'galaxyGlow 3s ease-in-out infinite alternate',
              },
              '@keyframes galaxyGlow': {
                '0%': {
                  filter:
                    'brightness(1.2) contrast(1.15) saturate(1.1) hue-rotate(0deg)',
                  boxShadow: `0 0 25px ${currentColors.accent}90, 0 0 50px ${currentColors.primary}70, 0 0 75px ${currentColors.secondary}50, 0 0 100px ${currentColors.muted}30`,
                },
                '25%': {
                  filter:
                    'brightness(1.4) contrast(1.25) saturate(1.2) hue-rotate(90deg)',
                  boxShadow: `0 0 35px ${currentColors.accent}bb, 0 0 70px ${currentColors.primary}90, 0 0 105px ${currentColors.secondary}70, 0 0 140px ${currentColors.muted}50`,
                },
                '50%': {
                  filter:
                    'brightness(1.6) contrast(1.35) saturate(1.3) hue-rotate(180deg)',
                  boxShadow: `0 0 45px ${currentColors.accent}dd, 0 0 90px ${currentColors.primary}bb, 0 0 135px ${currentColors.secondary}90, 0 0 180px ${currentColors.muted}70`,
                },
                '75%': {
                  filter:
                    'brightness(1.4) contrast(1.25) saturate(1.2) hue-rotate(270deg)',
                  boxShadow: `0 0 35px ${currentColors.accent}bb, 0 0 70px ${currentColors.primary}90, 0 0 105px ${currentColors.secondary}70, 0 0 140px ${currentColors.muted}50`,
                },
                '100%': {
                  filter:
                    'brightness(1.2) contrast(1.15) saturate(1.1) hue-rotate(360deg)',
                  boxShadow: `0 0 25px ${currentColors.accent}90, 0 0 50px ${currentColors.primary}70, 0 0 75px ${currentColors.secondary}50, 0 0 100px ${currentColors.muted}30`,
                },
              },
              boxShadow: `2px 2px 0px ${currentColors.secondary}, 4px 4px 0px ${currentColors.primary}, 8px 8px 0px ${currentColors.background}, 10px 10px 0px ${currentColors.background}, 12px 12px 0px ${currentColors.primary}, 14px 14px 0px ${currentColors.secondary}`,
            }}
          />
        </Link>
      </GeometricBackground>

      <div
        {...props}
        sx={{
          lineHeight: '1.5',
          letterSpacing: '0',
          color: 'text',
          fontSize: [1, 2, 3],
          height: 'auto',
          mb: 2,
          width: ['100%', '60%', '60%'],
          textShadow: isDarkTheme
            ? `0 1px 2px rgba(0, 0, 0, 0.9), 0 2px 4px ${currentColors.accent}dd, 0 0 12px ${currentColors.accent}99`
            : `0 1px 2px rgba(255, 255, 255, 0.95), 0 2px 4px ${currentColors.accent}ff, 0 0 12px ${currentColors.accent}bb`,
          fontWeight: '600',
          '& h4': {
            textShadow: isDarkTheme
              ? `0 1px 3px rgba(0, 0, 0, 0.95), 0 2px 6px ${currentColors.accent}ee, 0 0 16px ${currentColors.accent}aa`
              : `0 1px 3px rgba(255, 255, 255, 1), 0 2px 6px ${currentColors.accent}ff, 0 0 16px ${currentColors.accent}cc`,
            fontWeight: '700',
          },
          '& a': {
            textShadow: isDarkTheme
              ? `0 1px 2px rgba(0, 0, 0, 0.85), 0 2px 3px ${currentColors.accent}cc`
              : `0 1px 2px rgba(255, 255, 255, 0.9), 0 2px 3px ${currentColors.accent}ee`,
            fontWeight: '600',
          },
        }}
      >
        <h1
          id="main-heading"
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            mb: 3,
          }}
        >
          I'm Ahmad, a programmer and an artist.
        </h1>
        <p
          sx={{
            fontSize: '16px',
          }}
        >
          I use this space to share some highlights from the daily random stuff
          I do which you can find at the{' '}
          <NavLink
            as={Link}
            to="/archive"
            aria-label="Browse the archive of daily highlights and projects"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = '/archive';
              }
            }}
            sx={{
              variant: 'styles.shortcut',
              fontWeight: 'normal',
              '&:focus': {
                outline: '2px solid',
                outlineColor: 'accent',
                outlineOffset: '1px',
              },
            }}
          >
            Archive
          </NavLink>{' '}
          and sometimes drafts at{' '}
          <NavLink
            as={Link}
            to="/notes"
            aria-label="View draft notes and work-in-progress content"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = '/notes';
              }
            }}
            sx={{
              variant: 'styles.shortcut',
              fontWeight: 'normal',
              '&:focus': {
                outline: '2px solid',
                outlineColor: 'accent',
                outlineOffset: '1px',
              },
            }}
          >
            Notes
          </NavLink>
          . I'm not privately active on{' '}
          <a
            href="https://www.instagram.com/ahmad.atallah/"
            title="Instagram"
            aria-label="Visit Ahmad's Instagram profile (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(
                  'https://www.instagram.com/ahmad.atallah/',
                  '_blank',
                  'noopener,noreferrer'
                );
              }
            }}
            sx={{
              variant: 'styles.shortcut',
              '&:focus': {
                outline: '2px solid',
                outlineColor: 'accent',
                outlineOffset: '1px',
              },
            }}
          >
            Instagram <span aria-hidden="true">&uarr;</span>
          </a>
          . Feel free to contact me via E-mail at{' '}
          <a
            href="mailto:hi@atallahsan.cc"
            title="Email"
            aria-label="Send an email to Ahmad at hi@atallahsan.cc"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = 'mailto:hi@atallahsan.cc';
              }
            }}
            sx={{
              variant: 'styles.shortcut',
              '&:focus': {
                outline: '2px solid',
                outlineColor: 'accent',
                outlineOffset: '1px',
              },
            }}
          >
            hi@atallahsan.cc
          </a>
          .
          <br />
          <br />
          The least important thing here is checking my{' '}
          <a
            href={result.pdf.publicURL}
            title="Resume"
            aria-label="Download Ahmad's resume as PDF (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(
                  result.pdf.publicURL,
                  '_blank',
                  'noopener,noreferrer'
                );
              }
            }}
            sx={{
              variant: 'styles.shortcut',
              '&:focus': {
                outline: '2px solid',
                outlineColor: 'accent',
                outlineOffset: '1px',
              },
            }}
          >
            Resume <span aria-hidden="true">(PDF)</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default TextShadow;
