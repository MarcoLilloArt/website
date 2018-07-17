import React from 'react'
import { translate } from 'react-i18next'

import style from './exhibition.module.css'
import LocationMap from './map'

const Exhibition = ({ t }) =>
    <div className={style.container}>
        <address>
            {t('venueName')} <br/>
            {t('venueAddress')}
        </address>
        <LocationMap />
    </div>

export default translate('main')(Exhibition)