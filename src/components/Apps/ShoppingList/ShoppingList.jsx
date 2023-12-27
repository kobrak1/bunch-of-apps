import { useState } from "react";
import "./ShoppingList.scss";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  // function to add item
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };

  // function to remove item
  const onRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="shopping-list">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="item"
          required="true"
          placeholder="Add a new item"
        />
        <button>Add</button>
      </form>{" "}
      <br />
      {items &&
        items.map((item, index) => (
          <li key={index}>
            <div className="content">
              <input type="checkbox" style={{ marginRight: "10px" }} />
              <div className="item">{item}</div>
            </div>
            <span
              className="material-symbols-outlined"
              onClick={() => onRemoveItem(index)}
            >
              delete
            </span>
          </li>
        ))}
    </div>
  );
};

export default ShoppingList;
