// CardSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", text: "This is card one content" },
    { id: 2, title: "Card 2", text: "This is card two content" },
    { id: 3, title: "Card 3", text: "This is card three content" },
    { id: 4, title: "Card 4", text: "This is card four content" },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1} // always one card per slide
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card">
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
