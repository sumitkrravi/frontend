import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", desc: "This is card one" },
    { id: 2, title: "Card 2", desc: "This is card two" },
    { id: 3, title: "Card 3", desc: "This is card three" },
    { id: 4, title: "Card 4", desc: "This is card four" },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile me 1 card
          768: { slidesPerView: 3 }, // desktop me 3 card
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
