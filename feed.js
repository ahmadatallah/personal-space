module.exports = {
  query: `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          site_url: siteUrl
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allSitePage } }) => {
        return allSitePage.nodes.map((page) => ({
          ...page.context.frontmatter,
          description: page.context.frontmatter.excerpt,
          url: site.siteMetadata.siteUrl + page.path,
          guid: site.siteMetadata.siteUrl + page.path,
          custom_elements: [
            {
              'content:encoded': page.context.html,
            },
          ],
        }));
      },
      query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage(
          sort: {
            fields: context___frontmatter___date,
            order: DESC
          }
          filter: {
            path: {
              glob: "/archive/*"
            },
            context: {
              frontmatter: {
                draft: {
                  ne: true
                }
              }
            }
          }
        ) {
          nodes {
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
    `,
      output: `rss-archive.xml`,
    },
    {
      serialize: ({ query: { site, allSitePage } }) => {
        return allSitePage.nodes.map((page) => ({
          ...page.context.frontmatter,
          description: page.context.frontmatter.excerpt,
          url: site.siteMetadata.siteUrl + page.path,
          guid: site.siteMetadata.siteUrl + page.path,
          custom_elements: [
            {
              'content:encoded': page.context.html,
            },
          ],
        }));
      },
      query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage(
          sort: {
            fields: context___frontmatter___date,
            order: DESC
          }
          filter: {
            path: {
              glob: "/writings/*"
            },
            context: {
              frontmatter: {
                draft: {
                  ne: true
                }
              }
            }
          }
        ) {
          nodes {
            path
            context {
              frontmatter {
                title
                date
                minRead
                draft
              }
            }
          }
        }
      }
    `,
      output: `rss-writings.xml`,
    },
  ],
};
