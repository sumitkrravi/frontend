import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      title: "Card One",
      description: "This is the first card",
    },
    {
      id: 2,
      title: "Card Two",
      description: "This is the second card",
    },
    {
      id: 3,
      title: "Card Three",
      description: "This is the third card",
    },
    {
      id: 4,
      title: "Card Four",
      description: "This is the fourth card",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // ✅ one card per slide
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // ✅ mobile pe bhi ek hi card
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
