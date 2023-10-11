import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../assets/images/slide1.png";
import image2 from "../assets/images/slide2.png";
import "../index.css";

const images = [image1, image2, image1, image2, image2, image2];

const Carousel = () => {
  // Slick settings with dots and no arrows
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true, // Show dots for navigation
    dotsClass: "slick-dots", // Use a custom class for styling dots
    centerMode: true,
    centerPadding: "0",
    arrows: false, // Hide arrows
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slider ${index + 1}`} className="p-4" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
