import React from "react";
// import PropTypes from "prop-types";

const Item = ({ item, onAddToCart }) => {
  return (
    // <div className="product-card-wrap">
    <a href="" className="product-card__link" onClick={e => e.preventDefault()}>
      <figure className="product-card__img-wrap">
        <figcaption className="product-card__descr-wrap">
          <h3 className="product-card__title">{item.name}</h3>

          <span className="product-card__price">{item.price} $</span>
        </figcaption>
        <div className="product-card__img-container">
          <img src={item.img} alt="" className="product-card__img" />
        </div>
      </figure>
      <div className="button-wrap">
        <button
          type=""
          className="ui--btn product-card__btn"
          onClick={() => onAddToCart(item)}
        >
          add to cart <i className="fas fa-shopping-cart" />
        </button>
      </div>
    </a>
    // </div>
  );

  // Item.propTypes = {
  //   item: PropTypes.object.isRequired
  // };
};

export default Item;
