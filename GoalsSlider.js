import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './GoalsSlider.css'
import birds from '../../Assets/Image/Dashboard/birds.png'
import food from '../../Assets/Image/Dashboard/food.png'
import fruits from '../../Assets/Image/Dashboard/fruits.png'
import vehicles from '../../Assets/Image/Dashboard/vehicles.png'
import Next from '../../Assets/Image/Dashboard/next.png'
import Prev from '../../Assets/Image/Dashboard/prev.png'
import { Button } from "@material-ui/core";
import Cards from '../Cards/Cards'
import { useTranslation } from 'react-i18next';

function Responsive() {
  const { t, i18n } = useTranslation();
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <Button style={{ position: 'relative', top: "35%" }}><img style={{ width: "48px" }} src={Next} alt="" /></Button>
      </div>
    )
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <Button style={{ position: 'relative', top: "35%" }}><img style={{ width: "48px" }} src={Prev} alt="" /></Button>
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Cards source={fruits} text1={''} text2={''} />
        </div>
        <div>
          <Cards source={birds} text1={''} text2={''} />
        </div>
        <div>
          <Cards source={vehicles} text1={''} text2={''} />
        </div>
        <div>
          <Cards source={food} text1={''} text2={''} />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;