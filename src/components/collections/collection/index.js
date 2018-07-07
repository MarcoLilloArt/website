import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import style from './collection.module.css'

const Collection = ({ name }) =>
    <div className={style.container}>
        <div className={style.title} children={name} />
        <Slider
            slidesToShow={4}
            slidesToScroll={4}
            className={style.carousel}
        >
            {
                [1,2,3,4,5].map((i) =>
                    <div key={i} className={style.slideItem}>
                        <img key={i} className={style.image} src="http://via.placeholder.com/150x150" />
                    </div>
                )
            }
        </Slider>
    </div>

// http://via.placeholder.com/350x150

export default Collection