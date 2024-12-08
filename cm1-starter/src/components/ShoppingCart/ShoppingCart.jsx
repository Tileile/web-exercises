import React, { useState } from "react";
import Item from "./Item";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    itemName: "", quantity

      : ""
  });

  function handleInputChange(event) {
    event.preventDefault()
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  function addItem() {
    if (newItem.itemName.trim() !== "" && newItem.quantity.trim() !== "") {
      setItems((i) => [...i, newItem]);
      setNewItem({ itemName: "", quantity: "" });
    }
  }

  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1 className="font-bold">Shopping Cart</h1>
      <div className="p-3">
        <input
          className="m-4 rounded-md px-3 py-1"
          type="text"
          placeholder="Enter item name..."
          name="itemName"
          value={newItem.itemName}
          onChange={handleInputChange}
        />
        <input
          className="m-4 rounded-md px-3 py-1"
          type="number"
          placeholder="Enter quantity..."
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <button className="bg-green-400 rounded-md p-1" onClick={addItem}>Add Item</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;
