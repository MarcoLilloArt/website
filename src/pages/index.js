import React from 'react'
import Link from 'gatsby-link'

import Collections from '../components/collections'
import style from './index.module.css'

const IndexPage = () => (
  <div className={style.container}>
    <div className={style.innerContainer}>
      <Collections />
    </div>
  </div>
)

export default IndexPage
