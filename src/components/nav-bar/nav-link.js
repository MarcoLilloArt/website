import React from 'react'

import style from './nav-link.module.css'

const NavLink = ({ to, title }) =>
    <a className={style.link} href={to} children={title} />

export default NavLink