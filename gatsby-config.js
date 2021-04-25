module.exports = {
  pathPrefix: '/ar-slanted',
  siteMetadata: {
    title: 'ar-slanted',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-workerize-loader',
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
