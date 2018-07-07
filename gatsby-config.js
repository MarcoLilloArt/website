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
    }
  ],
}
