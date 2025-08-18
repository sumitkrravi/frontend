import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSlider = () => {
  const settings = {
    dots: false, // default desktop
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop pe 3
    slidesToScroll: 1,
    arrows: true, // desktop pe arrows show karega
    responsive: [
      {
        breakpoint: 768, // mobile ke liye
        settings: {
          slidesToShow: 1, // mobile me ek card
          slidesToScroll: 1,
          arrows: false, // mobile me arrows band
          dots: true, // mobile me dots on
        },
      },
    ],
  };

  const services = [
    { id: 1, title: "Service 1", desc: "This is service 1" },
    { id: 2, title: "Service 2", desc: "This is service 2" },
    { id: 3, title: "Service 3", desc: "This is service 3" },
    { id: 4, title: "Service 4", desc: "This is service 4" },
    { id: 5, title: "Service 5", desc: "This is service 5" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="p-3">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
