import React, { Component } from "react";
// import Modal from "./Modal/Modal";
import Modal from "react-responsive-modal";
// import CartPage from "./Modal/CartPage/CartPage";
// import { data } from "../../static-data";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Cart extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <div style={styles}>
          {/* <h2>react-responsive-modal</h2> */}
          {/* <button onClick={this.onOpenModal}>Open modal</button> */}
          <a className="cart-link" onClick={this.onOpenModal}>
            <i className="fas fa-shopping-cart" />
            CART
            <span className="cart-counter"> {this.props.cartQuantity} </span>
          </a>
          <Modal open={open} onClose={this.onCloseModal} center>
            <main className="modal-content">{this.props.renderCart} </main>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;

// const Cart = ({ onClick }) => {
//   return (
//     <a className="cart-link" onClick={onClick}>
//       <i className="fas fa-shopping-cart" />
//     </a>
//   );
// };

// export default Cart;
