import React, { useState, useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import './DashboardSlider.css'
import rectangle from '../../Assets/Image/Dashboard/Rectangle 14.png'
import { Button, Grid } from '@material-ui/core'
import axios from 'axios'
import Next from '../../Assets/Image/Dashboard/next.png'
import Prev from '../../Assets/Image/Dashboard/prev.png'
import Cards from '../Cards/DashoardCards'
import { useTranslation } from 'react-i18next'
import Logo from '../../Assets/Image/Dashboard/logo.png'
import CardActionArea from '@material-ui/core/CardActionArea';

function DashboardSlider(props) {
  const { t, i18n } = useTranslation();
  const [details, setDetails] = useState([]);
  const [ren, setRen] = useState(false);
  const [selected, setSelected] = useState([]);

console.log(props,"sliderdan")
  useEffect(() => {
    setDetails(props.aranan)
    setRen(true);
  }, [])
  useEffect(() => {
    setSelected(true)
    console.log("seçtim",selected)
  }, [selected])

  useEffect(() => {
    console.log("değişti", props.detail)
    console.log(props.slideNum)
  }, [props.detail])

  const onSubmitHandler = () => {
    // setSelectedSlide(true);
    // console.log(selectedSlide);
    console.log("seçtim")
    setSelected(true)
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <Button style={{ position: 'relative', top: "50%" }}><img style={{ width: "14.86px" }} src={Next} alt="" /></Button>
      </div>
    )
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <Button style={{ position: 'relative', top: "50%" }}><img style={{ width: "14.86px" }} src={Prev} alt="" /></Button>
      </div>
    )
  }
console.log(props.slideNum)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.slideNum,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          initialSlide: 1,
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
  // {(selectedSlide == true &&
  //   props.sliderLevelValue == detail.quiz_level &&
  //   props.sliderChapterValue == detail.quiz_type &&
  //   props.sliderTopicValue == detail.quiz_topic) ? (
  //     <Grid xs={4} style={{ position: "inherit" },{border:"1px solid #C24DC0"}}>
  //   <li>{detail.contents}</li> </Grid>
  //   ) : ("sefc")}
  // console.log(props.detail, "props.detail1");
  return (
    <div>
      {(ren) ? <Slider {...settings} className={"slick-slider"} >
        {
          console.log("detail: ", details),

          props.detail.map((detail1) => {
            return (
              <div >
              <Cards text1={detail1.quizName} content={detail1.quizContents} quiz={props.detail} quizId={detail1.quizID} />
              {/* {(props.slideNum == 1)?(<div>{detail1.quizContents}</div>):("")} */}
            </div>
            )
          })}
      </Slider > : ""}
    </div >
  );
}



// details.filter((detail) => props.sliderChapterValue.includes(detail.quiz_type)).map((detail1)=>{
//   console.log(detail1.quiz_type)
//   return (

//     <Cards
//       text1={detail1.quiz_type}

//     />
//     )}),
//     (props.quiz_type == "1")

export default DashboardSlider;