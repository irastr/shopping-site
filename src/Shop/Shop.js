import React, { Component } from "react";
import Choice from "./Choice/Choice";

import ItemList from "./ItemList/ItemList";
import { data } from "../static-data";

class Shop extends Component {
  state = {
    // activeBtn: 0,
    data: [],
    checkedMen: false,
    checkedWomen: false
  };

  componentDidMount() {
    this.setState({ data: [...data] });
  }

  handleBtnClick = (category = "all") => {
    if (category === "all") {
      this.setState({ data: [...data] });
      return;
    }

    const response = data.filter(item => item.type === category);
    this.setState({ data: response });
    return;
  };

  handleCheck = category => {
    if (category === "women") {
      this.setState({ checkedWomen: !this.state.checkedWomen }, function() {
        if (
          this.state.checkedWomen === true &&
          this.state.checkedMen === true
        ) {
          this.setState({ data: [...data] });
        } else if (this.state.checkedWomen) {
          this.handleBtnClick(category);
        } else if (
          this.state.checkedWomen === false &&
          this.state.checkedMen === true
        ) {
          this.handleBtnClick("men");
        } else {
          this.setState({ data: [...data] });
        }
      });
    } else if (category === "men") {
      this.setState({ checkedMen: !this.state.checkedMen }, function() {
        if (
          this.state.checkedWomen === true &&
          this.state.checkedMen === true
        ) {
          this.setState({ data: [...data] });
        } else if (this.state.checkedMen) {
          this.handleBtnClick(category);
        } else if (
          this.state.checkedWomen === true &&
          this.state.checkedMen === false
        ) {
          this.handleBtnClick("women");
        } else {
          this.setState({ data: [...data] });
        }
      });
    }
  };

  render() {
    return (
      <section className="section--shop" id="shop">
        <Choice
          onBtnClick={this.handleBtnClick}
          onCheck={this.handleCheck}
          defaultChecked={this.state.checked}
        />
        <main className="shop__content">
          <ItemList
            items={this.state.data}
            onAddToCart={this.props.onAddToCart}
          />
        </main>
      </section>
    );
  }
}

export default Shop;
