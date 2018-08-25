import React from "react";
import logoUrl from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <div className="logo-wrap">
      <a href="" className="logo__link">
        <img src={logoUrl} alt="logo" className="logo__img" />
      </a>
    </div>
  );
};

export default Logo;
