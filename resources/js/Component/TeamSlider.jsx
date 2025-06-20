// TeamSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TeamSlider = ({ images, title }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="team-slider-wrapper">
      {title && <h3 className="slider-title">{title}</h3>}
      <Slider {...settings} className="team-slider">
        {images.map((img, idx) => (
          <div className="team-member text-center" key={idx}>
            <img src={img} alt={`Member ${idx + 1}`} />
            <p>Shree Abirami</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
