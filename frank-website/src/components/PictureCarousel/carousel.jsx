import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./carousel.module.css";

import Carousel_pic1 from "../../assets/carousel.jpg";
import Carousel_pic2 from "../../assets/carousel1.jpg";
import Carousel_pic3 from "../../assets/carousel2.jpg";
import Carousel_pic4 from "../../assets/carousel3.jpg";
import Carousel_pic5 from "../../assets/carousel4.jpg";
import Carousel_pic6 from "../../assets/carousel5.jpg";
import Carousel_pic7 from "../../assets/carousel6.jpg";


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
        <div><img src={Carousel_pic1} alt="Carousel picture 1" className={styles.carouselImage} /></div>
        
        <div><img src={Carousel_pic3} alt="Carousel picture 3" className={styles.carouselImage} /></div>
        <div><img src={Carousel_pic2} alt="Carousel picture 2" className={styles.carouselImage} /></div>
        <div><img src={Carousel_pic4} alt="Carousel picture 4" className={styles.carouselImage} /></div>
        <div><img src={Carousel_pic5} alt="Carousel picture 5" className={styles.carouselImage} /></div>
        <div><img src={Carousel_pic6} alt="Carousel picture 6" className={styles.carouselImage} /></div>
        <div><img src={Carousel_pic7} alt="Carousel picture 7" className={styles.carouselImage} /></div>
      </Slider>
    </div>
  );
};

export default Carousel;