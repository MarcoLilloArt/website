import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../components/i18n'
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
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: require('../static/favicon.png') }
      ]}
    />
    <NavBar siteTitle={data.siteMeta.siteMetadata.title} />
    {children()}
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
}
`
