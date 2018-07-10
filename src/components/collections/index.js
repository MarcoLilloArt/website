import React from 'react'

import style from './collections.module.css'

import Collection from './collection'

const Collections = ({
    triangleNodes,
    dreamNodes,
    bitsNodes,
    showOverlay,
}) =>
    <div className={style.container}>
        <Collection
            name='triangles'
            images={triangleNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name='dream within a dream'
            images={dreamNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name='triangles'
            images={bitsNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
    </div>

export default Collections