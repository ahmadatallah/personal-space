/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/seo';

export const query = graphql`
  query ArchivePages {
    pages: allSitePage(
      sort: { fields: context___frontmatter___date, order: DESC }
      filter: {
        path: { glob: "/archive/*" }
        context: { frontmatter: { draft: { ne: true } } }
      }
    ) {
      nodes {
        id
        path
        context {
          frontmatter {
            title
            date
            draft
          }
        }
      }
    }
  }
`;

const Archive = (props) => {
  const posts = props?.data?.pages?.nodes;

  return (
    <>
      <SEO title="Archive" />
      <ul
        sx={{
          maxWidth: 'container',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {posts?.map((post) => (
          <li key={post.id}>
            <Text as="h2" sx={{ mt: 4, mb: 0 }}>
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
              {new Date(post.context.frontmatter.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Archive;
