import React from "react";
import emptyCart from "../assets/img/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="empty-cart-wrap">
      <img src={emptyCart} alt="" />
      {/* <p> The cart is empty. </p> */}
    </div>
  );
};

export default EmptyCart;
