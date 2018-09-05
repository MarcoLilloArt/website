module.exports = {
  siteMetadata: {
    title: 'Marco Antonio Lillo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122026993-1",
        head: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: 'src/static/'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ivce7aspb2u9',
        accessToken: 'bd5a728bc9b5705c81ebf658a9d14c28f51f16bccced5c665a08c93cfbd4704d',
      },
    },
  ],
}
