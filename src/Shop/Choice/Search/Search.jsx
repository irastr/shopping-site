import React from "react";

const Search = ({ onSearch }) => {
  return (
    // <div className="group">
    //   <input type="text" onChange={onSearch} />
    //   <span class="bar" />
    //   <label>Ваше имя</label>
    // </div>

    <div class="search__input-wrap">
      <input
        className="search__input"
        type="text"
        required
        onChange={onSearch}
      />
      <span class="bar" />
      <label>What do you what to find?</label>
    </div>
  );
};

export default Search;
