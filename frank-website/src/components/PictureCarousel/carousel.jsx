import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./carousel.module.css";
import OneCar from "../../assets/OneCar.png";
import twoCar from "../../assets/twoCar.png";
import threeCar from "../../assets/threeCar.png";

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>›</div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>‹</div>
);

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        <div><img src={OneCar} alt="One Car" className={styles.carouselImage} /></div>
        <div><img src={twoCar} alt="Two Car" className={styles.carouselImage} /></div>
        <div><img src={threeCar} alt="Three Car" className={styles.carouselImage} /></div>
      </Slider>
    </div>
  );
};

export default Carousel;