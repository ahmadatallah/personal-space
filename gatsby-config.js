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
    'gatsby-plugin-extract-image-colors',
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
        name: 'externals',
        path: `${__dirname}/src/externals`,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '1460724974',
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
