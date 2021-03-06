import React from "react";

function Categories({ value, onChangeCategory }) {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Sharp", "Closed"];

  return (
    <div className="categories">
      <ul className="categories__items">
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
