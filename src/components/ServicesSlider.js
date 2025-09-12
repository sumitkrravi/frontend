// src/components/ServicesSlider.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ServicesSlider.css'; // CSS for cards and dots

export default function ServicesSlider() {
  const [render, setRender] = useState(false);

  useEffect(() => {
    // refresh bug fix: slider ko dobara render karna
    setRender(true);
  }, []);

  if (!render) return null;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet/laptop
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 bg-light">
      <div className="container position-relative">
        <h2 className="text-center mb-4">Our Services</h2>
        <Slider {...settings}>
          <div>
            <div className="service-card text-center">
              <i className="bi bi-globe2 fs-1 text-primary mb-3"></i>
              <h5>Online Form Filling</h5>
              <p>Apply for government services, exams, and more — fast and hassle-free.</p>
            </div>
          </div>
          <div>
            <div className="service-card text-center">
              <i className="bi bi-printer fs-1 text-primary mb-3"></i>
              <h5>Printing & Scanning</h5>
              <p>High-quality printing, photocopying, and document scanning services.</p>
            </div>
          </div>
          <div>
            <div className="service-card text-center">
              <i className="bi bi-person-check-fill fs-1 text-primary mb-3"></i>
              <h5>Customer Support</h5>
              <p>Friendly support to help you every step of the way in your application journey.</p>
            </div>
          </div>
          <div>
            <div className="service-card text-center">
              <i className="bi bi-laptop fs-1 text-primary mb-3"></i>
              <h5>Computer Access</h5>
              <p>Use computers with internet access for official work and browsing.</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
