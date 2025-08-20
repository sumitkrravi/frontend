import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { services } from "../data/ServicesData";
// import {FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ServicesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <FaArrowLeft />,
    // prevArrow: <FaArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold handwriting text-center mb-6">
        Latest Lunch Services     
      </h2>

      <div className="relative bg-red p-4 rounded-lg ">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-2">
              <div className="bg-red rounded-xl p-4 text-center hover:shadow-lg transition">
                <img className=""
                  src={service.image}
                  alt={service.title}
                />
                <h3 className="font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// const NextArrow = ({ onClick }) => (
//   <div
//     // className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black text-white p-2 rounded-full"
//     onClick={onClick}
//   >
//     <FaArrowRight />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     // className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black text-white p-2 rounded-full"
//     onClick={onClick}
//   >
//     <FaArrowLeft />
//   </div>
// );

export default ServicesSlider;
