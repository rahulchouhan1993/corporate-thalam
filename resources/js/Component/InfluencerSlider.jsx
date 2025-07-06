import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const InfluencerSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 420,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const reviews = [
    {
      img: "/images/Frame 156.png",
      title: ""
    },
    {
      img: "/images/Frame 158.png",
      title: ""
    },
    {
      img: "/images/Frame 159.png",
      title: ""
    },
    {
      img: "/images/Frame 151.png",
      title: ""
    }
  ];

  return (
    <div className="review-slider">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.img} alt={review.name} />
            <p>{review.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfluencerSlider;
