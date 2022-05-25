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
          bg: 'muted',
          display: 'flex',
          flexDirection: 'column',
          p: [3, 4, 5],
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
              my: 4,
              mr: [2, 1, 0],
              marginTop: '20px',
              borderRadius: '10px',
              boxShadow: `2px 2px 0px ${theme.colors.secondary}, 4px 4px 0px ${theme.colors.primary}, 8px 8px 0px ${theme.colors.background}, 10px 10px 0px ${theme.colors.background}, 12px 12px 0px ${theme.colors.primary}, 14px 14px 0px ${theme.colors.secondary}`,
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
            }}
          >
            I'm Ahmad Atallah. A Software engineer at Aeditive. Based in
            Hamburg, Germany. Worked before at Swvl. Started the front-end team
            to be now one of the region's biggest teams. Currently, I'm more
            into generative art/design and photography.
            <br />
            <br />I use this space to share some highlights from the daily
            random stuff I do which you can find at the
            <NavLink
              as={Link}
              to="/archive"
              sx={{
                variant: 'styles.navitem',
                fontSize: ['10px', '12px', '14px'],
                borderBottom: 'solid 1px',
                mx: 1,
              }}
            >
              Archive
            </NavLink>
            and sometimes drafts at
            <NavLink
              as={Link}
              to="/notes"
              sx={{
                fontSize: ['10px', '12px', '14px'],
                ml: 1,
                borderBottom: 'solid 1px',
                variant: 'styles.navitem',
              }}
            >
              Notes
            </NavLink>
            .
            <br />
            I'm also, privately active on
            <a
              href="https://twitter.com/ahmadatallah"
              title="Twitter"
              sx={{
                variant: 'styles.navitem',
                ml: [1, 1, 2],
                mr: 1,
                fontSize: ['10px', '12px', '14px'],
                borderBottom: 'solid 1px',
              }}
            >
              Twitter
            </a>
            ,
            <a
              href="https://github.com/ahmadatallah"
              title="GitHub"
              sx={{
                variant: 'styles.navitem',
                mx: 1,
                fontSize: ['10px', '12px', '14px'],
                borderBottom: 'solid 1px',
              }}
            >
              GitHub
            </a>
            and,
            <a
              href="https://www.instagram.com/ahmad.atallah/"
              title="Instagram"
              sx={{
                variant: 'styles.navitem',
                ml: 2,
                fontSize: ['10px', '12px', '14px'],
                borderBottom: 'solid 1px',
              }}
            >
              Instagram
            </a>
            .
            <br />
            You can contact me via E-mail at{' '}
            <a
              href="mailto:hi@atallahsan.cc"
              title="Email"
              sx={{
                variant: 'styles.navitem',
                fontSize: ['10px', '12px', '14px'],
                ml: [0, 1, 1],
                borderBottom: 'solid 1px',
              }}
            >
              me@atallahsan.cc
            </a>
            .
            <br />
            The last of the unimportance you can do here is checking my
            <a
              href={result.pdf.publicURL}
              title="Resume"
              sx={{
                variant: 'styles.navitem',
                fontSize: ['10px', '12px', '14px'],
                borderBottom: 'solid 1px',
                ml: 1,
              }}
            >
              Resume
            </a>
            .
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TextShadow;
