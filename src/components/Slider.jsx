import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    ontouchmove: false,
  };

  return (
    <div className="w-full bg-white pb-[100px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <div className="relative w-full h-[520px] overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
