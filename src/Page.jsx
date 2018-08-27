import React, { Component } from "react";

import Hero from "./Hero/Hero";
import Shop from "./Shop/Shop";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import ShoppingList from "./ShoppingList/ShoppingList";
import { data } from "./static-data";
import CartPage from "./CartPage/CartPage";
import EmptyCart from "./EmptyCart/EmptyCart";

import "react-sticky-header/styles.css";
// import StickyHeader from "react-sticky-header";

import "./assets/scss/main.scss";

class Homepage extends Component {
  state = {
    cart: [],
    cartTotal: 0
  };

  handleAddToCart = item => {
    this.setState({
      cart: [...this.state.cart, item.id],
      cartTotal: this.state.cartTotal + item.price
    });
  };

  handleRemoveOne = item => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ],
      cartTotal: this.state.cartTotal - item.price
    });
  };

  handleRemoveAll = item => {
    const result = this.state.cart.filter(ite => ite !== item.id);
    console.log(result);
    this.setState({
      cart: [...result],
      cartTotal: this.state.cartTotal - item.price * item.count
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

    if (this.state.cart.length === 0) {
      // return "Cart is empty, add something";
      return <EmptyCart />;
    } else {
      return (
        <CartPage
          items={cartItems}
          onAddOne={this.handleAddToCart}
          onRemoveOne={this.handleRemoveOne}
          handleRemoveAll={this.handleRemoveAll}
          cartTotal={this.state.cartTotal}
        />
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <Hero
          renderCart={this.renderCart()}
          cartQuantity={this.state.cart.length}
        />
        {/* <div className="cart-counter"> {this.state.cart.length} </div> */}
        <Shop onAddToCart={this.handleAddToCart} />
        <Testimonials />
        <ShoppingList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Homepage;
