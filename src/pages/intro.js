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
    <GeometricBackground>
      <div
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          p: [3, 4, 5],
        }}
      >
        <div
          sx={{
            display: 'flex',
            columnGap: 5,
            justifyContent: 'center',
            borderRadius: '10px',
            alignItems: 'center',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <GatsbyImage
            image={result.main.childImageSharp.gatsbyImageData}
            alt="Profile Photo"
            imgStyle={{
              borderRadius: '10px',
            }}
            sx={{
              my: 4,
              mr: [2, 1, 0],
              marginTop: '20px',
              borderRadius: '10px',
              boxShadow: `2px 2px 0px ${currentColors.secondary}, 4px 4px 0px ${currentColors.primary}, 8px 8px 0px ${currentColors.background}, 10px 10px 0px ${currentColors.background}, 12px 12px 0px ${currentColors.primary}, 14px 14px 0px ${currentColors.secondary}`,
            }}
          />

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
            <h4> I'm Ahmad, a programmer and an artist.</h4>
            <p
              sx={{
                fontSize: '16px',
              }}
            >
              I use this space to share some highlights from the daily random
              stuff I do which you can find at the{' '}
              <NavLink
                as={Link}
                to="/archive"
                sx={{
                  variant: 'styles.shortcut',
                  fontWeight: 'normal',
                }}
              >
                Archive
              </NavLink>{' '}
              and sometimes drafts at{' '}
              <NavLink
                as={Link}
                to="/notes"
                sx={{
                  variant: 'styles.shortcut',
                  fontWeight: 'normal',
                }}
              >
                Notes
              </NavLink>
              . I'm not privately active on{' '}
              <a
                href="https://www.instagram.com/ahmad.atallah/"
                title="Instagram"
                sx={{
                  variant: 'styles.shortcut',
                }}
              >
                Instagram
              </a>
              . Feel free to contact me via E-mail at{' '}
              <a
                href="mailto:hi@atallahsan.cc"
                title="Email"
                sx={{
                  variant: 'styles.shortcut',
                }}
              >
                me@atallahsan.cc
              </a>
              .
              <br />
              <br />
              The least important thing here is checking my{' '}
              <a
                href={result.pdf.publicURL}
                title="Resume"
                sx={{
                  variant: 'styles.shortcut',
                }}
              >
                Resume
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </GeometricBackground>
  );
};

export default TextShadow;
