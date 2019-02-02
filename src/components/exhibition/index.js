import React from 'react'
import { translate } from 'react-i18next'

import style from './exhibition.module.css'
import LocationMap from './map'

const Exhibition = ({ t }) =>
    <div>
        <div className={style.map}>
            <LocationMap />
        </div>
        <br/>
        <br/>
        <address>
            {t('venueName')} <br/>
            {t('venueAddress')}
        </address>
    </div>

export default translate('main')(Exhibition)
