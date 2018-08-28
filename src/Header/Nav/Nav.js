// import React from "react";

// const Nav = () => {
//   return (
//     <nav className="nav">
//       {" "}
//       <ul className="nav__list">
//         <li className="nav__item">
//           <a href="" className="nav__link">
//             Home
//           </a>
//         </li>

//         <li className="nav__item">
//           <a href="" className="nav__link">
//             Products
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="" className="nav__link">
//             Contact
//           </a>
//         </li>
//       </ul>{" "}
//     </nav>
//   );
// };

// export default Nav;

import React, { Component } from "react";

class Nav extends Component {
  state = { isOpen: false };

  handleNavClick = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    return (
      <React.Fragment>
        <a className="nav__burger" href="" onClick={this.handleNavClick}>
          <i class="fas fa-bars" />
        </a>
        {this.state.isOpen ? (
          <nav className="nav--mobile">
            {" "}
            <ul className="nav__list--mobile">
              <li className=" nav__item--mobile">
                <a href="" className="nav__link-mobile">
                  Home
                </a>
              </li>

              <li className=" nav__item--mobile">
                <a href="" className="nav__link-mobile">
                  Products
                </a>
              </li>
              <li className=" nav__item--mobile">
                <a href="" className="nav__link-mobile">
                  Contact
                </a>
              </li>
            </ul>{" "}
          </nav>
        ) : (
          <div />
        )}

        <nav className="nav">
          {" "}
          <ul className="nav__list">
            <li className="nav__item">
              <a href="" className="nav__link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                Contact
              </a>
            </li>
          </ul>{" "}
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
