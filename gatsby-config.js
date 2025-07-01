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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Space`,
        short_name: `Personal Space`,
        description: `Personal space where I share things I do in daily life and random thoughts`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: '#000',
        theme_color: `#fff`,
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',

    'gatsby-plugin-twitter',
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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto Mono`,
            file: `https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap`,
          },
          {
            name: 'Ubuntu',
            file: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
  ],
};
