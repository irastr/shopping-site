import React, { Component } from "react";
import Slider from "react-slick";
// import tShirt from "../assets/img/tshirt.png";
import testOne from "../assets/img/testimonials-1.png";
import testTwo from "../assets/img/testimonials-2.png";
import testThree from "../assets/img/testimonials-3.png";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Testimonials = () => {
//   return (
//     <div className="section-testimonials">
//       <p className="testimonials__content">
//         {" "}
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
//         reprehenderit numquam quos repellat est accusamus itaque suscipit. Saepe
//         atque tenetur voluptate sequi. Voluptatum recusandae veniam quisquam
//         eligendi, repellat fuga tenetur.
//       </p>
//     </div>
//   );
// };

// export default Testimonials;

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
      centerMode: true
    };

    // var settings = {
    //   dots: true
    // };
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
              {/* <p className="testimonials__content"> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
            {/* <span className="testimonials__name">Freelance </span> */}
          </div>

          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testTwo} className="testimonials__img" alt="" />
              {/* <p className="testimonials__content"> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit numquam
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
            {/* <span className="testimonials__name">Freelance </span> */}
          </div>

          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testThree} className="testimonials__img" alt="" />
              {/* <p className="testimonials__content"> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit numquam quos
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
            {/* <span className="testimonials__name">Freelance </span> */}
          </div>
          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testThree} className="testimonials__img" alt="" />
              {/* <p className="testimonials__content"> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit numquam quos
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
            {/* <span className="testimonials__name">Freelance </span> */}
          </div>
          <div className="testimonials__content">
            <div className="testimonials__icon">
              <i className="fas fa-quote-left" />
            </div>
            <div className="testimonials__img-wrap">
              <img src={testThree} className="testimonials__img" alt="" />
              {/* <p className="testimonials__content"> */}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores reprehenderit
            </p>
            <span className="testimonials__name">Ira Strikun </span> <br />
            <span className="testimonials__position"> CEO </span>
            {/* <span className="testimonials__name">Freelance </span> */}
          </div>
        </Slider>
      </div>
    );
  }
}

export default Testimonials;
