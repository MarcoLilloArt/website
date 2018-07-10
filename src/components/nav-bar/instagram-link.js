import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import style from './instagram-link.module.css'

const InstagramLink = () =>
    <div className={style.logo}>
        <OutboundLink href="http://instagram.com">
            <img className={style.image} src={require('../../static/insta-logo.png')} />
        </OutboundLink>
    </div>

export default InstagramLink