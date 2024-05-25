import React from 'react'

import { Typography } from '@mui/material'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import cards from './helper'
import arrowBack from '../../Images/arrow_back.svg'
import nextArrow from '../../Images/arrow_forward.svg'

import './style.scss'
const Carousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 800,

    cssEase: 'linear',
    nextArrow: <img src={nextArrow} alt="arrow" />,
    prevArrow: <img src={arrowBack} alt="arrow" />,
  }

  return (
    <div className="slider-section">
      <Slider {...settings} className={'details-slick'}>
        {cards.map((card) => (
          <div key={card.id}>
            <div className="client-card">
              <img
                className="side-right-user-img"
                src={card.image}
                alt=""
                style={{ borderRadius: '50%' }}
              />
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography component="div">{card.subtitle}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="desc"
              >
                <q>{card.content}</q>
              </Typography>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
