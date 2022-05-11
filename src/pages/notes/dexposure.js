/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import background from './background.svg';

const Dexposure = () => {
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
        height: '1000px',
        width: '100%',
        p: '2',
        backgroundColor: 'white',
        background: `url(${background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        position: 'relative',
      }}
    >
      <GatsbyImage
        image={result.dexposure.childImageSharp.gatsbyImageData}
        style={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          borderRadius: '50%',
          mixBlendMode: 'darken',
          bottom: '50%',
          left: '270px',
          transform: 'translateY(20%)',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Dexposure;
