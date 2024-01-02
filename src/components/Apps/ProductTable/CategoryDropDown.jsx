import React from "react";

const CategoryDropdown = ({ categories, onSelectCategory }) => {
  return (
    <div className="drop-down">
      <button>Categories</button>
      <div className="drop-down-content">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onSelectCategory(category)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </li>
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
