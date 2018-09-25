import React from 'react'
import { translate } from 'react-i18next'

import style from './collections.module.css'

import Collection from './collection'

const Collections = ({
    t,
    triangleNodes,
    dreamNodes,
    bitsNodes,
    showOverlay,
    otherNodes,
    toolsNodes,
    fromNowhereNodes,
    turbulenceNodes,
}) =>
    <div className={style.container}>
        <Collection
            name={t('collectionTitleTriangles')}
            images={triangleNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name={t('collectionTitleDream')}
            images={dreamNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name={t('collectionTitlePieces')}
            images={bitsNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name={t('collectionTitleOther')}
            images={otherNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name={t('collectionTitleTools')}
            images={toolsNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name={t('collectionTitleNowhere')}
            images={fromNowhereNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name={t('collectionTitleTurbulence')}
            images={turbulenceNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
    </div>

export default translate('main')(Collections)