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

      card5: file(name: { eq: "hydra_04" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 800
            height: 800
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
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '100%',
    width: '100%',
    opacity: 1,
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    objectFit: 'cover',
    objectPosition: 'center',
    // High-quality image rendering
    imageRendering: 'auto', // Smooth scaling for photographic images
    backfaceVisibility: 'hidden',
    transform: 'translate(-50%, -50%) translateZ(0)', // Center and hardware acceleration
  };

  const cardStyles = {
    overflow: 'hidden',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
    '&:hover .gatsby-image-wrapper': {
      transform: 'translate(-50%, -50%) scale(1.05) translateZ(0)',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  };

  return (
    <CardWrapper>
      <CardHandler as={Link} to="/archive/window-xp-palette/">
        <Card sx={{ ...cardStyles, position: 'relative', height: '200px' }}>
          <GatsbyImage
            sx={imageStyles}
            image={image1}
            alt="Windows XP Generative Art"
          />
          <div
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: `linear-gradient(transparent, ${currentColors.background})`,
              p: 3,
              borderRadius: '6px',
              color: 'text',
            }}
          >
            <small sx={{ opacity: 0.8 }}>Archive</small>
            <label
              sx={{ fontSize: '12px', fontWeight: 'bold', display: 'block' }}
            >
              Windows XP
            </label>
          </div>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/hal9000-generative-art/">
        <Card sx={{ ...cardStyles, position: 'relative', height: '200px' }}>
          <GatsbyImage
            sx={imageStyles}
            image={image2}
            alt="HAL9000 Generative Art"
          />
          <div
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: `linear-gradient(transparent, ${currentColors.background})`,
              p: 3,
              borderRadius: '6px',
              color: 'text',
            }}
          >
            <small sx={{ opacity: 0.8 }}>Archive</small>
            <label
              sx={{ fontSize: '12px', fontWeight: 'bold', display: 'block' }}
            >
              Hal9000
            </label>
          </div>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/on-some-faraway-beach/">
        <Card sx={{ ...cardStyles, position: 'relative', height: '200px' }}>
          <GatsbyImage
            sx={imageStyles}
            image={image3}
            alt="On Some Faraway Beach Album"
          />
          <div
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: `linear-gradient(transparent, ${currentColors.background})`,
              p: 3,
              borderRadius: '6px',
              color: 'text',
            }}
          >
            <small sx={{ opacity: 0.8 }}>Archive</small>
            <label
              sx={{ fontSize: '12px', fontWeight: 'bold', display: 'block' }}
            >
              On Some Faraway Beach
            </label>
          </div>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/hydra/">
        <Card sx={{ ...cardStyles, position: 'relative', height: '200px' }}>
          <GatsbyImage
            sx={imageStyles}
            image={image5}
            alt="There is nowhere in the world where you can live like you can in Hydra, and that includes Hydra"
          />
          <div
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: `linear-gradient(transparent, ${currentColors.background})`,
              p: 3,
              borderRadius: '6px',
              color: 'text',
            }}
          >
            <small sx={{ opacity: 0.8 }}>Archive</small>
            <label
              sx={{ fontSize: '12px', fontWeight: 'bold', display: 'block' }}
            >
              Hydra
            </label>
          </div>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/soy-cuba/">
        <Card sx={{ ...cardStyles, position: 'relative', height: '200px' }}>
          <GatsbyImage sx={imageStyles} image={image4} alt="Soy Cuba" />
          <div
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: `linear-gradient(transparent, ${currentColors.background})`,
              p: 3,
              borderRadius: '6px',
              color: 'text',
            }}
          >
            <small sx={{ opacity: 0.8 }}>Archive</small>
            <label
              sx={{ fontSize: '12px', fontWeight: 'bold', display: 'block' }}
            >
              Soy Cuba
            </label>
          </div>
        </Card>
      </CardHandler>
    </CardWrapper>
  );
};
