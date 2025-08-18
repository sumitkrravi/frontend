import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceSlider.css";

const services = [
  {
    title: "Service 1",
    description: "This is service 1",
  },
  {
    title: "Service 2",
    description: "This is service 2",
  },
  {
    title: "Service 3",
    description: "This is service 3",
  },
  {
    title: "Service 4",
    description: "This is service 4",
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // hide arrows in mobile
          dots: true, // show dots
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index}>
            <div className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
