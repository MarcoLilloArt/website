import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavBar from '../components/nav-bar'

import style from './index.module.css'

const Layout = ({ children, data }) => (
  <div className={style.container}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Marco Lillo Art Exhibition' },
        { name: 'keywords', content: 'marco, lillo, art' },
      ]}
    />
    <NavBar siteTitle={data.site.siteMetadata.title} />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
