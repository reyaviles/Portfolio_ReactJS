import React from "react";
import "../index.css";

function FilterBtn({ button, filter }) {
  return (
    <div className="filter-ctn">
      <h4 className="filter-heading">Project Type: </h4>
      {button.map((cat, i) => {
        return (
          <button className="btn filter-btn" type="button" onClick={() => filter(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBtn;
