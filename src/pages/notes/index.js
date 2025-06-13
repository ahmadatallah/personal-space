/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/seo';

export const query = graphql`
  query notePages {
    pages: allSitePage(
      sort: { fields: context___frontmatter___date, order: DESC }
      filter: {
        path: { glob: "/notes/*" }
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

const Notes = (props) => {
  const notes = props?.data?.pages?.nodes;

  return (
    <>
      <SEO title="Notes" />
      <ul
        sx={{
          listStyle: 'none',
        }}
      >
        {notes?.map((post) => (
          <li key={post.id}>
            <Text as="h2" sx={{ mt: 4 }}>
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

export default Notes;
