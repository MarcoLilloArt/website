import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import style from './instagram-link.module.css'

const InstagramLink = ({ className }) =>
    <div className={`${className} ${style.logo}`}>
        <OutboundLink href="https://www.instagram.com/marcolillo.art/">
            <img className={style.image} src={require('../../static/insta-logo.png')} />
        </OutboundLink>
    </div>

export default InstagramLink