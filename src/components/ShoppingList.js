import React, { useState } from "react";
import Item from "./Item";
//import items from "../data/items";

function ShoppingList({ items }) {
  // Step 1: Initialize state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Handle the category selection change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Step 3: Filter items based on selected category
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Step 2: Add the select element */}
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Step 3: Map through filteredItems */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
