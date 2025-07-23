/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowRight as ArrowRight } from 'react-icons/fa';
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
          maxWidth: 'container',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {notes?.map((post) => (
          <li key={post.id}>
            <Text as="h2" sx={{ mt: 4, mb: 0 }}>
              <Link
                to={post.path}
                aria-label={`Navigate to ${post.context.frontmatter.title}`}
                sx={{
                  variant: 'styles.navlink',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateX(4px)',
                  },
                  '&:focus': {
                    outline: '2px solid',
                    outlineColor: 'accent',
                    outlineOffset: '2px',
                    borderRadius: '4px',
                  },
                }}
              >
                {post.context.frontmatter.title}
                <ArrowRight
                  aria-hidden="true"
                  size={16}
                  sx={{
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    'a:hover &': {
                      transform: 'translateX(2px)',
                    },
                  }}
                />
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
