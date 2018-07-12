import React from 'react'
import NavLink from './nav-link'
import InstagramLink from './instagram-link'

import style from './nav-bar.module.css'

const NavBar = () => (
  <div className={style.container}>
    <NavLink to="#collections" title='collection' />
    <NavLink to="#history" title='history' />
    <NavLink to="#exhibition" title='exhibition' />
    <NavLink to="#contact" title='contact' />
    <InstagramLink className={style.instagram} />
  </div>
)

export default NavBar
