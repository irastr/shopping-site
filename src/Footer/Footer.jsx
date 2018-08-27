import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <div className="container--footer">
        <div className="footer__column-right">
          <h3 className="footer__title">trecking</h3>
          <p className="footer__descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore
            provident, facilis voluptas labore excepturi molestiae. Aliquid a
            perspiciatis soluta! A aspernatur similique fugiat repudiandae nihil
            qui quidem maxime. Nostrum.
          </p>
        </div>
        <div className="footer__column-left">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="" className="" className="footer__nav-link">
                credits
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="" className="footer__nav-link">
                privacy
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="" className="footer__nav-link">
                about
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="" className="footer__nav-link">
                contact
              </a>
            </li>
          </ul>
          <span className="footer__design">Designed by gianluca cosetta</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
