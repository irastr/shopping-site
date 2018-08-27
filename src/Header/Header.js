import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";

import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

const Header = ({ renderCart, cartQuantity }) => {
  return (
    <StickyHeader
      // headerOnly={true}
      header={
        <header className="header">
          <div className="cantainer--header">
            {/* <div className="logo-wrap"> */}
            <Logo />
            {/* </div> */}
            <div className="column-right">
              <Nav />
              <Cart renderCart={renderCart} cartQuantity={cartQuantity} />
            </div>
          </div>
        </header>
      }
    >
      {/* <section>
        <p>
          This section will be what the sticky header scrolls over before
          entering into sticky state. See the gif above or run the test story
          book to see examples.
        </p>
      </section> */}
    </StickyHeader>
  );
};

export default Header;
