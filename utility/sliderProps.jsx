import React from "react";
import Slider from "react-slick"; // Assuming you are using react-slick for slider functionality

const noxfolioSlider = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  focusOnSelect: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SliderComponent = () => {
  return (
    <Slider {...noxfolioSlider}>
      {/* Your slider content goes here */}
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default SliderComponent;
