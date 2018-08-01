import React from 'react'
import Slider from 'react-slick'
import Image from 'gatsby-image'
import { Box } from 'reflexbox'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import style from './collection.module.css'

const BigImage = ({ images, slideIndex }) =>
    <Box flex align='center' w={['50vh', null, '50vw']}>
        <Slider
            slidesToShow={1}
            slidesToScroll={1}
            initialSlide={slideIndex}
            className={style.bigSlider}
        >
            {
                images.map(image => <Image sizes={image.sizes} />)
            }
        </Slider>
    </Box>

const imageBreakdown = ['38vw', '25vw', '17vw']

const getSlidesToShow = (images, defaultNumber = 4) => {
    let slidesToShow = defaultNumber

    if (images.length < slidesToShow) {
        slidesToShow = images.length
    }

    return slidesToShow
}

const Collection = ({ name, images, showOverlay }) => {
    let slidesToShow = getSlidesToShow(images)
    let slidesToShow600 = getSlidesToShow(images, 3)
    let slidesToShow400 = getSlidesToShow(images, 2)

    return (
        <div className={style.container}>
            <div className={style.title} children={name} />
            <Slider
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToShow}
                className={style.carousel}
                responsive={[
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: slidesToShow600,
                            slidesToScroll: slidesToShow600,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 450,
                        settings: {
                            slidesToShow: slidesToShow400,
                            slidesToScroll: slidesToShow400,
                            arrows: false,
                        }
                    },
                ]}
            >
                {
                    images.map((image, index) =>
                        <div key={index} className={style.slideItem}>
                            <Box w={imageBreakdown}>
                                <Image sizes={image.sizes} />
                            </Box>
                            <Box
                                w={imageBreakdown}
                                className={style.imageOverlay}
                                onClick={() => showOverlay(BigImage, { image, images, slideIndex: index })}
                            />
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

Collection.defaultProps = {
    images: [],
}

export default Collection