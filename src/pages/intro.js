/** @jsx jsx */
import { jsx, useThemeUI, NavLink } from 'theme-ui';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Avatar from '../avatar';

import { Fragment } from 'react';
import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaInstagram as Instagram,
  FaEnvelope as Email,
} from 'react-icons/fa';

const TextShadow = (props) => {
  const { theme } = useThemeUI();

  const result = useStaticQuery(graphql`
    {
      main: file(name: { eq: "about-img" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300)
        }
      }

      pdf: file(name: { eq: "resume" }) {
        name
        extension
        publicURL
      }
    }
  `);

  return (
    <Fragment>
      <div
        sx={{
          bg: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          p: 4,
        }}
      >
        <div
          sx={{
            display: 'flex',
            columnGap: 5,
            alignItems: 'center',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=VT323:wght@400"
          />
          <GatsbyImage
            image={result.main.childImageSharp.gatsbyImageData}
            sx={{
              my: 5,
              marginTop: '20px',
              borderRadius: '10px',
              boxShadow: `4px 4px 0px ${theme.colors.secondary}, 8px 8px 0px ${theme.colors.primary}, 12px 12px 0px ${theme.colors.background}, 16px 16px 0px ${theme.colors.background}, 20px 20px 0px ${theme.colors.primary}, 24px 24px 0px ${theme.colors.secondary}`,
            }}
          />

          <div
            {...props}
            sx={{
              lineHeight: '2',
              letterSpacing: '0',
              color: 'hsl(0,0%,100%)',
              fontSize: [1, 2, 3],
              height: 'auto',
              mb: 2,
              width: ['100%', '60%', '60%'],
            }}
          >
            I'm Ahmad Atallah. A Software engineer at Aeditive. Based in
            Hamburg, Germany. Worked before at Swvl. Started the front-end team
            to be now one of the region's biggest front-end teams. Currently I'm
            more into Generative art/design and photography.
          </div>
        </div>
        <div
          {...props}
          sx={{
            lineHeight: '2',
            letterSpacing: '0',
            color: 'hsl(0,0%,100%)',
            fontSize: [1, 2, 3],
            mx: 'auto',
            height: 'auto',
          }}
        >
          Here, you can find more links about me:
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
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
              href={result.pdf.publicURL}
              title="Resume"
              sx={{
                variant: 'styles.navitem',
                fontSize: '18px',
                mr: 3,
              }}
            >
              Resume
            </a>
            <NavLink
              as={Link}
              to="/archive"
              sx={{
                variant: 'styles.navitem',
                fontSize: '18px',
                mr: 3,
              }}
            >
              Archive
            </NavLink>
            <NavLink
              as={Link}
              to="/notes"
              sx={{
                fontSize: '18px',
                variant: 'styles.navitem',
              }}
            >
              Notes
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TextShadow;
