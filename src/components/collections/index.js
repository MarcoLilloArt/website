import React from 'react'
import { translate } from 'react-i18next'

import style from './collections.module.css'

import Collection from './collection'
import { edgesFilterLocale } from '../../utils/i18n';

const Collections = ({ i18n, data, showOverlay }) =>
    <div className={style.container}>
        {
            data
                .filter(edgesFilterLocale(i18n))
                .map(collection =>
                    <Collection
                        name={collection.node.name}
                        images={collection.node.images}
                        showOverlay={showOverlay}
                    />
            )
        }
    </div>

export default translate('main')(Collections)