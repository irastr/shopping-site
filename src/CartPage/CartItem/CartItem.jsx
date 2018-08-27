import React from "react";

const CartItem = ({ item, onAddOne, onRemoveOne, handleRemoveAll }) => {
  return (
    <React.Fragment>
      <div className="cart-item--left">
        <button
          className="item__remove"
          onClick={() => handleRemoveAll(item)}
          // disabled={item.count > 1}
        >
          <div className="item__close-wrap">
            <i class="far fa-times-circle" />
          </div>
        </button>
        <div className="cart__img-wrap">
          <img src={item.img} alt="" className="cart__img" />
        </div>
        <span className="cart__name"> {item.name} </span>
      </div>
      <div className="cart-item--right">
        <span className="item__price">{item.price}$ </span>

        <div className="item__controls">
          <button
            className="item__controls--remove"
            onClick={() => onRemoveOne(item)}
            disabled={item.count === 1}
          >
            &ndash;
          </button>{" "}
          <span className="CartItem-count">{item.count}</span>{" "}
          <button
            className="item__controls--add"
            onClick={() => onAddOne(item)}
          >
            +
          </button>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
