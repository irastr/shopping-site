import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = "";
    this.priceInput.value = "";
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className="shopping-list__add-item-wrap">
        <hr />
        {/* <h3>Add Product</h3> */}
        {/* <input
          className="add-item__name"
          placeholder="Name"
          ref={nameInput => (this.nameInput = nameInput)}
        /> */}

        <div className="name-input-wrap">
          <div class="search__input-wrap">
            <input
              className="input-search"
              className="search__input"
              type="text"
              required
              ref={nameInput => (this.nameInput = nameInput)}
            />
            <span class="bar" />
            <label class="search__field  ">What do you what to add?</label>
          </div>
        </div>

        <div className="search-input-wrap">
          <div class="search__input-wrap quantity-input-wrap">
            <input
              className="input-search"
              className="search__input"
              type="text"
              required
              ref={priceInput => (this.priceInput = priceInput)}
            />
            <span class="bar" />
            <label class="search__field">How many?</label>
          </div>
        </div>

        <button className="add-item__btn ui-btn">
          <i class="fas fa-plus" /> Add new product
        </button>
        {/* <hr /> */}
      </form>
    );
  }
}

export default AddItem;
