import React from "react";
import ProductInfo from "./ProductInfo";
import "./ProductTable.scss";
import MainTable from "./MainTable";

const ProductTable = () => {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return (
    <div>
      <MainTable category="Fruits" items={products} /> <hr />
      <MainTable category="Vegetables" items={products} />
    </div>
  );
};

export default ProductTable;
