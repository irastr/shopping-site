import React from "react";
import CartItem from "./CartItem/CartItem";

const CartPage = ({
  items,
  onAddOne,
  onRemoveOne,
  handleRemoveAll,
  cartTotal
}) => {
  return (
    <React.Fragment>
      <div className="cart-page-wrap">
        <ul className="cart__list">
          {" "}
          {items.map(item => (
            <li key={item.id} className="cart__item">
              {" "}
              <CartItem
                item={item}
                onAddOne={onAddOne}
                onRemoveOne={onRemoveOne}
                handleRemoveAll={handleRemoveAll}
                // cartTotal={cartTotal}
              />
            </li>
          ))}
        </ul>
        <div className="total-price-wrap">
          <span className="total-price">Total price: {cartTotal}$ </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
