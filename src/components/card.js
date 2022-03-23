/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CardWrapper, Card } from '../blocks';
import Image from 'gatsby-image';

export const Cards = () => {
  const result = useStaticQuery(graphql`
    {
      card1: file(name: { eq: "window-xp-palette-2" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card2: file(name: { eq: "hall9000-generative" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      card3: file(name: { eq: "girl" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      card4: file(name: { eq: "red room - black" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      card5: file(name: { eq: "joy-division-generative-art-white" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const image1 = result.card1.childImageSharp.fluid;
  const image2 = result.card2.childImageSharp.fluid;
  const image3 = result.card3.childImageSharp.fluid;
  const image4 = result.card4.childImageSharp.fluid;
  const image5 = result.card5.childImageSharp.fluid;

  const CardHandler = ({ ...props }) => (
    <NavLink
      className="card"
      sx={{
        variant: 'styles.navitem',
      }}
      {...props}
    />
  );

  return (
    <CardWrapper>
      <CardHandler as={Link} to="/archive/window-xp-palette/">
        <Card>
          <Image style={{ height: '170px' }} fluid={image1} />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Windows XP
          </label>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/hal9000-generative-art/">
        <Card>
          <Image style={{ height: '170px' }} fluid={image2} />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Hal9000
          </label>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/joy-division-generative-art/">
        <Card>
          <Image style={{ height: '170px' }} fluid={image5} />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Unknown Pleasure
          </label>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/on-some-faraway-beach/">
        <Card>
          <Image style={{ height: '170px' }} fluid={image3} />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            On Some Faraway Beach
          </label>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </CardHandler>
      <CardHandler as={Link} to="/archive/red-room-generative-art/">
        <Card>
          <Image style={{ height: '170px' }} fluid={image4} />
          <label sx={{ ml: 3, fontSize: '12px', color: 'black', my: 2 }}>
            Red Room
          </label>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </CardHandler>
    </CardWrapper>
  );
};
