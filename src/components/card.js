/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CardWrapper, Card } from '../blocks';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Cards = () => {
  const result = useStaticQuery(graphql`
    {
      card1: file(name: { eq: "window-xp-palette-2" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 300, height: 200)
        }
      }
      card2: file(name: { eq: "hall9000-generative" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 300)
        }
      }

      card3: file(name: { eq: "girl" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 300)
        }
      }

      card4: file(name: { eq: "soy cuba frame 07" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 300)
        }
      }

      card5: file(name: { eq: "bombom" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 300, height: 300)
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

  return (
    <CardWrapper>
      <CardHandler as={Link} to="/archive/window-xp-palette/">
        <Card>
          <GatsbyImage
            style={{ height: '170px' }}
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
        <Card>
          <GatsbyImage
            style={{ height: '170px' }}
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
        <Card>
          <GatsbyImage
            style={{ height: '170px' }}
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
        <Card>
          <GatsbyImage
            style={{ height: '170px' }}
            image={image4}
            alt="Soy Cuba"
          />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Soy Cuba
          </label>
          <small>Archive</small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/made-from-tiny-boxes/">
        <Card>
          <GatsbyImage
            style={{ height: '170px' }}
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
