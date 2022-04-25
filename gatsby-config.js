module.exports = {
  siteMetadata: {
    title: 'Atallahsan',
    description: 'Ahmad Atallah',
    author: 'Ahmad Atallah',
    siteUrl: 'https://atallahsan.cc',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Mono'],
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-186964410-1',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: require('./feed'),
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'archive',
        path: `${__dirname}/src/pages/archive`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writings',
        path: `${__dirname}/src/pages/writings`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'others',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/src/pages/notes`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'externals',
        path: `${__dirname}/src/externals`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-shiki-twoslash',
            options: {
              theme: 'nord',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: `dominantColor`,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
  ],
};
