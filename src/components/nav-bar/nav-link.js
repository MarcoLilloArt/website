import React from 'react'

import style from './nav-link.module.css'

const NavLink = ({ title }) =>
    <a className={style.link} href="#" children={title} />

export default NavLink