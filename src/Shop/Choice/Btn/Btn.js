import React from "react";

const Btn = ({ onBtnClick }) => {
  return (
    <div className="button-wrap">
      <button
        onClick={() => onBtnClick()}
        type=""
        className="ui--btn choice__btn"
      >
        see all products
      </button>
    </div>
  );
};

export default Btn;
