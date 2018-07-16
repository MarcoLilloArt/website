import React from 'react'

import style from './collections.module.css'

import Collection from './collection'

const Collections = ({
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
        <Collection
            name='other'
            images={otherNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name='tools'
            images={toolsNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name='from nowhere with love'
            images={fromNowhereNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
        <Collection
            name='turbulence'
            images={turbulenceNodes.map(n => n.node)}
            showOverlay={showOverlay}
        />
    </div>

export default Collections