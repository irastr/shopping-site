import React, { Component } from "react";

class Item extends Component {
  constructor() {
    super();

    this.click = this.click.bind(this);
  }

  state = {
    added: false
  };

  click() {
    this.props.onAddToCart(this.props.item);
    this.onAddToCartChangeContent();
  }

  onAddToCartChangeContent = () => {
    this.setState(prevState => {
      return { added: !prevState.added };
    });
  };

  render() {
    let btn_content = this.state.added ? "item added !" : "add to cart ";
    return (
      <a
        href=""
        className="product-card__link"
        onClick={e => e.preventDefault()}
      >
        <figure className="product-card__img-wrap">
          <figcaption className="product-card__descr-wrap">
            <h3 className="product-card__title">{this.props.item.name}</h3>

            <span className="product-card__price">
              {this.props.item.price} $
            </span>
          </figcaption>
          <div className="product-card__img-container">
            <img
              src={this.props.item.img}
              alt=""
              className="product-card__img"
            />
          </div>
        </figure>
        <div className="button-wrap">
          <button
            type=""
            className="ui--btn product-card__btn"
            onClick={this.click}
          >
            {btn_content} <i className="fas fa-shopping-cart" />
          </button>
        </div>
      </a>
    );
  }
}

export default Item;
