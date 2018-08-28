import React from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";
import nothingFound from "../../assets/img/search_error.jpg";

const ItemList = props => {
  return (
    <React.Fragment>
      {props.found ? (
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
      ) : (
        <div className="nothing-found">
          <img src={nothingFound} alt="" />
        </div>
      )}
    </React.Fragment>
  );
};
ItemList.propTypes = {
  items: PropTypes.array.isRequired
};
export default ItemList;
