module.exports = {
  pathPrefix: '/ar-slanted',
  siteMetadata: {
    title: 'ar-slanted',
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg-icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
  ],
};
