/** @jsx jsx */
import { jsx, NavLink } from 'theme-ui';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CardWrapper, Card } from '../blocks';
import Image from 'gatsby-image';

export const Cards = () => {
  const result = useStaticQuery(graphql`
    {
      card1: file(name: { eq: "2021_0705_12202600" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card2: file(name: { eq: "DSCF8594" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      card3: file(name: { eq: "DSCF8296" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card4: file(name: { eq: "bnw - bread maker" }) {
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
        to="/archive/burullus-island/"
      >
        <Card>
          <Image fluid={image1} />
          <h3>Burllus Island</h3>
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
        to="/archive/burnt-trees/"
      >
        <Card>
          <Image fluid={image2} />
          <h3>Burnt Trees</h3>
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
        to="/archive/the-office/"
      >
        <Card>
          <Image fluid={image3} />
          <h3>The Office</h3>
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
          <Image fluid={image4} />
          <h3>Bread Maker</h3>
          <small sx={{ ml: 3, fontSize: '0.7rem', color: 'black' }}>
            Frames
          </small>
        </Card>
      </NavLink>
    </CardWrapper>
  );
};
