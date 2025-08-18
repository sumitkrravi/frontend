// ServiceSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { id: 1, title: "Service 1", desc: "Description for Service 1" },
  { id: 2, title: "Service 2", desc: "Description for Service 2" },
  { id: 3, title: "Service 3", desc: "Description for Service 3" },
  { id: 4, title: "Service 4", desc: "Description for Service 4" },
  { id: 5, title: "Service 5", desc: "Description for Service 5" },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    arrows: true, // desktop arrows visible
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1, // only one card
          slidesToScroll: 1,
          arrows: false, // hide arrows in mobile
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ padding: "20px" }}>
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="p-2">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
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
