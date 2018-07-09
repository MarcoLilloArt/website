import React from 'react'

import style from './exhibition.module.css'
import LocationMap from './map'

const Exhibition = () =>
    <div className={style.container}>
        <address>
            Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br/> 
            Visit us at:<br/>
            Example.com<br/>
            Box 564, Disneyland<br/>
            USA
        </address>
        <LocationMap />
    </div>

export default Exhibition