import React, { useState } from "react";
import MainTable from "./MainTable";
import CategoryDropdown from "./CategoryDropDown";
import "./ProductTable.scss";

const ProductTable = () => {
  // state that holds the selected category info
  const [selectedCategory, setSelectedCategory] = useState("Fruits");

  // the array that holds the product infos
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Fruits", price: "$6", stocked: false, name: "Banana" },
    { category: "Fruits", price: "$3", stocked: false, name: "Strawberry" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Dairy", price: "$1", stocked: true, name: "Milk" },
    { category: "Dairy", price: "$4", stocked: false, name: "Cheese" },
    { category: "Dairy", price: "$5", stocked: true, name: "Yoghut" },
    { category: "Dairy", price: "$2", stocked: true, name: "Butter" },
  ];

  // a function that extracts the category names from products arrat as a set
  function categoryArray(items) {
    const categories = items.map((item) => item.category);
    const categoryNames = [...new Set(categories)];
    return categoryNames;
  }

  return (
    <div className="product-table">
      <CategoryDropdown
        categories={categoryArray(products)}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <MainTable category={selectedCategory} items={products} />
    </div>
  );
};

export default ProductTable;
