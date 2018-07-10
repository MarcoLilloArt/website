import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'

import NavBar from '../components/nav-bar'

import style from './index.module.css'

const Layout = ({ children, data }) => (
  <div className={style.container}>
    <Helmet
      title={data.siteMeta.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Marco Lillo Art Exhibition' },
        { name: 'keywords', content: 'marco, lillo, art' },
      ]}
    />
    <NavBar siteTitle={data.siteMeta.siteMetadata.title} />
    <Image className={style.background} sizes={data.background.edges[0].node.sizes} />
    <div className={style.foreground}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
query SiteTitleQuery {
  siteMeta: site {
    siteMetadata {
      title
    }
  }

  background: allImageSharp(
    filter: {
      id: {
        eq: "src/static/background.png absPath of file >> ImageSharp"
      }
    }
  ) {
    edges {
      node {
        sizes(maxWidth: 1290 ) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
}
`
