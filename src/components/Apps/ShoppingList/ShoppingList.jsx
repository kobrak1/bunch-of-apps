import { useState } from "react"
import "./ShoppingList.scss"

const ShoppingList = () => {
  const [items, setItems] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems)
    form.reset()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="item" placeholder="Add a new item" />
        <button>Add</button>
      </form> <br />
      <div>
        {items}
      </div> <br />

    </div>
  )
}

export default ShoppingList
