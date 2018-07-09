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
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'img',
    //     path: '${__dirname}/src/img/'
    //   }
    // },
  ],
}
