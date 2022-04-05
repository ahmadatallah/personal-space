/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import background from './background.svg';

const Dexposure = () => {
  const result = useStaticQuery(graphql`
    {
      dexposure: file(name: { eq: "base" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
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
      <Image
        fluid={result.dexposure.childImageSharp.fluid}
        imgStyle={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          borderRadius: '50%',
          mixBlendMode: 'darken',
          bottom: '50%',
          left: '270px',
          transform: 'translateY(80%)',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default Dexposure;
