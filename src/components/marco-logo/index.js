import React from 'react'

import style from './marco-logo.module.css'

const MarcoLogo = () =>
    <div className={style.container}>
        <img className={style.image} src={require('../../static/marco.png')} />
    </div>

export default MarcoLogo