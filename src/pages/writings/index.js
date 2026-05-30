/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/seo';

export const query = graphql`
  query writingPages {
    pages: allSitePage(
      sort: { fields: context___frontmatter___date, order: DESC }
      filter: {
        path: { glob: "/writings/*" }
        context: { frontmatter: { draft: { ne: true } } }
      }
    ) {
      nodes {
        id
        path
        context {
          frontmatter {
            title
            minRead
            date
            draft
          }
        }
      }
    }
  }
`;

export default (props) => {
  const posts = props.data.pages.nodes;

  return (
    <>
      <SEO title="Writings" />
      <h1 sx={{ fontSize: 5, fontWeight: 900, mb: 4 }}>Writings</h1>
      <ul
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {posts.map((post) => (
          <li
            key={post.id}
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 2,
              py: 1,
            }}
          >
            <Link
              to={post.path}
              sx={{
                variant: 'styles.navlink',
                textDecoration: 'none',
                fontSize: 2,
                ':hover': { textDecoration: 'underline' },
              }}
            >
              {post.context.frontmatter.title}
            </Link>
            <span sx={{ fontSize: 0, color: 'gray', flexShrink: 0 }}>
              {new Date(post.context.frontmatter.date).toLocaleDateString()}
              {post.context.frontmatter.minRead &&
                ` - ${post.context.frontmatter.minRead} min`}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
