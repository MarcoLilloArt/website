import React from 'react'

import style from './instagram-link.module.css'

const InstagramLink = () =>
    <div className={style.logo}>
        <a href="http://instagram.com">
            <img className={style.image} src={require('../../static/insta-logo.png')} />
        </a>
    </div>

export default InstagramLink