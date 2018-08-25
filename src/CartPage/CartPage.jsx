import React from "react";
import CartItem from "./CartItem/CartItem";

const CartPage = ({ items }) => {
  return (
    <ul className="cart__list">
      {" "}
      {items.map(item => (
        <li key={item.id} className="cart__item">
          {" "}
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CartPage;
