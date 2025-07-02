/** @jsx jsx */
import { jsx, NavLink, useThemeUI } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CardWrapper, Card } from '../blocks';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Recents = () => {
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
          gatsbyImageData(
            layout: FIXED
            width: 400
            height: 400
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR
          )
        }
      }
      card2: file(name: { eq: "hall9000-generative" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 400
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR
          )
        }
      }

      card3: file(name: { eq: "girl" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 400
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR
          )
        }
      }

      card4: file(name: { eq: "soy cuba frame 07" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 400
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR
          )
        }
      }

      card5: file(name: { eq: "bombom" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 400
            height: 600
            quality: 95
            formats: [AUTO, WEBP]
            placeholder: DOMINANT_COLOR
          )
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
        maxWidth: '200px',
        mx: 'auto', // Center the card horizontally
      }}
      {...props}
    />
  );

  const imageStyles = {
    height: '170px',
    width: '100%',
    maxWidth: '200px',
    opacity: 1,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    objectFit: 'cover',
    objectPosition: 'center',
    // High-quality image rendering
    imageRendering: 'auto', // Smooth scaling for photographic images
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)', // Hardware acceleration for better rendering
  };

  const cardStyles = {
    '@keyframes subtleGlow': {
      '0%': {
        filter: 'brightness(1.1) contrast(1.05) saturate(1.05) sepia(0%)',
        boxShadow: `0 0 15px ${theme.colors.accent}60, 0 0 30px ${theme.colors.secondary}40, 0 0 45px ${theme.colors.primary}30`,
      },
      '25%': {
        filter: 'brightness(1.12) contrast(1.06) saturate(1.1) sepia(25%)',
        boxShadow: `0 0 18px ${theme.colors.accent}65, 0 0 35px ${theme.colors.primary}45, 0 0 50px ${theme.colors.secondary}35`,
      },
      '50%': {
        filter: 'brightness(1.15) contrast(1.08) saturate(1.08) sepia(50%)',
        boxShadow: `0 0 20px ${theme.colors.accent}70, 0 0 40px ${theme.colors.primary}50, 0 0 60px ${theme.colors.secondary}40`,
      },
      '75%': {
        filter: 'brightness(1.12) contrast(1.06) saturate(1.1) sepia(75%)',
        boxShadow: `0 0 18px ${theme.colors.accent}65, 0 0 35px ${theme.colors.primary}45, 0 0 50px ${theme.colors.secondary}35`,
      },
      '100%': {
        filter: 'brightness(1.1) contrast(1.05) saturate(1.05) sepia(100%)',
        boxShadow: `0 0 15px ${theme.colors.accent}60, 0 0 30px ${theme.colors.primary}40, 0 0 45px ${theme.colors.secondary}30`,
      },
    },
    '&:hover .gatsby-image-wrapper': {
      opacity: 0.9,
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: 'scale(1.03) rotate(1deg)',
      cursor: 'pointer',
      animationName: 'subtleGlow',
      animationDuration: '4s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'both',
    },
    '&:hover .gatsby-image-wrapper img': {
      animationName: 'subtleGlow',
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationFillMode: 'both',
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
