import React from "react";
import Slider from "react-slick";

import bannerMobile from "../../assets/images/bannerMobile.svg";
import bannerDesktop from "../../assets/images/bannerDesktop.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.css";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsDesk = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel: React.FC = () => {
  return (
    <>
      <div className="carouselMobile">
        <Slider {...settings}>
          <img
            src={bannerMobile}
            alt="Mobile Banner"
            width="100%"
            height="auto"
          />
          <img
            src={bannerMobile}
            alt="Mobile Banner"
            width="100%"
            height="auto"
          />
        </Slider>
      </div>
      <div className="carouselDesktop">
        <Slider {...settingsDesk}>
          <img
            src={bannerDesktop}
            alt="Desktop Banner"
            width="100%"
            height="auto"
          />
          <img
            src={bannerDesktop}
            alt="Desktop Banner"
            width="100%"
            height="auto"
          />
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
