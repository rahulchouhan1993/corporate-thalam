import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Reviews = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const reviews = [
    {
      img: "images/Ellipse 3.png",
      name: "Shikha Sharma",
      date: "May 15, 2025",
      stars: "★★★☆☆",
      text: "I recently had the pleasure of using the personal branding service from Corporate Thalam 25, and I can’t recommend it enough! The team helped me identify my unique strengths and crafted a brand strategy that truly reflects who I am."
    },
    {
      img: "images/customericon.png",
      name: "Rahul Mehta",
      date: "June 10, 2025",
      stars: "★★★☆☆",
      text: "The team was exceptionally supportive and responsive to my individual needs. They guided me in recognizing my unique qualities and developed a brand strategy."
    },
    {
      img: "images/Ellipse 4.png",
      name: "Anita Desai",
      date: "July 20, 2025",
      stars: "★★★☆☆",
      text: "The team was wonderfully supportive and attentive. They assisted me in pinpointing my distinct strengths and created a brand strategy that authentically represents me."
    },
    {
      img: "images/customericon.png",
      name: "Rahul Mehta",
      date: "June 10, 2025",
      stars: "★★★☆☆",
      text: "The team was exceptionally supportive and responsive to my individual needs. They guided me in recognizing my unique qualities and developed a brand strategy."
    }
  ];

  return (
    <div className="review-slider">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.img} alt={review.name} />
            <h4>{review.name}</h4>
            <div className="date">{review.date}</div>
            <div className="stars">{review.stars}</div>
            <p>{review.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
