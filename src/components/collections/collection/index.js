import React from 'react'
import Slider from 'react-slick'
import Image from 'gatsby-image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import style from './collection.module.css'

const BigImage = ({ image }) =>
    <div className={style.bigImageContainer}>
        <Image className={style.bigImage} sizes={image.sizes} />
    </div>

const Collection = ({ name, images, showOverlay }) =>
    <div className={style.container}>
        <div className={style.title} children={name} />
        <Slider
            slidesToShow={4}
            slidesToScroll={4}
            className={style.carousel}
        >
            {
                images.map((image, index) =>
                    <div key={index} className={style.slideItem}>
                        <Image className={style.image} sizes={image.sizes} />
                        <div onClick={() => showOverlay(BigImage, { image })} className={style.imageOverlay} />
                    </div>
                )
            }
        </Slider>
    </div>

Collection.defaultProps = {
    images: [],
}

export default Collection