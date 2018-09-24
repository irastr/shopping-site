import React, { Component } from "react";
import Slider from "react-slick";
// import tShirt from "../assets/img/tshirt.png";
import testOne from "../assets/img/testimonials-1.png";
import testTwo from "../assets/img/testimonials-2.png";
import testThree from "../assets/img/testimonials-3.png";

class Testimonials extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            swipeToSlide: true
          }
        }
      ]
    };

    return (
      <div className="section-testimonials">
        <h3 className="testimonials__title">About us</h3>

        <Slider {...settings}>
          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testOne} className="testimonials__img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
          </div>

          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testTwo} className="testimonials__img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit numquam
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
          </div>

          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testThree} className="testimonials__img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit numquam quos
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
          </div>
          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testThree} className="testimonials__img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit numquam quos
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
          </div>
          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testThree} className="testimonials__img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Testimonials;
