import React, { Component } from "react";
import ShoppingListItem from "./ShoppingListItem/ShoppingListItem";
import AddItem from "./AddItem/AddItem";

const products = [
  // {
  //   name: "iPad",
  //   price: 200
  // },
  // {
  //   name: "iPhone",
  //   price: 20
  // }
];

localStorage.setItem("products", JSON.stringify(products));

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
    this.onDelete = this.onDelete.bind(this);
    // this.onEdit = this.onEdit.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {
    const products = this.getProducts();
    products.push({
      name,
      price
    });

    this.setState({ products });
  }

  onDelete(name) {
    // console.log(name);
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    // console.log(filteredProducts);
    this.setState({ products: filteredProducts });
  }

  onEditSubmit(name, price, originalName) {
    // console.log(name, price);
    let products = this.getProducts();
    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products });
  }

  render() {
    return (
      <section className="shopping-list">
        <div className="shopping-list-wrap">
          <h1 className="shopping-list__title">Make your shopping list!</h1>

          {this.state.products.map(product => {
            return (
              <ShoppingListItem
                key={product.name}
                name={product.name}
                price={product.price}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })}
          <AddItem onAdd={this.onAdd} />
        </div>
      </section>
    );
  }
}

export default ShoppingList;
