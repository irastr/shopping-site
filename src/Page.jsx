import React, { Component } from "react";

import Hero from "./Hero/Hero";
import Shop from "./Shop/Shop";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import { data } from "./static-data";
import CartPage from "./CartPage/CartPage";

import "./assets/scss/main.scss";

class Homepage extends Component {
  state = {
    cart: []
  };

  handleAddToCart = item => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  };

  renderCart() {
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    let cartItems = Object.keys(itemCounts).map(itemId => {
      let item = data.find(item => item.id === parseInt(itemId, 10));
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });

    return (
      <CartPage
        items={cartItems}
        // onAddOne={this.handleAddToCart}
        // onRemoveOne={this.handleRemoveOne}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Hero renderCart={this.renderCart()} />
        <div>{this.state.cart.length} items</div>
        <Shop onAddToCart={this.handleAddToCart} />
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Homepage;
