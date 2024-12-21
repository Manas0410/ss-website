import Slider from "react-slick";
import { GalleryImages } from "../constants";
import { useRef } from "react";

const Gallery = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    ontouchmove: false,
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="w-full bg-white cursor-grab relative">
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {GalleryImages.map((image, index) => (
          <div key={index} className="px-3">
            <div className="relative overflow-hidden shadow-lg ">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 size-[50px]"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 size-[50px]"
      >
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Gallery;
