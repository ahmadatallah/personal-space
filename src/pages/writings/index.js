/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';
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
      <ul
        sx={{
          maxWidth: 'container',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {posts.map((post) => (
          <li key={post.id}>
            <Text as="h2" sx={{ my: 3 }}>
              <Link
                to={post.path}
                sx={{
                  variant: 'styles.navlink',
                }}
              >
                {post.context.frontmatter.title}
              </Link>
            </Text>
            <div sx={{ variant: 'text.small', fontWeight: 'bold' }}>
              {new Date(post.context.frontmatter.date).toLocaleDateString()} -{' '}
              {post.context.frontmatter.minRead} min read
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
