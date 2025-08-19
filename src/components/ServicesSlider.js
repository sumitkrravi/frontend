import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesSlider.css";

const services = [
  {
    logo: "https://res.cloudinary.com/dnnokrofc/image/upload/v1755598631/hdzvz5gy7rssm5jgam3f.jpg",
    title: "Document Services",
    description: "Pan Card, Income Certificate\nCaste Certificate, Voter Card",
  },
  {
    logo: "https://res.cloudinary.com/dnnokrofc/image/upload/v1755598379/wujewala89dmnrgjlihp.png",
    title: "Financial Services",
    description: "Bank Account, Loan Certificate\nTax Services, Insurance",
  },
  {
    logo: "https://res.cloudinary.com/dnnokrofc/image/upload/v1755598379/wujewala89dmnrgjlihp.png",
    title: "Property Services",
    description: "Property Registration, Sale Deed\nMutation, Encumbrance Certificate",
  },
  {
    logo: "https://res.cloudinary.com/dnnokrofc/image/upload/v1755598379/wujewala89dmnrgjlihp.png",
    title: "Education Services",
    description: "Marksheet, Transfer Certificate\nDegree Certificate, Migration",
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // 👈 default me arrows on rahenge
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // 👈 mobile me arrows hide
          dots: true,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slider-container dark:bg-black py-6">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index}>
            <div
              className="
                card 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 
                rounded-2xl shadow-md dark:shadow-lg 
                p-6 transition-all duration-300 
                hover:shadow-2xl hover:scale-[1.02]
              "
            >
              <div className="card-logo mb-4 flex justify-center">
                <img
                  src={service.logo}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-center">{service.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line mt-2 text-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
