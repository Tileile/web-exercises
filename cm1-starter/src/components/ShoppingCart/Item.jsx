import React from "react";

function Item({ item, onDelete }) {
  return (
    <li>
      <div className="flex items-center justify-between w-80 p-2 bg-gray-100 rounded-md shadow-md">
        <span className="text-lg font-semibold text-gray-800">{item.itemName}</span>
        <span className="text-sm text-gray-600 ml-2">Qty: {item.quantity}</span>

        <button
          className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-md px-2 py-1 ml-4"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}



export default Item;
