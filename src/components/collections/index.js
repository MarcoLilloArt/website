import React from 'react'

import style from './collections.module.css'

import Collection from './collection'

const Collections = () =>
    <div className={style.container}>
        <Collection name='triangles' />
        <Collection name='dream within a dream' />
        <Collection name='triangles' />
    </div>

export default Collections