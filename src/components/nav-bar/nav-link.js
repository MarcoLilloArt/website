import React from 'react'

import style from './nav-link.module.css'

const NavLink = ({ to, children, onClick }) =>
    <a className={style.link} href={to} onClick={onClick} children={children} />

export default NavLink