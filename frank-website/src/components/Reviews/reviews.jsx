import React from "react";
import Slider from "react-slick";
import styles from "./reviews.module.css"; // CSS Module
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profilePicture from "../../assets/profilePicture.jpg"; // default profile picture
import { useTranslation } from "react-i18next";  // i18n hook

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    ▶
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    ◀
  </div>
);

// Reviews only keep id, rating, and image
const reviews = [
  { id: 1, rating: 5, img: profilePicture },
  { id: 2, rating: 5, img: profilePicture },
  { id: 3, rating: 5, img: profilePicture },
  { id: 4, rating: 5, img: profilePicture },
  { id: 5, rating: 5, img: profilePicture },
];

export default function ReviewsCarousel() {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 reviews at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.reviewsContainer}>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCardWrapper}>
              <div className={styles.reviewCard}>
                <img
                  src={review.img}
                  alt={t(`reviews.${review.id}.name`)}
                  className={styles.profilePic}
                />
                <h3 className={styles.reviewName}>
                  {t(`reviews.${review.id}.name`)}
                </h3>

                {/* Stars */}
                <div className={styles.stars}>
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < review.rating
                            ? `${styles.star} ${styles.filled}`
                            : styles.star
                        }
                      >
                        {i < review.rating ? "★" : "☆"}
                      </span>
                    ))}
                </div>

                <p className={styles.reviewText}>
                  {t(`reviews.${review.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

