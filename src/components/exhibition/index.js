import React from 'react'
import { translate } from 'react-i18next'

import style from './exhibition.module.css'
import LocationVideo from './video'

const Exhibition = ({ t }) =>

// Venue Name and Address backup, change to Exhibitions List instead
//  <div>
//       <address>
//           {t('venueName')} <br/>
//           {t('venueAddress')}
//      </address> 

   <div>
       <address>
            {t('exhibitionsList')}
        </address> 
        <br/>
        <br/>
        <div className={style.video}>
            <LocationVideo />
        </div>
    </div>

export default translate('main')(Exhibition)