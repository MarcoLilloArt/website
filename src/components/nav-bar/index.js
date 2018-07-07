import React from 'react'
import NavLink from './nav-link'
import InstagramLink from './instagram-link'

import style from './nav-bar.module.css'

const NavBar = () => (
  <div className={style.container}>
    <div className={style.innerContainer}>
      <div className={style.navGroup}>
        <NavLink title='history' />
        <NavLink title='collection' />
        <NavLink title='contact' />
        <NavLink title='exhibition' />
      </div>
      <InstagramLink />
    </div>
  </div>
)

export default NavBar
