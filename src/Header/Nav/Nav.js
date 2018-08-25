import React from "react";

const Nav = () => {
  return (
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
  );
};

export default Nav;
