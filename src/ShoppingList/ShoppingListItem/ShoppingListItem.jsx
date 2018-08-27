import React, { Component } from "react";

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, name } = this.props;
    onDelete(name);
    // this.props.onDelete(this.props.name);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();
    this.props.onEditSubmit(
      this.nameInput.value,
      this.priceInput.value,
      this.props.name
    );
    this.setState({ isEdit: false });
  }

  render() {
    const { name, price } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <form
            onSubmit={this.onEditSubmit}
            className="shopping-list__edit-wrap"
          >
            {" "}
            <input
              className="shopping-list__name"
              // className="add-item__name"
              placeholder="Name"
              ref={nameInput => (this.nameInput = nameInput)}
              defaultValue={name}
            />
            <input
              className="shopping-list__quantity"
              placeholder="Price"
              ref={priceInput => (this.priceInput = priceInput)}
              defaultValue={price}
            />
            <button className="edit-save-btn">
              <i class="fas fa-save" /> Save
            </button>
          </form>
        ) : (
          <div className="shopping-list__items-wrap">
            <span className="shopping-list__name">{name}</span>
            <span className="shopping-list__quantity">{price}</span>
            <button onClick={this.onEdit} className="edit-btn">
              <i class="fas fa-pencil-alt" /> Edit
            </button>
            <button onClick={this.onDelete} className="delete-btn">
              <i class="fas fa-trash-alt" /> Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingListItem;
