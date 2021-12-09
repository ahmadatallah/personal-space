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

      card2: file(name: { eq: "red - shadows on beach" }) {
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
    }
  `);

  const image1 = result.card1.childImageSharp.fluid;
  const image2 = result.card2.childImageSharp.fluid;
  const image3 = result.card3.childImageSharp.fluid;
  const image4 = result.card4.childImageSharp.fluid;

  return (
    <CardWrapper>
      <NavLink
        sx={{
          variant: 'styles.navitem',
        }}
        as={Link}
        to="/archive/window-xp-palette/"
      >
        <Card>
          <Image style={{ height: '170px' }} fluid={image1} />
          <h3>Windows XP, Generative Art</h3>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </NavLink>
      <NavLink
        sx={{
          variant: 'styles.navitem',
        }}
        as={Link}
        to="/frames/"
      >
        <Card>
          <Image style={{ height: '170px' }} fluid={image2} />
          <h3>When the Sun Hits</h3>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Frames
          </small>
        </Card>
      </NavLink>
      <NavLink
        sx={{
          variant: 'styles.navitem',
        }}
        as={Link}
        to="/archive/on-some-faraway-beach/"
      >
        <Card>
          <Image style={{ height: '170px' }} fluid={image3} />
          <h3>On Some Faraway Beach</h3>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </NavLink>
      <NavLink
        sx={{
          variant: 'styles.navitem',
        }}
        as={Link}
        to="/archive/red-room-generative-art/"
      >
        <Card>
          <Image style={{ height: '170px' }} fluid={image4} />
          <h3>Red Room, Generative Art</h3>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Archive
          </small>
        </Card>
      </NavLink>
    </CardWrapper>
  );
};
