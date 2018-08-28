import React from "react";
import Btn from "./Btn/Btn";
import Search from "./Search/Search";

const Choice = ({ onBtnClick, onCheck, defaultChecked, onSearch }) => {
  return (
    <div className="choice-wrap">
      <div className="checkbox-wrap">
        <label className="label-container">
          Men
          <input
            type="checkbox"
            onChange={() => onCheck("men")}
            defaultChecked={defaultChecked}
          />
          <span className="checkmark" />
        </label>

        <label className="label-container">
          Women
          <input
            type="checkbox"
            onChange={() => onCheck("women")}
            defaultChecked={defaultChecked}
          />
          <span className="checkmark" />
        </label>

        {/* <label className="label-container">
          Kids
          <input type="checkbox" />
          <span className="checkmark" />
        </label> */}
      </div>
      {onBtnClick}
      <Search onSearch={onSearch} />

      <Btn onBtnClick={onBtnClick} />
    </div>
  );
};

export default Choice;
