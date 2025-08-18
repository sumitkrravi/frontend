// src/components/ServicesSlider.js
import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ServicesSlider.css'; // CSS for cards and arrows

// Custom Arrow Components with size and styling
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <FaArrowRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <FaArrowLeft size={20} />
  </div>
);

export default function ServicesSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,   // desktop - 3 cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } }, // tablet - 2 cards
      { breakpoint: 768, settings: { slidesToShow: 1 } }, // mobile - 1 card
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
