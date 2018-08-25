import React, { Component } from "react";
import Header from "../Header/Header";
import { HashLink as Link } from "react-router-hash-link";
import Scroll from "smooth-scroll";

class Hero extends Component {
  componentDidMount() {
    let scroll = new Scroll('a[href*="#"]');
  }
  render() {
    return (
      <div className="section--hero">
        <Header renderCart={this.props.renderCart} />
        <div className="container--hero">
          <h1 className="hero_title">Our clothing, your comfort </h1>
          <p className="hero_descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sia do
            euismod tempar incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="slider-wrap ">
          <Link to="#shop">
            <i className="fas fa-chevron-down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;

// const Hero = ({ renderCart }) => {
//   return (

//   );
// };

// export default Hero;
