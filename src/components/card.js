/** @jsx jsx */
import { jsx, NavLink, useThemeUI } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CardWrapper, Card } from '../blocks';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Cards = () => {
  const { theme, colorMode } = useThemeUI();

  // Get current theme colors
  const currentColors =
    colorMode === 'light'
      ? theme.colors
      : theme.colors?.modes?.[colorMode] || theme.colors;

  const result = useStaticQuery(graphql`
    {
      card1: file(name: { eq: "window-xp-palette-2" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 200)
        }
      }
      card2: file(name: { eq: "hall9000-generative" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200)
        }
      }

      card3: file(name: { eq: "girl" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200)
        }
      }

      card4: file(name: { eq: "soy cuba frame 07" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200)
        }
      }

      card5: file(name: { eq: "bombom" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 300)
        }
      }
    }
  `);

  const image1 = result.card1.childImageSharp.gatsbyImageData;
  const image2 = result.card2.childImageSharp.gatsbyImageData;
  const image3 = result.card3.childImageSharp.gatsbyImageData;
  const image4 = result.card4.childImageSharp.gatsbyImageData;
  const image5 = result.card5.childImageSharp.gatsbyImageData;

  const CardHandler = ({ ...props }) => (
    <NavLink
      className="card"
      sx={{
        justifyContent: 'center',
        display: 'inline-flex',
        width: '100%',
      }}
      {...props}
    />
  );

  const imageStyles = {
    height: '170px',
    opacity: 1,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    objectFit: 'cover',
  };

  const cardStyles = {
    '&:hover .gatsby-image-wrapper': {
      opacity: 0.9,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: 'scale(1.03) rotate(1deg)',
      cursor: 'pointer',
      filter: 'brightness(1.1) contrast(1.05) saturate(1.05)',
      boxShadow: `0 0 15px ${currentColors.accent}60, 0 0 30px ${currentColors.primary}40, 0 0 45px ${currentColors.secondary}30, 0 0 60px ${currentColors.muted}20`,
      animation: 'subtleGlow 4s ease-in-out infinite alternate',
    },
    '@keyframes subtleGlow': {
      '0%': {
        filter:
          'brightness(1.1) contrast(1.05) saturate(1.05) hue-rotate(0deg)',
        boxShadow: `0 0 15px ${currentColors.accent}60, 0 0 30px ${currentColors.primary}40, 0 0 45px ${currentColors.secondary}30, 0 0 60px ${currentColors.muted}20`,
      },
      '50%': {
        filter:
          'brightness(1.15) contrast(1.08) saturate(1.08) hue-rotate(180deg)',
        boxShadow: `0 0 20px ${currentColors.accent}70, 0 0 40px ${currentColors.primary}50, 0 0 60px ${currentColors.secondary}40, 0 0 80px ${currentColors.muted}30`,
      },
      '100%': {
        filter:
          'brightness(1.1) contrast(1.05) saturate(1.05) hue-rotate(360deg)',
        boxShadow: `0 0 15px ${currentColors.accent}60, 0 0 30px ${currentColors.primary}40, 0 0 45px ${currentColors.secondary}30, 0 0 60px ${currentColors.muted}20`,
      },
    },
  };

  return (
    <CardWrapper>
      <CardHandler as={Link} to="/archive/window-xp-palette/">
        <Card sx={cardStyles}>
          <GatsbyImage
            sx={imageStyles}
            image={image1}
            alt="Windows XP Generative Art"
          />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Windows XP
          </label>
          <small>Archive</small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/hal9000-generative-art/">
        <Card sx={cardStyles}>
          <GatsbyImage
            sx={imageStyles}
            image={image2}
            alt="HAL9000 Generative Art"
          />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Hal9000
          </label>
          <small>Archive</small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/on-some-faraway-beach/">
        <Card sx={cardStyles}>
          <GatsbyImage
            sx={imageStyles}
            image={image3}
            alt="On Some Faraway Beach Album"
          />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            On Some Faraway Beach
          </label>
          <small>Archive</small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/soy-cuba/">
        <Card sx={cardStyles}>
          <GatsbyImage sx={imageStyles} image={image4} alt="Soy Cuba" />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Soy Cuba
          </label>
          <small>Archive</small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/made-from-tiny-boxes/">
        <Card sx={cardStyles}>
          <GatsbyImage
            sx={imageStyles}
            image={image5}
            alt="Made From Tiny Boxes Album"
          />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Made from Tiny Boxes
          </label>
          <small>Archive</small>
        </Card>
      </CardHandler>
    </CardWrapper>
  );
};
