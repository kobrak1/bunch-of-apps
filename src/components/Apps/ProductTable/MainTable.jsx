import React from "react";
import ProductInfo from "./ProductInfo";

const MainTable = ({ category, items }) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>{category}</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductInfo items={items} category={category} />
      </tbody>
    </table>
  );
};

export default MainTable;
