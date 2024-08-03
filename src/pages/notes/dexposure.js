/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import background from './notes_background.svg';

const Dexposure = () => {
  const { theme } = useThemeUI();
  const result = useStaticQuery(graphql`
    {
      dexposure: file(name: { eq: "base" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 423)
        }
      }
    }
  `);

  return (
    <div
      sx={{
        height: '550px',
        width: '50%',
        mt: 4,
        borderRadius: '10px',
        boxShadow: `-2px 0px 10px ${theme.colors.primary}, -20px 0px 5px ${theme.colors.accent}`,
        mx: 'auto',
        background: `url(${background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        position: 'relative',
      }}
    >
      <GatsbyImage
        image={result.dexposure.childImageSharp.gatsbyImageData}
        style={{
          width: '200px',
          height: '200px',
          position: 'absolute',
          borderRadius: '50%',
          bottom: '42%',
          left: '180px',
          transform: 'translateY(20%)',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Dexposure;
