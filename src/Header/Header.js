import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";

const Header = ({ renderCart }) => {
  return (
    <header className="header">
      <div className="cantainer--header">
        {/* <div className="logo-wrap"> */}
        <Logo />
        {/* </div> */}
        <div className="column-right">
          <Nav />
          <Cart renderContent={renderCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
