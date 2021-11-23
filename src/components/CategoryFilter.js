import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ categories, onCatagoryClick }) {
  const [isSelected, setIsSelected] = useState("All")

  function handleClick(event){
    setIsSelected(event.target.textContent)
    onCatagoryClick(event.target.textContent)
  }

  const renderCatagories = categories.map(category => <button key={uuid()} name={category} onClick={handleClick} className={category === isSelected? "selected":null}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCatagories}
    </div>
  );
}

export default CategoryFilter;
