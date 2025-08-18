import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceSlider.css"; // custom css

const services = [
  {
    title: "Web Development",
    description: "We build fast, responsive, and modern websites.",
  },
  {
    title: "Mobile Apps",
    description: "High-performance mobile apps for Android and iOS.",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and user-friendly designs for your projects.",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable, and efficient cloud services.",
  },
  {
    title: "Digital Marketing",
    description: "Grow your business with targeted marketing strategies.",
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
          arrows: false, // no arrows on mobile
          dots: true, // show dots only
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
