import React from 'react'
import Image from 'gatsby-image'

import style from './marco-logo.module.css'

const MarcoLogo = ({ image }) =>
    <div className={style.container}>
        <Image className={style.image} sizes={image.sizes} />
    </div>

export default MarcoLogo