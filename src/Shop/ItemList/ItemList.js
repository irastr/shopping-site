import React from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";

const ItemList = props => {
  return (
    <ul className="product-card__list">
      {props.items.map(item => (
        <li key={item.id} className="product-card__item">
          <Item
            item={item}
            onAddToCart={props.onAddToCart}
            onAddToCartChangeContent={props.onAddToCartChangeContent}
            btnContent={props.btnContent}
          />
        </li>
      ))}
    </ul>
  );
};
ItemList.propTypes = {
  items: PropTypes.array.isRequired
};
export default ItemList;
