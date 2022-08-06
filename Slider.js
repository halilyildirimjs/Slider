import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import './Slider.css'
// import "slick-carousel/slick/slick-theme.css";
import g1 from '../../Assets/Image/WhyLingush/g1.png'
import g2 from '../../Assets/Image/WhyLingush/g2.png'
import p3 from '../../Assets/Image/WhyLingush/p3.png'
import p4 from '../../Assets/Image/WhyLingush/p4.png'
import p5 from '../../Assets/Image/WhyLingush/p5.png'
import p6 from '../../Assets/Image/WhyLingush/p6.png'
import Next from '../../Assets/Image/WhyLingush/right.png'
import Prev from '../../Assets/Image/WhyLingush/left.png'
import { Button } from "@material-ui/core";
import Cards from '../Cards/Cards'
import { useTranslation } from 'react-i18next';

function Responsive (){
  const { t, i18n } = useTranslation();
  const NextArrow = (props) =>{
    const { onClick } = props;
    return (
      <div onClick={onClick}>
      <Button style={{position:'relative',top:"50%"}}><img style={{width:"48px"}} src={Next} alt=""/></Button>
    </div>
    )
  }
    
  const PrevArrow = (props) =>{
    const { onClick } = props;
    return (
      <div onClick={onClick}>
      <Button style={{position:'relative',top:"50%"}}><img style={{width:"48px"}} src={Prev} alt=""/></Button>
    </div>
    )
  }
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Cards source={g1} text1={t('AR.1')} text2={t('AR.2')}/>
          </div>
          <div>
            <Cards source={p6} text1={t('Powered.1')} text2={t('Powered.2')}/>
          </div>
          <div>
            <Cards source={p3} text1={t('Competitive.1')} text2={t('Competitive.2')}/>
          </div>
          <div>
            <Cards source={p5} text1={t('Boost.1')} text2={t('Boost.2')}/>
          </div>
          <div>
            <Cards source={p4} text1={t('Premium.1')} text2={t('Premium.2')}/>
          </div>
          <div>
            <Cards source={g2} text1={t('Interactive.1')} text2={t('Interactive.2')}/>
          </div>
        </Slider>
      </div>
    );
  }

  export default Responsive;